export function AICredentialsSection() {
  return (
    <section id="ai-provider" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        AI Provider Configuration
      </h2>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h3>
          <p className="text-gray-300">
            Configure AI calling providers with a sophisticated two-tier API key
            system. Set up global keys that apply to all clients, or create
            client-specific overrides.
          </p>
        </div>

        {/* Provider Selection */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-purple-600/20 border-b border-purple-700/50 p-6">
            <h3 className="text-2xl font-bold text-purple-400">
              Provider Selection
            </h3>
            <p className="text-purple-200 mt-2">
              Choose between three AI calling approaches
            </p>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-gray-800">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-4 py-2 text-left text-purple-400 font-semibold">
                      Provider
                    </th>
                    <th className="px-4 py-2 text-left text-purple-400 font-semibold">
                      Description
                    </th>
                    <th className="px-4 py-2 text-left text-purple-400 font-semibold">
                      Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      External Webhook (n8n)
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Flexible automation workflows
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Default, full control
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      Vapi AI
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Direct Vapi integration
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Voice AI with advanced tools
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      Retell AI
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Direct Retell integration
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Conversational AI platform
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
              <p className="text-blue-400 font-semibold mb-2">
                Setting the Active Provider
              </p>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>
                  Navigate to{" "}
                  <span className="text-blue-400 font-semibold">
                    Calling Provider
                  </span>{" "}
                  section
                </li>
                <li>Review the &quot;Calling Provider&quot; card</li>
                <li>Select your preferred provider</li>
                <li>
                  Click{" "}
                  <span className="text-blue-400 font-semibold">
                    Save Provider
                  </span>{" "}
                  to apply
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Global API Keys */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Global API Keys
            </h3>
            <p className="text-green-200 mt-2">
              Configure agency-level API keys that serve as defaults
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                How Global Keys Work
              </h4>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>✓ Apply to all clients as fallback</li>
                <li>✓ Used when clients don&apos;t have their own API keys</li>
                <li>✓ Can be overridden by client-specific keys</li>
                <li>✓ Managed at the agency level</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                Setting Up Global Keys
              </h4>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>
                  Ensure you&apos;re in the{" "}
                  <span className="text-green-400 font-semibold">
                    Global Keys
                  </span>{" "}
                  tab
                </li>
                <li>Select provider (Vapi or Retell)</li>
                <li>
                  Enter your API key and click{" "}
                  <span className="text-green-400 font-semibold">Save</span>
                </li>
                <li>
                  Verify the connection using the{" "}
                  <span className="text-green-400 font-semibold">Test</span>{" "}
                  button
                </li>
              </ol>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
              <p className="text-yellow-400 font-semibold mb-2">
                Best Practices
              </p>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                <li>• Use separate API keys for production vs. development</li>
                <li>• Regularly rotate API keys for security</li>
                <li>• Keep keys confidential - never share them</li>
                <li>• Test keys before deploying to production</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Two-Tier System */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Two-Tier System Explained
          </h3>
          <p className="text-gray-300 mb-6">
            The system intelligently manages which key is used based on
            availability and configuration:
          </p>

          <div className="space-y-3">
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="font-semibold text-blue-400 mb-1">
                Global Key Only
              </p>
              <p className="text-gray-300 text-sm">
                Agency has Vapi key configured, Client has no key → Agency key
                used for all calls
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="font-semibold text-blue-400 mb-1">
                Client Override
              </p>
              <p className="text-gray-300 text-sm">
                Both configured → Client&apos;s key is primary, agency key is
                fallback
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="font-semibold text-blue-400 mb-1">Redundancy</p>
              <p className="text-gray-300 text-sm">
                Both keys configured → Automatic switching if primary fails
              </p>
            </div>
          </div>
        </div>

        {/* Connection Testing */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-indigo-600/20 border-b border-indigo-700/50 p-6">
            <h3 className="text-2xl font-bold text-indigo-400">
              Connection Testing
            </h3>
            <p className="text-indigo-200 mt-2">
              Always verify your API credentials before relying on them
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                How to Test
              </h4>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>
                  Click the{" "}
                  <span className="text-indigo-400 font-semibold">Test</span>{" "}
                  button next to a saved API key
                </li>
                <li>System sends a verification request to the provider</li>
                <li>Result appears with success or error message</li>
              </ol>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                Troubleshooting Failed Tests
              </h4>
              <p className="text-gray-300 mb-3">If tests fail, check:</p>
              <ul className="space-y-1 text-gray-300 ml-4 text-sm">
                <li>✗ API key format (copy carefully without extra spaces)</li>
                <li>✗ API key validity (not expired, not revoked)</li>
                <li>✗ Provider account status (active subscription)</li>
                <li>✗ Network connectivity</li>
                <li>✗ Provider service availability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
