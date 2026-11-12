"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copy-feedback state machine: idle → copied → auto-reset after 2s.
 * One implementation for every copy affordance (buttons, code tabs, share
 * menu). Guarantees the previous components each got subtly wrong:
 * - a pending reset timer is cleared on every copy, so rapid re-copies never
 *   flip the label early;
 * - the promise is awaited, so a failed write (permission denied, Safari
 *   private mode) never shows the success state;
 * - the timer is cleaned up on unmount.
 * Returns whether the write succeeded so callers can surface failure.
 */
export function useCopied(resetAfterMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  const copy = useCallback(
    async (value: string): Promise<boolean> => {
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        return false;
      }
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), resetAfterMs);
      return true;
    },
    [resetAfterMs]
  );

  return { copied, copy };
}
