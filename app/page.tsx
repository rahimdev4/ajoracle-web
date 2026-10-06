import { AppPromotion } from "@/components/home/app-promotion";
import { FeaturedVideo } from "@/components/home/featured-video";
import { Hero } from "@/components/home/hero";
import { LatestRelease } from "@/components/home/latest-release";
import { LatestStories } from "@/components/home/latest-stories";
import { OraclePicks } from "@/components/home/oracle-picks";

// Enable only after real app screenshots and store destinations are approved.
const isAppPromotionReady = false;

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <LatestRelease />
      <FeaturedVideo />
      <OraclePicks />
      <LatestStories />
      {isAppPromotionReady ? <AppPromotion /> : null}
    </main>
  );
}
