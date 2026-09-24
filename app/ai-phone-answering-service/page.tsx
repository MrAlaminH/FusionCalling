import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  Forward,
  HeartPulse,
  Inbox,
  MessageSquareText,
  PhoneCall,
  Rocket,
  Scale,
  Scissors,
  ShieldCheck,
  SlidersHorizontal,
  Timer,
  Wrench,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import CallDemo, { type CallDemoTurn } from "@/components/call-demo";
import StickyMobileCta from "@/components/sticky-mobile-cta";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { primaryButton, secondaryButton } from "@/components/ui/button-styles";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Phone Answering Service: 2026 Buyer's Guide";
// Buyer's-guide angle — deliberately different structure from
// /ai-receptionist's description so the two never render as clones.
const description =
  "AI phone answering service that answers every call 24/7 — books appointments, answers questions & transfers urgent calls. Flat monthly rate, keep your number.";

const sectionEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3";
const sectionHeading =
  "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4";

const heroTrustChips = [
  "Every call answered 24/7",
  "From $149/mo — no per-minute billing",
  "Keep your number",
  "Month-to-month, no contract",
];

/** Product facts, not vanity counters — every number below is a plan term. */
const stats = [
  {
    icon: Clock,
    value: "24/7",
    label: "Nights, weekends, and holidays answered on the first ring",
  },
  {
    icon: CreditCard,
    value: "$149/mo",
    label: "Flat monthly rate — never billed by the minute",
  },
  {
    icon: Timer,
    value: "500",
    label: "Minutes included every month on the starting plan",
  },
  {
    icon: Zap,
    value: "Unlimited",
    label: "Simultaneous calls — no busy signal, no hold queue",
  },
];

const included = [
  {
    icon: PhoneCall,
    title: "24/7 live answering",
    text: "Every call picked up on the first ring — nights, weekends, holidays. No voicemail, no hold queue, no missed first impression, however many call at once.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment booking",
    text: "Checks real availability in your calendar, books or reschedules on the call, and sends an SMS confirmation while the caller is still on the line.",
  },
  {
    icon: Inbox,
    title: "Message-taking & screening",
    text: "Greets callers in your tone, captures detailed messages, screens solicitors per your rules, and routes what matters to the right person.",
  },
  {
    icon: Forward,
    title: "Smart transfers",
    text: "Urgent or sensitive calls warm-transfer to you or your team instantly — with the transcript and caller details attached, so nobody repeats themselves.",
  },
  {
    icon: Brain,
    title: "Common questions, answered",
    text: "Hours, pricing, directions, services, policies — the service learns your business knowledge and answers in natural conversation, not scripts.",
  },
  {
    icon: MessageSquareText,
    title: "SMS follow-ups",
    text: "Booking links, addresses, intake forms, and confirmations go out by text during or after the call, so next steps arrive in writing.",
  },
];

/** Friday-evening salon booking — scenario unique to this page (the
 * receptionist guide renders the dental reschedule, small-business the lawn
 * care estimate, after-hours the plumbing emergency). */
const salonTurns: CallDemoTurn[] = [
  {
    kind: "line",
    speaker: "ai",
    at: "00:01",
    text: "Thanks for calling Lumen Hair Studio, this is Maya. How can I help you today?",
  },
  {
    kind: "line",
    speaker: "caller",
    at: "00:06",
    text: "Hi! I know it's late — do you have anything open this Saturday? And what does a balayage run?",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:13",
    text: "Not late at all — I'm here whenever you call. Saturday I have 9:30 AM with Dana or 1:00 PM with Priya. Balayage starts at $180 depending on length. Which works for you?",
  },
  { kind: "line", speaker: "caller", at: "00:24", text: "9:30 with Dana is perfect." },
  {
    kind: "event",
    icon: "calendar",
    text: "Booked Sat 9:30 AM with Dana · confirmation SMS sent",
  },
  {
    kind: "line",
    speaker: "ai",
    at: "00:31",
    text: "You're all set for Saturday at 9:30 with Dana — I've just texted you the confirmation with the studio address. See you then!",
  },
  {
    kind: "event",
    icon: "sms",
    text: "SMS sent: confirmation, address, and a one-tap reschedule link",
  },
];

const salonChips = [
  "Booked Sat 9:30 AM with Dana",
  "Price quoted from your service list",
  "SMS confirmation + reschedule link",
  "Zero front-desk time used",
];

