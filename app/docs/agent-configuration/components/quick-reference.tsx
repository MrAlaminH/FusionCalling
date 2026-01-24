export function QuickReferenceSection() {
  return (
    <section id="quick-reference" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Quick Reference</h2>

      {/* Required Fields */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6">
          <h3 className="text-2xl font-bold text-white">Required Fields</h3>
          <p className="text-orange-100 mt-2">
            These must be filled to create an agent
          </p>
        </div>
        <div className="p-8">
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                *
              </span>
              <div>
                <p className="font-semibold text-white">Agent Name</p>
                <p className="text-gray-300 text-sm">
                  Minimum 2 characters, descriptive name
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                *
              </span>
              <div>
                <p className="font-semibold text-white">First Message</p>
                <p className="text-gray-300 text-sm">
                  What the agent says when call starts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional but Recommended */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <h3 className="text-2xl font-bold text-white">
            Optional but Recommended
          </h3>
          <p className="text-blue-100 mt-2">
            These improve agent functionality significantly
          </p>
        </div>
        <div className="p-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-blue-400 font-bold text-lg">→</span>
              <div>
                <p className="font-semibold text-white">Agent Type</p>
                <p className="text-gray-300 text-sm">
                  Sales Agent, Support Agent, or Appointment Scheduler (for
                  organization)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-400 font-bold text-lg">→</span>
              <div>
                <p className="font-semibold text-white">System Prompt</p>
                <p className="text-gray-300 text-sm">
                  Critical for defining behavior - be as specific as possible
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-400 font-bold text-lg">→</span>
              <div>
                <p className="font-semibold text-white">Voice</p>
                <p className="text-gray-300 text-sm">
                  Choose from standard voices or use custom model ID
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-blue-400 font-bold text-lg">→</span>
              <div>
                <p className="font-semibold text-white">Phone Number</p>
                <p className="text-gray-300 text-sm">
                  Include country code (e.g., +1 for US)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional but Useful */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6">
          <h3 className="text-2xl font-bold text-white">Optional but Useful</h3>
          <p className="text-green-100 mt-2">
            Additional settings for advanced configurations
          </p>
        </div>
        <div className="p-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span className="text-gray-300">
                <span className="font-semibold">Voicemail Message</span> -
                Played when call goes to voicemail
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span className="text-gray-300">
                <span className="font-semibold">End Call Message</span> -
                Delivered before hanging up
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span className="text-gray-300">
                <span className="font-semibold">Call Forward Number</span> - For
                overflow/fallback
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span className="text-gray-300">
                <span className="font-semibold">Maximum Call Duration</span> -
                In seconds
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span className="text-gray-300">
                <span className="font-semibold">End Call Data Webhook URL</span>{" "}
                - Send data to your system
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* LLM Providers */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6">
          <h3 className="text-2xl font-bold text-white">
            LLM Providers & Models
          </h3>
          <p className="text-purple-100 mt-2">
            Choose the AI brain for your agent
          </p>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="font-semibold text-orange-400 mb-2">OpenAI</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  • <span className="text-orange-300">GPT 4o Mini</span> - Best
                  balance (recommended)
                </li>
                <li>
                  • <span className="text-orange-300">GPT 4o</span> - Most
                  capable
                </li>
                <li>
                  • <span className="text-orange-300">gpt-3.5-turbo</span> -
                  Fast & cost-effective
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="font-semibold text-orange-400 mb-2">Anthropic</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  • <span className="text-orange-300">claude-3.5-sonnet</span> -
                  Best overall
                </li>
                <li>
                  • <span className="text-orange-300">claude-3.5-haiku</span> -
                  Fast & capable
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="font-semibold text-orange-400 mb-2">Groq</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  • <span className="text-orange-300">llama-3.1-8b</span> - Very
                  fast, lightweight
                </li>
                <li>
                  • <span className="text-orange-300">llama-3.1-70b</span> -
                  More capable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Options */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <h3 className="text-2xl font-bold text-white">Standard Voices</h3>
          <p className="text-blue-100 mt-2">
            Pre-configured, high-quality voices
          </p>
        </div>
        <div className="p-8">
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">Liani Mawby</span> (Female)
              </span>
              <span className="text-gray-400 text-sm">Warm, professional</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">Lori</span> (Female)
              </span>
              <span className="text-gray-400 text-sm">
                Friendly, approachable
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">Olya</span> (Female)
              </span>
              <span className="text-gray-400 text-sm">Calm, reassuring</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">Drew</span> (Male)
              </span>
              <span className="text-gray-400 text-sm">
                Confident, authoritative
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">Abraham</span> (Male)
              </span>
              <span className="text-gray-400 text-sm">
                Reliable, trustworthy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* First Message Modes */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6">
          <h3 className="text-2xl font-bold text-white">First Message Modes</h3>
          <p className="text-green-100 mt-2">
            Who speaks when a call connects?
          </p>
        </div>
        <div className="p-8">
          <div className="space-y-3">
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
              <p className="font-semibold text-green-400 mb-1">
                Assistant speaks first ✅ Recommended
              </p>
              <p className="text-gray-300 text-sm">
                Agent immediately starts the conversation - most natural
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="font-semibold text-gray-300 mb-1">
                Assistant speaks first (model-generated)
              </p>
              <p className="text-gray-300 text-sm">
                AI generates opening line based on context - dynamic
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="font-semibold text-gray-300 mb-1">
                Assistant waits for user
              </p>
              <p className="text-gray-300 text-sm">
                Agent listens for caller to speak first - formal settings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Call Durations */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-6">
          <h3 className="text-2xl font-bold text-white">
            Common Call Durations
          </h3>
          <p className="text-indigo-100 mt-2">Maximum call length in seconds</p>
        </div>
        <div className="p-8">
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">300 seconds</span> (5 min)
              </span>
              <span className="text-gray-400 text-sm">
                Quick interactions, sales
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">600 seconds</span> (10 min)
              </span>
              <span className="text-gray-400 text-sm">
                Default, balanced (recommended)
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">900 seconds</span> (15 min)
              </span>
              <span className="text-gray-400 text-sm">Support sessions</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">1800 seconds</span> (30 min)
              </span>
              <span className="text-gray-400 text-sm">
                Long support, consultations
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded">
              <span className="text-gray-300">
                <span className="font-semibold">Leave blank</span>
              </span>
              <span className="text-gray-400 text-sm">Unlimited duration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Helpful Tips */}
      <div className="mt-12 bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-700/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-orange-400 mb-6">Pro Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">💡 Testing</p>
            <p className="text-gray-300 text-sm">
              Always test your agent in the Test tab before deploying to
              production
            </p>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">💡 Prompts</p>
            <p className="text-gray-300 text-sm">
              The more specific your system prompt, the better the agent behaves
            </p>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">💡 Variables</p>
            <p className="text-gray-300 text-sm">
              Use {"{name}"} and {"{company}"} variables in messages for
              personalization
            </p>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <p className="text-orange-300 font-semibold mb-2">💡 Monitoring</p>
            <p className="text-gray-300 text-sm">
              Review call transcripts regularly and adjust based on real
              interactions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
