import Link from "next/link";
import { whitelabelProviders } from "@/lib/whitelabel-providers";

// GoHighLevel has its own standalone integration page (not in the providers
// registry), so it's appended here to complete the cross-link set.
const EXTRA_PROVIDER_LINKS = [
  { slug: "gohighlevel", name: "GoHighLevel" },
];

const PROVIDER_LINKS = [
  ...whitelabelProviders.map((p) => ({ slug: p.slug, name: p.name })),
  ...EXTRA_PROVIDER_LINKS,
];

/**
 * Cross-links every white-label provider page to its siblings so
 * comparison-intent visitors stay on-site instead of bouncing back to search.
 */
export default function ProviderCrossLinks({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = PROVIDER_LINKS.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <section className="w-full bg-black section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Comparing providers?{" "}
            <span className="bg-gradient-to-r from-brand to-brand-strong text-transparent bg-clip-text">
              Explore every option
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Fusion Calling is provider-agnostic — import agents from any of
            these platforms and resell them under your own brand.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/whitelabel/${p.slug}`}
              className="glass-light rounded-xl p-5 border border-brand/20 hover:border-brand/40 transition-premium group"
            >
              <h3 className="text-base font-bold text-brand-light mb-1 group-hover:text-brand transition-colors">
                {p.slug === "gohighlevel"
                  ? "GoHighLevel Voice AI Integration"
                  : `White-Label ${p.name}`}
              </h3>
              <p className="text-sm text-gray-400">
                Import {p.name} agents, set your pricing, keep 100% of revenue.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
