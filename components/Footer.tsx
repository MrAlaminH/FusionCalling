"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter, ArrowRight } from "lucide-react";

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
              href="#home"
              className="mt-8 px-8 py-3 bg-orange-600 text-black rounded-full font-bold hover:bg-gray-700 transition-colors duration-300 inline-flex items-center group"
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
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-2xl font-bold text-orange-600 transition-colors"
              >
                Fusion Calling
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed">
                Transform your phone operations with AI-powered voice agents. Automate calls, improve customer experience, and scale effortlessly.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="https://x.com/MrAlaminH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-orange-600 hover:text-black transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fusion-calling/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-orange-600 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-orange-600 hover:text-black transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/whitelabel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    White-label Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#careers"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whitelabel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    Partner Program
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="mailto:hello@fusioncalling.com"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>hello@fusioncalling.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+19146394069"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>+1 (914) 639-4069</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Fusion Calling. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/Privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/Terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
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
