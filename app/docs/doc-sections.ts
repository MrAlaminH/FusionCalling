import {
  Radio,
  Settings,
  Bot,
  BarChart3,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export type DocDifficulty = "beginner" | "intermediate" | "advanced";

export interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  topics: string[];
  difficulty: DocDifficulty;
  readingTime: number;
  /** Featured guides render as the large "Start here" path cards. */
  featured?: boolean;
  /** Deep links into the guide, so visitors can jump straight to answers. */
  highlights: { label: string; href: string }[];
}

export const docSections: DocSection[] = [
  {
    id: "agent-configuration",
    title: "Agent Configuration",
    description:
      "Create your first AI voice agent: prompts, voices, call flows, and behavior rules — no code required.",
    icon: Bot,
    href: "/docs/agent-configuration",
    topics: [
      "Agent Setup",
      "Prompt Engineering",
      "Voice Selection",
      "Behavior Rules",
    ],
    difficulty: "beginner",
    readingTime: 10,
    featured: true,
    highlights: [
      { label: "What is an agent?", href: "/docs/agent-configuration#what-is-agent" },
      { label: "Create your first agent", href: "/docs/agent-configuration#creating-first-agent" },
      { label: "Configuration tabs", href: "/docs/agent-configuration#configuration-tabs" },
      { label: "Best practices", href: "/docs/agent-configuration#best-practices" },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    description:
      "External Calendar + Leads APIs: auth, endpoints, webhooks, and copy-paste examples.",
    icon: Radio,
    href: "/docs/api-reference",
    topics: [
      "Calendar API",
      "Leads API",
      "Authentication",
      "Integrations",
      "Webhooks",
    ],
    difficulty: "intermediate",
    readingTime: 18,
    featured: true,
    highlights: [
      { label: "Authentication", href: "/docs/api-reference#authentication" },
      { label: "Calendar API", href: "/docs/api-reference#calendar-api" },
      { label: "Leads API", href: "/docs/api-reference#leads-api" },
      { label: "Webhooks", href: "/docs/api-reference#webhooks" },
    ],
  },
  {
    id: "lead-management",
    title: "Lead Management",
    description:
      "Capture to conversion: statuses, providers, custom fields, retries, and CRM sync.",
    icon: BarChart3,
    href: "/docs/lead-management",
    topics: [
      "Lead Capture",
      "Lead Qualification",
      "CRM Integration",
      "Analytics",
    ],
    difficulty: "beginner",
    readingTime: 14,
    highlights: [
      { label: "Getting started", href: "/docs/lead-management#getting-started" },
      { label: "Provider guides", href: "/docs/lead-management#provider-guides" },
      { label: "Retry system", href: "/docs/lead-management#retry-system" },
      { label: "Troubleshooting", href: "/docs/lead-management#troubleshooting" },
    ],
  },
  {
    id: "sms-messaging",
    title: "SMS Messaging",
    description:
      "Twilio setup, campaigns, compliance, and the Messages Inbox — end to end.",
    icon: MessageSquare,
    href: "/docs/sms-messaging",
    topics: [
      "Getting Started",
      "SMS Campaigns",
      "Inbound Setup",
      "Compliance",
      "Messages Inbox",
    ],
    difficulty: "beginner",
    readingTime: 11,
    highlights: [
      { label: "Connect Twilio", href: "/docs/sms-messaging#connect-twilio" },
      { label: "SMS campaigns", href: "/docs/sms-messaging#sms-campaigns" },
      { label: "Messages inbox", href: "/docs/sms-messaging#using-messages-inbox" },
      { label: "Important rules", href: "/docs/sms-messaging#important-rules" },
    ],
  },
  {
    id: "admin-section",
    title: "Admin Section Guide",
    description:
      "Manage clients, users, AI credentials, branding, credits, and subscriptions.",
    icon: Settings,
    href: "/docs/admin-section",
    topics: [
      "Dashboard Overview",
      "User Management",
      "System Settings",
      "Analytics",
    ],
    difficulty: "beginner",
    readingTime: 12,
    highlights: [
      { label: "Client management", href: "/docs/admin-section#client-management" },
      { label: "AI credentials", href: "/docs/admin-section#ai-provider" },
      { label: "Branding", href: "/docs/admin-section#branding" },
      { label: "Credits & subscriptions", href: "/docs/admin-section#credits" },
    ],
  },
];
