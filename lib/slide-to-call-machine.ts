/**
 * Call phases for the slide-to-call gesture, as an explicit machine.
 * Pure transition function split out so the rules have a runnable check
 * (scripts/check-slide-to-call-machine.ts), same pattern as slide-to-call.ts.
 *
 * idle ──START──▶ countdown ──CALLING──▶ calling ──CALL_OK──▶ done
 *  ▲                  │                     │                    │ RESET
 *  └── RESET ◀── failed ◀──CALL_FAIL───────┘                    ▼
 *  └──────────────────────────(failed ──START──▶ retry)──────── idle
 *
 * Invariants the old boolean encoding couldn't enforce:
 * - a call can only start from idle or failed (no double-start);
 * - success/failure can only arrive while a request is in flight ("calling"),
 *   so a hung /api/webhook must resolve to a reachable state, never strand
 *   the slider;
 * - done/failed return to idle only via RESET.
 */
export type CallPhase = "idle" | "countdown" | "calling" | "done" | "failed";

export type CallEvent =
  | { type: "START" } // release accepted → countdown begins
  | { type: "CALLING" } // countdown finished → request in flight
  | { type: "CALL_OK" } // server accepted the call request
  | { type: "CALL_FAIL" } // request failed or timed out
  | { type: "RESET" }; // done/failed auto-reset → idle

export function transitionCallPhase(
  phase: CallPhase,
  event: CallEvent
): CallPhase {
  switch (event.type) {
    case "START":
      return phase === "idle" || phase === "failed" ? "countdown" : phase;
    case "CALLING":
      return phase === "countdown" ? "calling" : phase;
    case "CALL_OK":
      return phase === "calling" ? "done" : phase;
    case "CALL_FAIL":
      return phase === "calling" ? "failed" : phase;
    case "RESET":
      return phase === "done" || phase === "failed" ? "idle" : phase;
  }
}
