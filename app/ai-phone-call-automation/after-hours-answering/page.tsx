import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Hammer,
  KeyRound,
  MessageSquareText,
  MoonStar,
  PawPrint,
  PhoneCall,
  PhoneIncoming,
  Siren,
  Stethoscope,
  Sunrise,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import CallDemo, { type CallDemoTurn } from "@/components/call-demo";
import { Reveal } from "@/components/ui/reveal";
import {
  primaryButton,
  secondaryButton,
} from "@/components/ui/button-styles";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

const title = "After-Hours Answering Service with AI";
const description =
  "An AI after-hours answering service picks up nights, weekends, and holidays — emergency triage, next-day booking, messages. From $149/mo, live in days.";

/** This page's content revision — page-local so other pages' schema is unaffected. */
const pageUpdated = "2026-09-24";

const sectionEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3";
const sectionHeading =
  "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4";

const heroTrustChips = [
  "Nights, weekends & holidays covered",
  "Emergencies warm-transfer to on-call",
  "From $149/mo — no night premium",
];

const handles = [
  {
    icon: PhoneCall,
    title: "Every after-hours call answered",
    text: "Nights, weekends, holidays — every caller reaches a live answer on the first ring instead of voicemail. No separate night staff, no forwarding chains.",
  },
  {
    icon: Siren,
    title: "Emergency triage that escalates",
    text: "Your urgency rules decide what can't wait: emergencies warm-transfer to on-call staff instantly with full context, everything else becomes a booked visit or a clean message.",
  },
  {
    icon: CalendarCheck,
    title: "Next-day booking on the spot",
    text: "Non-urgent callers book into tomorrow's real availability right then — with SMS confirmations — instead of promising to call back during business hours.",
  },
  {
    icon: MessageSquareText,
    title: "Messages that arrive complete",
    text: "Name, number, reason, and urgency captured every time and delivered where you read them — no more half-audible voicemails at 7am.",
  },
  {
    icon: PhoneIncoming,
    title: "Overflow cover at peak hours",
    text: "Lunch rushes and Monday-morning surges get the same treatment: simultaneous calls answered in parallel while your team works undisturbed.",
  },
  {
    icon: Sunrise,
    title: "Full transcripts by morning",
    text: "Every overnight call arrives transcribed with outcomes tagged — review the night in minutes over coffee instead of playing voicemail roulette.",
  },
];

const howItWorks = [
  {
    stage: "Setup",
    title: "You set the hours and rules",
    text: "Define after-hours windows, what counts as urgent, who gets woken for what, and how routine calls should end — booking, message, or SMS follow-up.",
  },
  {
    stage: "Telephony",
    title: "After-hours calls route to the AI",
    text: "Outside your hours, your existing number forwards to the AI service — callers dial the same number as always. Greetings state the time context so callers know exactly what to expect.",
  },
  {
    stage: "Overnight",
    title: "Every call answered, triaged, and closed out",
    text: "The AI answers on the first ring — in parallel, so a busy night never means a busy signal — classifies each caller against your urgency rules, warm-transfers real emergencies, and books or messages the rest.",
  },
  {
    stage: "Morning",
    title: "Mornings start with answers",
    text: "Bookings sit in tomorrow's calendar, messages arrive complete, and only genuine emergencies touched a human overnight.",
  },
];

const nightCallTurns: CallDemoTurn[] = [
  {
    kind: "line",
    speaker: "ai",
    at: "02:07",
    text: "Thanks for calling Delta Plumbing — you've reached our after-hours line. How can I help you tonight?",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "02:08",
    text: "Yes, hi — there's water pouring out from under my kitchen sink and it's spreading across the floor.",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "02:09",
    text: "That sounds like an active leak, so I'm treating this as an emergency. First, the shutoff valve is usually in the cabinet against the wall — turn it clockwise to stop the water. Meanwhile I'm getting Dave, our on-call plumber, on the line with your details.",
  },
  {
    kind: "event",
    icon: "escalate",
    text: "Urgency rules matched: active leak → emergency escalation",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "02:11",
    text: "Okay, water's off. Thank you.",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "02:11",
    text: "Perfect — that'll limit the damage. Connecting you to Dave now; he has your name, address, and everything you've told me.",
  },
  {
    kind: "event",
    icon: "transfer",
    text: "Warm transfer to Dave (on-call) · transcript, address & issue attached",
  },
  {
    kind: "event",
    icon: "sms",
    text: "SMS to caller: Dave's ETA + how to document damage for insurance",
  },
];

