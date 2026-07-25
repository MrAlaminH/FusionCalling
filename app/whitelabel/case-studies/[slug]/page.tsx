import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/white-label/CTA";
import {
  whitelabelCaseStudies,
  type WhiteLabelCaseStudy,
} from "@/lib/whitelabel-case-studies";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";

export function generateStaticParams() {
  return whitelabelCaseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cs = whitelabelCaseStudies.find((c) => c.slug === params.slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    keywords: cs.keywords,
    alternates: {
      canonical: `/whitelabel/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      url: `${SITE_URL}/whitelabel/case-studies/${cs.slug}`,
      siteName: "Fusion Calling",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: `${cs.agencyName} - Fusion Calling Case Study`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = whitelabelCaseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  return (
    <>
      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(cs)) }}
      />
      <WhiteLabelNavbar />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Breadcrumb */}
        <nav className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/whitelabel" className="hover:text-brand-light transition-colors">
                  White-Label Program
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/whitelabel/case-studies" className="hover:text-brand-light transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>/</li>
              <li className="text-brand-light">{cs.agencyName}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Stats */}
        <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-flex items-center rounded-full glass-light px-3 py-1 text-xs font-medium text-brand-light border border-brand/20 mb-4">
              {cs.industry} &middot; {cs.location}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-8">
              {cs.agencyName}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {cs.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-light rounded-xl p-4 sm:p-5 text-center border border-brand/20"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-brand-light">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none">
              {cs.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="mt-10 glass-light rounded-2xl p-6 sm:p-8 border border-brand/20">
              <p className="text-lg sm:text-xl text-white leading-relaxed italic mb-4">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand-light font-bold text-sm">
                  {cs.testimonial.attribution.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {cs.testimonial.attribution}
                  </div>
                  <div className="text-xs text-gray-400">
                    {cs.testimonial.role}
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Results */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Key Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cs.results.map((r) => (
                <div
                  key={r.title}
                  className="glass-light rounded-2xl p-6 border border-brand/20 text-center"
                >
                  <div className="text-3xl mb-3">{r.emoji}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

function buildSchema(cs: WhiteLabelCaseStudy) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/whitelabel/case-studies/${cs.slug}#webpage`,
        url: `${SITE_URL}/whitelabel/case-studies/${cs.slug}`,
        name: cs.metaTitle,
        description: cs.metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        dateModified: CONTENT_LAST_UPDATED,
        breadcrumb: {
          "@id": `${SITE_URL}/whitelabel/case-studies/${cs.slug}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/whitelabel/case-studies/${cs.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
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
            name: "Case Studies",
            item: `${SITE_URL}/whitelabel/case-studies`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: cs.agencyName,
            item: `${SITE_URL}/whitelabel/case-studies/${cs.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/whitelabel/case-studies/${cs.slug}#article`,
        headline: cs.metaTitle,
        description: cs.metaDescription,
        author: {
          "@type": "Organization",
          name: cs.agencyName,
        },
        publisher: {
          "@type": "Organization",
          name: "Fusion Calling",
          url: SITE_URL,
        },
        datePublished: "2026-07-07",
        dateModified: CONTENT_LAST_UPDATED,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/whitelabel/case-studies/${cs.slug}`,
        },
      },
    ],
  };
}
