/**
 * Ambient page background — shared by the dark guide pages.
 * Layered over the warm near-black base set on <main>: a brand-orange
 * sunset spotlight behind the hero, soft side glows at mid-page, a masked
 * hairline grid, and a film-grain overlay so large dark fills never
 * read flat. Purely decorative: aria-hidden, no pointer events.
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Hero spotlight — wide warm wash + hotter amber core */}
      <div className="absolute inset-x-0 top-0 h-[950px] bg-[radial-gradient(85%_60%_at_50%_0%,rgba(249,115,22,0.14),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(45%_38%_at_50%_0%,rgba(251,146,60,0.13),transparent_72%)]" />

      {/* Mid-page side glows */}
      <div className="absolute -left-48 top-[1100px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.11),transparent_70%)] blur-[90px]" />
      <div className="absolute -right-48 top-[2200px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.09),transparent_70%)] blur-[90px]" />

      {/* Bottom glow */}
      <div className="absolute inset-x-0 bottom-0 h-[850px] bg-[radial-gradient(60%_50%_at_50%_100%,rgba(234,88,12,0.10),transparent_70%)]" />

      {/* Masked hairline grid — visible near the hero, fades down the page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(75%_55%_at_50%_0%,black_20%,transparent_100%)]" />

      {/* Film grain */}
      <div className="bg-noise absolute inset-0 opacity-[0.05]" />
    </div>
  );
}
