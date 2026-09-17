import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/sticky-mobile-cta";

/**
 * Whitelabel family chrome, rendered once for every /whitelabel route.
 * Pages keep their own navbar — provider pages pass in-page anchor links —
 * but footer + sticky CTA are the family's, so a page can't forget them.
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
      <StickyMobileCta href="#cta" label="Book a Free Call" />
    </>
  );
}
