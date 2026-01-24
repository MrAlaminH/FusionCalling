export function CommonWorkflowsSection() {
  return (
    <section id="workflows" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Common Workflows</h2>

      <div className="space-y-8">
        {/* Workflow 1 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">
              Workflow 1: Onboarding New Client
            </h3>
            <p className="text-blue-200 mt-2">
              Get a new client up and running successfully
            </p>
          </div>
          <div className="p-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  1
                </span>
                <span className="text-gray-300">Create Client Account</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  2
                </span>
                <span className="text-gray-300">
                  Assign Trial Plan (for evaluation period)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  3
                </span>
                <span className="text-gray-300">
                  Copy credentials and email to client
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  4
                </span>
                <span className="text-gray-300">
                  Schedule welcome call or onboarding session
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  5
                </span>
                <span className="text-gray-300">
                  Set up agent (see Agent Configuration Guide)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  6
                </span>
                <span className="text-gray-300">
                  Monitor first-week activity
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-blue-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  7
                </span>
                <span className="text-gray-300">
                  Convert to paid plan after trial period
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Workflow 2 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Workflow 2: Upgrading Client
            </h3>
            <p className="text-green-200 mt-2">
              Client wants more features or higher limits
            </p>
          </div>
          <div className="p-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  1
                </span>
                <span className="text-gray-300">
                  Review current usage and needs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  2
                </span>
                <span className="text-gray-300">
                  Select appropriate plan upgrade
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  3
                </span>
                <span className="text-gray-300">
                  Change client&apos;s subscription tier
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  4
                </span>
                <span className="text-gray-300">
                  Communicate new features and benefits
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  5
                </span>
                <span className="text-gray-300">
                  Update pricing/credits immediately
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  6
                </span>
                <span className="text-gray-300">
                  Document change date and reason
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-green-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  7
                </span>
                <span className="text-gray-300">
                  Follow up to ensure satisfaction
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Workflow 3 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-yellow-600/20 border-b border-yellow-700/50 p-6">
            <h3 className="text-2xl font-bold text-yellow-400">
              Workflow 3: Managing Overages
            </h3>
            <p className="text-yellow-200 mt-2">
              Handle clients who exceed their credit limits
            </p>
          </div>
          <div className="p-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  1
                </span>
                <span className="text-gray-300">
                  Monitor usage alerts (automatic or manual)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  2
                </span>
                <span className="text-gray-300">
                  Contact client before reaching limit
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  3
                </span>
                <span className="text-gray-300">Discuss upgrade options</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  4
                </span>
                <span className="text-gray-300">
                  If urgent: Process add-on credits
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  5
                </span>
                <span className="text-gray-300">
                  Set expectations for limit enforcement
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  6
                </span>
                <span className="text-gray-300">
                  Provide upgrade or purchase options
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-yellow-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  7
                </span>
                <span className="text-gray-300">Document the conversation</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Workflow 4 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-red-600/20 border-b border-red-700/50 p-6">
            <h3 className="text-2xl font-bold text-red-400">
              Workflow 4: Termination
            </h3>
            <p className="text-red-200 mt-2">
              Professional account termination when needed
            </p>
          </div>
          <div className="p-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  1
                </span>
                <span className="text-gray-300">
                  Identify termination reason
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  2
                </span>
                <span className="text-gray-300">
                  Communicate with client in advance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  3
                </span>
                <span className="text-gray-300">
                  Export client data (if required/requested)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  4
                </span>
                <span className="text-gray-300">Terminate user accounts</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  5
                </span>
                <span className="text-gray-300">Backup all configurations</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  6
                </span>
                <span className="text-gray-300">
                  Confirm termination details in writing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-red-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  7
                </span>
                <span className="text-gray-300">
                  Retain data for retention period
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Workflow 5 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-purple-600/20 border-b border-purple-700/50 p-6">
            <h3 className="text-2xl font-bold text-purple-400">
              Workflow 5: Migration
            </h3>
            <p className="text-purple-200 mt-2">
              Client moves from another platform or agency
            </p>
          </div>
          <div className="p-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  1
                </span>
                <span className="text-gray-300">
                  Gather client requirements and existing data
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  2
                </span>
                <span className="text-gray-300">Create client account</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  3
                </span>
                <span className="text-gray-300">
                  Import data (or rebuild configurations)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  4
                </span>
                <span className="text-gray-300">
                  Set up agents matching previous config
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  5
                </span>
                <span className="text-gray-300">Test all integrations</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  6
                </span>
                <span className="text-gray-300">
                  Schedule training session with client
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-purple-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                  7
                </span>
                <span className="text-gray-300">
                  Monitor closely during transition
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
