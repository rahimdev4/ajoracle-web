import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { newsPageContent } from "@/components/news/news-content";

const secondaryStoryLayouts = [
  {
    item: "lg:col-span-5",
    media: "aspect-[4/5]",
  },
  {
    item: "lg:col-span-6 lg:col-start-7 lg:mt-28",
    media: "aspect-[16/11]",
  },
] as const;

export function StoryCollection() {
  const { collection } = newsPageContent;

  return (
    <Section
      aria-labelledby="story-collection-title"
      className="news-story-collection relative isolate overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
              {collection.eyebrow}
            </p>
            <h2
              id="story-collection-title"
              className="max-w-[13ch] font-serif text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {collection.title}
            </h2>
          </div>
          <p className="max-w-[35rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:col-start-9">
            {collection.description}
          </p>
        </div>

        <ol className="mt-16 grid gap-x-10 gap-y-16 sm:mt-20 sm:gap-y-20 lg:mt-24 lg:grid-cols-12 lg:gap-y-28 xl:gap-x-14">
          <li className="lg:col-span-12">
            <article className="grid gap-8 border-y border-divider/60 py-8 sm:gap-10 sm:py-10 lg:grid-cols-12 lg:items-center lg:py-12">
              <div className="lg:col-span-7 lg:col-start-6">
                <MediaPlaceholder
                  tone="editorial"
                  label={collection.lead.imageLabel}
                  detail={collection.lead.imageDetail}
                  className="aspect-[4/3] w-full sm:aspect-[16/10]"
                />
              </div>

              <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
                <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-accent-highlight">
                  {collection.lead.position}
                </p>
                <h3 className="mt-5 max-w-[15ch] font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.92] tracking-[-0.03em] text-copy">
                  {collection.lead.label}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-copy-muted">
                  {collection.lead.status}
                </p>
                <p className="mt-7 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
                  Article destination pending
                </p>
              </div>
            </article>
          </li>

          {collection.secondary.map((story, index) => {
            const layout = secondaryStoryLayouts[index];

            return (
              <li key={story.id} className={layout.item}>
                <article>
                  <MediaPlaceholder
                    tone="editorial"
                    label={story.imageLabel}
                    detail={story.imageDetail}
                    className={`${layout.media} w-full`}
                  />
                  <div className="mt-6 grid grid-cols-[auto_1fr] gap-5 border-t border-divider/60 pt-5 sm:gap-7">
                    <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-accent-highlight">
                      {story.position}
                    </p>
                    <div>
                      <h3 className="max-w-[15ch] font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[0.94] tracking-[-0.025em] text-copy">
                        {story.label}
                      </h3>
                      <p className="mt-4 text-xs leading-6 text-copy-muted">
                        {story.status}
                      </p>
                      <p className="mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
                        Article destination pending
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-24 flex items-center gap-5 border-t border-divider/60 pt-8 sm:mt-32 lg:mt-40">
          <span aria-hidden="true" className="h-px flex-1 bg-divider/60" />
          <p className="text-center text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
            Approved editorial content pending
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-divider/60" />
        </div>
      </Container>
    </Section>
  );
}
