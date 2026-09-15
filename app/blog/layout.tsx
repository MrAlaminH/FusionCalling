import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/sticky-mobile-cta";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 lg:pt-28">{children}</main>
      <Footer />
      {/* Every blog post funnels to the white-label platform, same as the
          in-post conclusion CTAs. */}
      <StickyMobileCta href="/whitelabel" label="Explore the Platform" />
    </div>
  );
}