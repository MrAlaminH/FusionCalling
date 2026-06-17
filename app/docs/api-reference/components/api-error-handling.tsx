import Callout from "@/components/docs/callout";
import CodeBlock from "@/components/docs/code-block";

interface ErrorCategory {
  category: string;
  errors: Array<{
    code: number;
    title: string;
    description: string;
    commonCauses: string[];
    solution: string;
  }>;
}

const errorCategories: ErrorCategory[] = [
  {
    category: "Authentication & Authorization",
    errors: [
      {
        code: 401,
        title: "Unauthorized",
        description: "Invalid or missing API key",
        commonCauses: [
          "Missing Authorization header",
          "Invalid API key format",
          "Expired or revoked API key",
          "API key copied incorrectly",
        ],
        solution: "Verify your API key in Settings and ensure it's included in the Authorization header as 'Bearer YOUR_KEY'",
      },
      {
        code: 403,
        title: "Forbidden",
        description: "Insufficient permissions for requested resource",
        commonCauses: [
          "API key lacks required permissions",
          "Attempting to access another account's resources",
          "Account feature limitations",
        ],
        solution: "Ensure your API key has the necessary permissions and you're accessing resources within your account scope",
      },
    ],
  },
  {
    category: "Request Validation",
    errors: [
      {
        code: 400,
        title: "Bad Request",
        description: "Invalid request format or parameters",
        commonCauses: [
          "Missing required fields",
          "Invalid data format",
          "Type mismatches (boolean as string)",
          "Invalid datetime formats",
          "Field validation failures",
        ],
        solution: "Review the error details in the response, check request body format, and ensure all required fields are present with correct types",
      },
      {
        code: 422,
        title: "Unprocessable Entity",
        description: "Semantic validation errors",
        commonCauses: [
          "Business rule violations",
          "Invalid state transitions",
          "Constraint violations",
        ],
        solution: "Review specific validation errors in response body and adjust your request accordingly",
      },
    ],
  },
  {
    category: "Resource Access",
    errors: [
      {
        code: 404,
        title: "Not Found",
        description: "Requested resource does not exist",
        commonCauses: [
          "Invalid resource ID",
          "Resource already deleted",
          "Accessing resources from wrong account",
          "Typo in endpoint URL",
        ],
        solution: "Verify the resource ID exists and belongs to your account, check endpoint URL spelling",
      },
      {
        code: 409,
        title: "Conflict",
        description: "Request conflicts with current state",
        commonCauses: [
          "Duplicate resource creation",
          "Concurrent modification conflicts",
          "State mismatch",
        ],
        solution: "For duplicates, use update operations. For conflicts, retry with latest resource state",
      },
    ],
  },
  {
    category: "Rate Limiting",
    errors: [
      {
        code: 429,
        title: "Too Many Requests",
        description: "Rate limit exceeded",
        commonCauses: [
          "Exceeding requests per minute limit",
          "Multiple clients sharing same API key",
          "Missing exponential backoff",
          "Inefficient polling patterns",
        ],
        solution: "Implement retry logic with exponential backoff, use batch operations, consider multiple API keys for high throughput",
      },
    ],
  },
  {
    category: "Server Errors",
    errors: [
      {
        code: 500,
        title: "Internal Server Error",
        description: "Unexpected server error",
        commonCauses: [
          "Temporary service degradation",
          "Database connection issues",
          "Third-party service failures",
        ],
        solution: "Retry with exponential backoff. If persistent, check status page and contact support",
      },
      {
        code: 503,
        title: "Service Unavailable",
        description: "Service temporarily unavailable",
        commonCauses: [
          "Scheduled maintenance",
          "Service overload",
          "Infrastructure updates",
        ],
        solution: "Implement retry logic with longer delays, check status page for maintenance windows",
      },
    ],
  },
];

