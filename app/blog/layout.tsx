import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Fusion Calling",
  description:
    "Expert insights on white-label AI voice platforms, agency growth strategies, and voice automation trends. Learn how to build profitable AI voice businesses.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}