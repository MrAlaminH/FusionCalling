"use client";

import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyMobileCtaProps {
  /** Where the button links. Defaults to the booking calendar. */
  href?: string;
  label?: string;
  /** Show after scrolling this many px (defaults to past the hero). */
  triggerAfterPx?: number;
}

/**
 * Scroll-triggered, mobile-only CTA bar pinned to the bottom.
 * Right-side padding keeps it clear of the fixed chat button (bottom-right).
 */
export default function StickyMobileCta({
  href = "#calendar",
  label = "Book a Free Call",
  triggerAfterPx = 600,
}: StickyMobileCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > triggerAfterPx);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerAfterPx]);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      {/* Fade out the very bottom edge into the bar */}
      <div className="bg-gradient-to-t from-black to-transparent h-4 -mb-4" />
      <div className="bg-black/95 backdrop-blur border-t border-brand/30 px-4 py-3 pr-20">
        <a
          href={href}
          className="flex w-full items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-brand to-brand-strong px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/30"
        >
          <PhoneCall className="h-4 w-4" />
          {label}
        </a>
      </div>
    </div>
  );
}
