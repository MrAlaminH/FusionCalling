import SidebarNav from "@/components/docs/sidebar-nav";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import ApiAuthentication from "./components/api-authentication";
import ApiRateLimiting from "./components/api-rate-limiting";
import Callout from "@/components/docs/callout";
import ExternalLeadsGuide from "./components/external-leads-guide";
import CodeBlock from "@/components/docs/code-block";
import SectionHeader from "@/components/docs/section-header";
import CodeTabs from "@/components/docs/code-tabs";
import type { Metadata } from "next";

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
      { id: "get-started", label: "Get Started" },
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
      { id: "calendar-list-events", label: "• List Events" },
      { id: "calendar-get-event", label: "• Get Event" },
      { id: "calendar-create-event", label: "• Create Event" },
      { id: "calendar-update-event", label: "• Update Event" },
      { id: "calendar-delete-event", label: "• Delete Event" },
      { id: "calendar-data-models", label: "Data Models" },
      { id: "calendar-examples", label: "Code Examples" },
    ],
  },
  {
    id: "leads-api",
    label: "Leads API",
    isSection: true,
    children: [
      { id: "quick-start", label: "Quick Start" },
      { id: "getting-api-key", label: "Getting API Key" },
      { id: "api-basics", label: "API Basics" },
      { id: "create-lead", label: "Create Lead" },
      { id: "read-leads", label: "Read Leads" },
      { id: "get-lead-by-id", label: "• Get Lead by ID" },
      { id: "list-leads", label: "• List All Leads" },
      { id: "update-lead", label: "Update Lead" },
      { id: "platform-integration-guides", label: "Platform Integration Guides" },
      { id: "error-handling", label: "Error Handling" },
      { id: "faq", label: "FAQ" },
      { id: "changelog", label: "Changelog" },
    ],
  },
  {
    id: "integration-guides",
    label: "Integration Guides",
    isSection: true,
    children: [
      { id: "web-forms", label: "Web Forms" },
      { id: "gohighlevel", label: "GoHighLevel" },
      { id: "n8n", label: "n8n" },
      { id: "zapier", label: "Zapier" },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <Breadcrumbs items={breadcrumbs} />

            {/* Page Header */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                API Reference
              </h1>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Complete documentation for Fusion Calling APIs. Integrate calendar events
                and lead management into your applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <a
                  href="#quick-start"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Started
                </a>
                <a
                  href="#calendar-api"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  View APIs
                </a>
              </div>

              <Callout type="info">
                <strong>New to APIs?</strong> Start with the Quick Start section below, then
                explore the Calendar API and Leads API documentation.
              </Callout>
            </div>

            {/* ========================================
                 QUICK START SECTION
             ======================================== */}
            <section id="quick-start" className="mb-12 sm:mb-20 scroll-mt-24">
              <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Quick Start</h2>
                <p className="text-gray-400 text-sm sm:text-base">Get started with Fusion Calling APIs in 5 minutes</p>
              </div>

              {/* Get Started */}
              <div id="get-started" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Get Started</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Beginner Path */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 hover:border-orange-500 transition-colors">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Beginner</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      New to APIs? Learn the basics with step-by-step tutorials.
                    </p>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      <li>✅ Learn API fundamentals</li>
                      <li>✅ Make your first API call</li>
                      <li>✅ Understand authentication</li>
                    </ul>
                    <a
                      href="#authentication"
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
                    >
                      Start Tutorial
                    </a>
                  </div>

                  {/* Integrator Path */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 hover:border-blue-500 transition-colors">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Integrator</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Connect your existing tools quickly with ready-to-use guides.
                    </p>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      <li>✅ Platform-specific guides</li>
                      <li>✅ Ready-to-use templates</li>
                      <li>✅ Quick setup instructions</li>
                    </ul>
                    <a
                      href="#integration-guides"
                      className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
                    >
                      View Guides
                    </a>
                  </div>

                  {/* Developer Path */}
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 hover:border-purple-500 transition-colors">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Developer</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Deep dive into API capabilities with complete reference.
                    </p>
                    <ul className="text-gray-300 text-xs sm:text-sm space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      <li>✅ Complete endpoint reference</li>
                      <li>✅ Advanced patterns</li>
                      <li>✅ Best practices</li>
                    </ul>
                    <a
                      href="#reference"
                      className="block w-full bg-purple-500 hover:bg-purple-600 text-white text-center px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors text-xs sm:text-sm"
                    >
                      View Reference
                    </a>
                  </div>
                </div>
              </div>

              {/* Authentication */}
              <div id="authentication" className="mb-8 sm:mb-12 scroll-mt-24">
                <ApiAuthentication />
              </div>

              {/* Your First Request */}
              <div id="your-first-request" className="scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Your First Request</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Make your first API call to test your authentication and understand the
                  response format.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">
                  Step 1: Test Your API Key
                </h4>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  List your calendar events to verify everything works:
                </p>

                <CodeBlock
                  code={`curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer YOUR_API_KEY_HERE"`}
                  language="bash"
                />

                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 mt-6 sm:mt-8 text-white">
                  Step 2: Create Your First Event
                </h4>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Create a simple calendar event with just the required fields:
                </p>

                <CodeBlock
                  code={`curl -X POST "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "My First API Event",
    "start_time": "2025-12-15T14:30:00",
    "end_time": "2025-12-15T16:00:00"
  }'`}
                  language="bash"
                />

                <Callout type="success" className="mt-4 sm:mt-6">
                  <strong>Congratulations!</strong> You&apos;ve made your first API call. The
                  response will include the event ID and other details.
                </Callout>
              </div>
            </section>

            {/* ========================================
                  CALENDAR API SECTION
             ======================================== */}
            <section id="calendar-api" className="mb-12 sm:mb-20 scroll-mt-24">
              <div className="border-l-4 border-orange-500 pl-4 sm:pl-6 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">📅 Calendar API</h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Manage calendar events programmatically with full CRUD operations
                </p>
              </div>

              {/* Calendar Overview */}
              <div id="calendar-overview" className="mb-8 sm:mb-12 scroll-mt-24">
                <SectionHeader
                  title="Calendar API Overview"
                  description="The Fusion Calling Calendar API allows you to programmatically manage calendar events using API key authentication. This RESTful API provides full CRUD (Create, Read, Update, Delete) operations for calendar events."
                  difficulty="intermediate"
                />

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-gray-400 sm:w-32 text-xs sm:text-sm">Base URL:</span>
                      <code className="text-orange-400 bg-black/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm break-all">
                        https://app.fusioncalling.com/api/calendar/external/v1
                      </code>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-gray-400 sm:w-32 text-xs sm:text-sm">API Version:</span>
                      <code className="text-orange-400 bg-black/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
                        v1.0
                      </code>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-gray-400 sm:w-32 text-xs sm:text-sm">Rate Limit:</span>
                      <code className="text-orange-400 bg-black/50 px-2 sm:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm">
                        12 requests/minute
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar Endpoints */}
              <div id="calendar-endpoints" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Endpoints</h3>

                {/* List Events */}
                <div id="calendar-list-events" className="scroll-mt-24">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 my-4 sm:my-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        GET
                      </span>
                      <div className="flex-1 min-w-0">
                        <code className="text-orange-400 font-mono text-sm sm:text-base break-all">
                          /api/calendar/external/v1/events
                        </code>
                        <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">
                          Retrieve a list of events, optionally filtered by date range.
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Query Parameters</h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <table className="w-full border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-gray-800">
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Parameter</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Type</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Required</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-800/50">
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">from</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">string</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-400">No</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Filter from date</td>
                            </tr>
                            <tr>
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">to</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">string</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-400">No</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Filter until date</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Example Request</h4>
                      <CodeBlock
                        code={`curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events?from=2025-12-01&to=2025-12-31" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                        language="bash"
                      />
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Response</h4>
                      <CodeBlock
                        code={`{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Team Meeting",
      "start_time": "2025-12-15T14:30:00.000Z",
      "end_time": "2025-12-15T16:00:00.000Z",
      "all_day": false,
      "source": "local"
    }
  ]
}`}
                        language="json"
                      />
                    </div>
                  </div>
                </div>

                {/* Get Event */}
                <div id="calendar-get-event" className="scroll-mt-24">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 my-4 sm:my-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        GET
                      </span>
                      <div className="flex-1 min-w-0">
                        <code className="text-orange-400 font-mono text-sm sm:text-base break-all">
                          /api/calendar/external/v1/events/{'{id}'}
                        </code>
                        <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">Retrieve a single event by its ID.</p>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Path Parameters</h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <table className="w-full border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-gray-800">
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Parameter</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Type</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Required</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">id</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">UUID</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-red-400">Yes</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Event UUID</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <CodeBlock
                      code={`curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                      language="bash"
                    />
                  </div>
                </div>

                {/* Create Event */}
                <div id="calendar-create-event" className="scroll-mt-24">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 my-4 sm:my-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        POST
                      </span>
                      <div className="flex-1 min-w-0">
                        <code className="text-orange-400 font-mono text-sm sm:text-base break-all">
                          /api/calendar/external/v1/events
                        </code>
                        <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">Create a new calendar event.</p>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Request Body</h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <table className="w-full border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="border-b border-gray-800">
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Field</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Type</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Required</th>
                              <th className="text-left py-1 sm:py-2 px-2 sm:px-3 text-gray-400">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-800/50">
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">title</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">string</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-red-400">Yes</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Event title (2-255 chars)</td>
                            </tr>
                            <tr className="border-b border-gray-800/50">
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">start_time</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">string</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-red-400">Yes</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Event start time</td>
                            </tr>
                            <tr className="border-b border-gray-800/50">
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">end_time</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">string</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-red-400">Yes</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Event end time</td>
                            </tr>
                            <tr>
                              <td className="py-1 sm:py-2 px-2 sm:px-3">
                                <code className="text-orange-400">description</code>
                              </td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">string</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-400">No</td>
                              <td className="py-1 sm:py-2 px-2 sm:px-3 text-gray-300">Event description</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <CodeBlock
                      code={`curl -X POST "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Meeting with Client",
    "start_time": "2025-12-15T14:30:00",
    "end_time": "2025-12-15T16:00:00"
  }'`}
                      language="bash"
                    />
                  </div>
                </div>

                {/* Update Event */}
                <div id="calendar-update-event" className="scroll-mt-24">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 my-4 sm:my-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="bg-yellow-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        PATCH
                      </span>
                      <div className="flex-1 min-w-0">
                        <code className="text-orange-400 font-mono text-sm sm:text-base break-all">
                          /api/calendar/external/v1/events/{'{id}'}
                        </code>
                        <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">Update an existing event.</p>
                      </div>
                    </div>

                    <CodeBlock
                      code={`curl -X PATCH "https://app.fusioncalling.com/api/calendar/external/v1/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Updated Meeting Title"
  }'`}
                      language="bash"
                    />
                  </div>
                </div>

                {/* Delete Event */}
                <div id="calendar-delete-event" className="scroll-mt-24">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 my-4 sm:my-6 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold w-fit">
                        DELETE
                      </span>
                      <div className="flex-1 min-w-0">
                        <code className="text-orange-400 font-mono text-sm sm:text-base break-all">
                          /api/calendar/external/v1/events/{'{id}'}
                        </code>
                        <p className="text-gray-300 mt-1 sm:mt-2 text-xs sm:text-sm">Delete an event by its ID.</p>
                      </div>
                    </div>

                    <CodeBlock
                      code={`curl -X DELETE "https://app.fusioncalling.com/api/calendar/external/v1/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                      language="bash"
                    />
                  </div>
                </div>
              </div>

              {/* Calendar Data Models */}
              <div id="calendar-data-models" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Data Models</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">The event object contains all information about a calendar event.</p>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                  <CodeBlock
                    code={`{
  "id": "uuid",                    // Auto-generated, unique identifier
  "account_id": "uuid",            // Your account ID
  "user_id": "uuid",               // API key owner's user ID
  "title": "string",               // Event title (2-255 characters, required)
  "description": "string",         // Event description (optional, max 500 chars)
  "start_time": "ISO 8601",       // Event start time (required)
  "end_time": "ISO 8601",          // Event end time (required, must be after start)
  "all_day": boolean,              // Is this an all-day event? (default: false)
  "google_meet_enabled": boolean,  // Enable Google Meet? (default: false)
  "meet_link": "string",           // Generated Google Meet link (response only)
  "attendees": [                   // Event attendees (optional, max 50)
    { "email": "user@example.com" }
  ],
  "source": "local",               // Event source: "local" or "google"
  "created_at": "ISO 8601",       // When event was created
  "updated_at": "ISO 8601"        // When event was last updated
}`}
                    language="json"
                  />
                </div>
              </div>

              {/* Calendar Examples */}
              <div id="calendar-examples" className="scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Code Examples</h3>
                <CodeTabs
                  examples={[
                    {
                      language: "javascript",
                      label: "JavaScript",
                      code: `const response = await fetch('https://app.fusioncalling.com/api/calendar/external/v1/events', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const events = await response.json();`,
                    },
                    {
                      language: "python",
                      label: "Python",
                      code: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
}

response = requests.get(
    'https://app.fusioncalling.com/api/calendar/external/v1/events',
    headers=headers
)
events = response.json()`,
                    },
                  ]}
                />
              </div>
            </section>

            {/* ========================================
                 LEADS API SECTION
             ======================================== */}
            <section id="leads-api" className="mb-20 scroll-mt-24">
              <ExternalLeadsGuide />
            </section>

            {/* ========================================
                  INTEGRATION GUIDES SECTION
             ======================================== */}
            <section id="integration-guides" className="mb-12 sm:mb-20 scroll-mt-24">
              <div className="border-l-4 border-purple-500 pl-4 sm:pl-6 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Integration Guides</h2>
                <p className="text-gray-400 text-sm sm:text-base">Connect Fusion Calling with your favorite tools</p>
              </div>

              {/* Web Forms */}
              <div id="web-forms" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Web Form Integration</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Capture leads from your website forms with server-side processing.
                </p>

                <Callout type="warning" className="mb-4 sm:mb-6">
                  <strong>Security Warning:</strong> Never expose your API key in client-side
                  JavaScript. Always use server-side form processing.
                </Callout>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                  <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">PHP Example</h4>
                  <CodeBlock
                    code={`<?php
$api_key = 'YOUR_API_KEY';
$url = 'https://app.fusioncalling.com/api/leads/external/v1/leads';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$data = array(
    'name' => $name,
    'phone' => $phone,
    'email' => $email
);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo json_encode(array('success' => true));
?>`}
                    language="php"
                  />
                </div>
              </div>

              {/* GoHighLevel */}
              <div id="gohighlevel" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">GoHighLevel Integration</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Automatically send leads from GoHighLevel to Fusion Calling.
                </p>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                  <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Setup Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">
                    <li>
                      Go to GoHighLevel <strong>Settings</strong> →{" "}
                      <strong>Automation</strong> → <strong>Webhooks</strong>
                    </li>
                    <li>Click <strong>&quot;Add Webhook&quot;</strong></li>
                    <li>
                      Set URL to:{" "}
                      <code className="text-orange-400">
                        https://app.fusioncalling.com/api/leads/external/v1/leads
                      </code>
                    </li>
                    <li>
                      Method: POST with Authorization header:{" "}
                      <code className="text-orange-400">Bearer YOUR_API_KEY</code>
                    </li>
                  </ol>

                  <Callout type="info">
                    <strong>Tip:</strong> Map GoHighLevel contact fields to Fusion Calling
                    lead fields in the webhook configuration.
                  </Callout>
                </div>
              </div>

              {/* n8n */}
              <div id="n8n" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">n8n Integration</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Use n8n to connect any system with Fusion Calling using visual workflows.
                </p>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                  <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">HTTP Request Node Setup:</h4>
                  <ul className="space-y-2 text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6">
                    <li>
                      <strong>Method:</strong> POST
                    </li>
                    <li>
                      <strong>URL:</strong>{" "}
                      <code className="text-orange-400">
                        https://app.fusioncalling.com/api/leads/external/v1/leads
                      </code>
                    </li>
                    <li>
                      <strong>Authentication:</strong> Generic Credential Type with Header
                      Name <code className="text-orange-400">Authorization</code> and Value{" "}
                      <code className="text-orange-400">Bearer YOUR_API_KEY</code>
                    </li>
                    <li>
                      <strong>Body Content Type:</strong> JSON
                    </li>
                  </ul>

                  <Callout type="info">
                    <strong>Boolean Fields:</strong> Use JSON mode to ensure boolean fields
                    are not quoted as strings.
                  </Callout>
                </div>
              </div>

              {/* Zapier */}
              <div id="zapier" className="scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Zapier Integration</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Connect Fusion Calling with 5,000+ apps using Zapier automation.
                </p>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                  <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Popular Zaps:</h4>
                  <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                    <li>• Facebook Lead Ads → Fusion Calling</li>
                    <li>• Google Sheets → Fusion Calling</li>
                    <li>• Typeform → Fusion Calling</li>
                    <li>• HubSpot → Fusion Calling</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ========================================
                  REFERENCE SECTION
             ======================================== */}
            <section id="reference" className="mb-12 sm:mb-20 scroll-mt-24">
              <div className="border-l-4 border-gray-500 pl-4 sm:pl-6 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Reference</h2>
                <p className="text-gray-400 text-sm sm:text-base">Error codes, rate limiting, and best practices</p>
              </div>

              {/* Error Codes */}
              <div id="error-codes" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Error Codes</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Understanding error codes helps you handle API responses correctly.
                </p>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400">Code</th>
                          <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400">Description</th>
                          <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400">Solution</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <code className="text-orange-400">400</code>
                          </td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Bad Request</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-400 text-xs">
                            Check request format
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <code className="text-orange-400">401</code>
                          </td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Unauthorized</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-400 text-xs">
                            Verify API key
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <code className="text-orange-400">404</code>
                          </td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Not Found</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-400 text-xs">
                            Verify resource exists
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <code className="text-orange-400">409</code>
                          </td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Conflict</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-400 text-xs">
                            Resource already exists
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <code className="text-orange-400">429</code>
                          </td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Too Many Requests</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-400 text-xs">
                            Implement retry with backoff
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 sm:py-3 px-2 sm:px-4">
                            <code className="text-orange-400">500</code>
                          </td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Server Error</td>
                          <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-400 text-xs">
                            Retry with backoff
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Rate Limiting */}
              <div id="rate-limiting" className="mb-8 sm:mb-12 scroll-mt-24">
                <ApiRateLimiting />
              </div>

              {/* Best Practices */}
              <div id="best-practices" className="mb-8 sm:mb-12 scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Best Practices</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Security</h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                      <li>✅ Store API keys in environment variables</li>
                      <li>✅ Use HTTPS for all API requests</li>
                      <li>✅ Implement request validation</li>
                      <li>✅ Rotate API keys regularly</li>
                      <li>❌ Never expose API keys in client-side code</li>
                      <li>❌ Never commit API keys to version control</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Performance</h4>
                    <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                      <li>✅ Use batch operations for multiple items</li>
                      <li>✅ Cache responses where appropriate</li>
                      <li>✅ Implement exponential backoff for rate limits</li>
                      <li>✅ Use pagination for large datasets</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Changelog */}
              <div id="changelog" className="scroll-mt-24">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Changelog</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-white">Leads API v1.2</h4>
                      <span className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm w-fit">
                        February 2026
                      </span>
                    </div>
                    <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                      <li>• Added GET endpoints for reading leads</li>
                      <li>• Added PATCH endpoint for updating leads</li>
                      <li>• Introduced Default Feed campaign routing</li>
                      <li>• Enhanced batch insert atomicity</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-white">Calendar API v1.0</h4>
                      <span className="bg-orange-500/20 text-orange-400 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm w-fit">
                        December 2025
                      </span>
                    </div>
                    <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                      <li>• Initial API release with full CRUD operations</li>
                      <li>• Support for flexible datetime formats</li>
                      <li>• Google Meet integration</li>
                      <li>• Automatic Google Calendar synchronization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section className="mb-8 sm:mb-16 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Support</h2>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">For API support, please contact:</p>
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
                <p className="text-gray-300 text-xs sm:text-sm">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:hello@fusioncalling.com"
                    className="text-orange-400 hover:text-orange-300"
                  >
                    hello@fusioncalling.com
                  </a>
                </p>
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
