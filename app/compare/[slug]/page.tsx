import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage from "@/components/compare/ComparisonPage";
import { comparisons, getComparison } from "@/lib/comparisons";
import { SITE_URL } from "@/lib/site-url";

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

  const url = `${SITE_URL}/compare/${comparison.slug}`;

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    keywords: comparison.keywords,
    alternates: {
      canonical: `/compare/${comparison.slug}`,
    },
    openGraph: {
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      url,
      siteName: "Fusion Calling",
      images: [
        {
          url: `/compare/${comparison.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${comparison.competitorName} vs Fusion Calling`,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: comparison.datePublished,
      modifiedTime: comparison.datePublished,
      authors: ["Fusion Calling"],
    },
  };
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
  return <ComparisonPage comparison={comparison} />;
}
