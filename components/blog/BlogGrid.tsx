"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-posts";

/**
 * Category filter pills + uniform post grid. The featured post renders above
 * this component on the server; the grid itself is a client component for
 * filtering, but its full initial markup is server-rendered, so crawlers see
 * every post link without executing JS.
 */
export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category filter pills */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="group"
        aria-label="Filter posts by category"
      >
        {categories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium border transition-premium-fast",
                selected
                  ? "bg-brand text-brand-foreground border-brand font-semibold"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-brand/40 hover:text-white"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group glass-light flex flex-col rounded-2xl border border-brand/20 hover:border-brand/40 hover:shadow-premium transition-premium overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-brand-light">
                  {post.category}
                </span>
                <span className="text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="font-display text-lg font-bold leading-snug text-white group-hover:text-brand-light transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                {post.description}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-400">
                <span>{formatDate(post.date, "short")}</span>
                <span className="flex items-center gap-1 text-brand-light">
                  Read
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
