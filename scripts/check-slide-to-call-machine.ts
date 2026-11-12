// Runnable check for the slide-to-call phase machine.
// Run: npx tsx scripts/check-slide-to-call-machine.ts
import assert from "node:assert/strict";
import { transitionCallPhase, type CallEvent, type CallPhase } from "../lib/slide-to-call-machine";

const run = (start: CallPhase, events: CallEvent[]): CallPhase =>
  events.reduce((p, e) => transitionCallPhase(p, e), start);

// Happy path: idle → countdown → calling → done → reset → idle.
assert.equal(
  run("idle", [{ type: "START" }, { type: "CALLING" }, { type: "CALL_OK" }, { type: "RESET" }]),
  "idle"
);

// Failure path: a hung request must land in failed, and failure must allow an
// immediate retry — the old ref-based guard left a hung request stuck on
// "Connecting…" forever with no way back.
assert.equal(run("countdown", [{ type: "CALLING" }, { type: "CALL_FAIL" }]), "failed");
assert.equal(run("failed", [{ type: "START" }]), "countdown");
assert.equal(run("failed", [{ type: "RESET" }]), "idle");

// Illegal transitions are no-ops, never corrupt state.
assert.equal(run("calling", [{ type: "START" }]), "calling"); // no double-start
assert.equal(run("idle", [{ type: "CALL_OK" }]), "idle"); // no success without a request
assert.equal(run("idle", [{ type: "CALL_FAIL" }]), "idle");
assert.equal(run("countdown", [{ type: "CALL_OK" }]), "countdown"); // can't succeed while counting down
assert.equal(run("countdown", [{ type: "RESET" }]), "countdown");
assert.equal(run("done", [{ type: "START" }]), "done"); // must reset before retry

console.log("check-slide-to-call-machine: all transitions OK");
