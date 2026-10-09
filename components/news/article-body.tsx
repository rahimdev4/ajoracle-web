import { Container } from "@/components/layout/container";
import type {
  ArticleBodyBlock,
  ArticleInline,
} from "@/lib/news/articles";

type ArticleBodyProps = Readonly<{
  blocks: readonly ArticleBodyBlock[];
}>;

export function ArticleBody({ blocks }: ArticleBodyProps) {
  function renderInline(segment: ArticleInline, index: number) {
    const key = `${segment.type}-${index}`;

    switch (segment.type) {
      case "strong":
        return (
          <strong key={key} className="font-semibold text-copy">
            {segment.text}
          </strong>
        );
      case "emphasis":
        return <em key={key}>{segment.text}</em>;
      default:
        return <span key={key}>{segment.text}</span>;
    }
  }

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
                const followsHeading =
                  index > 0 && blocks[index - 1].type === "heading";

                return (
                  <p
                    key={block.id}
                    className={
                      index === 0
                        ? "text-[1.0625rem] leading-[1.85] text-copy-muted sm:text-lg sm:leading-[1.8]"
                        : `${followsHeading ? "mt-6" : "mt-7 sm:mt-8"} text-[1.0625rem] leading-[1.85] text-copy-muted sm:text-lg sm:leading-[1.8]`
                    }
                  >
                    {block.content.map(renderInline)}
                  </p>
                );

              case "heading":
                return (
                  <h2
                    key={block.id}
                    className="mt-14 max-w-[16ch] font-serif text-[1.625rem] font-medium leading-[1.2] tracking-[-0.03em] text-copy sm:mt-16 sm:text-[1.875rem]"
                  >
                    {block.text}
                  </h2>
                );

            }
          })}
        </div>
      </Container>
    </section>
  );
}
