import { Container } from "@/components/layout/container";
import type { ArticleBodyBlock } from "@/components/news/article-content";

type ArticleBodyProps = Readonly<{
  blocks: readonly ArticleBodyBlock[];
}>;

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <section
      aria-label="Article content"
      className="article-reading-section relative isolate py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-[46rem]">
          {blocks.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={block.id}
                    className={
                      index === 0
                        ? "text-lg leading-8 text-copy sm:text-xl sm:leading-9"
                        : "mt-8 text-base leading-8 text-copy-muted sm:text-[1.0625rem] sm:leading-9"
                    }
                  >
                    {block.text}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={block.id}
                    className="mt-16 max-w-[16ch] font-serif text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[0.92] tracking-[-0.03em] text-copy sm:mt-20"
                  >
                    {block.text}
                  </h2>
                );

              case "quote":
                return (
                  <blockquote
                    key={block.id}
                    className="my-14 border-y border-divider/60 py-8 sm:my-20 sm:px-8 sm:py-10"
                  >
                    <p className="font-serif text-[clamp(2rem,5vw,3.25rem)] italic leading-[1.02] tracking-[-0.025em] text-copy">
                      {block.text}
                    </p>
                  </blockquote>
                );
            }
          })}
        </div>
      </Container>
    </section>
  );
}
