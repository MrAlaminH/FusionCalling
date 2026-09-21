import Link from "next/link";
import type { ReactNode } from "react";

export type BlogFaq = { question: string; answer: string };

/**
 * Render plain-text FAQ answers with internal paths as real links, so copy
 * like "Compare setups on /whitelabel/compare" never ships a raw path as
 * visible text. Unknown paths fall back to plain text.
 */
const INTERNAL_LINK_LABELS: Record<string, string> = {
  "/whitelabel/compare": "white-label comparison page",
  "/whitelabel/vapi": "Vapi white-label page",
  "/whitelabel/retell": "Retell white-label page",
  "/whitelabel/elevenlabs": "ElevenLabs white-label page",
  "/whitelabel/gohighlevel": "GoHighLevel white-label page",
  "/whitelabel": "white-label program",
};

export function renderFaqAnswer(answer: string): ReactNode {
  const parts = answer.split(/(\/whitelabel(?:\/[a-z-]+)?)/g);
  if (parts.length === 1) return answer;
  return parts.map((part, i) => {
    const label = INTERNAL_LINK_LABELS[part];
    if (!label) return <span key={i}>{part}</span>;
    return (
      <Link
        key={i}
        href={part}
        className="text-brand-light hover:text-brand underline underline-offset-2 transition-colors"
      >
        {label}
      </Link>
    );
  });
}

/**
 * Visible FAQ section for blog posts. Native <details> (not Radix Accordion)
 * so answers stay in the server HTML even when collapsed — the FAQPage schema
 * on these pages references exactly this content.
 */
export default function PostFaq({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
}: {
  faqs: BlogFaq[];
  title?: string;
  subtitle?: string;
}) {
  if (faqs.length === 0) return null;
  // Passing `title=""` renders the list only — for pages that supply their
  // own section heading (e.g. ProviderPageTemplate).
  return (
    <section className={title ? "mt-16" : undefined}>
      {title ? (
        <>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-gray-400 mb-8">{subtitle}</p>
          ) : (
            <div className="mb-8" />
          )}
        </>
      ) : null}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={faq.question}
            className="group glass-light rounded-xl border border-brand/20 hover:border-brand/40 transition-premium"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-base md:text-lg font-semibold text-white group-hover:text-brand-light transition-colors">
                {faq.question}
              </h3>
              <span
                aria-hidden="true"
                className="font-mono text-xl text-brand-light transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-6 pb-6 text-gray-300 leading-relaxed">
              {renderFaqAnswer(faq.answer)}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
