"use client";

import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docSections } from "@/app/docs/doc-sections";

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
  isSection?: boolean; // marks top-level collapsible sections
}

interface SidebarNavProps {
  items: NavItem[];
  sectionTitle?: string;
  sectionHref?: string;
  /** Controlled mobile drawer state, owned by the docs layout wrapper. */
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SidebarNav({
  items,
  sectionTitle = "Guide",
  sectionHref = "/docs",
  open,
  onOpenChange,
}: SidebarNavProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(items.filter((item) => item.isSection).map((item) => item.id)),
  );

  useEffect(() => {
    // rAF-throttled so the per-section getBoundingClientRect reads run at
    // most once per frame instead of on every scroll event.
    let raf = 0;
    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const sections = items.flatMap((item) =>
          item.children
            ? item.children.flatMap((child) =>
                child.children
                  ? child.children.map((grandchild) => grandchild.id)
                  : [child.id],
              )
            : [item.id],
        );

        const current = sections.find((id) => {
          const element = document.getElementById(id);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        });

        if (current) {
          setActiveSection(current);
          // Update URL hash without causing scroll
          if (window.location.hash !== `#${current}`) {
            window.history.replaceState(null, "", `#${current}`);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
      onOpenChange(false);
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const isActive = activeSection === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isSection = item.isSection;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (isSection && hasChildren) {
              toggleSection(item.id);
            } else if (!hasChildren) {
              scrollToSection(item.id);
            }
          }}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
            isActive
              ? "bg-brand/10 text-brand-light font-medium"
              : isSection
                ? "text-white font-semibold hover:bg-white/5"
                : "text-gray-300 hover:text-white hover:bg-white/5"
          } ${level === 1 ? "text-sm pl-6" : level === 2 ? "text-sm pl-10" : ""}`}
        >
          <span>{item.label}</span>
          {isSection && hasChildren && (
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isExpanded ? "rotate-0" : "-rotate-90"
              }`}
            />
          )}
        </button>
        {hasChildren && item.children && isExpanded && (
          <div className="mt-1 space-y-1 animate-fade-in [animation-duration:150ms]">
            {item.children.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <aside
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 lg:w-64 flex-shrink-0 bg-black/95 backdrop-blur-sm border-r border-white/10 overflow-y-auto z-40 transition-transform duration-300 ease-[var(--ease-drawer)] ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="p-4 space-y-2">
          {/* Mobile close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="lg:hidden absolute top-3 right-3 p-2 text-gray-400 hover:text-white"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>

          {/* All guides */}
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 pt-1">
            Documentation
          </h2>
          <div className="mt-2 space-y-0.5">
            {docSections.map((doc) => {
              const isCurrent = pathname === doc.href;
              return (
                <Link
                  key={doc.id}
                  href={doc.href}
                  onClick={() => onOpenChange(false)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-lg text-sm transition-colors ${
                    isCurrent
                      ? "bg-brand/10 text-brand-light font-medium"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <doc.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{doc.title}</span>
                </Link>
              );
            })}
          </div>

          <div className="border-t border-white/10 my-4" />

          {/* Current guide TOC */}
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4">
              {sectionTitle}
            </h2>
            {sectionHref !== "/docs" && (
              <Link
                href={sectionHref}
                className="mt-1 block px-4 text-xs text-gray-600 hover:text-brand-light transition-colors"
              >
                All sections
              </Link>
            )}
          </div>
          {items.map((item) => renderNavItem(item))}
        </nav>
      </aside>

      {/* Overlay for mobile — kept mounted so it fades with the drawer
          instead of teleporting; pointer-events drop when closed. */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ease-[var(--ease-out)] ${
          open
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => onOpenChange(false)}
        aria-hidden
      />
    </>
  );
}
