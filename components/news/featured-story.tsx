import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { newsPageContent } from "@/components/news/news-content";

export function FeaturedStory() {
  const { featured } = newsPageContent;

  return (
    <Section
      aria-labelledby="featured-story-title"
      className="news-feature-section relative isolate overflow-hidden bg-page-secondary/35"
    >
      <Container className="relative z-10">
        <div className="mb-12 flex items-center justify-between gap-6 border-b border-divider/60 pb-5 sm:mb-16">
          <p className="eyebrow tracking-[0.24em]">
            {featured.eyebrow}
          </p>
          <p className="text-right text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
            Lead editorial position
          </p>
        </div>

        <article className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-16">
          <div className="lg:col-span-8">
            <MediaPlaceholder
              tone="editorial"
              label={featured.imageLabel}
              detail={featured.imageDetail}
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
            />
          </div>

          <div className="lg:col-span-4 lg:pb-3">
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-accent-highlight">
              01
            </p>
            <h2
              id="featured-story-title"
              className="max-w-[13ch] font-serif text-[clamp(3rem,5.5vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {featured.title}
            </h2>
            <p className="mt-7 max-w-[36rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
              {featured.description}
            </p>
            <p className="mt-9 border-t border-divider/60 pt-5 text-xs leading-6 text-copy-muted">
              {featured.status}
            </p>
          </div>
        </article>
      </Container>
    </Section>
  );
}
