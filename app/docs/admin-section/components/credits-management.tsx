export function CreditsManagementSection() {
  return (
    <section id="credits" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Credits Management</h2>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h3>
          <p className="text-gray-300">
            Monitor and manage user credit usage across all client accounts with
            advanced filtering and tracking capabilities.
          </p>
        </div>

        {/* Viewing Credits */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">
              Viewing Credits
            </h3>
            <p className="text-blue-200 mt-2">
              Access a comprehensive credits dashboard with statistics
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                Credit Information Displayed
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Email</span>
                  <span className="text-gray-400">
                    User&apos;s email address
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Minutes Used</span>
                  <span className="text-gray-400">Total minutes consumed</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Minutes Allowed</span>
                  <span className="text-gray-400">Total minutes allocated</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Usage Percentage</span>
                  <span className="text-gray-400">Visual progress bar</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Last Sign-In</span>
                  <span className="text-gray-400">Most recent login</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                Progress Bar Indicators
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 bg-green-600 rounded"></div>
                  <span className="text-gray-300 text-sm">
                    <span className="font-semibold">Low (0-50%)</span> - Healthy
                    usage
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 bg-yellow-600 rounded"></div>
                  <span className="text-gray-300 text-sm">
                    <span className="font-semibold">Medium (51-75%)</span> -
                    Moderate usage
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 bg-orange-600 rounded"></div>
                  <span className="text-gray-300 text-sm">
                    <span className="font-semibold">High (76-99%)</span> - Near
                    limit
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-2 bg-red-600 rounded"></div>
                  <span className="text-gray-300 text-sm">
                    <span className="font-semibold">Near Limit (100%)</span> -
                    Limit reached
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtering Users */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Filtering Users
            </h3>
            <p className="text-green-200 mt-2">
              Quickly find specific users based on various criteria
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                Search
              </h4>
              <p className="text-gray-300 text-sm">
                Type in email address or account name - case-insensitive search
                with real-time results
              </p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                Filter by Tier
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Show users from specific subscription plans:
              </p>
              <div className="space-y-1 text-sm text-gray-300 ml-4">
                <div>• Trial - Users on trial plans</div>
                <div>• Basic - Standard subscription users</div>
                <div>• Premium - Enhanced subscription users</div>
                <div>• Enterprise - Unlimited plan users</div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                Filter by Usage
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Identify users based on their consumption:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Low</span>
                  <span className="text-gray-400">&lt; 50% usage</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Medium</span>
                  <span className="text-gray-400">50-75% usage</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">High</span>
                  <span className="text-gray-400">76-99% usage</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="text-gray-300">Near Limit</span>
                  <span className="text-gray-400">~100% usage</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Resets */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-purple-600/20 border-b border-purple-700/50 p-6">
            <h3 className="text-2xl font-bold text-purple-400">
              Manual Resets
            </h3>
            <p className="text-purple-200 mt-2">
              Manually reset user credits to clear usage
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                When to Reset
              </h4>
              <ul className="space-y-1 text-gray-300 text-sm ml-4">
                <li>• Credits were incorrectly calculated</li>
                <li>• Granting promotional credits to users</li>
                <li>• Correcting usage discrepancies</li>
                <li>• Testing scenarios</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Reset Options
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="font-semibold text-gray-200 text-sm">Admin</p>
                  <p className="text-gray-300 text-xs">
                    Manual override by agency - Use to correct billing errors
                  </p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="font-semibold text-gray-200 text-sm">System</p>
                  <p className="text-gray-300 text-xs">
                    Automated reset by billing - For credit usage tracking
                  </p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded">
                  <p className="font-semibold text-gray-200 text-sm">Billing</p>
                  <p className="text-gray-300 text-xs">
                    Payment-based reset - On subscription renewal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Management */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Tier Management
          </h3>
          <p className="text-gray-300 mb-4">
            Upgrade or downgrade user subscription tiers:
          </p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>
              <span className="font-semibold">Locate User</span> - Find the user
              in the credits table
            </li>
            <li>
              <span className="font-semibold">Change Tier</span> - Click the
              &quot;Change Tier&quot; button
            </li>
            <li>
              <span className="font-semibold">Select New Tier</span> - Choose
              from Trial, Basic, Premium, Enterprise
            </li>
            <li>
              <span className="font-semibold">Confirm Change</span> - Credit
              allocation updates immediately
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
