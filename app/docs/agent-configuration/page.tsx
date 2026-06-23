import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import SectionHeader from "@/components/docs/section-header";
import type { Metadata } from "next";
import Script from "next/script";
import { OverviewSection } from "./components/overview";
import { GettingStartedSection } from "./components/getting-started";
import { ConfigurationTabsSection } from "./components/configuration-tabs";
import { BestPracticesSection } from "./components/best-practices";
import { CommonUseCasesSection } from "./components/common-use-cases";
import { TroubleshootingSection } from "./components/troubleshooting";
import { QuickReferenceSection } from "./components/quick-reference";

export const metadata: Metadata = {
  title: "Agent Configuration Guide",
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

const breadcrumbs = [
  { label: "Agent Configuration", href: "/docs/agent-configuration" },
  { label: "Guide" },
];

export default function AgentConfigurationPage() {
  return (
    <>
      <Script
        id="agent-config-schema"
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
                    name: "Agent Configuration",
                    item: "https://www.fusioncalling.com/docs/agent-configuration",
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": "https://www.fusioncalling.com/docs/agent-configuration#howto",
                name: "How to Configure AI Phone Agents",
                description:
                  "Complete guide to creating and configuring AI phone agents: agent setup, configuration tabs, best practices, common use cases, and troubleshooting.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Create Your First Agent",
                    text: "Navigate to the Agents section and click 'Create New Agent' to start the configuration process.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure Agent Settings",
                    text: "Set up agent name, description, voice, and behavior in the configuration tabs.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Define Call Flow",
                    text: "Create the conversation flow and script for your AI agent using natural language.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Test Your Agent",
                    text: "Test your agent with sample calls to ensure it behaves as expected.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Deploy and Optimize",
                    text: "Deploy your agent and monitor performance, making adjustments as needed.",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.fusioncalling.com/docs/agent-configuration#webpage",
                url: "https://www.fusioncalling.com/docs/agent-configuration",
                name: "Agent Configuration Guide",
                description:
                  "Complete guide to creating and configuring AI phone agents: agent setup, configuration tabs, best practices, common use cases, and troubleshooting.",
                inLanguage: "en-US",
                isPartOf: {
                  "@id": "https://www.fusioncalling.com/#website",
                },
                about: {
                  "@id": "https://www.fusioncalling.com/#product",
                },
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />

        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbs} />

            <SectionHeader
              title="Agent Configuration Guide"
              description="A complete guide to creating and configuring AI phone agents in your application. Learn how to set up agents, configure their behavior, and optimize them for your specific use cases."
              difficulty="intermediate"
            />

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

        {/* Right Sidebar - On This Page */}
        <OnThisPage />
      </div>
    </div>
    </>
  );
}
