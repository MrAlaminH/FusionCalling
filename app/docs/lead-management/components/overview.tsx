export function OverviewSection() {
  return (
    <section id="overview" className="mb-16 scroll-mt-24">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Lead Management User Guide
      </h1>
      <p className="text-gray-300 text-lg mb-6">
        The Lead Management system allows you to upload, organize, and
        automatically call leads using AI-powered calling agents. This guide
        covers everything you need to know to effectively manage your leads,
        from adding them to tracking their status through the calling process.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
        Key Features
      </h3>
      <ul className="space-y-3 text-gray-300 mb-6">
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Bulk Upload:</strong> Import leads via CSV files
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Manual Entry:</strong> Add leads one at a time
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Custom Fields:</strong> Add your own data fields to leads
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Automatic Calling:</strong> System automatically calls leads
            based on your schedule
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Smart Retry:</strong> Automatically retries failed calls
            after a delay
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Real-time Updates:</strong> See call status in real-time as
            agents process leads
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-400 mr-3 mt-1">•</span>
          <span>
            <strong>Comprehensive Reporting:</strong> Track metrics and outcomes
            for all leads
          </span>
        </li>
      </ul>

      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
        <p className="text-orange-200 text-sm">
          <strong>💡 Tip:</strong> Before you start, make sure you have set up
          at least one calling provider (Retell or Vapi) in your account
          settings. You&apos;ll need this to make calls.
        </p>
      </div>
    </section>
  );
}
