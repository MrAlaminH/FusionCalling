import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Receptionist for Small Business (2026)";
const description =
  "AI receptionist for small business: every call answered 24/7, bookings and messages handled, from $149/mo with setup in days. See the math, the fit, and live demos.";

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
      "Usually the math decides quickly: if a single new customer is worth a few hundred dollars, one saved job or booking covers the $149/month starting plan. Small businesses miss most calls that arrive mid-job or after hours, and most first-time callers who reach voicemail never call back — an AI receptionist answers every one of those calls live.",
  },
  {
    question: "How much does an AI receptionist cost for a small business?",
    answer:
      "Fusion Calling starts at $149/month with 500 included minutes — enough for most single-location businesses — and scales to $497/month for 2,100 minutes. No setup fee, no long-term contract, no per-minute surprises. Compare that to $1–3 per minute for human answering services or $3,000+/month for a hire.",
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
        dateModified: CONTENT_LAST_UPDATED,
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
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-receptionist-for-small-business#webpage`,
        url: `${SITE_URL}/ai-receptionist-for-small-business`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
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
      <main id="main" className="min-h-screen w-full bg-black">
        <Navbar />

        {/* Hero */}
        <section
          id="overview"
          className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
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
              Every call answered 24/7, jobs booked while you&apos;re on the
              tools — from $149/month, live in days, no IT needed.{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                Hear what your callers would hear
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
                href="/calculator"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/5"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </section>

        {/* The math */}
        <section id="math" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The math that makes it obvious
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Small businesses don&apos;t have a call-volume problem — they
              have a missed-call problem. Four numbers settle it:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mathPoints.map((m) => (
                <div
                  key={m.title}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section id="who" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for businesses like yours
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              If customers call you to book, ask, or buy — this fits. See your
              trade:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fitList.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    {f.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {f.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Objections */}
        <section id="objections" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              Fair concerns, straight answers
            </h2>
            <div className="space-y-4">
              {objections.map((o) => (
                <div
                  key={o.title}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <h3 className="font-semibold text-white mb-1">{o.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {o.text}
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
              Small business pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Start at $149/month with 500 included minutes — most
              single-location businesses fit comfortably — and scale to
              $497/month for 2,100 minutes when you grow. No setup fee, no
              contract. Run your numbers in the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                ROI calculator
              </Link>{" "}
              or see every tier on the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                pricing page
              </Link>
              . Want the service-level view? Read the{" "}
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

        <Sources />

        <Footer />
      </main>
    </>
  );
}
