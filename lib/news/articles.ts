import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

export type ArticleInline = Readonly<{
  type: "text" | "emphasis" | "strong";
  text: string;
}>;

export type ArticleBodyBlock =
  | Readonly<{
      id: string;
      type: "paragraph";
      content: readonly ArticleInline[];
    }>
  | Readonly<{
      id: string;
      type: "heading";
      text: string;
    }>;

export type NewsArticleSummary = Readonly<{
  slug: string;
  title: string;
  excerpt: string;
  image: Readonly<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}>;

export type NewsArticle = NewsArticleSummary &
  Readonly<{
    approvalStatus: "pending-client-approval";
    publishedAt?: string;
    body: readonly ArticleBodyBlock[];
  }>;

type ArticleSource = Omit<NewsArticleSummary, "excerpt"> &
  Readonly<{
    sourceFile: string;
    approvalStatus: NewsArticle["approvalStatus"];
    publishedAt?: string;
    listing: Readonly<{
      placement: "featured" | "supporting";
      order: number;
    }>;
  }>;

export type NewsArticleListing = Readonly<{
  featured?: NewsArticleSummary;
  supporting: readonly NewsArticleSummary[];
}>;

const articleSources: readonly ArticleSource[] = [
  {
    slug: "perseverance",
    title: "Perseverance: Continuing When It's Hard",
    sourceFile: "perseverance.md",
    approvalStatus: "pending-client-approval",
    listing: {
      placement: "featured",
      order: 1,
    },
    image: {
      src: "/images/news/perseverance.webp",
      alt: "Artwork for Perseverance",
      width: 1024,
      height: 1024,
    },
  },
  {
    slug: "the-story-behind-prayer",
    title: "The Story Behind “Prayer”",
    sourceFile: "the-story-behind-prayer.md",
    approvalStatus: "pending-client-approval",
    listing: {
      placement: "supporting",
      order: 2,
    },
    image: {
      src: "/images/news/the-story-behind-prayer.webp",
      alt: "Artwork for The Story Behind Prayer",
      width: 1024,
      height: 1024,
    },
  },
  {
    slug: "prayer-a-song-for-quiet-moments",
    title: "Prayer: A Song for Quiet Moments",
    sourceFile: "prayer-a-song-for-quiet-moments.md",
    approvalStatus: "pending-client-approval",
    listing: {
      placement: "supporting",
      order: 3,
    },
    image: {
      src: "/images/news/prayer-a-song-for-quiet-moments.webp",
      alt: "Artwork for Prayer: A Song for Quiet Moments",
      width: 1024,
      height: 1024,
    },
  },
];

export const newsArticleSlugs = articleSources.map(({ slug }) => slug);

function parseInline(text: string): readonly ArticleInline[] {
  const segments: ArticleInline[] = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let cursor = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index;

    if (index > cursor) {
      segments.push({ type: "text", text: text.slice(cursor, index) });
    }

    const token = match[0];
    const isStrong = token.startsWith("**");
    segments.push({
      type: isStrong ? "strong" : "emphasis",
      text: token.slice(isStrong ? 2 : 1, isStrong ? -2 : -1),
    });
    cursor = index + token.length;
  }

  if (cursor < text.length) {
    segments.push({ type: "text", text: text.slice(cursor) });
  }

  return segments;
}

function parseArticleMarkdown(markdown: string, expectedTitle: string) {
  const sections = markdown
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n{2,}/)
    .map((section) => section.trim())
    .filter(Boolean);

  const title = sections.shift()?.replace(/^#\s+/, "");

  if (title !== expectedTitle) {
    throw new Error(
      `Article title mismatch: expected "${expectedTitle}", received "${title ?? "missing title"}".`,
    );
  }

  const body: ArticleBodyBlock[] = sections.map((section, index) => {
    if (section.startsWith("## ")) {
      return {
        id: `section-${index + 1}`,
        type: "heading",
        text: section.slice(3).trim(),
      };
    }

    return {
      id: `paragraph-${index + 1}`,
      type: "paragraph",
      content: parseInline(section.replace(/\n/g, " ")),
    };
  });

  const firstParagraphIndex = body.findIndex(
    (block) => block.type === "paragraph",
  );
  const firstParagraph = body[firstParagraphIndex];

  if (!firstParagraph || firstParagraph.type !== "paragraph") {
    throw new Error(`Article "${expectedTitle}" requires an opening paragraph.`);
  }

  return {
    body: body.filter((_, index) => index !== firstParagraphIndex),
    excerpt: firstParagraph.content.map(({ text }) => text).join(""),
  };
}

export const getNewsArticle = cache(
  async (slug: string): Promise<NewsArticle | undefined> => {
    const source = articleSources.find((article) => article.slug === slug);

    if (!source) {
      return undefined;
    }

    const sourcePath = path.join(
      process.cwd(),
      "content",
      "news",
      source.sourceFile,
    );
    const markdown = await readFile(sourcePath, "utf8");
    const { body, excerpt } = parseArticleMarkdown(markdown, source.title);

    return {
      slug: source.slug,
      title: source.title,
      excerpt,
      image: source.image,
      approvalStatus: source.approvalStatus,
      publishedAt: source.publishedAt,
      body,
    };
  },
);

export async function getRelatedNewsArticles(
  currentSlug: string,
): Promise<readonly NewsArticleSummary[]> {
  const articles = await Promise.all(
    articleSources
      .filter(({ slug }) => slug !== currentSlug)
      .map(({ slug }) => getNewsArticle(slug)),
  );

  return articles.filter(
    (article): article is NewsArticle => article !== undefined,
  );
}

export async function getNewsArticleListing(): Promise<NewsArticleListing> {
  const orderedSources = [...articleSources].sort(
    (first, second) => first.listing.order - second.listing.order,
  );
  const entries = await Promise.all(
    orderedSources.map(async (source) => ({
      article: await getNewsArticle(source.slug),
      placement: source.listing.placement,
    })),
  );

  return {
    featured: entries.find(
      ({ article, placement }) =>
        article !== undefined && placement === "featured",
    )?.article,
    supporting: entries.flatMap(({ article, placement }) =>
      article && placement === "supporting" ? [article] : [],
    ),
  };
}
