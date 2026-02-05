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
        description="Automatically send leads from your favorite tools to Fusion Call. This API allows you to integrate external systems like GoHighLevel, n8n, custom CRMs, and web forms to automatically create leads in your Fusion Call account."
        difficulty="beginner"
      />

      {/* Overview */}
      <section id="leads-overview" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 my-6">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-24">Base URL:</span>
              <code className="text-orange-400 bg-black/50 px-3 py-1.5 rounded">
                https://your-domain.com/api/leads/external/v1
              </code>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-24">API Version:</span>
              <code className="text-orange-400 bg-black/50 px-3 py-1.5 rounded">
                v1
              </code>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-24">Rate Limit:</span>
              <code className="text-orange-400 bg-black/50 px-3 py-1.5 rounded">
                100 requests/minute
              </code>
            </div>
          </div>
        </div>

        <Callout type="info">
          All API requests require authentication using an API key. Each batch
          request can contain up to 100 leads.
        </Callout>
      </section>

      {/* Quick Start */}
      <section id="leads-quick-start" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Quick Start</h2>
        <p className="text-gray-300 mb-4">Get started in 3 simple steps:</p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300 mb-6">
          <li>Copy your API key from Fusion Call Settings → API Keys</li>
          <li>Send a POST request to our API endpoint</li>
          <li>Your leads appear automatically in Fusion Call!</li>
        </ol>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Test Your API Key
        </h3>
        <p className="text-gray-300 mb-4">
          Use this quick test to verify your API key works:
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
  "message": "Leads created successfully",
  "created": 1
}`}
          language="json"
        />
      </section>

      {/* Authentication */}
      <section id="leads-authentication" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Authentication</h2>
        <p className="text-gray-300 mb-4">
          All API requests require authentication using an API key in the{" "}
          <code className="text-orange-400">Authorization</code> header using
          the Bearer token format.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Getting Your API Key
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
          <li>Log in to your Fusion Call account</li>
          <li>Go to Settings → API Keys</li>
          <li>Click &quot;Generate New API Key&quot;</li>
          <li>
            Copy your API key (it looks like: pk_live_1234567890abcdef...)
          </li>
        </ol>

        <Callout type="warning">
          Keep your API key secret! Never share it publicly or include it in
          client-side code (like JavaScript on websites).
        </Callout>
      </section>

      {/* Endpoints */}
      <section id="leads-endpoints" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 text-white">Endpoints</h2>

        {/* Create Single Lead */}
        <div id="leads-create-single" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/leads/external/v1/leads"
            description="Create a single lead in your Fusion Call account."
            authentication="Required"
            requestBody={[
              {
                name: "name",
                type: "string",
                required: true,
                description: "Lead's full name (2-100 characters)",
                example: '"John Doe"',
              },
              {
                name: "phone",
                type: "string",
                required: true,
                description:
                  "Phone number (10-15 digits, can include +, -, spaces, ())",
                example: '"+1 234 567 8900"',
              },
              {
                name: "email",
                type: "string",
                required: false,
                description: "Valid email address",
                example: '"john@example.com"',
              },
              {
                name: "company",
                type: "string",
                required: false,
                description: "Company name (up to 100 characters)",
                example: '"Acme Corp"',
              },
              {
                name: "tags",
                type: "array",
                required: false,
                description:
                  "Array of strings to categorize leads (max 20 tags)",
                example: '["vip", "website-lead"]',
              },
              {
                name: "custom_fields",
                type: "object",
                required: false,
                description:
                  "Key-value pairs for additional custom data (max 20 fields)",
                example: '{"source": "facebook", "campaign": "summer-sale"}',
              },
            ]}
            requestExample={`curl -X POST "https://your-domain.com/api/leads/external/v1/leads" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "phone": "+1 234 567 8900",
    "email": "john@example.com",
    "company": "Acme Corporation",
    "tags": ["vip", "website-lead"],
    "custom_fields": {
      "source": "Google Ads",
      "campaign": "Summer Sale 2026",
      "budget": 5000
    }
  }'`}
            responseExample={`{
  "success": true,
  "message": "Leads created successfully",
  "created": 1,
  "leads": [
    {
      "id": "uuid-1234-5678-9012",
      "name": "John Doe",
      "phone": "+12345678900",
      "email": "john@example.com",
      "company": "Acme Corporation",
      "status": "pending"
    }
  ]
}`}
            statusCodes={[
              { code: 200, description: "Lead created successfully" },
              {
                code: 400,
                description: "Validation error (see error details)",
              },
              { code: 401, description: "Invalid or missing API key" },
              {
                code: 409,
                description: "Duplicate lead (same phone for same account)",
              },
              { code: 429, description: "Rate limit exceeded" },
              { code: 500, description: "Server error" },
            ]}
            validationErrors={`{
  "success": false,
  "error": "Validation failed",
  "details": {
    "phone": ["Phone number is required"],
    "email": ["Invalid email format"]
  }
}`}
          />
        </div>

        {/* Create Batch Leads */}
        <div id="leads-create-batch" className="scroll-mt-24 mt-8">
          <EndpointCard
            method="POST"
            path="/api/leads/external/v1/leads"
            description="Create multiple leads in one request (up to 100 leads)."
            authentication="Required"
            requestBody={[
              {
                name: "leads",
                type: "array",
                required: true,
                description:
                  "Array of lead objects (max 100). Each lead must have name and phone.",
                example: "[{...}, {...}]",
              },
            ]}
            requestExample={`curl -X POST "https://your-domain.com/api/leads/external/v1/leads" \\
  -H "Authorization: Bearer your-api-key-here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "leads": [
      {
        "name": "John Doe",
        "phone": "+1 234 567 8900",
        "email": "john@example.com"
      },
      {
        "name": "Jane Smith",
        "phone": "+1 234 567 8901",
        "email": "jane@example.com",
        "company": "Smith Industries"
      },
      {
        "name": "Bob Johnson",
        "phone": "+1 234 567 8902"
      }
    ]
  }'`}
            responseExample={`{
  "success": true,
  "message": "Leads created successfully",
  "created": 3,
  "leads": [
    {
      "id": "uuid-1234-5678-9012",
      "name": "John Doe",
      "phone": "+12345678900",
      "email": "john@example.com",
      "status": "pending"
    },
    {
      "id": "uuid-2345-6789-0123",
      "name": "Jane Smith",
      "phone": "+12345678901",
      "company": "Smith Industries",
      "status": "pending"
    },
    {
      "id": "uuid-3456-7890-1234",
      "name": "Bob Johnson",
      "phone": "+12345678902",
      "status": "pending"
    }
  ]
}`}
            statusCodes={[
              { code: 200, description: "Leads created successfully" },
              {
                code: 400,
                description: "Validation error or too many leads (>100)",
              },
              { code: 401, description: "Invalid or missing API key" },
              { code: 429, description: "Rate limit exceeded" },
              { code: 500, description: "Server error" },
            ]}
          />
        </div>
      </section>

      {/* Data Models */}
      <section id="leads-data-models" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Data Models</h2>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Lead Object
        </h3>
        <CodeBlock
          code={`interface Lead {
  name: string;           // Required: 2-100 characters
  phone: string;          // Required: 10-15 digits
  email?: string;         // Optional: Valid email format
  company?: string;       // Optional: Up to 100 characters
  tags?: string[];        // Optional: Max 20 tags
  custom_fields?: {       // Optional: Max 20 fields
    [key: string]: any;
  };
}`}
          language="typescript"
        />

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Phone Number Format
        </h3>
        <p className="text-gray-300 mb-4">
          Phone numbers must be 10-15 digits and can include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
          <li>Digits (0-9)</li>
          <li>Plus sign (+) for country code</li>
          <li>Spaces, hyphens (-), and parentheses ()</li>
        </ul>
        <p className="text-gray-300 mb-4">Valid examples:</p>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 mb-4">
          <ul className="space-y-2 text-gray-300 font-mono text-sm">
            <li>+1234567890</li>
            <li>+1 234-567-8900</li>
            <li>(234) 567-8900</li>
            <li>+44 20 1234 5678</li>
          </ul>
        </div>
      </section>

      {/* Rate Limiting */}
      <section id="leads-rate-limiting" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Rate Limiting</h2>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong className="text-white">Limit:</strong> 100 requests per
              minute per API key
            </li>
            <li>
              <strong className="text-white">Batch Requests:</strong> Each batch
              request counts as 1 request (even if it contains 100 leads)
            </li>
            <li>
              <strong className="text-white">Exceeded Limit:</strong> Returns
              429 status code with Retry-After header
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
          Rate Limit Error Response
        </h3>
        <CodeBlock
          code={`{
  "error": "Rate limit exceeded",
  "message": "Too many requests. Limit: 100 requests per minute.",
  "retryAfter": 45
}`}
          language="json"
        />
      </section>

      {/* Platform Integrations */}
      <section id="leads-integrations" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Platform Integrations
        </h2>

        {/* GoHighLevel */}
        <div id="leads-gohighlevel" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            GoHighLevel Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Automatically send leads from GoHighLevel to Fusion Call using
            webhooks.
          </p>

          <h4 className="text-xl font-semibold mb-3 text-white mt-6">
            Setup Steps:
          </h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
            <li>In GoHighLevel, go to Settings → Automation → Webhooks</li>
            <li>Click &quot;Add Webhook&quot;</li>
            <li>
              Set URL to:{" "}
              <code className="text-orange-400">
                https://your-domain.com/api/leads/external/v1/leads
              </code>
            </li>
            <li>Method: POST</li>
            <li>
              Add header:{" "}
              <code className="text-orange-400">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </li>
          </ol>

          <h4 className="text-xl font-semibold mb-3 text-white mt-6">
            Webhook Payload:
          </h4>
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
        <div id="leads-n8n" className="scroll-mt-24 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            n8n Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Use n8n to connect any system to Fusion Call with visual workflows.
          </p>

          <h4 className="text-xl font-semibold mb-3 text-white mt-6">
            HTTP Request Node Configuration:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>Method: POST</li>
            <li>
              URL:{" "}
              <code className="text-orange-400">
                https://your-domain.com/api/leads/external/v1/leads
              </code>
            </li>
            <li>Authentication: Generic Credential Type</li>
            <li>
              Header: <code className="text-orange-400">Authorization</code> ={" "}
              <code className="text-orange-400">Bearer YOUR_API_KEY</code>
            </li>
            <li>Body Content Type: JSON</li>
          </ul>
        </div>

        {/* Web Forms */}
        <div id="leads-web-forms" className="scroll-mt-24 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Web Form Integration
          </h3>
          <p className="text-gray-300 mb-4">
            Connect your website forms to Fusion Call using server-side
            processing.
          </p>

          <Callout type="warning">
            Never expose your API key in client-side JavaScript! Always use
            server-side processing.
          </Callout>

          <h4 className="text-xl font-semibold mb-3 text-white mt-6">
            PHP Example:
          </h4>
          <CodeBlock
            code={`<?php
$apiKey = 'YOUR_API_KEY';
$endpoint = 'https://your-domain.com/api/leads/external/v1/leads';

$data = [
    'name' => $_POST['name'],
    'phone' => $_POST['phone'],
    'email' => $_POST['email'],
    'tags' => ['website-form']
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
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo "Lead created successfully!";
} else {
    echo "Error: " . $response;
}
?>`}
            language="php"
          />
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
    email: 'john@example.com',
    company: 'Acme Corp',
    tags: ['api-import'],
    custom_fields: {
        source: 'custom_crm',
        import_date: new Date().toISOString()
    }
};

