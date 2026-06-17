import CodeBlock from "@/components/docs/code-block";
import Callout from "@/components/docs/callout";

function GuideCard({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 rounded-xl border border-white/10 bg-white/[0.02] p-5">
      <h3 className="text-lg font-semibold text-white mb-3">{name}</h3>
      <div className="space-y-3 text-sm text-gray-300">{children}</div>
    </div>
  );
}

export default function IntegrationGuidesSection() {
  return (
    <section id="integration-guides" className="mb-16 scroll-mt-28">
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Integration Guides</h2>
        <p className="text-gray-400 text-sm">Connect Fusion Calling with your favorite tools.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GuideCard id="gohighlevel" name="GoHighLevel">
          <p>Send leads from GoHighLevel to Fusion Calling whenever a contact is created.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-gray-300">
            <li>Go to <strong>Settings → Automation → Webhooks</strong></li>
            <li>Click <strong>&quot;Add Webhook&quot;</strong></li>
            <li>
              URL:{" "}
              <code className="text-orange-400 break-all">https://app.fusioncalling.com/api/leads/external/v1/leads</code>
            </li>
            <li>Method: <strong>POST</strong></li>
            <li>Header: <code className="text-orange-400">Authorization: Bearer YOUR_API_KEY</code></li>
          </ol>
          <CodeBlock
            code={`{
  "name": "{{contact.name}}",
  "phone": "{{contact.phone}}",
  "email": "{{contact.email}}",
  "tags": ["gohighlevel"]
}`}
            language="json"
          />
        </GuideCard>

        <GuideCard id="n8n" name="n8n">
          <p>Connect any system with visual workflows using an HTTP Request node.</p>
          <ul className="space-y-1.5 text-gray-300">
            <li>• <strong>Method:</strong> POST</li>
            <li>
              • <strong>URL:</strong>{" "}
              <code className="text-orange-400 break-all">https://app.fusioncalling.com/api/leads/external/v1/leads</code>
            </li>
            <li>• <strong>Auth:</strong> Generic Credential · header <code className="text-orange-400">Authorization</code> = <code className="text-orange-400">Bearer YOUR_API_KEY</code></li>
            <li>• <strong>Body content type:</strong> JSON</li>
          </ul>
          <Callout type="info">
            Use JSON mode so boolean/array fields aren&apos;t sent as strings.
          </Callout>
        </GuideCard>

        <GuideCard id="zapier" name="Zapier">
          <p>Connect Fusion Calling with 5,000+ apps.</p>
          <ul className="space-y-1.5 text-gray-300">
            <li>• Facebook Lead Ads → Fusion Calling</li>
            <li>• Google Sheets → Fusion Calling</li>
            <li>• Typeform → Fusion Calling</li>
            <li>• HubSpot → Fusion Calling</li>
          </ul>
          <p className="text-gray-400">
            Action: <strong>Webhooks by Zapier</strong> · POST to the Leads endpoint with the
            Authorization header.
          </p>
        </GuideCard>

        <GuideCard id="web-forms" name="Web Forms">
          <p>Capture leads from website forms with server-side processing.</p>
          <Callout type="warning">
            Never expose your API key in client-side JavaScript. Always process on the server.
          </Callout>
          <CodeBlock
            code={`<?php
$apiKey = 'YOUR_API_KEY';
$endpoint = 'https://app.fusioncalling.com/api/leads/external/v1/leads';

$data = [
    'name'  => $_POST['name'],
    'phone' => $_POST['phone'],
    'email' => $_POST['email'],
    'tags'  => ['website-form'],
];

$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json',
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);`}
            language="php"
          />
        </GuideCard>
      </div>
    </section>
  );
}
