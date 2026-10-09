import { Container } from "@/components/layout/container";
import type { NewsArticle } from "@/lib/news/articles";

type ArticleHeaderProps = Readonly<{
  article: NewsArticle;
}>;

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="article-header relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <Container className="relative z-10">
        <div className="grid gap-10 border-t border-divider/60 pt-7 sm:pt-9 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-9">
            <p className="eyebrow mb-6 tracking-[0.24em]">News</p>
            <h1
              id="article-title"
              className="max-w-[14ch] font-serif text-[clamp(3.25rem,7.5vw,6.75rem)] font-medium leading-[0.88] tracking-[-0.05em] text-copy"
            >
              {article.title}
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pt-14">
            <p className="max-w-[38rem] text-base leading-8 text-copy sm:text-lg sm:leading-9">
              {article.excerpt}
            </p>
            {article.publishedAt ? (
              <time
                dateTime={article.publishedAt}
                className="mt-7 block border-l border-divider/80 pl-4 text-xs leading-6 text-copy-muted"
              >
                {article.publishedAt}
              </time>
            ) : null}
          </div>
        </div>
      </Container>
    </header>
  );
}
