import { Metadata } from "next";
import DocsHub from "./DocsHub";
import { buildOpenGraph } from "@/lib/seo";

const title = "Fusion Calling Docs & API Reference";
const description =
  "Complete documentation for Fusion Calling AI voice automation. Learn API integration, agent configuration, lead management, SMS messaging, and admin setup.";

export const metadata: Metadata = {
  title,
  description,
  ...buildOpenGraph({ title, description, path: "/docs" }),
};

export default function DocsPage() {
  return <DocsHub />;
}
