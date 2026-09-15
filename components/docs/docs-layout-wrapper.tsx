"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import SidebarNav from "./sidebar-nav";
import OnThisPage from "./on-this-page";
import Breadcrumbs from "./breadcrumbs";
import ReadingProgress from "./reading-progress";
import DocFooter from "./doc-footer";
import CommandPalette from "./search/command-palette";
import { openSearch } from "./search/search-bus";
import { docSections } from "@/app/docs/doc-sections";

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DocsLayoutWrapperProps {
  children: ReactNode;
  navItems: NavItem[];
  breadcrumbs?: BreadcrumbItem[];
  showOnThisPage?: boolean;
  sectionTitle?: string;
  sectionHref?: string;
}

export default function DocsLayoutWrapper({
  children,
  navItems,
  breadcrumbs,
  showOnThisPage = true,
  sectionTitle = "Guide",
  sectionHref = "/docs",
}: DocsLayoutWrapperProps) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  // Cross-guide prev/next, derived from the canonical docs order.
  const guideIndex = docSections.findIndex((doc) => doc.href === pathname);
  const prevGuide = guideIndex > 0 ? docSections[guideIndex - 1] : undefined;
  const nextGuide =
    guideIndex >= 0 && guideIndex < docSections.length - 1
      ? docSections[guideIndex + 1]
      : undefined;

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <ReadingProgress />
      <CommandPalette />

      {/* Docs chrome bar */}
      <div className="sticky top-20 z-30 border-b border-white/10 bg-black/85 backdrop-blur">
        <div className="flex h-12 items-center gap-3 pl-4 pr-4 sm:pr-6 lg:pl-[18rem] lg:pr-8">
          <button
            onClick={() => setNavOpen(true)}
            className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          {breadcrumbs && (
            <div className="flex-1 min-w-0">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}

          <button
            onClick={() => openSearch()}
            className="ml-auto flex flex-shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-brand/40 hover:text-gray-200"
            aria-label="Search documentation"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-flex items-center rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      <div className="flex relative">
        {/* Left Sidebar Navigation */}
        <SidebarNav
          items={navItems}
          sectionTitle={sectionTitle}
          sectionHref={sectionHref}
          open={navOpen}
          onOpenChange={setNavOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            {/* Page Content */}
            {children}

            {/* Next / previous guide */}
            {(prevGuide || nextGuide) && (
              <DocFooter
                prev={
                  prevGuide && {
                    label: prevGuide.title,
                    href: prevGuide.href,
                  }
                }
                next={
                  nextGuide && {
                    label: nextGuide.title,
                    href: nextGuide.href,
                  }
                }
              />
            )}
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        {showOnThisPage && (
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-36 pr-8">
              <OnThisPage />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
