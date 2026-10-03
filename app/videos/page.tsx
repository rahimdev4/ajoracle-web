import { FeaturedVideo } from "@/components/videos/featured-video";
import { VideoCollection } from "@/components/videos/video-collection";
import { VideosIntro } from "@/components/videos/videos-intro";

export default function VideosPage() {
  return (
    <main>
      <VideosIntro />
      <FeaturedVideo />
      <VideoCollection />
      <div aria-hidden="true" className="videos-footer-transition h-24 sm:h-32" />
    </main>
  );
}
