export function GettingStartedSection() {
  return (
    <section id="before-you-start" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Before you start — what you need
      </h2>
      <p className="text-gray-300 mb-6">
        To use SMS in Fusion Call, you need the following:
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex gap-4 p-4 rounded-lg border border-gray-700 bg-gray-900/50">
          <div className="text-2xl flex-shrink-0">1️⃣</div>
          <div>
            <h4 className="font-semibold text-white mb-1">
              Fusion Call Account
            </h4>
            <p className="text-gray-300">
              Log in at app.fusioncalling.com (or your custom domain)
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg border border-gray-700 bg-gray-900/50">
          <div className="text-2xl flex-shrink-0">2️⃣</div>
          <div>
            <h4 className="font-semibold text-white mb-1">Twilio Account</h4>
            <p className="text-gray-300">
              With at least one phone number that can send and receive SMS
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 rounded-lg border border-gray-700 bg-gray-900/50">
          <div className="text-2xl flex-shrink-0">3️⃣</div>
          <div>
            <h4 className="font-semibold text-white mb-1">
              Twilio Credentials
            </h4>
            <p className="text-gray-300 mb-2">
              You will need three items from Twilio:
            </p>
            <ul className="space-y-1 text-gray-300 ml-4">
              <li>
                <strong>Account SID</strong> (starts with{" "}
                <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                  AC…
                </code>
                )
              </li>
              <li>
                <strong>Auth Token</strong> (secret — treat it like a password)
              </li>
              <li>
                <strong>Your Twilio phone number</strong> in full format, e.g.{" "}
                <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                  +18335551234
                </code>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
        <p className="text-gray-200">
          <strong className="text-orange-400">💡 Tip:</strong> If you do not
          have Twilio yet, sign up at{" "}
          <a
            href="https://www.twilio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline"
          >
            twilio.com
          </a>
          , buy a number with SMS capability, and copy the three items above
          from the Twilio Console.
        </p>
      </div>
    </section>
  );
}
