import { Fragment } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage from "@/components/compare/ComparisonPage";
import { comparisons, getComparison } from "@/lib/comparisons";
import { glossaryTerms, slugifyTerm } from "@/lib/glossary";
import { buildOpenGraph } from "@/lib/seo";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const comparison = getComparison(params.slug);
  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    ...buildOpenGraph({
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      path: `/alternative/${comparison.slug}`,
      image: comparison.heroImage,
      imageWidth: 1376,
      imageHeight: 768,
      type: "article",
      publishedTime: comparison.datePublished,
      modifiedTime: comparison.datePublished,
      authors: ["Fusion Calling"],
    }),
  };
}

// Comparison slug -> glossary terms whose concepts come up naturally in that
// comparison's copy. Slugs are resolved via slugifyTerm at render time so a
// renamed term simply drops out instead of producing a dead link.
const COMPARISON_GLOSSARY_TERMS: Record<string, string[]> = {
  chatdash: ["White-Label", "GoHighLevel", "CRM Integration"],
  vapify: ["Vapi", "Bring Your Own Key", "White-Label"],
  voicerr: ["White-Label", "Reseller", "Recurring Revenue"],
  voiceaiwrapper: ["White-Label", "API", "Reseller"],
  synthflow: ["White-Label", "SaaS", "Text-to-Speech"],
  thinkrr: ["White-Label", "Reseller", "SaaS"],
  "bland-ai": ["API", "Latency", "Automatic Speech Recognition"],
  "air-ai": ["AI Voice Agent", "Latency", "White-Label"],
  vapi: ["Vapi", "Bring Your Own Key", "White-Label"],
};

function resolveGlossaryLinks(comparisonSlug: string) {
  const names = COMPARISON_GLOSSARY_TERMS[comparisonSlug] ?? [];
  return names
    .map((name) => {
      const term = glossaryTerms.find((t) => t.term === name);
      return term ? { label: term.term, href: `/glossary/${slugifyTerm(term.term)}` } : null;
    })
    .filter((l): l is { label: string; href: string } => l !== null);
}

export default function CompareSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const comparison = getComparison(params.slug);
  if (!comparison) {
    notFound();
  }
  const glossaryLinks = resolveGlossaryLinks(comparison.slug);
  return (
    <>
      <ComparisonPage comparison={comparison} />
      {glossaryLinks.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="glass-light rounded-2xl p-6 border border-brand/20">
            <h2 className="text-lg font-bold text-white mb-3">
              Key concepts in this comparison
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
              — the terms that matter when choosing a platform.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
