import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Blocks,
  Check,
  CircleDollarSign,
  Download,
  EyeOff,
  Layers,
  LayoutDashboard,
  Lock,
  PhoneCall,
  Quote,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
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
import { cn } from "@/lib/utils";
import { whitelabelCaseStudies } from "@/lib/whitelabel-case-studies";

export type CompareLink = { href: string; title: string; note: string };

const sectionHeading =
  "font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4";

const sectionEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3";

/** Facts already substantiated on-page (pricing table, case studies). */
const heroTrustChips = [
  "$99/mo wholesale to start",
  "Keep 100% of client revenue",
  "Live in about 24 hours",
];

/** Match a feature card to a line icon by its title (titles vary per provider). */
function featureIcon(title: string): LucideIcon {
  const t = title.toLowerCase();
  if (t.includes("drop into")) return Layers;
  if (t.includes("integration")) return Blocks;
  if (t.includes("voice quality")) return AudioLines;
  if (t.includes("import")) return Download;
  if (t.includes("white-label") || t.includes("brand")) return EyeOff;
  if (t.includes("pricing") || t.includes("rebill") || t.includes("margin"))
    return CircleDollarSign;
  if (
    t.includes("sub-account") ||
    t.includes("dashboard") ||
    t.includes("multi-tenant") ||
    t.includes("client management")
  )
    return LayoutDashboard;
  if (t.includes("24/7") || t.includes("call")) return PhoneCall;
  return Sparkles;
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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
  const featuredCaseStudy = caseStudies[0];
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
          className="relative overflow-hidden pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-48 w-[820px] max-w-full h-[380px] rounded-full bg-brand/10 blur-[100px] pointer-events-none"
          />
          <div className="container mx-auto max-w-5xl text-center relative">
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
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {heroTrustChips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full glass-light px-3.5 py-1.5 text-xs sm:text-sm text-gray-300"
                >
                  <Check className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                  {chip}
                </li>
              ))}
            </ul>

            {/* Product shot in a branded browser frame — the client-facing
               surface partners resell, and the "yourbrand.com" domain is the
               white-label pitch itself. */}
            <Reveal animation="animate-fade-in-up" delay={0.15} className="mt-14 sm:mt-16">
              <figure className="relative max-w-5xl mx-auto">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-premium-lg p-1.5 text-left">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-0.5 text-[11px] text-gray-400">
                      <Lock className="w-3 h-3" aria-hidden="true" />
                      app.yourbrand.com
                    </span>
                    <span className="w-10" aria-hidden="true" />
                  </div>
                  <Image
                    src="/deck/dashboard.webp"
                    alt={`Branded AI voice dashboard with call minutes, call volume over time, and call distribution across client sub-accounts`}
                    width={1660}
                    height={800}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1152px"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Features — bento grid */}
        <section id={`${slug}-features`} className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Reveal className="text-center mb-12 md:mb-16">
              <p className={sectionEyebrow}>Platform</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {provider.features.map((f, i) => {
                const Icon = featureIcon(f.title);
                const isLead = i === 0;
                const isCloser = i === provider.features.length - 1;
                return (
                  <Reveal
                    key={f.title}
                    delay={i * 0.05}
                    className={cn(
                      "h-full",
                      isLead && "md:col-span-2",
                      isCloser && "md:col-span-2 lg:col-span-3"
                    )}
                  >
                    <div
                      className={cn(
                        "glass-light h-full rounded-2xl p-6 border border-brand/20 hover:border-brand/40 transition-premium",
                        (isLead || isCloser) &&
                          "md:flex md:items-start md:gap-5 md:p-7"
                      )}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0",
                          (isLead || isCloser) ? "mb-4 md:mb-0" : "mb-4"
                        )}
                      >
                        <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white mb-2">
                          {f.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
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
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <Reveal className="mb-10 md:mb-12 max-w-2xl">
                  <p className={sectionEyebrow}>Why Fusion Calling</p>
                  <h2 className={sectionHeading}>
                    Why white-label{" "}
                    <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
                      {name}
                    </span>{" "}
                    with Fusion Calling
                  </h2>
                </Reveal>
                <div className="border-t border-white/5">
                  {provider.differentiators.map((d, i) => (
                    <Reveal key={d.heading} delay={i * 0.05}>
                      <div className="grid grid-cols-[auto,1fr] gap-5 md:gap-8 py-7 md:py-9 border-b border-white/5 items-start">
                        <span
                          aria-hidden="true"
                          className="font-display text-3xl md:text-4xl font-bold text-brand/30 leading-none tabular-nums"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                            {d.heading}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {d.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          ))}

        {/* Partner proof — real case-study testimonial + published stats */}
        {featuredCaseStudy && (
          <section className="w-full bg-black section-spacing">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <Reveal className="text-center mb-10 md:mb-12">
                <p className={sectionEyebrow}>Partner results</p>
                <h2 className={sectionHeading}>
                  Real results from white-label partners
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <figure className="glass-light rounded-2xl border border-brand/20 p-7 md:p-10 max-w-4xl mx-auto text-left">
                  <Quote className="w-6 h-6 text-brand mb-4" aria-hidden="true" />
                  <blockquote className="font-display text-lg md:text-2xl text-white leading-relaxed mb-6">
                    &ldquo;{featuredCaseStudy.testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-strong flex items-center justify-center text-sm font-bold text-white shrink-0"
                    >
                      {initials(featuredCaseStudy.testimonial.attribution)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {featuredCaseStudy.testimonial.attribution}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {featuredCaseStudy.testimonial.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-10">
                {featuredCaseStudy.heroStats.slice(0, 3).map((stat) => (
                  <Reveal key={stat.label} delay={0.15} className="text-center">
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-light">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {stat.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

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
            <Reveal className="text-center mb-10 md:mb-12">
              <p className={sectionEyebrow}>Explore</p>
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                Compare white-label providers
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compareLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group glass-light rounded-xl p-5 border border-white/10 hover:border-brand/40 transition-premium flex items-start justify-between gap-4"
                >
                  <span>
                    <span className="block text-base font-bold text-white">
                      {link.title}
                    </span>
                    <span className="block text-sm text-gray-400 mt-1">
                      {link.note}
                    </span>
                  </span>
                  <ArrowRight
                    className="w-4 h-4 mt-1 text-brand shrink-0 transition-premium-fast group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* FAQ */}
        <section id={`${slug}-faq`} className="w-full bg-black section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Reveal className="text-center mb-12 md:mb-16">
              <p className={sectionEyebrow}>FAQs</p>
              <h2 className={sectionHeading}>Frequently Asked Questions</h2>
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
              <p className={sectionEyebrow}>Resources</p>
              <h2 className={sectionHeading}>{resourcesHeading}</h2>
              <p className="text-gray-400 text-base sm:text-lg">
                {resourcesIntro}
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {provider.blogGuide && (
                <Link
                  href={provider.blogGuide.href}
                  className="group glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium flex flex-col"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand mb-2">
                    Guide
                  </span>
                  <span className="font-display text-lg font-bold text-white mb-1">
                    {provider.blogGuide.label}
                  </span>
                  <span className="text-sm text-gray-400">{guideBlurb}</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-brand mt-4 transition-premium-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              )}
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/whitelabel/case-studies/${cs.slug}`}
                  className="group glass-light rounded-xl p-6 border border-brand/20 hover:border-brand/40 transition-premium flex flex-col"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand mb-2">
                    Case study · {cs.industry}
                  </span>
                  <span className="font-display text-lg font-bold text-white mb-1">
                    {caseStudyHeading(
                      cs.agencyName,
                      cs.heroStats[0]?.value ?? ""
                    )}
                  </span>
                  <span className="text-sm text-gray-400">
                    {cs.metaDescription}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-brand mt-4 transition-premium-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <p className="text-center pt-6">
              <Link
                href="/whitelabel/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-brand underline-offset-4 hover:underline transition-colors"
              >
                Browse all partner case studies &rarr;
              </Link>
            </p>
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
