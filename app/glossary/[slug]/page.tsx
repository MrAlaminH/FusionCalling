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
  // Kept short on purpose: the template adds ~18px chars, and SEO crawls
  // flag titles over ~580px. "What Is X?" matches the query and stays under
  // the threshold even for long terms like "Automatic Speech Recognition".
  const title = `What Is ${term.term}?`;
  // Word-boundary-truncated so we never ship a meta description that ends
  // mid-word (e.g. "...real-time transcri").
  const description = truncateAtWord(
    `${truncateAtWord(term.definition, 115)} Here's why it matters for AI phone agents.`,
    160
  );

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
