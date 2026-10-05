import { notFound } from "next/navigation";

import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { ArticleBody } from "@/components/news/article-body";
import {
  getStructuralArticle,
  structuralArticleSlugs,
} from "@/components/news/article-content";
import { ArticleEnding } from "@/components/news/article-ending";
import { ArticleHeader } from "@/components/news/article-header";

type NewsArticlePageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export function generateStaticParams() {
  return structuralArticleSlugs.map((slug) => ({ slug }));
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getStructuralArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main id="main-content" tabIndex={-1}>
      <article aria-labelledby="article-title">
        <ArticleHeader article={article} />

        <div className="article-lead-media pb-20 sm:pb-24 lg:pb-32">
          <Container>
            <MediaPlaceholder
              tone="editorial"
              label={article.leadMedia.label}
              detail={article.leadMedia.detail}
              className="aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[2/1]"
            />
          </Container>
        </div>

        <ArticleBody blocks={article.body} />
        <ArticleEnding />
      </article>

      <div aria-hidden="true" className="article-footer-transition h-24 sm:h-32" />
    </main>
  );
}
