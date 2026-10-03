import { AppPromotion } from "@/components/home/app-promotion";
import { FeaturedVideo } from "@/components/home/featured-video";
import { Hero } from "@/components/home/hero";
import { LatestRelease } from "@/components/home/latest-release";
import { LatestStories } from "@/components/home/latest-stories";
import { OraclePicks } from "@/components/home/oracle-picks";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestRelease />
      <FeaturedVideo />
      <OraclePicks />
      <LatestStories />
      <AppPromotion />
    </main>
  );
}
