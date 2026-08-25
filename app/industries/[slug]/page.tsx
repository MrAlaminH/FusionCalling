import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";

export const revalidate = 86400;
import { industries, getIndustry } from "@/lib/industries";
import { glossaryTerms, slugifyTerm } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-url";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) {
    return { title: "Industry Not Found" };
  }

  const url = `${SITE_URL}/industries/${industry.slug}`;

  const agencyDescription = `White-label AI voice agents for ${industry.name}: 24/7 calls, booking, lead qualification you resell with Fusion Calling.`;

  return {
    title: industry.metaTitle,
    description: agencyDescription,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: agencyDescription,
      url,
      siteName: "Fusion Calling",
      images: [
        {
          url: `/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `AI Voice for ${industry.name}`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: industry.datePublished,
      modifiedTime: industry.datePublished,
      authors: ["Fusion Calling"],
    },
  };
}

// Industry slug -> glossary terms whose concepts come up naturally in that
// vertical's page copy. Slugs are resolved via slugifyTerm at render time so a
// renamed term simply drops out instead of producing a dead link.
const INDUSTRY_GLOSSARY_TERMS: Record<string, string[]> = {
  "ai-voice-for-real-estate": ["AI Receptionist", "Inbound Calls", "Intent Recognition"],
  "ai-voice-for-dental": ["AI Receptionist", "HIPAA", "Human Handoff"],
  "ai-voice-for-insurance": ["TCPA", "Outbound Calls", "Connect Rate"],
  "ai-voice-for-home-services": ["Inbound Calls", "Call Routing", "Latency"],
  "ai-voice-for-law-firms": ["Human Handoff", "Transcription", "AI Receptionist"],
  "ai-voice-for-automotive": ["Barge-In", "Call Routing", "CRM Integration"],
  "ai-voice-for-call-centers": ["Latency", "Automatic Speech Recognition", "SIP"],
  "ai-voice-for-financial-services": ["Guardrails", "SOC 2", "Human Handoff"],
  "ai-voice-for-ecommerce-retail": ["Interactive Voice Response", "Intent Recognition", "CRM Integration"],
  "ai-voice-for-education-tutoring": ["AI Receptionist", "Multi-Turn Conversation", "Barge-In"],
  "ai-voice-for-restaurants-hospitality": ["AI Receptionist", "Interactive Voice Response", "Inbound Calls"],
};

function resolveGlossaryLinks(industrySlug: string) {
  const names = INDUSTRY_GLOSSARY_TERMS[industrySlug] ?? [];
  return names
    .map((name) => {
      const term = glossaryTerms.find((t) => t.term === name);
      return term ? { label: term.term, href: `/glossary/${slugifyTerm(term.term)}` } : null;
    })
    .filter((l): l is { label: string; href: string } => l !== null);
}

export default function IndustrySlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustry(params.slug);
  if (!industry) {
    notFound();
  }
  const glossaryLinks = resolveGlossaryLinks(industry.slug);
  return (
    <>
      <IndustryPage industry={industry} />
      {glossaryLinks.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="glass-light rounded-2xl p-6 border border-brand/20">
            <h2 className="text-lg font-bold text-white mb-3">
              Key concepts on this page
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              New to the vocabulary? Get up to speed with our plain-English
              definitions of{" "}
              {glossaryLinks.map((link, i) => (
                <Fragment key={link.href}>
                  {i === glossaryLinks.length - 1 && glossaryLinks.length > 1
                    ? "and "
                    : null}
                  <Link
                    href={link.href}
                    className="text-brand-light hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < glossaryLinks.length - 1 ? ", " : ""}
                </Fragment>
              ))}{" "}
              — the core ideas behind every deployment in this vertical.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
