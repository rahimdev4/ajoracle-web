"use client";

import Image from "next/image";
import { useState } from "react";

import type { VideoPoster } from "@/components/videos/videos-content";

type VideoPlayerProps = Readonly<{
  className?: string;
  title: string;
  poster: VideoPoster;
  videoId: string;
  sizes: string;
}>;

function getYoutubeEmbedSource(videoId: string) {
  const embedUrl = new URL(
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`,
  );
  embedUrl.searchParams.set("autoplay", "1");
  embedUrl.searchParams.set("rel", "0");

  return embedUrl.toString();
}

export function VideoPlayer({
  className = "",
  title,
  poster,
  videoId,
  sizes,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [posterSource, setPosterSource] = useState(poster.src);

  return (
    <div
      className={`${className} relative aspect-video w-full overflow-hidden`.trim()}
    >
      {isPlaying ? (
        <iframe
          className="absolute inset-0 size-full"
          src={getYoutubeEmbedSource(videoId)}
          title={`${title} on YouTube`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <>
          <Image
            src={posterSource}
            alt={poster.alt}
            fill
            sizes={sizes}
            unoptimized={posterSource.startsWith("https://")}
            onError={() => {
              if (
                poster.fallbackSrc &&
                posterSource !== poster.fallbackSrc
              ) {
                setPosterSource(poster.fallbackSrc);
              }
            }}
            className="object-cover"
          />
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={() => setIsPlaying(true)}
            className="absolute left-1/2 top-1/2 z-10 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/80 bg-page/85 text-copy backdrop-blur-[2px] transition duration-200 hover:border-accent-highlight hover:bg-page/95 focus-visible:border-accent-highlight motion-safe:hover:scale-[1.03] motion-reduce:transition-none sm:size-16 lg:size-[4.875rem]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="ml-0.5 size-5 fill-current sm:size-6"
            >
              <path d="M4.75 2.9v10.2L13 8 4.75 2.9Z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
