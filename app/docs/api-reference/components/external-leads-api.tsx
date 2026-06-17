import EndpointCard from "@/components/docs/endpoint-card";
import CodeBlock from "@/components/docs/code-block";
import SectionHeader from "@/components/docs/section-header";
import CodeTabs from "@/components/docs/code-tabs";
import Callout from "@/components/docs/callout";

export default function ExternalLeadsAPI() {
  return (
    <>
      <SectionHeader
        title="External Leads API Reference"
        description="Automatically send leads from your favorite tools to Fusion Call. Version 1.2 includes GET (read leads), Default Feed routing, PATCH updates, and batch hardening."
        difficulty="intermediate"
      />

      {/* Quick Start */}
      <section id="leads-quick-start" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Quick Start</h2>
        <p className="text-gray-300 mb-4">
          <strong>What you need:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>A Fusion Call account</li>
          <li>Your API key (from Settings)</li>
          <li>The tool you want to connect (GoHighLevel, n8n, etc.)</li>
        </ul>

        <p className="text-gray-300 mb-4">
          <strong>In 3 simple steps:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
          <li>Copy your API key from Fusion Call Settings</li>
          <li>Send a POST request to our API endpoint</li>
          <li>Your leads appear automatically in Fusion Call!</li>
        </ol>
      </section>

      {/* Getting Your API Key */}
      <section id="leads-api-key" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Getting Your API Key
        </h2>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Step 1: Navigate to Settings
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
          <li>Log in to your Fusion Call account</li>
          <li>
            Go to <strong>Settings</strong> → <strong>API Keys</strong>
          </li>
          <li>
            Click <strong>&quot;Generate New API Key&quot;</strong>
          </li>
        </ol>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Step 2: Copy Your API Key
        </h3>
        <p className="text-gray-300 mb-4">Your API key will look like:</p>
        <CodeBlock code={`pk_live_1234567890abcdef...`} language="bash" />

        <Callout type="warning">
          Keep your API key secret! Never share it publicly or include it in
          client-side code (like JavaScript on websites).
        </Callout>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Step 3: Test Your API Key
        </h3>
        <p className="text-gray-300 mb-4">
          Use this quick test to verify it works:
        </p>
        <CodeBlock
          code={`curl -X POST https://your-domain.com/api/leads/external/v1/leads \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Test Lead",
    "phone": "+1234567890"
  }'`}
          language="bash"
        />

        <p className="text-gray-300 mt-4">If successful, you&apos;ll see:</p>
        <CodeBlock
          code={`{
  "success": true,
  "data": {
    "inserted": 1,
    "mode": "atomic",
    "leads": [
      {
        "id": "uuid",
        "name": "Test Lead",
        "phone": "+1234567890",
        "campaign_id": "uuid",
        "campaign_name": "Default Feed",
        "status": "pending",
        "created_at": "2026-06-16T12:00:00.000Z"
      }
    ]
  }
}`}
          language="json"
        />
      </section>

      {/* API Basics */}
      <section id="leads-basics" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">API Basics</h2>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Endpoint URLs
        </h3>
        <CodeBlock
          code={`GET  https://your-domain.com/api/leads/external/v1/leads
GET  https://your-domain.com/api/leads/external/v1/leads/{lead_id}
POST https://your-domain.com/api/leads/external/v1/leads
PATCH https://your-domain.com/api/leads/external/v1/leads`}
          language="bash"
        />

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Required Headers (POST / PATCH)
        </h3>
        <CodeBlock
          code={`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
          language="bash"
        />

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Required Fields
        </h3>
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-6">
          <table className="w-full text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800">
                <th className="px-4 py-3 text-left">Field</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Format</th>
                <th className="px-4 py-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">name</code>
                </td>
                <td className="px-4 py-3">Lead&apos;s full name</td>
                <td className="px-4 py-3">Text, 2-100 characters</td>
                <td className="px-4 py-3">&quot;John Doe&quot;</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">phone</code>
                </td>
                <td className="px-4 py-3">Phone number</td>
                <td className="px-4 py-3">
                  10–15 digits after normalization; +, spaces, -, () allowed
                </td>
                <td className="px-4 py-3">
                  <code>5551234567</code> or <code>+1 234 567 8900</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Optional Fields
        </h3>
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-6">
          <table className="w-full text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800">
                <th className="px-4 py-3 text-left">Field</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Format</th>
                <th className="px-4 py-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">email</code>
                </td>
                <td className="px-4 py-3">Email address</td>
                <td className="px-4 py-3">Valid email</td>
                <td className="px-4 py-3">&quot;john@example.com&quot;</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">company</code>
                </td>
                <td className="px-4 py-3">Company name</td>
                <td className="px-4 py-3">Text, up to 100 characters</td>
                <td className="px-4 py-3">&quot;Acme Corp&quot;</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">tags</code>
                </td>
                <td className="px-4 py-3">Labels to categorize leads</td>
                <td className="px-4 py-3">Array of strings, max 20 tags</td>
                <td className="px-4 py-3">
                  [&quot;vip&quot;, &quot;website-lead&quot;]
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">campaign_id</code>
                </td>
                <td className="px-4 py-3">Target campaign UUID</td>
                <td className="px-4 py-3">UUID belonging to your account</td>
                <td className="px-4 py-3">
                  Omit to use <strong>Default Feed</strong>
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <code className="text-orange-400">kind</code>
                </td>
                <td className="px-4 py-3">Optional validation</td>
                <td className="px-4 py-3">
                  <code>call</code> or <code>sms</code>
                </td>
                <td className="px-4 py-3">Must match target campaign kind</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Default Feed
        </h3>
        <p className="text-gray-300 mb-4">
          Every account has a <strong>Default Feed</strong> campaign. If you
          omit <code className="text-orange-400">campaign_id</code>, new leads
          are stored there.
        </p>

        <Callout type="warning">
          <strong>Breaking change (v1.2):</strong> If your integration
          previously omitted{" "}
          <code className="text-orange-400">campaign_id</code>, leads no longer
          go to your oldest campaign — they go to <strong>Default Feed</strong>.
        </Callout>
      </section>

      {/* Endpoints */}
      <section id="leads-endpoints" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 text-white">Endpoints</h2>

        {/* GET List Leads */}
        <div id="leads-get-list" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/leads/external/v1/leads"
            description="List leads from a campaign with optional filtering by status, date range, and pagination."
            authentication="Required"
            queryParameters={[
              {
                name: "campaign_id",
                type: "string",
                required: false,
                description: "Optional. Omit to read from Default Feed.",
              },
              {
                name: "phone",
                type: "string",
                required: false,
                description: "Optional. Lookup one lead by phone.",
              },
              {
                name: "status",
                type: "string",
                required: false,
                description:
                  "Optional: pending, in-progress, retry, completed, failed.",
              },
            ]}
            requestExample={`curl "https://your-domain.com/api/leads/external/v1/leads?status=pending" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            responseExample={`{
  "success": true,
  "data": {
    "campaign_name": "Default Feed",
    "page": 1,
    "total": 2,
    "leads": [...]
  }
}`}
            statusCodes={[
              { code: 200, description: "Success" },
              { code: 401, description: "Invalid or missing API key" },
              { code: 400, description: "Invalid parameters" },
            ]}
          />
        </div>

        {/* POST Create Leads */}
        <div id="leads-create" className="scroll-mt-24 mt-8">
          <EndpointCard
            method="POST"
            path="/api/leads/external/v1/leads"
            description="Create single or multiple leads in one request (1–100 leads per batch)."
            authentication="Required"
            requestBody={[
              {
                name: "name",
                type: "string",
                required: true,
                description: "Lead&apos;s full name (2-100 characters)",
                example: '"John Doe"',
              },
              {
                name: "phone",
                type: "string",
                required: true,
                description: "Phone number with normalization support",
                example: '"+1 234 567 8900"',
              },
              {
                name: "campaign_id",
                type: "string",
                required: false,
                description: "Target campaign UUID. Omit for Default Feed.",
                example: '"uuid-campaign"',
              },
            ]}
            requestExample={`curl -X POST "https://your-domain.com/api/leads/external/v1/leads" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "phone": "+1 234 567 8900",
    "email": "john@example.com"
  }'`}
            responseExample={`{
  "success": true,
  "data": {
    "mode": "atomic",
    "inserted": 1,
    "leads": [
      {
        "id": "uuid",
        "name": "John Doe",
        "phone": "+12345678900",
        "campaign_name": "Default Feed",
        "status": "pending",
        "created_at": "2026-06-16T12:00:00.000Z"
      }
    ]
  }
}`}
            statusCodes={[
              { code: 201, description: "Leads created successfully" },
              {
                code: 400,
                description: "Validation error or batch too large (>100)",
              },
              { code: 401, description: "Invalid or missing API key" },
              { code: 409, description: "Duplicate lead" },
              { code: 429, description: "Rate limit exceeded" },
            ]}
          />
        </div>

        {/* PATCH Update Lead */}
        <div id="leads-update" className="scroll-mt-24 mt-8">
          <EndpointCard
            method="PATCH"
            path="/api/leads/external/v1/leads"
            description="Update an existing lead identified by phone number."
            authentication="Required"
            requestBody={[
              {
                name: "phone",
                type: "string",
                required: true,
                description: "Lead&apos;s phone number (identifies the lead)",
                example: '"+1234567890"',
              },
              {
                name: "name",
                type: "string",
                required: false,
                description: "Updated lead name",
                example: '"John Doe Updated"',
              },
              {
                name: "email",
                type: "string",
                required: false,
                description: "Updated email address",
                example: '"john.new@example.com"',
              },
            ]}
            requestExample={`curl -X PATCH "https://your-domain.com/api/leads/external/v1/leads" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "+1234567890",
    "name": "John Doe Updated",
    "email": "john.new@example.com"
  }'`}
            responseExample={`{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "John Doe Updated",
    "phone": "+12345678900",
    "status": "pending",
    "updated_at": "2026-06-16T12:05:00.000Z"
  }
}`}
            statusCodes={[
              { code: 200, description: "Lead updated successfully" },
              { code: 404, description: "Lead not found" },
              { code: 401, description: "Invalid or missing API key" },
              { code: 429, description: "Rate limit exceeded" },
            ]}
          />
        </div>
      </section>

      {/* Rate Limiting */}
      <section id="leads-rate-limiting" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Rate Limiting</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300 mb-6">
          <li>
            <strong>100 requests per minute</strong> per API key
          </li>
          <li>
            Each batch request counts as 1 request (even if it contains 100
            leads)
          </li>
          <li>
            Returns <code className="text-orange-400">429</code> if exceeded
          </li>
          <li>
            Response includes{" "}
            <code className="text-orange-400">Retry-After</code> header
          </li>
        </ul>
      </section>

      {/* Platform Guides */}
      <section id="leads-platform-guides" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Platform-Specific Guides
        </h2>

        {/* GoHighLevel */}
        <div id="leads-gohighlevel" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            GoHighLevel Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Automatically send leads from GoHighLevel to Fusion Call.
          </p>

          <h4 className="text-xl font-semibold mb-3 text-white mt-6">Steps:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
            <li>
              Go to GoHighLevel <strong>Settings</strong> →{" "}
              <strong>Automation</strong> → <strong>Webhooks</strong>
            </li>
            <li>
              Click <strong>&quot;Add Webhook&quot;</strong>
            </li>
            <li>
              Set URL to:{" "}
              <code className="text-orange-400">
                https://your-domain.com/api/leads/external/v1/leads
              </code>
            </li>
            <li>
              Method: POST with Authorization header:{" "}
              <code className="text-orange-400">Bearer YOUR_API_KEY</code>
            </li>
          </ol>
        </div>

        {/* n8n */}
        <div id="leads-n8n" className="scroll-mt-24 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            n8n Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Use n8n to connect any system to Fusion Call with visual workflows.
          </p>

          <h4 className="text-xl font-semibold mb-3 text-white mt-6">Setup:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>
              Add <strong>HTTP Request</strong> node
            </li>
            <li>
              <strong>Method:</strong> POST
            </li>
            <li>
              <strong>URL:</strong>{" "}
              <code className="text-orange-400">
                https://your-domain.com/api/leads/external/v1/leads
              </code>
            </li>
            <li>
              <strong>Header:</strong>{" "}
              <code className="text-orange-400">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </li>
          </ul>
        </div>

        {/* Web Forms */}
        <div id="leads-web-forms" className="scroll-mt-24 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Web Form Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Connect website forms using server-side processing.
          </p>

          <Callout type="warning">
            Never expose your API key in client-side JavaScript! Always use
            server-side processing.
          </Callout>
        </div>
      </section>

      {/* Code Examples */}
      <section id="leads-code-examples" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Code Examples</h2>

        <CodeTabs
          examples={[
            {
              language: "javascript",
              label: "JavaScript",
              code: `const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const endpoint = 'https://your-domain.com/api/leads/external/v1/leads';

const data = {
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john@example.com'
};

axios.post(endpoint, data, {
    headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
    }
})
.then(response => console.log('Success!'))
.catch(error => console.error('Error:', error.message));`,
            },
            {
              language: "python",
              label: "Python",
              code: `import requests

api_key = 'YOUR_API_KEY'
endpoint = 'https://your-domain.com/api/leads/external/v1/leads'

data = {
    'name': 'John Doe',
    'phone': '+1234567890',
    'email': 'john@example.com'
}

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.post(endpoint, json=data, headers=headers)
print(response.json())`,
            },
            {
              language: "bash",
              label: "cURL",
              code: `curl -X POST "https://your-domain.com/api/leads/external/v1/leads" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "phone": "+1234567890",
    "email": "john@example.com"
  }'`,
            },
          ]}
        />
      </section>

      {/* Best Practices */}
      <section id="leads-best-practices" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Best Practices</h2>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Security
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>✅ Never expose API keys in client-side code</li>
          <li>✅ Always use HTTPS for API calls</li>
          <li>✅ Store API keys in environment variables</li>
          <li>✅ Rotate API keys periodically</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Error Handling
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>✅ Implement retry logic for failed requests</li>
          <li>✅ Log all API requests and responses</li>
          <li>✅ Handle rate limiting gracefully</li>
          <li>✅ Display user-friendly error messages</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Performance
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>✅ Use batch requests for multiple leads</li>
          <li>✅ Implement queue systems for high-volume imports</li>
          <li>✅ Use asynchronous processing</li>
          <li>✅ Optimize payload size</li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section id="leads-troubleshooting" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Troubleshooting</h2>

        <div className="space-y-4">
          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              401 Unauthorized Error
            </h3>
            <p className="text-gray-400 text-sm">
              Invalid or missing API key. Verify your key in Settings.
            </p>
          </div>

          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              400 Validation Failed
            </h3>
            <p className="text-gray-400 text-sm">
              Check that name and phone are included and properly formatted.
            </p>
          </div>

          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              409 Duplicate Lead
            </h3>
            <p className="text-gray-400 text-sm">
              Lead with same phone already exists in campaign. Use PATCH to
              update.
            </p>
          </div>

          <div className="bg-red-900/10 border border-red-800/50 rounded-lg p-4">
            <h3 className="text-orange-400 font-semibold mb-2">
              429 Rate Limit Exceeded
            </h3>
            <p className="text-gray-400 text-sm">
              More than 100 requests/minute. Implement exponential backoff and
              use batch requests.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="leads-faq" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">
              How many leads can I send per day?
            </h3>
            <p className="text-gray-300 text-sm">
              Theoretically 144,000 (100 leads × 100 requests × 1440 minutes).
              No daily limit, only per-minute rate limiting.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Can I read leads from the API?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. Use{" "}
              <code className="text-orange-400">
                GET /api/leads/external/v1/leads?phone=+1234567890
              </code>{" "}
              to lookup by phone or use GET by lead ID.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Can I update existing leads?
            </h3>
            <p className="text-gray-300 text-sm">
              Yes. Use{" "}
              <code className="text-orange-400">
                PATCH /api/leads/external/v1/leads
              </code>{" "}
              with the lead&apos;s phone number.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">
              What&apos;s the difference between Leads API and Calendar API?
            </h3>
            <p className="text-gray-300 text-sm">
              Leads API: creates lead records. Calendar API: manages events.
              Different endpoints, same API key system, different rate limits
              (100/min vs 12/min).
            </p>
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section id="leads-changelog" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Changelog</h2>

        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <table className="w-full text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-800">
                <th className="px-4 py-3 text-left">Version</th>
                <th className="px-4 py-3 text-left">Changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <strong>1.2</strong>
                </td>
                <td className="px-4 py-3">
                  GET endpoints for reading leads; PATCH for updates; Default
                  Feed routing; atomic batch inserts.
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="px-4 py-3">
                  <strong>1.1</strong>
                </td>
                <td className="px-4 py-3">
                  Default Feed fallback; campaign-scoped duplicates; enriched
                  responses.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong>1.0</strong>
                </td>
                <td className="px-4 py-3">Initial external POST API.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
