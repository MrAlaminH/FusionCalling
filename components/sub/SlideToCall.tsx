"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Phone } from "lucide-react";
import Toast from "@/components/ui/Toast";
import { shouldReleaseCall } from "@/lib/slide-to-call";

interface SlideToCallProps {
  onCallComplete?: () => void;
  phoneNumber?: string;
  name?: string;
  email?: string;
  selectedAgent?: string;
  resetInputs: () => void;
  disabled?: boolean;
}

const HANDLE_WIDTH = 48;
const VIBRATION_DURATION = 50;
const COUNTDOWN_SECONDS = 10;
const RESET_DELAY = 6000;
const VALIDATION_MESSAGE =
  "Please fill in all fields correctly: valid name, valid email, phone number, and select an agent";

export default function SlideToCall({
  onCallComplete,
  phoneNumber,
  name,
  email,
  selectedAgent,
  resetInputs,
  disabled,
}: SlideToCallProps) {
  const [slideState, setSlideState] = useState({
    isDragging: false,
    position: 0,
    isSuccess: false,
  });
  const [countdown, setCountdown] = useState<number | null>(null);

  const [showToast, setShowToast] = useState(false);
  const [toastClosing, setToastClosing] = useState(false);
  const [toastMessage, setToastMessage] = useState(VALIDATION_MESSAGE);

  const sliderRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const callInitiatedRef = useRef(false);
  const dragStartRef = useRef(0);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    try {
      setCountdown(null);

      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, name, email, selectedAgent }),
      });

      if (!response.ok) throw new Error("Call request failed");

      onCallComplete?.();
      resetInputs();

      setTimeout(() => {
        setSlideState({ isDragging: false, position: 0, isSuccess: false });
        callInitiatedRef.current = false;
      }, RESET_DELAY);
    } catch (error) {
      console.error("Call initiation failed:", error);
      setSlideState({ isDragging: false, position: 0, isSuccess: false });
      callInitiatedRef.current = false;
      setCountdown(null);
      showToastMessage(
        "The call couldn't start. Please check your details and try again."
      );
    }
  }, [
    phoneNumber,
    name,
    email,
    selectedAgent,
    onCallComplete,
    resetInputs,
    showToastMessage,
  ]);

  const initiateCall = useCallback(() => {
    if (disabled) return;
    if (callInitiatedRef.current) return;
    callInitiatedRef.current = true;

    vibrate();
    setSlideState((prev) => ({ ...prev, isSuccess: true }));
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
      void placeCall();
    }, 1000);
  }, [disabled, vibrate, placeCall]);

  const handleDragEnd = useCallback(() => {
    const effectiveWidth = getEffectiveWidth();
    const elapsed = performance.now() - dragStartRef.current;

    setSlideState((prev) => {
      if (prev.isSuccess) return prev;
      if (shouldReleaseCall(prev.position, effectiveWidth, elapsed)) {
        initiateCall();
        return { ...prev, position: effectiveWidth, isDragging: false };
      }
      return { ...prev, position: 0, isDragging: false };
    });
  }, [getEffectiveWidth, initiateCall]);

  const handleDrag = useCallback(
    (clientX: number) => {
      if (!sliderRef.current || !slideState.isDragging) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const effectiveWidth = getEffectiveWidth();
      const offsetX = clientX - rect.left - HANDLE_WIDTH / 2;
      const newPosition = Math.min(Math.max(0, offsetX), effectiveWidth);

      setSlideState((prev) => ({ ...prev, position: newPosition }));

      // Vibrate at quarters
      if (Math.floor(newPosition % (effectiveWidth / 4)) === 0) {
        vibrate();
      }
    },
    [slideState.isDragging, getEffectiveWidth, vibrate]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (slideState.isSuccess) return;
      if (disabled) {
        showToastMessage(VALIDATION_MESSAGE);
        return;
      }
      // Re-measure per gesture: a cached width goes stale after resize/rotation.
      widthRef.current = 0;
      dragStartRef.current = performance.now();
      vibrate();
      setSlideState((prev) => ({ ...prev, isDragging: true }));
      handleDrag(e.clientX);
    },
    [slideState.isSuccess, vibrate, handleDrag, disabled, showToastMessage]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (slideState.isDragging) {
        handleDrag(e.clientX);
      }
    },
    [slideState.isDragging, handleDrag]
  );

  const progressWidth = Math.min(
    (slideState.position / getEffectiveWidth()) * 100,
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
              slideState.isSuccess ? "bg-green-500" : "bg-orange-500"
            }`}
            style={{
              transform: `scaleX(${progressWidth / 100})`,
              transition: slideState.isDragging
                ? "none"
                : "transform 0.3s ease-out",
            }}
          />

          {/* Handle */}
          <div
            className={`absolute top-1/2 left-0 w-12 h-12 ${
              slideState.isSuccess ? "bg-green-500" : "bg-orange-500"
            } rounded-full flex items-center justify-center cursor-grab`}
            style={{
              transform: `translate(${slideState.position}px, -50%)${
                slideState.isDragging ? " scale(1.05)" : ""
              }`,
              transition: slideState.isDragging
                ? "none"
                : "transform 0.3s ease-out, background-color 0.3s ease-out",
            }}
          >
            {slideState.isSuccess ? (
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
                slideState.isSuccess ? "opacity-0" : "opacity-100"
              }`}
          >
            {progressWidth > 90 ? "Release to Call" : "→ SLIDE TO CALL"}
          </span>

          {slideState.isSuccess && (
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
