"use client";

import { useRef, useEffect, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Tailwind animation class — one of the custom entrance animations. */
  animation?: "animate-fade-in-up" | "animate-fade-in-left" | "animate-fade-in-right" | "animate-scale-in";
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Animation duration in seconds. Appended as a style; the CSS default is 0.8s. */
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
 * Replaces framer-motion `useInView` + `motion.div` with CSS-only animations.
 *
 * Uses IntersectionObserver to apply the animation class when the element
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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

  return (
    <Tag
      ref={ref}
      className={cn(
        "opacity-0", // hidden until triggered
        isVisible && animation,
        className,
      )}
      style={{
        animationDelay: delay > 0 ? `${delay}s` : undefined,
        animationDuration: duration ? `${duration}s` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
