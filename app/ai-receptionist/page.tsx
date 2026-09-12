import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Receptionist for Business Calls";
const description =
  "An AI receptionist answers your business calls 24/7: bookings, messages, smart transfers, and SMS follow-ups. See how it works, what it handles, and pricing from $149/mo.";

const handles = [
  {
    title: "24/7 call answering",
    text: "Every caller is greeted in two rings — nights, weekends, and holidays included. No voicemail, no hold queue, no missed first impression.",
  },
  {
    title: "Appointment booking",
    text: "Checks real availability in your connected calendar, books or reschedules on the call, and sends a confirmation instantly.",
  },
  {
    title: "Appointment reminders",
    text: "Places outbound reminder calls that cut no-shows, and reschedules cancellations on the spot to keep the day full.",
  },
  {
    title: "Message-taking & smart transfer",
    text: "Screens callers, captures detailed messages, and warm-transfers urgent calls to you or your team with the context attached.",
  },
  {
    title: "Answers common questions",
    text: "Hours, directions, pricing, service areas, policies — the receptionist learns your business knowledge and answers in your tone.",
  },
  {
    title: "SMS follow-ups",
    text: "Texts links, addresses, intake forms, or booking confirmations during or after the call, so next steps arrive in writing.",
  },
];

const howItWorks = [
  {
    title: "A caller dials your number",
    text: "Keep your existing business number and carrier. The AI receptionist answers on the first or second ring with a greeting you write, in a voice you choose.",
  },
  {
    title: "It understands what the caller needs",
    text: "Speech recognition and a language model interpret intent in natural conversation — booking, rescheduling, a question about hours, an urgent situation — with follow-up questions when details are missing.",
  },
  {
    title: "It completes the task during the call",
    text: "The receptionist books into your calendar, checks your business knowledge for answers, logs the caller and the outcome, and sends an SMS confirmation while the caller is still on the line.",
  },
  {
    title: "It hands off when judgment is needed",
    text: "For emergencies, negotiations, or anything you flag as human-only, the call transfers to you or your team with a transcript and the reason for the handoff, so nobody repeats themselves.",
  },
];

const comparisons = [
  {
    title: "vs. a full-time receptionist",
    text: "A receptionist covers about 40 hours a week, one call at a time, and typically costs $3,000+/month once salary and benefits are counted. An AI receptionist answers unlimited concurrent calls around the clock from $149/month — and your human team handles the conversations that genuinely need a person.",
  },
  {
    title: "vs. a human answering service",
    text: "Traditional answering services bill $1–3 per minute, work in shifts, and read from scripts about your business. An AI receptionist answers instantly at a flat monthly rate with your full business knowledge — hours, policies, services — not a crib sheet.",
  },
  {
    title: "vs. voicemail",
    text: "Roughly 4 in 5 first-time callers who reach voicemail do not call back. An AI receptionist answers every call live, captures the lead, and books the job — which is exactly the revenue voicemail quietly loses.",
  },
];

const industryLinks = [
  {
    name: "Real Estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Capture buyer and seller leads, qualify them, and book showings the moment they call.",
  },
  {
    name: "Dental & Healthcare",
    href: "/industries/ai-voice-for-dental",
    text: "Book and reschedule patients, run recall reminders, and handle HIPAA-conscious intake.",
  },
  {
    name: "Insurance",
    href: "/industries/ai-voice-for-insurance",
    text: "Take quote requests, route policy questions, and follow up consistently within TCPA rules.",
  },
  {
    name: "Home Services",
    href: "/industries/ai-voice-for-home-services",
    text: "Answer emergency calls after hours, book estimates, and route jobs to the right tech.",
  },
  {
    name: "Law Firms",
    href: "/industries/ai-voice-for-law-firms",
    text: "Run client intake, book consultations, and capture every after-hours inquiry.",
  },
  {
    name: "Automotive",
    href: "/industries/ai-voice-for-automotive",
    text: "Book service appointments, handle recall outreach, and answer parts questions.",
  },
  {
    name: "Call Centers & BPO",
    href: "/industries/ai-voice-for-call-centers",
    text: "Absorb overflow and after-hours volume without adding seats or hold time.",
  },
  {
    name: "Financial Services",
    href: "/industries/ai-voice-for-financial-services",
    text: "Qualify prospects, schedule advisor meetings, and follow up on applications.",
  },
  {
    name: "E-commerce & Retail",
    href: "/industries/ai-voice-for-ecommerce-retail",
    text: "Answer order-status and returns questions and run cart-recovery calls.",
  },
  {
    name: "Education & Tutoring",
    href: "/industries/ai-voice-for-education-tutoring",
    text: "Answer enrollment questions, book sessions, and remind students of upcoming classes.",
  },
  {
    name: "Restaurants & Hospitality",
    href: "/industries/ai-voice-for-restaurants-hospitality",
    text: "Take reservations and phone orders, and answer hours, menu, and directions questions.",
  },
];

