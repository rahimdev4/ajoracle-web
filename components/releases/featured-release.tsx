import Image from "next/image";

import { ReleaseAudioPlayer } from "@/components/home/release-audio-player";
import { Container } from "@/components/layout/container";
import { ExternalPlatformLinks } from "@/components/platforms/external-platform-links";
import { releasesPageContent } from "@/components/releases/releases-content";
import { musicPlatforms } from "@/lib/external-platforms";

export function FeaturedRelease() {
  const { featured } = releasesPageContent;

  return (
    <section
      aria-labelledby="featured-release-title"
      className="bg-page-secondary pb-14 pt-20 sm:py-24 lg:py-24"
    >
      <Container>
        <div className="mb-10 flex items-center gap-4 border-b border-divider/60 pb-5 sm:mb-12">
          <p className="eyebrow tracking-[0.24em]">{featured.eyebrow}</p>
          <span
            aria-hidden="true"
            className="h-px w-14 bg-accent/60 sm:w-24"
          />
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12 lg:gap-16 xl:gap-20">
          <div className="relative aspect-square w-full max-w-[33rem] justify-self-center md:justify-self-start">
            <Image
              src={featured.artwork.src}
              alt={featured.artwork.alt}
              fill
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 46vw, calc(100vw - 2.5rem)"
              className="object-contain"
            />
          </div>

          <div className="md:self-center md:pb-4 lg:pb-6">
            <h2
              id="featured-release-title"
              className="font-serif text-[clamp(3.75rem,7vw,6rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {featured.title}
            </h2>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-copy-muted sm:text-sm">
              By {featured.artist}
            </p>

            <p className="mt-7 max-w-[42ch] text-base leading-8 text-copy-muted sm:text-lg">
              {featured.description}
            </p>

            <ReleaseAudioPlayer releaseTitle={featured.title} />

            <ExternalPlatformLinks
              label={featured.platformLabel}
              platforms={musicPlatforms}
              className="mt-5 max-w-[32rem] sm:mt-7"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
