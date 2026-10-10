import Image from "next/image";

import { Container } from "@/components/layout/container";
import { releasesPageContent } from "@/components/releases/releases-content";

function DecorativePlayMark() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/70 bg-page/90 text-copy backdrop-blur-[2px] sm:size-13 lg:size-14"
    >
      <svg viewBox="0 0 16 16" className="ml-0.5 size-5 fill-current">
        <path d="M4.75 2.9v10.2L13 8 4.75 2.9Z" />
      </svg>
    </span>
  );
}

export function ReleaseCollection() {
  const { collection } = releasesPageContent;

  return (
    <section
      aria-labelledby="release-collection-title"
      className="bg-page pb-10 pt-14 sm:pb-16 sm:pt-24 lg:pb-16 lg:pt-28"
    >
      <Container>
        <div className="border-b border-divider/60 pb-7 sm:pb-8">
          <div className="flex items-center gap-4">
            <p className="eyebrow tracking-[0.24em]">{collection.eyebrow}</p>
            <span
              aria-hidden="true"
              className="h-px w-14 bg-accent/60 sm:w-24"
            />
          </div>
          <h2
            id="release-collection-title"
            className="mt-5 max-w-[12ch] font-serif text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] text-copy sm:mt-6"
          >
            {collection.title}
          </h2>
        </div>

        <ol className="mx-auto mt-9 grid max-w-[67rem] gap-x-12 gap-y-12 sm:mt-11 sm:grid-cols-2 sm:gap-y-16 lg:mt-12 lg:gap-x-20 lg:gap-y-20">
          {collection.releases.map((release) => (
            <li key={release.id}>
              <div className="relative aspect-square w-full overflow-hidden rounded-[0.375rem]">
                <Image
                  src={release.artwork.src}
                  alt={release.artwork.alt}
                  fill
                  sizes="(min-width: 1280px) 495px, (min-width: 640px) 43vw, calc(100vw - 2.5rem)"
                  className="object-contain"
                />
                <DecorativePlayMark />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.05] tracking-[-0.025em] text-copy">
                  {release.title}
                </h3>
                <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
                  By {release.artist}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
