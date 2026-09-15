"use client";

import { ReactNode } from "react";
import DocsLayoutWrapper from "@/components/docs/docs-layout-wrapper";
import { LanguageProvider } from "@/components/docs/language-context";
import { SITE_URL } from "@/lib/site-url";
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
      <script
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
                    item: `${SITE_URL}/`,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Documentation",
                    item: `${SITE_URL}/docs`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "API Reference",
                    item: `${SITE_URL}/docs/api-reference`,
                  },
                ],
              },
              {
                "@type": "TechArticle",
                "@id": `${SITE_URL}/docs/api-reference#techarticle`,
                url: `${SITE_URL}/docs/api-reference`,
                name: "API Reference - Fusion Calling",
                description:
                  "Complete API documentation for Fusion Calling: Calendar API, Leads API, authentication, endpoints, and integration guides.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                about: {
                  "@id": `${SITE_URL}/#product`,
                },
                author: {
                  "@type": "Organization",
                  name: "Fusion Calling",
                  url: `${SITE_URL}/`,
                },
                proficiencyLevel: "Beginner to Advanced",
                dependencies: "API key, HTTP client",
              },
            ],
          }),
        }}
      />
      <DocsLayoutWrapper
        navItems={navItems}
        breadcrumbs={breadcrumbs}
        sectionTitle="API Reference"
        sectionHref="/docs/api-reference"
      >
        {children}
      </DocsLayoutWrapper>
    </LanguageProvider>
  );
}
