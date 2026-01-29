import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import SectionHeader from "@/components/docs/section-header";
import type { Metadata } from "next";
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
  );
}
