import SidebarNav from "@/components/docs/sidebar-nav";
import type { Metadata } from "next";
import { OverviewSection } from "./components/overview";
import { GettingStartedSection } from "./components/getting-started";
import { ConfigurationTabsSection } from "./components/configuration-tabs";
import { BestPracticesSection } from "./components/best-practices";
import { CommonUseCasesSection } from "./components/common-use-cases";
import { TroubleshootingSection } from "./components/troubleshooting";
import { QuickReferenceSection } from "./components/quick-reference";

export const metadata: Metadata = {
  title: "Docs: Agent Configuration Guide",
  description:
    "Complete guide to creating and configuring AI phone agents: agent setup, configuration tabs, best practices, common use cases, and troubleshooting.",
  alternates: {
    canonical: "/docs/agent-configuration",
  },
};

const navItems = [
  { id: "what-is-agent", label: "What is an Agent?" },
  { id: "creating-first-agent", label: "Creating Your First Agent" },
  { id: "configuration-tabs", label: "Agent Configuration Tabs" },
  { id: "best-practices", label: "Best Practices" },
  { id: "common-use-cases", label: "Common Use Cases" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "quick-reference", label: "Quick Reference" },
];

export default function AgentConfigurationPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />
        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Agent Configuration Guide
              </h1>
              <p className="text-xl text-gray-300">
                A complete guide to creating and configuring AI phone agents in
                your application.
              </p>
            </div>

            {/* Sections */}
            <OverviewSection />
            <GettingStartedSection />
            <ConfigurationTabsSection />
            <BestPracticesSection />
            <CommonUseCasesSection />
            <TroubleshootingSection />
            <QuickReferenceSection />
          </div>
        </main>
      </div>
    </div>
  );
}
