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
                example: '"Meeting with Client"',
              },
              {
                name: "description",
                type: "string",
                required: false,
                description: "Event description (max 500 characters)",
                example: '"Discuss project requirements"',
              },
              {
                name: "start_time",
                type: "string",
                required: true,
                description:
                  "Event start time (flexible datetime format - see Datetime Formats section)",
                example: '"2025-12-15T14:30:00"',
              },
              {
                name: "end_time",
                type: "string",
                required: true,
                description:
                  "Event end time (flexible datetime format - see Datetime Formats section)",
                example: '"2025-12-15T16:00:00"',
              },
              {
                name: "all_day",
                type: "boolean",
                required: false,
                description:
                  "Whether the event is all-day. Must be a boolean, not a string (default: false)",
                example: "false",
              },
              {
                name: "google_meet_enabled",
                type: "boolean",
                required: false,
                description:
                  "Enable Google Meet for timed events. Requires Google Calendar connected under API key owner (default: false)",
                example: "true",
              },
              {
                name: "attendees",
                type: "array",
                required: false,
                description:
                  "Array of attendees (up to 50 objects with email field). Default: []",
                example:
                  '[{ "email": "guest1@example.com" }, { "email": "guest2@example.com" }]',
              },
            ]}
            requestExample={`curl -X POST "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Meeting with Client",
    "description": "Discuss project requirements",
    "start_time": "2025-12-15T14:30:00",
    "end_time": "2025-12-15T16:00:00",
    "all_day": false,
    "google_meet_enabled": true,
    "attendees": [
      { "email": "guest1@example.com" },
      { "email": "guest2@example.com" }
    ]
  }'`}
            responseExample={`{
  "success": true,
  "data": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "account_id": "account-uuid-here",
    "user_id": "user-uuid-here",
    "title": "Meeting with Client",
    "description": "Discuss project requirements",
    "start_time": "2025-12-15T14:30:00.000Z",
    "end_time": "2025-12-15T16:00:00.000Z",
    "all_day": false,
    "google_meet_enabled": true,
    "meet_link": "https://meet.google.com/abc-defg-hij",
    "attendees": [
      { "email": "guest1@example.com" },
      { "email": "guest2@example.com" }
    ],
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

      {/* Datetime Formats Section */}
      <section id="calendar-datetime-formats" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Datetime Formats</h2>
        <p className="text-gray-300 mb-6">
          The API accepts multiple common datetime formats and automatically
          normalizes them to ISO 8601 format for storage. Use whichever format
          is most convenient for your use case.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Supported Formats
        </h3>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
          <div className="space-y-4">
            <div>
              <p className="text-orange-400 font-semibold mb-2">
                ✅ Simple Format (recommended)
              </p>
              <CodeBlock
                code={`"2025-12-15T14:30:00"\n"2025-12-12T14:00:00"`}
                language="json"
              />
              <p className="text-gray-400 text-sm mt-2">
                No milliseconds/timezone (assumes UTC)
              </p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">
                ✅ ISO 8601 Without Milliseconds
              </p>
              <CodeBlock code={`"2025-12-15T14:30:00Z"`} language="json" />
              <p className="text-gray-400 text-sm mt-2">
                UTC timezone specified
              </p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">
                ✅ Full ISO 8601 (RFC 3339)
              </p>
              <CodeBlock
                code={`"2025-12-15T14:30:00.000Z"\n"2025-12-15T14:30:00.123Z"`}
                language="json"
              />
              <p className="text-gray-400 text-sm mt-2">
                With milliseconds and fractional seconds
              </p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">
                ✅ With Timezone Offset
              </p>
              <CodeBlock
                code={`"2025-12-15T14:30:00+05:30"\n"2025-12-15T14:30:00-08:00"`}
                language="json"
              />
              <p className="text-gray-400 text-sm mt-2">
                IST timezone and PST timezone examples
              </p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">
                ✅ Space Separator
              </p>
              <CodeBlock code={`"2025-12-15 14:30:00"`} language="json" />
              <p className="text-gray-400 text-sm mt-2">
                Space instead of T (assumes UTC)
              </p>
            </div>

            <div>
              <p className="text-orange-400 font-semibold mb-2">
                ✅ JavaScript Date Formats
              </p>
              <p className="text-gray-400 text-sm">
                Any format parseable by JavaScript&apos;s Date() constructor
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Normalization
        </h3>
        <p className="text-gray-300 mb-4">
          All formats are automatically normalized to{" "}
          <code className="text-orange-400">YYYY-MM-DDTHH:mm:ss.sssZ</code> (ISO
          8601 with milliseconds and UTC) for storage.
        </p>

        <Callout type="info">
          For query parameters (from/to), the same flexible datetime formats are
          supported.
        </Callout>
      </section>

      {/* Boolean Field Requirements */}
      <section id="calendar-boolean-fields" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Boolean Field Requirements
        </h2>
        <p className="text-gray-300 mb-4">
          Fields like <code className="text-orange-400">all_day</code> and{" "}
          <code className="text-orange-400">google_meet_enabled</code> must be
          actual boolean values, not strings.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Correct vs Incorrect
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-3">✅ Correct</p>
            <CodeBlock
              code={`{\n  "all_day": true,\n  "google_meet_enabled": false\n}`}
              language="json"
            />
          </div>

          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
            <p className="text-red-400 font-semibold mb-3">❌ Incorrect</p>
            <CodeBlock
              code={`{\n  "all_day": "true",\n  "google_meet_enabled": "false"\n}`}
              language="json"
            />
          </div>
        </div>

        <Callout type="warning">
          Sending boolean values as strings (e.g., &quot;true&quot;,
          &quot;false&quot;, &quot;1&quot;, &quot;0&quot;) will result in a
          validation error: &quot;Expected boolean, received string&quot;
        </Callout>
      </section>

      {/* n8n Configuration */}
      <section id="calendar-n8n-config" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">
          n8n Configuration
        </h2>
        <p className="text-gray-300 mb-6">
          When using n8n to integrate with the External Calendar API, follow
          these configuration steps.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          HTTP Request Node Setup
        </h3>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>
              <strong className="text-white">Method:</strong> POST
            </li>
            <li>
              <strong className="text-white">URL:</strong>{" "}
              <code className="text-orange-400">
                https://app.fusioncalling.com/api/calendar/external/v1/events
              </code>
            </li>
            <li>
              <strong className="text-white">Authentication:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Type: Generic Credential Type</li>
                <li>
                  Header Name:{" "}
                  <code className="text-orange-400">Authorization</code>
                </li>
                <li>
                  Header Value:{" "}
                  <code className="text-orange-400">
                    Bearer {"{your_api_key}"}
                  </code>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-white">Body Content Type:</strong> JSON
            </li>
            <li>
              <strong className="text-white">Body:</strong> Use JSON mode (see
              example below)
            </li>
          </ol>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          n8n Body Example
        </h3>

        <CodeBlock
          code={`{
  "title": "Meeting with Client",
  "description": "Discuss project requirements",
  "start_time": "2025-12-15T14:30:00",
  "end_time": "2025-12-15T16:00:00",
  "all_day": false
}`}
          language="json"
        />

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          n8n Best Practices
        </h3>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-white">Boolean values:</strong> Use JSON
              mode to ensure <code className="text-orange-400">all_day</code> is
              a boolean, not a string
            </li>
            <li>
              <strong className="text-white">With expressions:</strong> Use{" "}
              <code className="text-orange-400">${"{{ $json.all_day }}"}</code>{" "}
              where the value is already a boolean
            </li>
            <li>
              <strong className="text-white">For current time (simple):</strong>{" "}
              <code className="text-orange-400">
                &quot;2025-12-15T14:30:00&quot;
              </code>{" "}
              - just use the string directly
            </li>
            <li>
              <strong className="text-white">For current time (ISO):</strong>{" "}
              Use{" "}
              <code className="text-orange-400">
                ${'{$now.toISOString().split(".")[0]}'}
              </code>{" "}
              to get without milliseconds
            </li>
          </ul>
        </div>

        <Callout type="info">
          When using &quot;Specify Body&quot; → &quot;Using JSON&quot;, ensure
          boolean fields are not quoted. Invalid: &quot;all_day&quot;:
          &quot;true&quot;. Correct: &quot;all_day&quot;: true
        </Callout>
      </section>

      {/* Examples */}
      <section id="calendar-examples" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Event Examples</h2>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          All-Day Event
        </h3>

        <CodeBlock
          code={`{
  "title": "Company Holiday",
  "description": "Office closed",
  "start_time": "2025-12-25T00:00:00",
  "end_time": "2025-12-25T23:59:59",
  "all_day": true
}`}
          language="json"
        />

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Timed Event with Google Meet
        </h3>

        <CodeBlock
          code={`{
  "title": "Team Standup",
  "description": "Daily team sync",
  "start_time": "2025-12-15T09:00:00",
  "end_time": "2025-12-15T09:30:00",
  "all_day": false,
  "google_meet_enabled": true,
  "attendees": [
    { "email": "team@example.com" }
  ]
}`}
          language="json"
        />

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Minimal Event (Only Required Fields)
        </h3>

        <CodeBlock
          code={`{
  "title": "Quick Meeting",
  "start_time": "2025-12-15T10:00:00",
  "end_time": "2025-12-15T10:30:00"
}`}
          language="json"
        />

        <p className="text-gray-400 text-sm mt-4">
          Note: <code className="text-orange-400">all_day</code> defaults to
          false, and <code className="text-orange-400">description</code> is
          optional
        </p>
      </section>

      {/* Common Errors */}
      <section id="calendar-common-errors" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Common Errors</h2>

        <div className="space-y-6">
          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              Invalid datetime format
            </h3>
            <p className="text-gray-300 mb-3">
              The datetime string could not be parsed.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Solution:</strong> Ensure the format matches one of the
              supported formats. Check for typos or invalid characters.
            </p>
          </div>

          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              Expected boolean, received string
            </h3>
            <p className="text-gray-300 mb-3">
              A boolean field (like{" "}
              <code className="text-orange-400">all_day</code>) was sent as a
              string.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Solution:</strong> Don&apos;t quote{" "}
              <code className="text-orange-400">true</code>/
              <code className="text-orange-400">false</code> in JSON. Send{" "}
              <code className="text-orange-400">true</code> not{" "}
              <code className="text-orange-400">&quot;true&quot;</code>
            </p>
          </div>

          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              End time must be after start time
            </h3>
            <p className="text-gray-300 mb-3">
              The <code className="text-orange-400">end_time</code> is not later
              than <code className="text-orange-400">start_time</code>.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Solution:</strong> Verify that{" "}
              <code className="text-orange-400">end_time</code> is truly after{" "}
              <code className="text-orange-400">start_time</code>
            </p>
          </div>

          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              Google Meet enabled requires Google Calendar
            </h3>
            <p className="text-gray-300 mb-3">
              The API key owner doesn&apos;t have Google Calendar connected.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Solution:</strong> Connect your Google Calendar in
              settings, or set{" "}
              <code className="text-orange-400">google_meet_enabled</code> to{" "}
              <code className="text-orange-400">false</code>
            </p>
          </div>
        </div>
      </section>

      {/* Field Details */}
      <section id="calendar-field-details" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Field Details & Notes
        </h2>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Response-Only Fields
        </h3>

        <p className="text-gray-300 mb-4">
          The following fields are only present in responses and should never be
          included in create/update requests:
        </p>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
          <ul className="space-y-3 text-gray-300">
            <li>
              <strong className="text-orange-400">meet_link</strong> -
              Automatically populated after Google sync when{" "}
              <code className="text-orange-400">google_meet_enabled</code> is
              true
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Google Calendar Sync
        </h3>

        <p className="text-gray-300 mb-4">
          When the API key owner has Google Calendar connected and sync enabled:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>
            Create, update, and delete operations sync Google Meet links to
            Google Calendar
          </li>
          <li>
            Guest invite emails are automatically sent by Google when{" "}
            <code className="text-orange-400">attendees</code> is non-empty
          </li>
          <li>
            The <code className="text-orange-400">meet_link</code> is populated
            in the response for timed events
          </li>
        </ul>

        <Callout type="info">
          Attendees array supports up to 50 objects, each with an{" "}
          <code className="text-orange-400">email</code> field.
        </Callout>
      </section>
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