export default function ApiErrorHandling() {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Error Handling</h3>

      <p className="text-gray-300 mb-6">
        Understanding and properly handling API errors is crucial for building robust
        integrations. All errors follow standard HTTP status codes with detailed JSON
        responses.
      </p>

      <h4 className="text-lg font-semibold mb-3 text-white">Error Response Format</h4>
      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <CodeBlock
          code={`{
  "success": false,
  "error": "Error type or message",
  "details": {
    // Additional error context
  }
}`}
          language="json"
        />
      </div>

      <div className="space-y-6">
        {errorCategories.map((category) => (
          <div key={category.category}>
            <h4 className="text-lg font-semibold mb-3 text-white">{category.category}</h4>
            <div className="space-y-4">
              {category.errors.map((error) => (
                <ErrorCard key={error.code} error={error} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h4 className="text-lg font-semibold mb-3 text-white">Error Handling Best Practices</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-white font-medium mb-2">DO</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✅ Check HTTP status code first</li>
              <li>✅ Parse error response for details</li>
              <li>✅ Implement retry logic for 5xx errors</li>
              <li>✅ Use exponential backoff for 429</li>
              <li>✅ Log errors with full context</li>
              <li>✅ Monitor error rates in production</li>
              <li>✅ Provide user-friendly error messages</li>
              <li>✅ Handle network timeouts gracefully</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium mb-2">DON&apos; T</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>❌ Ignore error response bodies</li>
              <li>❌ Retry indefinitely without backoff</li>
              <li>❌ Expose raw errors to end users</li>
              <li>❌ Assume success without checking status</li>
              <li>❌ Hardcode error messages</li>
              <li>❌ Suppress errors silently</li>
              <li>❌ Retry immediately on 429</li>
              <li>❌ Handle all errors identically</li>
            </ul>
          </div>
        </div>
      </div>

      <Callout type="warning" className="mt-6">
        <strong>Important:</strong> Always implement proper error handling before deploying to
        production. Unhandled errors can lead to data loss, poor user experience, and
        increased support costs.
      </Callout>

      <div className="mt-6 bg-gray-800 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-3 text-white">Error Handling Implementation</h4>
        <CodeBlock
          code={`async function apiCall(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      // Handle error based on status code
      switch (response.status) {
        case 401:
          throw new Error('Authentication failed');
        case 429:
          // Implement retry with exponential backoff
          const retryAfter = response.headers.get('Retry-After');
          throw new Error(\`Rate limited. Retry after \${retryAfter} seconds\`);
        case 500:
        case 503:
          // Retry server errors
          throw new Error('Server error - retry recommended');
        default:
          throw new Error(data.error || 'Unknown error');
      }
    }

    return data;
  } catch (error) {
    // Log error for monitoring
    console.error('API Error:', error);
    throw error; // Re-throw for caller to handle
  }
}`}
          language="javascript"
        />
      </div>
    </div>
  );
}

function ErrorCard({ error }: { error: ErrorCategory["errors"][0] }) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`px-3 py-1 rounded font-mono text-sm font-semibold ${
            error.code >= 200 && error.code < 300
              ? "bg-green-900/50 text-green-300"
              : error.code >= 400 && error.code < 500
              ? "bg-yellow-900/50 text-yellow-300"
              : "bg-red-900/50 text-red-300"
          }`}
        >
          {error.code}
        </span>
        <div>
          <h5 className="text-white font-semibold">{error.title}</h5>
          <p className="text-gray-400 text-sm mt-1">{error.description}</p>
        </div>
      </div>

      <div className="mb-3">
        <h6 className="text-gray-300 font-medium text-sm mb-2">Common Causes:</h6>
        <ul className="space-y-1 text-gray-400 text-sm ml-4">
          {error.commonCauses.map((cause, index) => (
            <li key={index} className="list-disc">
              {cause}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h6 className="text-green-400 font-medium text-sm mb-1">Solution:</h6>
        <p className="text-gray-300 text-sm">{error.solution}</p>
      </div>
    </div>
  );
}
