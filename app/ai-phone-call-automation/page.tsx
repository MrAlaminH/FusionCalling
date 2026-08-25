import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DefinitionBlock from "@/components/definition-block";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "What Is AI Phone Call Automation?";
const description =
  "Plain-English explainer on AI phone call automation: how AI voice agents answer and place calls, the tech behind them, and results with Fusion Calling.";

const howItWorksSteps = [
  {
    title: "The call connects",
    text: "An inbound caller reaches your business number — or the AI agent places an outbound call from your number. There is no phone tree and no hold music; a natural voice answers on the first ring, in your brand's tone.",
  },
  {
    title: "Speech is transcribed in real time",
    text: "Automatic speech recognition (ASR) converts the caller's words into text within milliseconds, capturing accents, background noise, and mid-sentence corrections. Latency here determines whether the conversation feels human, which is why modern platforms tune it aggressively.",
  },
  {
    title: "The language model decides what to say",
    text: "A large language model interprets intent — booking, pricing questions, rescheduling, complaint handling — and composes the next response using your business knowledge: services, hours, policies, and FAQs you provide at setup.",
  },
  {
    title: "Voice synthesis replies naturally",
    text: "Text-to-speech renders the response in a selected voice with realistic pacing, pauses, and intonation. Callers can interrupt (barge-in), change topics mid-sentence, or switch languages, and the agent follows.",
  },
  {
    title: "Actions happen during the call",
    text: "The agent books the appointment in your calendar, writes the lead to your CRM, sends an SMS confirmation, processes common requests end-to-end, and transfers to a human teammate when judgment or empathy demands it.",
  },
];

const useCases = [
  {
    name: "Real estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Capture every property inquiry 24/7, qualify buyers, and schedule showings automatically — no more voicemail leads going cold.",
  },
  {
    name: "Dental & healthcare practices",
    href: "/industries/ai-voice-for-dental",
    text: "Handle appointment bookings, reschedules, and insurance questions while staying compliant with HIPAA requirements.",
  },
  {
    name: "Insurance",
    href: "/industries/ai-voice-for-insurance",
    text: "Qualify inbound leads, route policy questions, and follow up consistently while respecting TCPA rules for outbound calls.",
  },
  {
    name: "Home services",
    href: "/industries/ai-voice-for-home-services",
    text: "Answer emergency calls after hours, book estimates, and route jobs to the right technician the moment a customer calls.",
  },
];

const faqs = [
  {
    question: "Is AI phone call automation the same as an IVR menu?",
    answer:
      "No. A traditional IVR forces callers through numbered menus ('press 1 for sales'). AI phone call automation uses conversational voice agents that understand free-form speech, remember context within the call, and complete tasks like booking or CRM updates — callers simply say what they need.",
  },
  {
    question: "Can callers tell they are talking to an AI?",
    answer:
      "Modern voice agents are designed to be transparent when asked, but the conversation itself feels natural: sub-second responses, realistic pacing, interruption handling, and multi-language support. Most businesses introduce the agent by name in the greeting, which callers accept readily.",
  },
  {
    question: "What happens when the AI cannot handle a call?",
    answer:
      "Well-configured agents detect situations that require human judgment — complex disputes, emotional conversations, unusual requests — and transfer the call to your team with full context: a transcript, the caller's details, and the reason for the handoff.",
  },
  {
    question: "How much does AI phone call automation cost?",
    answer:
      "Fusion Calling plans start at $149/month with 500 included minutes, scale to $497/month for 2,100 minutes, and require no long-term contracts. Use our ROI calculator to estimate savings against missed calls and staffing costs.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most Fusion Calling agents go live within days of kickoff: you provide your business knowledge, choose a voice, connect your calendar and CRM, then test calls with the team before turning the agent on for customers.",
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
            name: "What Is AI Phone Call Automation?",
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
        datePublished: "2026-01-15",
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
            "The use of AI voice agents to automatically place and answer business phone calls without a human on the line.",
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
              Voice AI 101
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              What Is{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Phone Call Automation
              </span>
              ?
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A complete, plain-English guide to how AI voice agents place and
              answer calls, the technology that powers them, and the results
              businesses see — plus the standards Fusion Calling follows.{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                View pricing
              </Link>{" "}
              to see plans for every team size.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#show-case"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
              >
                See It in Action
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/5"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Relocated explainer + stats */}
        <DefinitionBlock />

        {/* How it works */}
        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How AI phone call automation works
            </h2>
            <div className="space-y-8">
              {howItWorksSteps.map((step, i) => (
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

        {/* Use cases */}
        <section id="use-cases" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What businesses use it for
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Any business that loses revenue to missed calls benefits from AI
              phone automation. These verticals see the fastest payback:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.name}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    AI phone automation for {uc.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {uc.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How it compares to traditional options
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">
                  vs. IVR phone trees
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  IVRs route calls; they cannot answer questions or complete
                  tasks. AI agents hold real conversations and take action —
                  booking, updating records, answering policy questions.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">
                  vs. human answering services
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Answering services cost $1–3 per minute, work in shifts, and
                  read from scripts. AI agents answer instantly around the clock
                  at a flat monthly rate, with your full business knowledge.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">
                  vs. hiring a receptionist
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A full-time receptionist covers ~40 hours a week and one call
                  at a time. AI agents handle unlimited concurrent calls, never
                  take leave, and cost a fraction of a salary.
                </p>
              </div>
            </div>
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
              Want the numbers for your business?{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                Run the ROI calculator
              </Link>{" "}
              or{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                watch live demo calls
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Relocated authoritative sources & references */}
        <Sources />

        <Footer />
      </main>
    </>
  );
}
