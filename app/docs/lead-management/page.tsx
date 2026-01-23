import SidebarNav from "@/components/docs/sidebar-nav";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Docs: Lead Management User Guide",
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
  { id: "quick-reference", label: "Quick Reference" },
];

export default function LeadManagementDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />
        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back to Docs Button */}
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 text-sm font-medium transition-colors"
            >
              <span>←</span>
              <span>Back to Documentation</span>
            </Link>

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
            <QuickReferenceSection />
          </div>
        </main>
      </div>
    </div>
  );
}
