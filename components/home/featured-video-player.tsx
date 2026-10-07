"use client";

import Image from "next/image";
import { useState } from "react";

type FeaturedVideoPlayerProps = Readonly<{
  className?: string;
  title: string;
  poster: {
    src: string;
    alt: string;
  };
  videoId: string;
}>;

function getYoutubeEmbedSource(videoId: string) {
  const embedUrl = new URL(
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`,
  );
  embedUrl.searchParams.set("autoplay", "1");
  embedUrl.searchParams.set("rel", "0");

  return embedUrl.toString();
}

export function FeaturedVideoPlayer({
  className = "",
  title,
  poster,
  videoId,
}: FeaturedVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`${className} relative aspect-video w-full overflow-hidden`}>
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
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="(min-width: 1280px) 1200px, (min-width: 640px) calc(100vw - 5rem), calc(100vw - 2.5rem)"
            className="object-cover"
          />
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={() => setIsPlaying(true)}
            className="absolute left-1/2 top-1/2 z-10 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/80 bg-page/80 text-copy backdrop-blur-[2px] transition duration-200 hover:scale-[1.03] hover:border-accent-highlight hover:bg-page/90 focus-visible:border-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight motion-reduce:transform-none motion-reduce:transition-none sm:size-16 lg:size-[4.875rem]"
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
