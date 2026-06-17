import CodeBlock from "@/components/docs/code-block";
import Callout from "@/components/docs/callout";
import CodeTabs from "@/components/docs/code-tabs";

export default function ApiAuthentication() {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
      <h3 className="text-2xl font-bold mb-4 text-white">Authentication</h3>

      <p className="text-gray-300 mb-4">
        All Fusion Calling APIs use API key authentication via the{" "}
        <code className="text-orange-400">Authorization</code> header using the Bearer
        token format.
      </p>

      <h4 className="text-lg font-semibold mb-3 text-white mt-6">
        Getting Your API Key
      </h4>
      <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
        <li>Log in to your Fusion Calling account</li>
        <li>Navigate to <strong>Settings</strong> → <strong>API Keys</strong></li>
        <li>Click <strong>&quot;Generate New API Key&quot;</strong></li>
        <li>Copy the API key (it&apos;s only shown once when created)</li>
      </ol>

      <h4 className="text-lg font-semibold mb-3 text-white mt-6">
        Using Your API Key
      </h4>
      <p className="text-gray-300 mb-4">
        Include the API key in the <code className="text-orange-400">Authorization</code>{" "}
        header of every request:
      </p>

      <CodeBlock
        code={`Authorization: Bearer your-api-key-here`}
        language="bash"
      />

      <h4 className="text-lg font-semibold mb-3 text-white mt-6">
        Authentication Examples
      </h4>
      <CodeTabs
        examples={[
          {
            language: "bash",
            label: "cURL",
            code: `curl -X GET "https://app.fusioncalling.com/api/calendar/external/v1/events" \\
  -H "Authorization: Bearer bf207bcf-c0de-4067-bd28-45728bd305aa"`,
          },
          {
            language: "javascript",
            label: "JavaScript",
            code: `const response = await fetch('https://app.fusioncalling.com/api/calendar/external/v1/events', {
  headers: {
    'Authorization': 'Bearer bf207bcf-c0de-4067-bd28-45728bd305aa'
  }
});`,
          },
          {
            language: "python",
            label: "Python",
            code: `import requests

headers = {
    'Authorization': 'Bearer bf207bcf-c0de-4067-bd28-45728bd305aa'
}

response = requests.get(
    'https://app.fusioncalling.com/api/calendar/external/v1/events',
    headers=headers
)`,
          },
        ]}
      />

      <Callout type="warning" className="mt-6">
        <strong>Security:</strong> Never expose your API key in client-side code, public
        repositories, or unsecured environments. Always use environment variables or
        secure secret management.
      </Callout>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h5 className="text-white font-semibold mb-2">Authentication Best Practices</h5>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✅ Store API keys in environment variables</li>
          <li>✅ Rotate API keys regularly</li>
          <li>✅ Use different keys for development and production</li>
          <li>✅ Implement key rotation in your deployment process</li>
          <li>✅ Monitor API key usage for unusual activity</li>
          <li>❌ Never commit API keys to version control</li>
          <li>❌ Never share API keys via email or chat</li>
        </ul>
      </div>
    </div>
  );
}
