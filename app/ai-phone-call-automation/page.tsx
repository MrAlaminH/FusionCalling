import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { DIRECT_PLANS } from "@/lib/product-facts";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Phone Call Automation Guide (2026)";
const description =
  "AI phone call automation handles inbound and outbound calls — receptionist answering, cold calling, lead qualification, and reminders. From $149/mo.";

// Featured-snippet bait: 40-60 word definition + the price anchor, directly
// beneath the hero (answer-first, per the plans/seo-pages-upgrade-2026-10-06 doc).
const quickAnswer =
  "AI phone call automation is software that handles business phone calls without a human on the line — answering inbound calls, placing outbound campaigns, and completing the follow-through (calendar booking, CRM updates, SMS confirmations) during the call itself. Fusion Calling runs both directions on one platform from $149/month with 500 included minutes.";

const automationComparison = [
  {
    feature: "Calls covered",
    automation: "Inbound + outbound on one platform",
    receptionist: "Inbound only",
    human: "Inbound only, script-driven",
    voicemail: "None — one-way messages",
  },
  {
    feature: "Two-way conversation",
    automation: "Yes — answers, qualifies, books",
    receptionist: "Yes, inbound tasks",
    human: "Scripted + human agents",
    voicemail: "No",
  },
  {
    feature: "Outbound campaigns",
    automation: "Follow-ups, qualification, reminders",
    receptionist: "Not included",
    human: "Limited or extra cost",
    voicemail: "No",
  },
  {
    feature: "Books into your calendar",
    automation: "During the call",
    receptionist: "During the call",
    human: "Message relayed, callback later",
    voicemail: "Depends on the caller",
  },
  {
    feature: "Transcripts & recordings",
    automation: "Every call",
    receptionist: "Every call",
    human: "Summary notes",
    voicemail: "None",
  },
  {
    feature: "Typical monthly cost",
    automation: "$149–497 flat",
    receptionist: "$149–497 flat",
    human: "$1–3 per minute plus setup",
    voicemail: "Free — but callers hang up",
  },
];

const fitsWell = [
  "Businesses losing revenue to missed calls — home services, clinics, real estate, legal",
  "Sales teams where speed-to-lead decides the deal — inbound inquiries called back in minutes, not hours",
  "Operations running appointment books that bleed no-shows — confirmations and backfills run themselves",
  "Outreach programs that need consent-aware, transcript-auditable calling at volume",
  "Agencies that want to resell all of the above under their own brand",
];

const fitsPoorly = [
  "Teams whose calls are almost entirely complex, judgment-heavy conversations — automate the routine, route the rest",
  "Programs that cannot review calling-consent rules (e.g. TCPA in the US) before dialing — compliance stays your responsibility",
  "Buyers who need a human voice as part of the brand promise — a staffed line is still the right tool for that job",
];

const directions = [
  {
    title: "Inbound automation",
    text: "Every incoming call is answered on the first ring: greetings, questions about services and hours, booking and rescheduling, messages, SMS follow-ups, and warm transfers when a human is needed.",
  },
  {
    title: "Outbound automation",
    text: "Campaigns dial your lists in parallel within your time-of-day rules: follow-ups, re-engagement, qualification, and reminders — with transcripts and outcome tags on every call.",
  },
];

const workflows = [
  {
    name: "AI phone call receptionist",
    href: "/ai-phone-call-receptionist",
    text: "The inbound front desk: answers your lines 24/7, books appointments, and hands complex calls to your team with full context.",
  },
  {
    name: "AI appointment setting",
    href: "/ai-phone-call-automation/appointment-setting",
    text: "Calls new inquiries within minutes and books the qualified ones into your calendar — speed-to-lead plus outbound setting campaigns.",
  },
  {
    name: "After-hours answering",
    href: "/ai-phone-call-automation/after-hours-answering",
    text: "Nights, weekends, and holidays covered: emergency triage to on-call staff, routine callers booked for morning.",
  },
  {
    name: "AI cold calling software",
    href: "/ai-phone-call-automation/cold-calling",
    text: "Outbound agents that dial your lists, qualify prospects through real conversations, and book meetings into your calendar.",
  },
  {
    name: "AI lead qualification calls",
    href: "/ai-phone-call-automation/lead-qualification",
    text: "Reach new leads in minutes, ask your qualification questions, and route only sales-ready prospects to closers.",
  },
  {
    name: "Automated appointment reminders",
    href: "/ai-phone-call-automation/appointment-reminders",
    text: "Confirm, reschedule, and backfill bookings automatically — cut no-shows without staff chasing the phone.",
  },
];

