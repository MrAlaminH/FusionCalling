import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export function QuickReferenceSection() {
  return (
    <section id="quick-reference" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Quick Reference</h2>

      {/* Voice Throughput Calculator Card */}
      <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="p-3 bg-indigo-600/20 rounded-lg shrink-0">
            <Calculator className="w-8 h-8 text-indigo-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">
              Voice Throughput Calculator
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Estimate your calling capacity based on concurrency, call
              duration, and batch frequency. Plan your lead processing strategy
              and understand infrastructure limits before scaling your
              campaigns.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-400">
              <span className="bg-gray-800/50 px-2 py-1 rounded">
                Concurrency Planning
              </span>
              <span className="bg-gray-800/50 px-2 py-1 rounded">
                Throughput Estimation
              </span>
              <span className="bg-gray-800/50 px-2 py-1 rounded">
                Infrastructure Limits
              </span>
            </div>
          </div>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors shrink-0"
          >
            Open Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

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
        Error Messages Quick Reference
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-800">
              <th className="px-4 py-3 text-left text-red-400 font-semibold">
                Permanent Errors (Action Required)
              </th>
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                What It Means
              </th>
              <th className="px-4 py-3 text-left text-green-400 font-semibold">
                What To Do
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Invalid lead phone number format
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Phone number format is wrong
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                Fix the format to E.164 (+14155551234)
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Phone number not registered
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Your caller ID isn&apos;t set up
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                Register phone number in provider dashboard
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Agent or assistant not found
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Agent doesn&apos;t exist
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                Check agent ID in settings
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                API key is invalid or missing
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Authentication failed
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                Check/update API key
              </td>
            </tr>
            <tr className="hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Phone number does not exist
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Lead&apos;s number is invalid
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                Get correct number from lead
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-800">
              <th className="px-4 py-3 text-left text-yellow-400 font-semibold">
                Temporary Errors (Auto-Retry)
              </th>
              <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                What It Means
              </th>
              <th className="px-4 py-3 text-left text-blue-400 font-semibold">
                What Happens
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Rate limit exceeded
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Too many calls too fast
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                System waits and retries
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Server error
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Provider is having issues
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                System retries automatically
              </td>
            </tr>
            <tr className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Network or connection error
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Can&apos;t reach provider
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                System retries automatically
              </td>
            </tr>
            <tr className="hover:bg-gray-900/50">
              <td className="px-4 py-3 text-gray-300 font-mono text-xs">
                Unknown error
              </td>
              <td className="px-4 py-3 text-gray-300 text-sm">
                Unexpected issue
              </td>
              <td className="px-4 py-3 text-gray-400 text-sm">
                System retries for safety
              </td>
            </tr>
          </tbody>
        </table>
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
