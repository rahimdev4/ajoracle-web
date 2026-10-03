import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { releasesPageContent } from "@/components/releases/releases-content";

export function FeaturedRelease() {
  const { featured } = releasesPageContent;

  return (
    <Section
      aria-labelledby="featured-release-title"
      className="relative overflow-hidden bg-page-secondary/45"
    >
      <Container>
        <div className="mb-12 flex items-center justify-between gap-6 border-b border-divider/60 pb-5 sm:mb-16">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
            {featured.eyebrow}
          </p>
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
            01 / Current feature
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-4">
            <h2
              id="featured-release-title"
              className="max-w-[11ch] font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-medium leading-[0.86] tracking-[-0.04em] text-copy"
            >
              {featured.title}
            </h2>
            <p className="mt-7 max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
              {featured.description}
            </p>

            <div className="mt-10 border-y border-divider/60 py-5">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
                Availability
              </p>
              <p className="mt-2 text-sm leading-6 text-copy">
                {featured.availability}
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-7 lg:col-start-6">
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 size-24 border-l border-t border-accent/30 sm:-left-8 sm:-top-8 sm:size-36"
            />
            <MediaPlaceholder
              tone="release"
              label={featured.artworkLabel}
              detail="Approved square artwork will replace this structural frame."
              className="relative aspect-square w-full"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 size-24 border-b border-r border-divider/60 sm:-bottom-8 sm:-right-8 sm:size-36"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
