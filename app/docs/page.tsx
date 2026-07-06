import { Metadata } from "next";
import DocsHub from "./DocsHub";
import { buildOpenGraph } from "@/lib/seo";

const title = "Fusion Calling Documentation | API & Setup Guides";
const description =
  "Complete documentation for Fusion Calling AI voice automation. Learn API integration, agent configuration, lead management, SMS messaging, and admin setup.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Fusion Calling documentation",
    "AI voice API docs",
    "agent configuration guide",
    "lead management API",
    "SMS integration docs",
    "voice automation setup"
  ],
  ...buildOpenGraph({ title, description, path: "/docs" }),
};

export default function DocsPage() {
  return <DocsHub />;
}
