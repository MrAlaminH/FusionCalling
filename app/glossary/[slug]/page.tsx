import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "@/components/glossary/GlossaryTermPage";
import { glossaryTerms, getTermBySlug, slugifyTerm } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-url";

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: slugifyTerm(t.term) }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const term = getTermBySlug(params.slug);
  if (!term) {
    return { title: "Term Not Found" };
  }

  const slug = slugifyTerm(term.term);
  const url = `${SITE_URL}/glossary/${slug}`;
  const title = `${term.term} - Voice AI Glossary | Fusion Calling`;

  return {
    title,
    description: term.definition.slice(0, 155),
    alternates: {
      canonical: `/glossary/${slug}`,
    },
    openGraph: {
      title,
      description: term.definition.slice(0, 155),
      url,
      siteName: "Fusion Calling",
      type: "article",
    },
  };
}

export default function GlossarySlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const term = getTermBySlug(params.slug);
  if (!term) {
    notFound();
  }
  return <GlossaryTermPage term={term} />;
}
