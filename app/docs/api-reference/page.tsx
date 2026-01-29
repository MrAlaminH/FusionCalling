import SidebarNav from "@/components/docs/sidebar-nav";
import EndpointCard from "@/components/docs/endpoint-card";
import CodeBlock from "@/components/docs/code-block";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import OnThisPage from "@/components/docs/on-this-page";
import SectionHeader from "@/components/docs/section-header";
import CodeTabs from "@/components/docs/code-tabs";
import Callout from "@/components/docs/callout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "External Calendar API Reference",
  description:
    "Fusion Calling External Calendar API documentation: authentication, endpoints, data models, rate limits, and code examples.",
  alternates: {
    canonical: "/docs/api-reference",
  },
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "authentication", label: "Authentication" },
  {
    id: "endpoints",
    label: "Endpoints",
    children: [
      { id: "list-events", label: "List Events" },
      { id: "get-event", label: "Get Event" },
      { id: "create-event", label: "Create Event" },
      { id: "update-event", label: "Update Event" },
      { id: "delete-event", label: "Delete Event" },
    ],
  },
  { id: "data-models", label: "Data Models" },
  { id: "datetime-formats", label: "Datetime Formats" },
  { id: "error-handling", label: "Error Handling" },
  { id: "rate-limiting", label: "Rate Limiting" },
  { id: "code-examples", label: "Code Examples" },
  { id: "best-practices", label: "Best Practices" },
];

