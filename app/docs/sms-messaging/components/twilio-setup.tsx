export function TwilioSetupSection() {
  return (
    <section id="connect-twilio" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 1 — Connect your Twilio account
      </h2>
      <p className="text-gray-300 mb-8">
        You only need to do this <strong>once</strong> (or when you change
        Twilio accounts or numbers).
      </p>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Option A — From Settings (recommended)
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            In the left menu, click <strong>Settings</strong>.
          </li>
          <li>
            Open the <strong>Twilio Credentials</strong> tab.
          </li>
          <li>
            Fill in:
            <ul className="mt-2 ml-6 space-y-2 list-disc list-inside">
              <li>
                <strong>Account SID</strong>
              </li>
              <li>
                <strong>Auth Token</strong>
              </li>
              <li>
                <strong>Twilio Phone Number</strong> (your main/default number,
                with country code, e.g.{" "}
                <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                  +1…
                </code>
                )
              </li>
            </ul>
          </li>
          <li>
            Click <strong>Save</strong>.
          </li>
          <li>You should see a success message.</li>
        </ol>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Option B — From Messages
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            In the left menu, click <strong>Messages</strong>.
          </li>
          <li>
            If Twilio is not connected yet, you will see a setup form — fill it
            in the same way as above and save.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          After connecting
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Open <strong>Messages</strong> again. You should see your inbox
              (or an empty list if you have not texted anyone yet).
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              If you have <strong>more than one</strong> Twilio number on the
              same account, use the <strong>number picker</strong> at the top of
              the conversation list to switch which line you are viewing.
            </span>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
        <p className="text-gray-200">
          <strong className="text-blue-400">ℹ️ Note:</strong> Your auth token is
          sensitive information — never share it with anyone. Treat it like a
          password.
        </p>
      </div>
    </section>
  );
}
