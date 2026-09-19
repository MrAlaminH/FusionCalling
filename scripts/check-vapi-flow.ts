// Self-check: keeps the hero dropdown agents in sync with lib/vapi-agents.ts.
// Run: npx --yes tsx scripts/check-vapi-flow.ts
import assert from "node:assert/strict";
import { VAPI_AGENTS, VAPI_PHONE_NUMBER_ID } from "../lib/vapi-agents";

// Must match the <option> values in components/sub/HeroForm.tsx
const UI_AGENT_SLUGS = ["real-estate", "dental-practice", "insurance-agent"];

for (const slug of UI_AGENT_SLUGS) {
  const assistantId = VAPI_AGENTS[slug];
  assert.ok(assistantId, `Agent "${slug}" is in the dropdown but missing from lib/vapi-agents.ts`);
  assert.match(
    assistantId,
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    `Agent "${slug}" has no valid assistantId`
  );
}

assert.match(
  VAPI_PHONE_NUMBER_ID,
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
  "VAPI_PHONE_NUMBER_ID is not a valid UUID"
);

console.log(`check-vapi-flow: all ${UI_AGENT_SLUGS.length} agents wired`);
