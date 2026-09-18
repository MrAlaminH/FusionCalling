import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";
import { buildOpenGraph, GEO_SOURCES } from "@/lib/seo";
import {
  DIRECT_PLANS,
  WHOLESALE_PLANS,
  OFFER,
  LAUNCH,
  UPTIME_SLA,
  SATISFACTION,
  PROVIDERS,
} from "@/lib/product-facts";
import { whitelabelFaqs } from "@/lib/whitelabel-faqs";
import { blogFaqs } from "@/lib/blog-faqs";
import Footer from "@/components/Footer";

export const revalidate = 86400;

type Faq = { question: string; answer: string };

// Platform & pricing answers derive numbers from product-facts.ts so the FAQ
// can never drift from /pricing or the comparison surfaces.
const platformFaqs: Faq[] = [
  {
    question: "What is Fusion Calling?",
    answer:
      "Fusion Calling is a white-label AI voice automation platform. It deploys human-like AI phone agents that handle inbound and outbound calls 24/7 — answering customer questions, booking appointments, qualifying leads, taking voicemails, and covering receptionist duties — and lets agencies resell the entire platform under their own brand.",
  },
  {
    question: "Who is Fusion Calling for?",
    answer:
      "Two audiences: businesses that want AI agents answering and placing their calls (dental, real estate, insurance, home services, legal, automotive, and more), and agencies that white-label the platform, host it on their own domain, set their own pricing, and keep the margin between their client price and the wholesale rate.",
  },
  {
    question: "Which voice AI providers does Fusion Calling support?",
    answer: `Fusion Calling supports ${PROVIDERS.list} out of the box, so you can match each client to the best engine instead of being locked into one vendor. Existing agent configurations and API keys from these providers can be imported without a rebuild.`,
  },
  {
    question: "Does Fusion Calling integrate with my CRM and calendar?",
    answer:
      "Yes. Native integrations cover HubSpot and GoHighLevel, calendar booking (Google, Outlook, Cal.com), and 2,200+ additional apps via Zapier. Leads, call outcomes, and transcripts sync automatically after each call.",
  },
  {
    question: "How reliable is the platform?",
    answer: `Fusion Calling carries a ${UPTIME_SLA} uptime guarantee on every plan and holds a ${SATISFACTION} customer satisfaction rating, with feature updates shipping 8+ times per month.`,
  },
];

const pricingFaqs: Faq[] = [
  {
    question: "How much does Fusion Calling cost for businesses?",
    answer: `Direct plans are ${DIRECT_PLANS
      .map((p) => `${p.name} at $${p.price}/month with ${p.includedMinutes} included minutes`)
      .join(", ")}, billed month-to-month with a ${OFFER.guarantee} money-back guarantee. Overage beyond included minutes runs from ${
      DIRECT_PLANS[DIRECT_PLANS.length - 1].overageRate
    } to ${DIRECT_PLANS[0].overageRate} depending on tier.`,
  },
  {
    question: "Is there a setup fee or free trial?",
    answer: `The Starter plan has a $0 setup fee and every plan comes with a ${OFFER.trial} free trial plus the ${OFFER.guarantee} money-back guarantee. Higher tiers carry a one-time onboarding fee that covers custom voice training and white-label setup.`,
  },
  {
    question: "How much does the white-label partner program cost?",
    answer: `Wholesale partner tiers are ${WHOLESALE_PLANS
      .map((p) => `${p.name} at $${p.price}/month for ${p.subAccounts} sub-accounts`)
      .join(", ")}. Partners keep 100% of what they charge clients — you set your own retail pricing and bill through your own Stripe account.`,
  },
  {
    question: "How fast can I launch?",
    answer: `A guided white-label launch takes about ${LAUNCH.guided}: apply, add your logo and domain, import Vapi, Retell, or ElevenLabs agents, connect calendar and CRM, then bill clients yourself. Partner applications are reviewed within ${LAUNCH.approval}.`,
  },
];

