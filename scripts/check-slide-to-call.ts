// Runnable check for the slide-to-call gesture thresholds.
// Run: npx tsx scripts/check-slide-to-call.ts
import assert from "node:assert/strict";
import { shouldReleaseCall } from "../lib/slide-to-call";

const W = 300; // effective track width

// Slow deliberate drag past 90% → call.
assert.equal(shouldReleaseCall(W * 0.92, W, 1500), true);
// Slow drag past the old threshold, borderline timing → call (distance rules).
assert.equal(shouldReleaseCall(W * 0.9, W, 1000), true);
// Slow drag that never reached the threshold → snap back.
assert.equal(shouldReleaseCall(W * 0.6, W, 1200), false);
// Fast flick from the halfway point → call.
assert.equal(shouldReleaseCall(W * 0.5, W, 200), true); // 1.5 px/ms
// Fast flick that barely started → snap back (can't be an accidental graze).
assert.equal(shouldReleaseCall(W * 0.3, W, 200), false);
// Zero elapsed (no drag) → snap back.
assert.equal(shouldReleaseCall(W, W, 0), false);

console.log("slide-to-call: all gesture checks pass");
