// Vapi agents behind the hero "Select Agent" dropdown (slug -> assistant ID).
// IDs are not secrets; VAPI_API_KEY (the only secret) lives in .env.local / Vercel.
// Agents greet the caller via the {{customer.name}} variable, filled from the
// customer object the API route builds.

// Outbound number the demo calls dial from (+13186858002, "fusion calling website").
export const VAPI_PHONE_NUMBER_ID = "8a4a65cd-92bf-46d5-8fd6-fcf5a7b68fef";

export const VAPI_AGENTS: Record<string, string> = {
  "real-estate": "475b4c5a-2cd1-46f2-b1fe-05633df55dfb",
  "dental-practice": "8edd2825-0dad-410d-b6c6-150325400030",
  "insurance-agent": "0f6209a1-3bcc-4ec9-9c85-e32d3e0de625",
};
