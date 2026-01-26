export function QuickReferenceSection() {
  return (
    <section id="quick-reference" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Quick Reference</h2>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Status Meanings
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-800">
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                Status
              </th>
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                Meaning
              </th>
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                Action Needed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3">
                <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                  Pending
                </span>
              </td>
              <td className="px-4 py-3 text-gray-300">Ready to call</td>
              <td className="px-4 py-3 text-gray-400">
                None - system will call automatically
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3">
                <span className="inline-block bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                  In-Progress
                </span>
              </td>
              <td className="px-4 py-3 text-gray-300">Call happening</td>
              <td className="px-4 py-3 text-gray-400">
                Wait for call to complete
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3">
                <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
                  Retry
                </span>
              </td>
              <td className="px-4 py-3 text-gray-300">
                Waiting for retry delay
              </td>
              <td className="px-4 py-3 text-gray-400">
                None - system will retry automatically
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3">
                <span className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                  Completed
                </span>
              </td>
              <td className="px-4 py-3 text-gray-300">Finished calling</td>
              <td className="px-4 py-3 text-gray-400">Review call results</td>
            </tr>
            <tr className="hover:bg-gray-900/50">
              <td className="px-4 py-3">
                <span className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">
                  Failed
                </span>
              </td>
              <td className="px-4 py-3 text-gray-300">Permanent error</td>
              <td className="px-4 py-3 text-gray-400">
                Fix issue, change status to pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Phone Number Format
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-green-400 mb-3">
            ✅ Correct
          </h4>
          <div className="space-y-2 font-mono text-sm text-gray-300">
            <code className="block">+12125551234</code>
            <code className="block">+447911123456</code>
            <code className="block">+8801977317066</code>
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Wrong</h4>
          <div className="space-y-2 font-mono text-sm text-gray-300">
            <code className="block">212-555-1234</code>
            <code className="block">(212) 555-1234</code>
            <code className="block">01977317066</code>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Provider Comparison
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-800">
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                Feature
              </th>
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                Retell
              </th>
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                Vapi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-semibold">
                Custom Fields
              </td>
              <td className="px-4 py-3 text-gray-300">Automatic</td>
              <td className="px-4 py-3 text-gray-300">Template-based</td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-semibold">
                Configuration
              </td>
              <td className="px-4 py-3 text-gray-300">Simple</td>
              <td className="px-4 py-3 text-gray-300">More control</td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-semibold">
                Data Availability
              </td>
              <td className="px-4 py-3 text-gray-300">
                All fields always available
              </td>
              <td className="px-4 py-3 text-gray-300">
                Only referenced fields
              </td>
            </tr>
            <tr className="hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-semibold">
                Template Required
              </td>
              <td className="px-4 py-3 text-gray-300">No</td>
              <td className="px-4 py-3 text-gray-300">
                Yes (for custom fields)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
