import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/sticky-mobile-cta";

export const metadata: Metadata = {
  title: "Voice AI Platform Comparisons",
  description:
    "Honest, side-by-side comparisons of leading white-label voice AI platforms for agencies — ChatDash, Vapify, Voicerr, Synthflow, Bland AI, and more.",
  alternates: {
    canonical: "/alternative",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 lg:pt-28">{children}</main>
      <Footer />
      {/* Comparison readers are deep-funnel; keep the platform CTA reachable. */}
      <StickyMobileCta href="/whitelabel" label="Explore the Platform" />
    </div>
  );
}