const nightCallChips = [
  "Emergency escalated 02:11 with full context",
  "Transcript + recording in dashboard",
  "Caller confirmed by SMS",
  "Priority-tagged for the morning digest",
];

const nightCallTakeaways = [
  {
    title: "Real emergencies reach a human",
    text: "Your urgency rules decide what pages on-call. Matching calls warm-transfer in seconds — with the transcript, address, and issue already attached.",
  },
  {
    title: "Everyone else is handled politely",
    text: "Routine callers aren't told to call back tomorrow — they book tomorrow's open slots on the call, or leave a complete message with confirmations by SMS.",
  },
  {
    title: "Mornings start with a recap",
    text: "Every overnight call is transcribed, tagged, and summarized — you review the whole night in minutes instead of piecing together what happened.",
  },
];

const comparisonRows = [
  {
    feature: "Nights, weekends & holidays",
    ai: "Always answered",
    service: "Shift-based, premium rates",
    voicemail: "Rings to nothing",
  },
  {
    feature: "Response time",
    ai: "First ring, unlimited parallel calls",
    service: "Hold queues at peak",
    voicemail: "No answer",
  },
  {
    feature: "Emergency triage",
    ai: "Your rules, instant warm transfer",
    service: "Operator judgment + scripts",
    voicemail: "Caller hears a beep",
  },
  {
    feature: "Next-day appointments",
    ai: "Booked on the call, with SMS",
    service: "Takes a message",
    voicemail: "Never",
  },
  {
    feature: "Written record",
    ai: "Transcript, summary & recording",
    service: "Message slip",
    voicemail: "Nothing",
  },
  {
    feature: "Typical cost",
    ai: "$149/month flat",
    service: "$1–3 per minute + night premiums",
    voicemail: "Free — but callers move on",
  },
];

const comparisonNotes = [
  {
    title: "vs. a human after-hours answering service",
    text: "Traditional services bill per minute with night and weekend premiums, and operators read from scripts with no access to your calendar. AI answers flat-rate, follows your urgency rules exactly, and books into real availability.",
  },
  {
    title: "vs. plain voicemail",
    text: "Emergency callers rarely leave voicemail — they keep dialing until someone answers, and the next name on the list gets the job. An answered call on the first ring is the difference between a booked job and a lost customer.",
  },
  {
    title: "vs. waking staff for everything",
    text: "Without triage, the only options are voicemail or paging on-call staff for every 2am hangup question. Rules-based triage wakes a human only for real emergencies and handles the rest by morning.",
  },
];

const useCases = [
  {
    icon: Hammer,
    name: "Home Services",
    href: "/industries/ai-voice-for-home-services",
    text: "Burst pipes and dead furnaces at 2am get triaged and dispatched — routine calls become morning estimates.",
  },
  {
    icon: Stethoscope,
    name: "Dental & Healthcare",
    href: "/industries/ai-voice-for-dental",
    text: "Toothaches and worries answered kindly overnight; urgent cases escalated, the rest booked for morning.",
  },
  {
    icon: PawPrint,
    name: "Veterinary",
    href: "/industries/ai-voice-for-veterinary",
    text: "Worried owners answered instantly at night; emergencies reach on-call staff while routine visits book themselves.",
  },
  {
    icon: KeyRound,
    name: "Real Estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Evening portal browsers — peak inquiry time — get instant answers and showings instead of morning-after callbacks.",
  },
];

const workflows = [
  {
    href: "/ai-phone-call-automation/appointment-reminders",
    title: "Automated appointment reminder calls",
    text: "Cut no-shows with AI calls that confirm, reschedule, and fill cancellations automatically.",
  },
  {
    href: "/ai-phone-call-automation/appointment-setting",
    title: "AI appointment setting services",
    text: "Outbound calls that book straight into your calendar, so the pipeline fills itself.",
  },
  {
    href: "/ai-phone-call-automation/lead-qualification",
    title: "AI lead qualification calls",
    text: "Reach new leads in minutes and route only qualified prospects to your team.",
  },
  {
    href: "/ai-phone-call-automation/cold-calling",
    title: "AI cold calling software",
    text: "AI agents that dial your lists, qualify prospects, and book meetings.",
  },
];

const pricingChips = ["From $149/mo", "500 minutes included", "No night premium", "Live in days"];

