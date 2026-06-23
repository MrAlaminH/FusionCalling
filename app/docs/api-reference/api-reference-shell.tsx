"use client";

import { ReactNode } from "react";
import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import CommandPalette from "@/components/docs/search/command-palette";
import { LanguageProvider } from "@/components/docs/language-context";
import Script from "next/script";

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
      <Script
        id="api-reference-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.fusioncalling.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Documentation",
                    item: "https://www.fusioncalling.com/docs",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "API Reference",
                    item: "https://www.fusioncalling.com/docs/api-reference",
                  },
                ],
              },
              {
                "@type": "TechArticle",
                "@id": "https://www.fusioncalling.com/docs/api-reference#techarticle",
                url: "https://www.fusioncalling.com/docs/api-reference",
                name: "API Reference - Fusion Calling",
                description:
                  "Complete API documentation for Fusion Calling: Calendar API, Leads API, authentication, endpoints, and integration guides.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://www.fusioncalling.com/#website",
                },
                about: {
                  "@id": "https://www.fusioncalling.com/#product",
                },
                author: {
                  "@type": "Organization",
                  name: "Fusion Calling",
                  url: "https://www.fusioncalling.com/",
                },
                proficiencyLevel: "Beginner to Advanced",
                dependencies: "API key, HTTP client",
              },
            ],
          }),
        }}
      />
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