// Curated from lib/whitelabel-faqs (single source shared with /whitelabel).
const whitelabelQuestionSlugs = [
  "What is a white-label partnership?",
  "Do I need technical expertise?",
  "What's the difference between partner tiers?",
  "Can I use my own domain?",
  "Which voice AI providers can I resell through Fusion Calling?",
  "White label AI voice agents vs building on Vapi or Retell directly?",
  "Will AI replace the receptionists our clients already have?",
];
const whitelabelCurated = whitelabelQuestionSlugs
  .map((q) => whitelabelFaqs.find((f) => f.question === q))
  .filter((f): f is Faq => Boolean(f));

// Curated from the security/compliance post FAQ (single source shared with
// /blog/voice-ai-security-compliance).
const complianceCurated: Faq[] = [
  blogFaqs["voice-ai-security-compliance"][0],
  blogFaqs["voice-ai-security-compliance"][2],
  blogFaqs["voice-ai-security-compliance"][4],
].filter(Boolean);

const allFaqs: Faq[] = [
  ...platformFaqs,
  ...pricingFaqs,
  ...whitelabelCurated,
  ...complianceCurated,
];

export const metadata: Metadata = {
  title: {
    absolute: "Fusion Calling FAQ — Pricing, White-Label & Providers",
  },
  description:
    "Direct answers about Fusion Calling: what it costs ($99–$497/month), how fast you can launch (24 hours), which voice AI providers are supported, and how compliance works.",
  ...buildOpenGraph({
    title: "Frequently Asked Questions — AI Voice Agents, Pricing & White-Label",
    description:
      "Direct answers about Fusion Calling pricing, white-label reselling, voice AI providers, and call compliance.",
    path: "/faq",
  }),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/faq#webpage`,
      url: `${SITE_URL}/faq`,
      name: "Fusion Calling FAQ",
      description:
        "Frequently asked questions about Fusion Calling's AI phone automation platform, pricing, white-label partner program, and compliance.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="py-10 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div
            key={f.question}
            className="rounded-2xl border border-brand/20 bg-black/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{f.question}</h3>
            <p className="text-gray-400 leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen w-full bg-black text-white">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-28 pb-6 md:pt-36 md:pb-8">
          <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              questions
            </span>
          </h1>
          {/* Answer-first summary: the direct answer before any navigation. */}
          <p className="text-lg text-gray-400 leading-relaxed">
            Fusion Calling is a white-label AI voice automation platform. Business
            plans cost $149–$497/month and partner plans start at $99/month; a
            guided launch takes about 24 hours; and the platform resells agents
            built on {PROVIDERS.list}. The direct answers to the questions AI
            assistants and buyers ask most are below.
          </p>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-8">
          <FaqSection title="Platform & product" faqs={platformFaqs} />
          <FaqSection title="Pricing & plans" faqs={pricingFaqs} />
          <FaqSection title="White-label partner program" faqs={whitelabelCurated} />
          <FaqSection
            title="Compliance & security"
            faqs={complianceCurated.map((f) =>
              f.question.startsWith("What rules apply to outbound dialing")
                ? {
                    ...f,
                    answer: `${f.answer} Authoritative reference: ${GEO_SOURCES.fccTcpa.label} (${GEO_SOURCES.fccTcpa.url}).`,
                  }
                : f
            )}
          />

          {/* Related pages — internal links for crawlers and AI assistants. */}
          <section className="py-10 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Where to next
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/pricing", label: "Pricing — every plan and rate on one page" },
                { href: "/whitelabel", label: "White-label partner program" },
                { href: "/calculator", label: "Revenue calculator for resellers" },
                { href: "/ai-receptionist", label: "AI receptionist product overview" },
                { href: "/glossary", label: "Voice AI glossary — 77 terms defined" },
                { href: "/contact", label: "Contact — talk to the team" },
              ].map((l) => (
                <li
                  key={l.href}
                  className="rounded-xl border border-brand/20 bg-black/40 p-4"
                >
                  <Link href={l.href} className="text-brand hover:underline text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
