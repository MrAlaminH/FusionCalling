"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useDocSearchQuery } from "./doc-search-store";
import { docSections, type DocSection } from "./doc-sections";

const difficultyLabel: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export default function DocsGrid() {
  const searchQuery = useDocSearchQuery();
  const q = searchQuery.trim().toLowerCase();

  const filteredDocs = docSections.filter(
    (doc) =>
      q === "" ||
      doc.title.toLowerCase().includes(q) ||
      doc.description.toLowerCase().includes(q) ||
      doc.topics.some((t) => t.toLowerCase().includes(q)),
  );

  if (filteredDocs.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-white/10 py-16 text-center text-gray-400">
        No documentation matches &ldquo;{searchQuery}&rdquo;. Try
        &ldquo;API&rdquo;, &ldquo;agent&rdquo;, or &ldquo;SMS&rdquo;.
      </p>
    );
  }

  // Searching: one flat, ranked-feeling list of matches.
  if (q !== "") {
    return (
      <div>
        <p className="mb-4 text-sm text-gray-400" aria-live="polite">
          {filteredDocs.length} result{filteredDocs.length === 1 ? "" : "s"} for
          &ldquo;{searchQuery}&rdquo;
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredDocs.map((doc) => (
            <DocCard key={doc.id} doc={doc} />
          ))}
        </div>
      </div>
    );
  }

  // Browsing: two featured paths first, then every guide with deep links.
  const paths = docSections.filter((d) => d.featured);
  const guides = docSections.filter((d) => !d.featured);

  return (
    <div className="space-y-14">
      <section aria-label="Start here">
        <SectionHeading
          title="Start here"
          hint="Two paths — pick the one that matches your goal"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {paths.map((doc) => (
            <DocCard key={doc.id} doc={doc} featured />
          ))}
        </div>
      </section>

      <section aria-label="All guides">
        <SectionHeading title="Platform guides" hint="Everything else, A to Z" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((doc) => (
            <DocCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        {title}
      </h2>
      <span className="hidden font-mono text-xs text-gray-600 sm:inline">
        {hint}
      </span>
    </div>
  );
}

function DocCard({ doc, featured = false }: { doc: DocSection; featured?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col rounded-xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/20 ${
        featured ? "sm:p-1" : ""
      }`}
    >
      {/* Main link: icon, meta, title, description */}
      <Link
        href={doc.href}
        aria-label={`${doc.title} — ${doc.description}`}
        className={`group block flex-1 rounded-[0.6875rem] p-6 ${
          featured ? "pb-4" : "pb-4"
        }`}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 transition-colors group-hover:bg-brand/20">
            <doc.icon className="text-brand" width={24} height={24} />
          </div>
          <ArrowUpRight className="h-4 w-4 text-gray-600 transition group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>
        <h3
          className={`mb-2 font-bold text-white transition-colors group-hover:text-brand-strong ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {doc.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-gray-400">
          {doc.description}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
          {doc.readingTime} min · {difficultyLabel[doc.difficulty]}
        </p>
      </Link>

      {/* Deep links: jump straight to the section that answers the question */}
      <nav
        aria-label={`${doc.title} sections`}
        className="mt-auto border-t border-white/10 px-3 py-2"
      >
        <ul className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
          {doc.highlights.map((h) => (
            <li key={h.href}>
              <Link
                href={h.href}
                className="group/link flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-gray-400 transition-colors hover:bg-white/5 hover:text-brand-light"
              >
                {h.label}
                <ArrowRight className="h-3 w-3 flex-shrink-0 text-gray-600 transition group-hover/link:translate-x-0.5 group-hover/link:text-brand" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
