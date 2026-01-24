export function QuickReferenceSection() {
  return (
    <section id="quick-ref" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Quick Reference</h2>

      <div className="space-y-8">
        {/* Admin Permissions */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-orange-600/20 border-b border-orange-700/50 p-6">
            <h3 className="text-2xl font-bold text-orange-400">
              Admin Permissions
            </h3>
          </div>
          <div className="p-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Agency Owner</span>
                <span className="text-gray-300 text-sm">
                  All admin sections, all features
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Client Admin</span>
                <span className="text-gray-300 text-sm">
                  Their client&apos;s dashboard only
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Client User</span>
                <span className="text-gray-300 text-sm">
                  Their assigned features only
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Limits by Plan */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">
              Client Limits by Plan
            </h3>
          </div>
          <div className="p-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Starter</span>
                <span className="text-gray-300">6 clients</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Pro</span>
                <span className="text-gray-300">20 clients</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Enterprise</span>
                <span className="text-gray-300">Unlimited</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Credit Allocations */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              User Credit Allocations
            </h3>
          </div>
          <div className="p-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Trial</span>
                <span className="text-gray-300">Varies (configurable)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Basic</span>
                <span className="text-gray-300">Varies (configurable)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Premium</span>
                <span className="text-gray-300">Varies (configurable)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
                <span className="font-semibold text-white">Enterprise</span>
                <span className="text-gray-300">Unlimited</span>
              </div>
            </div>
          </div>
        </div>

        {/* API Provider Limits */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-purple-600/20 border-b border-purple-700/50 p-6">
            <h3 className="text-2xl font-bold text-purple-400">
              API Provider Limits
            </h3>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-2 text-left text-purple-400 font-semibold">
                      Provider
                    </th>
                    <th className="px-4 py-2 text-left text-purple-400 font-semibold">
                      Max Concurrent
                    </th>
                    <th className="px-4 py-2 text-left text-purple-400 font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 text-gray-300">Webhook (n8n)</td>
                    <td className="px-4 py-2 text-gray-300">Unlimited</td>
                    <td className="px-4 py-2 text-gray-300">
                      Requires n8n workflow
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 text-gray-300">Vapi AI</td>
                    <td className="px-4 py-2 text-gray-300">10 calls</td>
                    <td className="px-4 py-2 text-gray-300">
                      Voice AI platform
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-4 py-2 text-gray-300">Retell AI</td>
                    <td className="px-4 py-2 text-gray-300">20 calls</td>
                    <td className="px-4 py-2 text-gray-300">
                      Conversational AI
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Common Status Values */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-red-600/20 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400">
              Common Status Values
            </h3>
          </div>
          <div className="p-8 space-y-2">
            <div className="flex items-start gap-3 bg-gray-800/50 p-3 rounded">
              <span className="text-green-400 font-bold mt-0.5">●</span>
              <div>
                <p className="font-semibold text-gray-200">Active</p>
                <p className="text-gray-300 text-sm">
                  Full access to all features
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-3 rounded">
              <span className="text-yellow-400 font-bold mt-0.5">●</span>
              <div>
                <p className="font-semibold text-gray-200">Paused</p>
                <p className="text-gray-300 text-sm">
                  Suspended by admin (no new signins)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-3 rounded">
              <span className="text-orange-400 font-bold mt-0.5">●</span>
              <div>
                <p className="font-semibold text-gray-200">Suspended</p>
                <p className="text-gray-300 text-sm">
                  Limited access due to violation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-3 rounded">
              <span className="text-red-400 font-bold mt-0.5">●</span>
              <div>
                <p className="font-semibold text-gray-200">Terminated</p>
                <p className="text-gray-300 text-sm">
                  Account closed, data preserved
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-3 rounded">
              <span className="text-gray-600 font-bold mt-0.5">●</span>
              <div>
                <p className="font-semibold text-gray-200">Deleted</p>
                <p className="text-gray-300 text-sm">Permanently removed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-6">
            Quick Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-orange-300 font-semibold mb-2">
                💡 Client Creation
              </p>
              <p className="text-gray-300 text-sm">
                Always start new clients on Trial plan to evaluate before
                converting to paid
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-orange-300 font-semibold mb-2">💡 API Keys</p>
              <p className="text-gray-300 text-sm">
                Test all API keys before deploying to ensure connectivity
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-orange-300 font-semibold mb-2">
                💡 Monitoring
              </p>
              <p className="text-gray-300 text-sm">
                Regularly review credits usage to identify trends and
                opportunities
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-orange-300 font-semibold mb-2">
                💡 Documentation
              </p>
              <p className="text-gray-300 text-sm">
                Document all client changes and reasons for audit trail
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-orange-300 font-semibold mb-2">💡 Support</p>
              <p className="text-gray-300 text-sm">
                Quick response times build client trust and loyalty
              </p>
            </div>
            <div className="bg-gray-900/50 rounded p-4">
              <p className="text-orange-300 font-semibold mb-2">💡 Security</p>
              <p className="text-gray-300 text-sm">
                Rotate API keys every 90 days and never share them
              </p>
            </div>
          </div>
        </div>

        {/* Getting Help */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            Getting Help
          </h3>
          <ol className="space-y-2 text-gray-300">
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">1.</span>
              <span>
                Review This Guide - Each section has detailed explanations
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">2.</span>
              <span>
                Check Agent Configuration Guide - For agent setup details
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">3.</span>
              <span>
                Test Features - Use non-production accounts for testing
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">4.</span>
              <span>
                Follow Best Practices - Implement security and access controls
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">5.</span>
              <span>Contact Support - Reach out for technical issues</span>
            </li>
          </ol>
        </div>

        {/* Next Steps */}
        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-400 mb-4">Next Steps</h3>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Familiarize yourself - Explore each admin section</li>
            <li>Start small - Create your first test client</li>
            <li>
              Set up branding - Configure your agency&apos;s identity early
            </li>
            <li>Configure AI provider - Set up AI provider keys</li>
            <li>Monitor usage - Check credits and activity regularly</li>
            <li>Document processes - Create internal guides for your team</li>
            <li>Stay secure - Regularly review permissions and controls</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
