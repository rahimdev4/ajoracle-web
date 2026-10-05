import { FeaturedStory } from "@/components/news/featured-story";
import { NewsIntro } from "@/components/news/news-intro";
import { StoryCollection } from "@/components/news/story-collection";

export default function NewsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <NewsIntro />
      <FeaturedStory />
      <StoryCollection />
      <div aria-hidden="true" className="news-footer-transition h-24 sm:h-32" />
    </main>
  );
}
