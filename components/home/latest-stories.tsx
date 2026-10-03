import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function LatestStories() {
  const { latestStories } = homepageContent;

  return (
    <Section aria-labelledby="latest-stories-title">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            id="latest-stories-title"
            eyebrow={latestStories.eyebrow}
            title={latestStories.title}
            description={latestStories.description}
          />
          <Link
            href={latestStories.action.href}
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight sm:self-auto"
          >
            {latestStories.action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <article className="group lg:col-span-8">
            <MediaPlaceholder
              tone="editorial"
              label="Feature story image"
              detail="Approved editorial imagery will define the final crop."
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
            />
            <div className="mt-5 grid gap-4 border-t border-divider/60 pt-5 sm:grid-cols-[auto_1fr] sm:gap-8">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-accent-highlight">
                {latestStories.feature.label}
              </p>
              <h3 className="max-w-[20ch] font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] tracking-[-0.025em] text-copy sm:justify-self-end sm:text-right">
                {latestStories.feature.status}
              </h3>
            </div>
          </article>

          <div className="divide-y divide-divider/60 border-y border-divider/60 lg:col-span-4 lg:border-t-0">
            {latestStories.supporting.map((story, index) => (
              <article key={story.id} className="py-7 first:pt-0 lg:py-8">
                <MediaPlaceholder
                  tone="editorial"
                  label={`${story.label} image`}
                  detail="Approved story imagery pending."
                  className="aspect-[16/9] w-full"
                />
                <p className="mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-accent-highlight">
                  {story.label}
                </p>
                <h3 className="mt-3 max-w-[20ch] font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.02] tracking-[-0.02em] text-copy">
                  {story.status}
                </h3>
                <p className="mt-4 text-xs text-copy-muted">
                  Editorial slot {String(index + 2).padStart(2, "0")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
