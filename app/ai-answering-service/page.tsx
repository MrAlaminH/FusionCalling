import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Answering Service: 2026 Buyer's Guide";
const description =
  "An AI answering service picks up every business call 24/7 — booking, messages, transfers, SMS follow-ups — from $149/mo. Compare vs human services and see plans.";

const included = [
  {
    title: "24/7 live answering",
    text: "Every call picked up on the first ring — nights, weekends, holidays. No voicemail, no hold queue, no missed first impression, however many call at once.",
  },
  {
    title: "Appointment booking",
    text: "Checks real availability in your calendar, books or reschedules on the call, and sends an SMS confirmation while the caller is still on the line.",
  },
  {
    title: "Message-taking & screening",
    text: "Greets callers in your tone, captures detailed messages, screens solicitors per your rules, and routes what matters to the right person.",
  },
  {
    title: "Smart transfers",
    text: "Urgent or sensitive calls warm-transfer to you or your team instantly — with the transcript and caller details attached, so nobody repeats themselves.",
  },
  {
    title: "Common questions, answered",
    text: "Hours, pricing, directions, services, policies — the service learns your business knowledge and answers in natural conversation, not scripts.",
  },
  {
    title: "SMS follow-ups",
    text: "Booking links, addresses, intake forms, and confirmations go out by text during or after the call, so next steps arrive in writing.",
  },
];

const switchSteps = [
  {
    title: "Keep your number",
    text: "Your existing business number and carrier stay exactly as they are. Calls route to the AI service with forwarding you control — porting is optional, never required.",
  },
  {
    title: "Teach it your business",
    text: "Services, pricing, hours, service area, and FAQs in plain language. This replaces the 'crib sheet' a human service reads from — with your full knowledge, available instantly.",
  },
  {
    title: "Set answering rules",
    text: "Greeting, booking logic, screening rules, and exactly which calls transfer to whom. Test calls with the team tune it before customers ever hear it.",
  },
  {
    title: "Go live in days",
    text: "Most services go live within days of kickoff. Every call from day one comes with a transcript, so you can verify quality yourself instead of trusting a service report.",
  },
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

const faqs = [
  {
    question: "What is an AI answering service?",
    answer:
      "An AI answering service is a subscription service where voice agents answer your business calls around the clock: greeting callers, answering questions, booking appointments, taking messages, transferring urgent calls, and sending SMS follow-ups. Unlike a human answering service with per-minute billing and shift staffing, it answers instantly at a flat monthly rate — Fusion Calling plans start at $149/month with 500 included minutes.",
  },
  {
    question: "How is it different from an AI receptionist?",
    answer:
      "They overlap heavily — most buyers mean the same thing by either term. As a rule of thumb, 'answering service' describes the service you buy (coverage, plans, minutes), while 'AI receptionist' describes the agent that does the work. Our AI phone call receptionist guide explains the agent in depth; this page covers buying and running the service.",
  },
  {
    question: "How much does an AI answering service cost?",
    answer:
      "Fusion Calling starts at $149/month with 500 included minutes and scales to $497/month for 2,100 minutes — no setup fee, no long-term contract. Human answering services typically bill $1–3 per minute plus base fees, so 500 minutes with a human service often costs $750–$1,500. Estimate your volume with the call volume calculator.",
  },
  {
    question: "Can I keep my existing business number?",
    answer:
      "Yes. Your number and carrier stay as they are; calls forward to the AI service under rules you control. You can also provision new numbers per campaign or location and manage them from one dashboard.",
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
    question: "How quickly can I switch from my current service?",
    answer:
      "Most services go live within days: forward your number, provide business knowledge, set answering rules, and run test calls. Because every call is transcribed, you can audit quality yourself from day one — something legacy services never offered.",
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
  ...buildOpenGraph({ title, description, path: "/ai-answering-service" }),
};

export default function AiAnsweringServicePage() {
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
            name: "AI Answering Service",
            item: `${SITE_URL}/ai-answering-service`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-answering-service#article`,
        headline: "AI Answering Service, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-09-19",
        dateModified: CONTENT_LAST_UPDATED,
        author: { "@id": `${SITE_URL}/team/voice-team#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-answering-service`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI answering service",
          description:
            "A subscription service where AI voice agents answer a business's calls around the clock — booking, messaging, transferring, and follow-ups at a flat monthly rate.",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-answering-service#webpage`,
        url: `${SITE_URL}/ai-answering-service`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-answering-service#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-answering-service#faqpage`,
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
        id="ai-answering-service-schema"
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
              Buyer&apos;s Guide
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Answering Service
              </span>{" "}
              That Picks Up Every Call
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Live answering 24/7 — bookings, messages, smart transfers, and
              SMS follow-ups — from $149/month with no per-minute billing.{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                Hear live demo calls
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                view plans
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

        {/* What's included */}
        <section id="included" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What the service includes
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              One subscription covers your entire phone front desk — every
              capability below runs on every call, on every plan:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Switching */}
        <section id="switching" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Switching takes days, not months
            </h2>
            <div className="space-y-8">
              {switchSteps.map((step, i) => (
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

        {/* Comparisons */}
        <section id="comparison" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How it compares to your current setup
            </h2>
            <div className="space-y-4">
              {comparisons.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
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
              AI answering service pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Flat monthly plans, minutes included, no per-minute surprises:
              $149/month with 500 minutes, scaling to $497/month for 2,100
              minutes — no setup fee, no long-term contract. Work out your
              volume with the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                call volume calculator
              </Link>{" "}
              or compare every tier on the{" "}
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

        <Sources />

        <Footer />
      </main>
    </>
  );
}
