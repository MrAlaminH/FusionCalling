export function FaqSection() {
  return (
    <section id="common-questions" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 6 — Common questions
      </h2>

      <div className="space-y-6">
        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ❓ &quot;I connected Twilio but Messages is empty.&quot;
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 mt-1">•</span>
              <span>
                Send a test text from <strong>Messages</strong> compose, or wait
                until your campaign sends.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 mt-1">•</span>
              <span>
                <strong>Refresh</strong> the Messages page — the app loads
                recent history from Twilio.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 mt-1">•</span>
              <span>
                Confirm you selected the correct <strong>Twilio number</strong>{" "}
                in the picker (if you have more than one).
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ❓ &quot;I sent texts from Zapier / n8n / another tool — will they
            show?&quot;
          </h3>
          <p className="text-gray-300">
            <strong>Yes</strong>, if they use the{" "}
            <strong>same Twilio account and phone number</strong> you connected
            in Fusion Call. Open or refresh <strong>Messages</strong>.
          </p>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ❓ &quot;Inbound replies are not showing.&quot;
          </h3>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>
              Check the Twilio webhook URL (Part 2) is exactly your Fusion Call
              URL ending in{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                /api/incoming-sms
              </code>
              , method <strong>POST</strong>.
            </li>
            <li>Send a test reply to your Twilio number.</li>
            <li>
              Refresh <strong>Messages</strong>.
            </li>
          </ol>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ❓ &quot;Auto SMS is grayed out or won&apos;t turn on.&quot;
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 mt-1">•</span>
              <span>
                <strong>Start</strong> or <strong>Resume</strong> the campaign
                so it is <strong>Active</strong>.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 mt-1">•</span>
              <span>
                Turn off Auto SMS on any <strong>other</strong> SMS campaign
                first.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-3 mt-1">•</span>
              <span>
                Confirm Twilio is connected and a <strong>From number</strong>{" "}
                is saved in campaign settings.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ❓ &quot;Texts only go out during certain hours.&quot;
          </h3>
          <p className="text-gray-300 mb-2">
            Check the campaign <strong>Sending schedule</strong>. Use{" "}
            <strong>Send anytime (no window)</strong> for 24/7, or set your
            timezone and hours.
          </p>
        </div>

        <div className="p-4 rounded-lg border border-gray-700 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-3">
            ❓ &quot;Someone replied STOP — what happens?&quot;
          </h3>
          <p className="text-gray-300">
            Fusion Call recognizes common opt-out words (like{" "}
            <strong>STOP</strong>). Those leads can be marked so{" "}
            <strong>no more campaign texts</strong> go to them. You are still
            responsible for following texting laws and honoring opt-outs — see
            Part 7.
          </p>
        </div>
      </div>
    </section>
  );
}
