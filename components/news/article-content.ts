export type ArticleBodyBlock =
  | Readonly<{
      id: string;
      type: "paragraph";
      text: string;
    }>
  | Readonly<{
      id: string;
      type: "heading";
      text: string;
    }>
  | Readonly<{
      id: string;
      type: "quote";
      text: string;
    }>;

export type StructuralArticle = Readonly<{
  slug: string;
  eyebrow: string;
  title: string;
  deck: string;
  status: string;
  leadMedia: {
    label: string;
    detail: string;
  };
  body: readonly ArticleBodyBlock[];
}>;

// Development-only route fixture. It is intentionally unmistakable as a
// structural preview and should be removed when approved CMS content is wired.
const articlePreview = {
  slug: "article-preview",
  eyebrow: "Structural Article Preview",
  title: "Article detail structure preview",
  deck:
    "A development-only fixture for evaluating AJOracle's future long-form reading experience. This is not a published story.",
  status: "Content, publication details, and article media pending approval",
  leadMedia: {
    label: "Article lead media position",
    detail: "Approved editorial photography or artwork will replace this frame.",
  },
  body: [
    {
      id: "opening-structure",
      type: "paragraph",
      text: "Structural opening paragraph. Approved article copy will replace this demonstration text when CMS-backed editorial content is connected.",
    },
    {
      id: "reading-rhythm",
      type: "paragraph",
      text: "This block exists only to verify line length, paragraph rhythm, and sustained reading contrast across responsive layouts.",
    },
    {
      id: "section-heading-preview",
      type: "heading",
      text: "Section heading preview",
    },
    {
      id: "section-structure",
      type: "paragraph",
      text: "Structural body paragraph for testing the relationship between a subsection heading and the copy that follows. No artist facts or article claims are represented here.",
    },
    {
      id: "quotation-position",
      type: "quote",
      text: "Structural quotation position. Any published quotation and attribution will require approved source content.",
    },
    {
      id: "closing-structure",
      type: "paragraph",
      text: "Closing structural paragraph. Approved article content will determine the final length, sequence, and supporting media.",
    },
  ],
} as const satisfies StructuralArticle;

const structuralArticles: readonly StructuralArticle[] = [articlePreview];

export const structuralArticleSlugs = structuralArticles.map(
  (article) => article.slug,
);

export function getStructuralArticle(slug: string) {
  return structuralArticles.find((article) => article.slug === slug);
}
