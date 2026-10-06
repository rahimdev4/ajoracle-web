import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { videosPageContent } from "@/components/videos/videos-content";

export function FeaturedVideo() {
  const { featured } = videosPageContent;

  return (
    <Section
      aria-labelledby="videos-featured-title"
      className="videos-feature-section relative isolate overflow-hidden bg-page-secondary/45"
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-4">
              <p className="eyebrow tracking-[0.24em]">
                {featured.eyebrow}
              </p>
              <span aria-hidden="true" className="h-px w-12 bg-accent/65 sm:w-20" />
            </div>
            <h2
              id="videos-featured-title"
              className="max-w-[14ch] font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-medium leading-[0.86] tracking-[-0.04em] text-copy"
            >
              {featured.title}
            </h2>
          </div>
          <p className="max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:justify-self-end">
            {featured.description}
          </p>
        </div>

        <div className="relative border-y border-divider/60 py-4 sm:py-6">
          <MediaPlaceholder
            tone="video"
            label={featured.posterLabel}
            detail="Approved widescreen poster or selected frame pending."
            className="aspect-video w-full"
          />
          <span className="absolute right-7 top-9 z-20 bg-page/80 px-3 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted backdrop-blur-sm sm:right-9 sm:top-11">
            Playback unavailable
          </span>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:items-start">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
            16:9 featured media position
          </p>
          <div className="sm:justify-self-end sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copy-muted">
              Availability
            </p>
            <p className="mt-2 text-sm text-copy">{featured.availability}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