const capabilities = [
  {
    title: "Unlimited parallel calls",
    text: "Capacity scales with your plan's minutes, not headcount. Ten callers at once cost the same as one — peak hours stop being a staffing problem.",
  },
  {
    title: "Calendar, CRM & SMS wired in",
    text: "Bookings land in your calendar, leads write to your CRM, and confirmations go out by SMS during the call — no manual data entry afterward.",
  },
  {
    title: "Every call transcribed",
    text: "Full transcripts, recordings, and outcome tags on every conversation, so you can see what converts and prove ROI per campaign.",
  },
  {
    title: "Compliance controls you set",
    text: "Consent-aware outbound, calling-hour windows, and opt-out handling for TCPA-conscious programs. The rules are yours; the agent follows them.",
  },
  {
    title: "Your voice, your languages",
    text: "Choose the voice and tone that fit your brand, serve callers in multiple languages, and handle interruptions and topic changes mid-call.",
  },
  {
    title: "White-label for agencies",
    text: "Resell automation under your own brand with client sub-accounts and Stripe rebilling — the reseller program starts at $99/month.",
  },
];

const launchSteps = [
  {
    title: "Connect your number",
    text: "Bring your existing business number or provision a new one. Inbound routing and outbound caller ID are configured to match your brand.",
  },
  {
    title: "Teach it your business",
    text: "Provide services, pricing, hours, policies, and FAQs in plain language. The agent answers from your knowledge — not generic scripts.",
  },
  {
    title: "Set the rules",
    text: "Define greetings, booking logic, qualification questions, calling windows, and exactly when to transfer to a human — and to whom.",
  },
  {
    title: "Test, then go live",
    text: "Place test calls with the team, tune responses against real transcripts, then turn the agent on. Most deployments go live within days of kickoff.",
  },
];

const verticals = [
  {
    name: "Real estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Qualify buyers, schedule showings, and follow up on listings around the clock.",
  },
  {
    name: "Home services",
    href: "/industries/ai-voice-for-home-services",
    text: "Answer emergency calls after hours and book estimates straight into the schedule.",
  },
  {
    name: "Insurance",
    href: "/industries/ai-voice-for-insurance",
    text: "Qualify inbound leads and run renewal and follow-up campaigns within calling rules.",
  },
  {
    name: "Financial services",
    href: "/industries/ai-voice-for-financial-services",
    text: "Schedule advisor meetings and follow up on applications without adding staff.",
  },
  {
    name: "Restaurants & hospitality",
    href: "/industries/ai-voice-for-restaurants-hospitality",
    text: "Capture reservations, answer hours-and-menu questions, and confirm bookings automatically.",
  },
  {
    name: "Ecommerce & retail",
    href: "/industries/ai-voice-for-ecommerce-retail",
    text: "Handle order-status calls, returns, and pre-purchase questions without queueing customers.",
  },
];

