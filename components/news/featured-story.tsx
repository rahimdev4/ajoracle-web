import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { newsPageContent } from "@/components/news/news-content";
import type { NewsArticleSummary } from "@/lib/news/articles";

type FeaturedStoryProps = Readonly<{
  article?: NewsArticleSummary;
}>;

export function FeaturedStory({ article }: FeaturedStoryProps) {
  const { featured } = newsPageContent;

  if (!article) {
    return null;
  }

  const href = `/news/${article.slug}`;

  return (
    <Section
      aria-labelledby="featured-story-title"
      className="news-feature-section relative isolate overflow-hidden bg-page-secondary/35"
    >
      <Container className="relative z-10">
        <div className="mb-12 border-b border-divider/60 pb-5 sm:mb-16">
          <p className="eyebrow tracking-[0.24em]">{featured.eyebrow}</p>
        </div>

        <article className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <Link
              href={href}
              aria-label={`Read ${article.title}`}
              className="group relative block aspect-square overflow-hidden rounded-md bg-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
            >
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                sizes="(min-width: 1024px) 56rem, calc(100vw - 2.5rem)"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none"
              />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-accent-highlight">
              01
            </p>
            <h2
              id="featured-story-title"
              className="max-w-[13ch] font-serif text-[clamp(3rem,5.5vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy lg:max-w-[16ch]"
            >
              <Link
                href={href}
                className="rounded-sm transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-7 max-w-[36rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
              {article.excerpt}
            </p>
            <Link
              href={href}
              className="group mt-9 inline-flex min-h-11 items-center gap-3 border-t border-divider/60 pt-5 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
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
      </Container>
    </Section>
  );
}
