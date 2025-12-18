"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
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
              className="mt-8 px-8 py-3 bg-orange-600 text-black rounded-full font-bold hover:bg-gray-700 transition-colors duration-300 inline-flex items-center"
            >
              Try Our Demo
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full bg-black py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-between">
            {/* Logo and Copyright */}
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-xl font-bold text-orange-600 transition-colors"
              >
                Fusion Calling
              </Link>
              <p className="text-xs text-white/60">
                © 2025 MrAlaminH. All rights reserved.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-6">
              <Link
                href="mailto:hello@fusioncalling.com"
                className="flex items-center gap-2 text-sm text-white hover:text-orange-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@fusioncalling.com
              </Link>

              <Link
                href="tel:+19146394069"
                className="flex items-center gap-2 text-sm text-white hover:text-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +19146394069
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/MrAlaminH"
                className="text-white hover:text-orange-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/MrAlaminH"
                className="text-white hover:text-orange-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/MrAlaminH"
                className="text-white hover:text-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link
                href="/Privacy"
                target="_blank"
                className="text-xs text-white hover:text-orange-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/Terms"
                target="_blank"
                className="text-xs text-white hover:text-orange-600 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