const faqs = [
  {
    question: "What is an after-hours answering service?",
    answer:
      "An after-hours answering service picks up your business calls outside working hours — nights, weekends, and holidays. An AI version answers instantly on the first ring, triages emergencies to on-call staff, books routine callers into the next day, and delivers complete messages by morning.",
  },
  {
    question: "How is this different from a 24/7 AI receptionist?",
    answer:
      "Same technology, narrower job: after-hours coverage focuses on nights and weekends with urgency triage as the centerpiece. A full AI phone call receptionist also handles daytime volume, sales conversations, and deeper workflows. Many businesses start with after-hours, then expand to 24/7 once they see the transcripts.",
  },
  {
    question: "Will emergencies actually reach a human?",
    answer:
      "Yes — that's the core of the setup. You define what counts as urgent and who gets contacted; matching calls warm-transfer immediately with the transcript and caller details. Everything else becomes a booking or message, so on-call staff only get woken for real emergencies.",
  },
  {
    question: "What does an AI after-hours service cost?",
    answer:
      "Plans start at $149/month with 500 included minutes — full tiers on /pricing; human after-hours services typically bill per minute plus base fees.",
  },
  {
    question: "Can it book appointments overnight?",
    answer:
      "Yes. Non-urgent callers book into your next available slots on the call, with SMS confirmations in writing. Your morning starts with a fuller diary instead of a voicemail backlog.",
  },
  {
    question: "How quickly can after-hours coverage go live?",
    answer:
      "Most deployments go live within days: forward the number after hours, set urgency rules and greetings, run test calls, and switch on. Because every overnight call is transcribed, you verify quality from the first morning.",
  },
  {
    question: "Do I need a second phone number for after-hours coverage?",
    answer:
      "No. You keep your existing business number and set conditional forwarding so calls outside your hours route to the service. Callers dial the same number they always have, and daytime calls keep ringing your team exactly as before.",
  },
  {
    question: "What is a warm transfer?",
    answer:
      "A live handoff instead of a cold patch-through: the AI connects the caller to your on-call staff member and passes the transcript, caller details, and reason for the transfer along — so nobody repeats themselves at 2am.",
  },
  {
    question: "Will callers know they're talking to an AI?",
    answer:
      "The greeting can state the time context — 'you've reached our after-hours line' — and callers accept it readily; the alternative at 2am was voicemail. Conversations stay natural: callers can interrupt, change topics, and ask follow-up questions.",
  },
  {
    question: "Can it answer more than one call at a time overnight?",
    answer:
      "Yes. Calls are answered in parallel, so a Friday-night surge or a storm-day spike never produces a busy signal — and your on-call staff only see the calls that match your urgency rules.",
  },
  {
    question: "How do urgency rules decide what wakes a human?",
    answer:
      "You define them at setup: what counts as an emergency — an active leak, a pet in distress, post-op pain — who gets contacted for each, and how routine calls should end. Every call is classified against those rules, and you can tighten or relax them after reviewing the overnight transcripts.",
  },
  {
    question: "Is an after-hours answering service worth the cost?",
    answer:
      "Compare it to the alternative: emergency callers rarely wait until morning — they call the next provider on the list. Plans start at $149/month with no after-hours premium, so a single saved job or booked appointment typically covers the month. Run your own numbers in the ROI calculator.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/ai-phone-call-automation/after-hours-answering",
  }),
};

