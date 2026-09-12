import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "AI Lead Qualification Calls";
const description =
  "Qualify inbound and outbound leads automatically with AI phone calls. Speed-to-lead in minutes, BANT-style scoring, and every call synced to your CRM with a transcript. From $149/mo.";

const qualifiesOn = [
  {
    title: "Budget & readiness",
    text: "The AI asks whether the prospect is ready to move forward and whether the numbers work for both sides, so your team stops spending evenings on quotes that were never going to close.",
  },
  {
    title: "Timeline & urgency",
    text: "Is this needed this week or next quarter? Urgent leads get flagged and routed first, while long-horizon prospects are tagged for nurture instead of clogging the sales calendar.",
  },
  {
    title: "Fit & location",
    text: "Service area, property type, job size, or account size — the AI checks each lead against the criteria you define and politely declines the ones outside your coverage before they reach a salesperson.",
  },
  {
    title: "Decision-maker status",
    text: "The AI confirms whether the person on the phone makes the buying decision, and captures who else is involved, so proposals go to the right table instead of stalling mid-funnel.",
  },
];

const howItWorks = [
  {
    title: "A new lead arrives",
    text: "A form submission, ad click, after-hours voicemail, or missed web chat lands in your system. The moment it appears, the lead is queued for a call — no lead list to export, no rep to assign.",
  },
  {
    title: "The AI calls within minutes",
    text: "Speed-to-lead is the whole game: research consistently shows that contacting a lead within minutes dramatically raises contact and conversion rates compared with calling back hours later, when prospects have gone cold or signed with a competitor. The AI calls in minutes, 24/7.",
  },
  {
    title: "It asks your questions, scores, and tags the lead",
    text: "In natural conversation, the AI asks your qualification questions, listens to the answers, and scores and tags the lead against your criteria — hot, nurture, or not a fit — while the prospect is still on the line.",
  },
  {
    title: "Qualified leads are booked or routed in your CRM",
    text: "Hot leads are booked straight into a connected calendar or routed to the right rep, with the full transcript, score, and tags attached — so follow-up starts warm instead of from a cold list.",
  },
];

const industryLinks = [
  {
    label: "AI receptionist for real estate",
    href: "/industries/ai-voice-for-real-estate",
    text: "Qualify buyer and seller inquiries in minutes and book showings before prospects move on to the next listing.",
  },
  {
    label: "AI voice for insurance",
    href: "/industries/ai-voice-for-insurance",
    text: "Screen quote requests, capture policy details, and route serious buyers to agents within TCPA rules.",
  },
  {
    label: "AI receptionist for financial services",
    href: "/industries/ai-voice-for-financial-services",
    text: "Qualify prospects, schedule advisor meetings, and keep every application follow-up consistent.",
  },
];

const faqs = [
  {
    question: "How fast should leads be called after they come in?",
    answer:
      "Within minutes. Speed-to-lead research consistently shows that contacting a lead within the first few minutes dramatically raises contact and conversion rates compared with calling back hours later, when prospects have already gone cold or chosen a competitor. An AI qualifier calls every new lead in minutes, around the clock.",
  },
  {
    question: "Can AI qualification calls sync to my CRM?",
    answer:
      "Yes. Every call is logged to your CRM with the transcript, the qualification score, and the tags. Fusion Calling integrates with GoHighLevel via API and webhooks, with HubSpot, and with 2,200+ more apps through Zapier, so qualified leads land in the right pipeline without manual data entry.",
  },
  {
    question: "What questions should an AI lead qualifier ask?",
    answer:
      "Stick to a short, consistent set: budget and readiness to move forward, timeline and urgency, fit and location, and whether the person you are speaking with makes the buying decision. The AI asks your questions in natural conversation, scores the answers, and tags the lead before anyone picks up.",
  },
  {
    question: "How much do AI lead qualification calls cost?",
    answer:
      "Qualification calls run on the same business plans: Fusion Calling starts at $149/month with 500 included minutes and scales to $497/month for 2,100 minutes, with no setup fee and no long-term contracts. Because every lead is called in minutes, most teams recover the cost from leads that used to go cold.",
  },
  {
    question: "What happens to qualified leads?",
    answer:
      "Qualified leads are booked straight into a connected calendar or routed in your CRM with the transcript, score, and tags attached, so a salesperson follows up with full context instead of a cold callback. Unqualified leads are politely declined or tagged for nurture, so your team only works real opportunities.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title,
    description,
    path: "/ai-phone-call-automation/lead-qualification",
  }),
};

export default function LeadQualificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/ai-phone-call-automation/lead-qualification#breadcrumb`,
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
            name: "AI Lead Qualification Calls",
            item: `${SITE_URL}/ai-phone-call-automation/lead-qualification`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/lead-qualification#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation/lead-qualification`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation/lead-qualification#breadcrumb`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/ai-phone-call-automation/lead-qualification#faqpage`,
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
        id="lead-qualification-schema"
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
              AI Phone Call Automation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Lead{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                Qualification Calls
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Every new lead called within minutes, asked your qualification
              questions, scored, and routed in your CRM with the transcript
              attached — 24/7, from $149/month.{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                View pricing
              </Link>
              , no setup fee.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#show-case"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
              >
                See It in Action
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
              What is AI lead qualification?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              AI lead qualification is the process of calling new leads
              automatically, asking your qualification questions in natural
              conversation — budget, timeline, fit, and decision-making
              authority — and scoring the answers. Qualified leads are booked
              or routed in your CRM with the transcript attached, so your team
              calls back warm, pre-screened prospects instead of cold lists.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              It exists because leads decay fast: the first business to reach a
              prospect usually wins the conversation. Curious how the calling
              itself works? Read{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                how AI phone call automation works
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="how-it-works" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              How AI qualification calls work
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

        <section id="qualifies-on" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
              What the AI qualifies on
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualifiesOn.map((q) => (
                <div
                  key={q.title}
                  className="rounded-xl border border-brand/20 bg-black/40 p-5"
                >
                  <h3 className="font-semibold text-brand-light mb-2">
                    {q.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI lead qualification pricing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Business plans start at $149/month with 500 included minutes and
              scale to $497/month for 2,100 minutes — no setup fee, no
              long-term contract. Inbound answering and outbound qualification
              share one plan and one bill. See the{" "}
              <Link href="/pricing" className="text-brand hover:underline">
                full plan breakdown
              </Link>{" "}
              or model the pipeline impact in the{" "}
              <Link href="/calculator" className="text-brand hover:underline">
                ROI calculator
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="industries" className="w-full bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries that win with speed-to-lead
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Wherever inquiry value is high and prospects compare options
              fast, minutes decide who gets the deal:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industryLinks.map((uc) => (
                <Link
                  key={uc.href}
                  href={uc.href}
                  className="group rounded-xl border border-brand/20 bg-black/40 p-5 hover:border-brand/40 transition-colors"
                >
                  <h3 className="font-semibold text-brand-light mb-2 group-hover:text-brand transition-colors">
                    {uc.label}
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
              Want qualification alongside inbound coverage? Learn{" "}
              <Link
                href="/ai-phone-call-automation"
                className="text-brand hover:underline"
              >
                how AI phone call automation works
              </Link>
              , meet the{" "}
              <Link href="/ai-receptionist" className="text-brand hover:underline">
                AI receptionist
              </Link>{" "}
              that answers every call, or{" "}
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
