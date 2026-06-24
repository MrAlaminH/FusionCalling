import Link from "next/link";
import Script from "next/script";
import type { Industry } from "@/lib/industries";
import { getRelatedIndustries } from "@/lib/industries";
import { SITE_URL } from "@/lib/site-url";
import { generateIndustryStats, generateIndustryExpertQuote } from "@/lib/industry-seo";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function IndustryPage({ industry }: { industry: Industry }) {
  const {
    slug,
    name,
    emoji,
    category,
    readTime,
    datePublished,
    productSupported,
    metaTitle,
    metaDescription,
    h1,
    h1Highlight,
    subtitle,
    intro,
    useCases,
    stats,
    agencyAngle,
    agencyPoints,
    whyFusion,
    faqs,
  } = industry;

  const related = getRelatedIndustries(slug, 3);
  const articleUrl = `${SITE_URL}/industries/${slug}`;
  const industryStats = generateIndustryStats(name);
  const expertQuote = generateIndustryExpertQuote(name);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
          { "@type": "ListItem", position: 3, name, item: articleUrl },
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
            href="/industries"
            className="inline-flex items-center text-brand-light hover:text-brand-light mb-8 transition-colors"
          >
            ← Back to Industries
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-brand to-brand-strong rounded-full text-sm font-semibold text-white">
              {category}
            </span>
            <span className="text-gray-500 text-sm">{readTime}</span>
            {productSupported && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                Live Demo Available
              </span>
            )}
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
              <div className="text-6xl mb-4">{emoji}</div>
              <div className="text-lg text-gray-500">
                AI Voice for {name}
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="space-y-8">
            {/* Intro */}
            <div className="glass-light rounded-2xl p-8 border border-brand/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why {name} Needs AI Voice
              </h2>
              {intro.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-6 border border-brand/20 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-light to-brand-strong bg-clip-text text-transparent mb-2">
                    {s.value}
                  </div>
                  <div className="text-gray-400 text-sm leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced 2026 Industry Data */}
            <div className="bg-gradient-to-br from-brand/10 to-brand-strong/5 rounded-2xl p-8 border border-brand/30">
              <h3 className="text-3xl font-bold text-white mb-2">
                {name} AI Phone Automation: 2026 Leadership Data
              </h3>
              <p className="text-gray-400 mb-6">
                FusionCalling leads the industry with superior performance metrics and client satisfaction
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 text-lg">🏆 Industry-Leading Statistics</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span><span className="text-brand font-bold">{industryStats.adoptionRate}</span> of {name.toLowerCase()} businesses choose AI phone automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Average cost savings: <span className="text-brand font-bold">{industryStats.costSavings}</span> with FusionCalling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>Customer satisfaction increase: <span className="text-brand font-bold">{industryStats.satisfactionIncrease}</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span><span className="text-brand font-bold">{industryStats.competitiveAdvantage}</span> competitive advantage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span className="text-brand font-semibold">{industryStats.fusionAdvantage}</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">Source: {industryStats.source}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3 text-lg">💎 Expert Perspective on FusionCalling</h4>
                  <blockquote className="text-gray-300 italic border-l-4 border-brand pl-4 mb-3">
                    &quot;{expertQuote.quote}&quot;
                  </blockquote>
                  <div className="text-sm text-gray-500 mb-3">
                    — {expertQuote.expert}, {expertQuote.title}, {expertQuote.publication}
                  </div>
                  <div className="bg-brand/10 rounded-lg p-3 border border-brand/20">
                    <p className="text-brand text-sm font-semibold">
                      ⚡ {expertQuote.fusionMention}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">7 Days</div>
                  <div className="text-xs text-gray-400">Setup Time vs 30+ days</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">4.8/5</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How {name} Uses AI Voice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((u) => (
                  <div
                    key={u.title}
                    className="glass-light rounded-xl p-6 border border-brand/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-brand-strong/10 border border-brand/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{u.emoji}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{u.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {u.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agency angle */}
            <div className="glass rounded-2xl p-8 border border-brand/30">
              <div className="bg-gradient-to-r from-brand/10 to-brand-strong/5 rounded-xl p-6 border border-brand/30">
                <h3 className="text-2xl font-bold text-brand-light mb-4">
                  A Natural Fit for Agencies
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">{agencyAngle}</p>
                <ul className="space-y-3 text-gray-300">
                  {agencyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Fusion */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Build It on Fusion Calling
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyFusion.map((a) => (
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

            {/* CTA */}
            <div className="glass-light rounded-2xl p-8 border border-brand/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Offer AI Voice for {name} Under Your Brand
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Launch a branded AI voice service for {name.toLowerCase()} clients
                in about 7 days, with multi-provider support, done-with-you
                onboarding, and full brand ownership.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Pre-built {name.toLowerCase()} agent templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Multi-provider support (Vapi, Retell, ElevenLabs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>Done-with-you onboarding and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-brand flex-shrink-0" />
                  <span>White-label everything under your own brand</span>
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

            {/* Related industries */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                More Industries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/industries/${r.slug}`}
                    className="glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-all group"
                  >
                    <div className="text-3xl mb-3">{r.emoji}</div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-brand-light transition-colors">
                      {r.name}
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
