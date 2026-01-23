"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DocSection {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
}

const docSections: DocSection[] = [
  {
    id: "api-reference",
    label: "API Reference",
    description: "External Calendar API documentation",
    href: "/docs",
    icon: "📡",
  },
  {
    id: "lead-management",
    label: "Lead Management",
    description: "Complete guide to managing leads",
    href: "/docs/lead-management",
    icon: "📊",
  },
  // Add more sections here in the future
  // {
  //   id: "integrations",
  //   label: "Integrations",
  //   description: "Connect with your favorite tools",
  //   href: "/docs/integrations",
  //   icon: "🔗",
  // },
];

export default function DocssectionsNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/docs") {
      return pathname === "/docs";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Documentation</h2>
        <p className="text-sm text-gray-400 mb-6">
          Choose a section to explore our documentation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {docSections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className={`group relative overflow-hidden rounded-lg border transition-all duration-300 ${
              isActive(section.href)
                ? "border-orange-500 bg-orange-600/10"
                : "border-gray-800 bg-gray-900/50 hover:border-orange-500/50 hover:bg-gray-900"
            }`}
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/0 to-orange-600/0 group-hover:from-orange-600/5 group-hover:via-orange-600/10 group-hover:to-orange-600/5 transition-all duration-300" />

            <div className="relative p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{section.icon}</span>
                {isActive(section.href) && (
                  <div className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                    <span className="ml-2 text-xs font-semibold text-orange-400">
                      Current
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                {section.label}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {section.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">View</span>
                <svg
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Future sections notice */}
      <div className="mt-8 p-4 rounded-lg border border-blue-900/30 bg-blue-900/10">
        <p className="text-sm text-blue-300">
          ✨ More documentation sections coming soon! We&apos;re constantly
          expanding our guides to help you get the most out of Fusion Calling.
        </p>
      </div>
    </div>
  );
}
