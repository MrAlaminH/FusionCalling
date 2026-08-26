"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, useState } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // Defer PostHog init until after first paint + idle so ~50-100 KB of
  // analytics JS never competes with hydration/LCP during the load window.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = () => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "",
        capture_pageleave: true,
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      });
      setReady(true);
    };

    if ("requestIdleCallback" in window) {
      // Generous timeout: this must never fire inside the LCP window (fonts
      // swap + repaint land ~2-5s into the load); idle alone is too flaky.
      const id = window.requestIdleCallback(init, { timeout: 8000 });
      return () => window.cancelIdleCallback(id);
    }
    const t: ReturnType<typeof setTimeout> = setTimeout(init, 5000);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <>{children}</>;
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
