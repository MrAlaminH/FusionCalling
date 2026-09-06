"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type posthog from "posthog-js";

// Loaded together with posthog-js after init so ~55 KB of analytics JS stays
// out of the initial bundle entirely (module + init are both idle-deferred).
const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

type PostHogClient = typeof posthog;
type PHProviderComponent = React.ComponentType<{
  client: PostHogClient;
  children: React.ReactNode;
}>;

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  // Defer PostHog until after first paint + idle so analytics JS never
  // competes with hydration/LCP during the load window.
  const [ready, setReady] = useState(false);
  const [client, setClient] = useState<PostHogClient | null>(null);
  const [PHProvider, setPHProvider] = useState<PHProviderComponent | null>(
    null
  );

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      // No key configured (e.g. fresh clone without .env.local): skip init
      // entirely instead of starting PostHog with an empty token.
      if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
      const [posthogModule, reactModule] = await Promise.all([
        import("posthog-js"),
        import("posthog-js/react"),
      ]);
      if (cancelled) return;
      const posthog = posthogModule.default;
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "",
        capture_pageleave: true,
        capture_pageview: false, // Disabled; we capture pageviews manually
      });
      setClient(posthog);
      // Wrap in an updater: React would otherwise treat the component
      // function as a lazy state initializer and CALL it with the previous
      // state (null) as props.
      setPHProvider(() => reactModule.PostHogProvider as unknown as PHProviderComponent);
      setReady(true);
    };

    if ("requestIdleCallback" in window) {
      // Generous timeout: this must never fire inside the LCP window (fonts
      // swap + repaint land ~2-5s into the load); idle alone is too flaky.
      const id = window.requestIdleCallback(init, { timeout: 8000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }
    const t: ReturnType<typeof setTimeout> = setTimeout(init, 5000);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  if (!ready || !client || !PHProvider) return <>{children}</>;
  return (
    <PHProvider client={client}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
