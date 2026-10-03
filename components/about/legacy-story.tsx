import { aboutPageContent } from "@/components/about/about-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function LegacyStory() {
  const { legacy } = aboutPageContent;

  return (
    <Section
      aria-labelledby="about-legacy-title"
      className="about-legacy-story relative isolate overflow-hidden bg-page-secondary/40"
    >
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
              {legacy.eyebrow}
            </p>
            <h2
              id="about-legacy-title"
              className="max-w-[13ch] font-serif text-[clamp(3rem,6vw,5.25rem)] font-medium leading-[0.87] tracking-[-0.04em] text-copy"
            >
              {legacy.title}
            </h2>
          </div>
          <div className="max-w-[35rem] space-y-5 text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:col-start-9">
            {legacy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 border-y border-divider/60 py-4 sm:mt-16 sm:py-6 lg:mt-20">
          <MediaPlaceholder
            tone="editorial"
            label={legacy.mediaLabel}
            detail={legacy.mediaDetail}
            className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[2/1]"
          />
        </div>
      </Container>
    </Section>
  );
}