const faqs = [
  {
    question: "What is an AI receptionist?",
    answer:
      "An AI receptionist is software that answers your business phone calls like a front-desk employee: it greets callers, answers questions using your business knowledge, books appointments into your calendar, takes messages, sends SMS confirmations, and transfers urgent calls to your team. It works 24/7 and handles many calls at the same time.",
  },
  {
    question: "How much does an AI receptionist cost?",
    answer:
      "Fusion Calling plans start at $149/month with 500 included minutes and scale to $497/month for 2,100 minutes, with no long-term contracts. For comparison, a human receptionist typically costs $3,000+/month for 40 hours of coverage, and human answering services bill $1–3 per minute.",
  },
  {
    question: "Will AI replace receptionists?",
    answer:
      "No — it replaces the repetitive part of the job. The AI handles routine calls: bookings, hours, directions, reminders, and message-taking. Judgment calls, sensitive conversations, and loyal-customer relationships stay with your people. Most businesses use the AI as the first line so staff time goes to conversations that need a human.",
  },
  {
    question: "Are AI receptionists worth it for small businesses?",
    answer:
      "Usually, yes — the math is about missed calls. If your business misses 20 calls a month and closes 1 in 4 at $300 average value, that is $1,500 in lost revenue, more than the plan cost. An AI receptionist makes sense when a missed call means lost work: home services, clinics, restaurants, real estate, and law firms see the fastest payback.",
  },
  {
    question: "Can callers tell they are talking to an AI?",
    answer:
      "The conversation feels natural: sub-second responses, realistic pacing, and it handles interruptions and topic changes. Most businesses introduce the receptionist by name in the greeting. Callers care about getting help fast — an instant, accurate answer beats hold music or voicemail.",
  },
  {
    question: "What happens when the AI cannot help a caller?",
    answer:
      "You set the rules for escalation. Emergencies, angry callers, or requests you mark human-only trigger a warm transfer to you or your team, with the transcript, caller details, and reason for the handoff attached. Nothing gets stranded, and nobody has to start over.",
  },
  {
    question: "How is an AI receptionist different from an answering service?",
    answer:
      "An answering service takes messages on your behalf, per minute, from a script. An AI receptionist takes action on your behalf: it books into your actual calendar, answers from your real business knowledge, sends SMS confirmations, and updates your CRM — at a flat monthly rate instead of per-minute billing.",
  },
  {
    question: "Can I resell an AI receptionist to my clients?",
    answer:
      "Yes. Agencies, consultants, and MSPs resell Fusion Calling as a white-label AI receptionist under their own brand and pricing, with client sub-accounts and Stripe rebilling included. Partner plans start at $99/month — see the white-label program for details.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-receptionist" }),
};

export default function AiReceptionistPage() {
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
            name: "AI Receptionist",
            item: `${SITE_URL}/ai-receptionist`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/ai-receptionist#service`,
        name: "Fusion Calling AI Receptionist",
        description:
          "A 24/7 AI receptionist that answers business calls, books appointments, takes messages, sends SMS follow-ups, and warm-transfers urgent calls to your team.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "US, CA, GB, AU",
        audience: {
          "@type": "Audience",
          audienceType:
            "Small businesses, clinics, home services, restaurants, real estate teams, law firms",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-receptionist#webpage`,
        url: `${SITE_URL}/ai-receptionist`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}/ai-receptionist#breadcrumb` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-receptionist#faqpage`,
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
        id="ai-receptionist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />

        <section
          id="overview"
          className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-4">
              24/7 Phone Answering
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Receptionist
              </span>{" "}
              That Answers Every Call
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Your business phone answered in two rings, around the clock:
              bookings, messages, answers, and smart transfers — under your
              brand, from $149/month.{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                View pricing
              </Link>{" "}
              or{" "}
              <Link
                href="/#show-case"
                className="text-brand hover:underline"
              >
                hear live demo calls
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#show-case"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
              >
                Hear It Answer Live
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

        <section id="what-is" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is an AI receptionist?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              An AI receptionist is software that answers your business phone
              the way a great front-desk employee would: instantly, politely,
              and with real knowledge of your business. Callers speak normally —
              no menus, no &quot;press 1&quot; — and the receptionist
              understands what they need, answers questions from your hours,
              services, and policies, and gets things done during the call.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              It is the most requested voice AI use case for small businesses
              because it maps directly to money: missed calls are missed
              bookings. Fusion Calling&apos;s AI receptionist software connects
              to your existing number, calendar, and CRM, so it works inside
              the workflow you already run. Curious about the technology? Read{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                how AI phone automation works
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="what-it-handles" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              What an AI receptionist handles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {handles.map((h) => (
                <div
                  key={h.title}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {h.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How the AI receptionist works
            </h2>
            <div className="space-y-8">
              {howItWorks.map((step, i) => (
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

        <section id="vs-human" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI receptionist vs. human receptionist
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              This is not a replacement story. The AI wins on availability,
              capacity, and cost; your people win on judgment and
              relationships. Most businesses run both: the AI answers
              everything first, humans get what matters.
            </p>
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

        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI receptionist pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Business plans start at $149/month with 500 included minutes and
              scale to $497/month for 2,100 minutes — no setup fee, no
              long-term contract. Every plan includes 24/7 answering, booking,
              SMS follow-ups, and warm transfer. Run your own numbers in the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                ROI calculator
              </Link>{" "}
              or see the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>
              . Running an agency? Resell it white-label from $99/month on the{" "}
              <Link href="/whitelabel" className="text-brand hover:underline">
                partner program
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="industries" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              An AI receptionist for every industry
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Same receptionist, tuned per vertical — greetings, scripts,
              calendar flows, and compliance. Pick yours:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industryLinks.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    AI receptionist for {uc.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {uc.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
              Ready to stop missing calls?{" "}
              <Link href="/" className="text-brand hover:underline">
                Get your AI receptionist with a live demo on the homepage
              </Link>
              ,{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                compare plans
              </Link>
              , or{" "}
              <Link href="/whitelabel" className="text-brand hover:underline">
                resell it under your agency brand
              </Link>
              .
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
