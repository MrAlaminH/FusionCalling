import Footer from "@/components/Footer";

/**
 * Whitelabel family chrome, rendered once for every /whitelabel route.
 * Pages keep their own navbar — provider pages pass in-page anchor links.
 * No sticky mobile CTA bar: it overlapped content and CTAs on small screens.
 */
export default function WhiteLabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
