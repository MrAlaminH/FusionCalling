export function OverviewSection() {
  return (
    <section id="overview" className="mb-16 scroll-mt-24">
      <h1 className="text-4xl font-bold mb-4 text-white">
        SMS & Messages User Guide
      </h1>
      <p className="text-gray-300 text-lg mb-6">
        This guide is for everyday users of Fusion Call. You do not need to be
        technical. Follow the steps in order the first time you set up texting.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-white mt-8">
        What you can do with SMS in Fusion Call
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 font-semibold text-orange-400">
                Feature
              </th>
              <th className="text-left py-3 px-4 font-semibold text-orange-400">
                What it does
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Messages inbox
              </td>
              <td className="py-3 px-4 text-gray-300">
                See all text conversations on your Twilio number(s) — sent from
                the app, from automations, or from other tools using the same
                Twilio account.
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Send a one-off text
              </td>
              <td className="py-3 px-4 text-gray-300">
                Compose and send a single SMS from inside Fusion Call.
              </td>
            </tr>
            <tr className="border-b border-gray-700/50 hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                SMS campaigns
              </td>
              <td className="py-3 px-4 text-gray-300">
                Automatically text a list of leads in steps (Message 1, wait,
                Message 2, etc.).
              </td>
            </tr>
            <tr className="hover:bg-gray-900/30 transition">
              <td className="py-3 px-4 font-medium text-white">
                Inbound replies
              </td>
              <td className="py-3 px-4 text-gray-300">
                When someone texts your Twilio number back, their reply can show
                in your inbox (after webhook setup).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
