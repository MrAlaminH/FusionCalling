export function UserManagementSection() {
  return (
    <section id="user-management" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">User Management</h2>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h3>
          <p className="text-gray-300">
            The Users section provides comprehensive user account management
            across all client accounts. View, filter, and manage individual user
            accounts with full lifecycle control.
          </p>
        </div>

        {/* Viewing Users */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">Viewing Users</h3>
            <p className="text-blue-200 mt-2">
              Access a paginated table showing all users across your agency
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                User Information Displayed
              </h4>
              <p className="text-gray-300 mb-4">Each user row shows:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>✓ Email Address - Primary identifier</li>
                <li>✓ Account Name - Associated client account</li>
                <li>
                  ✓ Subscription Plan - Current tier (Trial, Basic, Premium,
                  Enterprise)
                </li>
                <li>
                  ✓ Account Status - Active, Paused, Suspended, Terminated,
                  Deleted
                </li>
                <li>✓ Last Sign-In - Last login timestamp</li>
                <li>✓ Created Date - When user account was created</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                Filtering Users
              </h4>
              <p className="text-gray-300 mb-4">
                Search and filter users with these options:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-800">
                  <thead>
                    <tr className="bg-gray-800 border-b border-gray-700">
                      <th className="px-4 py-2 text-left text-blue-400 font-semibold">
                        Filter Type
                      </th>
                      <th className="px-4 py-2 text-left text-blue-400 font-semibold">
                        Options
                      </th>
                      <th className="px-4 py-2 text-left text-blue-400 font-semibold">
                        Use Case
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-2 font-semibold text-white">
                        Search
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        By email or account name
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        Find specific users
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-2 font-semibold text-white">
                        Status Filter
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        All, Active, Paused, Suspended, Terminated, Deleted
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        View specific states
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-2 font-semibold text-white">
                        Tier Filter
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        All, Trial, Basic, Premium, Enterprise
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        View specific plans
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-800/50">
                      <td className="px-4 py-2 font-semibold text-white">
                        Usage Filter
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        All, Low, Medium, High, Near Limit
                      </td>
                      <td className="px-4 py-2 text-gray-300">
                        Identify heavy users
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Account Termination */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-red-600/20 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400">
              Account Termination
            </h3>
            <p className="text-red-200 mt-2">
              Terminate problematic user accounts while preserving data
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Locate User</span> - Find the
                  user in the table or use search/filter options
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Click Terminate</span> -
                  Access the three-dot menu and select Terminate Account
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
                    <span className="font-semibold">Provide Reason</span> -
                    Select a termination reason:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-800/50 p-2 rounded text-gray-300">
                      <span className="text-orange-400 font-semibold">
                        Non-Payment
                      </span>{" "}
                      - Client hasn&apos;t paid
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded text-gray-300">
                      <span className="text-orange-400 font-semibold">
                        Policy Violation
                      </span>{" "}
                      - User violated terms
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded text-gray-300">
                      <span className="text-orange-400 font-semibold">
                        Inactivity
                      </span>{" "}
                      - Account unused for extended period
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded text-gray-300">
                      <span className="text-orange-400 font-semibold">
                        Fraud
                      </span>{" "}
                      - Suspicious activity detected
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Confirm Termination</span> -
                  This immediately suspends user access and marks account as
                  &quot;Terminated&quot;
                </p>
                <p className="text-yellow-400 text-sm mt-2">
                  ℹ Important: This is reversible - accounts can be restored if
                  needed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Restoration */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Account Restoration
            </h3>
            <p className="text-green-200 mt-2">
              Restore terminated user accounts to reactivate access
            </p>
          </div>
          <div className="p-8 space-y-4">
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Locate Terminated User</span>{" "}
                  - Use filters to find users with &quot;Terminated&quot; status
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Click Restore</span> - Access
                  the three-dot menu and select Restore Account
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-gray-300">
                  <span className="font-semibold">Confirm Restoration</span> -
                  This reactivates user access and restores all previous data
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Expansion */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Expanding User Details
          </h3>
          <p className="text-gray-300 mb-4">
            Click on any user row to expand and view detailed information
            including:
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li>✓ Full User Information</li>
            <li>✓ Account Details and Subscription</li>
            <li>✓ Membership Information</li>
            <li>✓ Activity History</li>
            <li>✓ Quick Actions (terminate, restore, delete)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