const breadcrumbs = [
  { label: "API Reference", href: "/docs/api-reference" },
  { label: "External Calendar API" },
];

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="flex relative">
        <SidebarNav items={navItems} />

        <main className="flex-1 lg:ml-64 w-full">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumbs items={breadcrumbs} />

            <SectionHeader
              title="External Calendar API Reference"
              description="The Fusion Calling External Calendar API allows you to programmatically manage calendar events using API key authentication. This RESTful API provides full CRUD (Create, Read, Update, Delete) operations for calendar events."
              difficulty="intermediate"
            />

            {/* Overview */}
            <section id="overview" className="mb-16 scroll-mt-24">
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 my-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 w-24">Base URL:</span>
                    <code className="text-orange-400 bg-black/50 px-3 py-1.5 rounded">
                      https://app.fusioncalling.com/api/calendar/external/v1
                    </code>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 w-24">API Version:</span>
                    <code className="text-orange-400 bg-black/50 px-3 py-1.5 rounded">
                      v1
                    </code>
                  </div>
                </div>
              </div>

              <Callout type="info">
                All API requests require authentication using an API key. See
                the Authentication section below for details.
              </Callout>
            </section>

            {/* Authentication */}
            <section id="authentication" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Authentication
              </h2>
              <p className="text-gray-300 mb-4">
                All API requests require authentication using an API key. The
                API key must be included in the{" "}
                <code className="text-orange-400">Authorization</code> header
                using the Bearer token format.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Getting Your API Key
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                <li>Log in to your Fusion Calling account</li>
                <li>Navigate to Settings → API Keys</li>
                <li>Generate a new API key or use an existing one</li>
                <li>
                  Copy the API key (it&apos;s only shown once when created)
                </li>
              </ol>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Using Your API Key
              </h3>
              <p className="text-gray-300 mb-4">
                Include the API key in the{" "}
                <code className="text-orange-400">Authorization</code> header of
                every request:
              </p>

              <CodeBlock
                code={`Authorization: Bearer your-api-key-here`}
                language="bash"
              />

              <p className="text-gray-300 mb-4 mt-4">Example:</p>

              <CodeTabs
                examples={[
                  {
                    language: "bash",
                    label: "cURL",
                    code: `curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer bf207bcf-c0de-4067-bd28-45728bd305aa"`,
                  },
                  {
                    language: "javascript",
                    label: "JavaScript",
                    code: `const response = await fetch('https://app.fusioncalling.com/api/calendar/external/v1/events', {
  headers: {
    'Authorization': 'Bearer bf207bcf-c0de-4067-bd28-45728bd305aa'
  }
});`,
                  },
                  {
                    language: "python",
                    label: "Python",
                    code: `import requests

headers = {
    'Authorization': 'Bearer bf207bcf-c0de-4067-bd28-45728bd305aa'
}

response = requests.get(
    'https://app.fusioncalling.com/api/calendar/external/v1/events',
    headers=headers
)`,
                  },
                ]}
              />
            </section>

            {/* Endpoints */}
            <section id="endpoints" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-8 text-white">Endpoints</h2>

              {/* List Events */}
              <div id="list-events" className="scroll-mt-24">
                <EndpointCard
                  method="GET"
                  path="/api/calendar/external/v1/events"
                  description="Retrieve a list of events, optionally filtered by date range."
                  authentication="Required"
                  queryParameters={[
                    {
                      name: "from",
                      type: "string",
                      required: false,
                      description:
                        "Filter events from this date (inclusive). Supports flexible datetime formats.",
                      example: "2025-12-01T00:00:00",
                    },
                    {
                      name: "to",
                      type: "string",
                      required: false,
                      description:
                        "Filter events until this date (inclusive). Supports flexible datetime formats.",
                      example: "2025-12-31T23:59:59",
                    },
                  ]}
                  requestExample={`curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events?from=2025-12-01T00:00:00&to=2025-12-31T23:59:59" \\
  -H "Authorization: Bearer your-api-key-here"`}
                  responseExample={`{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "account_id": "account-uuid-here",
      "user_id": "user-uuid-here",
      "title": "Team Meeting",
      "description": "Weekly team sync",
      "start_time": "2025-12-15T14:30:00.000Z",
      "end_time": "2025-12-15T16:00:00.000Z",
      "all_day": false,
      "source": "local",
      "created_at": "2025-12-10T10:00:00.000Z",
      "updated_at": "2025-12-10T10:00:00.000Z"
    }
  ]
}`}
                  statusCodes={[
                    { code: 200, description: "Success" },
                    { code: 401, description: "Invalid or missing API key" },
                    {
                      code: 400,
                      description: "Invalid date format in query parameters",
                    },
                    { code: 500, description: "Server error" },
                  ]}
                />
              </div>

              {/* Get Event */}
              <div id="get-event" className="scroll-mt-24">
                <EndpointCard
                  method="GET"
                  path="/api/calendar/external/v1/events/{id}"
                  description="Retrieve a single event by its ID."
                  authentication="Required"
                  pathParameters={[
                    {
                      name: "id",
                      type: "string (UUID)",
                      required: true,
                      description: "The unique identifier of the event",
                    },
                  ]}
                  requestExample={`curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer your-api-key-here"`}
                  responseExample={`{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "account_id": "account-uuid-here",
    "user_id": "user-uuid-here",
    "title": "Team Meeting",
    "description": "Weekly team sync",
    "start_time": "2025-12-15T14:30:00.000Z",
    "end_time": "2025-12-15T16:00:00.000Z",
    "all_day": false,
    "source": "local",
    "created_at": "2025-12-10T10:00:00.000Z",
    "updated_at": "2025-12-10T10:00:00.000Z"
  }
}`}
                  statusCodes={[
                    { code: 200, description: "Success" },
                    { code: 401, description: "Invalid or missing API key" },
                    {
                      code: 404,
                      description:
                        "Event not found or doesn't belong to your account",
                    },
                    { code: 500, description: "Server error" },
                  ]}
                />
              </div>

              {/* Create Event */}
              <div id="create-event" className="scroll-mt-24">
                <EndpointCard
                  method="POST"
                  path="/api/calendar/external/v1/events"
                  description="Create a new calendar event."
                  authentication="Required"
                  requestBody={[
                    {
                      name: "title",
                      type: "string",
                      required: true,
                      description: "Event title (1-255 characters)",
                      example: '"Team Meeting"',
                    },
                    {
                      name: "description",
                      type: "string",
                      required: false,
                      description: "Event description (max 500 characters)",
                      example: '"Weekly team sync"',
                    },
                    {
                      name: "start_time",
                      type: "string",
                      required: true,
                      description:
                        "Event start time (flexible datetime format)",
                      example: '"2025-12-15T14:30:00"',
                    },
                    {
                      name: "end_time",
                      type: "string",
                      required: true,
                      description: "Event end time (flexible datetime format)",
                      example: '"2025-12-15T16:00:00"',
                    },
                    {
                      name: "all_day",
                      type: "boolean",
                      required: false,
                      description:
                        "Whether the event is all-day (default: false)",
                      example: "true",
                    },
                  ]}
                  requestExample={`curl -X POST "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Client Meeting",
    "description": "Discuss project requirements",
    "start_time": "2025-12-20T14:30:00",
    "end_time": "2025-12-20T16:00:00",
    "all_day": false
  }'`}
                  responseExample={`{
  "success": true,
  "data": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "account_id": "account-uuid-here",
    "user_id": "user-uuid-here",
    "title": "Client Meeting",
    "description": "Discuss project requirements",
    "start_time": "2025-12-20T14:30:00.000Z",
    "end_time": "2025-12-20T16:00:00.000Z",
    "all_day": false,
    "source": "local",
    "created_at": "2025-12-11T10:00:00.000Z",
    "updated_at": "2025-12-11T10:00:00.000Z"
  }
}`}
                  statusCodes={[
                    { code: 201, description: "Event created successfully" },
                    {
                      code: 400,
                      description: "Validation error (see error details)",
                    },
                    { code: 401, description: "Invalid or missing API key" },
                    { code: 500, description: "Server error" },
                  ]}
                  validationErrors={`{
  "success": false,
  "error": "Validation failed",
  "details": {
    "start_time": ["Invalid datetime format..."],
    "end_time": ["Invalid datetime format..."],
    "title": ["Title is required"]
  }
}`}
                />
              </div>

              {/* Update Event */}
              <div id="update-event" className="scroll-mt-24">
                <EndpointCard
                  method="PATCH"
                  path="/api/calendar/external/v1/events/{id}"
                  description="Update an existing event. All fields are optional - only provided fields will be updated."
                  authentication="Required"
                  pathParameters={[
                    {
                      name: "id",
                      type: "string (UUID)",
                      required: true,
                      description: "The unique identifier of the event",
                    },
                  ]}
                  requestBody={[
                    {
                      name: "title",
                      type: "string",
                      required: false,
                      description: "Event title (1-255 characters)",
                      example: '"Updated Meeting Title"',
                    },
                    {
                      name: "description",
                      type: "string",
                      required: false,
                      description:
                        "Event description (max 500 characters). Use null to clear.",
                      example: '"Updated description"',
                    },
                    {
                      name: "start_time",
                      type: "string",
                      required: false,
                      description:
                        "Event start time (flexible datetime format)",
                      example: '"2025-12-15T15:00:00"',
                    },
                    {
                      name: "end_time",
                      type: "string",
                      required: false,
                      description: "Event end time (flexible datetime format)",
                      example: '"2025-12-15T17:00:00"',
                    },
                    {
                      name: "all_day",
                      type: "boolean",
                      required: false,
                      description: "Whether the event is all-day",
                      example: "true",
                    },
                  ]}
                  requestExample={`curl -X PATCH "https://app.fusioncalling.com/api/calendar/external/v1/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Updated Meeting Title",
    "description": "Updated description",
    "start_time": "2025-12-15T15:00:00",
    "end_time": "2025-12-15T17:00:00"
  }'`}
                  responseExample={`{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "account_id": "account-uuid-here",
    "user_id": "user-uuid-here",
    "title": "Updated Meeting Title",
    "description": "Updated description",
    "start_time": "2025-12-15T15:00:00.000Z",
    "end_time": "2025-12-15T17:00:00.000Z",
    "all_day": false,
    "source": "local",
    "created_at": "2025-12-10T10:00:00.000Z",
    "updated_at": "2025-12-11T11:30:00.000Z"
  }
}`}
                  statusCodes={[
                    { code: 200, description: "Event updated successfully" },
                    {
                      code: 400,
                      description: "Validation error or end_time <= start_time",
                    },
                    { code: 401, description: "Invalid or missing API key" },
                    {
                      code: 404,
                      description:
                        "Event not found or doesn't belong to your account",
                    },
                    { code: 500, description: "Server error" },
                  ]}
                />
              </div>

              {/* Delete Event */}
              <div id="delete-event" className="scroll-mt-24">
                <EndpointCard
                  method="DELETE"
                  path="/api/calendar/external/v1/events/{id}"
                  description="Delete an event by its ID."
                  authentication="Required"
                  pathParameters={[
                    {
                      name: "id",
                      type: "string (UUID)",
                      required: true,
                      description: "The unique identifier of the event",
                    },
                  ]}
                  requestExample={`curl -X DELETE "https://app.fusioncalling.com/api/calendar/external/v1/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer your-api-key-here"`}
                  responseExample={`{
  "success": true,
  "message": "Event deleted successfully"
}`}
                  statusCodes={[
                    { code: 200, description: "Event deleted successfully" },
                    { code: 401, description: "Invalid or missing API key" },
                    {
                      code: 404,
                      description:
                        "Event not found or doesn't belong to your account",
                    },
                    { code: 500, description: "Server error" },
                  ]}
                />
              </div>
            </section>

            {/* Data Models */}
            <section id="data-models" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Data Models
              </h2>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Event Object
              </h3>
              <CodeBlock
                code={`interface Event {
  id: string; // UUID
  account_id: string; // UUID - Account this event belongs to
  user_id: string; // UUID - User who created the event
  title: string; // 1-255 characters
  description: string | null; // Max 500 characters, nullable
  start_time: string; // ISO 8601 datetime (normalized)
  end_time: string; // ISO 8601 datetime (normalized)
  all_day: boolean; // Whether event is all-day
  source: string; // Source of event (e.g., "local")
  created_at: string; // ISO 8601 datetime
  updated_at: string; // ISO 8601 datetime
}`}
                language="typescript"
              />
            </section>

            {/* Datetime Formats */}
            <section id="datetime-formats" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Datetime Formats
              </h2>
              <p className="text-gray-300 mb-4">
                The API accepts{" "}
                <strong className="text-white">
                  flexible datetime formats
                </strong>{" "}
                and automatically normalizes them to ISO 8601 for storage.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Supported Formats
              </h3>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                  <h4 className="text-white font-semibold mb-2">
                    1. Simple Format (recommended):
                  </h4>
                  <CodeBlock code={`2025-12-15T14:30:00`} language="text" />
                  <p className="text-gray-400 text-sm mt-2">
                    No milliseconds/timezone (assumes UTC)
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                  <h4 className="text-white font-semibold mb-2">
                    2. ISO 8601 Without Milliseconds:
                  </h4>
                  <CodeBlock code={`2025-12-15T14:30:00Z`} language="text" />
                  <p className="text-gray-400 text-sm mt-2">
                    UTC timezone specified
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                  <h4 className="text-white font-semibold mb-2">
                    3. Full ISO 8601 (RFC 3339):
                  </h4>
                  <div className="space-y-2">
                    <CodeBlock
                      code={`2025-12-15T14:30:00.000Z`}
                      language="text"
                    />
                    <CodeBlock
                      code={`2025-12-15T14:30:00.123Z`}
                      language="text"
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    With milliseconds and fractional seconds
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                  <h4 className="text-white font-semibold mb-2">
                    4. With Timezone Offset:
                  </h4>
                  <div className="space-y-2">
                    <CodeBlock
                      code={`2025-12-15T14:30:00+05:30`}
                      language="text"
                    />
                    <CodeBlock
                      code={`2025-12-15T14:30:00-08:00`}
                      language="text"
                    />
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    IST and PST timezones
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                  <h4 className="text-white font-semibold mb-2">
                    5. Space Separator:
                  </h4>
                  <CodeBlock code={`2025-12-15 14:30:00`} language="text" />
                  <p className="text-gray-400 text-sm mt-2">
                    Space instead of T (assumes UTC)
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Normalization
              </h3>
              <p className="text-gray-300 mb-4">
                All datetime values are automatically normalized to ISO 8601
                format with milliseconds and UTC timezone:
              </p>
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-4">
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Input:</span>
                    <code className="ml-2 text-orange-400">
                      2025-12-15T14:30:00
                    </code>
                  </div>
                  <div>
                    <span className="text-gray-400">Stored:</span>
                    <code className="ml-2 text-orange-400">
                      2025-12-15T14:30:00.000Z
                    </code>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                Responses always return dates in normalized ISO 8601 format.
              </p>
            </section>

            {/* Error Handling */}
            <section id="error-handling" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Error Handling
              </h2>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Error Response Format
              </h3>
              <p className="text-gray-300 mb-4">
                All error responses follow this structure:
              </p>
              <CodeBlock
                code={`{
  "success": false,
  "error": "Error message",
  "details": {
    // Optional: Field-specific errors for validation
  }
}`}
                language="json"
              />

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                HTTP Status Codes
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-2 px-4 text-gray-400 font-semibold">
                        Code
                      </th>
                      <th className="text-left py-2 px-4 text-gray-400 font-semibold">
                        Meaning
                      </th>
                      <th className="text-left py-2 px-4 text-gray-400 font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-4">
                        <code className="text-orange-400">200</code>
                      </td>
                      <td className="py-2 px-4 text-gray-300">OK</td>
                      <td className="py-2 px-4 text-gray-300">
                        Request successful
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-4">
                        <code className="text-orange-400">201</code>
                      </td>
                      <td className="py-2 px-4 text-gray-300">Created</td>
                      <td className="py-2 px-4 text-gray-300">
                        Resource created successfully
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-4">
                        <code className="text-orange-400">400</code>
                      </td>
                      <td className="py-2 px-4 text-gray-300">Bad Request</td>
                      <td className="py-2 px-4 text-gray-300">
                        Validation error or invalid parameters
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-4">
                        <code className="text-orange-400">401</code>
                      </td>
                      <td className="py-2 px-4 text-gray-300">Unauthorized</td>
                      <td className="py-2 px-4 text-gray-300">
                        Invalid or missing API key
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-4">
                        <code className="text-orange-400">404</code>
                      </td>
                      <td className="py-2 px-4 text-gray-300">Not Found</td>
                      <td className="py-2 px-4 text-gray-300">
                        Resource not found or doesn&apos;t belong to your
                        account
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 px-4">
                        <code className="text-orange-400">500</code>
                      </td>
                      <td className="py-2 px-4 text-gray-300">
                        Internal Server Error
                      </td>
                      <td className="py-2 px-4 text-gray-300">Server error</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Common Errors
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h4 className="text-white font-semibold mb-3">
                    401 Unauthorized
                  </h4>
                  <CodeBlock
                    code={`{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`}
                    language="json"
                  />
                  <p className="text-gray-400 text-sm mt-3">
                    <strong>Solution:</strong> Check that your API key is
                    correct and included in the{" "}
                    <code className="text-orange-400">Authorization</code>{" "}
                    header.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h4 className="text-white font-semibold mb-3">
                    400 Validation Error
                  </h4>
                  <CodeBlock
                    code={`{
  "success": false,
  "error": "Validation failed",
  "details": {
    "start_time": ["Invalid datetime format. Supported formats: ..."],
    "title": ["Title is required"],
    "end_time": ["End time must be after start time"]
  }
}`}
                    language="json"
                  />
                  <p className="text-gray-400 text-sm mt-3">
                    <strong>Solution:</strong> Check the validation errors in
                    the <code className="text-orange-400">details</code> object
                    and correct your request.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h4 className="text-white font-semibold mb-3">
                    404 Not Found
                  </h4>
                  <CodeBlock
                    code={`{
  "error": "Event not found"
}`}
                    language="json"
                  />
                  <p className="text-gray-400 text-sm mt-3">
                    <strong>Solution:</strong> Verify the event ID is correct
                    and belongs to your account.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h4 className="text-white font-semibold mb-3">
                    429 Rate Limit Exceeded
                  </h4>
                  <CodeBlock
                    code={`{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Limit: 12 requests per minute.",
  "retryAfter": 45,
  "limit": 12,
  "remaining": 0
}`}
                    language="json"
                  />
                  <p className="text-gray-400 text-sm mt-3">
                    <strong>Solution:</strong> Wait for the duration specified
                    in <code className="text-orange-400">retryAfter</code> (in
                    seconds) before making another request. Check the{" "}
                    <code className="text-orange-400">X-RateLimit-Reset</code>{" "}
                    header to know when the rate limit window resets.
                  </p>
                </div>
              </div>
            </section>

            {/* Rate Limiting */}
            <section id="rate-limiting" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Rate Limiting
              </h2>
              <p className="text-gray-300 mb-4">
                The External Calendar API implements rate limiting to protect
                the service from abuse and ensure fair usage.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Rate Limit Details
              </h3>
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Limit:</strong> 12 requests
                    per minute per API key
                  </li>
                  <li>
                    <strong className="text-white">Window:</strong> Sliding
                    window (last 60 seconds)
                  </li>
                  <li>
                    <strong className="text-white">Scope:</strong> Per API key
                    (each key has independent limits)
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Rate Limit Headers
              </h3>
              <p className="text-gray-300 mb-4">
                All API responses include rate limit headers:
              </p>
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                  <li>
                    <code className="text-orange-400">X-RateLimit-Limit</code>:
                    Maximum number of requests allowed (12)
                  </li>
                  <li>
                    <code className="text-orange-400">
                      X-RateLimit-Remaining
                    </code>
                    : Number of requests remaining in the current window
                  </li>
                  <li>
                    <code className="text-orange-400">X-RateLimit-Reset</code>:
                    Unix timestamp when the rate limit resets
                  </li>
                  <li>
                    <code className="text-orange-400">Retry-After</code>: Number
                    of seconds to wait before retrying (only on 429 responses)
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Best Practices
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>
                  <strong className="text-white">
                    Monitor Rate Limit Headers:
                  </strong>{" "}
                  Check{" "}
                  <code className="text-orange-400">X-RateLimit-Remaining</code>{" "}
                  to avoid hitting the limit
                </li>
                <li>
                  <strong className="text-white">
                    Implement Exponential Backoff:
                  </strong>{" "}
                  If you receive a 429 response, wait for the{" "}
                  <code className="text-orange-400">Retry-After</code> duration
                  before retrying
                </li>
                <li>
                  <strong className="text-white">Batch Operations:</strong> When
                  possible, batch multiple operations to reduce API calls
                </li>
                <li>
                  <strong className="text-white">Cache Responses:</strong> Cache
                  API responses when appropriate to reduce unnecessary requests
                </li>
              </ul>
            </section>

            {/* Code Examples */}
            <section id="code-examples" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Code Examples
              </h2>

              <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
                Complete CRUD Operations
              </h3>

              <CodeTabs
                examples={[
                  {
                    language: "javascript",
                    label: "JavaScript",
                    code: `const API_KEY = "your-api-key-here";
const BASE_URL = "https://app.fusioncalling.com/api/calendar/external/v1";

// List events
async function listEvents(from, to) {
  const params = new URLSearchParams();
  if (from) params.append("from", from);
  if (to) params.append("to", to);

  const response = await fetch(\`\${BASE_URL}/events?\${params}\`, {
    method: "GET",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
    },
  });

  return await response.json();
}

// Create event
async function createEvent(eventData) {
  const response = await fetch(\`\${BASE_URL}/events\`, {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  return await response.json();
}

// Update event
async function updateEvent(eventId, updates) {
  const response = await fetch(\`\${BASE_URL}/events/\${eventId}\`, {
    method: "PATCH",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  return await response.json();
}

// Delete event
async function deleteEvent(eventId) {
  const response = await fetch(\`\${BASE_URL}/events/\${eventId}\`, {
    method: "DELETE",
    headers: {
      Authorization: \`Bearer \${API_KEY}\`,
    },
  });

  return await response.json();
}`,
                  },
                  {
                    language: "python",
                    label: "Python",
                    code: `import requests
from datetime import datetime

API_KEY = 'your-api-key-here'
BASE_URL = 'https://app.fusioncalling.com/api/calendar/external/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json',
}

# List events
def list_events(from_date=None, to_date=None):
    params = {}
    if from_date:
        params['from'] = from_date
    if to_date:
        params['to'] = to_date

    response = requests.get(f'{BASE_URL}/events', headers=headers, params=params)
    return response.json()

# Create event
def create_event(title, description, start_time, end_time, all_day=False):
    data = {
        'title': title,
        'description': description,
        'start_time': start_time,
        'end_time': end_time,
        'all_day': all_day,
    }
    response = requests.post(f'{BASE_URL}/events', headers=headers, json=data)
    return response.json()

# Update event
def update_event(event_id, **updates):
    response = requests.patch(
        f'{BASE_URL}/events/{event_id}',
        headers=headers,
        json=updates
    )
    return response.json()

# Delete event
def delete_event(event_id):
    response = requests.delete(
        f'{BASE_URL}/events/{event_id}',
        headers=headers
    )
    return response.json()`,
                  },
                  {
                    language: "bash",
                    label: "cURL",
                    code: `# Set your API key
API_KEY="your-api-key-here"
BASE_URL="https://app.fusioncalling.com/api/calendar/external/v1"

# List events
curl -X GET "\${BASE_URL}/events?from=2025-12-01T00:00:00&to=2025-12-31T23:59:59" \\
  -H "Authorization: Bearer \${API_KEY}"

# Create event
curl -X POST "\${BASE_URL}/events" \\
  -H "Authorization: Bearer \${API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Team Meeting",
    "description": "Weekly sync",
    "start_time": "2025-12-15T14:30:00",
    "end_time": "2025-12-15T16:00:00",
    "all_day": false
  }'

# Get event
curl -X GET "\${BASE_URL}/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer \${API_KEY}"

# Update event
curl -X PATCH "\${BASE_URL}/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer \${API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Updated Meeting Title"
  }'

# Delete event
curl -X DELETE "\${BASE_URL}/events/550e8400-e29b-41d4-a716-446655440000" \\
  -H "Authorization: Bearer \${API_KEY}"`,
                  },
                ]}
              />
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Best Practices
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    1. API Key Security
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      <strong className="text-white">
                        Never expose API keys
                      </strong>{" "}
                      in client-side code or public repositories
                    </li>
                    <li>
                      <strong className="text-white">Store API keys</strong> in
                      environment variables or secure key management systems
                    </li>
                    <li>
                      <strong className="text-white">Rotate API keys</strong>{" "}
                      regularly for security
                    </li>
                    <li>
                      <strong className="text-white">Revoke unused keys</strong>{" "}
                      to minimize attack surface
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    2. Datetime Handling
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Use the{" "}
                      <strong className="text-white">simple format</strong> (
                      <code className="text-orange-400">
                        2025-12-15T14:30:00
                      </code>
                      ) for ease of use
                    </li>
                    <li>
                      Always specify times in{" "}
                      <strong className="text-white">UTC</strong> when possible
                      to avoid timezone issues
                    </li>
                    <li>
                      For all-day events, set{" "}
                      <code className="text-orange-400">start_time</code> to{" "}
                      <code className="text-orange-400">00:00:00</code> and{" "}
                      <code className="text-orange-400">end_time</code> to{" "}
                      <code className="text-orange-400">23:59:59</code>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    3. Error Handling
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Always check the{" "}
                      <code className="text-orange-400">success</code> field in
                      responses
                    </li>
                    <li>
                      Handle <code className="text-orange-400">401</code> errors
                      by verifying your API key
                    </li>
                    <li>Validate user input before sending requests</li>
                    <li>
                      Implement retry logic for{" "}
                      <code className="text-orange-400">500</code> errors with
                      exponential backoff
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    4. Performance
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Use date range filters when listing events to reduce
                      response size
                    </li>
                    <li>Cache event data when appropriate</li>
                    <li>Batch operations when possible (future feature)</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    5. Data Validation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>
                      Validate{" "}
                      <code className="text-orange-400">
                        {"end_time > start_time"}
                      </code>{" "}
                      before creating/updating events
                    </li>
                    <li>Ensure title length is between 1-255 characters</li>
                    <li>Keep descriptions under 500 characters</li>
                  </ul>
                </div>

                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    6. Account Isolation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Remember that API keys are scoped to your account</li>
                    <li>
                      You can only access events belonging to your account
                    </li>
                    <li>
                      Event IDs from other accounts will return{" "}
                      <code className="text-orange-400">404 Not Found</code>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Support */}
            <section className="mb-16 scroll-mt-24">
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
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Version 1.0 (Current)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Initial API release</li>
                  <li>Support for CRUD operations on calendar events</li>
                  <li>Flexible datetime format support</li>
                  <li>API key authentication</li>
                  <li>Account-scoped data access</li>
                </ul>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                <em>Last updated: December 2025</em>
              </p>
            </section>
          </div>
        </main>

        {/* Right Sidebar - On This Page */}
        <OnThisPage />
      </div>
    </div>
  );
}
