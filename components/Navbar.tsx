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
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2.5 shadow-premium backdrop-blur-xl sm:px-5">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Fusion Calling logo"
              width={36}
              height={36}
              className="cursor-pointer transition-transform hover:scale-105"
            />
            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
              Fusion{" "}
              <span className="text-brand-strong">Calling</span>
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex items-center p-2.5 text-gray-200 transition-colors hover:bg-white/10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <svg
              className="h-5 w-5"
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
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <ul className="flex flex-row items-center gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    item.label === "Home"
                      ? "text-brand-strong"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/whitelabel"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
          >
            Partner Program
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="absolute inset-x-3 top-full mt-2 rounded-3xl border border-white/10 bg-zinc-950/95 p-4 shadow-premium-lg backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col space-y-1">
            {NAV_LINKS.map((item, i) => (
              <li key={item.label}>
                <Link
                  ref={i === 0 ? firstItemRef : undefined}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-medium transition-all duration-300",
                    item.label === "Home"
                      ? "bg-brand/10 text-brand-strong"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 space-y-2 border-t border-white/10 pt-4">
              <Link
                href="/whitelabel"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-white/5"
              >
                Partner Program
                <ExternalLink className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-brand px-4 py-3 font-medium shadow-lg shadow-brand/25 transition-all duration-300 hover:bg-brand-strong"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
