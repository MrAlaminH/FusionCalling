import { comparisons } from "@/lib/comparisons";
import { FEATURE_UPDATES, LAUNCH, SATISFACTION, UPTIME_SLA } from "@/lib/product-facts";
import { CONTENT_LAST_UPDATED_LABEL } from "@/lib/site-url";

/**
 * Performance benchmarks — shown ONLY for competitors with directly
 * comparable internal data, and ONLY for metrics where Fusion Calling leads.
 * No "industry average" fallbacks, no derived claim columns: every cell is a
 * plain number/time so the table can be quoted by readers and answer engines
 * without overstatement.
 *
 * Fusion-column facts come from lib/product-facts; the feature-update
 * competitor stat is parsed from the same comparison entry that renders above
 * the table ("8+/month vs 3/month"), so the two can never disagree.
 */
type BenchmarkRow = { metric: string; competitor: string; fusion: string };

const FUSION = {
  setup: `${LAUNCH.guided} (guided)`,
  satisfaction: SATISFACTION,
  featureUpdates: FEATURE_UPDATES,
  uptime: UPTIME_SLA,
};

const FEATURE_UPDATES_METRIC = "Feature Updates/Month";

function competitorFeatureUpdates(competitorName: string): string | undefined {
  const entry = comparisons.find((c) => c.competitorName === competitorName);
  return entry?.keyStatistics.featureUpdates.split(" vs ")[1]?.trim();
}

const BENCHMARKS: Record<string, BenchmarkRow[]> = {
  VoiceAIWrapper: [
    { metric: "Client Satisfaction", competitor: "4.5/5", fusion: FUSION.satisfaction },
    { metric: FEATURE_UPDATES_METRIC, competitor: "4/month", fusion: FUSION.featureUpdates },
  ],
  Synthflow: [
    { metric: "Average Setup Time", competitor: "4–6 weeks (sales-led)", fusion: FUSION.setup },
    { metric: "Client Satisfaction", competitor: "4.3/5", fusion: FUSION.satisfaction },
    { metric: FEATURE_UPDATES_METRIC, competitor: "3/month", fusion: FUSION.featureUpdates },
  ],
  Thinkrr: [
    { metric: "Average Setup Time", competitor: "14 days (self-serve)", fusion: FUSION.setup },
    { metric: "Client Satisfaction", competitor: "4.4/5", fusion: FUSION.satisfaction },
    { metric: FEATURE_UPDATES_METRIC, competitor: "2/month", fusion: FUSION.featureUpdates },
    { metric: "Uptime", competitor: "99.5%", fusion: FUSION.uptime },
  ],
  ChatDash: [
    { metric: "Client Satisfaction", competitor: "4.3/5", fusion: FUSION.satisfaction },
    { metric: FEATURE_UPDATES_METRIC, competitor: "4/month", fusion: FUSION.featureUpdates },
    { metric: "Uptime", competitor: "99.5%", fusion: FUSION.uptime },
  ],
  Vapify: [
    { metric: "Client Satisfaction", competitor: "4.2/5", fusion: FUSION.satisfaction },
    { metric: FEATURE_UPDATES_METRIC, competitor: "2/month", fusion: FUSION.featureUpdates },
    { metric: "Uptime", competitor: "99.0%", fusion: FUSION.uptime },
  ],
  Voicerr: [
    { metric: "Average Setup Time", competitor: "14 days (self-serve)", fusion: FUSION.setup },
    { metric: "Client Satisfaction", competitor: "4.4/5", fusion: FUSION.satisfaction },
    { metric: FEATURE_UPDATES_METRIC, competitor: "2/month", fusion: FUSION.featureUpdates },
    { metric: "Uptime", competitor: "99.0%", fusion: FUSION.uptime },
  ],
};

export function hasBenchmarks(competitorName: string): boolean {
  return Boolean(BENCHMARKS[competitorName]);
}

export function BenchmarkTable({ competitorName }: { competitorName: string }) {
  const rows = (BENCHMARKS[competitorName] ?? []).map((row) =>
    row.metric === FEATURE_UPDATES_METRIC
      ? {
          ...row,
          competitor:
            competitorFeatureUpdates(competitorName) ?? row.competitor,
        }
      : row
  );
  if (rows.length === 0) return null;

  return (
    <section className="glass-light rounded-2xl p-6 md:p-8 border border-brand/20">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
        Performance benchmarks: {competitorName} vs Fusion Calling
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Based on Fusion Calling&apos;s work with 500+ agency partners
        (2024–2026). We only list metrics with directly comparable data.
      </p>

      <div className="overflow-x-auto rounded-xl border border-brand/30">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr>
              <th className="py-3.5 px-5 text-sm font-semibold text-white bg-gradient-to-r from-brand/10 to-brand-strong/5">
                Metric
              </th>
              <th className="py-3.5 px-5 text-center text-sm font-semibold text-gray-300 bg-gradient-to-r from-brand/10 to-brand-strong/5">
                {competitorName}
              </th>
              <th className="py-3.5 px-5 text-center text-sm font-semibold text-brand-light bg-brand/10">
                Fusion Calling
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.metric}
                className="border-t border-white/10 hover:bg-brand/5 transition-colors"
              >
                <td className="py-3.5 px-5 text-sm font-medium text-white">
                  {row.metric}
                </td>
                <td className="py-3.5 px-5 text-center text-sm text-gray-400">
                  {row.competitor}
                </td>
                <td className="py-3.5 px-5 text-center text-sm font-semibold text-brand-light bg-brand/10">
                  {row.fusion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        Source: Fusion Calling partner-benchmark data, {CONTENT_LAST_UPDATED_LABEL}.
      </p>
    </section>
  );
}
