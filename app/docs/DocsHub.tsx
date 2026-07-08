"use client";

import Link from "next/link";
import { useState } from "react";
import { GEO_SOURCES } from "@/lib/seo";

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: "orange" | "blue" | "green" | "purple";
  topics: string[];
}

const docSections: DocSection[] = [
  {
    id: "api-reference",
    title: "API Reference",
    description:
      "Complete documentation for External Calendar API and External Leads API, including endpoints, authentication, integrations, and code examples.",
    icon: "📡",
    href: "/docs/api-reference",
    color: "orange",
    topics: [
      "Calendar API",
      "Leads API",
      "Authentication",
      "Integrations",
      "Webhooks",
    ],
  },
  {
    id: "admin-section",
    title: "Admin Section Guide",
    description:
      "Learn how to navigate and use the admin section for managing users, configurations, and system settings.",
    icon: "⚙️",
    href: "/docs/admin-section",
    color: "blue",
    topics: [
      "Dashboard Overview",
      "User Management",
      "System Settings",
      "Analytics",
    ],
  },
  {
    id: "agent-configuration",
    title: "Agent Configuration",
    description:
      "Step-by-step guide for configuring AI voice agents, including setting up prompts, voice selection, and behavior customization.",
    icon: "🤖",
    href: "/docs/agent-configuration",
    color: "green",
    topics: [
      "Agent Setup",
      "Prompt Engineering",
      "Voice Selection",
      "Behavior Rules",
    ],
  },
  {
    id: "lead-management",
    title: "Lead Management",
    description:
      "Comprehensive guide on managing leads through the Fusion Calling platform, from capture to conversion.",
    icon: "📊",
    href: "/docs/lead-management",
    color: "purple",
    topics: [
      "Lead Capture",
      "Lead Qualification",
      "CRM Integration",
      "Analytics",
    ],
  },
  {
    id: "sms-messaging",
    title: "SMS Messaging",
    description:
      "Complete SMS messaging documentation including setup, campaigns, compliance, and inbox management.",
    icon: "💬",
    href: "/docs/sms-messaging",
    color: "orange",
    topics: [
      "Getting Started",
      "SMS Campaigns",
      "Inbound Setup",
      "Compliance",
      "Messages Inbox",
    ],
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    hover: "hover:bg-orange-500/20",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:bg-blue-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    hover: "hover:bg-green-500/20",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:bg-purple-500/20",
  },
};

const docFaqs = [
  {
    question: "What can I build with the Fusion Calling documentation?",
    answer:
      "The docs cover everything you need to integrate and run AI voice agents: the External Calendar and Leads APIs, authentication, webhooks, agent configuration, lead management, SMS messaging, and the admin section.",
  },
  {
    question: "How do I authenticate API requests?",
    answer:
      "Every API request is authenticated with a bearer token as documented in the API Reference. Webhooks push call outcomes, lead events, and transcriptions to your endpoints so you can sync them into any CRM.",
  },
  {
    question: "Does Fusion Calling support white-label resellers?",
    answer:
      "Yes. Agencies can resell AI voice agents under their own brand using the white-label program, bringing their own Vapi, Retell, or ElevenLabs keys and managing unlimited client sub-accounts from one dashboard.",
  },
];

const docSources = [
  GEO_SOURCES.fusionApi,
  GEO_SOURCES.schema,
  GEO_SOURCES.googleSearchCentral,
];

export default function DocsHub() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocs = docSections.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.fusioncalling.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Documentation",
                    item: "https://www.fusioncalling.com/docs",
                  },
                ],
              },
              {
                "@type": "CollectionPage",
                "@id": "https://www.fusioncalling.com/docs#collectionpage",
                url: "https://www.fusioncalling.com/docs",
                name: "Fusion Calling Documentation",
                description: "Complete documentation for Fusion Calling AI voice automation platform",
              },
              {
                "@type": "FAQPage",
                mainEntity: docFaqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand/10 via-brand/5 to-brand-strong/10 py-16 sm:py-24 border-b border-brand/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
                  Fusion Calling
                </span>
                <br />
                Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Complete guides and API documentation for integrating and using Fusion Calling&apos;s AI voice automation platform.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((doc) => (
              <Link
                key={doc.id}
                href={doc.href}
                className="group"
              >
                <div
                  className={`bg-zinc-900 border ${colorClasses[doc.color].border} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-1 h-full ${colorClasses[doc.color].hover}`}
                >
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-strong transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{doc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {doc.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className={`text-xs px-3 py-1 rounded-full ${colorClasses[doc.color].bg} ${colorClasses[doc.color].text}`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ — answer-first; also emitted as FAQPage schema */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Documentation FAQ
            </h2>
            <div className="space-y-4">
              {docFaqs.map((f) => (
                <div
                  key={f.question}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {f.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authoritative sources — GEO citations */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
            <ul className="flex flex-wrap gap-3">
              {docSources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5 text-gray-300 hover:text-brand-strong hover:border-brand/40 transition-all text-sm font-medium"
                  >
                    {s.label}
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Getting Started CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help Getting Started?
              </h2>
              <p className="text-gray-400 mb-8">
                Our team can help you integrate Fusion Calling into your workflow and optimize your AI voice automation strategy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://cal.com/mralamin/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand hover:bg-brand-strong text-white font-medium rounded-lg transition-all hover:scale-105"
                >
                  Schedule a Call
                </a>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-brand/50 text-white font-medium rounded-lg hover:bg-brand/10 transition-all"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
