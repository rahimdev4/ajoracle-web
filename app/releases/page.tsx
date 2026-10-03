import { FeaturedRelease } from "@/components/releases/featured-release";
import { ReleaseCollection } from "@/components/releases/release-collection";
import { ReleasesIntro } from "@/components/releases/releases-intro";

export default function ReleasesPage() {
  return (
    <main>
      <ReleasesIntro />
      <FeaturedRelease />
      <ReleaseCollection />
      <div aria-hidden="true" className="releases-footer-transition h-24 sm:h-32" />
    </main>
  );
}
