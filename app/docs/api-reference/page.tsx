import type { Metadata } from "next";
import ApiReferenceShell from "./api-reference-shell";
import ApiHero from "./sections/api-hero";
import QuickStartSection from "./sections/quick-start";
import CalendarApiSection from "./sections/calendar-api";
import LeadsApiSection from "./sections/leads-api";
import IntegrationGuidesSection from "./sections/integration-guides";
import ReferenceSection from "./sections/reference";
import DocFooter from "@/components/docs/doc-footer";

export const metadata: Metadata = {
  title: "API Reference - Fusion Calling",
  description:
    "Complete API documentation for Fusion Calling: Calendar API, Leads API, authentication, endpoints, and integration guides.",
  alternates: {
    canonical: "/docs/api-reference",
  },
};

const navItems = [
  {
    id: "quick-start",
    label: "Quick Start",
    isSection: true,
    children: [
      { id: "authentication", label: "Authentication" },
      { id: "your-first-request", label: "Your First Request" },
    ],
  },
  {
    id: "calendar-api",
    label: "Calendar API",
    isSection: true,
    children: [
      { id: "calendar-overview", label: "Overview" },
      { id: "calendar-endpoints", label: "Endpoints" },
      { id: "cal-list-events", label: "• List Events" },
      { id: "cal-get-event", label: "• Get Event" },
      { id: "cal-create-event", label: "• Create Event" },
      { id: "cal-update-event", label: "• Update Event" },
      { id: "cal-delete-event", label: "• Delete Event" },
      { id: "cal-datetime-formats", label: "Datetime Formats" },
      { id: "cal-video-conferencing", label: "Video Conferencing" },
      { id: "cal-boolean-fields", label: "Boolean Fields" },
      { id: "cal-attendees", label: "Attendees" },
      { id: "cal-data-models", label: "Data Model" },
    ],
  },
  {
    id: "leads-api",
    label: "Leads API",
    isSection: true,
    children: [
      { id: "leads-overview", label: "Overview" },
      { id: "leads-fields", label: "Fields & Default Feed" },
      { id: "leads-endpoints", label: "Endpoints" },
      { id: "leads-create", label: "• Create Lead" },
      { id: "leads-create-batch", label: "• Batch Create" },
      { id: "leads-get-by-phone", label: "• Get by Phone" },
      { id: "leads-list", label: "• List Leads" },
      { id: "leads-get-by-id", label: "• Get by ID" },
      { id: "leads-update", label: "• Update Lead" },
      { id: "leads-faq", label: "FAQ" },
    ],
  },
  {
    id: "integration-guides",
    label: "Integration Guides",
    isSection: true,
    children: [
      { id: "gohighlevel", label: "GoHighLevel" },
      { id: "n8n", label: "n8n" },
      { id: "zapier", label: "Zapier" },
      { id: "web-forms", label: "Web Forms" },
    ],
  },
  {
    id: "reference",
    label: "Reference",
    isSection: true,
    children: [
      { id: "error-codes", label: "Error Codes" },
      { id: "rate-limiting", label: "Rate Limiting" },
      { id: "best-practices", label: "Best Practices" },
      { id: "changelog", label: "Changelog" },
      { id: "support", label: "Support" },
    ],
  },
];

const breadcrumbs = [
  { label: "Documentation", href: "/docs" },
  { label: "API Reference" },
];

export default function ApiReferencePage() {
  return (
    <ApiReferenceShell navItems={navItems} breadcrumbs={breadcrumbs}>
      <ApiHero />
      <QuickStartSection />
      <CalendarApiSection />
      <LeadsApiSection />
      <IntegrationGuidesSection />
      <ReferenceSection />
      <DocFooter
        prev={{ id: "quick-start", label: "Quick Start" }}
        next={{ id: "leads-api", label: "Leads API" }}
      />
    </ApiReferenceShell>
  );
}
