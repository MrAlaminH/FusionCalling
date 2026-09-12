import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Cold Calling Software";
const description =
  "AI cold calling software that dials your lists, holds natural conversations, qualifies prospects, and books meetings — with TCPA-conscious workflows. From $149/mo.";

const handles = [
  {
    title: "Outbound dialing at scale",
    text: "Upload your prospect list and the agent places calls in parallel — re-engagement runs, follow-ups, and appointment-setting campaigns without adding dialers or staff.",
  },
  {
    title: "Natural two-way conversation",
    text: "Prospects interrupt, ask questions, and change topics; the agent keeps up with sub-second responses and realistic pacing instead of reading a rigid script.",
  },
  {
    title: "Qualification & meeting booking",
    text: "The agent asks your qualification questions, scores the prospect, books interested callers straight into your calendar, and logs everything to your CRM.",
  },
  {
    title: "TCPA-conscious workflows",
    text: "Support for consent-aware calling, time-of-day windows, and opt-out handling so your outbound programs stay respectful of regulations like the TCPA. You stay in control of the rules.",
  },
  {
    title: "Every call transcribed",
    text: "Full transcripts and outcomes for every dial, so you can see what converts, tune the script, and prove ROI on every campaign.",
  },
  {
    title: "Human handoff that closes",
    text: "When a prospect is hot or asks for a person, the agent warm-transfers to your closer with the transcript and context — no restart, no lost momentum.",
  },
];

const howItWorks = [
  {
    title: "You load the campaign",
    text: "Bring your prospect list, define the goal (book a meeting, re-engage, follow up), and set the qualification questions and objection handling in plain language — no code.",
  },
  {
    title: "The agent dials and converses",
    text: "Calls go out in parallel within your time-of-day rules. The agent opens with your intro, handles questions and objections, and adapts to what the prospect actually says.",
  },
  {
    title: "Outcomes are captured instantly",
    text: "Interested prospects are booked into your calendar or warm-transferred to your team. Every call ends with a transcript, outcome tag, and CRM record — nothing lives in someone's notebook.",
  },
];

const useCases = [
  {
    name: "Insurance",
    href: "/industries/ai-voice-for-insurance",
    text: "Follow up on quote requests, renewals, and lapses — consistently and within TCPA-conscious windows.",
  },
  {
    name: "Home Services",
    href: "/industries/ai-voice-for-home-services",
    text: "Re-engage past customers for seasonal maintenance and book estimates straight into the calendar.",
  },
  {
    name: "Automotive",
    href: "/industries/ai-voice-for-automotive",
    text: "Service reminders, recall outreach, and lease-end follow-ups that actually reach people.",
  },
  {
    name: "Financial Services",
    href: "/industries/ai-voice-for-financial-services",
    text: "Qualify inbound interest, schedule advisor meetings, and follow up on applications.",
  },
];

const faqs = [
  {
    question: "Is AI cold calling legal?",
    answer:
      "Outbound calling rules depend on your jurisdiction — in the US, the TCPA governs consent, calling hours, and do-not-call obligations. AI cold calling software does not exempt you from those rules. Fusion Calling supports TCPA-conscious workflows like time-of-day windows and opt-out handling, but compliance decisions and list consent remain your responsibility. Consult counsel for your specific program.",
  },
  {
    question: "Does cold calling still work?",
    answer:
      "It works when speed and consistency are on your side — the two things AI improves most. The agent dials every lead, follows up on time, and never tires of the tenth objection. Most teams use it for re-engagement, follow-up, and appointment setting rather than top-of-funnel cold lists.",
  },
  {
    question: "Can prospects tell the caller is an AI?",
    answer:
      "The conversation sounds natural: sub-second replies, realistic pacing, and it handles interruptions. Many businesses introduce the agent by name. What matters to prospects is getting useful answers quickly — and a warm transfer to a human the moment they ask for one.",
  },
  {
    question: "How many calls can an AI agent make at once?",
    answer:
      "AI agents run many calls in parallel — capacity scales with your plan's included minutes rather than headcount. Plans start at $149/month with 500 minutes and scale to $497/month with 2,100 minutes, with no setup fee or long-term contract.",
  },
  {
    question: "How much does AI cold calling software cost?",
    answer:
      "Fusion Calling plans start at $149/month with 500 included minutes and scale to $497/month for 2,100 minutes — no setup fee, no long-term contract. Compare that to SDR hours or per-seat dialers, and model your own numbers with the ROI calculator.",
  },
  {
    question: "What happens when a prospect wants a human?",
    answer:
      "The agent warm-transfers instantly to you or your team with the full transcript, the prospect's details, and the reason for the handoff. Hot prospects reach a closer while they are still interested — the AI handles the dialing; your people close.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/ai-phone-call-automation/cold-calling" }),
};

export default function AiColdCallingPage() {
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
            name: "AI Phone Call Automation",
            item: `${SITE_URL}/ai-phone-call-automation`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Cold Calling Software",
            item: `${SITE_URL}/ai-phone-call-automation/cold-calling`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/cold-calling#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation/cold-calling`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation/cold-calling#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/cold-calling#faqpage`,
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
        id="ai-cold-calling-schema"
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
                Cold Calling
              </span>{" "}
              Software That Books Meetings
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Dial your lists with agents that hold real conversations,
              qualify prospects, and book meetings into your calendar — with
              TCPA-conscious workflows and every call transcribed.{" "}
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
                Hear It in Action
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
              What is AI cold calling software?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              AI cold calling software places outbound sales calls with voice
              agents instead of people. The agent dials your list, holds a
              natural two-way conversation, handles questions and objections,
              qualifies the prospect, books meetings, and logs the outcome to
              your CRM — all while staying inside the calling rules you
              configure.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              It is part of the broader shift toward{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                AI phone call automation
              </Link>
              : routine call work runs on software, and your team spends its
              hours on the conversations that actually need a person. Running
              inbound too? Pair it with the{" "}
              <Link href="/ai-receptionist" className="text-brand hover:underline">
                AI receptionist
              </Link>{" "}
              so no call — inbound or outbound — goes uncovered.
            </p>
          </div>
        </section>

        <section id="what-it-handles" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              What the AI caller handles
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
              How AI cold calling works
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
              Industries getting the most from AI cold calling
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              The best fit is follow-up-heavy businesses where consistent
              outbound touches directly create bookings:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    AI cold calling for {uc.name}
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
              AI cold calling pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Outbound runs on the same plans as everything else: $149/month
              with 500 included minutes, scaling to $497/month for 2,100
              minutes — no setup fee, no long-term contract. Estimate your
              campaign capacity with the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                call volume calculator
              </Link>{" "}
              or see the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>
              . Agency reselling outbound as a service? The{" "}
              <Link
                href="/whitelabel/reseller-program"
                className="text-brand hover:underline"
              >
                AI voice agent reseller program
              </Link>{" "}
              starts at $99/month.
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
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                how AI phone call automation works
              </Link>
              , the{" "}
              <Link href="/ai-receptionist" className="text-brand hover:underline">
                AI receptionist for inbound calls
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
