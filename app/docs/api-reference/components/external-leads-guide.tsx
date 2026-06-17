import InteractiveEndpointCard from "./interactive-endpoint-card";
import CodeBlock from "@/components/docs/code-block";
import Callout from "@/components/docs/callout";
import SectionHeader from "@/components/docs/section-header";

export default function ExternalLeadsAPIGuide() {
  return (
    <>
      <SectionHeader
        title="External Leads API - Comprehensive Integration Guide"
        description="Version 1.2 — includes GET (read leads), Default Feed routing, PATCH updates, and batch hardening. Automatically send leads from your favorite tools to Fusion Call."
        difficulty="intermediate"
      />

      {/* Quick Start */}
      <div id="quick-start" className="mb-12 sm:mb-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Quick Start</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">What You Need</h3>
            <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>✓ A Fusion Call account</li>
              <li>✓ Your API key (from Settings)</li>
              <li>✓ The tool you want to connect (GoHighLevel, n8n, etc.)</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">3 Simple Steps</h3>
            <ol className="space-y-2 text-gray-300 text-xs sm:text-sm list-decimal list-inside">
              <li>Copy your API key from Fusion Call Settings</li>
              <li>Send a POST request to our API endpoint</li>
              <li>Your leads appear automatically in Fusion Call!</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Getting Your API Key */}
      <div id="getting-api-key" className="mb-12 sm:mb-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Getting Your API Key</h2>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Step 1: Navigate to Settings</h3>
            <ol className="space-y-2 text-gray-300 text-xs sm:text-sm list-decimal list-inside">
              <li>Log in to your Fusion Call account</li>
              <li>Go to <strong>Settings</strong> → <strong>API Keys</strong></li>
              <li>Click <strong>&quot;Generate New API Key&quot;</strong></li>
            </ol>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Step 2: Copy Your API Key</h3>
            <CodeBlock code={`pk_live_1234567890abcdef...`} language="bash" />
            <Callout type="warning" className="mt-4">
              <strong>Important:</strong> Keep your API key secret! Never share it publicly
              or include it in client-side code.
            </Callout>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Step 3: Test Your API Key</h3>
            <InteractiveEndpointCard
              method="POST"
              path="/api/leads/external/v1/leads"
              description="Create a test lead to verify your API key works"
              authentication="Required"
              requestBody={[
                {
                  name: "name",
                  type: "string",
                  required: true,
                  description: "Lead&apos;s full name",
                  example: "Test Lead",
                },
                {
                  name: "phone",
                  type: "string",
                  required: true,
                  description: "Phone number",
                  example: "+1234567890",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* API Basics */}
      <div id="api-basics" className="mb-12 sm:mb-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">API Basics</h2>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Endpoint URLs</h3>
            <CodeBlock
              code={`GET  https://your-domain.com/api/leads/external/v1/leads
GET  https://your-domain.com/api/leads/external/v1/leads/{lead_id}
POST https://your-domain.com/api/leads/external/v1/leads
PATCH https://your-domain.com/api/leads/external/v1/leads`}
              language="bash"
            />
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Required Headers</h3>
            <CodeBlock
              code={`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
              language="bash"
            />
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Required Fields</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Field
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Description
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Format
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code className="text-orange-400">name</code>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Lead&apos;s full name</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Text, 2-100 characters</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">&quot;John Doe&quot;</td>
                  </tr>
                  <tr>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code className="text-orange-400">phone</code>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Phone number</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">
                      10–15 digits after normalization
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code>5551234567</code> or <code>+1 234 567 8900</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-900/20 border border-blue-800/50 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">
                Phone Number Normalization
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
                <li>• <strong>US default:</strong> 10 digits → prefixed with +1 (e.g.,
                5551234567 → +15551234567)</li>
                <li>• <strong>11 digits starting with 1:</strong> → + prefix (e.g., 15551234567
                → +15551234567)</li>
                <li>• <strong>International:</strong> include country code (recommended E.164,
                e.g. +44…)</li>
                <li>• Invalid numbers → 400 error on POST/PATCH/GET lookup</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Optional Fields</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Field
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Description
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Format
                    </th>
                    <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-gray-400 font-semibold">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code className="text-orange-400">email</code>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Email address</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Valid email</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">&quot;john@example.com&quot;</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code className="text-orange-400">company</code>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Company name</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Text, up to 100 characters</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">&quot;Acme Corp&quot;</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code className="text-orange-400">tags</code>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Lead tags</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Array of strings, max 20</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      [&quot;vip&quot;, &quot;website-lead&quot;]
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">
                      <code className="text-orange-400">campaign_id</code>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">Target campaign UUID</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-300">UUID from your account</td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4">Omit to use Default Feed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Default Feed</h3>
            <p className="text-gray-300 mb-4 text-xs sm:text-sm">
              Every account has a <strong className="text-white">Default Feed</strong>{" "}
              campaign. If you omit <code className="text-orange-400">campaign_id</code>,
              new leads are stored there.
            </p>
            <Callout type="warning" className="mt-4">
              <strong>Breaking change (v1.2):</strong> If your integration previously
              omitted <code className="text-orange-400">campaign_id</code>, leads no longer
              go to your oldest campaign — they go to <strong>Default Feed</strong>.
            </Callout>
          </div>
        </div>
      </div>

      {/* Create Lead Endpoint */}
      <div id="create-lead" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Create Lead</h2>
        <p className="text-gray-300 mb-6">
          Create single or multiple leads in one request (1–100 leads per batch). Empty
          batches and batches over 100 are rejected with 400 error.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Single Lead</h3>
          <InteractiveEndpointCard
            method="POST"
            path="/api/leads/external/v1/leads"
            description="Create a single lead"
            authentication="Required"
            requestBody={[
              {
                name: "name",
                type: "string",
                required: true,
                description: "Lead&apos;s full name (2-100 characters)",
                example: "John Doe",
                defaultValue: "John Doe",
              },
              {
                name: "phone",
                type: "string",
                required: true,
                description: "Phone number (auto-normalized)",
                example: "+1 234 567 8900",
                defaultValue: "+1 234 567 8900",
              },
              {
                name: "email",
                type: "string",
                required: false,
                description: "Email address",
                example: "john@example.com",
              },
              {
                name: "company",
                type: "string",
                required: false,
                description: "Company name",
                example: "Acme Corp",
              },
              {
                name: "tags",
                type: "array",
                required: false,
                description: "Lead tags (comma-separated)",
                example: "vip,website-lead",
              },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Batch Leads (1-100)</h3>
          <InteractiveEndpointCard
            method="POST"
            path="/api/leads/external/v1/leads"
            description="Create multiple leads in one request"
            authentication="Required"
            requestBody={[
              {
                name: "kind",
                type: "string",
                required: false,
                description: "Batch-level kind (call or sms)",
                example: "call",
              },
              {
                name: "leads",
                type: "array",
                required: true,
                description: "Array of lead objects (format as JSON array)",
                example: '[{"name": "Lead 1", "phone": "+1234567890"}, {"name": "Lead 2", "phone": "+1234567891"}]',
              },
            ]}
          />
        </div>
      </div>

      {/* Read Leads Endpoint */}
      <div id="read-leads" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Read Leads</h2>
        <p className="text-gray-300 mb-6">
          Use GET to sync lead data back to CRMs, Zapier, or custom dashboards.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Get Lead by Phone Number (Recommended for Automation)</h3>
          <p className="text-gray-300 mb-4">
            Most integrations identify leads by phone, not internal UUID. This is the
            easiest way to lookup leads for automation and CRM sync.
          </p>
          <InteractiveEndpointCard
            method="GET"
            path="/api/leads/external/v1/leads"
            description="Lookup a single lead by phone number (recommended for CRM sync)"
            authentication="Required"
            queryParameters={[
              {
                name: "phone",
                type: "string",
                required: true,
                description: "Phone number to lookup (US 10-digit works without country code)",
                example: "+1234567890",
                defaultValue: "+1234567890",
              },
              {
                name: "campaign_id",
                type: "string",
                required: false,
                description: "Optional UUID to scope lookup to specific campaign",
                example: "",
              },
            ]}
          />
          <Callout type="info" className="mt-4">
            <strong>Phone Normalization:</strong> US 10-digit numbers work without a country
            code. <code>+1 (234) 567-8900</code>, <code>5551234567</code>, and{" "}
            <code>+15551234567</code> all match the same lead.
          </Callout>
        </div>

        <div id="get-lead-by-id" className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Get Lead by ID</h3>
          <p className="text-gray-300 mb-4">
            Use the UUID returned from POST when you have stored the lead ID in your
            system.
          </p>
          <InteractiveEndpointCard
            method="GET"
            path="/api/leads/external/v1/leads/{lead_id}"
            description="Retrieve a single lead by UUID"
            authentication="Required"
            pathParameters={[
              {
                name: "lead_id",
                type: "string",
                required: true,
                description: "Lead UUID from POST response",
                example: "abc-123-def-456",
                defaultValue: "abc-123-def-456",
              },
            ]}
          />
        </div>

        <div id="list-leads">
          <h3 className="text-xl font-semibold text-white mb-4">List Leads with Pagination</h3>
          <p className="text-gray-300 mb-4">
            Get all leads from a campaign with filtering and pagination options.
          </p>
          <InteractiveEndpointCard
            method="GET"
            path="/api/leads/external/v1/leads"
            description="List leads from a campaign with optional filtering and pagination"
            authentication="Required"
            queryParameters={[
              {
                name: "campaign_id",
                type: "string",
                required: false,
                description: "Optional UUID. Omit to read from Default Feed",
                example: "",
              },
              {
                name: "status",
                type: "string",
                required: false,
                description: "Filter by status (pending, in-progress, completed, failed, retry)",
                example: "pending",
              },
              {
                name: "page",
                type: "number",
                required: false,
                description: "Page number (default: 1)",
                example: "1",
              },
              {
                name: "pageSize",
                type: "number",
                required: false,
                description: "Results per page (default: 50, max: 100)",
                example: "50",
              },
            ]}
          />
        </div>
      </div>

      {/* Update Lead Endpoint */}
      <div id="update-lead" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Update Lead</h2>
        <p className="text-gray-300 mb-6">
          Update an existing lead identified by phone number. At least one updatable field
          is required.
        </p>

        <InteractiveEndpointCard
          method="PATCH"
          path="/api/leads/external/v1/leads"
          description="Update an existing lead by phone number"
          authentication="Required"
          requestBody={[
            {
              name: "phone",
              type: "string",
              required: true,
              description: "Lead&apos;s phone number (identifies the lead)",
              example: "+1234567890",
              defaultValue: "+1234567890",
            },
            {
              name: "name",
              type: "string",
              required: false,
              description: "Updated lead name",
              example: "John Doe Updated",
            },
            {
              name: "email",
              type: "string",
              required: false,
              description: "Updated email address",
              example: "john.new@example.com",
            },
            {
              name: "company",
              type: "string",
              required: false,
              description: "Updated company name",
              example: "New Corp",
            },
            {
              name: "tags",
              type: "array",
              required: false,
              description: "Updated tags (comma-separated)",
              example: "vip,updated",
            },
          ]}
        />
      </div>

      {/* Platform Integration Guides */}
      <div id="platform-integration-guides" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Platform Integration Guides</h2>

        <div className="space-y-8">
          {/* GoHighLevel */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">GoHighLevel Integration</h3>
            <p className="text-gray-300 mb-6">
              Automatically send leads from GoHighLevel to Fusion Call whenever a new
              contact is created.
            </p>

            <h4 className="text-lg font-semibold text-white mb-3">Setup Steps</h4>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-6">
              <li>
                Go to <strong>Settings</strong> → <strong>Automation</strong> →{" "}
                <strong>Webhooks</strong>
              </li>
              <li>
                Click <strong>&quot;Add Webhook&quot;</strong>
              </li>
              <li>
                Configure URL:{" "}
                <code className="text-orange-400">
                  https://your-domain.com/api/leads/external/v1/leads
                </code>
              </li>
              <li>
                Method: <strong>POST</strong>
              </li>
              <li>
                Headers: <code className="text-orange-400">Authorization: Bearer YOUR_API_KEY</code>
              </li>
            </ol>

            <h4 className="text-lg font-semibold text-white mb-3">Map Fields</h4>
            <CodeBlock
              code={`{
  "name": "{{contact.name}}",
  "phone": "{{contact.phone}}",
  "email": "{{contact.email}}",
  "company": "{{contact.company}}",
  "tags": ["gohighlevel"],
  "custom_fields": {
    "source": "GoHighLevel",
    "contact_id": "{{contact.id}}"
  }
}`}
              language="json"
            />
          </div>

          {/* n8n */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">n8n Integration</h3>
            <p className="text-gray-300 mb-6">
              Use n8n to connect any system to Fusion Call with visual workflows.
            </p>

            <h4 className="text-lg font-semibold text-white mb-3">HTTP Request Node</h4>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• <strong>Method:</strong> POST</li>
              <li>• <strong>URL:</strong>{" "}
                <code className="text-orange-400">
                  https://your-domain.com/api/leads/external/v1/leads
                </code>
              </li>
              <li>• <strong>Authentication:</strong> Generic Credential Type</li>
              <li>• <strong>Header Name:</strong>{" "}
                <code className="text-orange-400">Authorization</code>
              </li>
              <li>• <strong>Header Value:</strong>{" "}
                <code className="text-orange-400">Bearer YOUR_API_KEY</code>
              </li>
              <li>• <strong>Body Content Type:</strong> JSON</li>
            </ul>

            <h4 className="text-lg font-semibold text-white mb-3">Example Body Mapping</h4>
            <CodeBlock
              code={`{
  "name": "={{ $json.name }}",
  "phone": "={{ $json.phone }}",
  "email": "={{ $json.email }}",
  "company": "={{ $json.company }}",
  "tags": ["n8n"],
  "custom_fields": {
    "source": "n8n",
    "workflow_id": "={{ $workflow.id }}"
  }
}`}
              language="json"
            />
          </div>

          {/* Web Forms */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Web Form Integration</h3>
            <p className="text-gray-300 mb-6">
              Connect your website forms (WordPress, Unbounce, Typeform, etc.) to Fusion
              Call.
            </p>

            <Callout type="warning" className="mb-6">
              <strong>Security Warning:</strong> Never expose your API key in client-side
              JavaScript. Always use server-side processing.
            </Callout>

            <h4 className="text-lg font-semibold text-white mb-3">PHP Example</h4>
            <CodeBlock
              code={`<?php
$apiKey = 'YOUR_API_KEY';
$endpoint = 'https://your-domain.com/api/leads/external/v1/leads';

$data = [
    'name' => $_POST['name'],
    'phone' => $_POST['phone'],
    'email' => $_POST['email'],
    'company' => $_POST['company'],
    'tags' => ['website-form'],
    'custom_fields' => [
        'source' => 'WordPress',
        'form_id' => $_POST['form_id']
    ]
];

$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);
?>`}
              language="php"
            />
          </div>

          {/* Zapier */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Zapier Integration</h3>
            <p className="text-gray-300 mb-6">
              Connect Fusion Calling with 5,000+ apps using Zapier automation.
            </p>

            <h4 className="text-lg font-semibold text-white mb-3">Setup Steps</h4>
            <ol className="space-y-2 text-gray-300 list-decimal list-inside mb-6">
              <li>Create a new Zap</li>
              <li>
                <strong>Trigger:</strong> Choose your form provider (Typeform, Gravity
                Forms, etc.)
              </li>
              <li>
                <strong>Action:</strong> Select &quot;Webhooks by Zapier&quot;
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
            </ol>

            <h4 className="text-lg font-semibold text-white mb-3">Payload Mapping</h4>
            <CodeBlock
              code={`{
  "name": "{{Name Field}}",
  "phone": "{{Phone Field}}",
  "email": "{{Email Field}}",
  "company": "{{Company Field}}",
  "tags": ["zapier-import"]
}`}
              language="json"
            />
          </div>
        </div>
      </div>

      {/* Error Handling */}
      <div id="error-handling" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Error Handling</h2>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Common Errors</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-400">Error</th>
                    <th className="text-left py-3 px-4 text-gray-400">Meaning</th>
                    <th className="text-left py-3 px-4 text-gray-400">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4">
                      <code className="text-orange-400">401 Unauthorized</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Invalid or missing API key</td>
                    <td className="py-3 px-4 text-gray-300">Check your API key</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4">
                      <code className="text-orange-400">400 Bad Request</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Invalid data format</td>
                    <td className="py-3 px-4 text-gray-300">
                      Verify JSON syntax and required fields
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-3 px-4">
                      <code className="text-orange-400">409 Conflict</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Duplicate lead (same phone in campaign)
                    </td>
                    <td className="py-3 px-4 text-gray-300">
                      Use PATCH to update existing lead
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <code className="text-orange-400">429 Too Many Requests</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Rate limit exceeded</td>
                    <td className="py-3 px-4 text-gray-300">
                      Wait and retry with backoff
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>

        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              How many leads can I send per day?
            </h3>
            <p className="text-gray-300 text-sm">
              There&apos;s no daily limit, but there&apos;s a rate limit of 100 requests per
              minute. Each request can contain up to 100 leads. Theoretically, you could
              send up to 144,000 leads per day.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
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

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
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

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              What&apos;s the difference between Leads API and Calendar API?
            </h3>
            <p className="text-gray-300 text-sm">
              Leads API creates lead records; Calendar API manages calendar events. Both
              use the same API key system but have different endpoints and rate limits
              (Leads: 100/min, Calendar: 12/min).
            </p>
          </div>
        </div>
      </div>

      {/* Changelog */}
      <div id="changelog" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Changelog</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400">Version</th>
                <th className="text-left py-3 px-4 text-gray-400">Changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 px-4">
                  <strong className="text-white">1.2</strong>
                </td>
                <td className="py-3 px-4 text-gray-300">
                  GET list + GET by id; batch validation (1–100); atomic batch response;
                  <code className="text-orange-400">kind: sms</code> requires campaign_id; campaign
                  cache respects per-lead kind
                </td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 px-4">
                  <strong className="text-white">1.1</strong>
                </td>
                <td className="py-3 px-4 text-gray-300">
                  Default Feed fallback; PATCH by phone; per-campaign duplicate rule;
                  enriched POST response
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">
                  <strong className="text-white">1.0</strong>
                </td>
                <td className="py-3 px-4 text-gray-300">Initial external POST API</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
