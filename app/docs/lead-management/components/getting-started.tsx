export function GettingStartedSection() {
  return (
    <section id="getting-started" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Getting Started: Adding Leads
      </h2>

      <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
        Method 1: Manual Entry
      </h3>
      <ol className="space-y-3 text-gray-300 mb-6 list-decimal list-inside">
        <li>
          Go to the <strong>Add Leads</strong> section
        </li>
        <li>
          Click <strong>&quot;Add Lead&quot;</strong> button
        </li>
        <li>
          Fill in the required information:
          <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
            <li>
              <strong>Name:</strong> Contact&apos;s full name
            </li>
            <li>
              <strong>Phone:</strong> Phone number (must be in E.164 format,
              e.g., +1234567890)
            </li>
            <li>
              <strong>Email:</strong> Contact&apos;s email address
            </li>
            <li>
              <strong>Company:</strong> Company name (optional)
            </li>
          </ul>
        </li>
        <li>Add any custom fields if needed</li>
        <li>
          Click <strong>&quot;Save&quot;</strong>
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
        Method 2: CSV Import
      </h3>
      <ol className="space-y-3 text-gray-300 mb-6 list-decimal list-inside">
        <li>
          Go to the <strong>Add Leads</strong> section
        </li>
        <li>
          Click <strong>&quot;Import CSV&quot;</strong> button
        </li>
        <li>Download the template CSV file (optional, but recommended)</li>
        <li>
          Fill in your lead data:
          <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
            <li>Required columns: Name, Phone, Email</li>
            <li>Optional columns: Company, Timezone</li>
            <li>Custom field columns: Add any additional columns</li>
          </ul>
        </li>
        <li>Upload your CSV file</li>
        <li>Map your columns to the system fields</li>
        <li>Review and confirm the import</li>
      </ol>

      <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-orange-400 mb-2">
          📱 Phone Number Format
        </h4>
        <p className="text-gray-300 mb-3">
          Phone numbers must be in <strong>E.164 format</strong>:
        </p>
        <ul className="space-y-2 text-gray-300 ml-4">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">✓</span>
            <span>
              Must start with{" "}
              <code className="text-orange-400 bg-gray-900/50 px-2 py-1 rounded">
                +
              </code>{" "}
              followed by country code
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">✓</span>
            <span>
              Example:{" "}
              <code className="text-orange-400 bg-gray-900/50 px-2 py-1 rounded">
                +12125551234
              </code>{" "}
              (US)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">✓</span>
            <span>
              Example:{" "}
              <code className="text-orange-400 bg-gray-900/50 px-2 py-1 rounded">
                +447911123456
              </code>{" "}
              (UK)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">✓</span>
            <span>
              Example:{" "}
              <code className="text-orange-400 bg-gray-900/50 px-2 py-1 rounded">
                +8801966317966
              </code>{" "}
              (Bangladesh)
            </span>
          </li>
        </ul>
        <p className="text-gray-400 mt-3 text-sm">
          Invalid formats will cause the lead to be marked as &quot;failed&quot;
        </p>
      </div>
    </section>
  );
}
