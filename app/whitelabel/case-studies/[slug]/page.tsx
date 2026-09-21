import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import WhiteLabelNavbar from "@/components/white-label-navbar";
import CTA from "@/components/white-label/CTA";
import {
  whitelabelCaseStudies,
  type WhiteLabelCaseStudy,
} from "@/lib/whitelabel-case-studies";
import { whitelabelProviders } from "@/lib/whitelabel-providers";
import { whitelabelLocations } from "@/lib/whitelabel-locations";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";


export function generateStaticParams() {
  return whitelabelCaseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cs = whitelabelCaseStudies.find((c) => c.slug === params.slug);
  if (!cs)
    return { title: "Case Study Not Found", robots: { index: false } };

  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    ...buildOpenGraph({
      title: cs.metaTitle,
      description: cs.metaDescription,
      path: `/whitelabel/case-studies/${cs.slug}`,
      type: "article",
    }),
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = whitelabelCaseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const otherCaseStudies = whitelabelCaseStudies.filter(
    (c) => c.slug !== cs.slug
  );
  // Providers this story ran on (reverse of relatedCaseStudySlugs) and the
  // same-state location page, so no case study is a dead-end.
  const relatedProviders = whitelabelProviders.filter((p) =>
    p.relatedCaseStudySlugs?.includes(cs.slug)
  );
  const relatedLocation = whitelabelLocations.find(
    (l) =>
      cs.location.endsWith(`, ${l.abbreviation}`) ||
      cs.location.includes(l.stateName)
  );

  return (
    <>
      <script
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
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-4">
              {cs.metaTitle}
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Client story: {cs.agencyName}
            </p>

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

        {/* More case studies + related engines/locations */}
        <section className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
              More client stories
            </h2>
            <p className="text-gray-400 text-base sm:text-lg text-center mb-12">
              {relatedProviders.length > 0 ? (
                <>
                  {cs.agencyName} runs on{" "}
                  {relatedProviders.map((p, i) => (
                    <span key={p.slug}>
                      {i > 0 ? " + " : null}
                      <Link
                        href={`/whitelabel/${p.slug}`}
                        className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
                      >
                        {p.crossLinkTitle ?? `White-Label ${p.name}`}
                      </Link>
                    </span>
                  ))}
                  {relatedLocation ? (
                    <>
                      {" "}
                      — agencies in {relatedLocation.stateName} can start from
                      the{" "}
                      <Link
                        href={`/whitelabel/locations/${relatedLocation.slug}`}
                        className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
                      >
                        white-label AI voice in {relatedLocation.stateName}{" "}
                        page
                      </Link>
                    </>
                  ) : (
                    <>
                      {" "}
                      — or{" "}
                      <Link
                        href="/whitelabel/locations"
                        className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
                      >
                        browse white-label AI voice by state
                      </Link>
                    </>
                  )}
                  .
                </>
              ) : (
                <>
                  Keep exploring{" "}
                  <Link
                    href="/whitelabel/case-studies"
                    className="text-brand-light hover:text-brand underline underline-offset-4 transition-colors"
                  >
                    all partner case studies
                  </Link>
                  .
                </>
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherCaseStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/whitelabel/case-studies/${other.slug}`}
                  className="group glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <p className="text-xs font-medium text-brand-light mb-2">
                    {other.industry} &middot; {other.location}
                  </p>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-light transition-colors mb-2">
                    {other.metaTitle}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {other.metaDescription}
                  </p>
                  <span className="text-xs font-semibold text-brand-light">
                    Read the {other.agencyName} story &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
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
            item: `${SITE_URL}/`,
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
          "@id": `${SITE_URL}/#organization`,
          name: "Fusion Calling",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: cs.datePublished,
        dateModified: CONTENT_LAST_UPDATED,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/whitelabel/case-studies/${cs.slug}`,
        },
      },
    ],
  };
}