const demoTakeaways = [
  {
    title: "After-hours calls become bookings",
    text: "The studio closed at six; the Saturday slot still filled. Nothing waits until Monday morning — or reaches a voicemail box.",
  },
  {
    title: "Answers come from your knowledge",
    text: "Services, prices, hours, and policies in plain language — the agent quotes what you wrote, not a generic script.",
  },
  {
    title: "Every call is auditable",
    text: "Full transcript and a logged outcome for every call, so you verify quality yourself from day one instead of trusting a service report.",
  },
];

const switchSteps = [
  {
    icon: PhoneCall,
    title: "Keep your number",
    text: "Your existing business number and carrier stay exactly as they are. Calls route to the AI service with forwarding you control — porting is optional, never required.",
  },
  {
    icon: BookOpen,
    title: "Teach it your business",
    text: "Services, pricing, hours, service area, and FAQs in plain language. This replaces the 'crib sheet' a human service reads from — with your full knowledge, available instantly.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set answering rules",
    text: "Greeting, booking logic, screening rules, and exactly which calls transfer to whom. Test calls with the team tune it before customers ever hear it.",
  },
  {
    icon: Rocket,
    title: "Go live in days",
    text: "Most services go live within days of kickoff. Every call from day one comes with a transcript, so you can verify quality yourself instead of trusting a service report.",
  },
];

const comparisonRows = [
  { feature: "Monthly cost", fusion: "$149 flat", human: "$1–3 per minute", voicemail: "$0" },
  { feature: "Who answers", fusion: "AI agent on the first ring", human: "Agent on shift, then a queue", voicemail: "Nobody — a greeting" },
  { feature: "Nights, weekends, holidays", fusion: "Full service, same quality", human: "Shift-dependent", voicemail: "Greeting only" },
  { feature: "Simultaneous calls", fusion: "Unlimited", human: "One per agent on shift", voicemail: "Messages only" },
  { feature: "Books on the call", fusion: "Yes — real calendar availability", human: "Takes a message, calls back", voicemail: "No" },
  { feature: "Knows your business", fusion: "Trained on your services & policies", human: "Reads a script about you", voicemail: "—" },
  { feature: "Call record", fusion: "Transcript + outcome, every call", human: "Summary if you ask", voicemail: "A voicemail box" },
];

const comparisons = [
  {
    title: "vs. human answering services",
    text: "Human services bill $1–3 per minute, work in shifts, and read from a script about your business. An AI answering service responds instantly at a flat monthly rate with your complete business knowledge — and handles unlimited simultaneous calls during your busiest hour.",
  },
  {
    title: "vs. voicemail",
    text: "Roughly 4 in 5 first-time callers who reach voicemail never call back. An AI service answers every call live, captures the lead, and books the job — the exact revenue voicemail quietly loses.",
  },
  {
    title: "vs. hiring in-house",
    text: "A full-time hire covers ~40 hours a week, one call at a time, at $3,000+/month with salary and benefits. An AI answering service covers all 168 hours from $149/month — your team handles only the conversations that need a person.",
  },
];

const useCases = [
  {
    icon: Wrench,
    title: "Home services",
    text: "Plumbers, HVAC, electricians, landscapers — you're mid-job when the phone rings. Emergencies transfer instantly; quote requests and bookings don't wait for the evening.",
  },
  {
    icon: Scale,
    title: "Law firms",
    text: "New-client intake captured accurately on the first call, screened per your rules, and urgent matters warm-transferred with the full transcript attached.",
  },
  {
    icon: HeartPulse,
    title: "Medical & dental",
    text: "Appointments booked into real availability, reschedules handled without interrupting your front desk, and HIPAA-conscious workflows for caller data.",
  },
  {
    icon: Building2,
    title: "Real estate & property",
    text: "Maintenance requests triaged and routed to the right vendor, showings booked on the call, and tenant emergencies escalated to whoever is on call.",
  },
  {
    icon: Scissors,
    title: "Salons, spas & studios",
    text: "Every appointment request booked on the call — evenings and weekends included — with confirmations and reschedule links sent by SMS.",
  },
  {
    icon: Briefcase,
    title: "Professional services",
    text: "Agencies, consultants, and advisors stay reachable to new clients without hiring a receptionist — and solicitors never get through.",
  },
];

