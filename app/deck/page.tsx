import type { Metadata } from "next";
import SalesDeck from "./SalesDeck";

// Internal sales presentation — kept out of search and the sitemap
// (app/sitemap.ts uses an explicit allowlist, so /deck is never listed).
export const metadata: Metadata = {
  title: "Sales Deck",
  description: "Fusion Calling — sales presentation",
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return <SalesDeck />;
}
