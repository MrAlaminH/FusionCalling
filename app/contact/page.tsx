import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";
import { buildOpenGraph } from "@/lib/seo";
import Footer from "@/components/Footer";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: {
    absolute: "Contact Fusion Calling — Email, Phone & Discovery Call",
  },
  description:
    "Reach Fusion Calling at hello@fusioncalling.com or +1 (914) 639-4069, or book a discovery call. Sales, support, and white-label partnership questions.",
  ...buildOpenGraph({
    title: "Contact Fusion Calling — Email, Phone & Discovery Call",
    description:
      "Reach Fusion Calling at hello@fusioncalling.com or +1 (914) 639-4069, or book a discovery call. Sales, support, and white-label partnership questions.",
    path: "/contact",
  }),
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#webpage`,
      url: `${SITE_URL}/contact`,
      name: "Contact Fusion Calling",
      description:
        "Contact methods for Fusion Calling: email, phone, and discovery-call booking.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
        ],
      },
    },
  ],
};

const channels = [
  {
    label: "Email",
    value: "hello@fusioncalling.com",
    href: "mailto:hello@fusioncalling.com",
    detail: "Sales, support, and partnership questions. Fastest channel.",
  },
  {
    label: "Phone",
    value: "+1 (914) 639-4069",
    href: "tel:+19146394069",
    detail: "Talk to the team during US business hours.",
  },
  {
    label: "Book a discovery call",
    value: "cal.com/mralamin/discovery-call",
    href: "https://cal.com/mralamin/discovery-call",
    detail: "A 20-minute walkthrough of the platform and white-label program.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <main className="min-h-screen w-full bg-black text-white">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-28 pb-6 md:pt-36 md:pb-8">
          <p className="text-brand-strong text-sm font-semibold uppercase tracking-wider mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Talk to the{" "}
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
              Fusion Calling team
            </span>
          </h1>
          {/* Answer-first: the fastest contact method before anything else. */}
          <p className="text-lg text-gray-400 leading-relaxed">
            The fastest way to reach us is email at{" "}
            <a
              href="mailto:hello@fusioncalling.com"
              className="text-brand hover:underline"
            >
              hello@fusioncalling.com
            </a>{" "}
            — we answer sales, support, and partnership questions there. To see the
            platform live, book a discovery call.
          </p>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-8">
          <ul className="space-y-4">
            {channels.map((c) => (
              <li
                key={c.label}
                className="rounded-2xl border border-brand/20 bg-black/40 p-6"
              >
                <h2 className="text-lg font-semibold text-white mb-1">{c.label}</h2>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-brand hover:underline"
                >
                  {c.value}
                </a>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {c.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Before you write
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Most questions are answered directly on the site: plan pricing and
            included minutes on{" "}
            <Link href="/pricing" className="text-brand hover:underline">
              the pricing page
            </Link>
            , partnership details in the{" "}
            <Link href="/faq" className="text-brand hover:underline">
              FAQ
            </Link>
            , and integration steps in the{" "}
            <Link href="/docs" className="text-brand hover:underline">
              documentation
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
