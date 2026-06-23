"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Show Case", href: "/#show-case" },
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
    <nav className="bg-[#03001417] backdrop-blur-md shadow-lg shadow-brand-strong/50 fixed w-full z-50 top-0">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Fusion Calling logo"
              width={40}
              height={40}
              className="cursor-pointer hover:animate-slowspin sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]"
            />
          </Link>
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-lg sm:text-xl text-brand-strong font-extrabold">
              Fusion Calling
            </span>
            <span className="text-[#FF4500] text-[10px] self-end mr-[8px] -mt-1 font-bold">
              Labs
            </span>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden">
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex items-center p-2 text-gray-200 hover:bg-brand-strong/20 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
        <div className="hidden lg:block lg:w-auto">
          <ul className="flex flex-row space-x-6 xl:space-x-8">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-2.5 px-4 rounded-lg font-medium transition duration-300 transform hover:-translate-y-1 hover:bg-brand-strong hover:text-white",
                    item.label === "Home"
                      ? "text-yellow-400"
                      : "text-gray-200"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 sm:h-11 lg:h-12 items-center justify-center rounded-xl border border-brand-strong bg-brand-strong px-4 sm:px-5 lg:px-6 font-medium text-white hover:bg-gray-800 transition duration-300 transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
          <Link
            href="/whitelabel"
            className="inline-flex h-10 sm:h-11 lg:h-12 items-center justify-center gap-2 rounded-xl border-2 border-brand-strong bg-transparent px-4 sm:px-5 lg:px-6 font-medium text-white hover:bg-brand-strong/20 transition duration-300 transform hover:-translate-y-1"
          >
            Partner Program
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="w-full lg:hidden"
          >
            <ul className="flex flex-col p-4 mt-4 space-y-3 border border-brand-strong/50 rounded-lg">
              {NAV_LINKS.map((item, i) => (
                <li key={item.label}>
                  <Link
                    ref={i === 0 ? firstItemRef : undefined}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block py-2.5 px-4 rounded-lg font-medium transition duration-300 transform hover:-translate-y-1 hover:bg-brand-strong hover:text-white",
                      item.label === "Home"
                        ? "text-yellow-400"
                        : "text-gray-200"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4 !border-t border-brand-strong/30 pt-4">
                <Link
                  href="/whitelabel"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white bg-transparent border-2 border-brand-strong hover:bg-brand-strong/20 text-center font-semibold transition duration-300 transform hover:-translate-y-1"
                >
                  Partner Program
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 px-4 rounded-lg text-white bg-brand-strong hover:bg-brand-strong/90 text-center font-semibold shadow-lg shadow-brand-strong/30 transition duration-300 transform hover:-translate-y-1"
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
