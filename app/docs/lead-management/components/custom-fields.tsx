export function CustomFieldsSection() {
  return (
    <section id="custom-fields" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Custom Fields Guide
      </h2>
      <p className="text-gray-300 mb-8">
        Custom fields allow you to add your own data to leads beyond the
        standard fields (Name, Phone, Email, Company, Timezone).
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Creating Custom Fields
      </h3>
      <ol className="space-y-3 text-gray-300 mb-8 list-decimal list-inside">
        <li>
          Go to <strong>Settings</strong> → <strong>Custom Fields</strong>
        </li>
        <li>
          Click <strong>&quot;Add Custom Field&quot;</strong>
        </li>
        <li>
          Enter:
          <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
            <li>
              <strong>Field Name:</strong> The name of your field (e.g.,
              &quot;Address&quot;, &quot;Job Title&quot;, &quot;Product
              Interest&quot;)
            </li>
            <li>
              <strong>Field Type:</strong> Text, Number, Date, etc.
            </li>
          </ul>
        </li>
        <li>Save the custom field</li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Using Custom Fields
      </h3>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">
          For Retell Users
        </h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>
              Custom fields are <strong>automatically</strong> sent to Retell
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>No configuration needed</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>AI agent can access them during calls</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>Use descriptive field names</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">
          For Vapi Users
        </h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>Must reference custom fields in message templates</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>
              Use{" "}
              <code className="text-orange-400 bg-gray-950 px-2 py-1 rounded">
                {"{"}
                {"{"}your_field_name{"}"}
                {"}"}
              </code>{" "}
              syntax
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>
              Example: If field is &quot;address&quot;, use{" "}
              <code className="text-orange-400 bg-gray-950 px-2 py-1 rounded">
                {"{"}
                {"{"}address{"}"}
                {"}"}
              </code>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>If not referenced, the field won&apos;t be available</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Custom Field Best Practices
      </h3>
      <ol className="space-y-3 text-gray-300 list-decimal list-inside">
        <li>
          <strong>Use Clear Names:</strong> Field names should be descriptive
          and easy to understand
        </li>
        <li>
          <strong>Be Consistent:</strong> Use the same field names across all
          leads
        </li>
        <li>
          <strong>Fill Complete Data:</strong> More information helps the AI
          agent have better conversations
        </li>
        <li>
          <strong>For Vapi:</strong> Remember to add placeholders in your agent
          templates if you want to use custom fields
        </li>
      </ol>
    </section>
  );
}
