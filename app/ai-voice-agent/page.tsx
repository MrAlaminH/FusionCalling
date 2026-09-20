import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Voice Agent: 2026 Guide";
const description =
  "What is an AI voice agent? How speech recognition, language models, and voice synthesis hold real phone conversations — plus types, use cases, and pricing from $149/mo.";

const pipeline = [
  {
    title: "Speech recognition (ASR)",
    text: "The caller's speech becomes text in milliseconds — accents, background noise, and mid-sentence corrections included. Latency here decides whether the call feels human.",
  },
  {
    title: "Language model (LLM)",
    text: "The model interprets intent and composes the next response from your business knowledge: services, hours, policies, FAQs, and the rules you set for booking and handoffs.",
  },
  {
    title: "Voice synthesis (TTS)",
    text: "The reply renders in a chosen voice with natural pacing and pauses. Callers can interrupt, switch topics, or change languages mid-call and the agent follows.",
  },
  {
    title: "Actions & integrations",
    text: "During the call the agent books calendars, writes CRM records, sends SMS confirmations, and transfers to humans with full context when judgment is required.",
  },
];

const types = [
  {
    name: "Receptionist agents",
    href: "/ai-phone-call-receptionist",
    text: "Answer inbound lines 24/7: greetings, questions, booking, messages, and smart transfers. The front desk that never misses a call.",
  },
  {
    name: "Sales & cold calling agents",
    href: "/ai-phone-call-automation/cold-calling",
    text: "Dial prospect lists in parallel, hold real conversations, qualify, and book meetings — with consent-aware outbound controls.",
  },
  {
    name: "Lead qualification agents",
    href: "/ai-phone-call-automation/lead-qualification",
    text: "Reach new leads in minutes, ask your qualification questions, and route only sales-ready prospects to closers.",
  },
  {
    name: "Reminder & follow-up agents",
    href: "/ai-phone-call-automation/appointment-reminders",
    text: "Confirm bookings, reschedule cancellations, and re-engage past customers automatically — no-shows fall without staff effort.",
  },
];

const buyingCriteria = [
  {
    title: "Voice quality under interruption",
    text: "Scripts sound fine in demos. What matters is barge-in handling, topic changes, accents, and sub-second replies — test with messy real-world calls, not staged ones.",
  },
  {
    title: "Real task completion",
    text: "An agent that only talks is a novelty. Demand calendar booking, CRM writes, and SMS confirmations completed during the call — listen for it in the demo.",
  },
  {
    title: "Minutes, not seats",
    text: "Per-seat pricing punishes growth. Minute-pooled plans (Fusion Calling: 500–2,100 minutes from $149–$497/month) scale with call volume instead of headcount.",
  },
  {
    title: "Compliance controls",
    text: "Calling-hour windows, consent-aware outbound, opt-out handling, and transcript retention you configure. If a vendor can't show these, keep looking.",
  },
  {
    title: "Time to live",
    text: "Weeks of professional-services onboarding is a red flag for standard use cases. Most Fusion Calling agents go live within days of kickoff.",
  },
  {
    title: "White-label path",
    text: "Agencies should be able to resell the same agents under their own brand with sub-accounts and rebilling — a $99/month starting point keeps the math working.",
  },
];

