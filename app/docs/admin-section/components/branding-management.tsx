export function BrandingManagementSection() {
  return (
    <section id="branding" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Branding Management
      </h2>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">
            Overview
          </h3>
          <p className="text-gray-300">
            Configure white-label branding to present your agency&apos;s
            identity to clients instead of the platform&apos;s default branding.
          </p>
        </div>

        {/* Access Control */}
        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-red-400">
            Access Control
          </h3>
          <p className="text-gray-300 mb-4">
            <span className="font-semibold">Important:</span> Only Agency Owners
            can access Branding.
          </p>
          <div className="bg-red-900/40 border border-red-700/30 rounded p-4 font-mono text-sm text-red-200">
            Agency Account Required
            <br />
            Only agency owners can access branding management.
          </div>
        </div>

        {/* Basic Settings */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-blue-600/20 border-b border-blue-700/50 p-6">
            <h3 className="text-2xl font-bold text-blue-400">Basic Settings</h3>
            <p className="text-blue-200 mt-2">
              Configure fundamental branding elements
            </p>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-800">
                <thead>
                  <tr className="bg-gray-800 border-b border-gray-700">
                    <th className="px-4 py-2 text-left text-blue-400 font-semibold">
                      Setting
                    </th>
                    <th className="px-4 py-2 text-left text-blue-400 font-semibold">
                      Description
                    </th>
                    <th className="px-4 py-2 text-left text-blue-400 font-semibold">
                      Best Practice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      Application Name
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Shown in browser tab and navigation
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Keep short and memorable
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      Support Email
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Contact email for clients
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Use monitored email
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      Privacy Policy URL
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Link in your footer
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Point to your legal page
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="px-4 py-2 font-semibold text-white">
                      Hide &quot;Powered By&quot; Badge
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Remove platform attribution
                    </td>
                    <td className="px-4 py-2 text-gray-300">
                      Recommended for white-label
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Domain Configuration */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-green-600/20 border-b border-green-700/50 p-6">
            <h3 className="text-2xl font-bold text-green-400">
              Domain Configuration
            </h3>
            <p className="text-green-200 mt-2">
              Choose between subdomain or custom domain
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-green-400 mb-4">
                Option 1: Subdomain (Recommended)
              </h4>
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 space-y-3">
                <p className="text-gray-300">
                  <span className="font-semibold">Format:</span>{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-orange-300">
                    youragency.fusioncalling.com
                  </code>
                </p>
                <div>
                  <p className="font-semibold text-green-400 mb-2">
                    Advantages:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>✓ No DNS configuration required</li>
                    <li>✓ Instant setup</li>
                    <li>✓ SSL automatically handled</li>
                    <li>✓ Free with all agency accounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-xl font-semibold text-green-400 mb-4">
                Option 2: Custom Domain
              </h4>
              <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 space-y-3">
                <p className="text-gray-300">
                  <span className="font-semibold">Format:</span>{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded text-orange-300">
                    app.yourdomain.com
                  </code>
                </p>
                <div>
                  <p className="font-semibold text-green-400 mb-2">
                    Requirements:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm ml-4">
                    <li>✓ DNS configuration required</li>
                    <li>✓ Domain must be already registered</li>
                    <li>✓ DNS propagation may take 24-48 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Branding */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="bg-purple-600/20 border-b border-purple-700/50 p-6">
            <h3 className="text-2xl font-bold text-purple-400">
              Visual Branding
            </h3>
            <p className="text-purple-200 mt-2">
              Customize the visual appearance of your portal
            </p>
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Logo Upload
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Recommended: 200x200 pixels PNG, JPG, or SVG
              </p>
              <ul className="space-y-1 text-gray-300 text-sm ml-4">
                <li>• Use transparent backgrounds for versatility</li>
                <li>• Ensure good contrast on light and dark backgrounds</li>
                <li>• Keep file size &lt; 100KB</li>
                <li>• Use your brand colors</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Favicon Upload
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Recommended: 32x32 pixels PNG, ICO, or SVG
              </p>
              <ul className="space-y-1 text-gray-300 text-sm ml-4">
                <li>• Make it recognizable at small sizes</li>
                <li>• Use high contrast</li>
                <li>• Keep it simple and distinctive</li>
                <li>• Match your logo style</li>
              </ul>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">
                Color Configuration
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Use hex color codes from your brand guidelines. Consider
                accessibility with sufficient contrast ratios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
