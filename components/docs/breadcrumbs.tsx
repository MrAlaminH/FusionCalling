"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-gray-500"
    >
      <Link
        href="/docs"
        className="flex items-center gap-1 hover:text-brand-light transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Documentation Hub</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5 min-w-0">
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-700" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-brand-light transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="truncate text-gray-300 font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
