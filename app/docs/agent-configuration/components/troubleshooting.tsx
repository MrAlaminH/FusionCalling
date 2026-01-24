export function TroubleshootingSection() {
  return (
    <section id="troubleshooting" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Troubleshooting</h2>
      <p className="text-lg text-gray-300 mb-8">
        Common issues and their solutions.
      </p>

      <div className="space-y-8">
        {/* Issue 1 */}
        <div className="bg-gray-900/50 border border-red-700/30 rounded-lg overflow-hidden">
          <div className="bg-red-900/40 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <span className="text-2xl">🔴</span>
              Agent Not Responding
            </h3>
            <p className="text-red-200 mt-2">
              Agent connects but doesn&apos;t speak or responds with errors
            </p>
          </div>
          <div className="p-8 space-y-4">
            <div>
              <p className="text-gray-300 font-semibold mb-3">Solutions:</p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    1.
                  </span>
                  <span className="text-gray-300">
                    Check{" "}
                    <span className="text-orange-400 font-semibold">
                      First Message
                    </span>{" "}
                    is not empty
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    2.
                  </span>
                  <span className="text-gray-300">
                    Verify{" "}
                    <span className="text-orange-400 font-semibold">
                      Phone Number
                    </span>{" "}
                    is correctly configured
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    3.
                  </span>
                  <span className="text-gray-300">
                    Ensure{" "}
                    <span className="text-orange-400 font-semibold">
                      LLM Provider
                    </span>{" "}
                    and{" "}
                    <span className="text-orange-400 font-semibold">Model</span>{" "}
                    are selected
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    4.
                  </span>
                  <span className="text-gray-300">
                    Check if{" "}
                    <span className="text-orange-400 font-semibold">
                      External Configuration
                    </span>{" "}
                    is properly set up
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    5.
                  </span>
                  <span className="text-gray-300">
                    Review error logs in the dashboard
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Issue 2 */}
        <div className="bg-gray-900/50 border border-red-700/30 rounded-lg overflow-hidden">
          <div className="bg-red-900/40 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <span className="text-2xl">🔴</span>
              Voice Not Working
            </h3>
            <p className="text-red-200 mt-2">
              Agent speaks with wrong voice or no voice
            </p>
          </div>
          <div className="p-8 space-y-4">
            <div>
              <p className="text-gray-300 font-semibold mb-3">Solutions:</p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    1.
                  </span>
                  <span className="text-gray-300">
                    Verify{" "}
                    <span className="text-orange-400 font-semibold">Voice</span>{" "}
                    field is set
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    2.
                  </span>
                  <span className="text-gray-300">
                    If using custom voice, check the model ID is correct
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    3.
                  </span>
                  <span className="text-gray-300">
                    Try a different standard voice
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    4.
                  </span>
                  <span className="text-gray-300">
                    Ensure voice is supported by your provider
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Issue 3 */}
        <div className="bg-gray-900/50 border border-red-700/30 rounded-lg overflow-hidden">
          <div className="bg-red-900/40 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <span className="text-2xl">🔴</span>
              Calls Dropping or Poor Quality
            </h3>
            <p className="text-red-200 mt-2">
              Calls disconnect unexpectedly, poor audio quality
            </p>
          </div>
          <div className="p-8 space-y-4">
            <div>
              <p className="text-gray-300 font-semibold mb-3">Solutions:</p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    1.
                  </span>
                  <span className="text-gray-300">
                    Check phone number configuration
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    2.
                  </span>
                  <span className="text-gray-300">
                    Verify network connectivity
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    3.
                  </span>
                  <span className="text-gray-300">
                    Adjust{" "}
                    <span className="text-orange-400 font-semibold">
                      Maximum Call Duration
                    </span>{" "}
                    if timing out
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    4.
                  </span>
                  <span className="text-gray-300">Review carrier settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    5.
                  </span>
                  <span className="text-gray-300">
                    Test with a different number
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Issue 4 */}
        <div className="bg-gray-900/50 border border-red-700/30 rounded-lg overflow-hidden">
          <div className="bg-red-900/40 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <span className="text-2xl">🔴</span>
              Webhook Not Receiving Data
            </h3>
            <p className="text-red-200 mt-2">
              End call data not being sent to your system
            </p>
          </div>
          <div className="p-8 space-y-4">
            <div>
              <p className="text-gray-300 font-semibold mb-3">Solutions:</p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    1.
                  </span>
                  <span className="text-gray-300">
                    Verify{" "}
                    <span className="text-orange-400 font-semibold">
                      Webhook URL
                    </span>{" "}
                    is correct (starts with https://)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    2.
                  </span>
                  <span className="text-gray-300">
                    Check webhook endpoint is publicly accessible
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    3.
                  </span>
                  <span className="text-gray-300">
                    Verify webhook accepts POST requests
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    4.
                  </span>
                  <span className="text-gray-300">
                    Review webhook server logs
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    5.
                  </span>
                  <span className="text-gray-300">
                    Test webhook endpoint manually
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Issue 5 */}
        <div className="bg-gray-900/50 border border-red-700/30 rounded-lg overflow-hidden">
          <div className="bg-red-900/40 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400 flex items-center gap-2">
              <span className="text-2xl">🔴</span>
              External Agent Issues
            </h3>
            <p className="text-red-200 mt-2">External agent not being called</p>
          </div>
          <div className="p-8 space-y-4">
            <div>
              <p className="text-gray-300 font-semibold mb-3">Solutions:</p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    1.
                  </span>
                  <span className="text-gray-300">
                    Ensure{" "}
                    <span className="text-orange-400 font-semibold">
                      &quot;Use External Configuration&quot;
                    </span>{" "}
                    is ON
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    2.
                  </span>
                  <span className="text-gray-300">
                    Verify{" "}
                    <span className="text-orange-400 font-semibold">
                      Primary Agent ID
                    </span>{" "}
                    is correct
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    3.
                  </span>
                  <span className="text-gray-300">
                    Check external platform (Vapi/Retell) for agent availability
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    4.
                  </span>
                  <span className="text-gray-300">
                    Confirm API credentials are configured in account settings
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">
                    5.
                  </span>
                  <span className="text-gray-300">
                    Test the agent in the external platform directly
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Escalation Path */}
      <div className="mt-12 bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-6">
          When Troubleshooting Doesn&apos;t Work
        </h3>
        <div className="space-y-4">
          <p className="text-gray-300">
            If you&apos;ve tried these solutions and the issue persists:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Check the dashboard for error logs and messages</li>
            <li>Review call transcripts to understand what went wrong</li>
            <li>Test the agent thoroughly in the Test tab</li>
            <li>
              Reach out to support with:
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Agent ID and name</li>
                <li>Steps to reproduce the issue</li>
                <li>Error messages or logs</li>
                <li>Screenshots if applicable</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
