import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  /** Substring of `title` to render with the brand gradient. Omit for none. */
  highlight?: string;
  subtitle?: ReactNode;
  className?: string;
};

function renderTitle(title: string, highlight: string | undefined) {
  if (!highlight) return title;
  const index = title.indexOf(highlight);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong text-transparent bg-clip-text">
        {highlight}
      </span>
      {title.slice(index + highlight.length)}
    </>
  );
}

export function SectionHeader({
  title,
  highlight,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      animation="animate-fade-in-up"
      className={cn("text-center mb-10 md:mb-12 lg:mb-14", className)}
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {renderTitle(title, highlight)}
      </h2>
      {subtitle ? (
        <p className="font-body text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
