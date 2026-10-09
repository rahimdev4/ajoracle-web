import { FeaturedStory } from "@/components/news/featured-story";
import { NewsIntro } from "@/components/news/news-intro";
import { StoryCollection } from "@/components/news/story-collection";
import { getNewsArticleListing } from "@/lib/news/articles";

export default async function NewsPage() {
  const { featured, supporting } = await getNewsArticleListing();

  return (
    <main id="main-content" tabIndex={-1}>
      <NewsIntro />
      <FeaturedStory article={featured} />
      <StoryCollection
        articles={supporting}
        startPosition={featured ? 2 : 1}
      />
      <div aria-hidden="true" className="footer-transition h-24 sm:h-32" />
    </main>
  );
}
