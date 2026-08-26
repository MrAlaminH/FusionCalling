"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Showcase", href: "/#show-case" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
];

// Secondary destinations grouped under the "More" dropdown to keep the
// desktop navbar uncluttered. New sections can simply be appended here.
const MORE_LINKS = [
  { label: "Blog", href: "/blog", description: "Guides & insights" },
  { label: "Docs", href: "/docs", description: "Platform documentation" },
  { label: "FAQs", href: "/#faqs", description: "Common questions" },
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
              src="/logo.webp"
              alt="Fusion Calling logo"
              width={36}
              height={36}
              priority
              fetchPriority="high"
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
            {/* More dropdown — opens on hover and when focused via keyboard */}
            <li className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-white group-focus-within:bg-white/5 group-focus-within:text-white group-hover:text-white cursor-pointer"
              >
                More
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                  aria-hidden="true"
                />
              </button>
              {/* Invisible hover bridge so the pointer can travel from the
                  trigger to the panel without the dropdown closing */}
              <div
                className="absolute left-0 top-full hidden h-2 w-full group-hover:block group-focus-within:block"
                aria-hidden="true"
              />
              <div className="invisible absolute left-0 top-[calc(100%+0.5rem)] z-50 w-60 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-premium-lg backdrop-blur-xl">
                  {MORE_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-xl px-4 py-2.5 transition-colors duration-200 hover:bg-white/5 focus:bg-white/5 focus:outline-none"
                      >
                        <span className="block text-sm font-medium text-gray-200 group-hover:text-white">
                          {item.label}
                        </span>
                        <span className="block text-xs text-gray-500">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/whitelabel"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
          >
            Partner Program
            <ArrowRight className="h-3.5 w-3.5" />
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
            {[...NAV_LINKS, ...MORE_LINKS].map((item, i) => (
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
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-white/5"
              >
                Partner Program
                <ArrowRight className="h-4 w-4" />
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
