import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import SectionHeader from "@/components/docs/section-header";
import type { Metadata } from "next";
import Script from "next/script";
import { IntroductionSection } from "./components/introduction";
import { ClientManagementSection } from "./components/client-management";
import { UserManagementSection } from "./components/user-management";
import { AICredentialsSection } from "./components/ai-credentials";
import { BrandingManagementSection } from "./components/branding-management";
import { CreditsManagementSection } from "./components/credits-management";
import { SubscriptionsManagementSection } from "./components/subscriptions-management";
import { BestPracticesSection } from "./components/best-practices";
import { CommonWorkflowsSection } from "./components/common-workflows";
import { QuickReferenceSection } from "./components/quick-reference";

export const metadata: Metadata = {
  title: "Admin Section Guide",
  description:
    "Complete guide for agency owners to manage Fusion Calling: client management, user management, AI provider configuration, branding, credits, subscriptions, and best practices.",
  alternates: {
    canonical: "/docs/admin-section",
  },
};

const navItems = [
  { id: "introduction", label: "Introduction to Admin Section" },
  { id: "client-management", label: "Client Management" },
  { id: "user-management", label: "User Management" },
  { id: "ai-provider", label: "AI Provider Configuration" },
  { id: "branding", label: "Branding Management" },
  { id: "credits", label: "Credits Management" },
  { id: "subscriptions", label: "Subscriptions Management" },
  { id: "best-practices", label: "Best Practices" },
  { id: "workflows", label: "Common Workflows" },
  { id: "quick-ref", label: "Quick Reference" },
];

const breadcrumbs = [
  { label: "Admin Section", href: "/docs/admin-section" },
  { label: "Guide" },
];

export default function AdminSectionPage() {
  return (
    <>
      <Script
        id="admin-section-schema"
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
                    name: "Admin Section",
                    item: "https://www.fusioncalling.com/docs/admin-section",
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": "https://www.fusioncalling.com/docs/admin-section#howto",
                name: "How to Manage Fusion Calling Admin Section",
                description:
                  "Complete guide for agency owners to manage Fusion Calling: client management, user management, AI provider configuration, branding, credits, subscriptions, and best practices.",
                step: [
                  {
                    "@type": "HowToStep",
                    name: "Manage Clients",
                    text: "Add, edit, and manage client accounts from the admin dashboard.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Configure Users",
                    text: "Create and manage user accounts with appropriate permissions.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Set Up AI Providers",
                    text: "Configure AI credentials for Retell, Vapi, or other voice providers.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Customize Branding",
                    text: "Apply your agency's branding to the platform.",
                  },
                  {
                    "@type": "HowToStep",
                    name: "Manage Credits and Subscriptions",
                    text: "Monitor and allocate credits, and manage subscription plans.",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.fusioncalling.com/docs/admin-section#webpage",
                url: "https://www.fusioncalling.com/docs/admin-section",
                name: "Admin Section Guide",
                description:
                  "Complete guide for agency owners to manage Fusion Calling: client management, user management, AI provider configuration, branding, credits, subscriptions, and best practices.",
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
              title="Admin Section Guide"
              description="A complete guide for agency owners to manage their Fusion Calling platform. Learn how to navigate the admin section, manage clients, configure AI providers, handle subscriptions, and more."
              difficulty="intermediate"
            />

            {/* Sections */}
            <IntroductionSection />
            <ClientManagementSection />
            <UserManagementSection />
            <AICredentialsSection />
            <BrandingManagementSection />
            <CreditsManagementSection />
            <SubscriptionsManagementSection />
            <BestPracticesSection />
            <CommonWorkflowsSection />
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
