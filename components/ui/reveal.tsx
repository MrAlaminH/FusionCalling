"use client";

import { useRef, useEffect, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Entrance direction. Defaults to a fade-up. */
  animation?: "animate-fade-in-up" | "animate-fade-in-left" | "animate-fade-in-right" | "animate-scale-in";
  /** Delay in seconds before the transition starts. */
  delay?: number;
  /** Transition duration in seconds. */
  duration?: number;
  /** Additional classes on the wrapper element. */
  className?: string;
  /** HTML tag for the wrapper. */
  as?: ElementType;
  /** Only animate once (default true). */
  once?: boolean;
}

/**
 * Lightweight scroll-triggered entrance animation.
 * Replaces framer-motion `useInView` + `motion.div` with CSS-only
 * opacity/transform transitions (no keyframes or JS animation needed).
 *
 * Uses IntersectionObserver to toggle the visible classes when the element
 * scrolls into view. Respects `prefers-reduced-motion` via the global CSS rule.
 *
 * @example
 * ```tsx
 * <Reveal animation="animate-fade-in-up" delay={0.3}>
 *   <YourContent />
 * </Reveal>
 * ```
 */
export function Reveal({
  children,
  animation = "animate-fade-in-up",
  delay = 0,
  duration,
  className,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(
    typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  // Hidden state per direction; when visible, all offsets reset to zero.
  const hiddenOffset =
    animation === "animate-fade-in-left"
      ? "-translate-x-5"
      : animation === "animate-fade-in-right"
        ? "translate-x-5"
        : animation === "animate-scale-in"
          ? "scale-95"
          : "translate-y-5";

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : cn("opacity-0", hiddenOffset),
        className,
      )}
      style={{
        transitionDelay: delay > 0 ? `${delay}s` : undefined,
        transitionDuration: duration ? `${duration}s` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
