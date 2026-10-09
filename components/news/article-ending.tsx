import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { NewsArticleSummary } from "@/lib/news/articles";

type ArticleEndingProps = Readonly<{
  relatedArticles: readonly NewsArticleSummary[];
}>;

export function ArticleEnding({ relatedArticles }: ArticleEndingProps) {
  return (
    <footer className="border-t border-divider/60 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[64rem]">
          <Link
            href="/news"
            className="group inline-flex min-h-11 items-center gap-3 py-2 text-[0.9375rem] font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
            Return to News
          </Link>

          <div className="mt-14 border-t border-divider/60 pt-8 sm:mt-16 sm:pt-10">
            <p className="eyebrow tracking-[0.24em]">Related stories</p>
            <ul className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
              {relatedArticles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/news/${article.slug}`}
                    className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-md bg-panel">
                      <Image
                        src={article.image.src}
                        alt={article.image.alt}
                        fill
                        sizes="(min-width: 640px) 30rem, calc(100vw - 2.5rem)"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none"
                      />
                    </div>
                    <h2 className="mt-4 max-w-[18ch] font-serif text-[clamp(2rem,4vw,3rem)] leading-[0.98] tracking-[-0.03em] text-copy transition-colors duration-300 group-hover:text-accent-highlight">
                      {article.title}
                    </h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
