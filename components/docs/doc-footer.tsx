import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocFooterProps {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}

export default function DocFooter({ prev, next }: DocFooterProps) {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col rounded-xl border border-white/10 bg-zinc-900/50 p-4 hover:border-brand/40 hover:bg-zinc-900 transition-colors"
          >
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </span>
            <span className="mt-1 text-sm font-medium text-gray-200 group-hover:text-brand-light transition-colors">
              {prev.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            className="group flex flex-col text-right rounded-xl border border-white/10 bg-zinc-900/50 p-4 hover:border-brand/40 hover:bg-zinc-900 transition-colors sm:col-start-2"
          >
            <span className="flex items-center justify-end gap-1 text-xs text-gray-500">
              Next <ChevronRight className="h-3.5 w-3.5" />
            </span>
            <span className="mt-1 text-sm font-medium text-gray-200 group-hover:text-brand-light transition-colors">
              {next.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
      <p className="mt-6 text-xs text-gray-600">
        Found an issue or have a suggestion?{" "}
        <a
          href="mailto:hello@fusioncalling.com?subject=API%20Reference%20Feedback"
          className="text-brand-light hover:text-brand"
        >
          Send feedback
        </a>
      </p>
    </footer>
  );
}
