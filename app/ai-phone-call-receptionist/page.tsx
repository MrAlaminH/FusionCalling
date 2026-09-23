import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DefinitionBlock from "@/components/definition-block";
import Sources from "@/components/sources";
import CallDemo from "@/components/call-demo";
import { Reveal } from "@/components/ui/reveal";
import { primaryButton, secondaryButton } from "@/components/ui/button-styles";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

const title = "AI Phone Call Receptionist: 2026 Guide";
const description =
  "How an AI phone call receptionist works: the ASR, LLM, and TTS pipeline behind it, what it handles on calls, and how it compares to IVR and human staff.";

/** This page's content revision — page-local so other pages' schema is unaffected. */
const pageUpdated = "2026-09-24";

const sectionEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3";
const sectionHeading =
  "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4";

const heroTrustChips = [
  "24/7 call coverage",
  "Books & reschedules on the call",
  "Warm transfers with full context",
];

const howItWorksSteps = [
  {
    stage: "Telephony",
    title: "The call connects",
    text: "An inbound caller reaches your business number — or the AI receptionist places an outbound call from your number. There is no phone tree and no hold music; a natural voice answers on the first ring, in your brand's tone.",
  },
  {
    stage: "ASR",
    title: "Speech is transcribed in real time",
    text: "Automatic speech recognition (ASR) converts the caller's words into text within milliseconds, capturing accents, background noise, and mid-sentence corrections. Latency here determines whether the conversation feels human, which is why modern platforms tune it aggressively.",
  },
  {
    stage: "LLM",
    title: "The language model decides what to say",
    text: "A large language model interprets intent — booking, pricing questions, rescheduling, complaint handling — and composes the next response using your business knowledge: services, hours, policies, and FAQs you provide at setup.",
  },
  {
    stage: "TTS",
    title: "Voice synthesis replies naturally",
    text: "Text-to-speech renders the response in a selected voice with realistic pacing, pauses, and intonation. Callers can interrupt (barge-in), change topics mid-sentence, or switch languages, and the receptionist follows.",
  },
  {
    stage: "Actions",
    title: "Actions happen during the call",
    text: "The receptionist books the appointment in your calendar, writes the lead to your CRM, sends an SMS confirmation, processes common requests end-to-end, and transfers to a human teammate when judgment or empathy demands it.",
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
  {
    name: "Restaurants & hospitality",
    href: "/industries/ai-voice-for-restaurants-hospitality",
    text: "Take reservations, confirm bookings, and answer questions about hours, menus, and parking, even during the dinner rush. No-show reminders and waitlist callbacks run on their own.",
  },
  {
    name: "Ecommerce & retail",
    href: "/industries/ai-voice-for-ecommerce-retail",
    text: "Answer questions about orders, delivery times, and returns, and place follow-up calls about carts or back-in-stock items. Your shop phone stays covered nights and weekends without extra staff.",
  },
];

const comparisonRows = [
  {
    feature: "Covers nights, weekends & holidays",
    ai: "Yes — 24/7",
    ivr: "Menus run, answer nothing",
    service: "Shift-based",
    human: "No — ~40 hours/week",
  },
  {
    feature: "Understands free-form speech",
    ai: "Yes",
    ivr: "No — numbered menus",
    service: "Reads from scripts",
    human: "Yes",
  },
  {
    feature: "Books, reschedules & updates your CRM",
    ai: "Yes, during the call",
    ivr: "No — routes calls only",
    service: "Takes messages",
    human: "Yes",
  },
  {
    feature: "Concurrent calls",
    ai: "Unlimited",
    ivr: "Unlimited",
    service: "One per agent",
    human: "One",
  },
  {
    feature: "Typical cost",
    ai: "$149/month flat",
    ivr: "Per-minute fees + lost leads",
    service: "$1–3 per minute",
    human: "Salary + benefits",
  },
];

const callTakeaways = [
  {
    title: "Actions completed mid-call",
    text: "The reschedule and the SMS confirmation both happened while the caller was still on the line — no callbacks, no admin work.",
  },
  {
    title: "Humans stay in the loop",
    text: "The billing question triggered a warm transfer: a teammate joined with the transcript and caller details already attached.",
  },
  {
    title: "Every call leaves a record",
    text: "Transcript, summary, and outcome are written to your dashboard and synced to your calendar and CRM automatically.",
  },
];

const faqs = [
  {
    question: "What does an AI phone call receptionist do?",
    answer:
      "An AI phone call receptionist answers your business lines around the clock: it greets callers, answers questions about your services, hours, and policies, books and reschedules appointments, takes detailed messages, sends SMS follow-ups, and transfers urgent or sensitive calls to your team with full context.",
  },
  {
    question:
      "Is an AI phone call receptionist the same as AI phone call automation?",
    answer:
      "They are closely related. AI phone call automation is the underlying capability — software that handles inbound and outbound calls without a human. The AI receptionist is its business-facing application: a named voice agent that answers your line, follows your rules for greetings, booking, and handoffs, and behaves like a front-desk employee. People searching either term usually want the same thing.",
  },
  {
    question: "Is an AI phone call receptionist the same as an IVR menu?",
    answer:
      "No. A traditional IVR forces callers through numbered menus ('press 1 for sales'). An AI receptionist uses conversational voice agents that understand free-form speech, remember context within the call, and complete tasks like booking or CRM updates — callers simply say what they need.",
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
    question: "How much does an AI phone call receptionist cost?",
    answer:
      "Plans start at $149/month with 500 included minutes — see /pricing for every tier, and use the ROI calculator to estimate savings against missed calls.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Most Fusion Calling agents go live within days of kickoff: you provide your business knowledge, choose a voice, connect your calendar and CRM, then test calls with the team before turning the agent on for customers.",
  },
  {
    question: "What is AI call handling?",
    answer:
      "AI call handling means software answers your business calls, talks with the caller, and takes care of routine work like booking, answering common questions, or passing the call to the right person. At Fusion Calling, the agent follows your rules for greetings, hours, and handoffs, so every caller gets a quick, polite reply even after hours.",
  },
  {
    question: "What is automated call handling vs IVR?",
    answer:
      "Automated call handling lets callers speak in their own words and get things done, while a classic IVR menu makes them press numbers and wait through fixed options. An IVR can only route calls, but an AI agent understands intent, asks follow-up questions, and completes tasks like scheduling or updating your CRM.",
  },
  {
    question: "What is conversational AI for phone calls?",
    answer:
      "Conversational AI for phone calls is technology that holds a two-way spoken talk with a caller instead of playing recorded prompts. It listens, understands meaning, and replies in a normal voice, so callers can interrupt, change topics, or ask questions the way they would with a person.",
  },
  {
    question: "What is telephony automation?",
    answer:
      "Telephony automation means your phone system runs routine call work on its own: answering, placing calls, sending follow-up texts, and logging notes. It connects your phone number to tools like your calendar and CRM, so bookings and records stay current without staff typing them in by hand.",
  },
  {
    question: "Can AI answer phone calls by itself?",
    answer:
      "Yes. AI voice agents answer inbound calls and place outbound calls on their own — no human on the line. They greet the caller, understand what they need, complete tasks like booking or CRM updates, and transfer to a person when judgment is required. You set the rules for greetings, escalation, and hours.",
  },
  {
    question: "Are AI phone agents worth it for small businesses?",
    answer:
      "Usually, yes — the math is about missed calls. Industry estimates suggest small businesses miss roughly 60% of inbound calls, and most first-time callers who hit voicemail never call back. If a single new customer is worth a few hundred dollars, an AI agent answering every call from $149/month typically pays for itself with one saved job or booking.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-phone-call-receptionist" }),
};

export default function AiPhoneCallReceptionistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-call-receptionist#breadcrumb`,
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
            name: "What Is an AI Phone Call Receptionist?",
            item: `${SITE_URL}/ai-phone-call-receptionist`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-phone-call-receptionist#article`,
        headline: "AI Phone Call Receptionist, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-01-15",
        dateModified: pageUpdated,
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-phone-call-receptionist`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI phone call receptionist",
          description:
            "A voice agent that answers a business's phone lines around the clock — greeting callers, answering questions, booking appointments, and handing complex calls to the team.",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/ai-phone-call-receptionist#howto`,
        name: "How an AI phone call receptionist works",
        description:
          "The five stages of an AI receptionist call, from connection to completed actions.",
        step: howItWorksSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.text,
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-receptionist#webpage`,
        url: `${SITE_URL}/ai-phone-call-receptionist`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: pageUpdated,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-receptionist#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-receptionist#faqpage`,
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
        id="ai-phone-call-receptionist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />

        {/* Hero */}
        <section
          id="overview"
          className="relative w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-20"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-40 w-[820px] max-w-full h-[380px] rounded-full bg-brand/10 blur-[100px] pointer-events-none"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
            <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
              Voice AI 101
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              What Is an{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Phone Call Receptionist
              </span>
              ?
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A complete, plain-English guide to how an AI receptionist answers
              and acts on business calls, the technology that powers it, and the
              results businesses see — plus the standards Fusion Calling
              follows. Ready to buy?{" "}
              <Link href="/" className="text-brand hover:underline">
                Get an AI phone call receptionist for your business with live
                demo calls
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                view pricing
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#show-case" className={primaryButton}>
                See It in Action
              </Link>
              <Link href="/pricing" className={secondaryButton}>
                View Pricing
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {heroTrustChips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full glass-light px-3.5 py-1.5 text-xs sm:text-sm text-gray-300"
                >
                  <Check className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Example call — product UI as proof */}
        <section
          id="call-example"
          className="w-full overflow-hidden bg-black py-16 md:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>Example call</p>
              <h2 className={sectionHeading}>
                What an AI phone call receptionist conversation looks like
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Below is an example of an AI receptionist call — a patient
                rescheduling a dental cleaning — rendered exactly as your team
                sees it in the call log: the full transcript, the actions the
                agent took mid-call, and the outcome it logged. Every call is
                transcribed, summarized, and synced to your calendar and CRM
                automatically.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CallDemo />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {callTakeaways.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.05} className="h-full">
                  <div className="glass-light h-full rounded-xl border border-brand/20 p-5">
                    <h3 className="font-display text-base font-bold text-white mb-2">
                      {t.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {t.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Relocated explainer + stats */}
        <DefinitionBlock />

        {/* How it works */}
        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 md:mb-12 max-w-2xl">
              <p className={sectionEyebrow}>The pipeline</p>
              <h2 className={sectionHeading}>
                How an AI phone call receptionist works
              </h2>
            </Reveal>
            <div className="border-t border-white/5">
              {howItWorksSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <div className="grid grid-cols-[auto,1fr] gap-5 md:gap-8 py-7 md:py-9 border-b border-white/5 items-start">
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl md:text-4xl font-bold text-brand/30 leading-none tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-light">
                          {step.stage}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Use cases</p>
              <h2 className={sectionHeading}>
                What businesses use it for
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Any business that loses revenue to missed calls benefits from an
                AI phone call receptionist. These verticals see the fastest
                payback:
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.name}
                  href={uc.href}
                  className="group glass-light rounded-xl p-5 border border-white/10 hover:border-brand/40 transition-premium flex items-start justify-between gap-4"
                >
                  <span>
                    <span className="block font-semibold text-brand-light mb-2 group-hover:text-brand transition-premium-fast">
                      AI receptionist for {uc.name}
                    </span>
                    <span className="block text-sm text-gray-400 leading-relaxed">
                      {uc.text}
                    </span>
                  </span>
                  <ArrowRight
                    className="w-4 h-4 mt-1 text-brand shrink-0 transition-premium-fast group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="use-case-guides" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Guides</p>
              <h2 className={sectionHeading}>Go deeper by use case</h2>
              <p className="text-gray-400 leading-relaxed">
                Dedicated guides for the highest-ROI automation workflows:
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/ai-phone-call-automation/appointment-reminders",
                  title: "Automated appointment reminder calls",
                  text: "Cut no-shows with AI calls that confirm, reschedule, and fill cancellations automatically.",
                },
                {
                  href: "/ai-phone-call-automation/cold-calling",
                  title: "AI cold calling software",
                  text: "Outbound AI agents that dial your lists, qualify prospects, and book meetings.",
                },
                {
                  href: "/ai-phone-call-automation/lead-qualification",
                  title: "AI lead qualification calls",
                  text: "Reach new leads in minutes and route only qualified prospects to your team.",
                },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="group glass-light rounded-xl p-5 border border-white/10 hover:border-brand/40 transition-premium flex flex-col"
                >
                  <span className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-premium-fast">
                    {g.title}
                  </span>
                  <span className="text-sm text-gray-400 leading-relaxed">
                    {g.text}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 mt-4 text-brand transition-premium-fast group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Compare</p>
              <h2 className={sectionHeading}>
                How it compares to traditional options
              </h2>
            </Reveal>
            <Reveal className="mb-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[720px] text-sm">
                <caption className="sr-only">
                  AI phone call receptionist compared with IVR menus, human
                  answering services, and an in-house receptionist
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
                      AI receptionist
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-gray-400"
                    >
                      IVR menu
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
                      Human receptionist
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
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
                        {row.ai}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.ivr}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.service}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.human}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <div className="space-y-4">
              <div className="glass-light rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">
                  vs. IVR phone trees
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  IVRs route calls; they cannot answer questions or complete
                  tasks. AI agents hold real conversations and take action —
                  booking, updating records, answering policy questions.
                </p>
              </div>
              <div className="glass-light rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">
                  vs. human answering services
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Answering services cost $1–3 per minute, work in shifts, and
                  read from scripts. AI agents answer instantly around the clock
                  at a flat monthly rate, with your full business knowledge.
                </p>
              </div>
              <div className="glass-light rounded-xl border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-1">
                  vs. a human receptionist
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A full-time human receptionist covers ~40 hours a week and one
                  call at a time. An AI receptionist handles unlimited
                  concurrent calls, never takes leave, and costs a fraction of a
                  salary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>FAQs</p>
              <h2 className={sectionHeading}>Frequently asked questions</h2>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="glass-light rounded-xl border border-brand/20 p-5"
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
              </Link>
              , explore the full{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                AI phone call automation platform
              </Link>
              ,{" "}
              <Link href="/" className="text-brand hover:underline">
                get an AI phone call receptionist with a live demo on the
                homepage
              </Link>
              ,{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                watch live demo calls
              </Link>
              , or compare buying options in the{" "}
              <Link
                href="/ai-answering-service"
                className="text-brand hover:underline"
              >
                AI answering service guide
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
