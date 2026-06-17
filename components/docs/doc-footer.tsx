import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocFooterProps {
  prev?: { id: string; label: string };
  next?: { id: string; label: string };
}

export default function DocFooter({ prev, next }: DocFooterProps) {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev ? (
          <a
            href={`#${prev.id}`}
            className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-4 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
          >
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </span>
            <span className="mt-1 text-sm font-medium text-gray-200 group-hover:text-orange-400 transition-colors">
              {prev.label}
            </span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={`#${next.id}`}
            className="group flex flex-col text-right rounded-lg border border-white/10 bg-white/[0.02] p-4 hover:border-white/20 hover:bg-white/[0.05] transition-colors sm:col-start-2"
          >
            <span className="flex items-center justify-end gap-1 text-xs text-gray-500">
              Next <ChevronRight className="h-3.5 w-3.5" />
            </span>
            <span className="mt-1 text-sm font-medium text-gray-200 group-hover:text-orange-400 transition-colors">
              {next.label}
            </span>
          </a>
        ) : (
          <span />
        )}
      </div>
      <p className="mt-6 text-xs text-gray-600">
        Found an issue or have a suggestion?{" "}
        <a
          href="mailto:hello@fusioncalling.com?subject=API%20Reference%20Feedback"
          className="text-orange-400 hover:text-orange-300"
        >
          Send feedback
        </a>
      </p>
    </footer>
  );
}
