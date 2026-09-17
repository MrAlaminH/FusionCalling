"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Maximize,
  Minimize,
} from "lucide-react";
import { slides } from "./slides";

export default function SalesDeck() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      setIndex(Math.min(total - 1, Math.max(0, next)));
    },
    [total]
  );

  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  // The first slide plays its full staggered choreography; after the first
  // manual navigation, entrance animation collapses to instant so arrow-key
  // navigation (dozens of presses per presentation) feels immediate.
  // Deep-linking via hash keeps the full entrance on purpose.
  const [hasNavigated, setHasNavigated] = useState(false);
  const navNext = useCallback(() => {
    setHasNavigated(true);
    next();
  }, [next]);
  const navPrev = useCallback(() => {
    setHasNavigated(true);
    prev();
  }, [prev]);
  const navGo = useCallback(
    (target: number) => {
      setHasNavigated(true);
      go(target);
    },
    [go]
  );

  const toggleFs = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  // Deep-link support: /deck#7 opens slide 7; navigation updates the hash so
  // a refresh (or a link pasted into a meeting chat) keeps its place.
  useEffect(() => {
    const fromHash = () => {
      const m = window.location.hash.match(/^#(\d+)$/);
      if (m) go(parseInt(m[1], 10) - 1);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [go]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          navNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          navPrev();
          break;
        case "Home":
          navGo(0);
          break;
        case "End":
          navGo(total - 1);
          break;
        case "Escape":
          setOverview(false);
          break;
        default:
          if (e.key === "o" || e.key === "O") setOverview((v) => !v);
          if (e.key === "f" || e.key === "F") toggleFs();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navNext, navPrev, navGo, total, toggleFs]);

  useEffect(() => {
    const onFsChange = () => setIsFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
    if (Math.abs(dx) > 48) {
      if (dx < 0) navNext();
      else navPrev();
    }
    touchX.current = null;
  };

  const pct = total > 0 ? ((index + 1) / total) * 100 : 0;
  const Current = slides[index]?.Comp ?? slides[0].Comp;

  return (
    <main
      className="fixed inset-0 select-none overflow-hidden bg-black text-white"
      aria-roledescription="presentation"
      aria-label="Fusion Calling sales deck"
    >
      {/* Slide stage — keyed so entrance animations replay on every visit;
          after the first manual navigation, .deck-nav-instant collapses them
          to instant (see globals.css) so keyboard nav feels immediate */}
      <div
        className="absolute inset-0"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={index}
          className={`h-full w-full animate-fade-in ${
            hasNavigated ? "deck-nav-instant" : ""
          }`}
        >
          <Current />
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-white/10">
        <div
          className="h-full w-full origin-left bg-gradient-to-r from-brand-strong via-brand to-brand-light transition-transform duration-500 ease-[var(--ease-drawer)]"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>

      {/* Wordmark */}
      <div className="absolute bottom-5 left-6 z-20 flex items-center gap-2 text-sm font-semibold tracking-wide text-white/60">
        <Image
          src="/logo.webp"
          alt=""
          width={18}
          height={17}
          aria-hidden
          className="rounded-[3px]"
        />
        <span className="font-display">
          Fusion<span className="text-brand">Calling</span>
        </span>
      </div>

      {/* Bottom-right controls */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setOverview((v) => !v)}
          aria-label="Slide overview (O)"
          className="rounded-btn p-2.5 text-white/60 transition-premium hover:bg-white/10 hover:text-white"
        >
          <Grid3X3 className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={toggleFs}
          aria-label="Toggle fullscreen (F)"
          className="rounded-btn p-2.5 text-white/60 transition-premium hover:bg-white/10 hover:text-white"
        >
          {isFs ? <Minimize className="h-4 w-4" aria-hidden /> : <Maximize className="h-4 w-4" aria-hidden />}
        </button>
        <span className="ml-1 rounded-pill bg-white/10 px-3 py-1 font-display text-xs tabular-nums text-white/80">
          {index + 1} / {total}
        </span>
      </div>

      {/* Side arrows */}
      <button
        type="button"
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-pill p-3 text-white/40 transition-premium hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-0"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden />
      </button>
      <button
        type="button"
        onClick={next}
        disabled={index === total - 1}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-pill p-3 text-white/40 transition-premium hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-0"
      >
        <ChevronRight className="h-6 w-6" aria-hidden />
      </button>

      {/* Overview grid */}
      {overview ? (
        <div
          className="absolute inset-0 z-40 animate-fade-in overflow-y-auto bg-black/95 p-8 backdrop-blur-sm md:p-12"
          role="dialog"
          aria-label="All slides"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  navGo(i);
                  setOverview(false);
                }}
                className={`group flex items-center gap-4 rounded-card border p-4 text-left transition-premium ${
                  i === index
                    ? "border-brand bg-brand/10"
                    : "border-white/10 bg-white/5 hover:border-brand/50 hover:bg-white/10"
                }`}
              >
                <span
                  className={`font-display text-lg tabular-nums ${
                    i === index ? "text-brand" : "text-white/40 group-hover:text-brand"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-sm font-medium text-white/90">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-center text-xs text-white/40">
            Click a slide to jump — Esc to close
          </p>
        </div>
      ) : null}
    </main>
  );
}
