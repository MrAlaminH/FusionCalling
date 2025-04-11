"use client";

import React, { useState, useRef, useCallback } from "react";
import { Phone } from "lucide-react";
import Toast from "@/components/ui/Toast";

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
const THRESHOLD = 0.9;
const VIBRATION_DURATION = 50;
const SUCCESS_DELAY = 6000;
const RESET_DELAY = 6000;

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

  const [showToast, setShowToast] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const callInitiatedRef = useRef(false);

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

  const initiateCall = useCallback(async () => {
    if (disabled) return;
    if (callInitiatedRef.current) return;
    callInitiatedRef.current = true;

    try {
      vibrate();
      setSlideState((prev) => ({ ...prev, isSuccess: true }));

      console.log("Sending values:", {
        phoneNumber,
        name,
        email,
        selectedAgent,
      });

      const response = await fetch("/api/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, name, email, selectedAgent }),
      });

      if (!response.ok) throw new Error("Webhook failed");

      onCallComplete?.();

      // Reset inputs first
      resetInputs();
      console.log("Resetting inputs...");

      // Schedule call initiation and reset
      setTimeout(() => {
        if (phoneNumber) window.location.href = `tel:${phoneNumber}`;

        setTimeout(() => {
          setSlideState({ isDragging: false, position: 0, isSuccess: false });
          callInitiatedRef.current = false;
        }, RESET_DELAY);
      }, SUCCESS_DELAY);
    } catch (error) {
      console.error("Call initiation failed:", error);
      setSlideState({ isDragging: false, position: 0, isSuccess: false });
      callInitiatedRef.current = false;
    }
  }, [
    phoneNumber,
    name,
    email,
    selectedAgent,
    onCallComplete,
    vibrate,
    resetInputs,
    disabled,
  ]);

  const handleDragEnd = useCallback(() => {
    const effectiveWidth = getEffectiveWidth();
    const thresholdPosition = effectiveWidth * THRESHOLD;

    setSlideState((prev) => {
      if (prev.position >= thresholdPosition && !prev.isSuccess) {
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
      if (disabled) {
        setShowToast(true);
        // Show toast for 4 seconds
        const timeoutId = setTimeout(() => setShowToast(false), 4000);
        return () => clearTimeout(timeoutId);
      }
      vibrate();
      setSlideState((prev) => ({ ...prev, isDragging: true }));
      handleDrag(e.clientX);
    },
    [vibrate, handleDrag, disabled]
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
            message="Please fill in all fields correctly: valid name, valid email, phone number, and select an agent"
            type="error"
            onClose={() => setShowToast(false)}
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
          {/* Progress bar */}
          <div
            className={`absolute top-0 left-0 h-full ${
              slideState.isSuccess ? "bg-green-500" : "bg-orange-500"
            } rounded-full transition-all duration-200`}
            style={{
              width: `${progressWidth}%`,
              transition: slideState.isDragging
                ? "none"
                : "width 0.3s ease-out",
            }}
          />

          {/* Handle */}
          <div
            className={`absolute top-1/2 left-0 w-12 h-12 ${
              slideState.isSuccess ? "bg-green-500" : "bg-orange-500"
            } rounded-full flex items-center justify-center cursor-grab
              transition-all duration-200 ${
                slideState.isDragging ? "scale-105" : ""
              }`}
            style={{
              transform: `translate(${slideState.position}px, -50%)`,
              transition: slideState.isDragging ? "none" : "all 0.3s ease-out",
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
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white font-semibold animate-fade-in"
            >
              Initiating Call...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