export default function AfterHoursAnsweringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-call-automation/after-hours-answering#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: "After-Hours Answering Service with AI",
            item: `${SITE_URL}/ai-phone-call-automation/after-hours-answering`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/after-hours-answering#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation/after-hours-answering`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: pageUpdated,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation/after-hours-answering#breadcrumb`,
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/ai-phone-call-automation/after-hours-answering#howto`,
        name: "How after-hours answering works",
        description:
          "From one-time setup to the overnight flow: how an AI after-hours answering service covers nights, weekends, and holidays.",
        step: howItWorks.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.text,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/after-hours-answering#faqpage`,
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
        id="after-hours-answering-schema"
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
              Inbound Voice AI
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              After-Hours Answering{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                That Never Sleeps
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Nights, weekends, and holidays covered — emergencies triaged to
              on-call staff, routine callers booked for morning.{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                View pricing
              </Link>{" "}
              or{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                hear live demo calls
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#show-case" className={primaryButton}>
                Hear It in Action
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

            {/* Week coverage bar — the product in one glance */}
            <Reveal className="mt-12 max-w-2xl mx-auto text-left">
              <div className="rounded-xl glass-light border border-white/10 p-4 sm:p-5">
                <div
                  className="flex h-3.5 rounded-full overflow-hidden gap-px"
                  aria-hidden="true"
                >
                  <span className="w-[24%] bg-white/15" />
                  <span className="flex-1 bg-brand/70" />
                </div>
                <dl className="mt-3.5 flex flex-wrap gap-x-6 gap-y-1.5 justify-center text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-sm bg-white/25"
                    />
                    <dt className="sr-only">Staffed</dt>
                    <dd>
                      Staffed hours · <span className="text-gray-300">40/week</span>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-sm bg-brand/70"
                    />
                    <dt className="sr-only">AI-covered</dt>
                    <dd>
                      AI-covered ·{" "}
                      <span className="text-gray-300">128/week</span> — nights,
                      weekends &amp; holidays
                    </dd>
                  </div>
                </dl>
                <p className="mt-2.5 text-[11px] text-gray-500 text-center">
                  Overflow during staffed hours is covered too.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Example 2 AM call — product UI as proof */}
        <section
          id="call-example"
          className="w-full overflow-hidden bg-black py-16 md:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>A 2 AM call, start to finish</p>
              <h2 className={sectionHeading}>
                What an after-hours emergency call looks like
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Below is an example 2 AM emergency call to a plumbing company,
                rendered as your team sees it in the dashboard: the AI greets
                with time context, classifies the caller against your urgency
                rules, warm-transfers the emergency to on-call staff, and
                follows up by SMS — every overnight call transcribed and
                summarized for your morning.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CallDemo
                headerTitle="Rachel — After-Hours Line"
                headerSubtitle="Delta Plumbing · 2:07 AM · Inbound"
                liveTime="02:11"
                turns={nightCallTurns}
                outcomeLabel="After this call"
                outcomeChips={nightCallChips}
                caption={
                  <figcaption className="text-center text-sm text-gray-500 mt-5 max-w-xl mx-auto">
                    An example after-hours emergency call — triage, warm
                    transfer, and follow-up, shown as it appears in your
                    dashboard.{" "}
                    <Link
                      href="/#show-case"
                      className="text-brand-light hover:text-brand transition-colors underline-offset-4 hover:underline"
                    >
                      Hear real demo calls
                    </Link>
                    .
                  </figcaption>
                }
              />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {nightCallTakeaways.map((t, i) => (
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

        {/* What is */}
        <section id="what-is" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal>
              <p className={sectionEyebrow}>Definition</p>
              <h2 className={sectionHeading}>
                What is an AI after-hours answering service?
              </h2>
              <div className="border-l-2 border-brand/40 pl-5 sm:pl-6 space-y-4">
                <p className="text-gray-400 text-lg leading-relaxed">
                  An AI after-hours answering service takes your calls when your
                  team is off: it answers on the first ring, separates
                  emergencies from routine calls using rules you set,
                  warm-transfers the urgent ones to on-call staff, and books or
                  messages the rest — so mornings start with a fuller diary
                  instead of a voicemail backlog.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  It is one workflow of{" "}
                  <Link
                    href="/ai-phone-call-automation"
                    className="text-brand hover:underline"
                  >
                    AI phone call automation
                  </Link>
                  , and the natural starting point before full 24/7 coverage
                  with an{" "}
                  <Link
                    href="/ai-phone-call-receptionist"
                    className="text-brand hover:underline"
                  >
                    AI phone call receptionist
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Coverage features */}
        <section id="what-it-handles" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Coverage</p>
              <h2 className={sectionHeading}>
                What overnight coverage handles
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {handles.map((h, i) => (
                <Reveal key={h.title} delay={(i % 2) * 0.05} className="h-full">
                  <div className="glass-light h-full rounded-xl border border-white/10 p-5">
                    <span
                      aria-hidden="true"
                      className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/25 flex items-center justify-center mb-3.5"
                    >
                      <h.icon className="w-4 h-4 text-brand" />
                    </span>
                    <h3 className="font-semibold text-white mb-2">{h.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Setup to sunrise</p>
              <h2 className={sectionHeading}>
                How after-hours answering works
              </h2>
            </Reveal>
            <div className="border-t border-white/5">
              {howItWorks.map((step, i) => (
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

        {/* Comparison */}
        <section id="comparison" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Compare</p>
              <h2 className={sectionHeading}>
                AI after-hours answering vs. the alternatives
              </h2>
            </Reveal>
            <Reveal className="mb-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[640px] text-sm">
                <caption className="sr-only">
                  AI after-hours answering service compared with a human
                  answering service and voicemail
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
                      AI after-hours
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-semibold text-gray-400"
                    >
                      Human answering service
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
                        {row.service}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.voicemail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {comparisonNotes.map((n, i) => (
                <Reveal key={n.title} delay={i * 0.05} className="h-full">
                  <div className="glass-light h-full rounded-xl border border-white/10 p-5">
                    <h3 className="font-semibold text-white mb-1.5">{n.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {n.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="use-cases" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Industries</p>
              <h2 className={sectionHeading}>
                Trades that can&apos;t afford to miss nights
              </h2>
              <p className="text-gray-400 leading-relaxed">
                If your customers&apos; worst moments happen after 5pm,
                after-hours coverage is your highest-ROI workflow:
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group glass-light rounded-xl p-5 border border-white/10 hover:border-brand/40 transition-premium flex items-start gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 rounded-lg bg-brand/10 border border-brand/25 flex items-center justify-center shrink-0"
                  >
                    <uc.icon className="w-4 h-4 text-brand" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 font-semibold text-brand-light mb-1.5 group-hover:text-brand transition-premium-fast">
                      After-hours answering for {uc.name}
                      <ArrowRight
                        className="w-3.5 h-3.5 shrink-0 transition-premium-fast group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="block text-sm text-gray-400 leading-relaxed">
                      {uc.text}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* More workflows */}
        <section id="workflows" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>More workflows</p>
              <h2 className={sectionHeading}>
                One platform, more of the phone covered
              </h2>
              <p className="text-gray-400 leading-relaxed">
                After-hours coverage is one workflow of{" "}
                <Link
                  href="/ai-phone-call-automation"
                  className="text-brand hover:underline"
                >
                  AI phone call automation
                </Link>
                . The others:
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workflows.map((w) => (
                <Link
                  key={w.href}
                  href={w.href}
                  className="group glass-light rounded-xl p-5 border border-white/10 hover:border-brand/40 transition-premium flex flex-col"
                >
                  <span className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-premium-fast">
                    {w.title}
                  </span>
                  <span className="text-sm text-gray-400 leading-relaxed">
                    {w.text}
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

        {/* Pricing */}
        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal>
              <div className="glass-light rounded-2xl border border-brand/20 p-6 sm:p-10 text-center">
                <p className={sectionEyebrow}>Pricing</p>
                <h2 className={sectionHeading}>
                  After-hours answering, without the after-hours premium
                </h2>
                <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Human answering services bill extra for nights and weekends.
                  Fusion Calling runs on the same plans around the clock —
                  starting at $149/month with 500 included minutes and no
                  per-minute surprises.
                </p>
                <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                  {pricingChips.map((chip) => (
                    <li
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs sm:text-sm text-gray-300"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-brand"
                        aria-hidden="true"
                      />
                      {chip}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/pricing" className={primaryButton}>
                    Compare Plans
                  </Link>
                  <Link href="/calculator" className={secondaryButton}>
                    Run the ROI Calculator
                  </Link>
                </div>
              </div>
            </Reveal>
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
              Keep exploring:{" "}
              <Link
                href="/ai-answering-service"
                className="text-brand hover:underline"
              >
                the AI answering service guide
              </Link>
              ,{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                the automation platform guide
              </Link>
              , or{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                compare plans
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="cta"
          className="relative w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-16 md:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[720px] max-w-full h-[300px] rounded-full bg-brand/10 blur-[100px] pointer-events-none"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center relative">
            <Reveal>
              <MoonStar
                className="w-8 h-8 text-brand mx-auto mb-5"
                aria-hidden="true"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Your next customer calls{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  after 5pm
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every night you&apos;re on voicemail, the job goes to whoever
                answers. After-hours coverage goes live in days — hear it on a
                demo call before you decide.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/#show-case" className={primaryButton}>
                  Hear It in Action
                </Link>
                <Link
                  href="https://cal.com/mralamin/discovery-call"
                  className={secondaryButton}
                >
                  Book a Demo
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Sources />

        <Footer />
      </main>
    </>
  );
}
