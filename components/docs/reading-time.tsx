"use client";

import { Clock, BookOpen } from "lucide-react";

interface ReadingTimeProps {
  content?: string;
  wordsPerMinute?: number;
  difficulty?: "beginner" | "intermediate" | "advanced";
  className?: string;
}

const difficultyConfig = {
  beginner: {
    label: "Beginner",
    color: "text-green-400 bg-green-500/10",
    icon: "🟢",
  },
  intermediate: {
    label: "Intermediate",
    color: "text-yellow-400 bg-yellow-500/10",
    icon: "🟡",
  },
  advanced: {
    label: "Advanced",
    color: "text-red-400 bg-red-500/10",
    icon: "🔴",
  },
};

export function calculateReadingTime(
  content: string,
  wordsPerMinute: number = 200,
): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default function ReadingTime({
  content,
  wordsPerMinute = 200,
  difficulty,
  className = "",
}: ReadingTimeProps) {
  // If content is provided, calculate reading time
  const readingTime = content
    ? calculateReadingTime(content, wordsPerMinute)
    : null;

  return (
    <div className={`flex items-center gap-4 text-sm ${className}`}>
      {readingTime !== null && (
        <div className="flex items-center gap-1.5 text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{readingTime} min read</span>
        </div>
      )}

      {difficulty && (
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${difficultyConfig[difficulty].color}`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="font-medium">
            {difficultyConfig[difficulty].label}
          </span>
        </div>
      )}
    </div>
  );
}

// Hook to calculate reading time from DOM content
export function useReadingTimeFromDOM(
  containerSelector: string = "main",
  wordsPerMinute: number = 200,
): number {
  if (typeof window === "undefined") return 0;

  const container = document.querySelector(containerSelector);
  if (!container) return 0;

  const text = container.textContent || "";
  return calculateReadingTime(text, wordsPerMinute);
}
