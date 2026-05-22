import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Fusion Calling privacy policy covering data collection, usage, retention, security, and your rights.",
  alternates: {
    canonical: "/Privacy",
  },
};

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
        Last updated: May 22, 2026
      </p>

      <div className="prose prose-invert max-w-none">
        <p className="mb-6 text-gray-300">
          Welcome to FusionCalling.com (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website
          and use our AI-powered calling services. We are committed to
          protecting your privacy and complying with applicable data protection
          laws, including GDPR where relevant. We comply with the{" "}
          <span className="font-semibold">
            Google API Services User Data Policy
          </span>
          , including the requirements for restricted scopes.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Data Controller
          </h2>
          <p className="mb-4 text-gray-300">
            The data controller for your personal information is Fusion Calling.
            For any privacy-related inquiries, contact
            support@fusioncalling.com.
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
            <li>
              IP-based approximate location, device, and browser information
            </li>
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
            <li>
              Consent (e.g., marketing communications, non-essential cookies)
            </li>
            <li>Contract (to provide and support the Service)</li>
            <li>
              Legitimate interest (security, fraud prevention, service
              improvement)
            </li>
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
            <span className="font-semibold">
              For call recipients and contacts:
            </span>
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
            <li>
              Analytics and infrastructure providers for performance and
              security
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5.1. Google Calendar API Integration
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">What We Access:</span> When you
            authorize our application to access your Google Calendar, we request
            specific permissions to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              Read event details (event titles, times, duration, and
              descriptions)
            </li>
            <li>Read calendar settings to determine your availability</li>
            <li>
              Perform these functions solely for scheduling AI-powered calls and
              meetings
            </li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">What We Do NOT Access:</span> We do
            not request, store, or use:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Write or modify permissions to your Google Calendar</li>
            <li>Delete events or calendar data</li>
            <li>Share your calendar data with third parties</li>
            <li>
              Use your calendar data for any purpose other than coordinating
              with our calling platform
            </li>
            <li>
              Use your calendar data for marketing, advertising, or profiling
            </li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Retention:</span> Google
            Calendar event information is retained only as long as necessary to
            provide the scheduling functionality. When you disconnect your
            Google Calendar from our platform or delete your account, we
            immediately cease accessing your calendar data and securely delete
            any cached information within 30 days.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Your Control:</span> You can revoke
            our access to your Google Calendar at any time through your Google
            Account settings or by contacting support@fusioncalling.com.
            Revocation is immediate and will prevent future calendar-based
            scheduling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5.2. Limited Scope Usage
          </h2>
          <p className="mb-4 text-gray-300">
            In accordance with the{" "}
            <span className="font-semibold">
              Google API Services User Data Policy
            </span>
            , we strictly limit our use of Google API scopes to the minimum
            necessary to provide scheduling and calendar coordination features.
            We do not use any data accessed through Google APIs for purposes
            unrelated to the specific service you requested.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5.3. OAuth Scope Transparency
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Requested Scopes:</span> When you
            connect your Google Account to Fusion Calling, we request the
            following specific OAuth scopes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              <code className="bg-gray-800 px-2 py-1 rounded">
                calendar.readonly
              </code>{" "}
              — Read-only access to your Google Calendar events and settings
            </li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Why We Need This Scope:</span>
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              To check your availability before scheduling AI-powered calls
            </li>
            <li>To prevent scheduling conflicts with existing meetings</li>
            <li>To coordinate optimal call times based on your calendar</li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Scope Justification:</span> We use
            the minimum read-only scope necessary. We explicitly do NOT request
            write permissions (calendar.events), which means we cannot modify,
            create, or delete your calendar events.
          </p>
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
            8. Data Security and API Data Protection
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">
              For Google API Data Specifically:
            </span>{" "}
            We implement industry-leading security practices to protect data
            accessed through Google APIs, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>End-to-end encryption for API data in transit and at rest</li>
            <li>
              Restricted access controls limiting employee access to production
              data
            </li>
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with OWASP Top 10 security standards</li>
            <li>Secure deletion protocols for cached Google data</li>
            <li>No sharing of Google API data with third parties</li>
            <li>
              Separate data retention policies for API-sourced information
            </li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">General Security:</span> We
            implement industry-standard security measures, including encryption
            in transit, access controls, authentication safeguards, and regular
            assessments. No method of transmission or storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            9. Prohibited Uses of API Data
          </h2>
          <p className="mb-4 text-gray-300">
            In compliance with the Google API Services User Data Policy, we
            explicitly prohibit the use of Google Calendar data for:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Targeted advertising or creating advertising profiles</li>
            <li>
              Selling, trading, or transferring personal information to third
              parties
            </li>
            <li>
              Building a competitive service or scraping calendar information
            </li>
            <li>
              Combining with other data sources for purposes beyond service
              delivery
            </li>
            <li>
              Training machine learning or AI models using your calendar data
            </li>
            <li>
              Any use that violates applicable laws or Google&apos;s policies
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            10. International Data Transfers
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
            11. Cookies and Tracking
          </h2>
          <p className="mb-4 text-gray-300">
            We use essential cookies for authentication and functionality. With
            consent, we may use analytics cookies to improve our services. You
            can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            12. Children&apos;s Privacy
          </h2>
          <p className="mb-4 text-gray-300">
            Our services are not intended for children under 16. We do not
            knowingly collect personal information from children. If you believe
            a child has provided us data, please contact us for deletion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            13. Data Export and Portability
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Right to Data Access:</span> You
            have the right to request an export of your personal data in a
            commonly-used, machine-readable format (e.g., CSV, JSON). To
            exercise this right, contact support@fusioncalling.com.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Timeframe:</span> We will provide
            your data export within 30 days of your request. For large data
            sets, we may require additional time but will keep you informed of
            progress.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">
              Data Retention After Deletion:
            </span>{" "}
            Upon account deletion, personal data will be removed from active
            systems within 30 days. Residual data in backups and logs may
            persist for an additional period but will not be accessed or
            processed for any purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            14. Security Incident Notification
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Incident Response:</span> In the
            event of a security breach or unauthorized access to your personal
            data, we will:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Investigate the incident promptly</li>
            <li>
              Notify you without unreasonable delay (typically within 72 hours)
            </li>
            <li>Provide details about the nature, scope, and data affected</li>
            <li>Recommend steps you can take to protect yourself</li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Responsible Disclosure:</span> If
            you discover a security vulnerability, please report it to
            security@fusioncalling.com rather than publicly disclosing it. We
            appreciate responsible disclosure and will work to address
            vulnerabilities promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            15. Third-Party Sub-Processors and Data Sharing
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Sub-Processors:</span> To deliver
            the Service, Fusion Calling may engage third-party sub-processors
            (such as cloud infrastructure providers, analytics vendors, and
            payment processors). These sub-processors are contractually bound to
            protect your data in accordance with applicable privacy laws.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Sub-Processor List:</span> We
            maintain a current list of sub-processors. For the most up-to-date
            information, please contact privacy@fusioncalling.com.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Transfer Mechanisms:</span>{" "}
            Where your data is transferred internationally, we employ
            appropriate safeguards including standard contractual clauses,
            adequacy decisions, or other mechanisms required by applicable data
            protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            16. Changes to This Policy
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
            17. Contact Information
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
            18. Data Protection & API Compliance Officer
          </h2>
          <p className="mb-4 text-gray-300">
            For questions specific to Google API data handling, compliance with
            the Google API Services User Data Policy, or concerns about how we
            handle your Google Calendar information, please contact:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg text-gray-300 mb-4">
            <p className="font-semibold text-white">API Data Privacy Contact</p>
            <p>Email: privacy@fusioncalling.com</p>
            <p>Subject: Google API Compliance or Calendar Data Privacy</p>
            <p>Response Time: We aim to respond within 7 business days</p>
          </div>
          <p className="mb-4 text-gray-300">
            We maintain a commitment to transparency and accountability
            regarding all data accessed through Google APIs. All such data is
            handled with the highest standards of security and care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            19. Supervisory Authority
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
