import { FeaturedVideo } from "@/components/videos/featured-video";
import { VideoCollection } from "@/components/videos/video-collection";
import { VideosIntro } from "@/components/videos/videos-intro";

export default function VideosPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <VideosIntro />
      <FeaturedVideo />
      <VideoCollection />
      <div aria-hidden="true" className="footer-transition h-24 sm:h-32" />
    </main>
  );
}
