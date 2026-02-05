import EndpointCard from "@/components/docs/endpoint-card";
import CodeBlock from "@/components/docs/code-block";
import SectionHeader from "@/components/docs/section-header";
import CodeTabs from "@/components/docs/code-tabs";
import Callout from "@/components/docs/callout";

export default function ExternalCalendarAPI() {
  return (
    <>
      <SectionHeader
        title="External Calendar API Reference"
        description="The Fusion Calling External Calendar API allows you to programmatically manage calendar events using API key authentication. This RESTful API provides full CRUD (Create, Read, Update, Delete) operations for calendar events."
        difficulty="intermediate"
      />

      {/* Overview */}
      <section id="calendar-overview" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
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
          All API requests require authentication using an API key. See the
          Authentication section below for details.
        </Callout>
      </section>

      {/* Authentication */}
      <section id="calendar-authentication" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Authentication</h2>
        <p className="text-gray-300 mb-4">
          All API requests require authentication using an API key. The API key
          must be included in the{" "}
          <code className="text-orange-400">Authorization</code> header using
          the Bearer token format.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Getting Your API Key
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
          <li>Log in to your Fusion Calling account</li>
          <li>Navigate to Settings → API Keys</li>
          <li>Generate a new API key or use an existing one</li>
          <li>Copy the API key (it&apos;s only shown once when created)</li>
        </ol>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Using Your API Key
        </h3>
        <p className="text-gray-300 mb-4">
          Include the API key in the{" "}
          <code className="text-orange-400">Authorization</code> header of every
          request:
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
      <section id="calendar-endpoints" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 text-white">Endpoints</h2>

        {/* List Events */}
        <div id="calendar-list-events" className="scroll-mt-24">
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
        <div id="calendar-get-event" className="scroll-mt-24">
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
        <div id="calendar-create-event" className="scroll-mt-24">
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
                description: "Event start time (flexible datetime format)",
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
                description: "Whether the event is all-day (default: false)",
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
        <div id="calendar-update-event" className="scroll-mt-24">
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
                description: "Event start time (flexible datetime format)",
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
        <div id="calendar-delete-event" className="scroll-mt-24">
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

      {/* Rate Limiting */}
      <section id="calendar-rate-limiting" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Rate Limiting</h2>
        <p className="text-gray-300 mb-4">
          The External Calendar API implements rate limiting to protect the
          service from abuse and ensure fair usage.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Rate Limit Details
        </h3>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-white">Limit:</strong> 12 requests per
              minute per API key
            </li>
            <li>
              <strong className="text-white">Window:</strong> Sliding window
              (last 60 seconds)
            </li>
            <li>
              <strong className="text-white">Scope:</strong> Per API key (each
              key has independent limits)
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
              <code className="text-orange-400">X-RateLimit-Remaining</code>:
              Number of requests remaining in the current window
            </li>
            <li>
              <code className="text-orange-400">X-RateLimit-Reset</code>: Unix
              timestamp when the rate limit resets
            </li>
            <li>
              <code className="text-orange-400">Retry-After</code>: Number of
              seconds to wait before retrying (only on 429 responses)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
