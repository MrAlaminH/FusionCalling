"use client";

import React, { useState, useRef, useCallback, useEffect, useReducer } from "react";
import { Phone } from "lucide-react";
import Toast from "@/components/ui/Toast";
import { shouldReleaseCall } from "@/lib/slide-to-call";
import { transitionCallPhase } from "@/lib/slide-to-call-machine";

interface SlideToCallProps {
  /** Fired when the call request is accepted (phase → done). The parent owns
      any confirmation UI and input reset — the slider no longer reaches down. */
  onCallComplete?: () => void;
  phoneNumber?: string;
  name?: string;
  email?: string;
  selectedAgent?: string;
  disabled?: boolean;
}

const HANDLE_WIDTH = 48;
const VIBRATION_DURATION = 50;
const COUNTDOWN_SECONDS = 10;
// ponytail: a hung /api/webhook must fail into `failed` (retryable) instead of
// stranding the slider on "Connecting…" forever. 15s ≈ generous dial timeout;
// upgrade path = server-side SLA or streaming status.
const CALL_TIMEOUT_MS = 15_000;
const RESET_DELAY = 6000;
const VALIDATION_MESSAGE =
  "Please fill in all fields correctly: valid name, valid email, phone number, and select an agent";

export default function SlideToCall({
  onCallComplete,
  phoneNumber,
  name,
  email,
  selectedAgent,
  disabled,
}: SlideToCallProps) {
  const [phase, dispatchPhase] = useReducer(transitionCallPhase, "idle");
  // Continuous drag state lives beside the phase machine; the two never mix —
  // countdown/calling/done are independent of where the handle sits.
  const [drag, setDrag] = useState({ isDragging: false, position: 0 });
  const [countdown, setCountdown] = useState<number | null>(null);

  const [showToast, setShowToast] = useState(false);
  const [toastClosing, setToastClosing] = useState(false);
  const [toastMessage, setToastMessage] = useState(VALIDATION_MESSAGE);

  const sliderRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  // Mirror of drag.position so pointerup can read the final position without
  // running logic inside a state updater (updaters double-invoke in StrictMode).
  const positionRef = useRef(0);
  const dragStartRef = useRef(0);
  // Latest contact details: the 10s countdown interval captures placeCall once,
  // so without this mirror, edits made mid-countdown would call the old number.
  const contactRef = useRef({ phoneNumber, name, email, selectedAgent });
  contactRef.current = { phoneNumber, name, email, selectedAgent };
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Spring the handle home + clear transient display state. Shared by the
  // failure path and the post-success safety net.
  const resetDrag = useCallback(() => {
    setDrag({ isDragging: false, position: 0 });
    positionRef.current = 0;
    setCountdown(null);
  }, []);

  // Green states: a release was accepted and the call pipeline is running.
  const isSuccess = phase === "countdown" || phase === "calling" || phase === "done";
  const isResting = phase === "idle" || phase === "failed";

  // Two-phase close: play the toast's exit transition, then unmount.
  // The 200ms must match Toast's duration-200 exit transition.
  const closeToast = useCallback(() => {
    setToastClosing(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
      setToastClosing(false);
    }, 200);
  }, []);

  const showToastMessage = useCallback(
    (message: string) => {
      setToastMessage(message);
      setToastClosing(false);
      setShowToast(true);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      toastTimerRef.current = setTimeout(closeToast, 4000);
    },
    [closeToast]
  );

  useEffect(
    () => () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    },
    []
  );

  const getEffectiveWidth = useCallback(() => {
    if (!widthRef.current && sliderRef.current) {
      widthRef.current =
        sliderRef.current.getBoundingClientRect().width - HANDLE_WIDTH;
    }
    return widthRef.current;
  }, []);

  const vibrate = useCallback(() => {
    if (navigator.vibrate) {
      navigator.vibrate(VIBRATION_DURATION);
    }
  }, []);

  const placeCall = useCallback(async () => {
    dispatchPhase({ type: "CALLING" });
    setCountdown(null);

    try {
      const { phoneNumber, name, email, selectedAgent } = contactRef.current;
      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, name, email, selectedAgent }),
        signal: AbortSignal.timeout(CALL_TIMEOUT_MS),
      });

      if (!response.ok) throw new Error("Call request failed");

      dispatchPhase({ type: "CALL_OK" });
      onCallComplete?.();

      // Safety net for the (now parent-driven) success flow: return to idle
      // even if the parent keeps us mounted.
      resetTimerRef.current = setTimeout(() => {
        dispatchPhase({ type: "RESET" });
        resetDrag();
      }, RESET_DELAY);
    } catch (error) {
      console.error("Call initiation failed:", error);
      dispatchPhase({ type: "CALL_FAIL" });
      resetDrag();
      showToastMessage(
        "The call couldn't start. Please check your details and try again."
      );
    }
  }, [onCallComplete, showToastMessage, resetDrag]);

  const initiateCall = useCallback(() => {
    if (disabled) return;
    // Machine guard: a call can only (re)start from idle or failed.
    if (!isResting) return;

    vibrate();
    dispatchPhase({ type: "START" });
    setCountdown(COUNTDOWN_SECONDS);

    // Hold the dial for COUNTDOWN_SECONDS so the user has time to get
    // ready to answer, with a haptic tick each second.
    let remaining = COUNTDOWN_SECONDS;
    countdownTimerRef.current = setInterval(() => {
      remaining -= 1;
      vibrate();
      if (remaining > 0) {
        setCountdown(remaining);
        return;
      }
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
      countdownTimerRef.current = null;
      void placeCall();
    }, 1000);
  }, [disabled, isResting, vibrate, placeCall]);

  const handleDragEnd = useCallback(() => {
    if (!isResting) return;
    const effectiveWidth = getEffectiveWidth();
    const elapsed = performance.now() - dragStartRef.current;
    const position = positionRef.current;

    if (shouldReleaseCall(position, effectiveWidth, elapsed)) {
      setDrag({ isDragging: false, position: effectiveWidth });
      initiateCall();
    } else {
      // Bounce-back must zero the mirror too — a stale position ≥ the flick
      // threshold would let the next tap pass shouldReleaseCall spuriously.
      resetDrag();
    }
  }, [isResting, getEffectiveWidth, initiateCall, resetDrag]);

  const handleDrag = useCallback(
    (clientX: number) => {
      if (!sliderRef.current || !drag.isDragging) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const effectiveWidth = getEffectiveWidth();
      const offsetX = clientX - rect.left - HANDLE_WIDTH / 2;
      const newPosition = Math.min(Math.max(0, offsetX), effectiveWidth);

      positionRef.current = newPosition;
      setDrag((prev) => ({ ...prev, position: newPosition }));

      // Vibrate at quarters
      if (Math.floor(newPosition % (effectiveWidth / 4)) === 0) {
        vibrate();
      }
    },
    [drag.isDragging, getEffectiveWidth, vibrate]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (!isResting) return;
      if (disabled) {
        showToastMessage(VALIDATION_MESSAGE);
        return;
      }
      // Re-measure per gesture: a cached width goes stale after resize/rotation.
      widthRef.current = 0;
      // Every gesture starts from rest (handleDrag can't run on this event —
      // its closure still sees the old isDragging=false).
      positionRef.current = 0;
      dragStartRef.current = performance.now();
      vibrate();
      setDrag((prev) => ({ ...prev, isDragging: true }));
      handleDrag(e.clientX);
    },
    [isResting, disabled, vibrate, handleDrag, showToastMessage]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (drag.isDragging) {
        handleDrag(e.clientX);
      }
    },
    [drag.isDragging, handleDrag]
  );

  const progressWidth = Math.min(
    (drag.position / getEffectiveWidth()) * 100,
    100
  );

  return (
    <div className="relative">
      {showToast && (
        <div className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 z-50 w-full">
          <Toast
            message={toastMessage}
            type="error"
            closing={toastClosing}
            onClose={closeToast}
          />
        </div>
      )}

      <div
        className={`relative w-full h-12 bg-gray-800 rounded-full shadow-lg overflow-hidden ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <div
          ref={sliderRef}
          className="w-full h-full"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handleDragEnd}
          onPointerLeave={handleDragEnd}
        >
          {/* Progress bar — scaleX (compositor-only) instead of animated width */}
          <div
            className={`absolute top-0 left-0 h-full w-full origin-left rounded-full ${
              isSuccess ? "bg-green-500" : "bg-orange-500"
            }`}
            style={{
              transform: `scaleX(${progressWidth / 100})`,
              transition: drag.isDragging
                ? "none"
                : "transform 0.3s ease-out",
            }}
          />

          {/* Handle */}
          <div
            className={`absolute top-1/2 left-0 w-12 h-12 ${
              isSuccess ? "bg-green-500" : "bg-orange-500"
            } rounded-full flex items-center justify-center cursor-grab`}
            style={{
              transform: `translate(${drag.position}px, -50%)${
                drag.isDragging ? " scale(1.05)" : ""
              }`,
              transition: drag.isDragging
                ? "none"
                : "transform 0.3s ease-out, background-color 0.3s ease-out",
            }}
          >
            {isSuccess ? (
              <svg
                className="w-6 h-6 text-white animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <Phone className="w-6 h-6 text-black" />
            )}
          </div>

          {/* Text */}
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white font-semibold transition-opacity duration-300 ${
                isSuccess ? "opacity-0" : "opacity-100"
              }`}
          >
            {progressWidth > 90 ? "Release to Call" : "→ SLIDE TO CALL"}
          </span>

          {isSuccess && (
            <span
              key={countdown ?? "connecting"}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white font-semibold animate-fade-in"
            >
              {countdown !== null
                ? `Answer in ${countdown}s…`
                : "Connecting…"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
