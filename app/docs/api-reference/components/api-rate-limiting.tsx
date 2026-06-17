import Callout from "@/components/docs/callout";

interface RateLimitConfig {
  name: string;
  limit: string;
  window: string;
  scope: string;
}

interface RateLimitProps {
  apis?: RateLimitConfig[];
}

const defaultRateLimits: RateLimitConfig[] = [
  {
    name: "Calendar API",
    limit: "12 requests per minute",
    window: "Sliding window (last 60 seconds)",
    scope: "Per API key",
  },
  {
    name: "Leads API",
    limit: "100 requests per minute",
    window: "Sliding window (last 60 seconds)",
    scope: "Per API key (each batch counts as 1 request)",
  },
];

export default function ApiRateLimiting({ apis = defaultRateLimits }: RateLimitProps) {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Rate Limiting</h3>

      <p className="text-gray-300 mb-6">
        All Fusion Calling APIs implement rate limiting to protect the service from abuse
        and ensure fair usage across all users.
      </p>

      <div className="space-y-4 mb-6">
        {apis.map((api) => (
          <div key={api.name} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-3">{api.name}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Limit</p>
                <p className="text-orange-400 font-semibold">{api.limit}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Window</p>
                <p className="text-white text-sm">{api.window}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Scope</p>
                <p className="text-white text-sm">{api.scope}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-lg font-semibold mb-3 text-white">Rate Limit Headers</h4>
      <p className="text-gray-300 mb-4">
        All API responses include rate limit headers to help you track your usage:
      </p>

      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 px-3 text-gray-400 font-semibold">Header</th>
              <th className="text-left py-2 px-3 text-gray-400 font-semibold">Description</th>
              <th className="text-left py-2 px-3 text-gray-400 font-semibold">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700/50">
              <td className="py-2 px-3">
                <code className="text-orange-400">X-RateLimit-Limit</code>
              </td>
              <td className="py-2 px-3 text-gray-300">Maximum requests allowed</td>
              <td className="py-2 px-3 text-gray-400">12</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-2 px-3">
                <code className="text-orange-400">X-RateLimit-Remaining</code>
              </td>
              <td className="py-2 px-3 text-gray-300">Requests remaining in current window</td>
              <td className="py-2 px-3 text-gray-400">8</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-2 px-3">
                <code className="text-orange-400">X-RateLimit-Reset</code>
              </td>
              <td className="py-2 px-3 text-gray-300">Unix timestamp when limit resets</td>
              <td className="py-2 px-3 text-gray-400">1704067200</td>
            </tr>
            <tr>
              <td className="py-2 px-3">
                <code className="text-orange-400">Retry-After</code>
              </td>
              <td className="py-2 px-3 text-gray-300">Seconds to wait before retry (429 only)</td>
              <td className="py-2 px-3 text-gray-400">30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-3 text-white">Handling Rate Limits</h4>
      <div className="space-y-3 text-gray-300 text-sm">
        <p>
          When you exceed the rate limit, you&apos;ll receive a <strong>429 Too Many
          Requests</strong> response with a <code className="text-orange-400">Retry-After</code>{" "}
          header indicating how many seconds to wait before retrying.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mt-3">
          <h5 className="text-white font-semibold mb-2">Best Practices</h5>
          <ul className="space-y-2">
            <li>✅ Implement exponential backoff for retries</li>
            <li>✅ Cache responses to reduce unnecessary requests</li>
            <li>✅ Use batch operations when available</li>
            <li>✅ Monitor rate limit headers in production</li>
            <li>✅ Queue requests when approaching rate limits</li>
          </ul>
        </div>
      </div>

      <Callout type="info" className="mt-6">
        <strong>Tip:</strong> Each API key has independent rate limits. If you need higher
        throughput, consider using multiple API keys for different services or environments.
      </Callout>

      <div className="mt-6 bg-gray-800 rounded-lg p-4">
        <h5 className="text-white font-semibold mb-2">Example: Implementing Retry Logic</h5>
        <pre className="text-sm text-gray-300 overflow-x-auto">
{`async function makeRequestWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);
    
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 5000;
      
      // Exponential backoff
      const backoffTime = waitTime * Math.pow(2, i);
      await new Promise(resolve => setTimeout(resolve, backoffTime));
      continue;
    }
    
    return response;
  }
  
  throw new Error('Max retries exceeded');
}`}
        </pre>
      </div>
    </div>
  );
}
