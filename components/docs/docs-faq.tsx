"use client";

import { useRef } from "react";

export interface DocsFaq {
  question: string;
  answer: string;
}

export default function DocsFaqAccordion({ faqs }: { faqs: DocsFaq[] }) {
  const ref = useRef<HTMLUListElement>(null);

  function onToggle(e: React.SyntheticEvent<HTMLDetailsElement>) {
    const opened = e.currentTarget;
    if (!opened.open || !ref.current) return;
    ref.current.querySelectorAll("details[open]").forEach((d) => {
      if (d !== opened) d.removeAttribute("open");
    });
  }

  return (
    <ul ref={ref} className="border-t border-white/10">
      {faqs.map((f) => (
        <li key={f.question} className="border-b border-white/10">
          <details className="group" onToggle={onToggle}>
            <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-5 transition-colors hover:text-brand-light focus-visible:outline-none focus-visible:text-brand-light">
              <span className="text-base sm:text-lg font-semibold text-white">
                {f.question}
              </span>
              <span
                aria-hidden
                className="font-mono text-base text-gray-500 transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[70ch] pb-6 pr-8 text-sm leading-relaxed text-gray-400">
              {f.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}
