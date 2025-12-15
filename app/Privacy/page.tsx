import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-12 bg-black text-white"
      id="Privacy"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Privacy Policy
      </h1>
      <p className="text-gray-300 mb-8 text-center">
        Last updated: June 28, 2025
      </p>

      <div className="prose prose-invert max-w-none">
        <p className="mb-6 text-gray-300">
          Welcome to FusionCalling.com (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website
          and use our AI-powered calling services. We are committed to
          protecting your privacy and complying with applicable data protection
          laws, including GDPR where relevant.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Data Controller
          </h2>
          <p className="mb-4 text-gray-300">
            The data controller for your personal information is Fusion Calling.
            For any privacy-related inquiries, contact support@fusioncalling.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold mb-3 text-white">
            a. Account and Business Information
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Email address (primary identifier)</li>
            <li>Full name and business details</li>
            <li>Profile image (if provided via OAuth)</li>
            <li>Account preferences and settings</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 text-white">
            b. Call and Communication Data
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Call metadata (timestamps, duration, routing)</li>
            <li>Call recordings or transcripts when enabled by you</li>
            <li>Contacts you upload or connect through integrations</li>
            <li>Engagement metrics and analytics</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 text-white">
            c. Visitor and Usage Analytics
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>IP-based approximate location, device, and browser information</li>
            <li>Page visits, clicks, and interaction data</li>
            <li>Session, performance, and error logs</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 text-white">
            d. Payment Information
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              Payments are processed by our payment partners. We receive payment
              status/confirmation but do not store full card details.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            3. Legal Basis for Processing (GDPR)
          </h2>
          <p className="mb-4 text-gray-300">
            Where GDPR applies, we process personal data based on:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Consent (e.g., marketing communications, non-essential cookies)</li>
            <li>Contract (to provide and support the Service)</li>
            <li>Legitimate interest (security, fraud prevention, service improvement)</li>
            <li>Legal obligation (compliance with applicable laws)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            4. How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">For customers and users:</span>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Authenticate and maintain your account</li>
            <li>Operate calling workflows and related features</li>
            <li>Process payments via trusted partners</li>
            <li>Provide support, updates, and service notifications</li>
            <li>Improve the platform and develop new capabilities</li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">For call recipients and contacts:</span>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Deliver calls, messages, and requested information</li>
            <li>Provide analytics on call performance to the customer</li>
            <li>Track engagement to optimize call flows</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5. Third-Party Services and Data Sharing
          </h2>
          <p className="mb-4 text-gray-300">
            We integrate with third-party services for authentication, payments,
            messaging, storage, and analytics. By using the Service, you also
            agree to their respective terms and privacy policies. We do not sell
            or rent your personal information for marketing purposes.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Identity providers (e.g., Google OAuth) for secure sign-in</li>
            <li>Payment processors for billing and subscriptions</li>
            <li>Messaging/voice providers to route calls and messages</li>
            <li>Analytics and infrastructure providers for performance and security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            6. Data Retention
          </h2>
          <p className="mb-4 text-gray-300">
            We retain personal data for as long as needed to provide the Service
            and fulfill the purposes outlined here, unless a longer retention
            period is required by law. Call recordings, transcripts, and related
            data are retained based on your configuration and applicable law.
            Payment data is retained by payment processors per their policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            7. Your Rights (where applicable, incl. GDPR/CCPA)
          </h2>
          <p className="mb-4 text-gray-300">
            Subject to local law, you may have rights to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion (erasure) of your personal data</li>
            <li>Restrict or object to certain processing</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mb-4 text-gray-300">
            To exercise these rights, contact support@fusioncalling.com. We aim
            to respond within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            8. Data Security
          </h2>
          <p className="mb-4 text-gray-300">
            We implement industry-standard security measures, including
            encryption in transit, access controls, authentication safeguards,
            and regular assessments. No method of transmission or storage is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            9. International Data Transfers
          </h2>
          <p className="mb-4 text-gray-300">
            Your data may be processed outside your country or the European
            Economic Area. We use appropriate safeguards for such transfers,
            including standard contractual clauses or equivalent measures where
            required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            10. Cookies and Tracking
          </h2>
          <p className="mb-4 text-gray-300">
            We use essential cookies for authentication and functionality. With
            consent, we may use analytics cookies to improve our services. You
            can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            11. Children&apos;s Privacy
          </h2>
          <p className="mb-4 text-gray-300">
            Our services are not intended for children under 16. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us data, please contact us for deletion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            12. Changes to This Policy
          </h2>
          <p className="mb-4 text-gray-300">
            We may update this Privacy Policy to reflect changes in practices or
            law. We will update the &quot;Last updated&quot; date and notify
            users of material changes when required. Continued use after changes
            constitutes acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            13. Contact Information
          </h2>
          <p className="mb-4 text-gray-300">
            For questions about this Privacy Policy, to exercise your rights, or
            to request account deletion, contact:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg text-gray-300">
            <p className="font-semibold text-white">Fusion Calling</p>
            <p>Email: support@fusioncalling.com</p>
            <p>Website: fusioncalling.com</p>
            <p>Response Time: We aim to respond within 30 days</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            14. Supervisory Authority
          </h2>
          <p className="mb-4 text-gray-300">
            If you are not satisfied with our response, you may lodge a
            complaint with your local data protection authority. You can also
            contact us at support@fusioncalling.com so we can help resolve your
            concerns.
          </p>
        </section>
      </div>
    </div>
  );
}
