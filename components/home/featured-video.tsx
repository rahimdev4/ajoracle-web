import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function FeaturedVideo() {
  const { featuredVideo } = homepageContent;

  return (
    <Section aria-labelledby="featured-video-title" className="overflow-hidden">
      <Container>
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-12">
          <SectionHeading
            id="featured-video-title"
            eyebrow={featuredVideo.eyebrow}
            title={featuredVideo.title}
            className="lg:col-span-8"
          />
          <p className="max-w-md text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:justify-self-end">
            {featuredVideo.description}
          </p>
        </div>

        <div className="group relative">
          <MediaPlaceholder
            tone="video"
            label="Featured video poster"
            detail="An approved poster or selected frame will replace this widescreen media area."
            className="aspect-[4/3] min-h-[20rem] w-full sm:aspect-video"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-20 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-copy/50 bg-page/75 text-copy backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:size-20"
          >
            <span className="ml-1 text-xl">▶</span>
          </div>
          <span className="absolute right-4 top-4 z-20 bg-page/75 px-3 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted backdrop-blur-sm sm:right-6 sm:top-6">
            Preview unavailable
          </span>
        </div>

        <div className="mt-7 flex justify-end">
          <Link
            href={featuredVideo.action.href}
            className="group inline-flex min-h-11 items-center gap-3 py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight"
          >
            {featuredVideo.action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
