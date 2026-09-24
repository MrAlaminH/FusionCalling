import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AmbientBackground from "@/components/ambient-background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import CallDemo, { type CallDemoTurn } from "@/components/call-demo";
import { Reveal } from "@/components/ui/reveal";
import { primaryButton, secondaryButton } from "@/components/ui/button-styles";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

const title = "AI Receptionist for Small Business (2026)";
const description =
  "An AI receptionist for your small business: every call answered 24/7, jobs booked on the call, from $149/month flat. See the math and hear live demos.";

/** This page's content revision — page-local so other pages' schema is unaffected. */
const pageUpdated = "2026-09-24";

const sectionEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3";
const sectionHeading =
  "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4";

const heroTrustChips = [
  "Every call answered 24/7",
  "From $149/mo — no contract",
  "Live in days, no IT needed",
];

const mathPoints = [
  {
    title: "Missed calls are lost jobs",
    text: "Small businesses miss most calls that arrive during jobs, dinners, or after hours — and first-time callers who hit voicemail rarely call back. One saved customer often covers the month.",
  },
  {
    title: "$149 vs. $3,000+ a month",
    text: "A full-time hire costs $3,000+/month for 40 hours a week, one call at a time. An AI receptionist covers all 168 hours from $149/month with 500 included minutes — unlimited simultaneous calls included.",
  },
  {
    title: "No IT department required",
    text: "There is nothing to install and no code to write. You describe your business in plain language, pick a voice, connect your calendar — the team handles the rest.",
  },
  {
    title: "Live within days",
    text: "From kickoff to answering real calls typically takes days, not months. Test calls with the team tune greetings and booking rules before customers hear a thing.",
  },
];

/** Saturday lawn-care estimate — a scenario specific to this page (the
 * receptionist guide renders the dental reschedule, after-hours renders the
 * plumbing emergency), so no transcript copy is duplicated across pages. */
const lawnCareTurns: CallDemoTurn[] = [
  {
    kind: "line",
    speaker: "ai",
    at: "00:01",
    text: "Thanks for calling Green Ridge Lawn Care, this is Sam. How can I help you today?",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "00:07",
    text: "Hi — do you do one-time yard cleanups? And what do they usually cost?",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:13",
    text: "We do — a cleanup for a standard lot starts at $120 and includes leaf removal, mowing, and edging. I can book you a free on-site estimate; I have Tuesday at 9:00 AM open.",
  },
  { kind: "line", speaker: "caller", at: "00:22", text: "Tuesday at 9 works." },
  {
    kind: "event",
    icon: "calendar",
    text: "Estimate booked — Tue 9:00 AM · address captured · confirmation SMS sent",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:27",
    text: "You're all set for Tuesday at 9. I've texted you a confirmation, and the estimator will bring a written quote. Anything else I can help with?",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "00:34",
    text: "Do you also do fertilization?",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:39",
    text: "We do — seasonal packages start at $45 per visit. I've noted it so the estimator brings those options on Tuesday.",
  },
  {
    kind: "event",
    icon: "sms",
    text: "Fertilization interest logged · booking synced to calendar + CRM",
  },
];

const lawnCareChips = [
  "Estimate booked — Tue 9:00 AM",
  "SMS confirmation sent",
  "Upsell noted for the estimator",
  "Captured Sat 11:38 AM — owner was mid-job",
];

const demoTakeaways = [
  {
    title: "Booked mid-call, not \u201ccall you back\u201d",
    text: "The estimate landed in the real calendar with a confirmation text while the caller was still on the line — no callback promise, no lead going cold over the weekend.",
  },
  {
    title: "Price questions answered instantly",
    text: "Callers who reach an answer on the first call stop comparison-shopping. The quote range comes from your own pricing, so nothing is improvised.",
  },
  {
    title: "You see every call",
    text: "Full transcript and a logged outcome for every call, so you always know exactly what was promised while you were working.",
  },
];

const comparisonRows = [
  {
    feature: "When calls get answered",
    ai: "24/7, first ring",
    voicemail: "Never — callers hit a greeting",
    service: "Shift-based",
    hire: "~40 hrs/week",
  },
  {
    feature: "Simultaneous calls",
    ai: "Unlimited",
    voicemail: "Unlimited (messages only)",
    service: "One per agent",
    hire: "One",
  },
  {
    feature: "Books jobs into your calendar",
    ai: "Yes, during the call",
    voicemail: "No",
    service: "Takes messages",
    hire: "Yes",
  },
  {
    feature: "Understands free-form speech",
    ai: "Yes",
    voicemail: "No",
    service: "Reads from scripts",
    hire: "Yes",
  },
  {
    feature: "Typical monthly cost",
    ai: "$149 flat",
    voicemail: "$0 — plus every lost job",
    service: "$1–3 per minute",
    hire: "$3,000+ salary + benefits",
  },
];

