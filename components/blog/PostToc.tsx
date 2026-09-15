"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; title: string };

/**
 * Sticky table of contents with scroll-spy for blog posts. Rendered inside
 * PostLayout's xl left gutter; hidden below xl. Pure presentation — headings
 * stay server-rendered.
 */
export default function PostToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // A narrow band near the top of the viewport decides the active heading.
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="sticky top-28 hidden xl:block">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        <ListTree className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
        On this page
      </p>
      <ul className="space-y-1 border-l border-white/10">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
              className={cn(
                "block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors -ml-px",
                activeId === item.id
                  ? "border-brand text-brand-light font-medium"
                  : "border-transparent text-gray-400 hover:text-gray-200"
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
