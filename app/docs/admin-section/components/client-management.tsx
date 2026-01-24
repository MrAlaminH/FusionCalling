export function ClientManagementSection() {
  return (
    <section id="client-management" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Client Management</h2>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h3>
          <p className="text-gray-300">
            The Clients section allows you to create, invite, and manage all
            client accounts under your agency. This is the core of your
            multi-tenant SaaS platform.
          </p>
        </div>

        {/* Creating Clients */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Creating Clients
            </h3>
            <p className="text-green-200 mt-2">
              Create new client accounts instantly with automatic configuration
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  Navigate to Clients
                </h4>
                <p className="text-gray-300">
                  From the Admin sidebar, click{" "}
                  <span className="text-orange-400 font-semibold">Clients</span>{" "}
                  in the navigation menu.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  Click &quot;Create Client&quot;
                </h4>
                <p className="text-gray-300">
                  Click the blue{" "}
                  <span className="text-orange-400 font-semibold">
                    + Create Client
                  </span>{" "}
                  button in the top-right corner.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  Fill in Client Information
                </h4>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm border border-gray-800">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-4 py-2 text-left text-orange-400 font-semibold">
                          Field
                        </th>
                        <th className="px-4 py-2 text-left text-orange-400 font-semibold">
                          Description
                        </th>
                        <th className="px-4 py-2 text-left text-orange-400 font-semibold">
                          Required
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                        <td className="px-4 py-2 font-semibold text-white">
                          Client Name
                        </td>
                        <td className="px-4 py-2 text-gray-300">
                          Business name or identifier
                        </td>
                        <td className="px-4 py-2">
                          <span className="inline-block bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                            Yes
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                        <td className="px-4 py-2 font-semibold text-white">
                          Email Address
                        </td>
                        <td className="px-4 py-2 text-gray-300">
                          Primary contact email
                        </td>
                        <td className="px-4 py-2">
                          <span className="inline-block bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                            Yes
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-800/50">
                        <td className="px-4 py-2 font-semibold text-white">
                          Assign Plan
                        </td>
                        <td className="px-4 py-2 text-gray-300">
                          Choose subscription plan
                        </td>
                        <td className="px-4 py-2">
                          <span className="inline-block bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                            Optional
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  Configure Credentials
                </h4>
                <p className="text-gray-300 mb-3">
                  Choose how to deliver login credentials:
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="bg-gray-800/50 p-3 rounded">
                    <p className="font-semibold text-gray-200">
                      Copy to Clipboard
                    </p>
                    <p>
                      Copy username and password to clipboard, then share
                      manually
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded">
                    <p className="font-semibold text-gray-200">
                      Send via Email
                    </p>
                    <p>Automatically email credentials directly to client</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-2">
                  Create the Account
                </h4>
                <p className="text-gray-300">
                  Click{" "}
                  <span className="text-orange-400 font-semibold">
                    Create Client
                  </span>{" "}
                  to instantly provision the account with:
                </p>
                <ul className="mt-2 space-y-1 text-gray-300 ml-4">
                  <li>✓ Unique account ID</li>
                  <li>✓ Auto-generated secure password</li>
                  <li>✓ Assigned subscription plan</li>
                  <li>✓ Initial credit allocation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Client Status */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Client Status Indicators
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded">
              <span className="text-blue-400 font-bold">●</span>
              <div>
                <p className="font-semibold text-white">Active</p>
                <p className="text-gray-300 text-sm">
                  Account is fully operational - Full access
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded">
              <span className="text-yellow-400 font-bold">●</span>
              <div>
                <p className="font-semibold text-white">Paused</p>
                <p className="text-gray-300 text-sm">
                  Account temporarily suspended - Click to resume
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded">
              <span className="text-red-400 font-bold">●</span>
              <div>
                <p className="font-semibold text-white">Blocked</p>
                <p className="text-gray-300 text-sm">
                  Account blocked by admin - Unblock or contact
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded">
              <span className="text-gray-400 font-bold">●</span>
              <div>
                <p className="font-semibold text-white">Deleted</p>
                <p className="text-gray-300 text-sm">
                  Account deleted - Cannot be restored
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Limits */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Client Limits
          </h3>
          <p className="text-gray-300 mb-4">
            Your subscription plans determine how many clients you can manage:
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="font-semibold text-white">Starter</span>
              <span className="text-gray-300">6 clients (Warning at 80%)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="font-semibold text-white">Pro</span>
              <span className="text-gray-300">20 clients (Warning at 80%)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="font-semibold text-white">Enterprise</span>
              <span className="text-gray-300">Unlimited (No limit)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
