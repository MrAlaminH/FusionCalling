export function RetrySystemSection() {
  return (
    <section id="retry-system" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Retry System Explained
      </h2>
      <p className="text-gray-300 mb-8">
        The retry system automatically attempts to call leads again if the first
        call doesn&apos;t connect, helping you reach more people while
        respecting their time.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        How Retry Works
      </h3>
      <ol className="space-y-4 text-gray-300 list-decimal list-inside mb-8">
        <li>
          <strong>First Call Attempt:</strong> Lead is called
        </li>
        <li>
          <strong>If Unsuccessful:</strong> Status changes to &quot;retry&quot;
          and system waits for retry delay
        </li>
        <li>
          <strong>After Delay:</strong> Status changes to &quot;pending&quot;
          for next attempt
        </li>
        <li>
          <strong>Repeat:</strong> Until successful OR max attempts reached
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Retry Delay Configuration
      </h3>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
        <p className="text-gray-300 mb-4">
          <strong>Where to Set:</strong> Settings → Calling Configuration
        </p>
        <p className="text-gray-300 mb-4">
          <strong>Options:</strong>
        </p>
        <ul className="space-y-2 text-gray-300 ml-4">
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>Minimum: 1 hour</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>Maximum: 168 hours (7 days)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span>Default: Usually 1-2 hours</span>
          </li>
        </ul>
        <p className="text-gray-400 mt-4">
          <strong>What It Means:</strong> Longer delays = fewer calls per day,
          but less intrusive
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Maximum Call Attempts
      </h3>
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
        <p className="text-gray-300 mb-4">
          <strong>Where to Set:</strong> Settings → Calling Configuration
        </p>
        <p className="text-gray-300 mb-4">
          <strong>What It Means:</strong> System will try calling this many
          times before giving up
        </p>
        <div className="bg-gray-950 rounded p-3 mt-3">
          <p className="text-gray-400 text-sm">
            Example: If set to 3, system tries 3 times total. After max
            attempts, lead status changes to &quot;completed&quot; (even if
            never answered)
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        When Leads Are Retried
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-green-400 mb-3">
            Automatic Retries Happen For
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>No answer</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Busy signal</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Voicemail</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Temporary network errors</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              <span>Other temporary failures</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-red-400 mb-3">
            Leads Are NOT Retried For
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">✗</span>
              <span>Invalid phone number (marked &quot;failed&quot;)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">✗</span>
              <span>Phone doesn&apos;t exist (marked &quot;failed&quot;)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">✗</span>
              <span>Other permanent errors</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Retry Status Visibility
      </h3>
      <p className="text-gray-300 mb-4">
        In the lead details panel, you can see:
      </p>
      <div className="space-y-3 text-gray-300">
        <div className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1 font-bold">1</span>
          <div>
            <strong>Attempts Made:</strong> How many times the lead has been
            called
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1 font-bold">2</span>
          <div>
            <strong>Attempts Remaining:</strong> How many more attempts will be
            made
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1 font-bold">3</span>
          <div>
            <strong>Time Until Next Retry:</strong> Countdown showing when the
            next attempt will happen
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1 font-bold">4</span>
          <div>
            <strong>Last Called:</strong> When the last call attempt was made
          </div>
        </div>
      </div>
    </section>
  );
}
