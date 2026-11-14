import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { ArticleBody } from "@/components/news/article-body";
import { ArticleEnding } from "@/components/news/article-ending";
import { ArticleHeader } from "@/components/news/article-header";
import {
  getNewsArticle,
  getRelatedNewsArticles,
  newsArticleSlugs,
} from "@/lib/news/articles";

type NewsArticlePageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export function generateStaticParams() {
  return newsArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image.src,
          alt: article.image.alt,
          width: article.image.width,
          height: article.image.height,
        },
      ],
    },
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedNewsArticles(article.slug);

  return (
    <main id="main-content" tabIndex={-1}>
      <article aria-labelledby="article-title">
        <ArticleHeader article={article} />

        <div className="article-lead-media">
          <Container>
            <div className="mx-auto max-w-[52rem] overflow-hidden rounded-md bg-panel">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                width={article.image.width}
                height={article.image.height}
                priority
                sizes="(min-width: 1024px) 52rem, calc(100vw - 2.5rem)"
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
          </Container>
        </div>

        <ArticleBody blocks={article.body} />
        <ArticleEnding relatedArticles={relatedArticles} />
      </article>

      <div aria-hidden="true" className="footer-transition h-24 sm:h-32" />
    </main>
  );
}
