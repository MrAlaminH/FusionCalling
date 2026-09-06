import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/white-label/Pricing";
import CTA from "@/components/white-label/CTA";
import ProviderCrossLinks from "@/components/white-label/ProviderCrossLinks";
import { whitelabelCaseStudies } from "@/lib/whitelabel-case-studies";
import { CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";

const title = "White-Label AI Voice for GoHighLevel";
const description =
  "Deploy white-label AI voice agents in GoHighLevel client sub-accounts. Import Vapi, Retell & ElevenLabs agents, deliver 24/7 calls, keep 100% of revenue.";

const ghlCaseStudies = ["voicewave-marketing", "callflow-solutions"]
  .map((slug) => whitelabelCaseStudies.find((cs) => cs.slug === slug))
  .filter((cs): cs is (typeof whitelabelCaseStudies)[number] => Boolean(cs));

const ghlfaqs = [
  {
    question:
      "Can I deploy Fusion Calling's AI voice agents inside GoHighLevel client sub-accounts?",
    answer:
      "Yes. Fusion Calling is built to drop into your GoHighLevel stack so you can launch AI voice agents for each client sub-account under your own brand. Your clients interact only with your logo, domain, and pricing — Fusion Calling stays invisible.",
  },
  {
    question: "Do I need a separate login for every client?",
    answer:
      "No. The white-label partner dashboard gives you centralized, multi-tenant control. Onboard new GoHighLevel clients in minutes, manage their agents, minutes, and billing from one place, and scale to unlimited sub-accounts on the Scale plan.",
  },
  {
    question: "Can I import my existing Vapi, Retell, or ElevenLabs agents?",
    answer:
      "Yes. Fusion Calling is multi-provider: bring your existing Vapi, Retell AI, and ElevenLabs agent configurations and API keys, and we layer white-label branding, client portals, lead management, and rebilling on top — so you resell them under one branded dashboard.",
  },
  {
    question: "How does billing work for my GoHighLevel clients?",
    answer:
      "You set your own client pricing and keep 100% of what you charge. Plans start at $99/month for 6 sub-accounts, $299 for 20, and $499 for unlimited, with minute rebilling so you control your margin on every client.",
  },
  {
    question: "Will my clients see Fusion Calling branding?",
    answer:
      "No. The platform is 100% white-labeled — your logo, colors, domain, and email. Your GoHighLevel clients experience a fully branded AI voice product and never see Fusion Calling unless you tell them.",
  },
  {
    question: "How does the GoHighLevel voice AI integration work?",
    answer:
      "Fusion Calling links to each client sub-account via API and webhooks. Calls push contacts, notes, and outcomes back into the right GHL workspace. You can run Vapi, Retell, or ElevenLabs agents per client, all under your own brand.",
  },
  {
    question: "How much does it cost to resell voice AI to GHL sub-accounts?",
    answer:
      "Plans start at $99/month for 6 sub-accounts. You set your own client pricing and keep 100% of what you charge. Minute rebilling lets you control your margin on every client.",
  },
  {
    question: "Does this replace GoHighLevel's Missed Call Text Back?",
    answer:
      "No — it makes it rarely needed. The white-label AI voice agent answers calls in two rings, 24/7, so there is far less to text back about. When a call is genuinely missed, GoHighLevel's native Missed Call Text Back still fires in your client's brand, and the AI agent can also place a call-back that qualifies and books the lead. You can resell the whole flow inside each client sub-account.",
  },
];

const ghlschema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/whitelabel/gohighlevel#webpage`,
      url: `${SITE_URL}/whitelabel/gohighlevel`,
      name: title,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      dateModified: CONTENT_LAST_UPDATED,
      breadcrumb: {
        "@id": `${SITE_URL}/whitelabel/gohighlevel#breadcrumb`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "p"],
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/whitelabel/gohighlevel#service`,
      name: "White-label AI Voice Agents for GoHighLevel",
      description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: {
        "@type": "Audience",
        audienceType:
          "GoHighLevel agencies, marketing agencies, SaaS resellers",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/whitelabel/gohighlevel#breadcrumb`,
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
          name: "White-label Partner Program",
          item: `${SITE_URL}/whitelabel`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GoHighLevel",
          item: `${SITE_URL}/whitelabel/gohighlevel`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/whitelabel/gohighlevel#faqpage`,
      mainEntity: ghlfaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({
    title: `${title} | Fusion Calling`,
    description,
    path: "/whitelabel/gohighlevel",
  }),
};

export default function GHLWhiteLabelPage() {
  return (
    <>
      <script
        id="gohighlevel-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ghlschema) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-brand-light transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/whitelabel" className="hover:text-brand-light transition-colors">
                  White-label Partner Program
                </Link>
              </li>
              <li>/</li>
              <li className="text-brand-light">GoHighLevel</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="ghl-hero"
          className="relative pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              Built for GoHighLevel Agencies
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              White-Label AI Voice Agents for{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                GoHighLevel
              </span>{" "}
              Agencies
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Deploy AI voice agents directly inside your GoHighLevel client
              sub-accounts. Import your Vapi, Retell &amp; ElevenLabs agents,
              deliver 24/7 call handling and booking, and resell everything under
              your own brand.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
              New to reselling voice? Read our{" "}
              <Link
                href="/blog/gohighlevel-white-label-voice"
                className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                GoHighLevel white-label voice guide
              </Link>{" "}
              or{" "}
              <Link
                href="/whitelabel/compare"
                className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                compare white-label providers
              </Link>{" "}
              before you pick a plan.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-strong px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-all shadow-premium hover:shadow-premium-lg hover:from-brand-strong hover:to-orange-700 hover:scale-105"
              >
                Book a Demo
              </a>
              <a
                href="#ghl-pricing"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-brand px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-brand/20"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="ghl-features"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why GoHighLevel agencies choose{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  Fusion Calling
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Everything you need to launch and resell AI voice under your own
                brand — without building the technology.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  t: "Drop into client sub-accounts",
                  d: "Launch AI voice agents for each GoHighLevel client under your own logo, domain, and pricing.",
                },
                {
                  t: "Import Vapi, Retell & ElevenLabs",
                  d: "Bring your existing agent configurations and API keys — we layer white-label branding on top.",
                },
                {
                  t: "100% white-label",
                  d: "Your clients see only your brand. Fusion Calling stays completely invisible.",
                },
                {
                  t: "Rebilling & margin control",
                  d: "Set your own client pricing and keep 100% of what you charge, with minute rebilling.",
                },
                {
                  t: "24/7 call handling",
                  d: "Answer, qualify, and book across every client — no missed calls, no hires.",
                },
                {
                  t: "Centralized multi-tenant dashboard",
                  d: "Manage every client's agents, minutes, and billing from one partner dashboard.",
                },
              ].map((f) => (
                <div
                  key={f.t}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {f.t}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ghl-missed-call-text-back"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Missed-Call Text Back,{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  White-Labeled
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                GoHighLevel&apos;s native Missed Call Text Back sends an
                automatic SMS when a call goes unanswered. Pair it with Fusion
                Calling&apos;s white-label AI voice agent and the missed call
                mostly disappears: the AI answers in two rings, 24/7, takes the
                message or books the appointment, and the text-back flow remains
                as the safety net — all under your agency&apos;s brand inside
                client sub-accounts.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  t: "AI answers before it becomes missed",
                  d: "The white-label voice agent picks up in two rings around the clock, so most callers never reach voicemail — and never need the text-back in the first place.",
                },
                {
                  t: "Text back as the safety net",
                  d: "Keep GoHighLevel's Missed Call Text Back running for the edge cases. Your client's caller gets the SMS in your client's brand, with the conversation logged to the sub-account.",
                },
                {
                  t: "Call-backs that book, not just notify",
                  d: "The AI agent can call missed callers back, qualify them, and book straight into the calendar — turning a dead lead into a booked appointment.",
                },
              ].map((f) => (
                <div
                  key={f.t}
                  className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {f.t}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <div id="ghl-pricing">
          <Pricing />
        </div>

        {/* Compare providers — keep comparison intent on-site */}
        <nav
          aria-label="Compare white-label providers"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              Compare white-label providers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/whitelabel/vapi"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  GoHighLevel + Vapi
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Resell Vapi agents inside GHL sub-accounts.
                </span>
              </Link>
              <Link
                href="/whitelabel/retell"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  GoHighLevel + Retell
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Resell Retell agents inside GHL sub-accounts.
                </span>
              </Link>
              <Link
                href="/whitelabel/elevenlabs"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  GoHighLevel + ElevenLabs
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Resell ElevenLabs voices inside GHL sub-accounts.
                </span>
              </Link>
              <Link
                href="/whitelabel/compare"
                className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <span className="text-base font-bold text-brand-light">
                  Compare all providers
                </span>
                <span className="block text-sm text-gray-400 mt-1">
                  Pricing and features side by side.
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* FAQ */}
        <section id="ghl-faq" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Everything GoHighLevel agencies ask before they resell AI voice.
              </p>
            </div>
            <div className="space-y-4">
              {ghlfaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="glass-light rounded-xl p-6 border border-brand/20"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources & cross-links */}
        <section id="ghl-resources" className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Learn more about AI voice in{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  GoHighLevel
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                Guides and real partner results for GHL agencies.
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/blog/gohighlevel-white-label-voice"
                className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
              >
                <h3 className="text-lg font-bold text-brand-light mb-1">
                  Guide: White-Label AI Voice for GoHighLevel Agencies
                </h3>
                <p className="text-sm text-gray-400">
                  How to deploy branded AI voice agents across your GHL client
                  sub-accounts, step by step.
                </p>
              </Link>
              {ghlCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/whitelabel/case-studies/${cs.slug}`}
                  className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="text-lg font-bold text-brand-light mb-1">
                    Case study: How {cs.agencyName} built a white-label AI voice
                    practice ({cs.heroStats[0]?.value}/month)
                  </h3>
                  <p className="text-sm text-gray-400">{cs.metaDescription}</p>
                </Link>
              ))}
              <p className="text-center pt-4">
                <Link
                  href="/whitelabel/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light underline-offset-4 hover:underline transition-colors"
                >
                  Browse all partner case studies &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        <ProviderCrossLinks currentSlug="gohighlevel" />

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
