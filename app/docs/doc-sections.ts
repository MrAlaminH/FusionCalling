export interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: "orange" | "blue" | "green" | "purple";
  topics: string[];
}

export const docSections: DocSection[] = [
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

export const colorClasses = {
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
