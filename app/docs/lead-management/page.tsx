import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
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

export const metadata: Metadata = {
  title: "Lead Management User Guide",
  description:
    "Complete guide to managing leads in Fusion Calling: adding leads, understanding statuses, configuring providers, custom fields, retry system, and best practices.",
  alternates: {
    canonical: "/docs/lead-management",
  },
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
  { label: "Lead Management", href: "/docs/lead-management" },
  { label: "User Guide" },
];

export default function LeadManagementDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />

        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbs} />

            <SectionHeader
              title="Lead Management User Guide"
              description="The Lead Management system allows you to upload, organize, and automatically call leads using AI-powered calling agents. This guide covers everything you need to know to effectively manage your leads, from adding them to tracking their status through the calling process."
              difficulty="beginner"
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
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <OnThisPage />
      </div>
    </div>
  );
}
