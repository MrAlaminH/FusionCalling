import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import SectionHeader from "@/components/docs/section-header";
import type { Metadata } from "next";
import { OverviewSection } from "./components/overview";
import { GettingStartedSection } from "./components/getting-started";
import { TwilioSetupSection } from "./components/twilio-setup";
import { InboundSetupSection } from "./components/inbound-setup";
import { MessagesInboxSection } from "./components/messages-inbox";
import { SmsCampaignsSection } from "./components/sms-campaigns";
import { QuickReferenceSection } from "./components/quick-reference";
import { FaqSection } from "./components/faq";
import { ComplianceSection, GettingHelpSection } from "./components/compliance";

export const metadata: Metadata = {
  title: "SMS & Messages User Guide",
  description:
    "Complete guide to SMS and messaging in Fusion Call: send texts, manage conversations, set up Twilio, create automated SMS campaigns, and handle inbound replies.",
  alternates: {
    canonical: "/docs/sms-messaging",
  },
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "before-you-start", label: "Before You Start" },
  { id: "connect-twilio", label: "Connect Twilio" },
  { id: "receive-inbound-texts", label: "Receive Inbound Texts" },
  { id: "using-messages-inbox", label: "Using Messages Inbox" },
  { id: "sms-campaigns", label: "SMS Campaigns" },
  {
    id: "campaigns-sub",
    label: "Campaign Steps",
    children: [
      { id: "create-campaign", label: "Create Campaign" },
      { id: "add-leads", label: "Add Leads" },
      { id: "configure-sms", label: "Configure SMS Settings" },
      { id: "start-campaign", label: "Start Campaign" },
      { id: "auto-sms", label: "Turn on Auto SMS" },
      { id: "watch-progress", label: "Watch Progress" },
    ],
  },
  { id: "quick-reference", label: "Quick Reference" },
  { id: "common-questions", label: "Common Questions" },
  { id: "important-rules", label: "Important Rules" },
  { id: "getting-help", label: "Getting Help" },
];

const breadcrumbs = [
  { label: "SMS & Messages", href: "/docs/sms-messaging" },
  { label: "User Guide" },
];

export default function SmsMessagingDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />

        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbs} />

            <SectionHeader
              title="SMS & Messages User Guide"
              description="This guide is for everyday users of Fusion Call. You do not need to be technical. Learn how to send texts, manage conversations, set up Twilio integration, create automated SMS campaigns, and handle inbound replies. Follow the steps in order the first time you set up texting."
              difficulty="beginner"
            />

            {/* All Sections Imported as Components */}
            <OverviewSection />
            <GettingStartedSection />
            <TwilioSetupSection />
            <InboundSetupSection />
            <MessagesInboxSection />
            <SmsCampaignsSection />
            <QuickReferenceSection />
            <FaqSection />
            <ComplianceSection />
            <GettingHelpSection />
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <OnThisPage />
      </div>
    </div>
  );
}
