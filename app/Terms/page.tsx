import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Fusion Calling terms of service describing acceptable use, billing, privacy, and platform obligations.",
  alternates: {
    canonical: "/Terms",
  },
};

export default function TermsOfUse() {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-12 bg-black text-white"
      id="Terms"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Terms of Service
      </h1>
      <p className="text-gray-300 mb-8 text-center">
        Last updated: May 22, 2026
      </p>

      <div className="prose prose-invert max-w-none">
        <p className="mb-6 text-gray-300">
          Welcome to FusionCalling.com (&quot;Service,&quot;
          &quot;Platform,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern
          your use of our AI-powered calling platform and related services. By
          accessing or using Fusion Calling, you agree to be bound by these
          Terms and our Privacy Policy. If you disagree with any part of these
          Terms, you may not access the Service.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4 text-gray-300">
            By using Fusion Calling, you agree to comply with and be legally
            bound by these Terms. These Terms form a binding agreement between
            you and Fusion Calling LLC (or the applicable Fusion Calling
            entity). Continued use after updates constitutes acceptance of the
            revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            2. Description of Service
          </h2>
          <p className="mb-4 text-gray-300">
            Fusion Calling is an AI calling and communication platform designed
            for businesses to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Create and manage AI-assisted calling workflows</li>
            <li>Automate outbound/inbound call handling</li>
            <li>Track analytics and engagement metrics</li>
            <li>Integrate with CRMs and communication tools</li>
            <li>Monitor call performance and outcomes</li>
          </ul>
          <p className="mb-4 text-gray-300">
            Our platform may integrate with third-party services for
            authentication, payments, messaging, and analytics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            3. User Accounts and Registration
          </h2>
          <p className="mb-4 text-gray-300">To use the Service, you must:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Be at least 18 years old or have parental/guardian consent</li>
            <li>Provide accurate, complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us promptly of any unauthorized access</li>
          </ul>
          <p className="mb-4 text-gray-300">
            You may register using supported identity providers (e.g., Google
            OAuth) or email/password authentication. Account deletion requests
            can be sent to support@fusioncalling.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            4. Acceptable Use Policy
          </h2>
          <p className="mb-4 text-gray-300">
            You agree NOT to use the Service to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              Send spam or unsolicited communications or violate anti-spam laws
            </li>
            <li>Collect or process contact data without proper consent</li>
            <li>Create misleading, deceptive, or unlawful call flows</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property or privacy rights</li>
            <li>Transmit malware, viruses, or harmful code</li>
            <li>Attempt to gain unauthorized access to our systems or data</li>
            <li>
              Use the platform for illegal, abusive, or unethical purposes
            </li>
          </ul>
          <p className="mb-4 text-gray-300">
            Violations may result in immediate suspension or termination of your
            account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5. Third-Party Service Integration
          </h2>
          <p className="mb-4 text-gray-300">
            By using Fusion Calling, you acknowledge and agree to the terms of
            service and privacy policies of any integrated third-party services
            (e.g., identity providers, payment processors, messaging services).
            We are not responsible for the availability, functionality,
            security, or policies of these third-party services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5.1. Google Calendar Integration and OAuth Authorization
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Scope of Access:</span> When you
            authorize Fusion Calling to access your Google Calendar through
            OAuth authentication, you grant us read-only access to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              Your calendar event titles, times, duration, and descriptions
            </li>
            <li>Your calendar settings to determine availability</li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">What We Will NOT Do:</span> You
            agree that Fusion Calling will not:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Modify, create, or delete events in your Google Calendar</li>
            <li>Share your calendar data with third parties</li>
            <li>
              Use your calendar data for targeted advertising or marketing
            </li>
            <li>Sell or trade your calendar information</li>
            <li>
              Use calendar data to build competing services or scrape
              information
            </li>
            <li>
              Train machine learning or AI models using your calendar data
            </li>
            <li>
              Use calendar data for any purpose beyond coordinating with our
              calling platform
            </li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Retention and Deletion:</span>{" "}
            Calendar event information accessed through Google APIs is retained
            only as long as necessary to provide scheduling functionality. Upon
            account deletion or disconnection of your Google Calendar, we will
            immediately cease accessing your data and securely delete any cached
            information within 30 days.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Revocation of Access:</span> You may
            revoke our access to your Google Calendar at any time through your
            Google Account settings or by contacting support@fusioncalling.com.
            Revocation will take effect immediately and prevent future
            calendar-based scheduling on our platform.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Compliance:</span> We comply with
            the Google API Services User Data Policy and commit to using Google
            APIs only in accordance with Google&apos;s policies and
            restrictions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            6. AI Model and Third-Party Services
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Third-Party AI Models:</span> Fusion
            Calling utilizes third-party artificial intelligence and machine
            learning models to provide platform features. We do not develop or
            train these models ourselves. Our role is to integrate, configure,
            and orchestrate these services to deliver enhanced functionality.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">AI Limitations:</span> AI-powered
            features (including call transcription, predictions, and
            recommendations) are provided on an &quot;as-is&quot; basis. AI
            outputs may contain inaccuracies, and we make no warranties
            regarding the accuracy or reliability of AI-generated content. You
            are responsible for verifying any AI-generated information before
            taking action.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">
              Third-Party Service Dependencies:
            </span>{" "}
            Platform functionality depends on third-party services and APIs. We
            are not responsible for outages, changes, or discontinuation of
            these services. Your use of such features is subject to the
            respective third-party&apos;s terms of service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            7. Recording, Consent, and Legal Compliance
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">
              Call Recording Responsibility:
            </span>{" "}
            You are solely responsible for obtaining proper consent from all
            call participants before recording or monitoring calls. Fusion
            Calling does not obtain consent on your behalf. You must comply with
            all applicable laws, regulations, and requirements in your
            jurisdiction regarding call recording, monitoring, and disclosure.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">User Compliance Obligation:</span>{" "}
            You agree to comply with all anti-spam laws, telemarketing
            regulations, do-not-call lists, and other applicable requirements
            when using the platform. Fusion Calling provides features to support
            compliance, but you maintain ultimate responsibility for lawful
            usage.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">
              Indemnification for Non-Compliance:
            </span>{" "}
            You indemnify Fusion Calling against any claims arising from your
            failure to obtain proper consent, violation of recording laws, or
            non-compliance with applicable regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            8. White-Label and Reseller Terms
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">White-Label Use:</span> If you are
            authorized to resell or rebrand Fusion Calling services (white-label
            arrangement), you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              Maintain the underlying functionality and security of the platform
            </li>
            <li>
              Not remove or obscure Fusion Calling&apos;s attribution as
              required by your agreement
            </li>
            <li>Ensure end-users comply with these Terms of Service</li>
            <li>
              Remain liable for your end-users&apos; compliance and actions
            </li>
            <li>Not reverse-engineer, copy, or compete with the platform</li>
          </ul>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Sublicensing:</span> You may
            sublicense the platform to end-users only as permitted in your
            specific white-label agreement. You are responsible for enforcing
            these Terms with your end-users and handling their support requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            9. Data Ownership and Usage Rights
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Your Data:</span> You retain
            ownership of the content and data you create or upload, including
            call scripts, recordings, contact information, and analytics you
            generate.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Our Rights:</span> You grant us a
            limited license to process your data solely to provide and improve
            the Service, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Running and routing calls through the platform</li>
            <li>Processing messages and notifications</li>
            <li>Generating analytics and performance reports</li>
            <li>Providing support and troubleshooting</li>
          </ul>
          <p className="mb-4 text-gray-300">
            We do not claim ownership of your content and will not use it for
            purposes unrelated to providing the Service without your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            10. Compliance and Privacy
          </h2>
          <p className="mb-4 text-gray-300">
            You are responsible for obtaining proper consent from call
            participants, complying with applicable call recording laws,
            telemarketing rules, privacy regulations (including GDPR/CCPA where
            applicable), and honoring data subject requests. We provide features
            to help with compliance, but ultimate responsibility remains with
            you as the data controller for your contacts and call flows.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            11. Service Availability and Limitations
          </h2>
          <p className="mb-4 text-gray-300">
            We strive for high availability but do not guarantee uninterrupted
            service, compatibility with all devices or networks, availability of
            integrations, or data recovery in all cases. We may modify, suspend,
            or discontinue features with reasonable notice when practicable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            12. Intellectual Property Rights
          </h2>
          <p className="mb-4 text-gray-300">
            The Fusion Calling platform (including software, design, features,
            and branding) is protected by intellectual property laws and remains
            our exclusive property. You may not copy, modify, distribute, or
            create derivative works of the platform without our written
            permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            13. Limitation of Liability
          </h2>
          <p className="mb-4 text-gray-300">
            To the maximum extent permitted by law, Fusion Calling shall not be
            liable for indirect, incidental, special, consequential, or punitive
            damages; loss of profits, data, or business opportunities; damages
            resulting from third-party service failures; user-generated content;
            or compliance failures related to your use of collected data. Our
            total liability is limited to the amount you paid for the Service in
            the 12 months preceding the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            14. Data Export and Portability
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Export:</span> You may request
            an export of your account data at any time by contacting
            support@fusioncalling.com. We will provide your data in a
            commonly-used format within a reasonable timeframe.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Deletion:</span> Upon account
            termination, we will delete your personal data within 30 days unless
            legally required to retain it. Some residual data may exist in
            backups for an additional period but will not be actively
            accessible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            15. Security and Incident Notification
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Security Measures:</span> We
            implement industry-standard security measures to protect your data.
            However, no system is 100% secure, and we cannot guarantee absolute
            protection against unauthorized access or breaches.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Incident Notification:</span> In the
            event of a security incident that compromises your personal data, we
            will notify you without unreasonable delay and provide information
            about the nature of the incident, the data affected, and recommended
            actions.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Responsible Disclosure:</span> If
            you discover a security vulnerability in our platform, please report
            it to security@fusioncalling.com. Do not publicly disclose the
            vulnerability before we have time to address it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            16. Third-Party Data Processing
          </h2>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Processors:</span> Fusion
            Calling may use third-party services and sub-processors (including
            cloud providers, analytics services, and payment processors) to
            process your data. These processors are contractually bound to
            protect your data in accordance with applicable privacy laws.
          </p>
          <p className="mb-4 text-gray-300">
            <span className="font-semibold">Data Transfers:</span> Your data may
            be processed and stored in multiple jurisdictions. Where required,
            we use appropriate safeguards (such as standard contractual clauses)
            to ensure adequate protection of your data during international
            transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            17. Indemnification
          </h2>
          <p className="mb-4 text-gray-300">
            You agree to indemnify and hold Fusion Calling harmless from any
            claims, damages, losses, liabilities, and expenses arising from your
            use of the Service, violation of these Terms, or infringement of
            third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            18. Account Termination
          </h2>
          <p className="mb-4 text-gray-300">
            Either party may terminate the Service relationship. You may request
            termination at any time by emailing support@fusioncalling.com. We
            may suspend or terminate for violations, illegal activity, or abuse.
            Upon termination, access may be suspended and data handled per our
            retention policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            19. Dispute Resolution
          </h2>
          <p className="mb-4 text-gray-300">
            Disputes arising from these Terms will be resolved through binding
            arbitration or courts of competent jurisdiction, unless prohibited
            by law. You waive participation in class actions where permitted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            20. Changes to Terms
          </h2>
          <p className="mb-4 text-gray-300">
            We may modify these Terms at any time. Material changes will be
            communicated via reasonable notice (e.g., email). Continued use
            after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            21. Governing Law
          </h2>
          <p className="mb-4 text-gray-300">
            These Terms are governed by applicable laws and regulations. Any
            legal proceedings shall be conducted in English and in the venue we
            designate, unless local law requires otherwise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            22. Contact Information
          </h2>
          <p className="mb-4 text-gray-300">
            For questions about these Terms of Service, please contact:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg text-gray-300">
            <p className="font-semibold text-white">Fusion Calling</p>
            <p>Email: support@fusioncalling.com</p>
            <p>Website: fusioncalling.com</p>
            <p>Response Time: We aim to respond within 5 business days</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            23. Severability
          </h2>
          <p className="mb-4 text-gray-300">
            If any provision of these Terms is found unenforceable, the
            remaining provisions remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            24. Entire Agreement
          </h2>
          <p className="mb-4 text-gray-300">
            These Terms, together with our Privacy Policy, constitute the entire
            agreement between you and Fusion Calling regarding the Service.
          </p>
        </section>
      </div>
    </div>
  );
}
