export function BestPracticesSection() {
  return (
    <section id="best-practices" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Best Practices</h2>

      <div className="space-y-8">
        {/* Security Management */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-red-600/20 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400">
              Security Management
            </h3>
          </div>
          <div className="p-8 space-y-4">
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">1.</span>
              <div>
                <p className="font-semibold text-white">Strong Passwords</p>
                <p className="text-gray-300 text-sm">
                  Use auto-generated passwords when creating clients. Encourage
                  clients to change on first login.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">2.</span>
              <div>
                <p className="font-semibold text-white">API Key Protection</p>
                <ul className="text-gray-300 text-sm space-y-1 mt-2 ml-4">
                  <li>• Never share API keys via email or chat</li>
                  <li>• Use environment variables for development</li>
                  <li>• Regularly rotate keys (every 90 days)</li>
                  <li>• Revoke compromised keys immediately</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">3.</span>
              <div>
                <p className="font-semibold text-white">Access Control</p>
                <ul className="text-gray-300 text-sm space-y-1 mt-2 ml-4">
                  <li>• Regularly review user access</li>
                  <li>• Terminate unused accounts (90+ days)</li>
                  <li>• Use impersonation responsibly</li>
                  <li>• Maintain audit trail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Client Onboarding */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Client Onboarding
            </h3>
          </div>
          <div className="p-8 space-y-4">
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">1.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Send Welcome Emails</span> -
                Provide clear getting started instructions
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">2.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Assign Appropriate Plans</span>{" "}
                - Don&apos;t over-provision, start with Trial
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">3.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Document Key Workflows</span> -
                Create guides for common client tasks
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">4.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Monitor Early Activity</span> -
                Check new clients in first week
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">5.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Provide Support Channels</span>{" "}
                - Multiple contact options
              </p>
            </div>
          </div>
        </div>

        {/* Billing Management */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">
              Billing Management
            </h3>
          </div>
          <div className="p-8 space-y-4">
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">1.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Track Credit Usage</span> -
                Identify patterns and potential overages
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">2.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Review Revenue Regularly</span>{" "}
                - Monitor MRR/ARR trends
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">3.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Plan for Growth</span> - Scale
                infrastructure as agency grows
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-orange-400 font-bold">4.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Backup Data</span> - Regular
                database backups
              </p>
            </div>
          </div>
        </div>

        {/* Communication */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Communication
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">1.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Be Transparent</span> - Clearly
                communicate changes to clients
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">2.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Give Notice</span> - Provide
                advance notice for policy changes
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">3.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Document Everything</span> -
                Maintain records of decisions and changes
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 font-bold">4.</span>
              <p className="text-gray-300">
                <span className="font-semibold">Responsive Support</span> -
                Quick response times for client inquiries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
