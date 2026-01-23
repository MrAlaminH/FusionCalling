export function StatusFlowSection() {
  return (
    <section id="status-flow" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        How Lead Statuses Change
      </h2>
      <p className="text-gray-300 mb-8">
        Understanding the flow helps you know what to expect:
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-white">
        Status Flow Diagram
      </h3>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8 overflow-x-auto">
        <pre className="text-gray-300 text-sm font-mono">
          {`New Lead Added
    ↓
[Pending] ← Ready to call
    ↓
Call Initiated
    ↓
[In-Progress] ← Call happening now
    ↓
Call Ends
    ↓
    ├─→ Person Answered → [Completed] ✅
    │
    ├─→ No Answer/Busy/Voicemail → [Retry] → Wait for delay → [Pending]
    │                                                              ↑
    └─→ Max Attempts Reached → [Completed] ✅                    │
                                                                  │
    └─→ Invalid Phone Number → [Failed] ❌                       │
                                                                  │
    └─→ Permanent Error → [Failed] ❌                            │
                                                                  │
    └─→ Temporary Error → [Pending] → Retry immediately ────────┘`}
        </pre>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Detailed Status Transitions
      </h3>

      <div className="space-y-6">
        {/* Pending to In-Progress */}
        <div className="border-l-4 border-blue-500 bg-gray-900 rounded-r-lg p-6">
          <h4 className="text-xl font-semibold text-white mb-3">
            Pending → In-Progress
          </h4>
          <p className="text-gray-300 mb-3">
            <strong>When:</strong> System selects the lead for calling
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Auto-calling is enabled</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Lead is within calling hours (if schedule is set)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>System has available call slots</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Lead hasn&apos;t reached max attempts</span>
            </li>
          </ul>
          <p className="text-gray-400 mt-4">
            <strong>What Happens:</strong> Status changes to
            &quot;in-progress&quot;, call attempt counter increases, and call is
            initiated
          </p>
        </div>

        {/* In-Progress to Retry */}
        <div className="border-l-4 border-purple-500 bg-gray-900 rounded-r-lg p-6">
          <h4 className="text-xl font-semibold text-white mb-3">
            In-Progress → Retry
          </h4>
          <p className="text-gray-300 mb-3">
            <strong>When:</strong> Call ends but person didn&apos;t answer
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Call went to voicemail</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Person was busy</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>No answer</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Call failed for temporary reason</span>
            </li>
          </ul>
          <p className="text-gray-400 mt-4">
            <strong>What Happens:</strong> Status changes to &quot;retry&quot;,
            and lead waits for the configured retry delay period
          </p>
        </div>

        {/* In-Progress to Completed */}
        <div className="border-l-4 border-green-500 bg-gray-900 rounded-r-lg p-6">
          <h4 className="text-xl font-semibold text-white mb-3">
            In-Progress → Completed
          </h4>
          <p className="text-gray-300 mb-3">
            <strong>When:</strong> Call was successful or max attempts reached
          </p>
          <p className="text-gray-400">
            <strong>What Happens:</strong> Status changes to
            &quot;completed&quot;, no more calls will be made, and call
            transcript/summary becomes available
          </p>
        </div>

        {/* In-Progress to Failed */}
        <div className="border-l-4 border-red-500 bg-gray-900 rounded-r-lg p-6">
          <h4 className="text-xl font-semibold text-white mb-3">
            In-Progress → Failed
          </h4>
          <p className="text-gray-300 mb-3">
            <strong>When:</strong> Permanent error occurs
          </p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span>Invalid phone number format</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span>Phone number doesn&apos;t exist</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              <span>Other permanent errors from provider</span>
            </li>
          </ul>
          <p className="text-gray-400 mt-4">
            <strong>What Happens:</strong> Status changes to &quot;failed&quot;,
            lead is moved to failed list, and you can fix and reactivate it
          </p>
        </div>

        {/* Retry to Pending */}
        <div className="border-l-4 border-orange-500 bg-gray-900 rounded-r-lg p-6">
          <h4 className="text-xl font-semibold text-white mb-3">
            Retry → Pending
          </h4>
          <p className="text-gray-300 mb-3">
            <strong>When:</strong> Retry delay period has passed
          </p>
          <p className="text-gray-400">
            <strong>What Happens:</strong> System automatically checks every 2
            minutes. If retry delay has passed and lead hasn&apos;t reached max
            attempts, status changes back to &quot;pending&quot; for next
            attempt
          </p>
        </div>
      </div>
    </section>
  );
}
