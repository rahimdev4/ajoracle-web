import { aboutPageContent } from "@/components/about/about-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function ArtistStory() {
  const { artistStory } = aboutPageContent;

  return (
    <Section
      aria-labelledby="about-artist-story-title"
      className="about-artist-story relative isolate overflow-hidden bg-page-secondary/35"
    >
      <Container className="relative z-10">
        <div className="mb-12 flex items-center justify-between gap-6 border-b border-divider/60 pb-5 sm:mb-16">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
            {artistStory.eyebrow}
          </p>
          <p className="text-right text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
            Primary narrative position
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-16">
          <div className="lg:col-span-7">
            <MediaPlaceholder
              tone="editorial"
              label={artistStory.mediaLabel}
              detail={artistStory.mediaDetail}
              className="aspect-[4/3] w-full sm:aspect-[5/4]"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <h2
              id="about-artist-story-title"
              className="max-w-[12ch] font-serif text-[clamp(3rem,5.5vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {artistStory.title}
            </h2>
            <div className="mt-7 space-y-5 text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
              {artistStory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
