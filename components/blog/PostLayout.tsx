import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { BlogPost } from "@/lib/blog-posts";
import type { Author } from "@/lib/authors";
import type { BlogFaq } from "@/components/blog/PostFaq";
import { CONTENT_LAST_UPDATED_LABEL } from "@/lib/site-url";
import { formatDate } from "@/lib/utils";
import PostFaq from "@/components/blog/PostFaq";
import PostToc from "@/components/blog/PostToc";
import ReadingProgress from "@/components/docs/reading-progress";
import { getRelatedPosts } from "@/lib/blog-posts";

export type PostTocItem = { id: string; title: string };

/**
 * Shared blog post chrome: header, byline, hero image, sticky TOC, visible
 * FAQ, related articles, and author bio. The post body (children) keeps its
 * own markup and is normalized by the `.post-body` styles in globals.css.
 */
export default function PostLayout({
  post,
  titleLead,
  titleHighlight,
  dek,
  author,
  faqs,
  toc = [],
  children,
}: {
  post: BlogPost;
  /** First line of the h1 (before the gradient break). */
  titleLead: string;
  /** Gradient-highlighted line of the h1 (after the break), if any. */
  titleHighlight?: string;
  dek: ReactNode;
  author: Author;
  faqs: BlogFaq[];
  toc?: PostTocItem[];
  children: ReactNode;
}) {
  // Topical related posts: same category first, then most recent others.
  const related = getRelatedPosts(post);

  return (
    <>
      <ReadingProgress />
      <article className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
          <div className="xl:grid xl:grid-cols-[200px_minmax(0,1fr)] xl:gap-12">
            {/* Sticky TOC gutter (xl+) */}
            <aside className="order-first">
              <PostToc items={toc} />
            </aside>

            <div className="min-w-0 max-w-3xl">
              {/* Header */}
              <header>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-brand-light hover:text-brand mb-8 transition-colors"
                >
                  ← Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  {titleLead}
                  {titleHighlight ? (
                    <>
                      <br />
                      <span className="bg-gradient-to-r from-brand-light via-brand to-brand-strong bg-clip-text text-transparent">
                        {titleHighlight}
                      </span>
                    </>
                  ) : null}
                </h1>

                <div className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 [&_a]:text-brand-light [&_a:hover]:text-brand [&_a]:underline-offset-4 [&_a:hover]:underline">
                  {dek}
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/10 pb-8 text-sm text-gray-400">
                  <span>{formatDate(post.date)}</span>
                  <span aria-hidden="true">•</span>
                  <Link
                    href={`/team/${author.slug}`}
                    className="flex items-center gap-2 hover:text-brand-light transition-colors"
                  >
                    <Image
                      src={author.avatar}
                      alt={`${author.name}, ${author.role} at Fusion Calling`}
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{author.name}</span>
                  </Link>
                  <span aria-hidden="true">•</span>
                  <span>Last updated: {CONTENT_LAST_UPDATED_LABEL}</span>
                </div>
              </header>

              {/* Hero image */}
              <div className="relative mt-10 aspect-video rounded-3xl overflow-hidden border border-brand/20 shadow-premium">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Body — normalized by .post-body in globals.css */}
              <div className="prose post-body mt-12 max-w-none">{children}</div>

              {/* Visible FAQ (also feeds FAQPage schema) */}
              <PostFaq faqs={faqs} />

              {/* Related articles */}
              <section className="mt-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
                  Related Articles
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group glass-light flex flex-col rounded-2xl border border-brand/20 hover:border-brand/40 transition-premium overflow-hidden"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 320px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-light mb-2">
                          {rel.category}
                        </span>
                        <h3 className="font-display text-base font-bold leading-snug text-white group-hover:text-brand-light transition-colors">
                          {rel.title}
                        </h3>
                        <span className="mt-auto pt-3 text-xs text-gray-400">
                          {rel.date} · {rel.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Author bio */}
              <section className="mt-14 border-t border-brand/20 pt-8">
                <div className="glass rounded-2xl p-6 md:p-8 border border-brand/20">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <Image
                      src={author.avatar}
                      alt={`${author.name}, ${author.role} at Fusion Calling`}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover border border-brand/30 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h2 className="font-display text-lg font-bold text-white mb-1">
                        About the Author
                      </h2>
                      <p className="text-sm mb-3">
                        <Link
                          href={`/team/${author.slug}`}
                          className="font-semibold text-brand-light hover:text-brand transition-colors"
                        >
                          {author.name}
                        </Link>
                        <span className="text-gray-400"> · {author.role}</span>
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {author.shortBio}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        {author.linkedin ? (
                          <a
                            href={author.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-light hover:text-brand transition-colors"
                          >
                            LinkedIn →
                          </a>
                        ) : null}
                        {author.email ? (
                          <a
                            href={`mailto:${author.email}`}
                            className="text-brand-light hover:text-brand transition-colors"
                          >
                            Email →
                          </a>
                        ) : null}
                        <Link
                          href="/whitelabel"
                          className="text-brand-light hover:text-brand transition-colors"
                        >
                          Partner Program →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
