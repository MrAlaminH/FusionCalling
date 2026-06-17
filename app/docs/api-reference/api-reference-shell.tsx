"use client";

import { ReactNode } from "react";
import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import CommandPalette from "@/components/docs/search/command-palette";
import { LanguageProvider } from "@/components/docs/language-context";

interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
  isSection?: boolean;
}

interface ApiReferenceShellProps {
  navItems: NavItem[];
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}

export default function ApiReferenceShell({
  navItems,
  breadcrumbs,
  children,
}: ApiReferenceShellProps) {
  return (
    <LanguageProvider>
      <CommandPalette />
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="flex relative">
          <SidebarNav items={navItems} />

          <main className="flex-1 lg:ml-64 w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <Breadcrumbs items={breadcrumbs} />
              {children}
            </div>
          </main>

          <OnThisPage />
        </div>
      </div>
    </LanguageProvider>
  );
}
