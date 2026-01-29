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
      className="flex items-center gap-2 text-sm text-gray-400 mb-6"
    >
      <Link
        href="/docs"
        className="flex items-center gap-1 hover:text-orange-400 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Documentation Hub</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-600" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-orange-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-300 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