const setupSteps = [
  {
    stage: "Day 1",
    title: "Describe your business in plain language",
    text: "Services, prices, hours, and the questions callers ask most. No code, no scripts — the onboarding team turns it into the agent's knowledge base.",
  },
  {
    stage: "Days 1–2",
    title: "Pick a voice and set the rules",
    text: "Choose the voice callers hear, then set guardrails: what it can book, when to transfer to you, and which topics are always yours to handle.",
  },
  {
    stage: "Days 2–3",
    title: "Connect your number and calendar",
    text: "Your existing business number and carrier stay exactly as they are — calls forward under rules you control, and bookings land in your real calendar.",
  },
  {
    stage: "Day 3+",
    title: "Test calls, then go live",
    text: "You and the team make test calls to tune greetings and booking rules. Once it sounds right, it starts answering for customers — typically within days of kickoff.",
  },
];

const planFeatures = [
  "500 minutes included — enough for most single locations",
  "24/7 answering — nights, weekends, holidays",
  "Unlimited simultaneous calls",
  "Books & reschedules in your calendar",
  "Full transcript of every call",
  "Month-to-month — no contract",
];

const fitList = [
  {
    name: "Dental & healthcare practices",
    href: "/industries/ai-voice-for-dental",
    text: "Bookings, reschedules, and insurance questions handled while the chair is full — with HIPAA-aware workflows.",
  },
  {
    name: "Home services",
    href: "/industries/ai-voice-for-home-services",
    text: "Emergency calls answered after hours, estimates booked straight into the schedule, jobs routed to the right tech.",
  },
  {
    name: "Real estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Every inquiry captured 24/7, buyers qualified, showings scheduled before a competitor calls back.",
  },
  {
    name: "Insurance",
    href: "/industries/ai-voice-for-insurance",
    text: "Quote follow-ups, renewals, and policy questions handled consistently within calling rules.",
  },
  {
    name: "Restaurants & hospitality",
    href: "/industries/ai-voice-for-restaurants-hospitality",
    text: "Reservations and inquiries covered through the dinner rush, with reminders cutting no-shows on their own.",
  },
  {
    name: "Ecommerce & retail",
    href: "/industries/ai-voice-for-ecommerce-retail",
    text: "Order, delivery, and return questions answered nights and weekends without extra staff.",
  },
];

const objections = [
  {
    title: "\u201cMy customers will hate talking to a robot\u201d",
    text: "They talk to a natural voice that answers instantly instead of voicemail — most businesses introduce the agent by name, and callers care about getting help fast. Anything emotional or complex transfers to you with full context.",
  },
  {
    title: "\u201cI'm too small for AI\u201d",
    text: "Small is exactly the fit: you feel every missed call more than a big company does. 500 included minutes covers most single-location businesses, and there is no contract locking you in.",
  },
  {
    title: "\u201cSetup sounds technical\u201d",
    text: "You never touch code. Describe your services, hours, and rules in plain language; the onboarding team configures voices, calendars, and transfers, then tests with you.",
  },
  {
    title: "\u201cWhat if it makes a mistake?\u201d",
    text: "Every call is transcribed, so you audit everything yourself from day one. Booking rules, transfer triggers, and knowledge answers are all yours to adjust — the agent only does what you approve.",
  },
];

