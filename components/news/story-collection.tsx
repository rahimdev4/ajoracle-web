import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { newsPageContent } from "@/components/news/news-content";
import type { NewsArticleSummary } from "@/lib/news/articles";

const supportingStoryLayouts = [
  {
    media: "lg:col-span-7 lg:col-start-6",
    copy: "lg:col-span-4 lg:col-start-1 lg:row-start-1",
    title:
      "text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.92] tracking-[-0.03em]",
  },
  {
    media: "lg:col-span-7 lg:col-start-1",
    copy: "lg:col-span-4 lg:col-start-9",
    title:
      "text-[clamp(2.25rem,4vw,3.5rem)] leading-[0.94] tracking-[-0.025em]",
  },
] as const;

type StoryCollectionProps = Readonly<{
  articles: readonly NewsArticleSummary[];
  startPosition?: number;
}>;

export function StoryCollection({
  articles,
  startPosition = 1,
}: StoryCollectionProps) {
  const { collection } = newsPageContent;

  if (articles.length === 0) {
    return null;
  }

  return (
    <Section
      aria-labelledby="story-collection-title"
      className="news-story-collection relative isolate overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-5 tracking-[0.24em]">
              {collection.eyebrow}
            </p>
            <h2
              id="story-collection-title"
              className="max-w-[13ch] font-serif text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy lg:max-w-[20ch]"
            >
              {collection.title}
            </h2>
          </div>
          <p className="max-w-[35rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:col-start-9">
            {collection.description}
          </p>
        </div>

        <ol className="mt-16 grid border-b border-divider/60 sm:mt-20 lg:mt-24 lg:grid-cols-12">
          {articles.map((article, index) => {
            const layout =
              supportingStoryLayouts[index % supportingStoryLayouts.length];
            const href = `/news/${article.slug}`;
            const position = String(index + startPosition).padStart(2, "0");

            return (
              <li key={article.slug} className="lg:col-span-12">
                <article className="grid gap-8 border-t border-divider/60 py-8 sm:gap-10 sm:py-10 lg:grid-cols-12 lg:items-center lg:py-12 xl:gap-16">
                  <div className={layout.media}>
                    <Link
                      href={href}
                      aria-label={`Read ${article.title}`}
                      className="group relative block aspect-square overflow-hidden rounded-md bg-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                    >
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        fill
                        sizes="(min-width: 1024px) 50rem, calc(100vw - 2.5rem)"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none"
                      />
                    </Link>
                  </div>

                  <div className={layout.copy}>
                    <p className="text-xs font-semibold tracking-[0.18em] text-accent-highlight">
                      {position}
                    </p>
                    <h3
                      className={`mt-5 max-w-[15ch] font-serif text-copy ${layout.title}`}
                    >
                      <Link
                        href={href}
                        className="rounded-sm transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <Link
                      href={href}
                      className="group mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                    >
                      Read story
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
