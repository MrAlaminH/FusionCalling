import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "@/components/glossary/GlossaryTermPage";

export const revalidate = 86400;
import { glossaryTerms, getTermBySlug, slugifyTerm } from "@/lib/glossary";
import { buildOpenGraph } from "@/lib/seo";
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
  // No hardcoded "| Fusion Calling" — the root layout title template appends it.
  const title = `${term.term} | AI Glossary`;
  // Word-boundary-truncated so we never ship a meta description that ends
  // mid-word (e.g. "...real-time transcri").
  const description = truncateAtWord(term.definition, 155);

  return {
    title,
    description,
    ...buildOpenGraph({
      title,
      description,
      path: `/glossary/${slug}`,
      type: "article",
    }),
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
