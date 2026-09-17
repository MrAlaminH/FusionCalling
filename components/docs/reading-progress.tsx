"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const main = document.querySelector("main");
        const el = main ?? document.documentElement;
        const total =
          el.scrollHeight - window.innerHeight - (main ? 80 : 0);
        const scrolled = window.scrollY - (main ? 80 : 0);
        const pct =
          total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
        // Direct transform write: no per-frame re-render, and scaleX keeps
        // the compositor out of layout (width transitions never settled —
        // they were retargeted on every scroll frame).
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${pct})`;
        }
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-light via-brand to-brand-strong"
      />
    </div>
  );
}
