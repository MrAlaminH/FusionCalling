export function StatusesSection() {
  return (
    <section id="understanding-statuses" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Understanding Lead Statuses
      </h2>
      <p className="text-gray-300 mb-6">
        Your leads can be in one of five statuses. Understanding these statuses
        helps you track your calling progress:
      </p>

      <div className="space-y-6 mb-8">
        {/* Pending */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold mr-3">
              Pending
            </span>
            <h4 className="text-xl font-semibold text-white">Ready to Call</h4>
          </div>
          <p className="text-gray-400 mb-3">
            <strong>Meaning:</strong> Lead is ready to be called right now
          </p>
          <p className="text-gray-400 mb-3">
            <strong>When:</strong> Newly added leads start in this status, or
            leads that have waited for their retry delay period
          </p>
          <p className="text-gray-400">
            <strong>Action:</strong> System will automatically call these leads
            when auto-calling is enabled
          </p>
        </div>

        {/* In-Progress */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold mr-3">
              In-Progress
            </span>
            <h4 className="text-xl font-semibold text-white">Call Active</h4>
          </div>
          <p className="text-gray-400 mb-3">
            <strong>Meaning:</strong> A call is currently happening for this
            lead
          </p>
          <p className="text-gray-400 mb-3">
            <strong>When:</strong> System has initiated a call and is waiting
            for it to complete
          </p>
          <p className="text-gray-400">
            <strong>Action:</strong> Wait for the call to finish. Status will
            automatically update
          </p>
        </div>

        {/* Retry */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold mr-3">
              Retry
            </span>
            <h4 className="text-xl font-semibold text-white">
              Waiting for Retry Delay
            </h4>
          </div>
          <p className="text-gray-400 mb-3">
            <strong>Meaning:</strong> Call was unsuccessful, waiting for retry
            delay to pass before trying again
          </p>
          <p className="text-gray-400 mb-3">
            <strong>When:</strong> Call was not answered (no answer, busy,
            voicemail), failed temporarily, or lead hasn&apos;t reached max
            attempts yet
          </p>
          <p className="text-gray-400">
            <strong>Action:</strong> System will automatically retry after the
            configured delay
          </p>
        </div>

        {/* Completed */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mr-3">
              Completed
            </span>
            <h4 className="text-xl font-semibold text-white">Finished</h4>
          </div>
          <p className="text-gray-400 mb-3">
            <strong>Meaning:</strong> Lead has reached the end of the calling
            process
          </p>
          <p className="text-gray-400 mb-3">
            <strong>When:</strong> Call was successfully connected (person
            answered) or maximum call attempts reached
          </p>
          <p className="text-gray-400">
            <strong>Action:</strong> No further calls will be made. Review call
            results in call history
          </p>
        </div>

        {/* Failed */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-3">
            <span className="inline-block bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold mr-3">
              Failed
            </span>
            <h4 className="text-xl font-semibold text-white">
              Permanent Error
            </h4>
          </div>
          <p className="text-gray-400 mb-3">
            <strong>Meaning:</strong> Lead has a permanent issue that prevents
            calling
          </p>
          <p className="text-gray-400 mb-3">
            <strong>When:</strong> Invalid phone number format, phone number
            doesn&apos;t exist, or other permanent errors
          </p>
          <p className="text-gray-400">
            <strong>Action:</strong> Fix the lead information (especially phone
            number) and manually change status back to &quot;pending&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
