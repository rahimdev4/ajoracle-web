import Image from "next/image";
import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { ReleaseAudioPlayer } from "@/components/home/release-audio-player";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function LatestRelease() {
  const { latestRelease } = homepageContent;

  return (
    <Section
      aria-labelledby="latest-release-title"
      className="latest-release-section relative overflow-hidden bg-page"
    >
      <Container className="grid items-start gap-y-8 sm:gap-y-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-[clamp(3rem,5vw,5rem)] lg:gap-y-0">
        <div className="contents lg:col-start-2 lg:row-start-1 lg:block lg:self-center">
          <div className="order-1 mb-2 flex items-center gap-4 lg:mb-0">
            <p className="eyebrow tracking-[0.24em]">
              {latestRelease.eyebrow}
            </p>
            <span
              aria-hidden="true"
              className="h-px w-16 bg-accent/60 sm:w-24"
            />
          </div>

          <div className="order-3 lg:mt-8">
            <h2
              id="latest-release-title"
              className="pb-3 font-serif text-[clamp(3.5rem,13vw,4.5rem)] font-medium leading-[0.96] tracking-[-0.035em] text-copy lg:text-[clamp(4.5rem,5.8vw,5.375rem)]"
            >
              {latestRelease.title}
            </h2>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-copy-muted sm:text-sm">
              By {latestRelease.artist}
            </p>
            <p className="mt-8 max-w-[42ch] text-base leading-[2.125rem] text-copy-muted sm:text-lg lg:leading-8">
              {latestRelease.description}
            </p>

            <ReleaseAudioPlayer releaseTitle={latestRelease.title} />

            <Link
              href={latestRelease.action.href}
              className="group mt-7 inline-flex min-h-11 items-center gap-3 border-b border-accent/70 py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:border-accent-highlight hover:text-accent-highlight"
            >
              {latestRelease.action.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="relative order-2 aspect-square w-full max-w-[35rem] justify-self-center lg:col-start-1 lg:row-start-1 lg:justify-self-start">
          <Image
            src={latestRelease.artwork.src}
            alt={latestRelease.artwork.alt}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, (min-width: 640px) 560px, calc(100vw - 2.5rem)"
            className="object-contain"
          />
        </div>
      </Container>
    </Section>
  );
}
