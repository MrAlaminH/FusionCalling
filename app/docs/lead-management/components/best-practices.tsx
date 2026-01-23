export function BestPracticesSection() {
  return (
    <section id="best-practices" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">Best Practices</h2>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Phone Number Management
      </h3>
      <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li>
          <strong>Always Use E.164 Format:</strong> Start with{" "}
          <code className="text-orange-400 bg-gray-900 px-2 py-1 rounded">
            +
          </code>{" "}
          followed by country code
        </li>
        <li>
          <strong>Verify Before Uploading:</strong> Check phone numbers are
          valid and include country codes
        </li>
        <li>
          <strong>Handle Invalid Numbers:</strong> Check &quot;Failed&quot;
          status leads regularly, fix phone numbers, and change status back
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Lead Information
      </h3>
      <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li>
          <strong>Complete Data:</strong> Fill in as much information as
          possible - more data means better AI conversations
        </li>
        <li>
          <strong>Custom Fields:</strong> Use for important information
          (address, job title, product interest, etc.)
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Calling Schedule
      </h3>
      <ol className="space-y-3 text-gray-300 list-decimal list-inside mb-8">
        <li>
          <strong>Set Appropriate Hours:</strong> Respect leads&apos; time
          zones, avoid too early or too late
        </li>
        <li>
          <strong>Retry Delay:</strong> Start with 1-2 hours for faster
          follow-up, increase to 24+ hours for less frequency
        </li>
        <li>
          <strong>Max Attempts:</strong> 2-3 attempts usually sufficient -
          balance persistence with respect
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Provider Selection
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-4">
            Choose Retell If
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>You want all lead data automatically available</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>You don&apos;t want to manage message templates</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>You prefer simpler configuration</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-white mb-4">
            Choose Vapi If
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>You want full control over message content</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>
                You want to customize exactly what information is shared
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span>You prefer template-based configuration</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
