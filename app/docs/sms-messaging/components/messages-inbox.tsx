export function MessagesInboxSection() {
  return (
    <section id="using-messages-inbox" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 3 — Using the Messages inbox
      </h2>
      <p className="text-gray-300 mb-8">
        Open <strong>Messages</strong> from the left menu.
      </p>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Conversation list (left side)
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Each row is one <strong>person</strong> (phone number) you have
              texted or who has texted you.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              You will see the <strong>latest message preview</strong> and{" "}
              <strong>how long ago</strong> it was sent.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              <strong>Unread</strong> inbound messages are counted on each
              conversation (when configured).
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Use the <strong>search box</strong> to find a number quickly.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Scroll down to load <strong>older conversations</strong> if you
              have many.
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Reading and replying (right side)
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>Click a conversation to open the thread.</li>
          <li>
            Scroll up to load <strong>older messages</strong> in that thread.
          </li>
          <li>
            Type at the bottom and press <strong>Send</strong> (or Enter) to
            reply.
          </li>
        </ol>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Compose a new text (not from an existing thread)
        </h3>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            Use the <strong>compose</strong> option in the Messages area.
          </li>
          <li>
            Enter the <strong>recipient&apos;s phone number</strong> (with
            country code).
          </li>
          <li>
            Choose which <strong>Twilio number</strong> to send from (if you
            have more than one).
          </li>
          <li>Write your message and send.</li>
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Messages sent outside Fusion Call
        </h3>
        <p className="text-gray-300 mb-3">
          If you send SMS from <strong>another app</strong> but use the{" "}
          <strong>same Twilio account and number</strong>, those texts will
          still show in Fusion Call when you:
        </p>
        <ul className="space-y-2 text-gray-300 ml-4">
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>
              Open the <strong>Messages</strong> page, or
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-3 mt-1">•</span>
            <span>Refresh the page after sending elsewhere.</span>
          </li>
        </ul>
      </div>

      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
        <p className="text-gray-200">
          <strong className="text-green-400">✓ Tip:</strong> You do{" "}
          <strong>not</strong> need to send every text from inside Fusion Call
          for it to appear in the inbox.
        </p>
      </div>
    </section>
  );
}
