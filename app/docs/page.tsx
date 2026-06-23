import { Metadata } from "next";
import DocsHub from "./DocsHub";

export const metadata: Metadata = {
  title: "Fusion Calling Documentation | API & Setup Guides",
  description: "Complete documentation for Fusion Calling AI voice automation. Learn API integration, agent configuration, lead management, SMS messaging, and admin setup.",
  keywords: [
    "Fusion Calling documentation",
    "AI voice API docs",
    "agent configuration guide",
    "lead management API",
    "SMS integration docs",
    "voice automation setup"
  ],
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "Fusion Calling Documentation | API & Setup Guides",
    description: "Complete documentation for Fusion Calling AI voice automation platform",
    url: "https://www.fusioncalling.com/docs",
    siteName: "Fusion Calling",
    type: "website",
  },
};

export default function DocsPage() {
  return <DocsHub />;
}
