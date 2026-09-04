"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

/**
 * One marquee row. Replaces the framer-motion implementation (useScroll +
 * useVelocity + useSpring + useAnimationFrame) with an equivalent rAF loop:
 * scroll velocity is measured per frame, smoothed, and used to modulate speed
 * and flip direction — same visual behavior, no animation library.
 */
function MarqueeRow({
  children,
  baseVelocity,
  className,
}: {
  children: string;
  baseVelocity: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [repetitions, setRepetitions] = useState(1);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        if (textWidth > 0) {
          setRepetitions(Math.ceil(containerWidth / textWidth) + 2);
        }
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  useEffect(() => {
    let raf = 0;
    let baseX = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let smoothVelocity = 0;
    const directionFactor = { current: 1 };

    const tick = (now: number) => {
      const delta = Math.min((now - lastT) / 1000, 0.1); // seconds, capped
      lastT = now;

      const scrollY = window.scrollY;
      const rawVelocity = delta > 0 ? (scrollY - lastY) / delta : 0; // px/s
      lastY = scrollY;

      // Exponential smoothing ≈ the previous spring (damping 50, stiffness 400).
      const tau = 0.12;
      smoothVelocity +=
        (rawVelocity - smoothVelocity) * (1 - Math.exp(-delta / tau));

      const velocityFactor = smoothVelocity / 200; // maps [0, 1000] → [0, 5], unclamped

      if (velocityFactor < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor > 0) {
        directionFactor.current = 1;
      }

      let moveBy = directionFactor.current * baseVelocity * delta;
      moveBy += directionFactor.current * moveBy * velocityFactor;
      baseX += moveBy;

      if (contentRef.current) {
        const x = wrap(-100 / repetitions, 0, baseX);
        contentRef.current.style.transform = `translate3d(${x}%,0,0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [baseVelocity, repetitions]);

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap relative"
      ref={containerRef}
    >
      <div ref={contentRef} className={cn("inline-block", className)}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {children}{" "}
          </span>
        ))}
      </div>
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-black via-black to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-black via-black to-transparent"></div>
    </div>
  );
}

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reduce, setReduce] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Reduced motion: return static rows immediately so users who prefer
  // reduced motion never see an aria-hidden placeholder while scrolling.
  if (reduce) {
    return (
      <section ref={wrapperRef} className="relative w-full space-y-6">
        <div className="w-full overflow-hidden whitespace-nowrap relative">
          <div className={cn("inline-block", className)}>
            <span>{text} </span>
          </div>
        </div>
        <div className="w-full overflow-hidden whitespace-nowrap relative">
          <div className={cn("inline-block", className)}>
            <span>{text} </span>
          </div>
        </div>
      </section>
    );
  }

  if (!isVisible) {
    return (
      <section
        ref={wrapperRef}
        className="relative w-full space-y-6"
        aria-hidden="true"
      >
        <div className="w-full overflow-hidden whitespace-nowrap relative">
          <div className={cn("inline-block", className)}>
            <span>{text} </span>
          </div>
        </div>
        <div className="w-full overflow-hidden whitespace-nowrap relative">
          <div className={cn("inline-block", className)}>
            <span>{text} </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapperRef} className="relative w-full space-y-6">
      <MarqueeRow baseVelocity={default_velocity} className={className}>
        {text}
      </MarqueeRow>
      <MarqueeRow baseVelocity={-default_velocity} className={className}>
        {text}
      </MarqueeRow>
    </section>
  );
}
