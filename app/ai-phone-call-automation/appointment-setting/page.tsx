import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Appointment Setting Services";
const description =
  "AI appointment setting that calls new inquiries in minutes and books them into your calendar — speed-to-lead plus outbound setting campaigns. From $149/mo.";

const handles = [
  {
    title: "Speed-to-lead in minutes",
    text: "New web inquiries, ad leads, and missed calls get a live call within minutes — while intent is hot — instead of waiting for tomorrow's callback queue.",
  },
  {
    title: "Real qualification conversations",
    text: "The agent asks your budget, timeline, and fit questions naturally, so only sales-ready prospects reach your calendar — not every curious clicker.",
  },
  {
    title: "Direct calendar booking",
    text: "Qualified prospects are booked into real availability on the call, with SMS confirmations in writing. No phone tag, no scheduling links ignored.",
  },
  {
    title: "Outbound setting campaigns",
    text: "Beyond inbound speed-to-lead, run proactive campaigns over stalled quotes, old inquiries, and dormant lists to refill the diary on demand.",
  },
  {
    title: "Every attempt logged",
    text: "Calls, outcomes, transcripts, and bookings write to your CRM automatically — you see contact rates and set-rates per source, not guesses.",
  },
  {
    title: "Human handoff for hot leads",
    text: "High-value or complex prospects warm-transfer to your closers instantly with the full conversation attached — momentum preserved.",
  },
];

const howItWorks = [
  {
    title: "Leads flow in automatically",
    text: "Web forms, ad platforms, and missed calls route straight to the agent. You define which sources trigger instant outreach and which qualify for campaigns.",
  },
  {
    title: "The agent calls and qualifies",
    text: "Within minutes, the prospect gets a natural call: confirming interest, asking your qualification questions, handling objections, and proposing times.",
  },
  {
    title: "Booked prospects land staffed",
    text: "Set appointments appear in your calendar with notes and transcripts. No-shows get reminder calls automatically, and cancellations trigger rebooking.",
  },
];

const useCases = [
  {
    name: "Home Services",
    href: "/industries/ai-voice-for-home-services",
    text: "Quote requests called back in minutes and booked as estimates — before the homeowner calls the next contractor.",
  },
  {
    name: "Real Estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Portal inquiries answered instantly, buyers qualified, showings scheduled while competing agents sleep.",
  },
  {
    name: "Financial Services",
    href: "/industries/ai-voice-for-financial-services",
    text: "Application and inquiry follow-ups that book advisor meetings instead of decaying in a queue.",
  },
  {
    name: "Beauty & Wellness",
    href: "/industries/ai-voice-for-beauty-wellness",
    text: "Booking inquiries converted to reserved chairs — first-time callers rarely wait for a callback.",
  },
];

const faqs = [
  {
    question: "What is AI appointment setting?",
    answer:
      "AI appointment setting uses voice agents to call new leads within minutes of inquiry, qualify them in natural conversation, and book the sales-ready ones directly into your calendar. It combines speed-to-lead on inbound inquiries with proactive outbound campaigns over stalled or dormant leads.",
  },
  {
    question: "How is this different from AI cold calling?",
    answer:
      "Cold calling dials broad prospect lists to create interest from scratch; appointment setting works warm demand — fresh inquiries, quotes, and follow-ups — where speed decides who wins. Fusion Calling runs both on the same platform: read the AI cold calling software guide for the outbound side.",
  },
  {
    question: "How fast does it contact new leads?",
    answer:
      "Minutes. Web forms, ad leads, and missed calls route to the agent automatically, and outreach starts while intent is highest. Teams typically see contact rates far above next-day manual callbacks.",
  },
  {
    question: "What does AI appointment setting cost?",
    answer:
      "Fusion Calling plans start at $149/month with 500 included minutes and scale to $497/month for 2,100 minutes — no setup fee, no long-term contract. One extra booked job a month usually covers the plan; model your volume with the ROI calculator.",
  },
  {
    question: "Does it integrate with my CRM and calendar?",
    answer:
      "Yes. Bookings land in your real calendar availability, and every call writes outcomes, transcripts, and contact records to your CRM — plus Zapier links to 2,200+ apps. Nothing lives in a rep's notebook.",
  },
  {
    question: "What happens to unqualified or uninterested leads?",
    answer:
      "They're tagged with the reason and recycled correctly: nurture sequences, future campaigns, or suppression. Your closers only spend time on prospects worth calling — and the data shows exactly why the rest didn't convert.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/ai-phone-call-automation/appointment-setting",
  }),
};

export default function AiAppointmentSettingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-call-automation/appointment-setting#breadcrumb`,
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
            name: "AI Appointment Setting Services",
            item: `${SITE_URL}/ai-phone-call-automation/appointment-setting`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/appointment-setting#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation/appointment-setting`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation/appointment-setting#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/appointment-setting#faqpage`,
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
        id="ai-appointment-setting-schema"
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
              Outbound Voice AI
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                Appointment Setting
              </span>{" "}
              That Calls Leads in Minutes
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Speed-to-lead on every inquiry plus outbound setting campaigns —
              qualified prospects booked straight into your calendar.{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                View pricing
              </Link>{" "}
              or{" "}
              <Link href="/#show-case" className="text-brand hover:underline">
                hear live demo calls
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

        <section id="what-is" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is AI appointment setting?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              AI appointment setting calls new leads within minutes of their
              inquiry, qualifies them in natural conversation, and books the
              ready ones into your calendar — then keeps working stalled and
              dormant leads with outbound campaigns. It is the bridge between
              marketing spend and sales conversations.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              It runs on the same platform as{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                AI phone call automation
              </Link>
              : inbound inquiries get instant outreach, outbound lists get
              systematic follow-up, and your closers only meet qualified
              prospects. Pair it with{" "}
              <Link
                href="/ai-phone-call-automation/lead-qualification"
                className="text-brand hover:underline"
              >
                AI lead qualification
              </Link>{" "}
              for deeper screening.
            </p>
          </div>
        </section>

        <section id="what-it-handles" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              What the AI setter handles
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
              How AI appointment setting works
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

        <section id="use-cases" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Businesses that book more with AI setters
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Any business where the fastest responder wins the job:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    AI appointment setting for {uc.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {uc.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI appointment setting pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Setting runs on the same plans as everything else: $149/month
              with 500 included minutes, scaling to $497/month for 2,100
              minutes — no setup fee, no long-term contract. Estimate capacity
              with the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                call volume calculator
              </Link>{" "}
              or see the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>
              .
            </p>
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
              Keep exploring:{" "}
              <Link
                href="/ai-phone-call-automation/cold-calling"
                className="text-brand hover:underline"
              >
                AI cold calling software
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

        <Footer />
      </main>
    </>
  );
}
