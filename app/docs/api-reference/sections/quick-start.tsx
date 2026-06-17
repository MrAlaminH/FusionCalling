import ApiAuthentication from "../components/api-authentication";
import CodeBlock from "@/components/docs/code-block";
import Callout from "@/components/docs/callout";
import { Rocket, Zap, Wrench, ArrowRight } from "lucide-react";

const PATHS = [
  {
    icon: Rocket,
    accent: "orange",
    title: "Beginner",
    blurb: "New to APIs? Learn the basics with step-by-step tutorials.",
    points: ["Learn API fundamentals", "Make your first API call", "Understand authentication"],
    cta: { href: "#authentication", label: "Start Tutorial" },
  },
  {
    icon: Zap,
    accent: "blue",
    title: "Integrator",
    blurb: "Connect your existing tools quickly with ready-to-use guides.",
    points: ["Platform-specific guides", "Ready-to-use templates", "Quick setup instructions"],
    cta: { href: "#integration-guides", label: "View Guides" },
  },
  {
    icon: Wrench,
    accent: "purple",
    title: "Developer",
    blurb: "Deep dive into API capabilities with the complete reference.",
    points: ["Complete endpoint reference", "Interactive request builder", "Best practices"],
    cta: { href: "#reference", label: "View Reference" },
  },
] as const;

const ACCENT: Record<string, { ring: string; text: string; btn: string }> = {
  orange: { ring: "hover:border-orange-500/50", text: "text-orange-400", btn: "bg-orange-500 hover:bg-orange-600" },
  blue: { ring: "hover:border-blue-500/50", text: "text-blue-400", btn: "bg-blue-500 hover:bg-blue-600" },
  purple: { ring: "hover:border-purple-500/50", text: "text-purple-400", btn: "bg-purple-500 hover:bg-purple-600" },
};

export default function QuickStartSection() {
  return (
    <section id="quick-start" className="mb-16 scroll-mt-28">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Quick Start</h2>
        <p className="text-gray-400 text-sm">Get started with Fusion Calling APIs in 5 minutes.</p>
      </div>

      {/* Path cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {PATHS.map((p) => {
          const Icon = p.icon;
          const a = ACCENT[p.accent];
          return (
            <div
              key={p.title}
              className={`rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors ${a.ring}`}
            >
              <Icon className={`h-7 w-7 mb-3 ${a.text}`} />
              <h3 className="text-lg font-semibold text-white mb-1.5">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{p.blurb}</p>
              <ul className="space-y-1.5 text-sm text-gray-300 mb-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-1 w-1 rounded-full ${a.text} bg-current shrink-0`} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={p.cta.href}
                className={`inline-flex items-center gap-1.5 ${a.btn} text-white text-sm font-semibold px-3.5 py-2 rounded-lg transition-colors`}
              >
                {p.cta.label} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          );
        })}
      </div>

      {/* Authentication */}
      <div id="authentication" className="scroll-mt-28 mb-10">
        <ApiAuthentication />
      </div>

      {/* Your first request */}
      <div id="your-first-request" className="scroll-mt-28">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Your First Request</h3>
        <p className="text-gray-300 mb-5 text-sm">
          Make your first API call to verify your authentication and understand the response format.
        </p>

        <h4 className="text-base font-semibold text-white mb-2">1 · Test your API key</h4>
        <p className="text-gray-400 text-sm mb-3">List your calendar events to confirm everything works:</p>
        <CodeBlock
          code={`curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          language="bash"
        />

        <h4 className="text-base font-semibold text-white mb-2 mt-7">2 · Create your first event</h4>
        <p className="text-gray-400 text-sm mb-3">Create a simple event with only the required fields:</p>
        <CodeBlock
          code={`curl -X POST "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "My First API Event",
    "start_time": "2025-12-15T14:30:00",
    "end_time": "2025-12-15T16:00:00"
  }'`}
          language="bash"
        />

        <Callout type="success" className="mt-5">
          <strong>That&apos;s it!</strong> The response includes the event ID and other details.
          Now jump to the Calendar or Leads API to explore every endpoint with an interactive
          request builder.
        </Callout>
      </div>
    </section>
  );
}