const faqs = [
  {
    question: "What is AI phone call automation?",
    answer:
      "AI phone call automation is software that handles business phone calls without a human on the line: it answers inbound calls, places outbound calls, holds natural conversations, and completes follow-through work like booking, CRM updates, and SMS confirmations. Fusion Calling runs both directions on one platform from $149/month.",
  },
  {
    question:
      "What is the difference between AI phone call automation and an AI receptionist?",
    answer:
      "Automation is the whole capability — every inbound and outbound workflow running on software. The AI receptionist is one application of it: the inbound voice agent that answers your lines like a front-desk employee. If you only need inbound coverage, start with the AI phone call receptionist guide; if you also want outbound campaigns, reminders, or qualification, you need the full automation platform described on this page.",
  },
  {
    question: "Does it handle outbound calls or only inbound?",
    answer:
      "Both. Inbound agents answer, book, and route; outbound agents dial lists in parallel for follow-ups, re-engagement, qualification, and reminders. You can run one direction or both on the same account, under the same calling rules and minute pool.",
  },
  {
    question: "How much does AI phone call automation cost?",
    answer:
      "Plans start at $149/month with 500 included minutes — agencies resell from $99/month; full tiers on /pricing.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most deployments go live within days of kickoff: connect your number, provide your business knowledge, set greetings and handoff rules, then test with the team before switching it on. Complex multi-workflow setups take longer, but a single inbound or outbound workflow is typically live in under a week.",
  },
  {
    question: "What tools does it connect to?",
    answer:
      "Calendars for booking, CRMs for lead and outcome logging, SMS for confirmations and follow-ups, and Zapier for 2,200+ additional apps. The agent reads and writes during the call, so records stay current without staff typing anything in by hand.",
  },
  {
    question: "Is automated outbound calling legal?",
    answer:
      "Outbound rules depend on your jurisdiction — in the US, the TCPA governs consent, calling hours, and do-not-call obligations, and automation does not exempt you. Fusion Calling supports consent-aware workflows, time-of-day windows, and opt-out handling, but list consent and compliance decisions remain your responsibility. Consult counsel for your program.",
  },
  {
    question: "Can agencies white-label it?",
    answer:
      "Yes. Agencies resell the platform under their own brand with client sub-accounts, branded portals, and Stripe rebilling from $99/month. Each client gets their own agents, numbers, and rules while you manage everything from one dashboard.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-phone-call-automation" }),
};

