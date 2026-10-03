import { Container } from "@/components/layout/container";
import type { StructuralArticle } from "@/components/news/article-content";

type ArticleHeaderProps = Readonly<{
  article: StructuralArticle;
}>;

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="article-header relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <Container className="relative z-10">
        <div className="grid gap-10 border-t border-divider/60 pt-7 sm:pt-9 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-9">
            <p className="mb-6 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
              {article.eyebrow}
            </p>
            <h1
              id="article-title"
              className="max-w-[13ch] font-serif text-[clamp(3.5rem,8.5vw,7.5rem)] font-medium leading-[0.8] tracking-[-0.055em] text-copy"
            >
              {article.title}
            </h1>
          </div>

          <div className="lg:col-span-3 lg:pt-14">
            <p className="max-w-[38rem] text-base leading-8 text-copy sm:text-lg sm:leading-9">
              {article.deck}
            </p>
            <p className="mt-7 border-l border-divider/80 pl-4 text-xs leading-6 text-copy-muted">
              {article.status}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
