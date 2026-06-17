import { LEADS_ENDPOINTS } from "../data/endpoints";
import type { Param } from "../data/endpoints";
import EndpointCard from "@/components/docs/endpoint-card";
import EndpointSummaryGrid from "@/components/docs/endpoint-summary-grid";
import ParamTable from "@/components/docs/param-table";
import Callout from "@/components/docs/callout";
import FaqItem from "./faq-item";

const REQUIRED_FIELDS: Param[] = [
  { name: "name", type: "string", required: true, description: "Lead's full name (2-100 characters).", example: "John Doe" },
  { name: "phone", type: "string", required: true, description: "10-15 digits after normalization; +, spaces, -, () allowed.", example: "5551234567 or +1 234 567 8900" },
];

const OPTIONAL_FIELDS: Param[] = [
  { name: "email", type: "string", required: false, description: "Valid email address.", example: "john@example.com" },
  { name: "company", type: "string", required: false, description: "Company name (up to 100 characters).", example: "Acme Corp" },
  { name: "tags", type: "array<string>", kind: "array", required: false, description: "Up to 20 tags.", example: '["vip","website-lead"]' },
  { name: "campaign_id", type: "UUID", required: false, description: "Target campaign UUID. Omit to use the Default Feed.", example: "omit → Default Feed" },
  { name: "kind", type: "enum", required: false, description: "Optional validation; must match the target campaign kind.", enum: ["call", "sms"] },
];

const META = [
  { k: "Base URL", v: "https://app.fusioncalling.com/api/leads/external/v1" },
  { k: "Version", v: "v1.2" },
  { k: "Rate limit", v: "100 requests / minute" },
  { k: "Auth", v: "Bearer API key" },
];

const FAQ = [
  {
    q: "How many leads can I send per day?",
    a: "There's no daily limit — only a rate limit of 100 requests/minute. Each request can carry up to 100 leads, so theoretically up to 144,000 leads/day.",
  },
  {
    q: "Can I read leads from the API?",
    a: "Yes. Use GET /api/leads/external/v1/leads?phone=+1234567890 to look up by phone, or GET …/{lead_id} by UUID.",
  },
  {
    q: "Can I update existing leads?",
    a: "Yes. Use PATCH /api/leads/external/v1/leads with the lead's phone number and any updatable field.",
  },
  {
    q: "What's the difference between the Leads and Calendar APIs?",
    a: "Leads API creates lead records; Calendar API manages events. Same API-key system, different endpoints and rate limits (100/min vs 12/min).",
  },
];

export default function LeadsApiSection() {
  return (
    <section id="leads-api" className="mb-16 scroll-mt-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Leads API</h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Send leads from your favorite tools to Fusion Calling. v1.2 adds read (GET), PATCH
            updates, Default Feed routing, and atomic batch inserts.
          </p>
        </div>
        <span className="rounded-md bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20 px-2.5 py-1 text-xs font-medium">
          v1.2
        </span>
      </div>

      {/* Overview */}
      <div id="leads-overview" className="scroll-mt-28 mb-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {META.map((m) => (
            <div key={m.k} className="bg-zinc-950/60 px-4 py-3">
              <dt className="text-xs text-gray-500">{m.k}</dt>
              <dd className="mt-0.5 text-sm text-gray-200 break-all">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Fields & Default Feed */}
      <div id="leads-fields" className="scroll-mt-28 mb-10">
        <h3 className="text-lg font-semibold text-white mb-1">Fields &amp; Default Feed</h3>
        <p className="text-sm text-gray-400 mb-4">All request bodies use JSON with these fields.</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Required</h4>
            <ParamTable params={REQUIRED_FIELDS} />
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Optional</h4>
            <ParamTable params={OPTIONAL_FIELDS} />
          </div>
        </div>

        <Callout type="info" className="mt-5">
          <strong>Phone normalization:</strong> US 10-digit numbers work without a country code.
          <code className="text-orange-400"> +1 (234) 567-8900</code>,{" "}
          <code className="text-orange-400">5551234567</code>, and{" "}
          <code className="text-orange-400">+15551234567</code> all match the same lead.
        </Callout>

        <Callout type="warning" className="mt-4">
          <strong>Breaking change (v1.2):</strong> If your integration previously omitted{" "}
          <code className="text-orange-400">campaign_id</code>, leads now route to the{" "}
          <strong>Default Feed</strong> instead of your oldest campaign.
        </Callout>
      </div>

      {/* Endpoints */}
      <div id="leads-endpoints" className="scroll-mt-28 mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Endpoints at a glance</h3>
        <EndpointSummaryGrid endpoints={LEADS_ENDPOINTS} />
      </div>

      <div className="space-y-5 mb-12">
        {LEADS_ENDPOINTS.map((e) => (
          <EndpointCard key={e.id} endpoint={e} />
        ))}
      </div>

      {/* FAQ */}
      <div id="leads-faq" className="scroll-mt-28">
        <h3 className="text-lg font-semibold text-white mb-3">FAQ</h3>
        <div className="space-y-2.5">
          {FAQ.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
