import Link from "next/link";
import Image from "next/image";
import type { Comparison } from "@/lib/comparisons";
import { getRelatedComparisons } from "@/lib/comparisons";
import { CONTENT_LAST_UPDATED } from "@/lib/site-url";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { LAUNCH, WHOLESALE_STARTER } from "@/lib/product-facts";
import { BenchmarkTable } from "@/components/compare/BenchmarkTable";
import { primaryButton } from "@/components/ui/button-styles";
import PostFaq from "@/components/blog/PostFaq";
import { formatDate } from "@/lib/utils";

/** "24 hours vs 4-6 weeks" → value "24", label "hours vs 4-6 weeks" (no duplication). */
function splitStat(value: string): { value: string; label: string } {
  const [first, ...rest] = value.split(" ");
  return { value: first, label: rest.join(" ") || value };
}

const statTile =
  "rounded-xl border border-brand/20 bg-brand/10 p-4 text-center";

export default function ComparisonPage({ comparison }: { comparison: Comparison }) {
  const {
    slug,
    competitorName,
    category,
    readTime,
    datePublished,
    heroImage,
    h1,
    h1Highlight,
    subtitle,
    quickAnswer,
    topAlternatives,
    keyStatistics,
    intro,
    competitorBestFor,
    competitorStrengths,
    fusionCallingOverview,
    tableTitle,
    comparisonRows,
    advantagesTitle,
    intro2,
    advantages,
    whyChooseFusionCalling,
    expertQuote,
    differentiatorHeadline,
    differentiatorBody,
    economics,
    highlight,
    faqs,
    metaTitle,
    metaDescription,
  } = comparison;

  const related = getRelatedComparisons(slug, 3);
  const launch = splitStat(keyStatistics.timeToLaunch);
  const clients = splitStat(keyStatistics.clientsIncluded);

  const sectionHeading =
    "font-display text-2xl md:text-3xl font-bold tracking-tight text-white";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema(
        [
          { name: "Home", path: "/" },
          { name: "Alternative", path: "/alternative" },
          { name: competitorName, path: `/alternative/${slug}` },
        ]
      ),
      articleSchema({
        path: `/alternative/${slug}`,
        name: metaTitle,
        headline: `${h1} ${h1Highlight}`,
        description: metaDescription,
        image: heroImage || "/cardImage.jpg",
        datePublished,
      }),
      faqSchema(faqs),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <div className="mb-12">
          <Link
            href="/alternative"
            className="inline-flex items-center text-brand-light hover:text-brand mb-8 transition-colors"
          >
            ← Back to Compare
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
              {category}
            </span>
            <span className="text-gray-400 text-sm">{readTime}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
            {h1}{" "}
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
              {h1Highlight}
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/10 pb-8 text-sm text-gray-400">
            <span>{formatDate(datePublished)}</span>
            <span aria-hidden="true">•</span>
            <span>By Fusion Calling Team</span>
            <span aria-hidden="true">•</span>
            <span>Updated {formatDate(CONTENT_LAST_UPDATED)}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-brand/20 relative shadow-premium">
          <div className="aspect-video relative">
            <Image
              src={heroImage}
              alt={`${competitorName} vs Fusion Calling - Best ${competitorName} Alternative for AI Phone Call Agents`}
              title={metaTitle}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Quick Answer - GEO Optimized */}
        <div className="glass-light rounded-2xl p-8 border border-brand/30 mb-8">
          <h2 className={`${sectionHeading} mb-4`}>
            ⚡ Quick Answer: Why Choose Fusion Calling Over {competitorName}?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {quickAnswer}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={statTile}>
              <div className="font-display text-2xl font-bold text-brand-light mb-1">{keyStatistics.retentionRate}</div>
              <div className="text-xs text-gray-400">Higher agency retention</div>
            </div>
            <div className={statTile}>
              <div className="font-display text-2xl font-bold text-brand-light mb-1">{launch.value}</div>
              <div className="text-xs text-gray-400">{launch.label}</div>
            </div>
            <div className={statTile}>
              <div className="font-display text-2xl font-bold text-brand-light mb-1">{clients.value}</div>
              <div className="text-xs text-gray-400">{clients.label}</div>
            </div>
            <div className={statTile}>
              <div className="font-display text-2xl font-bold text-brand-light mb-1">{keyStatistics.featureUpdates}</div>
              <div className="text-xs text-gray-400">Feature updates/month</div>
            </div>
          </div>
        </div>

        {topAlternatives && (
          <section className="glass-light rounded-2xl p-8 border border-brand/30 mb-8">
            <h2 className={`${sectionHeading} mb-4`}>
              {topAlternatives.heading}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {topAlternatives.intro}
            </p>
            <ol className="space-y-3">
              {topAlternatives.items.map((item, i) => (
                <li key={item.name} className="rounded-xl border border-brand/20 bg-black/40 p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-bold text-brand-light">{i + 1}.</span>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-brand-light hover:text-brand transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-semibold text-white">{item.name}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{item.bestFor}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.note}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className={`${sectionHeading} mb-4`}>
                A Quick Overview of {competitorName}
              </h2>
              {intro.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>

            {/* Fusion Calling Overview */}
            <div>
              <h2 className={`${sectionHeading} mb-4`}>
                A Quick Overview of Fusion Calling
              </h2>
              <div className="glass-light rounded-2xl p-8 border border-brand/20">
                {fusionCallingOverview.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* What the competitor does well (neutral / soft tone) */}
            <div>
              <h2 className={`${sectionHeading} mb-4`}>
                What {competitorName} Does Well
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 italic">
                Best for: {competitorBestFor}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {competitorStrengths.map((s) => (
                  <div
                    key={s.title}
                    className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                  >
                    <h3 className="font-display text-lg font-bold text-brand-light mb-3">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div>
              <h2 className={`${sectionHeading} mb-6`}>{tableTitle}</h2>

              <div className="glass rounded-2xl p-4 md:p-6 border border-brand/20">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="py-3.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-l-lg">
                          Feature
                        </th>
                        <th className="py-3.5 px-4 text-center text-sm font-semibold text-gray-300 bg-gradient-to-r from-brand/10 to-brand-strong/5">
                          {competitorName}
                        </th>
                        <th className="py-3.5 px-4 text-center text-sm font-semibold text-brand-light bg-brand/10 rounded-r-lg">
                          Fusion Calling
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.label} className="border-t border-white/10 hover:bg-brand/5 transition-colors">
                          <td className="py-3.5 px-4 text-sm font-medium text-white">
                            {row.label}
                          </td>
                          <td className="text-center py-3.5 px-4 text-sm text-gray-400">
                            {row.competitor}
                          </td>
                          <td className="text-center py-3.5 px-4 text-sm font-medium text-brand-light bg-brand/10">
                            {row.fusion}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Performance Benchmarks — only where we have comparable data */}
            <BenchmarkTable competitorName={competitorName} />

            {/* Where Fusion Calling goes further */}
            <div>
              <h2 className={`${sectionHeading} mb-4`}>
                {advantagesTitle}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">{intro2}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((a) => (
                  <div
                    key={a.title}
                    className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                  >
                    <h3 className="font-display text-base font-bold text-white mb-2">
                      {a.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Fusion Calling */}
            <div className="glass rounded-2xl p-8 border border-brand/30">
              <h2 className={`${sectionHeading} mb-6`}>
                {whyChooseFusionCalling.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseFusionCalling.points.map((point) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-base font-bold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Quote - GEO Optimized */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className={`${sectionHeading} mb-4`}>
                Expert Analysis
              </h2>
              <blockquote className="border-l-4 border-brand pl-4 py-2">
                <p className="text-gray-300 italic leading-relaxed">
                  &ldquo;{expertQuote.text}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-gray-400">
                  — {expertQuote.attribution}, {expertQuote.source}
                </footer>
              </blockquote>
            </div>

            {/* Differentiator Callout */}
            <div className="glass rounded-2xl p-8 border border-brand/30">
              <h3 className="font-display text-2xl font-bold text-brand-light mb-4">
                {differentiatorHeadline}
              </h3>
              <p className="text-gray-300 leading-relaxed">{differentiatorBody}</p>
            </div>

            {/* Economics */}
            <div className="glass rounded-2xl p-8 border border-brand/20">
              <h2 className={`${sectionHeading} mb-6`}>
                How the Economics Compare
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-gray-300 mb-4">
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
                  <h3 className="font-display text-xl font-bold text-brand-light mb-4">
                    {economics.fusionTitle}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {economics.fusionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <p className="text-center text-brand-light font-semibold text-lg">
                  {highlight}
                </p>
              </div>
            </div>

            {/* FAQ */}
            <PostFaq faqs={faqs} title="Frequently Asked Questions" />

            {/* Conclusion / CTA */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className={`${sectionHeading} mb-6`}>
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
                  <span>Launch your branded agency in {LAUNCH.guided}</span>
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
                className={primaryButton}
              >
                Explore the Partner Program
                <span className="ml-2">→</span>
              </Link>
            </div>

            <p className="text-center text-sm text-gray-400">
              Switching from {competitorName}? See the{" "}
              <Link
                href="/whitelabel/reseller-program"
                className="text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                AI voice agent reseller program
              </Link>{" "}
              — wholesale from ${WHOLESALE_STARTER.price}/mo, your brand, your pricing.
            </p>

            {/* Related Comparisons */}
            <div>
              <h2 className={`${sectionHeading} mb-6`}>
                More Comparisons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/alternative/${r.slug}`}
                    className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition group"
                  >
                    <div className="aspect-video rounded-lg mb-3 overflow-hidden relative">
                      <Image
                        src={r.heroImage}
                        alt={`${r.competitorName} vs Fusion Calling - Best ${r.competitorName} Alternative`}
                        title={r.h1}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                    </div>
                    <h3 className="font-display text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                      {r.h1}
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
              <span className="text-2xl font-bold text-brand-foreground">FC</span>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-lg font-bold text-white mb-2">About the Author</h2>
              <p className="text-gray-400 text-sm mb-3">
                <strong className="text-brand-light">Fusion Calling Team</strong>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We&apos;re the team behind Fusion Calling&apos;s white-label AI voice
                platform. Having helped 50+ agencies launch profitable voice AI
                practices since 2025, we specialize in helping businesses scale their
                phone operations with cutting-edge automation technology.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Link
                  href="/whitelabel"
                  className="text-brand-light hover:text-brand transition-colors"
                >
                  Partner Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
