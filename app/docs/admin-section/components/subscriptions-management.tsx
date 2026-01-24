export function SubscriptionsManagementSection() {
  return (
    <section id="subscriptions" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Subscriptions Management
      </h2>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h3>
          <p className="text-gray-300">
            Create and manage subscription plans that determine client features,
            pricing, and resource allocations.
          </p>
        </div>

        {/* Creating Plans */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Creating Plans
            </h3>
            <p className="text-green-200 mt-2">
              Define subscription tiers for your agency clients
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">
                    Navigate to Subscriptions
                  </span>{" "}
                  - Click Subscriptions in the Admin sidebar
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">
                    Click &quot;Create Plan&quot;
                  </span>{" "}
                  - Click the + Create Plan button
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <div>
                  <p className="text-gray-300 mb-3">
                    <span className="font-semibold">Define Plan Details</span> -
                    Fill in the plan configuration:
                  </p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="bg-gray-800/50 p-2 rounded">
                      <span className="text-orange-400 font-semibold">
                        Plan Name
                      </span>{" "}
                      - Internal identifier (e.g., &quot;starter_monthly&quot;)
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded">
                      <span className="text-orange-400 font-semibold">
                        Display Name
                      </span>{" "}
                      - What clients see (e.g., &quot;Starter&quot;)
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded">
                      <span className="text-orange-400 font-semibold">
                        Description
                      </span>{" "}
                      - Explain what&apos;s included
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded">
                      <span className="text-orange-400 font-semibold">
                        Minutes Allowed
                      </span>{" "}
                      - Credit allocation per billing period
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded">
                      <span className="text-orange-400 font-semibold">
                        Monthly Price
                      </span>{" "}
                      - Optional pricing
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded">
                      <span className="text-orange-400 font-semibold">
                        Yearly Price
                      </span>{" "}
                      - Optional (typically 12% discount)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Plans */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">Managing Plans</h3>
            <p className="text-blue-200 mt-2">
              View plan distribution and revenue analytics
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                Plan Distribution Dashboard
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                See how accounts are distributed across your plans:
              </p>
              <ul className="space-y-1 text-gray-300 text-sm ml-4">
                <li>✓ Accounts per plan - Count of active clients</li>
                <li>✓ Percentage breakdown - Visual distribution</li>
                <li>✓ Trial accounts - Number of trial users</li>
                <li>✓ Active vs. inactive - Plan popularity metrics</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                Revenue Tracking
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Monitor financial performance with key metrics:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="font-semibold text-gray-200">MRR</span>
                  <span className="text-gray-300">
                    Monthly Recurring Revenue - Sum of monthly prices
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="font-semibold text-gray-200">ARR</span>
                  <span className="text-gray-300">
                    Annual Recurring Revenue - MRR × 12
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-gray-800/50 rounded text-sm">
                  <span className="font-semibold text-gray-200">
                    Per-Plan Revenue
                  </span>
                  <span className="text-gray-300">
                    Revenue by plan - Identify top performers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editing Plans */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-purple-600/20 border-b border-purple-700/50 p-6">
            <h3 className="text-2xl font-bold text-purple-400">
              Editing Plans
            </h3>
            <p className="text-purple-200 mt-2">
              Modify existing plans to adjust pricing or features
            </p>
          </div>
          <div className="p-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">1.</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Locate Plan</span> - Find the
                  plan you want to modify
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">2.</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Click Edit</span> - Access the
                  edit icon or actions menu
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">3.</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Update Fields</span> - Modify
                  pricing, features, or descriptions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">4.</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Save Changes</span> - Click
                  Save to apply updates immediately
                </span>
              </li>
            </ol>
            <p className="text-yellow-400 text-sm mt-4">
              ⚠ Note: Existing clients won&apos;t be automatically charged for
              price changes
            </p>
          </div>
        </div>

        {/* Deleting Plans */}
        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-red-400">
            Deleting Plans
          </h3>
          <p className="text-gray-300 mb-4">
            Remove plans that are no longer needed:
          </p>
          <div className="space-y-3">
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="font-semibold text-gray-200 mb-1">
                Soft Delete (Recommended)
              </p>
              <p className="text-gray-300 text-sm">
                Deactivate plan - No new signups, but existing clients retain
                access
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded">
              <p className="font-semibold text-gray-200 mb-1">Hard Delete</p>
              <p className="text-gray-300 text-sm">
                Permanently remove - Completely removes from system (use
                sparingly)
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            ✓ Recommendation: Always use Soft Delete first to avoid disrupting
            existing clients
          </p>
        </div>
      </div>
    </section>
  );
}
