import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Voice AI Glossary | Fusion Calling",
  description:
    "A complete glossary of voice AI terms for agencies, with plain-English definitions across speech technology, telephony, compliance, and more.",
  alternates: {
    canonical: "/glossary",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 lg:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
