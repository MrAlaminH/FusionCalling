"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Click-to-play YouTube facade: renders the video's own thumbnail with a
 * brand play button and only mounts the YouTube iframe after the user
 * clicks, so no third-party JS loads until playback is requested. Same
 * pattern as the whitelabel hero and TryDemo cards, extracted for reuse.
 */
export default function VideoEmbed({
  videoId,
  title,
  duration,
  className,
  sizes = "(max-width: 768px) 100vw, 768px",
}: {
  videoId: string;
  /** Accessible video name — also used as the iframe title. */
  title: string;
  /** Optional human duration label, e.g. "2 min". */
  duration?: string;
  className?: string;
  sizes?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl border border-brand/20 bg-black shadow-premium",
        className
      )}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 block h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 transition-colors duration-300 group-hover:from-black/60"
          />
          <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-strong text-black shadow-premium transition-transform duration-200 group-hover:scale-110 active:scale-95">
            <Play className="h-7 w-7 fill-current" aria-hidden="true" />
          </span>
          {duration ? (
            <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              Watch · {duration}
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
}
