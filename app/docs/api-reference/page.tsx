import type { Metadata } from "next";
import ApiReferenceShell from "./api-reference-shell";
import ApiHero from "./sections/api-hero";
import QuickStartSection from "./sections/quick-start";
import CalendarApiSection from "./sections/calendar-api";
import LeadsApiSection from "./sections/leads-api";
import IntegrationGuidesSection from "./sections/integration-guides";
import ReferenceSection from "./sections/reference";
import DocFooter from "@/components/docs/doc-footer";
import { buildOpenGraph } from "@/lib/seo";

const title = "AI Voice API Reference & Integration Docs";
const description =
  "Fusion Calling API reference: authentication, Calendar API, Leads API, endpoints, and integration guides for building AI voice agents with Vapi and Retell.";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/docs/api-reference" }),
};

const navItems = [
  {
    id: "quick-start",
    label: "Quick Start",
    isSection: true,
    children: [
      { id: "authentication", label: "Authentication" },
      { id: "your-first-request", label: "Your First Request" },
    ],
  },
  {
    id: "calendar-api",
    label: "Calendar API",
    isSection: true,
    children: [
      { id: "calendar-overview", label: "Overview" },
      { id: "calendar-endpoints", label: "Endpoints" },
      { id: "cal-list-events", label: "• List Events" },
      { id: "cal-get-event", label: "• Get Event" },
      { id: "cal-create-event", label: "• Create Event" },
      { id: "cal-update-event", label: "• Update Event" },
      { id: "cal-delete-event", label: "• Delete Event" },
      { id: "cal-datetime-formats", label: "Datetime Formats" },
      { id: "cal-video-conferencing", label: "Video Conferencing" },
      { id: "cal-boolean-fields", label: "Boolean Fields" },
      { id: "cal-attendees", label: "Attendees" },
      { id: "cal-data-models", label: "Data Model" },
    ],
  },
  {
    id: "leads-api",
    label: "Leads API",
    isSection: true,
    children: [
      { id: "leads-overview", label: "Overview" },
      { id: "leads-fields", label: "Fields & Default Feed" },
      { id: "leads-endpoints", label: "Endpoints" },
      { id: "leads-create", label: "• Create Lead" },
      { id: "leads-create-batch", label: "• Batch Create" },
      { id: "leads-get-by-phone", label: "• Get by Phone" },
      { id: "leads-list", label: "• List Leads" },
      { id: "leads-get-by-id", label: "• Get by ID" },
      { id: "leads-update", label: "• Update Lead" },
      { id: "leads-object", label: "Lead Object" },
      { id: "leads-faq", label: "FAQ" },
    ],
  },
  {
    id: "integration-guides",
    label: "Integration Guides",
    isSection: true,
    children: [
      { id: "gohighlevel", label: "GoHighLevel" },
      { id: "n8n", label: "n8n" },
      { id: "zapier", label: "Zapier" },
      { id: "web-forms", label: "Web Forms" },
    ],
  },
  {
    id: "reference",
    label: "Reference",
    isSection: true,
    children: [
      { id: "recording-retention", label: "Recording & Retention" },
      { id: "error-codes", label: "Error Codes" },
      { id: "rate-limiting", label: "Rate Limiting" },
      { id: "best-practices", label: "Best Practices" },
      { id: "changelog", label: "Changelog" },
      { id: "support", label: "Support" },
    ],
  },
];

const breadcrumbs = [
  { label: "Documentation", href: "/docs" },
  { label: "API Reference" },
];

function RecordingRetentionSection() {
  return (
    <section id="recording-retention" className="mb-16 scroll-mt-28">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
          Call recording, transcripts &amp; retention controls
        </h2>
        <p className="text-gray-400 text-sm">
          What to configure when calls are recorded, transcribed, and stored.
        </p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
        <ul className="space-y-1.5 text-sm text-gray-300">
          <li>
            Turn recording and transcripts on or off per use case, so only the calls that need
            review are kept. For outbound dialing, ask for a simple API call that takes a phone
            number and the agent to use, with no vendor-specific setup.
          </li>
          <li>
            Set how long recordings and transcripts are kept, then delete them on a schedule.
            Shorter periods mean less stored data to manage.
          </li>
          <li>
            Plan for per-caller requests to see or delete their recordings and transcripts. Keep a
            simple log of what was shared or removed and when.
          </li>
          <li>
            Tell callers when a call is recorded, get consent where the law requires it, and log
            opt-outs. Rules differ by place and use case, so ask your counsel what wording and
            flow fit your calls. Background reading:{" "}
            <a
              href="/blog/voice-ai-security-compliance"
              className="text-orange-400 hover:text-orange-300"
            >
              voice AI security and compliance
            </a>
            .
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function ApiReferencePage() {
  return (
    <ApiReferenceShell navItems={navItems} breadcrumbs={breadcrumbs}>
      <ApiHero />
      <QuickStartSection />
      <CalendarApiSection />
      <LeadsApiSection />
      <IntegrationGuidesSection />
      <RecordingRetentionSection />
      <ReferenceSection />
      <DocFooter
        prev={{ id: "quick-start", label: "Quick Start" }}
        next={{ id: "leads-api", label: "Leads API" }}
      />
    </ApiReferenceShell>
  );
}
