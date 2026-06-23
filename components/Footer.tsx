"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  ArrowRight,
} from "lucide-react";

// Single source of truth for footer links — keeps things DRY and easy to maintain.
const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "ROI Calculator", href: "/calculator" },
  { label: "Documentation", href: "/docs" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Platform Comparisons", href: "/compare" },
  { label: "Industries", href: "/industries" },
  { label: "Glossary", href: "/glossary" },
  { label: "Vapi Comparison", href: "/blog/vapi-white-label-platform" },
  { label: "Retell AI Comparison", href: "/blog/retell-ai-white-label" },
  {
    label: "GoHighLevel Comparison",
    href: "/blog/gohighlevel-white-label-voice",
  },
];

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Book a Call", href: "https://cal.com/mralamin/discovery-call" },
];

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
              Next Gen AI Agent
              <br />
              Together
            </h2>

            <Link
              href="/#home"
              className="mt-8 px-8 py-3 bg-brand text-brand-foreground rounded-full font-bold hover:bg-gray-700 transition-colors duration-300 inline-flex items-center group"
            >
              Try Our Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-black pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Footer Columns — 4 columns to match lg:grid-cols-4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand + Socials */}
            <div className="flex flex-col space-y-4">
              <Link
                href="/#home"
                className="flex items-center gap-3 text-2xl font-bold text-brand transition-colors"
              >
                <Image
                  src="/logo.png"
                  alt="Fusion Calling Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                Fusion Calling
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">
                Transform your phone operations with AI-powered voice agents.
                Automate calls, improve customer experience, and scale
                effortlessly.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="https://x.com/MrAlaminH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-brand hover:text-black transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fusion-calling/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-brand hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-brand hover:text-black transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-brand transition-colors"
        >
          {link.label}
        </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-brand transition-colors"
        >
          {link.label}
        </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={`${link.href}-${idx}`}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-brand transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-brand transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Contact details */}
              <div className="mt-6 space-y-3">
                <Link
                  href="mailto:hello@fusioncalling.com"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-brand transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>hello@fusioncalling.com</span>
                </Link>
                <Link
                  href="tel:+19146394069"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-brand transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>+1 (914) 639-4069</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Fusion Calling. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-brand transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 hover:text-brand transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/docs"
                  className="text-sm text-gray-500 hover:text-brand transition-colors"
                >
                  Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
