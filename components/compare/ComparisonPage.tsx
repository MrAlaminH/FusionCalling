import Link from "next/link";
import Script from "next/script";
import type { Comparison } from "@/lib/comparisons";
import { getRelatedComparisons } from "@/lib/comparisons";
import { SITE_URL } from "@/lib/site-url";
import { BenchmarkTable } from "@/components/compare/BenchmarkTable";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ComparisonPage({ comparison }: { comparison: Comparison }) {
  const {
    slug,
    competitorName,
    category,
    readTime,
    datePublished,
    heroEmoji,
    h1,
    h1Highlight,
    subtitle,
    intro,
    competitorBestFor,
    competitorStrengths,
    tableTitle,
    comparisonRows,
    advantagesTitle,
    intro2,
    advantages,
    differentiatorHeadline,
    differentiatorBody,
    economics,
    highlight,
    faqs,
    metaTitle,
    metaDescription,
  } = comparison;

  const related = getRelatedComparisons(slug, 3);
  const articleUrl = `${SITE_URL}/compare/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare` },
          {
            "@type": "ListItem",
            position: 3,
            name: `${competitorName} Alternative`,
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        url: articleUrl,
        name: metaTitle,
        headline: `${h1} ${h1Highlight}`,
        description: metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        datePublished,
        dateModified: datePublished,
        author: { "@type": "Organization", name: "Fusion Calling", url: `${SITE_URL}/` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id={`${slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <div className="mb-12">
          <Link
            href="/compare"
            className="inline-flex items-center text-brand-light hover:text-brand-light mb-8 transition-colors"
          >
            ← Back to Compare
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-brand to-brand-strong rounded-full text-sm font-semibold text-white">
              {category}
            </span>
            <span className="text-gray-500 text-sm">{readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {h1}
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              {h1Highlight}
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">{subtitle}</p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>{formatDate(datePublished)}</span>
            <span>•</span>
            <span>By Fusion Calling Team</span>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-brand/20">
          <div className="aspect-video bg-gradient-to-br from-brand/10 to-brand-strong/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">{heroEmoji}</div>
              <div className="text-lg text-gray-500">
                {competitorName} vs Fusion Calling
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                A Quick Overview of {competitorName}
              </h2>
              {intro.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>

            {/* What the competitor does well (neutral / soft tone) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What {competitorName} Does Well
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 italic">
                Best for: {competitorBestFor}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {competitorStrengths.map((s) => (
                  <div
                    key={s.title}
                    className="glass-light rounded-xl p-6 border border-brand/20"
                  >
                    <div className="text-3xl mb-3">{s.emoji}</div>
                    <h3 className="text-lg font-bold text-brand-light mb-3">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{tableTitle}</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-4 px-4 text-white font-bold">
                        Feature
                      </th>
                      <th className="text-center py-4 px-4 text-gray-300 font-bold">
                        {competitorName}
                      </th>
                      <th className="text-center py-4 px-4 text-green-400 font-bold">
                        Fusion Calling
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="border-b border-gray-800">
                        <td className="py-4 px-4">{row.label}</td>
                        <td className="text-center py-4 px-4 text-gray-400">
                          {row.competitor}
                        </td>
                        <td className="text-center py-4 px-4 text-green-400 font-medium">
                          {row.fusion}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Performance Benchmarks */}
            <BenchmarkTable 
              competitorName={competitorName}
              fusionMetrics={{
                setupTime: "7 days (guided)",
                clientSatisfaction: "4.8/5",
                featureUpdates: "8+/month",
                uptimeSLA: "99.9%"
              }}
            />

            {/* Where Fusion Calling goes further */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {advantagesTitle}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{intro2}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((a) => (
                  <div key={a.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{a.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{a.title}</h3>
                      <p className="text-gray-400 text-sm">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiator Callout */}
            <div className="glass rounded-2xl p-8 border border-brand/30">
              <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <h3 className="text-2xl font-bold text-brand-light mb-4">
                  {differentiatorHeadline}
                </h3>
                <p className="text-gray-300 leading-relaxed">{differentiatorBody}</p>
              </div>
            </div>

            {/* Economics */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                How the Economics Compare
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-300 mb-4">
                    {economics.competitorTitle}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {economics.competitorPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-gray-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-green-400 mb-4">
                    {economics.fusionTitle}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {economics.fusionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-500/10 to-green-600/5 rounded-xl p-6 border border-green-500/20">
                <p className="text-center text-green-300 font-semibold text-lg">
                  {highlight}
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="glass-light rounded-xl p-6 border border-brand/20"
                  >
                    <h3 className="text-lg font-bold text-brand-light mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion / CTA */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Build Your Voice AI Agency With Fusion Calling
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Whether you choose {competitorName} or Fusion Calling, the most
                important step is to start. If you want a guided launch, a live demo
                your prospects can try, multi-provider flexibility, and full brand
                ownership, we&apos;d love to help you build.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Launch your branded agency in as little as 7 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Keep 100% of the revenue you charge clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>White-label everything under your own brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Get done-with-you onboarding and support</span>
                </li>
              </ul>

              <Link
                href="/whitelabel"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand to-brand-strong text-white font-semibold rounded-xl hover:from-brand-strong hover:to-brand-strong transition-all shadow-premium hover:shadow-premium-lg hover:scale-105"
              >
                Explore the Partner Program
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Related Comparisons */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                More Comparisons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/compare/${r.slug}`}
                    className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                  >
                    <div className="text-2xl mb-3">{r.heroEmoji}</div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                      {r.competitorName} vs Fusion Calling
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {r.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-brand/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-strong flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">FC</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">About the Author</h3>
              <p className="text-gray-400 text-sm mb-3">
                <strong className="text-brand-strong">Fusion Calling Team</strong>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We&apos;re the team behind Fusion Calling&apos;s white-label AI voice
                platform. Having helped 50+ agencies launch profitable voice AI
                practices since 2022, we specialize in helping businesses scale their
                phone operations with cutting-edge automation technology.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="https://www.fusioncalling.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-strong hover:text-brand transition-colors"
                >
                  Website →
                </a>
                <a
                  href="/whitelabel"
                  className="text-brand-strong hover:text-brand transition-colors"
                >
                  Partner Program →
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