axios.post(endpoint, data, {
    headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log(\`Success! Created \${response.data.created} lead(s)\`);
})
.catch(error => {
    console.error('Error:', error.response?.data || error.message);
});`,
            },
            {
              language: "python",
              label: "Python",
              code: `import requests
import json

api_key = 'YOUR_API_KEY'
endpoint = 'https://your-domain.com/api/leads/external/v1/leads'

data = {
    'name': 'John Doe',
    'phone': '+1234567890',
    'email': 'john@example.com',
    'company': 'Acme Corp',
    'tags': ['api-import'],
    'custom_fields': {
        'source': 'custom_crm',
        'import_date': '2026-02-05'
    }
}

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.post(endpoint, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Success! Created {result['created']} lead(s)")
else:
    print(f"Error: {response.text}")`,
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
    "email": "john@example.com",
    "company": "Acme Corp",
    "tags": ["api-import"],
    "custom_fields": {
      "source": "custom_crm"
    }
  }'`,
            },
          ]}
        />
      </section>

      {/* Best Practices */}
      <section id="leads-best-practices" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Best Practices</h2>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              1. Security
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Never expose API keys in client-side code</li>
              <li>Always use HTTPS for API calls</li>
              <li>Store API keys in environment variables</li>
              <li>Rotate API keys periodically</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              2. Error Handling
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implement retry logic for failed requests</li>
              <li>Log all API requests and responses</li>
              <li>Handle rate limiting gracefully</li>
              <li>Display user-friendly error messages</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              3. Performance
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use batch requests for multiple leads</li>
              <li>Implement queue systems for high-volume imports</li>
              <li>Use asynchronous processing</li>
              <li>Optimize payload size</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              4. Data Quality
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Validate data before sending to API</li>
              <li>Normalize phone numbers</li>
              <li>Sanitize user input</li>
              <li>Use consistent field names</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section id="leads-troubleshooting" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">Troubleshooting</h2>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              401 Unauthorized Error
            </h3>
            <p className="text-gray-300 mb-3">
              <strong>Causes:</strong> Invalid or missing API key
            </p>
            <p className="text-gray-300">
              <strong>Solutions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
              <li>Verify your API key in Fusion Call Settings</li>
              <li>Check Authorization header format</li>
              <li>Generate a new API key if needed</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              400 Validation Error
            </h3>
            <p className="text-gray-300 mb-3">
              <strong>Causes:</strong> Missing required fields or invalid data
              format
            </p>
            <p className="text-gray-300">
              <strong>Solutions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
              <li>Ensure name and phone are included</li>
              <li>Verify phone number is 10-15 digits</li>
              <li>Validate email format if provided</li>
              <li>Check tags array has max 20 items</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              409 Duplicate Lead Error
            </h3>
            <p className="text-gray-300 mb-3">
              <strong>Causes:</strong> Lead with same phone number already
              exists
            </p>
            <p className="text-gray-300">
              <strong>Solutions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
              <li>Check if lead already exists in Fusion Call</li>
              <li>This is expected behavior to prevent duplicates</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              429 Rate Limit Exceeded
            </h3>
            <p className="text-gray-300 mb-3">
              <strong>Causes:</strong> More than 100 requests per minute
            </p>
            <p className="text-gray-300">
              <strong>Solutions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
              <li>Implement exponential backoff</li>
              <li>Use batch requests to send multiple leads</li>
              <li>Check Retry-After header</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="leads-faq" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-white">FAQ</h2>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              How many leads can I send per day?
            </h3>
            <p className="text-gray-300">
              There&apos;s no daily limit, but there&apos;s a rate limit of 100
              requests per minute. Each request can contain up to 100 leads.
              Theoretically, you could send up to 144,000 leads per day.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Can I send leads from multiple sources?
            </h3>
            <p className="text-gray-300">
              Yes! You can use the same API key across multiple systems, or
              create separate API keys for each source in your Fusion Call
              Settings.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              What happens if a lead already exists?
            </h3>
            <p className="text-gray-300">
              The API will return a 409 Conflict error if a lead with the same
              phone number already exists for your account. This prevents
              duplicate leads.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              How quickly do leads appear in Fusion Call?
            </h3>
            <p className="text-gray-300">
              Leads typically appear within 1-2 seconds after a successful API
              request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
