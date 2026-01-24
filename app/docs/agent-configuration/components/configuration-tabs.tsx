export function ConfigurationTabsSection() {
  return (
    <section id="configuration-tabs" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Agent Configuration Tabs
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        After creating an agent, click on any agent row to access its detailed
        configuration. You&apos;ll see several tabs for different aspects of
        agent setup.
      </p>

      {/* General Settings Tab */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6">
          <h3 className="text-2xl font-bold text-white">General Settings</h3>
          <p className="text-orange-100 mt-2">
            Configure personality and core agent behavior
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-3">
              Agent Welcome Message
            </h4>
            <p className="text-gray-300 mb-4">
              The opening line your agent uses when a call begins.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mb-4">
              <p className="text-blue-400 font-semibold mb-2">
                Best Practices:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Keep it friendly and professional</li>
                <li>• Include a greeting</li>
                <li>• Add context about your business</li>
                <li>• Use personalization variables</li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
              <p className="text-green-400 font-semibold mb-3">Examples:</p>
              <code className="text-gray-300 block font-mono text-sm whitespace-pre-wrap">
                {`Hello! Thank you for calling {company}. My name is your virtual assistant. How may I help you today?

Good morning! I'm the {company} AI assistant. How can I make your day better?`}
              </code>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-orange-400 mb-3">
              Agent Prompt (System Instructions)
            </h4>
            <p className="text-gray-300 mb-4">
              The most important setting - defines agent behavior, knowledge,
              and decision-making capabilities.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mb-4">
              <p className="text-blue-400 font-semibold mb-2">
                What to Include:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>
                  • <span className="font-semibold">Role:</span> Who is the
                  agent?
                </li>
                <li>
                  • <span className="font-semibold">Tone:</span> Professional,
                  friendly, casual?
                </li>
                <li>
                  • <span className="font-semibold">Knowledge:</span> What
                  should the agent know?
                </li>
                <li>
                  • <span className="font-semibold">Guidelines:</span> How to
                  handle situations
                </li>
                <li>
                  • <span className="font-semibold">Limitations:</span> What NOT
                  to do
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-orange-400 mb-3">
              Voicemail Message
            </h4>
            <p className="text-gray-300 mb-4">
              The message played when a call goes to voicemail.
            </p>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
              <p className="text-green-400 font-semibold mb-2">Example:</p>
              <code className="text-gray-300 block font-mono text-sm">
                Hi {"{name}"}, I&apos;m currently assisting other callers.
                Please leave your name, number, and message, and I&apos;ll get
                back to you within 24 hours.
              </code>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-orange-400 mb-3">
              End Call Message
            </h4>
            <p className="text-gray-300 mb-4">
              The final message delivered before hanging up.
            </p>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
              <p className="text-green-400 font-semibold mb-2">Example:</p>
              <code className="text-gray-300 block font-mono text-sm">
                Thank you for calling {"{company}"}, {"{name}"}. I&apos;ve noted
                everything we discussed. Is there anything else I can help you
                with today?
              </code>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-orange-400 mb-3">
              First Message Mode
            </h4>
            <p className="text-gray-300 mb-4">
              Choose who speaks first when a call connects:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="font-semibold text-white">
                  Assistant speaks first
                </p>
                <p className="text-gray-300 text-sm">
                  Agent immediately starts the conversation (Recommended)
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="font-semibold text-white">
                  Assistant speaks first with model-generated message
                </p>
                <p className="text-gray-300 text-sm">
                  AI generates an opening line based on context
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="font-semibold text-white">
                  Assistant waits for user
                </p>
                <p className="text-gray-300 text-sm">
                  Agent listens for the caller to speak first
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LLM Settings Tab */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6">
          <h3 className="text-2xl font-bold text-white">LLM Settings</h3>
          <p className="text-purple-100 mt-2">
            Configure the language model powering your agent
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Provider Selection
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-4 py-3 text-left text-purple-400 font-semibold">
                      Provider
                    </th>
                    <th className="px-4 py-3 text-left text-purple-400 font-semibold">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left text-purple-400 font-semibold">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-3 font-semibold text-white">
                      OpenAI
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      GPT models, excellent understanding
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      General purpose, complex queries
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-3 font-semibold text-white">
                      Anthropic
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      Claude models, strong reasoning
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      Detailed analysis, safety-critical
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-4 py-3 font-semibold text-white">Groq</td>
                    <td className="px-4 py-3 text-gray-300">
                      Fast open-source models
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      Cost-sensitive applications
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Model Selection Guide
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="font-semibold text-white mb-2">OpenAI Models:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>
                    • <span className="text-orange-400">GPT 4o Mini</span> -
                    Best balance of speed and cost
                  </li>
                  <li>
                    • <span className="text-orange-400">GPT 4o</span> - Most
                    capable, good for complex tasks
                  </li>
                  <li>
                    • <span className="text-orange-400">gpt-3.5-turbo</span> -
                    Fast, cost-effective
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="font-semibold text-white mb-2">
                  Anthropic Models:
                </p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>
                    • <span className="text-orange-400">claude-3.5-sonnet</span>{" "}
                    - Best overall performance
                  </li>
                  <li>
                    • <span className="text-orange-400">claude-3.5-haiku</span>{" "}
                    - Fastest, good for quick interactions
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="font-semibold text-white mb-2">Groq Models:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>
                    •{" "}
                    <span className="text-orange-400">
                      llama-3.1-8b-instant
                    </span>{" "}
                    - Very fast, lightweight
                  </li>
                  <li>
                    •{" "}
                    <span className="text-orange-400">
                      llama-3.1-70b-versatile
                    </span>{" "}
                    - More capable
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Settings Tab */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <h3 className="text-2xl font-bold text-white">Voice Settings</h3>
          <p className="text-blue-100 mt-2">Customize how your agent sounds</p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              Standard Voice Selection
            </h4>
            <p className="text-gray-300 mb-4">
              Choose from high-quality pre-configured voices:
            </p>
            <div className="space-y-2">
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-blue-400 font-semibold">
                  Liani Mawby (Female)
                </span>{" "}
                - Warm, professional
              </div>
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-blue-400 font-semibold">
                  Lori (Female)
                </span>{" "}
                - Friendly, approachable
              </div>
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-blue-400 font-semibold">
                  Olya (Female)
                </span>{" "}
                - Calm, reassuring
              </div>
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-blue-400 font-semibold">Drew (Male)</span>{" "}
                - Confident, authoritative
              </div>
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-blue-400 font-semibold">
                  Abraham (Male)
                </span>{" "}
                - Reliable, trustworthy
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-blue-400 mb-3">
              Custom Voice Model
            </h4>
            <p className="text-gray-300 mb-4">
              For advanced users - use your own voice model ID for unique voice
              characteristics.
            </p>
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
              <p className="text-yellow-400 font-semibold mb-2">When to Use:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• You have a branded voice trained on your data</li>
                <li>
                  • You want voice characteristics not in the standard library
                </li>
                <li>• You need specific accent or language support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call Settings Tab */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6">
          <h3 className="text-2xl font-bold text-white">Call Settings</h3>
          <p className="text-green-100 mt-2">
            Configure phone number and call behavior
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              Phone Number ID
            </h4>
            <p className="text-gray-300 mb-4">
              Assign a phone number to your agent (include country code).
            </p>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 font-mono text-sm text-gray-300">
              +1 (555) 123-4567
              <br />
              +44 20 7123 4567
              <br />
              +91 98765 43210
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              Call Forward Number
            </h4>
            <p className="text-gray-300 mb-4">
              When your agent is unavailable, calls forward to this number.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
              <p className="text-blue-400 font-semibold mb-2">Use Cases:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Human backup during outages</li>
                <li>• Overflow when all agents busy</li>
                <li>• Specialized support for complex issues</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              Maximum Call Duration
            </h4>
            <p className="text-gray-300 mb-4">
              Limit how long calls can last (in seconds).
            </p>
            <div className="space-y-2">
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-green-400 font-semibold">
                  300 seconds (5 minutes)
                </span>{" "}
                - Quick interactions
              </div>
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-green-400 font-semibold">
                  600 seconds (10 minutes)
                </span>{" "}
                - Default, balanced
              </div>
              <div className="bg-gray-800/50 p-3 rounded text-gray-300">
                <span className="text-green-400 font-semibold">
                  1800 seconds (30 minutes)
                </span>{" "}
                - Long support sessions
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              End Call Data Webhook URL
            </h4>
            <p className="text-gray-300 mb-4">
              Automatically send call data to your system when the call ends.
            </p>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 mb-4">
              <p className="text-green-400 font-semibold mb-2">Format:</p>
              <code className="text-gray-300 font-mono text-sm">
                https://your-crm.com/api/webhooks/call-ended
              </code>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
              <p className="text-blue-400 font-semibold mb-2">Use Cases:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Log calls in your CRM</li>
                <li>• Trigger follow-up emails</li>
                <li>• Update customer records</li>
                <li>• Integrate with billing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Test Tab */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-6">
          <h3 className="text-2xl font-bold text-white">Test Tab</h3>
          <p className="text-indigo-100 mt-2">
            Test your agent before deploying
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-indigo-400 mb-3">
              How Testing Works
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                Click the{" "}
                <span className="text-indigo-400 font-semibold">
                  Test Agent
                </span>{" "}
                button
              </li>
              <li>A simulated conversation environment opens</li>
              <li>Type messages and see how your agent responds</li>
              <li>Verify behavior matches expectations</li>
              <li>Adjust configuration if needed</li>
            </ol>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-indigo-400 mb-3">
              Testing Checklist
            </h4>
            <div className="bg-indigo-900/20 border border-indigo-700/50 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>☐ First message is friendly and appropriate</li>
                <li>☐ Agent understands common queries</li>
                <li>☐ Response tone matches brand guidelines</li>
                <li>☐ Voicemail message is clear</li>
                <li>☐ End call message is professional</li>
                <li>☐ Agent handles confusion gracefully</li>
                <li>☐ Escalation logic works correctly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Tab - External Configuration */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-500 p-6">
          <h3 className="text-2xl font-bold text-white">Settings Tab</h3>
          <p className="text-red-100 mt-2">
            External agent configuration (advanced)
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-red-400 mb-3">
              What is External Configuration?
            </h4>
            <p className="text-gray-300 mb-4">
              Use agents configured on external platforms instead of defining
              them inline.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-4 py-3 text-left text-red-400 font-semibold">
                      Platform
                    </th>
                    <th className="px-4 py-3 text-left text-red-400 font-semibold">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-3 font-semibold text-white">Vapi</td>
                    <td className="px-4 py-3 text-gray-300">
                      Voice AI platform with advanced agent tools
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-4 py-3 font-semibold text-white">
                      Retell AI
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      Conversational AI platform
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-red-400 mb-3">
              Enabling External Configuration
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
              <li>
                Go to the{" "}
                <span className="text-red-400 font-semibold">Settings</span> tab
              </li>
              <li>
                Toggle{" "}
                <span className="text-red-400 font-semibold">
                  &quot;Use External Configuration&quot;
                </span>{" "}
                ON
              </li>
              <li>
                Enter your{" "}
                <span className="text-red-400 font-semibold">
                  Primary Agent ID
                </span>
              </li>
              <li>
                Optionally enter{" "}
                <span className="text-red-400 font-semibold">
                  Secondary Agent ID
                </span>{" "}
                for fallback
              </li>
            </ol>

            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
              <p className="text-yellow-400 font-semibold mb-2">
                ⚠️ Important:
              </p>
              <p className="text-gray-300 text-sm">
                When external configuration is enabled, inline settings (prompt,
                voice, etc.) are ignored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
