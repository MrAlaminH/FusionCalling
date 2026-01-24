export function IntroductionSection() {
  return (
    <section id="introduction" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Introduction to Admin Section
      </h2>

      <div className="space-y-8">
        {/* What is Admin Section */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            What is the Admin Section?
          </h3>
          <p className="text-gray-300 mb-6">
            The Admin Section (
            <span className="text-orange-400 font-mono">/admin</span>) is your
            agency control center where you can manage all aspects of your
            Fusion Calling platform.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold mt-1">•</span>
              <span className="text-gray-300">
                Manage all client accounts under your agency
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold mt-1">•</span>
              <span className="text-gray-300">
                Configure AI calling providers and API keys
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold mt-1">•</span>
              <span className="text-gray-300">
                Set up white-label branding for your agency
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold mt-1">•</span>
              <span className="text-gray-300">
                Create and manage subscription plans
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold mt-1">•</span>
              <span className="text-gray-300">
                Monitor and manage user credits across all accounts
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-400 font-bold mt-1">•</span>
              <span className="text-gray-300">
                View detailed user information and account status
              </span>
            </div>
          </div>
        </div>

        {/* Who Can Access */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Who Can Access?
          </h3>
          <p className="text-gray-300 mb-4">
            Only users with these roles can access the Admin Section:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-lg">✓</span>
              <div>
                <p className="font-semibold text-white">Agency Owner</p>
                <p className="text-gray-300 text-sm">
                  Can access all admin features
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Navigation Overview
          </h3>
          <p className="text-gray-300 mb-6">
            When you enter the Admin Section, you&apos;ll see a sidebar
            navigation on the left with these main sections:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                    Section
                  </th>
                  <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                    Path
                  </th>
                  <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-semibold text-white">
                    Clients
                  </td>
                  <td className="px-4 py-3 text-orange-300 font-mono text-xs">
                    /admin/clients
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Manage client accounts
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-semibold text-white">Users</td>
                  <td className="px-4 py-3 text-orange-300 font-mono text-xs">
                    /admin/users
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Manage user accounts
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-semibold text-white">
                    Calling Provider
                  </td>
                  <td className="px-4 py-3 text-orange-300 font-mono text-xs">
                    /admin/ai-provider
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Configure AI providers
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-semibold text-white">
                    Branding
                  </td>
                  <td className="px-4 py-3 text-orange-300 font-mono text-xs">
                    /admin/branding
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    White-label settings
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-semibold text-white">
                    Subscriptions
                  </td>
                  <td className="px-4 py-3 text-orange-300 font-mono text-xs">
                    /admin/subscriptions
                  </td>
                  <td className="px-4 py-3 text-gray-300">Manage plans</td>
                </tr>
                <tr className="hover:bg-gray-800/50">
                  <td className="px-4 py-3 font-semibold text-white">
                    Credits
                  </td>
                  <td className="px-4 py-3 text-orange-300 font-mono text-xs">
                    /admin/credits
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Monitor credit usage
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 mt-6 text-sm">
            <span className="text-blue-400 font-semibold">💡 Note:</span> The
            admin section redirects to the Users page by default as the main
            landing point.
          </p>
        </div>
      </div>
    </section>
  );
}
