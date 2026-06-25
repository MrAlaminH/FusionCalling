import { CALENDAR_ENDPOINTS } from "../data/endpoints";
import EndpointCard from "@/components/docs/endpoint-card";
import EndpointSummaryGrid from "@/components/docs/endpoint-summary-grid";
import CodeBlock from "@/components/docs/code-block";
import Callout from "@/components/docs/callout";

const META = [
  { k: "Base URL", v: "https://app.fusioncalling.com/api/calendar/external/v1" },
  { k: "Version", v: "v2.0" },
  { k: "Rate limit", v: "12 requests / minute" },
  { k: "Auth", v: "Bearer API key" },
];

const DATETIME_FORMATS = [
  { f: '"2025-12-15T14:30:00"', note: "Simple — no timezone (assumes UTC). Recommended." },
  { f: '"2025-12-15T14:30:00Z"', note: "ISO 8601 without milliseconds, UTC." },
  { f: '"2025-12-15T14:30:00.000Z"', note: "Full ISO 8601 (RFC 3339) with milliseconds." },
  { f: '"2025-12-15T14:30:00+05:30"', note: "With timezone offset." },
  { f: '"2025-12-15 14:30:00"', note: "Space separator (assumes UTC)." },
];

export default function CalendarApiSection() {
  return (
    <section id="calendar-api" className="mb-16 scroll-mt-28">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Calendar API</h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Manage calendar events programmatically with full CRUD operations, integrated video
            conferencing (Google Meet and Zoom), and attendees management.
          </p>
        </div>
        <span className="rounded-md bg-orange-500/10 text-orange-300 ring-1 ring-orange-500/20 px-2.5 py-1 text-xs font-medium">
          v2.0
        </span>
      </div>

      {/* Overview */}
      <div id="calendar-overview" className="scroll-mt-28 mb-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {META.map((m) => (
            <div key={m.k} className="bg-zinc-950/60 px-4 py-3">
              <dt className="text-xs text-gray-500">{m.k}</dt>
              <dd className="mt-0.5 text-sm text-gray-200 break-all">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Endpoints */}
      <div id="calendar-endpoints" className="scroll-mt-28 mb-10">
        <h3 className="text-lg font-semibold text-white mb-3">Endpoints at a glance</h3>
        <EndpointSummaryGrid endpoints={CALENDAR_ENDPOINTS} />
      </div>

      <div className="space-y-5 mb-12">
        {CALENDAR_ENDPOINTS.map((e) => (
          <EndpointCard key={e.id} endpoint={e} />
        ))}
      </div>

      {/* Datetime formats */}
      <div id="cal-datetime-formats" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-1">Datetime Formats</h3>
        <p className="text-sm text-gray-400 mb-4">
          The API accepts many common formats and normalizes them to ISO 8601 (UTC) for storage.
        </p>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="py-2.5 px-4 font-medium text-gray-400">Format</th>
                <th className="py-2.5 px-4 font-medium text-gray-400">Notes</th>
              </tr>
            </thead>
            <tbody>
              {DATETIME_FORMATS.map((d) => (
                <tr key={d.f} className="border-b border-white/5 last:border-0">
                  <td className="py-2.5 px-4">
                    <code className="text-orange-400">{d.f}</code>
                  </td>
                  <td className="py-2.5 px-4 text-gray-400">{d.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Video conferencing */}
      <div id="cal-video-conferencing" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-1">Video Conferencing</h3>
        <p className="text-sm text-gray-400 mb-4">
          Generate meeting links automatically by enabling <code className="text-orange-400">google_meet_enabled</code>{" "}
          or <code className="text-orange-400">zoom_enabled</code> on create/update. Google Meet returns a{" "}
          <code className="text-orange-400">meet_link</code>; Zoom returns a{" "}
          <code className="text-orange-400">zoom_meeting_id</code> and <code className="text-orange-400">zoom_join_url</code>.
        </p>
        <Callout type="warning" className="mb-4">
          Only <strong>one</strong> video conference provider can be enabled per event. Enabling both returns a 400
          error. Video conferencing also cannot be enabled for all-day events.
        </Callout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <p className="text-emerald-300 font-semibold text-sm mb-2">Enable Google Meet</p>
            <CodeBlock
              code={`{
  "google_meet_enabled": true
}`}
              language="json"
            />
            <p className="mt-2 text-xs text-gray-500">
              Requires Google Calendar connected. Returns <code className="text-orange-300">meet_link</code>.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <p className="text-emerald-300 font-semibold text-sm mb-2">Enable Zoom</p>
            <CodeBlock
              code={`{
  "zoom_enabled": true
}`}
              language="json"
            />
            <p className="mt-2 text-xs text-gray-500">
              Requires Zoom connected (Settings → Integrations). Returns{" "}
              <code className="text-orange-300">zoom_join_url</code>.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Switch providers by disabling one and enabling the other in the same PATCH:
        </p>
        <div className="mt-2">
          <CodeBlock
            code={`// Google Meet -> Zoom
{
  "google_meet_enabled": false,
  "zoom_enabled": true
}`}
            language="json"
          />
        </div>
        <Callout type="info" className="mt-4">
          If the provider isn&apos;t connected, the event is still created/updated but the response includes a{" "}
          <code className="text-orange-300">warnings</code> array (e.g. <code className="text-orange-300">{`["zoom_not_connected"]`}</code>)
          and the corresponding link fields stay <code>null</code>.
        </Callout>
      </div>

      {/* Boolean fields */}
      <div id="cal-boolean-fields" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-1">Boolean Field Rules</h3>
        <p className="text-sm text-gray-400 mb-4">
          Fields like <code className="text-orange-400">all_day</code>,{" "}
          <code className="text-orange-400">google_meet_enabled</code>, and{" "}
          <code className="text-orange-400">zoom_enabled</code> must be real booleans, not strings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
            <p className="text-emerald-300 font-semibold text-sm mb-2">✓ Correct</p>
            <CodeBlock code={`{\n  "all_day": true,\n  "google_meet_enabled": false,\n  "zoom_enabled": true\n}`} language="json" />
          </div>
          <div className="rounded-lg border border-red-500/20 bg-red-500/[0.04] p-4">
            <p className="text-red-300 font-semibold text-sm mb-2">✗ Incorrect</p>
            <CodeBlock code={`{\n  "all_day": "true",\n  "zoom_enabled": "false"\n}`} language="json" />
          </div>
        </div>
        <Callout type="warning" className="mt-4">
          Sending booleans as strings (<code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>)
          returns a validation error: &quot;Expected boolean, received string&quot;.
        </Callout>
      </div>

      {/* Attendees */}
      <div id="cal-attendees" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-1">Attendees</h3>
        <p className="text-sm text-gray-400 mb-4">
          Pass an <code className="text-orange-400">attendees</code> array (max 50) on create or update. On update the
          entire list is replaced. Duplicate emails are removed automatically.
        </p>
        <CodeBlock
          code={`{
  "attendees": [
    {
      "email": "client@example.com",
      "display_name": "Client Rep",
      "response_status": "needsAction"
    },
    {
      "email": "team@example.com"
    }
  ]
}`}
          language="json"
        />
        <p className="mt-4 text-sm text-gray-400 mb-2">
          <code className="text-orange-400">response_status</code> accepts one of:
        </p>
        <div className="flex flex-wrap gap-2">
          {["needsAction", "accepted", "declined", "tentative"].map((s) => (
            <code
              key={s}
              className="text-xs bg-white/5 ring-1 ring-white/10 rounded px-2 py-1 text-gray-300"
            >
              {s}
            </code>
          ))}
        </div>
      </div>

      {/* Data model */}
      <div id="cal-data-models" className="scroll-mt-28">
        <h3 className="text-lg font-semibold text-white mb-1">Event Object</h3>
        <p className="text-sm text-gray-400 mb-4">The full shape of a calendar event.</p>
        <CodeBlock
          code={`{
  "id": "uuid",                    // auto-generated
  "title": "string",               // 1-255 chars (required)
  "description": "string",         // optional, max 500
  "start_time": "ISO 8601",        // required
  "end_time": "ISO 8601",          // required, after start_time
  "all_day": false,                // default false
  "google_meet_enabled": false,    // default false
  "meet_link": "string|null",      // response-only (Google Meet)
  "zoom_enabled": false,           // default false
  "zoom_meeting_id": 123456789,    // response-only (Zoom)
  "zoom_join_url": "string|null",  // response-only (Zoom)
  "attendees": [{                  // optional, max 50
    "email": "…",
    "display_name": "string",
    "response_status": "needsAction|accepted|declined|tentative"
  }],
  "caller_phone": "string|null",   // optional, E.164 format
  "caller_name": "string|null",    // optional, max 200 chars
  "source": "local|google",        // response-only
  "created_at": "ISO 8601",        // response-only
  "updated_at": "ISO 8601"         // response-only
}`}
          language="json"
        />
      </div>
    </section>
  );
}
