import ApiRateLimiting from "../components/api-rate-limiting";
import Callout from "@/components/docs/callout";

const ERROR_CODES = [
  { code: "400", name: "Bad Request", fix: "Check the request format and required fields." },
  { code: "401", name: "Unauthorized", fix: "Verify your API key in the Authorization header." },
  { code: "404", name: "Not Found", fix: "Verify the resource (and ID) exists." },
  { code: "409", name: "Conflict", fix: "Resource already exists — use PATCH to update." },
  { code: "429", name: "Too Many Requests", fix: "Implement retry with exponential backoff." },
  { code: "500", name: "Server Error", fix: "Retry with backoff; contact support if it persists." },
];

const CHANGELOG = [
  {
    version: "Leads API v1.2",
    date: "February 2026",
    tone: "blue" as const,
    items: [
      "GET endpoints for reading leads",
      "PATCH endpoint for updating leads",
      "Default Feed campaign routing",
      "Atomic batch inserts (1-100)",
    ],
  },
  {
    version: "Calendar API v1.0",
    date: "December 2025",
    tone: "orange" as const,
    items: [
      "Initial release with full CRUD",
      "Flexible datetime formats",
      "Google Meet integration",
      "Automatic Google Calendar sync",
    ],
  },
];

const TONE: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  orange: "bg-orange-500/15 text-orange-300 ring-orange-500/30",
};

export default function ReferenceSection() {
  return (
    <section id="reference" className="mb-16 scroll-mt-28">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Reference</h2>
        <p className="text-gray-400 text-sm">Error codes, rate limiting, and best practices.</p>
      </div>

      {/* Error codes */}
      <div id="error-codes" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-3">Error Codes</h3>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <div className="hidden md:grid grid-cols-[5rem_1fr_2fr] gap-4 px-4 py-2.5 border-b border-white/10 text-xs font-medium text-gray-400">
            <span>Code</span>
            <span>Name</span>
            <span>Solution</span>
          </div>
          {ERROR_CODES.map((e) => (
            <div
              key={e.code}
              className="grid grid-cols-1 md:grid-cols-[5rem_1fr_2fr] gap-1 md:gap-4 px-4 py-3 border-b border-white/5 last:border-0"
            >
              <code className="text-orange-400 text-sm">{e.code}</code>
              <span className="text-sm text-gray-200">{e.name}</span>
              <span className="text-sm text-gray-400">{e.fix}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rate limiting */}
      <div id="rate-limiting" className="scroll-mt-28 mb-12">
        <ApiRateLimiting />
      </div>

      {/* Best practices */}
      <div id="best-practices" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-3">Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="text-sm font-semibold text-white mb-3">Security</h4>
            <ul className="space-y-1.5 text-sm text-gray-300">
              <li>✓ Store API keys in environment variables</li>
              <li>✓ Use HTTPS for all requests</li>
              <li>✓ Rotate keys regularly</li>
              <li>✗ Never expose keys in client-side code</li>
              <li>✗ Never commit keys to version control</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="text-sm font-semibold text-white mb-3">Performance</h4>
            <ul className="space-y-1.5 text-sm text-gray-300">
              <li>✓ Use batch operations for many items</li>
              <li>✓ Cache responses where appropriate</li>
              <li>✓ Implement exponential backoff for 429s</li>
              <li>✓ Use pagination for large datasets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Changelog */}
      <div id="changelog" className="scroll-mt-28 mb-12">
        <h3 className="text-lg font-semibold text-white mb-3">Changelog</h3>
        <div className="space-y-4">
          {CHANGELOG.map((c) => (
            <div key={c.version} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h4 className="text-base font-semibold text-white">{c.version}</h4>
                <span className={`text-xs px-2 py-0.5 rounded ring-1 ${TONE[c.tone]}`}>{c.date}</span>
              </div>
              <ul className="space-y-1.5 text-sm text-gray-300">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-orange-400 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div id="support" className="scroll-mt-28">
        <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
        <Callout type="info">
          For API support, email{" "}
          <a href="mailto:hello@fusioncalling.com" className="text-orange-400 hover:text-orange-300">
            hello@fusioncalling.com
          </a>
          .
        </Callout>
      </div>
    </section>
  );
}
