export function BestPracticesSection() {
  return (
    <section id="best-practices" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Best Practices</h2>

      <div className="space-y-8">
        {/* Practice 1 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Start Simple
              </h3>
              <p className="text-gray-300 mb-4">
                Begin with a basic configuration:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Clear, simple first message</li>
                <li>• Straightforward system prompt</li>
                <li>• Standard voice</li>
                <li>• Limited scope</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                ✓ Why: Easier to debug, test, and refine
              </p>
            </div>
          </div>
        </div>

        {/* Practice 2 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Iterate and Improve
              </h3>
              <p className="text-gray-300 mb-4">After initial testing:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Review call transcripts</li>
                <li>• Gather user feedback</li>
                <li>• Adjust prompts based on real interactions</li>
                <li>• Refine responses to common queries</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                ✓ Why: Continuous improvement leads to better agent performance
              </p>
            </div>
          </div>
        </div>

        {/* Practice 3 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Use Specific Instructions
              </h3>
              <p className="text-gray-300 mb-4">
                Vague prompts create vague agents.
              </p>
              <div className="space-y-4 ml-4">
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2">
                    ❌ Instead of:
                  </p>
                  <code className="text-gray-300 font-mono text-sm block">
                    Be helpful and friendly.
                  </code>
                </div>
                <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">✅ Use:</p>
                  <code className="text-gray-300 font-mono text-sm whitespace-pre-wrap block">
                    {`You are a support agent for ACME Tech. Be helpful and friendly.
When customers report technical issues:
1. Ask for the error message
2. Ask what they were doing when it occurred
3. Check if they've tried restarting
4. Offer step-by-step troubleshooting
5. Escalate if unresolved after 5 minutes

Never promise resolution time you can't meet.`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice 4 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Handle Edge Cases
              </h3>
              <p className="text-gray-300 mb-4">Consider what happens when:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Caller is angry or frustrated</li>
                <li>• Agent doesn&apos;t understand a question</li>
                <li>• Caller asks about topics outside your scope</li>
                <li>• Technical errors occur</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Include guidance for these scenarios in your system prompt.
              </p>
            </div>
          </div>
        </div>

        {/* Practice 5 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              5
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Test Thoroughly
              </h3>
              <p className="text-gray-300 mb-4">Before going live:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Make test calls yourself</li>
                <li>• Have team members test</li>
                <li>• Use realistic scenarios</li>
                <li>• Check all failure paths</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4 italic">
                ✓ Why: Catch issues before they affect real users
              </p>
            </div>
          </div>
        </div>

        {/* Practice 6 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              6
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Monitor Performance
              </h3>
              <p className="text-gray-300 mb-4">Regularly review:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Call success rates</li>
                <li>• Average call duration</li>
                <li>• Customer satisfaction</li>
                <li>• Common issues</li>
                <li>• Escalation rates</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Use this data to continuously improve your agents.
              </p>
            </div>
          </div>
        </div>

        {/* Practice 7 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-lg">
              7
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-400 mb-3">
                Keep Prompts Updated
              </h3>
              <p className="text-gray-300 mb-4">As your business changes:</p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>• Update product information</li>
                <li>• Adjust pricing details</li>
                <li>• Add new FAQs</li>
                <li>• Change hours/availability</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Keep your agent&apos;s knowledge in sync with your business
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-12 bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-700/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">
          Quick Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">Start with:</p>
            <p className="text-gray-300 text-sm">
              Simple configuration, basic prompts, standard settings
            </p>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">Then:</p>
            <p className="text-gray-300 text-sm">
              Test, gather feedback, iterate, optimize
            </p>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">Continuously:</p>
            <p className="text-gray-300 text-sm">
              Monitor, measure, improve, and update
            </p>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">Remember:</p>
            <p className="text-gray-300 text-sm">
              Detail in prompts = Better agent behavior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
