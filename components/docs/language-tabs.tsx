"use client";

import { LANGUAGES, CodeLang } from "@/app/docs/api-reference/lib/codegen";
import { useLanguage } from "./language-context";

interface LanguageTabsProps {
  className?: string;
}

export default function LanguageTabs({ className = "" }: LanguageTabsProps) {
  const { language, setLanguage } = useLanguage();
  return (
    <div
      role="tablist"
      aria-label="Request language"
      className={`inline-flex items-center gap-1 rounded-lg bg-white/5 p-1 ring-1 ring-white/10 ${className}`}
    >
      {LANGUAGES.map((lang) => {
        const active = language === lang.id;
        return (
          <button
            key={lang.id}
            role="tab"
            aria-selected={active}
            onClick={() => setLanguage(lang.id as CodeLang)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              active
                ? "bg-orange-500 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
