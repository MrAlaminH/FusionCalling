export function SmsCampaignsSection() {
  return (
    <section id="sms-campaigns" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 4 — SMS campaigns (automated texting)
      </h2>
      <p className="text-gray-300 mb-8">
        SMS campaigns let you text <strong>many leads</strong> on a schedule —
        for example: first message immediately, second message 24 hours later,
        and so on.
      </p>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Overview — the usual workflow
        </h3>
        <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-700">
          <code className="text-gray-300 font-mono text-sm block whitespace-nowrap overflow-x-auto">
            Connect Twilio &nbsp;→&nbsp; Create SMS campaign &nbsp;→&nbsp; Add
            leads &nbsp;→&nbsp; Configure messages &nbsp;→&nbsp; Start campaign
            &nbsp;→&nbsp; Turn on Auto SMS
          </code>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Step 1 — Create an SMS campaign
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            In the left menu, click <strong>Campaign</strong>.
          </li>
          <li>
            Click <strong>Create campaign</strong> (or similar button).
          </li>
          <li>
            Choose type <strong>SMS</strong> (not Voice).
          </li>
          <li>
            Enter a <strong>campaign name</strong> (e.g. &quot;March follow-up
            texts&quot;).
          </li>
          <li>
            Select the <strong>From number</strong> — the Twilio line this
            campaign will send from.
          </li>
          <li>
            Create the campaign. You will be taken into that campaign&apos;s
            page.
          </li>
        </ol>

        <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5 mt-4">
          <p className="text-gray-200">
            <strong className="text-orange-400">⚠️ Note:</strong> You must
            connect Twilio first (Part 1). If you skip that, creation will ask
            you to connect.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Step 2 — Add leads to the campaign
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            On the campaign page, <strong>import leads</strong> (CSV upload) or
            add them the same way you do for calling campaigns.
          </li>
          <li>
            Each lead needs a valid <strong>phone number</strong>.
          </li>
          <li>
            Leads stay in this campaign&apos;s list until they finish the
            sequence or are marked complete.
          </li>
        </ol>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Step 3 — Configure SMS settings
        </h3>
        <p className="text-gray-300 mb-4">
          Open the campaign&apos;s <strong>Settings</strong> tab (SMS settings
          panel).
        </p>

        <div className="mb-8 space-y-6">
          <div className="border-l-4 border-orange-400 pl-6">
            <h4 className="text-xl font-semibold text-white mb-3">
              Sending identity
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>
                  <strong>From number</strong> — Twilio line for this campaign
                  (must match a number on your account).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3 mt-1">•</span>
                <span>
                  <strong>Complete lead on any reply</strong> — If turned on,
                  when someone replies after the first outbound text, Fusion
                  Call can mark that lead as <strong>completed</strong> so the
                  sequence stops for them.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-400 pl-6">
            <h4 className="text-xl font-semibold text-white mb-3">
              Message sequence
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>
                  <strong>Step 1, Step 2, …</strong> — Write the text for each
                  step.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>
                  <strong>Wait (hours)</strong> — After a step sends, wait this
                  many hours before the next step (not used after the{" "}
                  <strong>last</strong> step).
                </span>
              </li>
              <li>
                <span className="text-blue-400 mr-3">•</span>
                <span>
                  You can use <strong>placeholders</strong> in the text, for
                  example:
                </span>
              </li>
            </ul>

            <div className="mt-3 ml-4 p-3 rounded bg-gray-900/50 border border-gray-700">
              <code className="text-gray-300 text-sm block">
                {`{{ first_name }}`} — lead&apos;s first name
              </code>
              <code className="text-gray-300 text-sm block">
                {`{{ name }}`} — full name
              </code>
              <code className="text-gray-300 text-sm block">
                {`{{ company }}`}, {`{{ phone }}`}, {`{{ email }}`} — custom
                fields from CSV
              </code>
            </div>

            <div className="mt-4 p-3 rounded bg-gray-900/50 border border-gray-700">
              <p className="text-gray-400 text-sm font-mono mb-2">
                Example Step 1:
              </p>
              <code className="text-orange-300 text-sm block">
                {`Hi {{ first_name }}, thanks for connecting. Reply if you have any questions!`}
              </code>
            </div>

            <ul className="space-y-2 text-gray-300 mt-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>
                  Click <strong>Add step</strong> for more messages in the
                  sequence.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                <span>
                  Click <strong>Save SMS campaign settings</strong> when
                  finished.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-400 pl-6">
            <h4 className="text-xl font-semibold text-white mb-3">
              Sending schedule (optional)
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  <strong>Default:</strong> texts can go out{" "}
                  <strong>24/7</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  To limit to business hours: set{" "}
                  <strong>timezone, start time,</strong> and{" "}
                  <strong>end time</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  Or click <strong>Send anytime (no window)</strong> to go back
                  to 24/7.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-400 pl-6">
            <h4 className="text-xl font-semibold text-white mb-3">
              Throughput (optional — for large lists)
            </h4>
            <p className="text-gray-300 mb-3">
              These control how fast texts go out so you do not blast hundreds
              at once:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>
                  <strong>SMS per batch</strong> — how many leads get a text in
                  one automation run (default: 10).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>
                  <strong>Minutes between batches</strong> — pause between
                  batches (default: 10 minutes).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>
                  <strong>Lead priority</strong> — which leads are texted first
                  (e.g. oldest first).
                </span>
              </li>
            </ul>

            <div className="p-3 rounded bg-gray-900/50 border border-gray-700 mt-3">
              <p className="text-gray-400 text-sm">
                Most users can leave defaults until they have a very large list.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Step 4 — Start the campaign
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            On the campaign page, use <strong>Start</strong> (or{" "}
            <strong>Resume</strong> if you paused before).
          </li>
        </ol>

        <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 mt-4">
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>
                The campaign must be <strong>Active</strong> before automated
                sending runs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>
                Only <strong>one SMS campaign</strong> should be
                &quot;live&quot; for automation at a time on your account (see
                Auto SMS below).
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Step 5 — Turn on Auto SMS
        </h3>
        <p className="text-gray-300 mb-4">
          At the <strong>top of the campaign page</strong>, find the{" "}
          <strong>Auto SMS</strong> switch.
        </p>

        <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-4">
          <li>
            Make sure the campaign is <strong>Active</strong> (Step 4).
          </li>
          <li>
            Turn <strong>Auto SMS</strong> <strong>ON</strong> for{" "}
            <strong>this</strong> campaign.
          </li>
        </ol>

        <h4 className="text-lg font-semibold text-white mb-3">
          What this means:
        </h4>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Fusion Call sends texts <strong>on the server</strong> — you do{" "}
              <strong>not</strong> need to keep the browser open.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Texts use the <strong>From number</strong> and{" "}
              <strong>sequence</strong> you saved in settings.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              If Auto SMS is already on for a <strong>different</strong>{" "}
              campaign, turn that one off first — only one SMS campaign can be
              armed at a time.
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Step 6 — Watch progress
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              On the campaign page, check lead <strong>status</strong> (pending,
              completed, etc.).
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Open a lead to see <strong>SMS activity</strong> for that person.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Open <strong>Messages</strong> to read full two-way conversations
              with replies.
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Pausing or stopping
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              <strong>Pause</strong> the campaign to stop new automated sends
              for that list.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Turn <strong>Auto SMS</strong> <strong>OFF</strong> to disarm
              automation (campaign can stay active for manual work).
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Edit the sequence in <strong>Settings</strong> anytime —{" "}
              <strong>save</strong> after changes.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