const plans = [
  {
    name: "Starter",
    price: 149,
    minutes: "500 minutes included",
    blurb: "Everything on this page — 24/7 answering, booking, transfers, SMS.",
    setupFee: null as number | null,
  },
  {
    name: "Pro",
    price: 249,
    minutes: "1,050 minutes included",
    blurb: "Adds inbound/outbound handling and custom LLM integration.",
    setupFee: 799,
  },
  {
    name: "Enterprise",
    price: 497,
    minutes: "2,100 minutes included",
    blurb: "Custom-trained voice with dedicated support and developer.",
    setupFee: 1250,
  },
];

const pricingTrustChips = [
  { icon: Check, label: "Month-to-month, no long-term contract" },
  { icon: ShieldCheck, label: "99.9% uptime · 24/7 support" },
  { icon: ShieldCheck, label: "HIPAA- & TCPA-conscious workflows" },
  { icon: ShieldCheck, label: "Encrypted calls, access-controlled transcripts" },
];

const faqs = [
  {
    question: "What is an AI answering service?",
    answer:
      "An AI phone answering service — often just called an AI answering service — is a subscription service where voice agents answer your business calls around the clock: greeting callers, answering questions, booking appointments, taking messages, transferring urgent calls, and sending SMS follow-ups. Unlike a human answering service with per-minute billing and shift staffing, it answers instantly at a flat monthly rate — Fusion Calling plans start at $149/month with 500 included minutes.",
  },
  {
    question: "How is it different from an AI receptionist?",
    answer:
      "They overlap heavily — most buyers mean the same thing by either term. As a rule of thumb, 'answering service' describes the service you buy (coverage, plans, minutes), while 'AI receptionist' describes the agent that does the work. Our AI phone call receptionist guide explains the agent in depth; this page covers buying and running the service.",
  },
  {
    question: "How much does an AI answering service cost?",
    answer:
      "Plans start at $149/month with 500 included minutes — compare every tier on the pricing page, and estimate your volume with the call volume calculator before you commit.",
  },
  {
    question: "Can I keep my existing business number?",
    answer:
      "Yes. Your number and carrier stay as they are; calls forward to the AI service under rules you control. You can also provision new numbers per campaign or location and manage them from one dashboard.",
  },
  {
    question: "Will callers know they're talking to an AI?",
    answer:
      "Most businesses introduce the agent by name, and callers care far more about getting help instantly than about who — or what — helps them. The voice is natural, answers come from your real business knowledge rather than a script, and anything emotional or complex transfers to your team with full context.",
  },
  {
    question: "What happens when the AI can't handle a call?",
    answer:
      "You define transfer rules up front — emergencies, VIPs, topics you flag as human-only. Matching calls warm-transfer to your team immediately with the transcript and caller details, so the handoff feels seamless instead of starting over.",
  },
  {
    question: "Does it work after hours and on weekends?",
    answer:
      "Yes — that is the core of the service. Nights, weekends, and holidays are covered identically to business hours, including booking into your real calendar availability. After-hours callers get the same greeting quality as 10am callers.",
  },
  {
    question: "Does it screen spam and robocalls?",
    answer:
      "Yes — screening rules are yours to set. Solicitors and robocalls get filtered per your instructions instead of interrupting your day, while genuine leads and urgent callers always get through.",
  },
  {
    question: "Can it place outbound calls too?",
    answer:
      "Inbound answering is the core of every plan. Outbound call handling — reminders, follow-ups, and routing — is included from the Pro plan up. The pricing page breaks down which plan fits.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No — plans are month-to-month with no long-term contract. Every call comes with a transcript, so you can count booked jobs against the $149 yourself within the first weeks and decide on evidence rather than a sales pitch.",
  },
  {
    question: "How quickly can I switch from my current service?",
    answer:
      "Most services go live within days: forward your number, provide business knowledge, set answering rules, and run test calls. Because every call is transcribed, you can audit quality yourself from day one — something legacy services never offered.",
  },
  {
    question: "What happens when I run out of included minutes?",
    answer:
      "Plans include 500, 1,050, or 2,100 monthly minutes, and every call's duration and transcript are logged in your dashboard. The call volume calculator helps you pick the right tier before you start; if you outgrow it, moving up is a plan change — your number, knowledge, and rules stay exactly as they are.",
  },
  {
    question: "Is my caller data handled securely?",
    answer:
      "Calls run over encrypted connections with transcripts stored under access-controlled retention you configure. Healthcare deployments consider HIPAA obligations and outbound programs follow TCPA-conscious workflows with consent-aware calling windows and opt-out handling.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-phone-answering-service" }),
};

