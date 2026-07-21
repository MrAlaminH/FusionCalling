import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "@/components/glossary/GlossaryTermPage";
import { glossaryTerms, getTermBySlug, slugifyTerm } from "@/lib/glossary";
import { SITE_URL } from "@/lib/site-url";
import { truncateAtWord } from "@/lib/utils";

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
  const title = `${term.term} | AI Glossary | Fusion Calling`;
  // Word-boundary-truncated so we never ship a meta description that ends
  // mid-word (e.g. "...real-time transcri").
  const description = truncateAtWord(term.definition, 155);

  return {
    title,
    description,
    alternates: {
      canonical: `/glossary/${slug}`,
    },
    openGraph: {
      title,
      description,
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
