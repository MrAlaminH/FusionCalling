"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

interface SidebarNavProps {
  items: NavItem[];
}

export default function SidebarNav({ items }: SidebarNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.flatMap((item) =>
        item.children ? item.children.map((child) => child.id) : [item.id],
      );

      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActiveSection(current);
        // Update URL hash without causing scroll
        if (window.location.hash !== `#${current}`) {
          window.history.replaceState(null, "", `#${current}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  // Handle hash navigation on mount and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Check for hash on initial load
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const isActive = activeSection === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id}>
        <button
          onClick={() => !hasChildren && scrollToSection(item.id)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            isActive
              ? "bg-orange-600/20 text-orange-400 font-medium"
              : "text-gray-300 hover:text-white hover:bg-gray-900"
          } ${level > 0 ? "text-sm pl-8" : ""}`}
        >
          {item.label}
        </button>
        {hasChildren && item.children && (
          <div className="mt-1 space-y-1">
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-24 left-4 z-50 p-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
        aria-label="Toggle navigation"
      >
        <ChevronRight
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-black/95 backdrop-blur-sm border-r border-gray-900 overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="p-4 space-y-2">
          {/* Back to Documentation Hub */}
          <Link
            href="/docs"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Hub</span>
          </Link>

          <div className="border-t border-gray-800 my-4" />

          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
              Documentation
            </h2>
          </div>
          {items.map((item) => renderNavItem(item))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
