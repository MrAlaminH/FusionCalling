export function CommonUseCasesSection() {
  return (
    <section id="common-use-cases" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Common Use Cases</h2>

      {/* Sales Agent */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-6">
          <h3 className="text-2xl font-bold text-white">Sales Agent</h3>
          <p className="text-green-100 mt-2">
            Qualify leads, schedule demos, close deals
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-green-400 mb-4">
              Recommended Settings
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Type:</span> Sales Agent
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Tone:</span> Enthusiastic,
                  confident, professional
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">First Message Mode:</span>{" "}
                  Assistant speaks first
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Call Duration:</span> 600
                  seconds (10 minutes)
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-green-400 mb-3">
              Example System Prompt
            </h4>
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
              <code className="text-gray-300 font-mono text-sm whitespace-pre-wrap block">
                {`You are a professional sales representative for {company}. 
Your goal is to qualify leads and schedule product demos.

Ask these qualifying questions:
1. What's your role and company size?
2. What challenges are you facing with [product category]?
3. What's your timeline for implementation?
4. What's your budget range?

If they're qualified, offer demo time slots:
- Tomorrow at 10 AM
- Tomorrow at 2 PM
- Wednesday at 11 AM

Be enthusiastic but respectful. Don't be pushy.
If they're not ready to schedule, ask if you can 
send them information via email.`}
              </code>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 bg-blue-900/10 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-2">💡 Pro Tip:</p>
            <p className="text-gray-300 text-sm">
              Qualify leads early to focus on high-potential prospects. Ask
              about budget and timeline to filter out unqualified leads.
            </p>
          </div>
        </div>
      </div>

      {/* Support Agent */}
      <div className="mb-12 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <h3 className="text-2xl font-bold text-white">Support Agent</h3>
          <p className="text-blue-100 mt-2">
            Help customers resolve issues, provide assistance
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">
              Recommended Settings
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Type:</span> Support Agent
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Tone:</span> Patient,
                  empathetic, calm
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">First Message Mode:</span>{" "}
                  Assistant speaks first
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Call Duration:</span> 900
                  seconds (15 minutes)
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-blue-400 mb-3">
              Example System Prompt
            </h4>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
              <code className="text-gray-300 font-mono text-sm whitespace-pre-wrap block">
                {`You are a customer support agent for {company}. 
Help customers resolve issues with [product].

Guidelines:
- Show empathy when customers are frustrated
- Apologize for inconveniences
- Ask clarifying questions to understand problems
- Follow the troubleshooting steps in order
- Never promise unrealistic resolution times
- If you can't solve the issue, offer to escalate

Keep responses clear and jargon-free.
Summarize the solution at the end of the call.
Thank customers for their patience.`}
              </code>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 bg-blue-900/10 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-2">💡 Pro Tip:</p>
            <p className="text-gray-300 text-sm">
              Empathy is key in support. Start by validating the customer&apos;s
              frustration, then work systematically through solutions. Always
              offer escalation if needed.
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Scheduler */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6">
          <h3 className="text-2xl font-bold text-white">
            Appointment Scheduler
          </h3>
          <p className="text-purple-100 mt-2">
            Book appointments, manage calendar
          </p>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-4">
              Recommended Settings
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Type:</span> Appointment
                  Scheduler
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Tone:</span> Professional,
                  organized, helpful
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">First Message Mode:</span>{" "}
                  Assistant speaks first
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span className="text-gray-300">
                  <span className="font-semibold">Call Duration:</span> 300
                  seconds (5 minutes)
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-xl font-semibold text-purple-400 mb-3">
              Example System Prompt
            </h4>
            <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
              <code className="text-gray-300 font-mono text-sm whitespace-pre-wrap block">
                {`You are an appointment scheduler for {company}. 
Your goal is to book meetings for customers.

Collect this information:
1. Preferred date and time
2. Type of meeting (demo, consultation, training)
3. Attendees and their roles
4. Contact information for confirmation

Before confirming:
- Check if the time slot is available
- Verify we have the right staff available
- Ensure the meeting type is appropriate

Confirm details before ending the call:
- Date, time, and duration
- Location or virtual meeting link
- Attendees
- Any preparation needed

Send a confirmation email to all attendees.`}
              </code>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 bg-blue-900/10 p-4 rounded">
            <p className="text-blue-400 font-semibold mb-2">💡 Pro Tip:</p>
            <p className="text-gray-300 text-sm">
              Keep appointment scheduling concise (5 minutes max). Confirm
              details clearly and always send confirmation emails. Integrate
              with your calendar system via webhook.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Tips */}
      <div className="mt-12 bg-gradient-to-r from-orange-900/30 to-orange-800/20 border border-orange-700/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-orange-400 mb-6">
          Customizing for Your Business
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 rounded-lg p-6">
            <p className="text-orange-300 font-semibold mb-3">
              1. Define Your Goals
            </p>
            <p className="text-gray-300 text-sm">
              What should the agent accomplish? Is it lead generation, problem
              resolution, or scheduling?
            </p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6">
            <p className="text-orange-300 font-semibold mb-3">
              2. Match the Tone
            </p>
            <p className="text-gray-300 text-sm">
              Should the agent be formal and professional or casual and
              friendly? Choose accordingly.
            </p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6">
            <p className="text-orange-300 font-semibold mb-3">
              3. Include Domain Info
            </p>
            <p className="text-gray-300 text-sm">
              What specific information about your product/service should the
              agent know?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
