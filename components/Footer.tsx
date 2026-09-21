import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Mail,
  Phone,
  Twitter,
  ArrowRight,
} from "lucide-react";

type FooterLink = { label: string; href: string; external?: boolean };
type FooterGroup = { title: string; links: FooterLink[] };

// Categorized link map — each group owns one topic so future pages slot
// into an existing column instead of growing a catch-all list. Every URL
// from the old Product / Resources / Company lists is preserved here
// (labels disambiguated where two URLs shared one label) for SEO parity.
const footerGroups: FooterGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/whitelabel#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "ROI Calculator", href: "/calculator" },
      { label: "Documentation", href: "/docs" },
      { label: "Book a Call", href: "https://cal.com/mralamin/discovery-call", external: true },
    ],
  },
  {
    title: "Partner Program",
    links: [
      { label: "Overview", href: "/whitelabel" },
      { label: "GoHighLevel", href: "/whitelabel/gohighlevel" },
      { label: "Vapi", href: "/whitelabel/vapi" },
      { label: "Retell AI", href: "/whitelabel/retell" },
      { label: "ElevenLabs", href: "/whitelabel/elevenlabs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Case Studies", href: "/whitelabel/case-studies" },
      { label: "Compare Platforms", href: "/whitelabel/compare" },
      { label: "Locations", href: "/whitelabel/locations" },
      { label: "Industries", href: "/industries" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "AI Receptionist Guide", href: "/ai-phone-call-receptionist" },
      { label: "Alternatives", href: "/alternative" },
      { label: "Vapi Integration", href: "/blog/vapi-white-label-platform" },
      { label: "Retell AI Integration", href: "/blog/retell-ai-white-label" },
      { label: "GoHighLevel Guide", href: "/blog/gohighlevel-white-label-voice" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

// Only profiles that actually belong to Fusion Calling — a sameAs/footer link
// to someone else's page corrupts the org entity (facebook.com/fusioncalling
// is a different company; FB/IG return when real profiles exist).
const socialLinks = [
  { label: "Twitter / X", href: "https://x.com/MrAlaminH", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fusion-calling/", Icon: Linkedin },
];

// "Featured on" badges — small, muted, extensible. Add future launches /
// press logos here and they flow into the same row automatically.
const featuredBadges = [
  {
    name: "ScrollLaunch",
    href: "https://www.scrolllaunch.com/products/fusion-calling?ref=badge",
    img: "https://www.scrolllaunch.com/api/badge/fusion-calling",
    alt: "Featured on ScrollLaunch",
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  // Muted by default, white on hover — calmer than brand-orange on all
  // 27 links (Linear / Vercel pattern). Brand accent reserved for the
  // primary CTA in the brand column.
  const className =
    "text-[13px] leading-6 text-zinc-400 hover:text-white transition-colors duration-200";
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <div
        className="w-full relative overflow-hidden min-h-[40vh] flex items-center justify-center"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgb(255, 125, 0) 0%,
              rgba(0, 0, 0, 0.95) 70%,
              rgb(0, 0, 0) 100%
            )
          `,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
              Let&apos;s Build
              <br />
              Next Gen AI Voice Agents
              <br />
              Together
            </h2>

            <Link
              href="/#show-case"
              className="mt-8 px-8 py-3 bg-gradient-to-r from-brand to-brand-strong text-black rounded-full font-bold hover:from-brand-light hover:to-brand transition-colors duration-300 inline-flex items-center group"
            >
              Try Our Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer — quiet sitemap: one top brand line, one airy link
          map, one bottom sign-off. A single divider only, so the 27 SEO
          links read as back-matter instead of a wall. */}
      <footer className="w-full bg-black border-t border-white/10 pt-12 sm:pt-14 pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Top brand line — logo only, socials live under the intro copy */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Brand lockup matches the navbar: white "Fusion" + brand "Calling" */}
            <Link href="/#home" className="flex items-center gap-2.5" aria-label="Fusion Calling — home">
              <Image
                src="/logo.webp"
                alt="Fusion Calling Logo"
                width={32}
                height={32}
                loading="lazy"
                className="object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                Fusion{" "}
                <span className="text-brand-strong">Calling</span>
              </span>
            </Link>
          </div>

          {/* Intro + categorized link map */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            {/* Intro column — positioning + socials + contact */}
            <div className="flex flex-col space-y-5">
              <p className="text-sm text-zinc-400 leading-relaxed">
                AI-powered voice agents for your phone operations.
                Automate calls, improve customer experience, and scale
                effortlessly.
              </p>
              {/* Social Links — ghost icons under the description */}
              <div className="flex items-center gap-1 -ml-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full text-zinc-500 hover:text-white hover:bg-white/10 transition-colors duration-200"
                    aria-label={`Fusion Calling on ${label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              {/* Contact details */}
              <div className="space-y-2.5">
                <a
                  href="mailto:hello@fusioncalling.com"
                  className="flex items-center gap-2.5 text-[13px] text-zinc-500 hover:text-white transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>hello@fusioncalling.com</span>
                </a>
                <a
                  href="tel:+19146394069"
                  className="flex items-center gap-2.5 text-[13px] text-zinc-500 hover:text-white transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>+1 (914) 639-4069</span>
                </a>
              </div>
            </div>

            {/* Link map — 2 cols on mobile, 3 on sm, 5 across on xl.
                Links stay in the DOM at every breakpoint (SEO/GEO safe). */}
            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 xl:grid-cols-5"
            >
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.links.map((link) => (
                      <li key={`${group.title}-${link.href}`}>
                        <FooterLinkItem link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom sign-off — single quiet line: copyright · featured-on.
              Privacy / Terms / Docs live once in the link map above, so no
              duplicates down here. */}
          <div className="mt-12 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-zinc-500">
                © {new Date().getFullYear()} Fusion Calling. All rights
                reserved.
              </p>
              {/* Featured-on — inline, badge at text size, no pill chrome */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  Featured on
                </span>
                {featuredBadges.map((badge) => (
                  <a
                    key={badge.name}
                    href={badge.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${badge.name} — Fusion Calling listing`}
                    className="inline-flex items-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-200"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={badge.img}
                      alt={badge.alt}
                      width={112}
                      height={24}
                      loading="lazy"
                      decoding="async"
                      className="h-6 w-auto"
                    />
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {/* Google Preferred Sources button — lets visitors pick Fusion
                    Calling as a preferred source for AI Mode / AI Overviews.
                    The pill is rendered and styled by Google's publisher.js
                    widget (loaded sitewide in app/layout.tsx). */}
                <div
                  {...({
                    "google-add-preferred-source-btn": "",
                  } as Record<string, string>)}
                  data-theme="dark"
                  data-lang="en"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
