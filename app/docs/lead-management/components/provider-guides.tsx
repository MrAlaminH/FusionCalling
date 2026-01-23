export function ProviderGuidesSection() {
  return (
    <section id="provider-guides" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Provider-Specific Guides
      </h2>

      {/* Retell */}
      <div id="retell-guide" className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Using Retell</h3>
        <p className="text-gray-300 mb-6">
          Retell is designed to automatically make all your lead information
          available to the AI agent during calls.
        </p>

        <h4 className="text-xl font-semibold mb-4 text-white">
          How Lead Data Works with Retell
        </h4>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
          <h5 className="text-lg font-semibold text-orange-400 mb-3">
            Automatic Data Transmission
          </h5>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span>All standard fields are automatically sent</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span>All custom fields are automatically sent</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">✓</span>
              <span>No configuration needed</span>
            </li>
          </ul>
        </div>

        <h5 className="text-lg font-semibold text-white mb-3">
          Standard Fields Sent to Retell
        </h5>
        <div className="bg-gray-950 rounded-lg p-4 mb-6 overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-2 px-3 text-orange-400">
                  Field Name
                </th>
                <th className="text-left py-2 px-3 text-orange-400">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    customer_name
                  </code>
                </td>
                <td className="py-2 px-3">Full name</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    first_name
                  </code>
                </td>
                <td className="py-2 px-3">First name only</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    last_name
                  </code>
                </td>
                <td className="py-2 px-3">Last name only</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    email_address
                  </code>
                </td>
                <td className="py-2 px-3">Email</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    phone_number
                  </code>
                </td>
                <td className="py-2 px-3">Phone number</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    company_name
                  </code>
                </td>
                <td className="py-2 px-3">Company</td>
              </tr>
              <tr>
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    timezone
                  </code>
                </td>
                <td className="py-2 px-3">Timezone</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 className="text-lg font-semibold text-white mb-3">
          Best Practices for Retell
        </h5>
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>
            Create descriptive custom field names (they&apos;ll be used as
            variable names)
          </li>
          <li>Ensure phone numbers are in correct E.164 format</li>
          <li>
            Fill in as much information as possible - the AI can use it all
          </li>
          <li>
            Custom fields are automatically available - no template
            configuration needed
          </li>
        </ol>

        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6">
          <h5 className="text-lg font-semibold text-blue-400 mb-3">
            ⚙️ Retell Configuration Requirements
          </h5>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>Phone Number:</strong> Must have a phone number
                configured in agent settings
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>Agent ID:</strong> Can use Retell&apos;s external agent
                ID or system&apos;s inline configuration
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>API Key:</strong> Must have Retell API credentials
                configured
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Vapi */}
      <div id="vapi-guide" className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-white">Using Vapi</h3>
        <p className="text-gray-300 mb-6">
          Vapi uses a template-based approach where you control exactly what
          information is included in your agent&apos;s messages.
        </p>

        <h4 className="text-xl font-semibold mb-4 text-white">
          How Lead Data Works with Vapi
        </h4>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
          <h5 className="text-lg font-semibold text-orange-400 mb-3">
            Template-Based Data Usage
          </h5>
          <p className="text-gray-300 mb-3">
            Lead data is only used if you reference it in your agent&apos;s
            message templates. Use placeholder syntax:{" "}
            <code className="text-orange-400 bg-gray-950 px-2 py-1 rounded">
              {"{"}
              {"{"}field_name{"}"}
              {"}"}
            </code>{" "}
            to include lead information.
          </p>
          <p className="text-gray-400">
            If you don&apos;t reference a field, it won&apos;t be sent to Vapi
          </p>
        </div>

        <h5 className="text-lg font-semibold text-white mb-3">
          Available Placeholders
        </h5>
        <div className="bg-gray-950 rounded-lg p-4 mb-6 overflow-x-auto">
          <h6 className="text-orange-400 font-semibold mb-3">
            Standard Fields
          </h6>
          <table className="w-full text-sm text-gray-300 mb-4">
            <tbody className="space-y-1">
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}name{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">Full name</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}first_name{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">First name only</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}last_name{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">Last name only</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}email{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">Email address</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}phone{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">Phone number</td>
              </tr>
              <tr className="border-b border-gray-900">
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}company{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">Company name</td>
              </tr>
              <tr>
                <td className="py-2 px-3">
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    {"{"}
                    {"{"}timezone{"}"}
                    {"}"}
                  </code>
                </td>
                <td className="py-2 px-3">Timezone</td>
              </tr>
            </tbody>
          </table>

          <h6 className="text-orange-400 font-semibold mb-3">Custom Fields</h6>
          <p className="text-gray-300 text-sm">
            Use{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              {"{"}
              {"{"}your_custom_field_name{"}"}
              {"}"}
            </code>{" "}
            for any custom field you created
          </p>
          <ul className="mt-2 space-y-1 text-gray-400 text-sm ml-4">
            <li>
              Example: If field is &quot;address&quot;, use{" "}
              <code className="bg-gray-900 px-1 py-1 rounded">
                {"{"}
                {"{"}address{"}"}
                {"}"}
              </code>
            </li>
            <li>
              Example: If field is &quot;job_title&quot;, use{" "}
              <code className="bg-gray-900 px-1 py-1 rounded">
                {"{"}
                {"{"}job_title{"}"}
                {"}"}
              </code>
            </li>
          </ul>
        </div>

        <h5 className="text-lg font-semibold text-white mb-3">
          Where to Use Placeholders
        </h5>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4">
            <h6 className="text-orange-400 font-semibold mb-2">
              First Message (Opening Line)
            </h6>
            <div className="bg-gray-950 rounded p-3 mb-2">
              <code className="text-gray-300 text-sm block">
                Hi {"{"}
                {"{"}name{"}"}
                {"}"}, I&apos;m calling from {"{"}
                {"{"}company{"}"}
                {"}"} about your inquiry.
              </code>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h6 className="text-orange-400 font-semibold mb-2">
              System Prompt (Agent Instructions)
            </h6>
            <div className="bg-gray-950 rounded p-3 mb-2">
              <code className="text-gray-300 text-sm block">
                You are calling {"{"}
                {"{"}name{"}"}
                {"}"} at {"{"}
                {"{"}company{"}"}
                {"}"}. Their email is {"{"}
                {"{"}email{"}"}
                {"}"}. Their address is {"{"}
                {"{"}address{"}"}
                {"}"} if available.
              </code>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4">
            <h6 className="text-orange-400 font-semibold mb-2">
              Voicemail Message
            </h6>
            <div className="bg-gray-950 rounded p-3 mb-2">
              <code className="text-gray-300 text-sm block">
                Hi {"{"}
                {"{"}name{"}"}
                {"}"}, this is a message for you regarding {"{"}
                {"{"}company{"}"}
                {"}"}.
              </code>
            </div>
          </div>
        </div>

        <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6 mb-6">
          <h5 className="text-lg font-semibold text-orange-400 mb-3">
            ⚠️ Important Notes for Vapi
          </h5>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span>
                Custom fields are <strong>ONLY</strong> included if you use
                placeholders in your templates
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span>
                If you don&apos;t reference a custom field, it won&apos;t be
                available during the call
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span>
                Standard fields also need to be referenced if you want them in
                messages
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-400 mr-2">•</span>
              <span>
                Placeholders are case-sensitive - use exact field names
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
          <h5 className="text-lg font-semibold text-blue-400 mb-3">
            ⚙️ Vapi Configuration Requirements
          </h5>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>Assistant Configuration:</strong> Can use Vapi&apos;s
                external assistant ID or configure inline
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>First Message:</strong> Required if using inline
                configuration
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>System Prompt:</strong> Recommended for better call
                quality
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>
                <strong>API Key:</strong> Must have Vapi API credentials
                configured
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
