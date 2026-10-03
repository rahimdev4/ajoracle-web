import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function LatestRelease() {
  const { latestRelease } = homepageContent;

  return (
    <Section
      aria-labelledby="latest-release-title"
      className="relative overflow-hidden bg-page-secondary/45"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
        <div className="relative lg:col-span-6 xl:col-span-5">
          <div
            aria-hidden="true"
            className="absolute -inset-5 border border-divider/20 sm:-inset-8"
          />
          <MediaPlaceholder
            tone="release"
            label="Latest release artwork"
            detail="Square approved artwork will be placed here."
            className="relative aspect-square w-full"
          />
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="mb-6 flex items-center gap-4">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
              {latestRelease.eyebrow}
            </p>
            <span aria-hidden="true" className="h-px w-12 bg-accent/70" />
          </div>
          <h2
            id="latest-release-title"
            className="max-w-[12ch] font-serif text-[clamp(3rem,6vw,5.25rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
          >
            {latestRelease.title}
          </h2>
          <p className="mt-7 max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {latestRelease.description}
          </p>
          <Link
            href={latestRelease.action.href}
            className="group mt-9 inline-flex min-h-11 items-center gap-3 border-b border-accent/80 py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight"
          >
            {latestRelease.action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <p className="mt-8 border-l border-divider pl-4 text-xs leading-6 text-copy-muted">
            Listening links will appear only after their destinations are
            confirmed.
          </p>
        </div>
      </Container>
    </Section>
  );
}
