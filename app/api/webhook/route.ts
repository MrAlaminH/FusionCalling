import { NextResponse } from "next/server";
import { VAPI_AGENTS, VAPI_PHONE_NUMBER_ID } from "@/lib/vapi-agents";

const VAPI_API_URL = "https://api.vapi.ai/call";
const DEMO_MAX_DURATION_SECONDS = 300;
const VAPI_TIMEOUT_MS = 10_000;

type DemoCallRequest = {
  phoneNumber?: unknown;
  name?: unknown;
  email?: unknown;
  selectedAgent?: unknown;
};

const asStringOrEmpty = (value: unknown) => (typeof value === "string" ? value : "");

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as DemoCallRequest | null;
  const agentId =
    typeof body?.selectedAgent === "string" ? VAPI_AGENTS[body.selectedAgent] : undefined;
  const apiKey = process.env.VAPI_API_KEY;

  if (!body || typeof body.phoneNumber !== "string" || !agentId) {
    return NextResponse.json({ error: "Invalid demo call request" }, { status: 400 });
  }
  if (!apiKey) {
    console.error("[demo-call] VAPI_API_KEY is not configured");
    return NextResponse.json({ error: "Calling is not configured" }, { status: 500 });
  }

  try {
    const response = await fetch(VAPI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assistantId: agentId,
        phoneNumberId: VAPI_PHONE_NUMBER_ID,
        customer: {
          number: body.phoneNumber,
          name: asStringOrEmpty(body.name),
          email: asStringOrEmpty(body.email),
        },
        assistantOverrides: {
          // Enforce the 5-minute limit the form promises.
          maxDurationSeconds: DEMO_MAX_DURATION_SECONDS,
        },
        metadata: {
          source: "website-demo",
          agent: asStringOrEmpty(body.selectedAgent),
          name: asStringOrEmpty(body.name),
          email: asStringOrEmpty(body.email),
        },
      }),
      signal: AbortSignal.timeout(VAPI_TIMEOUT_MS),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(`[demo-call] Vapi error ${response.status}:`, detail);
      return NextResponse.json({ error: "Failed to start call" }, { status: 502 });
    }

    const call = (await response.json()) as { id?: string };
    console.log(`[demo-call] started ${call.id ?? "(no id)"} agent=${asStringOrEmpty(body.selectedAgent)}`);
    return NextResponse.json({ message: "Call started", callId: call.id });
  } catch (error) {
    console.error("[demo-call] Vapi request failed:", error);
    return NextResponse.json({ error: "Failed to start call" }, { status: 502 });
  }
}