export default function AiPhoneCallAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-call-automation#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Phone Call Automation",
            item: `${SITE_URL}/ai-phone-call-automation`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-phone-call-automation#article`,
        headline: "AI Phone Call Automation, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-09-19",
        dateModified: CONTENT_LAST_UPDATED,
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-phone-call-automation`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI phone call automation",
          description:
            "Software that handles inbound and outbound business calls end to end — answering, dialing, conversing, booking, and logging — without a human on the line.",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation#breadcrumb`,
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/ai-phone-call-automation#howto`,
        name: "How to launch AI phone call automation",
        description:
          "Connect a number, teach the agent your business, set the rules, then test and go live — most deployments are live within days of kickoff.",
        totalTime: "P3D",
        step: launchSteps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.text,
          url: `${SITE_URL}/ai-phone-call-automation#how-it-works`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-automation#faqpage`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="ai-phone-call-automation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />

        {/* Hero */}
        <section
          id="overview"
          className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
              Voice AI Platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Phone Call Automation
              </span>{" "}
              for Inbound & Outbound Calls
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              One platform that answers every inbound call and dials every
              outbound campaign — receptionist coverage, cold calling, lead
              qualification, and appointment reminders with bookings, CRM
              updates, and SMS handled during the call.{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                Hear live demo calls
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                view pricing
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#show-case"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition duration-300 hover:bg-brand-strong"
              >
                See It in Action
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/5"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Quick answer — answer-first for snippets and answer engines */}
        <section className="w-full bg-black pb-4" aria-label="Quick answer">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="glass-light rounded-2xl border border-brand/30 p-6 md:p-8">
              <h2 className="text-lg font-bold text-white mb-3">
                Quick answer
              </h2>
              <p className="text-gray-300 leading-relaxed">{quickAnswer}</p>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section id="what-is" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is AI phone call automation?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              AI phone call automation moves routine call work off your team
              and onto software: voice agents answer inbound calls, place
              outbound calls, hold natural two-way conversations, and complete
              the follow-through — booking calendars, writing CRM records, and
              sending SMS confirmations — while your people handle only the
              conversations that need judgment.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              It covers both directions of your phone lines. Need just the
              inbound front desk? That is the{" "}
              <Link
                href="/ai-phone-call-receptionist"
                className="text-brand hover:underline"
              >
                AI phone call receptionist
              </Link>
              . Everything below — inbound plus outbound, on one account — is
              the automation platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {directions.map((d) => (
                <div
                  key={d.title}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <h3 className="font-semibold text-white mb-2">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How it compares to your other options
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
              Call automation, a single AI receptionist, a human answering
              service, and voicemail sit at different points on the same line.
              The honest comparison:
            </p>
            <div className="mb-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[720px] text-sm">
                <caption className="sr-only">
                  AI phone call automation compared with an AI receptionist, a
                  human answering service, and voicemail
                </caption>
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-semibold text-gray-400"
                    >
                      Option
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-brand-light bg-brand/[0.08]"
                    >
                      AI call automation
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-gray-400"
                    >
                      AI receptionist
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-gray-400"
                    >
                      Answering service
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-gray-400"
                    >
                      Voicemail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {automationComparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-white/5 last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 text-left font-medium text-gray-300"
                      >
                        {row.feature}
                      </th>
                      <td className="px-4 py-3 text-center text-white bg-brand/[0.06] font-medium">
                        {row.automation}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.receptionist}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.human}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-500">
                        {row.voicemail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Only need the inbound side? That is the{" "}
              <Link
                href="/ai-phone-call-receptionist"
                className="text-brand hover:underline"
              >
                AI phone call receptionist
              </Link>{" "}
              — same platform, one workflow.
            </p>
          </div>
        </section>

        {/* Workflows hub */}
        <section id="workflows" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Six workflows, one platform
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Run any combination on the same account and minute pool. Each
              workflow has a dedicated guide:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflows.map((w) => (
                <Link
                  key={w.href}
                  href={w.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    {w.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {w.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Platform capabilities */}
        <section id="capabilities" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              What the platform does for you
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Launch */}
        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Launching automation on your lines
            </h2>
            <div className="space-y-8">
              {launchSteps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand-strong font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section id="industries" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries running on it
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Follow-up-heavy businesses see the fastest payback — every missed
              call and unsent reminder is revenue walking out:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {verticals.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    AI voice for {v.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {v.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Who is this for */}
        <section id="who-its-for" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Who is AI phone call automation for?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-brand/20 bg-black/40 p-6">
                <h3 className="font-semibold text-brand-light mb-4">
                  A strong fit when
                </h3>
                <ul className="space-y-3">
                  {fitsWell.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span aria-hidden className="text-brand-strong">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-6">
                <h3 className="font-semibold text-gray-300 mb-4">
                  The wrong tool when
                </h3>
                <ul className="space-y-3">
                  {fitsPoorly.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                      <span aria-hidden className="text-gray-600">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How much does AI phone call automation cost?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl">
              Every workflow — inbound, outbound, or both — runs on the same
              direct plans. Prices and minutes from the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                live pricing page
              </Link>
              :
            </p>
            <div className="mb-8 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[600px] text-sm">
                <caption className="sr-only">
                  Fusion Calling AI phone call automation plans: price,
                  included minutes, setup fee, and overage rate
                </caption>
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-400">
                      Plan
                    </th>
                    <th scope="col" className="px-4 py-3 text-center font-semibold text-gray-400">
                      Monthly price
                    </th>
                    <th scope="col" className="px-4 py-3 text-center font-semibold text-gray-400">
                      Included minutes
                    </th>
                    <th scope="col" className="px-4 py-3 text-center font-semibold text-gray-400">
                      Setup fee
                    </th>
                    <th scope="col" className="px-4 py-3 text-center font-semibold text-gray-400">
                      Overage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DIRECT_PLANS.map((plan) => (
                    <tr key={plan.name} className="border-b border-white/5 last:border-b-0">
                      <th scope="row" className="px-4 py-3 text-left font-medium text-gray-300">
                        {plan.name}
                      </th>
                      <td className="px-4 py-3 text-center text-white font-medium">
                        ${plan.price}/mo
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {plan.includedMinutes.toLocaleString("en-US")}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {plan.setupFee === 0 ? "$0" : `$${plan.setupFee}`}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {plan.overageRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Reselling automation to clients? The{" "}
              <Link
                href="/whitelabel/reseller-program"
                className="text-brand hover:underline"
              >
                AI voice agent reseller program
              </Link>{" "}
              starts at $99/month with 6 client sub-accounts included.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-8">
              Keep exploring:{" "}
              <Link
                href="/ai-phone-call-receptionist"
                className="text-brand hover:underline"
              >
                how an AI phone call receptionist works
              </Link>
              ,{" "}
              <Link
                href="/ai-voice-agent"
                className="text-brand hover:underline"
              >
                what an AI voice agent is
              </Link>
              , the{" "}
              <Link href="/ai-receptionist" className="text-brand hover:underline">
                AI receptionist for inbound calls
              </Link>
              , or{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                compare plans
              </Link>
              .
            </p>
          </div>
        </section>

        <Sources />

        <Footer />
      </main>
    </>
  );
}
