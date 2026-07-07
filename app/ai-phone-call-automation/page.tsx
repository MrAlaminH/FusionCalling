import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DefinitionBlock from "@/components/definition-block";
import Sources from "@/components/sources";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

const title = "What Is AI Phone Call Automation? | Fusion Calling";
const description =
  "A plain-English explainer on AI phone call automation: how AI voice agents place and answer calls, the technology behind them, real-world results, and the standards Fusion Calling follows.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "what is ai phone call automation",
    "ai phone call automation",
    "ai receptionist",
    "automated phone calls",
    "ai voice agent",
    "how ai calling works",
    "voice ai explained",
  ],
  ...buildOpenGraph({ title, description, path: "/ai-phone-call-automation" }),
};

export default function AiPhoneCallAutomationPage() {
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
            name: "What Is AI Phone Call Automation?",
            item: `${SITE_URL}/ai-phone-call-automation`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/ai-phone-call-automation#article`,
        headline: "AI Phone Call Automation, Explained",
        description,
        inLanguage: "en-US",
        datePublished: "2026-01-15",
        dateModified: CONTENT_LAST_UPDATED,
        author: { "@type": "Organization", name: "Fusion Calling" },
        publisher: {
          "@type": "Organization",
          name: "Fusion Calling",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/ai-phone-call-automation`,
        },
        about: {
          "@type": "DefinedTerm",
          name: "AI phone call automation",
          description:
            "The use of AI voice agents to automatically place and answer business phone calls without a human on the line.",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/ai-phone-call-automation#webpage`,
        url: `${SITE_URL}/ai-phone-call-automation`,
        name: title,
        description,
        inLanguage: "en-US",
        dateModified: CONTENT_LAST_UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: {
          "@id": `${SITE_URL}/ai-phone-call-automation#breadcrumb`,
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="ai-phone-call-automation-schema"
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
              Voice AI 101
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              What Is{" "}
              <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                AI Phone Call Automation
              </span>
              ?
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A complete, plain-English guide to how AI voice agents place and
              answer calls, the technology that powers them, and the results
              businesses see — plus the standards Fusion Calling follows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#show-case"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
              >
                See It in Action
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/5"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Relocated explainer + stats */}
        <DefinitionBlock />

        {/* Relocated authoritative sources & references */}
        <Sources />

        <Footer />
      </main>
    </>
  );
}
