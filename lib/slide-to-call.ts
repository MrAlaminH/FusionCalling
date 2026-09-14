/**
 * Pure decision logic for the slide-to-call gesture, split out so the
 * thresholds have a runnable check (scripts/check-slide-to-call.ts).
 */
export const THRESHOLD = 0.9;
// A release counts as a flick when the average drag speed exceeds this
// (px per ms) and the handle has travelled at least FLICK_MIN_PROGRESS
// of the track — so an accidental graze can never place a call.
export const FLICK_VELOCITY = 0.6;
export const FLICK_MIN_PROGRESS = 0.4;

export function shouldReleaseCall(
  position: number,
  effectiveWidth: number,
  elapsedMs: number
): boolean {
  if (effectiveWidth <= 0 || elapsedMs <= 0) return false;
  const isFlick =
    position / elapsedMs > FLICK_VELOCITY &&
    position >= effectiveWidth * FLICK_MIN_PROGRESS;
  return position >= effectiveWidth * THRESHOLD || isFlick;
}
