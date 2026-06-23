import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Voice by Industry | Fusion Calling",
  description:
    "Explore how white-label AI voice agents serve every industry, from real estate and dental to insurance, home services, legal, and financial services.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesLayout({
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
