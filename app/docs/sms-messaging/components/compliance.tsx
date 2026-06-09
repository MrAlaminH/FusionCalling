export function ComplianceSection() {
  return (
    <section id="important-rules" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 7 — Important rules (please read)
      </h2>

      <div className="p-6 rounded-lg border-2 border-red-500/50 bg-red-500/10 mb-8">
        <h3 className="text-xl font-semibold text-red-300 mb-4">
          ⚠️ Legal & Compliance Notice
        </h3>
        <p className="text-gray-200 mb-4">
          Texting has legal and carrier rules. <strong>You</strong> are
          responsible for how you use SMS:
        </p>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start">
            <span className="text-red-400 mr-3 mt-1">•</span>
            <span>
              Only text people who <strong>agreed</strong> to hear from you
              (consent).
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-400 mr-3 mt-1">•</span>
            <span>
              Honor <strong>STOP</strong> and similar opt-out requests.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-400 mr-3 mt-1">•</span>
            <span>
              Follow local laws about <strong>timing</strong> (e.g. quiet hours)
              and <strong>content</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-400 mr-3 mt-1">•</span>
            <span>
              For US business texting, you may need <strong>A2P 10DLC</strong>{" "}
              registration in Twilio — check Twilio&apos;s guidance for your use
              case.
            </span>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/50">
        <p className="text-gray-300">
          <strong>Fusion Call</strong> provides tools (inbox, campaigns, opt-out
          handling); it does <strong>not</strong> replace legal or compliance
          advice.
        </p>
      </div>
    </section>
  );
}

export function GettingHelpSection() {
  return (
    <section id="getting-help" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 8 — Getting help
      </h2>

      <p className="text-gray-300 mb-6">
        If something still does not work after following this guide, contact
        your Fusion Call administrator or support and tell them:
      </p>

      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            What you were trying to do (inbox, one-off send, or campaign).
          </li>
          <li>
            Your Twilio <strong>From number</strong> (last 4 digits are enough).
          </li>
          <li>
            Whether the problem is <strong>outbound</strong>,{" "}
            <strong>inbound</strong>, or <strong>campaign automation</strong>.
          </li>
          <li>
            The <strong>approximate time</strong> you tested.
          </li>
        </ol>
      </div>

      <p className="text-gray-400 text-sm mt-8 pt-4 border-t border-gray-700">
        Last updated for Fusion Calling — Messages, Twilio integration, and SMS
        campaigns.
      </p>
    </section>
  );
}
