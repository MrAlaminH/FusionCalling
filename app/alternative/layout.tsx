import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Voice AI Platform Comparisons | Fusion Calling",
  description:
    "Honest, side-by-side comparisons of the leading white-label voice AI platforms for agencies. Compare Fusion Calling against ChatDash, Vapify, Voicerr, VoiceAIWrapper, and more.",
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
    </div>
  );
}
