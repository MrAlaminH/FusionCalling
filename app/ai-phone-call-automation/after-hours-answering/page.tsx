import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "After-Hours Answering Service with AI";
const description =
  "An AI after-hours answering service picks up nights, weekends, and holidays — emergency triage, next-day booking, messages. From $149/mo, live in days.";

const handles = [
  {
    title: "Every after-hours call answered",
    text: "Nights, weekends, holidays — every caller reaches a live answer on the first ring instead of voicemail. No separate night staff, no forwarding chains.",
  },
  {
    title: "Emergency triage that escalates",
    text: "Your urgency rules decide what can't wait: emergencies warm-transfer to on-call staff instantly with full context, everything else becomes a booked visit or a clean message.",
  },
  {
    title: "Next-day booking on the spot",
    text: "Non-urgent callers book into tomorrow's real availability right then — with SMS confirmations — instead of promising to call back during business hours.",
  },
  {
    title: "Messages that arrive complete",
    text: "Name, number, reason, and urgency captured every time and delivered where you read them — no more half-audible voicemails at 7am.",
  },
  {
    title: "Overflow cover at peak hours",
    text: "Lunch rushes and Monday-morning surges get the same treatment: simultaneous calls answered in parallel while your team works undisturbed.",
  },
  {
    title: "Full transcripts by morning",
    text: "Every overnight call arrives transcribed with outcomes tagged — review the night in minutes over coffee instead of playing voicemail roulette.",
  },
];

const howItWorks = [
  {
    title: "You set the hours and rules",
    text: "Define after-hours windows, what counts as urgent, who gets woken for what, and how routine calls should end — booking, message, or SMS follow-up.",
  },
  {
    title: "Calls route automatically",
    text: "After hours, your number forwards to the AI service. Greetings can even state the time context so callers know exactly what to expect.",
  },
  {
    title: "Mornings start with answers",
    text: "Bookings sit in tomorrow's calendar, messages arrive complete, and only genuine emergencies touched a human overnight.",
  },
];

const useCases = [
  {
    name: "Home Services",
    href: "/industries/ai-voice-for-home-services",
    text: "Burst pipes and dead furnaces at 2am get triaged and dispatched — routine calls become morning estimates.",
  },
  {
    name: "Dental & Healthcare",
    href: "/industries/ai-voice-for-dental",
    text: "Toothaches and worries answered kindly overnight; urgent cases escalated, the rest booked for morning.",
  },
  {
    name: "Veterinary",
    href: "/industries/ai-voice-for-veterinary",
    text: "Worried owners answered instantly at night; emergencies reach on-call staff while routine visits book themselves.",
  },
  {
    name: "Real Estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Evening portal browsers — peak inquiry time — get instant answers and showings instead of morning-after callbacks.",
  },
];

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
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation/after-hours-answering#breadcrumb`,
        },
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

        <section
          id="overview"
          className="relative w-full bg-gradient-to-b from-zinc-950 via-black to-black pt-32 pb-16 md:pt-40 md:pb-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
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
              What is an AI after-hours answering service?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              An AI after-hours answering service takes your calls when your
              team is off: it answers on the first ring, separates emergencies
              from routine calls using rules you set, warm-transfers the urgent
              ones to on-call staff, and books or messages the rest — so
              mornings start with a fuller diary instead of a voicemail
              backlog.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              It is one workflow of{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                AI phone call automation
              </Link>
              , and the natural starting point before full 24/7 coverage with
              an{" "}
              <Link
                href="/ai-phone-call-receptionist"
                className="text-brand hover:underline"
              >
                AI phone call receptionist
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="what-it-handles" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              What overnight coverage handles
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
              How after-hours coverage works
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
              Trades that can&apos;t afford to miss nights
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              If your customers&apos; worst moments happen after 5pm, this is
              your highest-ROI workflow:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    After-hours answering for {uc.name}
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
              After-hours answering pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Coverage runs on the same plans as everything else — starting at
              $149/month with no after-hours premiums. See the{" "}
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

        <Footer />
      </main>
    </>
  );
}
