export function TroubleshootingSection() {
  return (
    <section id="troubleshooting" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Troubleshooting</h2>

      <div className="space-y-8">
        {/* Issue 1 */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Lead Stuck in &quot;Pending&quot;
          </h3>
          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4 mb-4">
            <p className="text-orange-400 font-semibold mb-2">
              Possible Causes:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4 text-sm">
              <li>• Auto-calling is disabled</li>
              <li>• Outside of calling hours (if schedule is set)</li>
              <li>• No agent selected</li>
              <li>• System has reached max concurrent calls</li>
            </ul>
          </div>
          <p className="text-white font-semibold mb-3">Solutions:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Check Settings → Auto-calling is enabled</li>
            <li>Verify calling schedule allows calls now</li>
            <li>Ensure an agent is selected</li>
            <li>Wait for current calls to complete</li>
          </ol>
        </div>

        {/* Issue 2 */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Lead Stuck in &quot;In-Progress&quot;
          </h3>
          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4 mb-4">
            <p className="text-orange-400 font-semibold mb-2">
              Possible Causes:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4 text-sm">
              <li>• Call is actually still happening</li>
              <li>• Call completed but webhook hasn&apos;t updated status</li>
              <li>• System error</li>
            </ul>
          </div>
          <p className="text-white font-semibold mb-3">Solutions:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Wait 5-10 minutes (calls can take time)</li>
            <li>Check call history to see if call completed</li>
            <li>
              System automatically cleans up stale &quot;in-progress&quot; leads
              after 2 hours
            </li>
          </ol>
        </div>

        {/* Issue 3 */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Lead Marked as &quot;Failed&quot;
          </h3>
          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4 mb-4">
            <p className="text-orange-400 font-semibold mb-2">
              Possible Causes:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4 text-sm">
              <li>• Invalid phone number format</li>
              <li>• Phone number doesn&apos;t exist</li>
              <li>• Permanent error from provider</li>
            </ul>
          </div>
          <p className="text-white font-semibold mb-3">Solutions:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Check lead details for error message</li>
            <li>
              Fix phone number format (must be E.164:{" "}
              <code className="text-orange-400 bg-gray-950 px-2 py-1 rounded">
                +countrycode+number
              </code>
              )
            </li>
            <li>Verify phone number is correct</li>
            <li>Change status back to &quot;pending&quot; after fixing</li>
          </ol>
        </div>

        {/* Issue 4 */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Lead Not Retrying
          </h3>
          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4 mb-4">
            <p className="text-orange-400 font-semibold mb-2">
              Possible Causes:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4 text-sm">
              <li>• Retry delay hasn&apos;t passed yet</li>
              <li>• Maximum attempts already reached</li>
              <li>• Lead is in &quot;failed&quot; status (won&apos;t retry)</li>
            </ul>
          </div>
          <p className="text-white font-semibold mb-3">Solutions:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Check &quot;Time Until Next Retry&quot; in lead details</li>
            <li>Verify lead hasn&apos;t reached max attempts</li>
            <li>
              If in &quot;failed&quot; status, fix the issue and manually change
              to &quot;pending&quot;
            </li>
          </ol>
        </div>

        {/* Issue 5 */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Custom Fields Not Working (Vapi)
          </h3>
          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4 mb-4">
            <p className="text-orange-400 font-semibold mb-2">
              Possible Causes:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4 text-sm">
              <li>• Custom field not referenced in templates</li>
              <li>• Wrong placeholder syntax</li>
              <li>• Field name doesn&apos;t match</li>
            </ul>
          </div>
          <p className="text-white font-semibold mb-3">Solutions:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>
              Add{" "}
              <code className="text-orange-400 bg-gray-950 px-2 py-1 rounded">
                {"{"}
                {"{"}your_field_name{"}"}
                {"}"}
              </code>{" "}
              to first message or system prompt
            </li>
            <li>Check field name matches exactly (case-sensitive)</li>
            <li>Verify custom field has data for the lead</li>
          </ol>
        </div>

        {/* Issue 6 */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Custom Fields Not Working (Retell)
          </h3>
          <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4 mb-4">
            <p className="text-orange-400 font-semibold mb-2">
              Possible Causes:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4 text-sm">
              <li>• Custom field name has special characters</li>
              <li>• Field value is empty</li>
            </ul>
          </div>
          <p className="text-white font-semibold mb-3">Solutions:</p>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>
              Custom fields should work automatically - check field has data
            </li>
            <li>Use simple field names (letters, numbers, underscores)</li>
            <li>Verify custom field is saved for the lead</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