const faqs = [
  {
    question: "What is an AI voice agent?",
    answer:
      "An AI voice agent is software that holds spoken phone conversations on behalf of a business: it listens, understands intent, replies in a natural voice, and completes tasks like booking appointments or updating a CRM. It combines speech recognition, a language model, and voice synthesis with telephony and business integrations — no human on the line.",
  },
  {
    question: "Is an AI voice agent the same as an AI receptionist?",
    answer:
      "A receptionist is one type of voice agent — the inbound one that answers your lines. 'AI voice agent' is the broader category: it also covers outbound sales agents, qualification agents, and reminder agents. Our AI phone call receptionist guide covers the inbound type; AI phone call automation covers the full platform.",
  },
  {
    question: "How do AI voice agents work technically?",
    answer:
      "Four stages run in a loop: automatic speech recognition transcribes the caller, a large language model decides the response using your business knowledge, text-to-speech renders it in a natural voice, and integrations execute actions like booking or CRM updates. The full loop typically completes in under a second, which is why conversations feel fluid.",
  },
  {
    question: "Can AI voice agents handle outbound calls?",
    answer:
      "Yes. The same agent technology dials lists in parallel for cold calling, lead qualification, reminders, and follow-ups — inside calling-hour windows and consent rules you configure. Inbound and outbound can run on the same account and minute pool.",
  },
  {
    question: "How much does an AI voice agent cost?",
    answer:
      "Fusion Calling plans start at $149/month with 500 included minutes and scale to $497/month for 2,100 minutes — no setup fee, no long-term contract. Compare that against a full-time hire ($3,000+/month for 40 hours a week, one call at a time) or human answering services ($1–3 per minute).",
  },
  {
    question: "Do callers know they're talking to an AI?",
    answer:
      "Best practice is transparency when asked — most businesses introduce the agent by name in the greeting, which callers accept readily. The conversation itself feels natural: fast replies, realistic pacing, interruption handling, and multiple languages.",
  },
  {
    question: "What can't AI voice agents do?",
    answer:
      "They don't replace human judgment: complex disputes, emotional conversations, and unusual requests should transfer to your team — which is why warm transfers with full transcripts are a core feature, not an afterthought. They also don't exempt outbound programs from telemarketing rules like the TCPA.",
  },
  {
    question: "How do I choose an AI voice agent platform?",
    answer:
      "Test interruption handling with messy calls, verify tasks complete during the call (booking, CRM, SMS), prefer minute-pooled over per-seat pricing, confirm compliance controls, and measure time-to-live in days not months. Hear live demo calls on our homepage before comparing plans.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-voice-agent" }),
};

export default function AiVoiceAgentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-voice-agent#breadcrumb`,
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
            name: "AI Voice Agent",
            item: `${SITE_URL}/ai-voice-agent`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-voice-agent#article`,
        headline: "AI Voice Agent, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-09-19",
        dateModified: CONTENT_LAST_UPDATED,
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-voice-agent`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI voice agent",
          description:
            "Software that holds spoken phone conversations for a business — listening, understanding, replying in a natural voice, and completing tasks like booking and CRM updates.",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-voice-agent#webpage`,
        url: `${SITE_URL}/ai-voice-agent`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-voice-agent#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-voice-agent#faqpage`,
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
        id="ai-voice-agent-schema"
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
              Voice AI 101
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              What Is an{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Voice Agent
              </span>
              ?
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Software that holds real phone conversations for your business —
              answering, dialing, booking, and logging — from $149/month.{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                Hear one in action
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
                Hear It in Action
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

        {/* Pipeline */}
        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How an AI voice agent works
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Every second of conversation runs the same four-stage loop —
              transcribe, decide, speak, act — in under a second:
            </p>
            <div className="space-y-8">
              {pipeline.map((step, i) => (
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

        {/* Types */}
        <section id="types" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Four agents, one platform
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              &quot;AI voice agent&quot; covers a family of specialized agents.
              Fusion Calling runs all four on one account:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {types.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {t.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Buying criteria */}
        <section id="choosing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How to judge a voice agent platform
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {buyingCriteria.map((c) => (
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

        {/* Pricing */}
        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI voice agent pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              $149/month with 500 included minutes, scaling to $497/month for
              2,100 minutes — no setup fee, no long-term contract. Estimate
              your volume with the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                call volume calculator
              </Link>{" "}
              or compare tiers on the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                pricing page
              </Link>
              . Buying coverage as a service? See the{" "}
              <Link
                href="/ai-answering-service"
                className="text-brand hover:underline"
              >
                AI answering service
              </Link>
              .
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
              Go deeper:{" "}
              <Link
                href="/ai-phone-call-receptionist"
                className="text-brand hover:underline"
              >
                the AI receptionist explainer
              </Link>
              , the{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                automation platform guide
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
