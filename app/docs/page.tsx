"use client";

import Link from "next/link";
import { useState } from "react";

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
      "Complete documentation for the External Calendar API, including endpoints, authentication, error handling, and code examples.",
    icon: "📡",
    href: "/docs/api-reference",
    color: "orange",
    topics: [
      "Authentication",
      "Endpoints",
      "Data Models",
      "Rate Limiting",
      "Error Handling",
    ],
  },
  {
    id: "lead-management",
    title: "Lead Management",
    description:
      "Comprehensive guide for managing leads, understanding statuses, custom fields, retry systems, and best practices.",
    icon: "📊",
    href: "/docs/lead-management",
    color: "blue",
    topics: [
      "Getting Started",
      "Lead Statuses",
      "Custom Fields",
      "Retry System",
      "Troubleshooting",
    ],
  },
  {
    id: "agent-configuration",
    title: "Agent Configuration",
    description:
      "Complete guide for creating and configuring AI phone agents with advanced settings, best practices, and troubleshooting tips.",
    icon: "🤖",
    href: "/docs/agent-configuration",
    color: "purple",
    topics: [
      "Getting Started",
      "Configuration Tabs",
      "Best Practices",
      "Common Use Cases",
      "Troubleshooting",
    ],
  },
  {
    id: "admin-section",
    title: "Admin Section Guide",
    description:
      "Comprehensive resource for agency owners to manage clients, users, AI credentials, branding, credits, and subscriptions.",
    icon: "⚙️",
    href: "/docs/admin-section",
    color: "green",
    topics: [
      "Client Management",
      "User Management",
      "AI Credentials",
      "Branding",
      "Credits & Subscriptions",
      "Best Practices",
    ],
  },
  // Future sections template:
  // {
  //   id: "integrations",
  //   title: "Integrations",
  //   description:
  //     "Learn how to integrate Fusion Calling with third-party tools and platforms.",
  //   icon: "🔗",
  //   href: "/docs/integrations",
  //   color: "green",
  //   topics: [
  //     "Zapier",
  //     "Make",
  //     "Webhooks",
  //     "Custom Integrations",
  //   ],
  // },
];

const colorStyles = {
  orange: {
    border: "border-orange-500/30 hover:border-orange-400",
    bg: "hover:bg-orange-500/5",
    badge: "bg-orange-500/10 text-orange-300",
    icon: "text-orange-400",
    accent: "from-orange-500/20",
  },
  blue: {
    border: "border-blue-500/30 hover:border-blue-400",
    bg: "hover:bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-300",
    icon: "text-blue-400",
    accent: "from-blue-500/20",
  },
  green: {
    border: "border-green-500/30 hover:border-green-400",
    bg: "hover:bg-green-500/5",
    badge: "bg-green-500/10 text-green-300",
    icon: "text-green-400",
    accent: "from-green-500/20",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400",
    bg: "hover:bg-purple-500/5",
    badge: "bg-purple-500/10 text-purple-300",
    icon: "text-purple-400",
    accent: "from-purple-500/20",
  },
};

export default function DocsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 text-white pt-32 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Documentation Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to integrate, manage, and optimize your Fusion
            Calling experience. Choose a section below to get started.
          </p>
        </div>
      </div>

      {/* Documentation Sections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {docSections.map((section) => {
            const styles = colorStyles[section.color];
            const isHovered = hoveredId === section.id;

            return (
              <Link key={section.id} href={section.href}>
                <div
                  onMouseEnter={() => setHoveredId(section.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative h-full p-8 rounded-2xl border border-gray-800 transition-all duration-300 cursor-pointer group ${styles.border} ${styles.bg}`}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${styles.accent} to-transparent`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-4xl ${styles.icon}`}>
                        {section.icon}
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${styles.badge}`}
                      >
                        {section.topics.length} topics
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors">
                      {section.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      {section.description}
                    </p>

                    {/* Topics */}
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                        Topics Covered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {section.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-block px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-800">
                      <span className="text-orange-400 font-semibold text-sm">
                        Explore Documentation
                      </span>
                      <span
                        className={`transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Future Sections Teaser */}
        {docSections.length < 4 && (
          <div className="mt-16 p-8 rounded-2xl border border-gray-700/50 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
            <div className="flex items-center gap-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h3 className="text-lg font-semibold mb-1">More Coming Soon</h3>
                <p className="text-gray-400 text-sm">
                  Additional documentation sections like Integrations, Webhooks,
                  and more are in the works. Check back soon for expanded guides
                  and resources.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span>❓</span> Getting Help
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="mailto:hello@fusioncalling.com"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              Contact Support →
            </a>
          </div>

          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span>💬</span> Community
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Join our community for discussions and updates.
            </p>
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              Coming Soon →
            </a>
          </div>

          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <span>📋</span> Status Page
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Check system status and incident history.
            </p>
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              View Status →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
