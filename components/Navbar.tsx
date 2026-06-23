"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Showcase", href: "/#show-case" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/#faqs" },
];

const CONTACT_URL = "https://cal.com/mralamin/discovery-call";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  // Close on Escape + click-outside + focus management.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    const t = setTimeout(() => firstItemRef.current?.focus(), 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(t);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-black/80 backdrop-blur-xl border-b border-brand/20 fixed w-full z-50 top-0">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-3 sm:p-4 lg:px-8">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Fusion Calling logo"
              width={40}
              height={40}
              className="cursor-pointer hover:animate-slowspin transition-transform"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl sm:text-2xl text-brand-strong font-extrabold tracking-tight">
                Fusion Calling
              </span>
              <span className="text-brand text-xs font-semibold self-end">
                Labs
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden">
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex items-center p-2.5 text-gray-200 hover:bg-brand/10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          <ul className="flex flex-row items-center gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                    item.label === "Home"
                      ? "text-brand-strong"
                      : "text-gray-300 hover:text-white hover:bg-brand/10"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/whitelabel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-brand/50 bg-transparent font-medium text-white hover:bg-brand/10 transition-all duration-300 text-sm"
          >
            Partner Program
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-brand font-medium text-white hover:bg-brand-strong transition-all duration-300 shadow-lg shadow-brand/30 text-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-xl border-b border-brand/20"
          >
            <ul className="flex flex-col p-4 space-y-1">
              {NAV_LINKS.map((item, i) => (
                <li key={item.label}>
                  <Link
                    ref={i === 0 ? firstItemRef : undefined}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-all duration-300",
                      item.label === "Home"
                        ? "text-brand-strong bg-brand/10"
                        : "text-gray-300 hover:text-white hover:bg-brand/10"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
               <li className="pt-4 mt-4 border-t border-brand/20 space-y-2">
                <Link
                  href="/whitelabel"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-white bg-brand/10 border border-brand/30 hover:bg-brand/20 font-medium transition-all duration-300"
                >
                  Partner Program
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-white bg-brand hover:bg-brand-strong font-medium shadow-lg shadow-brand/30 transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
