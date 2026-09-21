import Link from "next/link";
import type { ReactNode } from "react";
import type { WhiteLabelProvider } from "@/lib/whitelabel-providers";
import WhiteLabelNavbar, {
  type NavbarLink,
} from "@/components/white-label-navbar";
import Pricing from "@/components/white-label/Pricing";
import CTA from "@/components/white-label/CTA";
import ProviderCrossLinks from "@/components/white-label/ProviderCrossLinks";
import PostFaq from "@/components/blog/PostFaq";
import { primaryButton, secondaryButton } from "@/components/ui/button-styles";
import { Reveal } from "@/components/ui/reveal";
import { whitelabelCaseStudies } from "@/lib/whitelabel-case-studies";

export type CompareLink = { href: string; title: string; note: string };

const sectionHeading =
  "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4";

/**
 * Shared template for the four provider integration pages
 * (/whitelabel/{vapi,retell,elevenlabs,gohighlevel}). One section flow,
 * parameterized copy — the pages only carry their schema, metadata, and
 * per-provider copy so the four can never drift apart again.
 */
export default function ProviderPageTemplate({
  provider,
  schema,
  featuresHeadingLabel,
  faqSubtitle,
  resourcesHeading,
  resourcesIntro,
  guideBlurb,
  caseStudyHeading,
  compareLinks,
  extraFaqs,
  heroIntro,
  heroNote,
  navbarLinks,
  extraSection,
}: {
  provider: WhiteLabelProvider;
  /** Page-level JSON-LD @graph (kept per-page; rendered server-side). */
  schema: object;
  /** e.g. "Retell AI partners" / "GoHighLevel agencies". */
  featuresHeadingLabel: string;
  faqSubtitle: string;
  resourcesHeading: ReactNode;
  resourcesIntro: string;
  guideBlurb: string;
  /** e.g. (name, stat) => `How ${name} pivoted to white-label AI voice (${stat}/month)`. */
  caseStudyHeading: (agencyName: string, stat: string) => string;
  compareLinks: CompareLink[];
  /** Page-local FAQ additions beyond provider.faqs (retell: +2, vapi: +1). */
  extraFaqs?: { question: string; answer: string }[];
  /** Optional hero paragraph override (GHL uses longer on-page copy than metadata). */
  heroIntro?: ReactNode;
  /** Optional secondary hero paragraph with inline links. */
  heroNote?: ReactNode;
  /** In-page anchor links so the navbar never leaves this page. */
  navbarLinks: NavbarLink[];
  /** Optional page-specific section (e.g. GHL's Missed-Call Text Back). */
  extraSection?: ReactNode;
}) {
  const { slug, name } = provider;
  const pricingId = `${slug}-pricing`;
  const caseStudies = whitelabelCaseStudies.filter((cs) =>
    provider.relatedCaseStudySlugs?.includes(cs.slug)
  );
  const faqs = [...provider.faqs, ...(extraFaqs ?? [])];

  return (
    <>
      <script
        id={`${slug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WhiteLabelNavbar links={navbarLinks} />
      <main id="main" className="min-h-screen w-full bg-black">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-brand-light transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/whitelabel" className="hover:text-brand-light transition-colors">
                  White-label Partner Program
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-light">{name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section
          id={`${slug}-hero`}
          className="relative pt-8 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full glass-light px-4 py-1.5 text-xs sm:text-sm text-brand-light border border-brand/20 mb-6">
              {provider.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              {provider.h1Prefix}{" "}
              <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
                {provider.h1Highlight}
              </span>{" "}
              {provider.h1Suffix}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {heroIntro ?? provider.description}
            </p>
            {heroNote}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#cta" className={primaryButton}>
                Book a Demo
              </a>
              <a href={`#${pricingId}`} className={secondaryButton}>
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id={`${slug}-features`} className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="text-center mb-12 md:mb-16">
              <h2 className={sectionHeading}>
                Why {featuresHeadingLabel} choose{" "}
                <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                  Fusion Calling
                </span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
                Everything you need to launch and resell AI voice under your own
                brand — without building the technology.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {provider.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05}>
                  <div className="glass-light h-full rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium">
                    <h3 className="font-display text-lg font-bold text-brand-light mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators (or a page-specific section instead) */}
        {extraSection ??
          (provider.differentiators.length > 0 && (
            <section
              id={`${slug}-differentiators`}
              className="w-full bg-black section-spacing"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <Reveal className="text-center mb-12 md:mb-16">
                  <h2 className={sectionHeading}>
                    Why white-label{" "}
                    <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                      {name}
                    </span>{" "}
                    with Fusion Calling
                  </h2>
                </Reveal>
                <div className="grid gap-4 md:grid-cols-3">
                  {provider.differentiators.map((d) => (
                    <div
                      key={d.heading}
                      className="glass-light rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                    >
                      <h3 className="font-display text-base font-bold text-white mb-2">
                        {d.heading}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {d.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

        {/* Pricing */}
        <div id={pricingId}>
          <Pricing />
        </div>

        {/* Compare providers — keep comparison intent on-site */}
        <nav
          aria-label="Compare white-label providers"
          className="w-full bg-black section-spacing"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-4 text-center">
              Compare white-label providers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compareLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <span className="text-base font-bold text-brand-light">
                    {link.title}
                  </span>
                  <span className="block text-sm text-gray-400 mt-1">
                    {link.note}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* FAQ */}
        <section id={`${slug}-faq`} className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-12 md:mb-16">
              <h2 className={sectionHeading}>
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400 text-base sm:text-lg">
                {faqSubtitle}
              </p>
            </Reveal>
            <PostFaq faqs={faqs} title="" />
          </div>
        </section>

        {/* Resources & cross-links */}
        <section id={`${slug}-resources`} className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-10 md:mb-12">
              <h2 className={sectionHeading}>{resourcesHeading}</h2>
              <p className="text-gray-400 text-base sm:text-lg">
                {resourcesIntro}
              </p>
            </Reveal>
            <div className="space-y-4">
              {provider.blogGuide && (
                <Link
                  href={provider.blogGuide.href}
                  className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="font-display text-lg font-bold text-brand-light mb-1">
                    Guide: {provider.blogGuide.label}
                  </h3>
                  <p className="text-sm text-gray-400">{guideBlurb}</p>
                </Link>
              )}
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/whitelabel/case-studies/${cs.slug}`}
                  className="block glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium"
                >
                  <h3 className="font-display text-lg font-bold text-brand-light mb-1">
                    Case study:{" "}
                    {caseStudyHeading(cs.agencyName, cs.heroStats[0]?.value ?? "")}
                  </h3>
                  <p className="text-sm text-gray-400">{cs.metaDescription}</p>
                </Link>
              ))}
              <p className="text-center pt-4">
                <Link
                  href="/whitelabel/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
                >
                  Browse all partner case studies &rarr;
                </Link>
              </p>
            </div>
          </div>
        </section>

        <ProviderCrossLinks currentSlug={slug} />

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </main>
    </>
  );
}
