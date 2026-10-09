import Image from "next/image";
import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { getNewsArticleListing } from "@/lib/news/articles";

export async function LatestStories() {
  const { latestStories } = homepageContent;
  const { featured, supporting } = await getNewsArticleListing();
  const orderedArticles = featured ? [featured, ...supporting] : supporting;
  const [leadArticle, ...remainingArticles] = orderedArticles;
  const supportingArticles = remainingArticles.slice(0, 2);

  if (!leadArticle) {
    return null;
  }

  const leadHref = `/news/${leadArticle.slug}`;

  return (
    <Section aria-labelledby="latest-stories-title">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            id="latest-stories-title"
            eyebrow={latestStories.eyebrow}
            title={latestStories.title}
            description={latestStories.description}
            className="[&>p:last-child]:mt-5 sm:[&>p:last-child]:mt-4"
          />
          <Link
            href={latestStories.action.href}
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start rounded-sm py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight sm:self-auto"
          >
            {latestStories.action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-12 sm:mt-14 sm:gap-14 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-7">
            <Link
              href={leadHref}
              aria-label={`Read ${leadArticle.title}`}
              className="group relative block aspect-square overflow-hidden rounded-md bg-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
            >
              <Image
                src={leadArticle.image.src}
                alt={leadArticle.image.alt}
                fill
                sizes="(min-width: 1280px) 44rem, (min-width: 1024px) 56vw, calc(100vw - 2.5rem)"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none"
              />
            </Link>

            <div className="mt-6 border-t border-divider/60 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-highlight">
                Featured story
              </p>
              <h3 className="mt-4 max-w-[18ch] font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.94] tracking-[-0.03em] text-copy">
                <Link
                  href={leadHref}
                  className="rounded-sm transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                >
                  {leadArticle.title}
                </Link>
              </h3>
              <p className="mt-5 max-w-[42rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
                {leadArticle.excerpt}
              </p>
              <Link
                href={leadHref}
                className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
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

          {supportingArticles.length > 0 ? (
            <ol className="divide-y divide-divider/60 border-y border-divider/60 lg:col-span-5 lg:border-t-0">
              {supportingArticles.map((article, index) => {
                const href = `/news/${article.slug}`;

                return (
                  <li key={article.slug} className="py-8 first:pt-0 lg:py-10">
                    <article className="grid gap-6 sm:grid-cols-[minmax(12rem,0.9fr)_minmax(0,1fr)] sm:items-center lg:grid-cols-1 lg:items-start xl:grid-cols-[minmax(10rem,0.9fr)_minmax(0,1.1fr)] xl:items-center xl:gap-5">
                      <Link
                        href={href}
                        aria-label={`Read ${article.title}`}
                        className="group relative block aspect-square overflow-hidden rounded-md bg-panel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                      >
                        <Image
                          src={article.image.src}
                          alt={article.image.alt}
                          fill
                          sizes="(min-width: 1280px) 14rem, (min-width: 1024px) 35vw, (min-width: 640px) 42vw, calc(100vw - 2.5rem)"
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none"
                        />
                      </Link>

                      <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-accent-highlight">
                          {String(index + 2).padStart(2, "0")}
                        </p>
                        <h3 className="mt-4 max-w-[18ch] font-serif text-[clamp(2rem,3.2vw,2.75rem)] leading-[0.98] tracking-[-0.025em] text-copy">
                          <Link
                            href={href}
                            className="rounded-sm transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <Link
                          href={href}
                          className="group mt-5 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
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
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
