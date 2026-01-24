export function GettingStartedSection() {
  return (
    <section id="creating-first-agent" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Creating Your First Agent
      </h2>

      <div className="space-y-8">
        {/* Step 1 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Navigate to Agents
              </h3>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>
                  From your dashboard, click{" "}
                  <span className="text-orange-400 font-semibold">Agents</span>{" "}
                  in the navigation menu
                </li>
                <li>
                  You&apos;ll see the{" "}
                  <span className="text-orange-400 font-semibold">
                    AI Phone Agents
                  </span>{" "}
                  page listing all your agents
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Click &quot;Create Agent&quot;
              </h3>
              <p className="text-gray-300">
                Click the blue{" "}
                <span className="text-orange-400 font-semibold">
                  Create Agent
                </span>{" "}
                button in the top-right corner of the agents page.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Fill in Basic Information
              </h3>
              <p className="text-gray-300 mb-4">
                A modal will appear asking for the following information:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-800 border-b border-gray-700">
                      <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                        Field
                      </th>
                      <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                        Description
                      </th>
                      <th className="px-4 py-3 text-left text-orange-400 font-semibold">
                        Required
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-semibold text-white">
                        Agent Name
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        A descriptive name (e.g., &quot;Sales Assistant&quot;)
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-semibold text-white">
                        Agent Type
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        Sales, Support, or Appointment Scheduler
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          Optional
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-semibold text-white">
                        Voice
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        Choose from pre-configured voices
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          Optional
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-semibold text-white">
                        Phone Number
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        Assign a phone number to the agent
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          Optional
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-semibold text-white">
                        First Message
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        What the agent says when the call starts
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-800/50">
                      <td className="px-4 py-3 font-semibold text-white">
                        System Prompt
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        Detailed instructions about agent behavior
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs">
                          Optional
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">
                    Example First Message:
                  </p>
                  <code className="text-gray-300 block font-mono text-sm">
                    Hi {"{name}"}! Welcome to our service. How can I help you
                    today?
                  </code>
                </div>

                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold mb-2">
                    Example System Prompt:
                  </p>
                  <code className="text-gray-300 block font-mono text-sm whitespace-pre-wrap">
                    {`You are a helpful and friendly customer service assistant.
Keep your responses concise and professional.
Always be polite and patient with callers.
If you don't understand, ask for clarification.`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Save Your Agent
              </h3>
              <p className="text-gray-300 mb-4">
                Click{" "}
                <span className="text-orange-400 font-semibold">
                  Save Agent
                </span>{" "}
                to create your agent. You&apos;ll see it appear in the agents
                table with:
              </p>
              <ul className="space-y-2 text-gray-300 ml-4">
                <li>✓ Agent name</li>
                <li>✓ Type badge</li>
                <li>✓ Voice selection</li>
                <li>✓ Phone number</li>
                <li>✓ Last updated timestamp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
        <p className="text-yellow-400 font-semibold mb-2">💡 Tip:</p>
        <p className="text-gray-300">
          Don&apos;t worry if you don&apos;t have all the information yet. You
          can create an agent with just the required fields and configure it
          further after creation.
        </p>
      </div>
    </section>
  );
}
