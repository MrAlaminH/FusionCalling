"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Phone } from "lucide-react";

interface SlideToCallProps {
  webhookUrl?: string;
  onCallComplete?: () => void;
  phoneNumber?: string;
}

type TouchEvent = React.TouchEvent<HTMLDivElement>;
type MouseEvent = React.MouseEvent<HTMLDivElement> | globalThis.MouseEvent;

const SlideToCall: React.FC<SlideToCallProps> = ({
  webhookUrl,
  onCallComplete,
  phoneNumber = "+1234567890",
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const [isCallTriggered, setIsCallTriggered] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerWidth = useRef<number>(0);

  // Remove the fixed maxWidth and use dynamic width from the container
  const handleWidth = 48; // Width of the sliding handle
  const threshold = 0.9; // 90% threshold for triggering the call

  const updateContainerWidth = useCallback(() => {
    if (sliderRef.current) {
      containerWidth.current = sliderRef.current.getBoundingClientRect().width;
    }
  }, []);

  // Calculate effective width dynamically
  const getEffectiveWidth = useCallback(() => {
    return containerWidth.current - handleWidth;
  }, []);

  const triggerHapticFeedback = useCallback((): void => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }, []);

  const triggerWebhook = useCallback(async (): Promise<void> => {
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber,
            timestamp: new Date().toISOString(),
            event: "call_initiated",
          }),
        });

        if (!response.ok) {
          console.error("Webhook trigger failed");
        }
      } catch (error) {
        console.error("Error triggering webhook:", error);
      }
    }
  }, [webhookUrl, phoneNumber]);

  const initiateCall = useCallback(async (): Promise<void> => {
    setIsCallTriggered(true);
    triggerHapticFeedback();
    setShowSuccess(true);

    await triggerWebhook();
    onCallComplete?.();

    setTimeout(() => {
      window.location.href = `tel:${phoneNumber}`;

      setTimeout(() => {
        setIsCallTriggered(false);
        setShowSuccess(false);
        setPosition(0);
      }, 2000);
    }, 1000);
  }, [triggerHapticFeedback, triggerWebhook, onCallComplete, phoneNumber]);

  const handleEnd = useCallback((): void => {
    const effectiveWidth = getEffectiveWidth();
    const thresholdPosition = effectiveWidth * threshold;

    if (position >= thresholdPosition && !isCallTriggered) {
      setPosition(effectiveWidth);
      initiateCall();
    } else {
      setPosition(0);
    }
    setIsDragging(false);
  }, [position, isCallTriggered, getEffectiveWidth, initiateCall]);

  const calculatePosition = useCallback(
    (clientX: number, rect: DOMRect): number => {
      const effectiveWidth = getEffectiveWidth();
      const offsetX = clientX - rect.left - handleWidth / 2; // Center the handle on cursor
      return Math.min(Math.max(0, offsetX), effectiveWidth);
    },
    [getEffectiveWidth]
  );

  const handleMove = useCallback(
    (clientX: number): void => {
      if (!isDragging || !sliderRef.current) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const newPosition = calculatePosition(clientX, sliderRect);
      setPosition(newPosition);

      // Haptic feedback at every quarter
      const effectiveWidth = getEffectiveWidth();
      if (Math.floor(newPosition % (effectiveWidth / 4)) === 0) {
        triggerHapticFeedback();
      }
    },
    [isDragging, calculatePosition, getEffectiveWidth, triggerHapticFeedback]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent): void => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseDown = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsDragging(true);
    triggerHapticFeedback();
  };

  const handleTouchStart = (e: TouchEvent): void => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent): void => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    updateContainerWidth();

    const resizeObserver = new ResizeObserver(updateContainerWidth);
    if (sliderRef.current) {
      resizeObserver.observe(sliderRef.current);
    }

    const handleMouseMoveGlobal = (e: globalThis.MouseEvent): void => {
      handleMouseMove(e);
    };

    const handleMouseUpGlobal = (): void => {
      if (isDragging) {
        handleEnd();
      }
    };

    window.addEventListener("mousemove", handleMouseMoveGlobal);
    window.addEventListener("mouseup", handleMouseUpGlobal);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
      window.removeEventListener("mouseup", handleMouseUpGlobal);
    };
  }, [isDragging, handleMouseMove, handleEnd, updateContainerWidth]);

  const progressWidth = Math.min((position / getEffectiveWidth()) * 100, 100);

  return (
    <div className="relative w-full h-12 bg-gray-800 rounded-full shadow-lg overflow-hidden">
      <div
        ref={sliderRef}
        className="w-full h-full"
        onMouseMove={
          handleMouseMove as (e: React.MouseEvent<HTMLDivElement>) => void
        }
        onMouseUp={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        {/* Progress bar */}
        <div
          className={`absolute top-0 left-0 h-full transition-all duration-200 
            ${showSuccess ? "bg-green-500" : "bg-orange-500"} rounded-full`}
          style={{
            width: `${progressWidth}%`,
            transition: isDragging ? "none" : "width 0.3s ease-out",
          }}
        />

        {/* Sliding handle */}
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-12 h-12 
            ${showSuccess ? "bg-green-500" : "bg-orange-500"}
            rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing
            transition-all duration-200 ${isDragging ? "scale-105" : ""}`}
          style={{
            transform: `translate(${position}px, -50%)`,
            transition: isDragging ? "none" : "all 0.3s ease-out",
          }}
          onMouseDown={handleMouseDown}
        >
          {showSuccess ? (
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

        {/* Text overlay */}
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-white font-semibold transition-opacity duration-300
            ${showSuccess ? "opacity-0" : "opacity-100"}`}
        >
          {progressWidth > 90 ? "Release to Call" : "→ SLIDE TO CALL"}
        </span>

        {/* Success message */}
        {showSuccess && (
          <span
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-white font-semibold animate-fade-in"
          >
            Initiating Call...
          </span>
        )}
      </div>
    </div>
  );
};

export default SlideToCall;
