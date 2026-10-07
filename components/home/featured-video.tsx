import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { FeaturedVideoPlayer } from "@/components/home/featured-video-player";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function FeaturedVideo() {
  const { featuredVideo } = homepageContent;

  return (
    <Section
      aria-labelledby="featured-video-title"
      className="overflow-hidden bg-page lg:pt-[7.625rem]"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:gap-[2.1875rem]">
          <div className="flex items-center gap-4">
            <p className="eyebrow tracking-[0.24em]">
              {featuredVideo.eyebrow}
            </p>
            <span aria-hidden="true" className="h-px w-12 bg-accent/70 sm:w-16" />
          </div>
          <h2
            id="featured-video-title"
            className="max-w-[12ch] font-serif text-[clamp(2.75rem,10vw,3.5rem)] font-medium leading-[0.94] tracking-[-0.03em] text-copy lg:max-w-none lg:text-[clamp(3rem,3.5vw,3.5rem)]"
          >
            {featuredVideo.title}
          </h2>
        </div>

        <FeaturedVideoPlayer
          className="mt-6 rounded-md sm:mt-8 sm:rounded-lg lg:mt-9"
          title={featuredVideo.title}
          poster={featuredVideo.poster}
          videoId={featuredVideo.videoId}
        />

        <div className="mt-5 flex flex-col gap-2 sm:mt-6 md:flex-row md:items-center md:justify-between md:gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copy/75">
            {featuredVideo.artist}
          </p>

          <Link
            href={featuredVideo.action.href}
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start border-b border-accent/70 py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:border-accent-highlight hover:text-accent-highlight"
          >
            {featuredVideo.action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
