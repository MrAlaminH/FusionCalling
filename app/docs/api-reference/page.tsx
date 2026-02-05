import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import ExternalCalendarAPI from "./components/external-calendar-api";
import ExternalLeadsAPI from "./components/external-leads-api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference - Fusion Calling",
  description:
    "Complete API documentation for Fusion Calling: External Calendar API and External Leads API with authentication, endpoints, and code examples.",
  alternates: {
    canonical: "/docs/api-reference",
  },
};

const navItems = [
  {
    id: "external-calendar-api",
    label: "External Calendar API",
    isSection: true,
    children: [
      { id: "calendar-overview", label: "Overview" },
      { id: "calendar-authentication", label: "Authentication" },
      {
        id: "calendar-endpoints",
        label: "Endpoints",
        children: [
          { id: "calendar-list-events", label: "List Events" },
          { id: "calendar-get-event", label: "Get Event" },
          { id: "calendar-create-event", label: "Create Event" },
          { id: "calendar-update-event", label: "Update Event" },
          { id: "calendar-delete-event", label: "Delete Event" },
        ],
      },
      { id: "calendar-rate-limiting", label: "Rate Limiting" },
    ],
  },
  {
    id: "external-leads-api",
    label: "External Leads API",
    isSection: true,
    children: [
      { id: "leads-overview", label: "Overview" },
      { id: "leads-quick-start", label: "Quick Start" },
      { id: "leads-authentication", label: "Authentication" },
      {
        id: "leads-endpoints",
        label: "Endpoints",
        children: [
          { id: "leads-create-single", label: "Create Single Lead" },
          { id: "leads-create-batch", label: "Create Batch Leads" },
        ],
      },
      { id: "leads-data-models", label: "Data Models" },
      { id: "leads-rate-limiting", label: "Rate Limiting" },
      {
        id: "leads-integrations",
        label: "Platform Integrations",
        children: [
          { id: "leads-gohighlevel", label: "GoHighLevel" },
          { id: "leads-n8n", label: "n8n" },
          { id: "leads-web-forms", label: "Web Forms" },
        ],
      },
      { id: "leads-code-examples", label: "Code Examples" },
      { id: "leads-best-practices", label: "Best Practices" },
      { id: "leads-troubleshooting", label: "Troubleshooting" },
      { id: "leads-faq", label: "FAQ" },
    ],
  },
];

const breadcrumbs = [
  { label: "Documentation", href: "/docs" },
  { label: "API Reference" },
];

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />

        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbs} />

            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                API Reference
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Complete documentation for Fusion Calling APIs. Integrate
                calendar events and lead management into your applications.
              </p>
            </div>

            {/* External Calendar API Section */}
            <div id="external-calendar-api" className="mb-20 scroll-mt-24">
              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  📅 External Calendar API
                </h2>
                <p className="text-gray-400">
                  Manage calendar events programmatically with full CRUD
                  operations
                </p>
              </div>
              <ExternalCalendarAPI />
            </div>

            {/* Divider */}
            <div className="my-20 border-t border-gray-800"></div>

            {/* External Leads API Section */}
            <div id="external-leads-api" className="mb-20 scroll-mt-24">
              <div className="border-l-4 border-blue-500 pl-6 mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  👥 External Leads API
                </h2>
                <p className="text-gray-400">
                  Automatically send leads from your favorite tools to Fusion
                  Call
                </p>
              </div>
              <ExternalLeadsAPI />
            </div>

            {/* Support Section */}
            <section className="mb-16 scroll-mt-24 mt-20">
              <h2 className="text-3xl font-bold mb-6 text-white">Support</h2>
              <p className="text-gray-300 mb-4">
                For API support, please contact:
              </p>
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:hello@fusioncalling.com"
                    className="text-orange-400 hover:text-orange-300"
                  >
                    hello@fusioncalling.com
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  <strong className="text-white">Documentation:</strong> Check
                  our docs folder for additional resources
                </p>
              </div>
            </section>

            {/* Changelog */}
            <section className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">Changelog</h2>
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    External Leads API - Version 1.0
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Initial API release</li>
                    <li>Support for single and batch lead creation</li>
                    <li>Platform integrations (GoHighLevel, n8n, Web Forms)</li>
                    <li>Rate limiting: 100 requests per minute</li>
                    <li>Custom fields and tags support</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-4">
                    <em>Released: February 2026</em>
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    External Calendar API - Version 1.0
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Initial API release</li>
                    <li>Support for CRUD operations on calendar events</li>
                    <li>Flexible datetime format support</li>
                    <li>API key authentication</li>
                    <li>Account-scoped data access</li>
                    <li>Rate limiting: 12 requests per minute</li>
                  </ul>
                  <p className="text-gray-400 text-sm mt-4">
                    <em>Released: December 2025</em>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <OnThisPage />
      </div>
    </div>
  );
}
