import type { Metadata } from "next";

import { FeaturedVideo } from "@/components/videos/featured-video";
import { VideoCollection } from "@/components/videos/video-collection";
import { VideosIntro } from "@/components/videos/videos-intro";

export const metadata: Metadata = {
  title: "Videos | AJOracle",
  description: "Music, performances, and visual stories from AJOracle.",
  alternates: {
    canonical: "/videos",
  },
};

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
