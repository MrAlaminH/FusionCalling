export function OverviewSection() {
  return (
    <section id="what-is-agent" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">What is an Agent?</h2>

      <p className="text-lg text-gray-300 mb-6">
        An <span className="text-orange-400 font-semibold">Agent</span> is an
        AI-powered virtual assistant that can handle phone calls automatically.
        Think of it as your phone receptionist, customer service representative,
        or sales assistant - available 24/7 to handle calls according to your
        specifications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* What Can Agents Do */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            What Can Agents Do?
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Answer phone calls with natural conversations</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Understand caller intent and respond appropriately</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Schedule appointments</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Take messages</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Forward calls when needed</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Follow specific instructions you define</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">✓</span>
              <span>Use a voice you choose</span>
            </li>
          </ul>
        </div>

        {/* When to Use Agents */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            When to Use Agents?
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Handle high call volumes</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Provide 24/7 availability</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Reduce staff workload</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Ensure consistent service quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Scale operations efficiently</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Automate repetitive tasks</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 font-bold">→</span>
              <span>Improve response times</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">
          Key Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-2">
              24/7 Availability
            </h4>
            <p className="text-gray-300">
              Your agents work around the clock, never taking breaks or vacation
              days.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-2">
              Cost Effective
            </h4>
            <p className="text-gray-300">
              Reduce staffing costs while handling more calls than human teams.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-2">
              Consistency
            </h4>
            <p className="text-gray-300">
              Every caller receives the same quality service and information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
