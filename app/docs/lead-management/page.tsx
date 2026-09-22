import DocsLayoutWrapper from "@/components/docs/docs-layout-wrapper";
import SectionHeader from "@/components/docs/section-header";
import type { Metadata } from "next";
import { OverviewSection } from "./components/overview";
import { GettingStartedSection } from "./components/getting-started";
import { StatusesSection } from "./components/statuses";
import { StatusFlowSection } from "./components/status-flow";
import { ProviderGuidesSection } from "./components/provider-guides";
import { CustomFieldsSection } from "./components/custom-fields";
import { RetrySystemSection } from "./components/retry-system";
import { BestPracticesSection } from "./components/best-practices";
import { TroubleshootingSection } from "./components/troubleshooting";
import { QuickReferenceSection } from "./components/quick-reference";
import { ErrorClassificationSection } from "./components/error-classification";
import { buildOpenGraph } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

const title = "AI Voice Lead Management Guide";
const description =
  "Manage Fusion Calling leads: statuses, providers, custom fields, retries, and best practices for AI voice campaigns.";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/docs/lead-management" }),
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "getting-started", label: "Getting Started" },
  { id: "understanding-statuses", label: "Understanding Statuses" },
  { id: "status-flow", label: "Status Flow" },
  {
    id: "provider-guides",
    label: "Provider Guides",
    children: [
      { id: "retell-guide", label: "Using Retell" },
      { id: "vapi-guide", label: "Using Vapi" },
    ],
  },
  { id: "custom-fields", label: "Custom Fields" },
  { id: "retry-system", label: "Retry System" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "error-classification", label: "Error Classification" },
  { id: "quick-reference", label: "Quick Reference" },
];

const breadcrumbs = [
  { label: "Documentation", href: "/docs" },
  { label: "Lead Management" },
];

export default function LeadManagementDocsPage() {
  return (
    <>
      <script
        id="lead-management-schema"
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
                    name: "Lead Management",
                    item: `${SITE_URL}/docs/lead-management`,
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": `${SITE_URL}/docs/lead-management#howto`,
                name: "How to Manage Leads with AI Phone Call Automation",
                description:
                  "Complete guide to managing leads in Fusion Calling: adding leads, understanding statuses, configuring providers, custom fields, retry system, and best practices.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Add Your Leads",
                    text: "Upload your lead list manually or via CSV to start automated calling campaigns.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Understand Lead Statuses",
                    text: "Learn the different lead statuses and what they mean for your calling campaigns.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure Voice Providers",
                    text: "Set up and configure Retell or Vapi as your voice provider for AI calls.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Customize Fields",
                    text: "Add custom fields to track additional information about your leads.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Enable Retry System",
                    text: "Configure automatic retry logic for failed or unanswered calls.",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": `${SITE_URL}/docs/lead-management#webpage`,
                url: `${SITE_URL}/docs/lead-management`,
                name: "Lead Management User Guide",
                description:
                  "Complete guide to managing leads in Fusion Calling: adding leads, understanding statuses, configuring providers, custom fields, retry system, and best practices.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": `${SITE_URL}/#website`,
                },
                about: {
                  "@id": `${SITE_URL}/#service`,
                },
              },
            ],
          }),
        }}
      />
      <DocsLayoutWrapper
        navItems={navItems}
        breadcrumbs={breadcrumbs}
        sectionTitle="Lead Management"
        sectionHref="/docs/lead-management"
      >
        <SectionHeader
              title="Lead Management User Guide"
              description="The Lead Management system allows you to upload, organize, and automatically call leads using AI-powered calling agents. This guide covers everything you need to know to effectively manage your leads, from adding them to tracking their status through the calling process."
              difficulty="beginner"
              readingTime={14}
              steps={navItems.length}
            />

            {/* All Sections Imported as Components */}
            <OverviewSection />
            <GettingStartedSection />
            <StatusesSection />
            <StatusFlowSection />
            <ProviderGuidesSection />
            <CustomFieldsSection />
            <RetrySystemSection />
            <BestPracticesSection />
            <TroubleshootingSection />
            <ErrorClassificationSection />
            <QuickReferenceSection />
      </DocsLayoutWrapper>
    </>
  );
}
