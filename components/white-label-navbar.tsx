"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type NavbarLink = { label: string; href: string };

interface WhiteLabelNavbarProps {
  /**
   * Override the default hub-anchored links. Provider pages pass in-page
   * anchors (#features, #pricing, …) so navigation never leaves the page.
   */
  links?: NavbarLink[];
}

const DEFAULT_LINKS: NavbarLink[] = [
  { label: "Home", href: "/whitelabel" },
  { label: "Features", href: "/whitelabel#features" },
  { label: "Pricing", href: "/whitelabel#pricing" },
  { label: "Benefits", href: "/whitelabel#benefits" },
  { label: "FAQs", href: "/whitelabel#faq" },
];

const CONTACT_URL = "https://cal.com/mralamin/discovery-call";
const APP_URL = "https://app.fusioncalling.com/";

const WhiteLabelNavbar = ({ links }: WhiteLabelNavbarProps) => {
  const navLinks = links ?? DEFAULT_LINKS;
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
    <nav className="bg-black/70 backdrop-blur-md border-b border-brand/10 fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/whitelabel"
          className="flex flex-shrink-0 items-center gap-2.5"
          aria-label="Fusion Calling Labs — home"
        >
          <Image
            src="/logo.webp"
            alt="Fusion Calling logo"
            width={40}
            height={40}
            className="cursor-pointer sm:h-[45px] sm:w-[45px] lg:h-[50px] lg:w-[50px]"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-brand-strong sm:text-xl">
              Fusion Calling
            </span>
            <span className="-mt-0.5 self-end text-[10px] font-bold text-brand">
              Labs
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-brand-strong hover:text-white",
                  item.label === "Home" ? "text-brand-light" : "text-gray-200"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-brand-strong bg-brand-strong px-4 font-medium text-black transition duration-200 active:duration-150 hover:bg-brand active:scale-[0.98] lg:px-5"
          >
            Contact Us
          </a>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border-2 border-brand-strong bg-transparent px-4 font-medium text-white transition duration-200 active:duration-150 hover:bg-brand-strong/20 active:scale-[0.98] lg:px-5"
          >
            Open app
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-200 transition-colors hover:bg-brand-strong/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          aria-controls="wl-mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Hamburger↔X morph: both paths crossfade + rotate in place */}
            <path
              className={cn(
                "origin-center transition-[opacity,transform] duration-200 [transform-box:fill-box]",
                isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
              )}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={cn(
                "origin-center transition-[opacity,transform] duration-200 [transform-box:fill-box]",
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
              )}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown — absolutely positioned under the header bar so the
          closed (invisible, opacity-0) panel occupies zero layout space.
          In-flow would keep its full height inside the fixed <nav>, stretching
          the nav's bg + backdrop-blur over the hero and swallowing taps.
          `pointer-events-none` when closed is defense-in-depth beyond
          `invisible`; exit transition still plays because it stays mounted. */}
      <div
        ref={menuRef}
        id="wl-mobile-menu"
        aria-hidden={!isMenuOpen}
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-brand-strong/30 bg-black/90 shadow-premium-lg backdrop-blur-md lg:hidden transition-[opacity,transform,visibility] duration-200 ease-[var(--ease-out)] origin-top",
          isMenuOpen
            ? "pointer-events-auto visible translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none invisible -translate-y-2 scale-y-[0.98] opacity-0"
        )}
      >
          <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((item, i) => (
                <li key={item.label}>
                  <Link
                    ref={i === 0 ? firstItemRef : undefined}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 font-medium transition duration-200 active:scale-[0.98] hover:bg-brand-strong hover:text-white",
                      item.label === "Home" ? "text-brand-light" : "text-gray-200"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3 border-t border-brand-strong/30 pt-4">
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-brand-strong px-4 py-3 text-center font-semibold text-black shadow-lg shadow-brand-strong/30 transition duration-200 active:duration-150 hover:bg-brand active:scale-[0.98]"
              >
                Contact Us
              </a>
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-strong px-4 py-3 text-center font-semibold text-white transition duration-200 active:duration-150 hover:bg-brand-strong/20 active:scale-[0.98]"
              >
                Open app
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default WhiteLabelNavbar;