const faqs = [
  {
    question: "Is an AI receptionist worth it for a small business?",
    answer:
      "For owner-operators the test is simpler than enterprise ROI math: you are usually mid-job, mid-route, or mid-dinner when the phone rings. If one rescued booking a month outweighs a $149 starting plan — and 500 included minutes covers most single locations with no contract — the answer is yes within the first billing cycle.",
  },
  {
    question: "How much does an AI receptionist cost for a small business?",
    answer:
      "Plans start at $149/month with 500 included minutes — enough for most single locations. Compare every tier on the pricing page.",
  },
  {
    question: "Do I need technical skills to set it up?",
    answer:
      "No. You describe your business in plain language — services, pricing, hours, FAQs — choose a voice, and connect your calendar. The team configures the rest and runs test calls with you. Most small businesses go live within days of kickoff.",
  },
  {
    question: "Will it work with my existing phone number?",
    answer:
      "Yes. Your current business number and carrier stay exactly as they are; calls forward to the AI receptionist under rules you control. New numbers for campaigns or locations can be added from the same dashboard.",
  },
  {
    question: "What happens when a caller needs a real person?",
    answer:
      "You set transfer rules up front — emergencies, VIPs, topics you flag. Matching calls warm-transfer to you immediately with the transcript and caller details, so customers never repeat themselves.",
  },
  {
    question: "Can it book appointments into my calendar?",
    answer:
      "Yes — it checks your real availability, books or reschedules on the call, and sends an SMS confirmation while the caller is still on the line. Cancellations can trigger rebooking offers automatically.",
  },
  {
    question: "Which small businesses benefit most?",
    answer:
      "Appointment-led and call-led trades: dental and healthcare practices, home services, real estate, insurance, restaurants, and retail. The pattern is the same everywhere — missed calls equal lost revenue, and consistent follow-up wins the job.",
  },
  {
    question: "Can I cancel if it doesn't work out?",
    answer:
      "Yes — plans are month-to-month with no long-term contract. And because every call is transcribed, you'll know within the first weeks whether it's earning its keep: count the booked jobs against the $149.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/ai-receptionist-for-small-business",
  }),
};

export default function AiReceptionistForSmallBusinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-receptionist-for-small-business#breadcrumb`,
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
            name: "AI Receptionist for Small Business",
            item: `${SITE_URL}/ai-receptionist-for-small-business`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-receptionist-for-small-business#article`,
        headline: "AI Receptionist for Small Business, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-09-19",
        dateModified: pageUpdated,
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-receptionist-for-small-business`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI receptionist for small business",
          description:
            "An affordable, no-IT-required voice agent that answers a small business's calls around the clock — booking jobs, taking messages, and transferring urgent calls.",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/ai-receptionist-for-small-business#howto`,
        name: "How to set up an AI receptionist for a small business",
        description:
          "The four steps to launch an AI receptionist for a small business, from describing your business to going live.",
        step: setupSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.text,
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-receptionist-for-small-business#webpage`,
        url: `${SITE_URL}/ai-receptionist-for-small-business`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: pageUpdated,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-receptionist-for-small-business#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-receptionist-for-small-business#faqpage`,
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
        id="ai-receptionist-for-small-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="relative isolate min-h-screen w-full bg-[#0b0705]">
        <Navbar />

        <AmbientBackground />

        {/* Hero */}
        <section
          id="overview"
          className="relative w-full overflow-hidden bg-gradient-to-b from-[#1a0e08] via-[#0e0906] to-transparent pt-32 pb-16 md:pt-40 md:pb-20"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-40 w-[820px] max-w-full h-[380px] rounded-full bg-brand/10 blur-[100px] pointer-events-none"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
            <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
              For Small Businesses
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Receptionist
              </span>{" "}
              for Small Business
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              You&apos;re mid-job, mid-drive, or mid-dinner when the phone
              rings — and by the time you&apos;re free, the caller has hired
              someone else. An AI receptionist answers every call on the first
              ring, books jobs into your real calendar, and texts the
              confirmation before the caller hangs up. From $149/month, live in
              days, no IT needed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#show-case" className={primaryButton}>
                Hear It in Action
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
          className="w-full overflow-hidden py-16 md:py-20"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>Example call</p>
              <h2 className={sectionHeading}>
                A Saturday-morning call, handled while you&apos;re on the job
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                This is what one phone call looks like in your Fusion Calling
                dashboard: the full transcript, the booking made mid-call, and
                the outcome logged automatically — no sticky notes, no
                voicemail, no lost lead.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CallDemo
                headerTitle="Sam — AI Receptionist"
                aiName="Sam"
                headerSubtitle="Green Ridge Lawn Care · Inbound · Sat 11:38 AM"
                liveTime="00:52"
                turns={lawnCareTurns}
                outcomeChips={lawnCareChips}
                caption={
                  <figcaption className="text-center text-sm text-gray-500 mt-5 max-w-xl mx-auto">
                    While the owner was mid-job, the receptionist answered a
                    price question, booked an on-site estimate, and logged an
                    upsell — shown exactly as it appears in your dashboard.{" "}
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
              {demoTakeaways.map((t, i) => (
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

        {/* The math */}
        <section id="math" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>The numbers</p>
              <h2 className={sectionHeading}>
                The math that makes it obvious
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Small businesses don&apos;t have a call-volume problem — they
                have a missed-call problem. Four numbers settle it:
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mathPoints.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.05} className="h-full">
                  <div className="glass-light relative h-full rounded-xl border border-brand/20 p-5 pt-6 overflow-hidden">
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-4 font-display text-4xl font-bold text-brand/15 leading-none tabular-nums"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-brand-light mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Compare</p>
              <h2 className={sectionHeading}>
                How it compares to your other options
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Voicemail, an answering service, or a full-time hire — here is
                what a small business actually gets from each:
              </p>
            </Reveal>
            <Reveal className="mb-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[720px] text-sm">
                <caption className="sr-only">
                  AI receptionist compared with voicemail, answering services,
                  and a full-time receptionist hire for small businesses
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
                      Voicemail
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
                      Full-time hire
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
                        {row.voicemail}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.service}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.hire}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <p className="text-gray-500 text-sm leading-relaxed">
              The pattern: every traditional option either misses calls or
              meters them. An AI receptionist is the only one that answers
              everything, books work, and stays a flat $149/month.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section id="who" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Who it&apos;s for</p>
              <h2 className={sectionHeading}>
                Built for businesses like yours
              </h2>
              <p className="text-gray-400 leading-relaxed">
                If customers call you to book, ask, or buy — this fits. See
                your trade:
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fitList.map((f, i) => (
                <Reveal key={f.href} delay={i * 0.04} className="h-full">
                  <Link
                    href={f.href}
                    className="group glass-light rounded-xl border border-white/10 p-5 hover:border-brand/40 transition-premium flex items-start justify-between gap-4 h-full"
                  >
                    <span>
                      <span className="block font-semibold text-brand-light mb-2 group-hover:text-brand transition-premium-fast">
                        {f.name}
                      </span>
                      <span className="block text-sm text-gray-400 leading-relaxed">
                        {f.text}
                      </span>
                    </span>
                    <ArrowRight
                      className="w-4 h-4 mt-1 text-brand shrink-0 transition-premium-fast group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Setup */}
        <section id="setup" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 md:mb-12 max-w-2xl">
              <p className={sectionEyebrow}>Getting started</p>
              <h2 className={sectionHeading}>
                How to set it up — no IT department required
              </h2>
            </Reveal>
            <div className="border-t border-white/5">
              {setupSteps.map((step, i) => (
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

        {/* Objections */}
        <section id="objections" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Straight answers</p>
              <h2 className={sectionHeading}>
                Fair concerns, straight answers
              </h2>
            </Reveal>
            <div className="space-y-4">
              {objections.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.04}>
                  <div className="glass-light rounded-xl border border-white/10 p-5">
                    <h3 className="font-semibold text-white mb-1.5">
                      {o.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {o.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,340px] gap-8 md:gap-12 items-center">
              <Reveal>
                <p className={sectionEyebrow}>Pricing</p>
                <h2 className={sectionHeading}>Small business pricing</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Start at $149/month with 500 included minutes — see every
                  tier on the{" "}
                  <Link href="/pricing" className="text-brand hover:underline">
                    pricing page
                  </Link>
                  .
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Most single-location businesses fit the Starter plan; busier
                  lines scale to Pro and Enterprise minute pools without
                  per-call fees.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="glass-light rounded-2xl border border-brand/30 shadow-premium-lg p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
                    Starter
                  </p>
                  <p className="font-display text-4xl font-bold text-white mb-1">
                    $149
                    <span className="text-base font-medium text-gray-400">
                      {" "}
                      /month
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mb-5">
                    Flat rate — no per-call fees, no overage surprises.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {planFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-gray-300"
                      >
                        <Check
                          className="w-4 h-4 text-brand shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing" className={primaryButton + " w-full"}>
                    Compare All Plans
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full py-16 md:py-24">
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
              Next step:{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                hear live demo calls
              </Link>
              , learn{" "}
              <Link
                href="/ai-phone-call-receptionist"
                className="text-brand hover:underline"
              >
                how the receptionist works
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
          className="w-full overflow-hidden pb-20 md:pb-28"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal>
              <div className="relative glass-light rounded-2xl border border-brand/25 px-6 py-12 md:py-16 text-center overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 -top-24 w-[520px] max-w-full h-56 rounded-full bg-brand/15 blur-[100px] pointer-events-none"
                />
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative">
                  Stop losing jobs to voicemail
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 relative">
                  Hear the quality first, then run your own numbers. From
                  $149/month, live in days, no contract.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative">
                  <Link href="/#show-case" className={primaryButton}>
                    Hear It in Action
                  </Link>
                  <Link href="/calculator" className={secondaryButton}>
                    Calculate Your ROI
                  </Link>
                </div>
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
