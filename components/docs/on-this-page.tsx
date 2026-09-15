"use client";

import { useState, useEffect } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface OnThisPageProps {
  headings?: Heading[];
}

export default function OnThisPage({
  headings: propHeadings,
}: OnThisPageProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // If headings are provided via props, use them
    if (propHeadings && propHeadings.length > 0) {
      setHeadings(propHeadings);
      return;
    }

    // Otherwise, extract headings from the page
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll(
        "main h2[id], main h3[id]",
      );
      const extractedHeadings: Heading[] = [];

      headingElements.forEach((heading) => {
        const id = heading.getAttribute("id") || "";
        const text = heading.textContent || "";
        const level = heading.tagName === "H2" ? 2 : 3;

        if (id && text) {
          extractedHeadings.push({ id, text, level });
        }
      });

      setHeadings(extractedHeadings);
    };

    // Extract on mount and when content changes
    extractHeadings();

    // Re-extract when hash changes (page navigation)
    const handleHashChange = () => {
      setTimeout(extractHeadings, 100);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [propHeadings]);

  // Track active heading on scroll
  useEffect(() => {
    // rAF-throttled: the DOM reads below are cheap per frame, but unthrottled
    // they run on every scroll event.
    let raf = 0;
    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const headingElements = document.querySelectorAll(
          "main h2[id], main h3[id]",
        );

        let currentActiveId = "";

        headingElements.forEach((heading) => {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActiveId = heading.getAttribute("id") || "";
          }
        });

        if (currentActiveId && currentActiveId !== activeId) {
          setActiveId(currentActiveId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [activeId]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          On this page
        </h3>
        <nav aria-label="Page sections">
          <ul className="space-y-1 border-l border-white/10">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "ml-4" : ""}
              >
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left pl-4 pr-2 py-1.5 text-sm transition-colors border-l-2 ${
                    activeId === heading.id
                      ? "border-brand text-brand-light font-medium"
                      : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600"
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
