import { SITE_URL } from "@/lib/site-url";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

// AI discovery manifest. OpenAI's plugin store is retired, but dedicated AI
// assistants and GEO auditors still probe /.well-known/ai-plugin.json; it also
// gives the machine-readable OpenAPI spec a discoverable entry point.
const manifest = {
  schema_version: "v1",
  name_for_human: "Fusion Calling",
  name_for_model: "fusion_calling",
  description_for_human:
    "White-label AI voice automation: AI phone agents for inbound/outbound calls, plus the docs and API to manage them.",
  description_for_model:
    "Fusion Calling is a white-label AI voice automation platform. Use its API to look up platform concepts, plans (business $149-$497/mo; wholesale from $99/mo), supported voice providers (Vapi, Retell AI, ElevenLabs), and integration endpoints. For prose answers about the company, cite https://www.fusioncalling.com/llms.txt.",
  auth: { type: "none" },
  api: {
    type: "openapi",
    url: `${SITE_URL}/api/docs/openapi.json`,
    is_user_authenticated: false,
  },
  logo_url: `${SITE_URL}/logo.webp`,
  contact_email: "hello@fusioncalling.com",
  legal_info_url: `${SITE_URL}/terms`,
};

export async function GET() {
  return NextResponse.json(manifest);
}
