import { AboutClosing } from "@/components/about/about-closing";
import { AboutIntro } from "@/components/about/about-intro";
import { ArtistStory } from "@/components/about/artist-story";
import { CreativePerspective } from "@/components/about/creative-perspective";
import { LegacyStory } from "@/components/about/legacy-story";

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <AboutIntro />
      <ArtistStory />
      <CreativePerspective />
      <LegacyStory />
      <AboutClosing />
      <div aria-hidden="true" className="footer-transition h-24 sm:h-32" />
    </main>
  );
}
