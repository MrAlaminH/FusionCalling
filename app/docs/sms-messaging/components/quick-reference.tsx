export function QuickReferenceSection() {
  return (
    <section id="quick-reference" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Part 5 — Quick reference
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 font-semibold text-orange-400">
                I want to…
              </th>
              <th className="text-left py-3 px-4 font-semibold text-orange-400">
                Where to go
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Connect Twilio
              </td>
              <td className="py-3 px-4 text-gray-300">
                <strong>Settings</strong> → <strong>Twilio Credentials</strong>
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Read or send texts
              </td>
              <td className="py-3 px-4 text-gray-300">
                <strong>Messages</strong>
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Set up inbound replies
              </td>
              <td className="py-3 px-4 text-gray-300">
                Twilio Console → your number → webhook URL (Part 2)
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Create automated texting
              </td>
              <td className="py-3 px-4 text-gray-300">
                <strong>Campaign</strong> → Create <strong>SMS</strong> campaign
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Edit message steps
              </td>
              <td className="py-3 px-4 text-gray-300">
                Campaign → <strong>Settings</strong> tab
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Start sending to my list
              </td>
              <td className="py-3 px-4 text-gray-300">
                <strong>Start</strong> campaign + <strong>Auto SMS</strong> ON
              </td>
            </tr>
            <tr className="hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                See all texts (including from other tools)
              </td>
              <td className="py-3 px-4 text-gray-300">
                <strong>Messages</strong> (refresh if needed)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
