import { FeaturedRelease } from "@/components/releases/featured-release";
import { ReleaseCollection } from "@/components/releases/release-collection";
import { ReleasesIntro } from "@/components/releases/releases-intro";

export const metadata = {
  title: "Latest Releases | AJOracle",
  description: "AJOracle music releases.",
};

export default function ReleasesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ReleasesIntro />
      <FeaturedRelease />
      <ReleaseCollection />
      <div aria-hidden="true" className="footer-transition h-16 sm:h-32" />
    </main>
  );
}
