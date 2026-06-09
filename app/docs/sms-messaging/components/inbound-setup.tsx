export function InboundSetupSection() {
  return (
    <section id="receive-inbound-texts" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 2 — Receive inbound texts (replies)
      </h2>
      <p className="text-gray-300 mb-8">
        For <strong>incoming</strong> SMS (when someone texts{" "}
        <strong>your</strong> Twilio number), Twilio must know where to send
        that message. You configure this <strong>once per phone number</strong>{" "}
        in Twilio.
      </p>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-white">
          Steps in Twilio Console
        </h3>
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>
            Log in to{" "}
            <a
              href="https://console.twilio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline"
            >
              Twilio Console
            </a>
            .
          </li>
          <li>
            Go to <strong>Phone Numbers</strong> → <strong>Manage</strong> →{" "}
            <strong>Active numbers</strong>.
          </li>
          <li>Click the number you use with Fusion Call.</li>
          <li>
            Scroll to <strong>Messaging configuration</strong>.
          </li>
          <li>
            Under <strong>&quot;A message comes in&quot;</strong>:
            <div className="mt-3 ml-6 space-y-2">
              <div className="p-3 rounded bg-gray-900/50 border border-gray-700">
                <p className="text-sm font-mono text-gray-300 mb-2">
                  <strong>Webhook URL:</strong>
                </p>
                <code className="block bg-gray-800 px-3 py-2 rounded text-orange-300 mb-2 overflow-x-auto">
                  https://app.yourdomain.com/api/incoming-sms
                </code>
                <p className="text-xs text-gray-400">
                  (Use your Fusion Call domain if your agency uses a custom
                  domain — ask your admin if unsure.)
                </p>
              </div>
              <div className="p-3 rounded bg-gray-900/50 border border-gray-700">
                <p className="text-sm font-mono text-gray-300">
                  <strong>HTTP method:</strong>{" "}
                  <span className="text-orange-300">POST</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <strong>Save</strong> the number settings.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          How to know it worked
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            From your mobile phone, send a text <strong>to</strong> your Twilio
            number.
          </li>
          <li>
            In Fusion Call, open <strong>Messages</strong> and refresh if
            needed.
          </li>
          <li>
            You should see a conversation with that phone number and the reply
            inside.
          </li>
        </ol>
      </div>

      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
        <p className="text-gray-200">
          <strong className="text-blue-400">ℹ️ Note:</strong> Outbound texts
          sent from other tools (Zapier, n8n, etc.) using the{" "}
          <strong>same Twilio number</strong> will also appear in Messages when
          you open or refresh the inbox — you do not need a separate setup for
          those.
        </p>
      </div>
    </section>
  );
}
