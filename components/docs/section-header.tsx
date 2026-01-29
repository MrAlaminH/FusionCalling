"use client";

import { ReactNode } from "react";
import ReadingTime from "./reading-time";

interface SectionHeaderProps {
  title: string;
  description?: string;
  readingTime?: number;
  difficulty?: "beginner" | "intermediate" | "advanced";
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  readingTime,
  difficulty,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        {title}
      </h1>

      {(readingTime || difficulty) && (
        <div className="mb-4">
          <ReadingTime difficulty={difficulty} />
        </div>
      )}

      {description && (
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}

      {/* Visual divider */}
      <div className="mt-8 h-px bg-gradient-to-r from-orange-500/50 via-gray-800 to-transparent" />
    </div>
  );
}
