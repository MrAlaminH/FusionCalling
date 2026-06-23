import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { industries, getIndustry } from "@/lib/industries";
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

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      siteName: "Fusion Calling",
      images: [
        {
          url: `/industries/${industry.slug}.jpg`,
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

export default function IndustrySlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustry(params.slug);
  if (!industry) {
    notFound();
  }
  return <IndustryPage industry={industry} />;
}
