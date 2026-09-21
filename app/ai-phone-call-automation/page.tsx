import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Phone Call Automation Guide (2026)";
const description =
  "AI phone call automation handles inbound and outbound calls — receptionist answering, cold calling, lead qualification, and reminders. From $149/mo.";

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

        {/* Pricing */}
        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI phone call automation pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Every workflow runs on the same plans — starting at $149/month.
              See the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>
              . Reselling automation to clients? The{" "}
              <Link
                href="/whitelabel/reseller-program"
                className="text-brand hover:underline"
              >
                AI voice agent reseller program
              </Link>{" "}
              starts at $99/month.
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