export default function AiAnsweringServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-answering-service#breadcrumb`,
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
            name: "AI Phone Answering Service",
            item: `${SITE_URL}/ai-phone-answering-service`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-phone-answering-service#article`,
        headline: "AI Phone Answering Service, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-09-19",
        dateModified: CONTENT_LAST_UPDATED,
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-phone-answering-service`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI phone answering service",
          description:
            "A subscription service where AI voice agents answer a business's calls around the clock — booking, messaging, transferring, and follow-ups at a flat monthly rate.",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/ai-phone-answering-service#howto-switch`,
        name: "How to switch to an AI phone answering service",
        description:
          "The four steps to move from voicemail or a legacy answering service to an AI phone answering service — most businesses go live within days.",
        totalTime: "P7D",
        step: switchSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.text,
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-answering-service#webpage`,
        url: `${SITE_URL}/ai-phone-answering-service`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-answering-service#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-answering-service#faqpage`,
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
        id="ai-phone-answering-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="relative isolate min-h-screen w-full bg-[#0b0705]">
        <Navbar />

        {/* Ambient depth — warm near-black base with faint brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] bg-[radial-gradient(70%_55%_at_50%_0%,rgba(249,115,22,0.07),transparent_72%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[800px] bg-[radial-gradient(60%_50%_at_50%_100%,rgba(234,88,12,0.05),transparent_70%)]"
        />

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
              Buyer&apos;s Guide
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Phone Answering Service
              </span>{" "}
              That Picks Up Every Call
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Never miss a call again. Fusion Calling answers every business
              call on the first ring — 24/7, even nights and weekends. Our AI
              agent books appointments into your real calendar, answers common
              questions, takes detailed messages, and transfers urgent callers
              to your team. Flat $149/month, keep your number, no contract.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#show-case" className={primaryButton}>
                Hear It in Action
              </Link>
              <Link href="/calculator" className={secondaryButton}>
                Estimate Your Minutes
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

        {/* The numbers — plan facts, not vanity counters */}
        <section id="numbers" className="w-full bg-black pb-16 md:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.value} delay={i * 0.05} className="h-full">
                    <div className="rounded-xl border border-brand/20 bg-black/40 p-5 text-center h-full">
                      <Icon
                        className="w-5 h-5 text-brand-strong mx-auto mb-3"
                        aria-hidden="true"
                      />
                      <p className="font-display text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-strong text-transparent bg-clip-text mb-1.5">
                        {s.value}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {s.label}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section id="included" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>What&apos;s included</p>
              <h2 className={sectionHeading}>
                One subscription covers your entire phone front desk
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Every capability below runs on every call, on every plan —
                nothing is gated behind an upgrade.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {included.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.05} className="h-full">
                    <div className="rounded-xl border border-brand/20 bg-black/40 p-5 h-full transition-colors duration-200 hover:border-brand/40">
                      <span className="w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center mb-3">
                        <Icon
                          className="w-[18px] h-[18px] text-brand"
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="font-semibold text-brand-light mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Example call — product UI as proof */}
        <section id="call-example" className="w-full bg-black py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>Example call</p>
              <h2 className={sectionHeading}>
                A Friday-evening call, handled after close
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
                headerTitle="Maya — AI Receptionist"
                aiName="Maya"
                headerSubtitle="Lumen Hair Studio · Inbound · Fri 6:42 PM (after hours)"
                liveTime="00:38"
                turns={salonTurns}
                outcomeChips={salonChips}
                caption={
                  <figcaption className="text-center text-sm text-gray-500 mt-5 max-w-xl mx-auto">
                    The studio closed at six; the booking still happened —
                    shown exactly as it appears in your dashboard.{" "}
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

        {/* Switching */}
        <section id="switching" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Getting started</p>
              <h2 className={sectionHeading}>
                Switching takes days, not months
              </h2>
              <p className="text-gray-400 leading-relaxed">
                No porting paperwork, no IT project, no parallel-running a
                call center. Four steps and your phones are covered:
              </p>
            </Reveal>
            <div className="space-y-6">
              {switchSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} delay={i * 0.05}>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center text-brand relative">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                        <span
                          aria-hidden="true"
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand text-brand-foreground text-[11px] font-bold flex items-center justify-center"
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="comparison" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>Compare</p>
              <h2 className={sectionHeading}>
                How it compares to your current setup
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Voicemail, a human answering service, or another hire — here
                is what each option actually gets you:
              </p>
            </Reveal>
            <Reveal className="mb-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[720px] text-sm">
                <caption className="sr-only">
                  AI phone answering service compared with a human answering
                  service and voicemail
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
                      Fusion Calling AI
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
                        {row.fusion}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.human}
                      </td>
                      <td className="px-4 py-3 text-center text-gray-400">
                        {row.voicemail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comparisons.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.05} className="h-full">
                  <div className="rounded-xl border border-white/10 p-5 h-full">
                    <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section id="use-cases" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>Who it&apos;s for</p>
              <h2 className={sectionHeading}>
                Built for businesses that live on the phone
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                The service shapes itself to how your calls actually arrive —
                here&apos;s what that looks like in the industries that get the
                most from it.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((u, i) => {
                const Icon = u.icon;
                return (
                  <Reveal key={u.title} delay={i * 0.05} className="h-full">
                    <div className="rounded-xl border border-brand/20 bg-black/40 p-5 h-full transition-colors duration-200 hover:border-brand/40">
                      <span className="w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center mb-3">
                        <Icon
                          className="w-[18px] h-[18px] text-brand"
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="font-semibold text-white mb-2">
                        {u.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {u.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>Pricing</p>
              <h2 className={sectionHeading}>
                Flat monthly plans, no per-minute billing
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Compare every tier on the{" "}
                <Link href="/pricing" className="text-brand hover:underline">
                  pricing page
                </Link>
                . Want the full picture first? Read{" "}
                <Link
                  href="/ai-phone-call-receptionist"
                  className="text-brand hover:underline"
                >
                  how an AI phone call receptionist works
                </Link>{" "}
                or explore{" "}
                <Link
                  href="/ai-phone-call-automation"
                  className="text-brand hover:underline"
                >
                  AI phone call automation
                </Link>
                .
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.05} className="h-full">
                  <div className="rounded-xl border border-brand/20 bg-black/40 p-5 h-full flex flex-col">
                    <h3 className="font-display text-base font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="mb-3">
                      <span className="font-display text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-strong text-transparent bg-clip-text">
                        ${plan.price}
                      </span>
                      <span className="text-sm text-gray-500"> /mo</span>
                    </p>
                    <p className="text-sm font-semibold text-brand-light mb-2">
                      {plan.minutes}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed flex-1">
                      {plan.blurb}
                    </p>
                    {plan.setupFee && (
                      <p className="mt-3 rounded-md bg-brand/10 px-3 py-1.5 text-xs text-brand">
                        One-time setup: ${plan.setupFee}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {pricingTrustChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 rounded-full glass-light px-3.5 py-1.5 text-xs sm:text-sm text-gray-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                    {chip.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="mb-10 max-w-2xl">
              <p className={sectionEyebrow}>FAQ</p>
              <h2 className={sectionHeading}>
                Frequently asked questions
              </h2>
              <p className="text-gray-400 leading-relaxed">
                The questions buyers actually ask before switching — coverage,
                cost, control, and what your callers hear.
              </p>
            </Reveal>
            <Reveal>
              <Accordion
                type="single"
                collapsible
                className="rounded-xl border border-brand/20 bg-black/40 px-5"
              >
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={faq.question}
                    className={i === faqs.length - 1 ? "border-b-0" : "border-white/10"}
                  >
                    <AccordionTrigger className="py-4 text-left text-sm sm:text-base font-semibold text-white hover:no-underline hover:text-brand-light transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
            <p className="text-gray-400 mt-8">
              Small business? See the{" "}
              <Link
                href="/ai-receptionist-for-small-business"
                className="text-brand hover:underline"
              >
                AI receptionist for small business
              </Link>{" "}
              breakdown, or{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                hear what your callers would hear
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="w-full bg-black pb-20 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal>
              <div className="relative glass-light rounded-2xl border border-brand/25 px-6 py-12 md:py-16 text-center overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 -top-24 w-[520px] max-w-full h-56 rounded-full bg-brand/15 blur-[100px] pointer-events-none"
                />
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative">
                  Stop losing first-time callers to voicemail
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
                    Estimate Your Minutes
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <StickyMobileCta />

        <Sources />

        <Footer />
      </main>
    </>
  );
}
