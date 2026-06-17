"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { CodeLang, LANGUAGES } from "@/app/docs/api-reference/lib/codegen";

interface LanguageCtx {
  language: CodeLang;
  setLanguage: (lang: CodeLang) => void;
}

const LanguageContext = createContext<LanguageCtx>({
  language: "bash",
  setLanguage: () => {},
});

const STORAGE_KEY = "fc-api-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<CodeLang>("bash");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as CodeLang | null;
      if (saved && LANGUAGES.some((l) => l.id === saved)) {
        setLanguageState(saved);
      }
    } catch {
      // ignore (private mode, etc.)
    }
  }, []);

  const setLanguage = (lang: CodeLang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
