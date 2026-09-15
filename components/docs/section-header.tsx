import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  readingTime?: number;
  difficulty?: "beginner" | "intermediate" | "advanced";
  steps?: number;
  children?: ReactNode;
  className?: string;
}

const difficultyStyles: Record<string, string> = {
  beginner:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  intermediate: "border-brand/30 bg-brand/10 text-brand-light",
  advanced: "border-purple-500/30 bg-purple-500/10 text-purple-300",
};

export default function SectionHeader({
  title,
  description,
  readingTime,
  difficulty,
  steps,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      {(readingTime || difficulty || steps) && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {difficulty && (
            <span
              className={`rounded-full border px-2.5 py-1 text-[11px] font-medium capitalize ${difficultyStyles[difficulty]}`}
            >
              {difficulty}
            </span>
          )}
          {readingTime && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-400">
              {readingTime} min read
            </span>
          )}
          {steps && (
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-400">
              {steps} sections
            </span>
          )}
        </div>
      )}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight text-balance">
        {title}
      </h1>

      {description && (
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}

      {/* Visual divider */}
      <div className="mt-8 h-px bg-white/10" />
    </div>
  );
}
