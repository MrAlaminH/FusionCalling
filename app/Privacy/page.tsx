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
        Last Updated: November 25, 2024
      </p>

      <div className="prose prose-invert max-w-none">
        <p className="mb-6 text-gray-300">
          At Fusion Calling, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your data when you interact with our
          website and services. By using our website or services, you agree to
          the terms of this Privacy Policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-white">
            a. Information You Provide:
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li className="mb-2">
              <span className="font-semibold">Contact Information:</span> When
              you contact us through our website, you may provide us with your
              name, email address, phone number, and other contact details.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Service Inquiry:</span> If you
              request information about our services or seek to engage our AI
              call agent development services, you may provide business
              information, including your business name, industry, and specific
              needs.
            </li>
            <li className="mb-2">
              <span className="font-semibold">User Content:</span> Any
              information or content you provide through our website, such as
              feedback, inquiries, or submissions.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-white">
            b. Information Collected Automatically:
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li className="mb-2">
              <span className="font-semibold">Usage Data:</span> We collect
              information about your interactions with our website, including
              the pages you visit, the links you click, and the time spent on
              each page.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Device Information:</span> We may
              collect information about the device you use to access our
              website, including IP address, browser type, operating system, and
              device identifiers.
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Cookies and Similar Technologies:
              </span>{" "}
              We use cookies and similar technologies to collect information
              about your browsing habits and to improve your experience on our
              website.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-300">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>To provide and improve our services.</li>
            <li>To communicate with users.</li>
            <li>For legal compliance and safety.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            3. Sharing Your Information
          </h2>
          <p className="mb-4 text-gray-300">
            We do not sell or rent your personal information to third parties.
            However, we may share your data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>
              With service providers who assist in operating our business.
            </li>
            <li>When required by law or to protect rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            4. Data Security
          </h2>
          <p className="mb-4 text-gray-300">
            We take reasonable measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
            However, no system can be completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5. Data Retention
          </h2>
          <p className="mb-4 text-gray-300">
            We retain your information for as long as necessary for the purposes
            outlined in this Privacy Policy, unless a longer retention period is
            required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            6. Your Rights
          </h2>
          <p className="mb-4 text-gray-300">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-300">
            <li>Access and correct your personal information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt out of communications.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            7. Children&apos;s Privacy
          </h2>
          <p className="mb-4 text-gray-300">
            Our services are not intended for individuals under 18. We do not
            intentionally collect data from minors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-gray-300">
            We may update this Privacy Policy. Changes will be indicated by the
            &quot;Last Updated&quot; date. Users are encouraged to review the
            policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            9. Contact Us
          </h2>
          <p className="mb-4 text-gray-300">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg text-gray-300">
            <p className="font-semibold text-white">Fusion Calling</p>
            <p>Email: contact@fusioncalling.com</p>
            <p>Phone: [Your Phone Number]</p>
            <p>[Your Physical Address]</p>
          </div>
        </section>
      </div>
    </div>
  );
}
