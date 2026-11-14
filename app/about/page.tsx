import type { Metadata } from "next";

import { AboutIntro } from "@/components/about/about-intro";
import { ArtistStory } from "@/components/about/artist-story";
import { FamilyLegacy } from "@/components/about/family-legacy";
import { MemorialTribute } from "@/components/about/memorial-tribute";

export const metadata: Metadata = {
  title: "About AJOracle",
  description:
    "A singer, songwriter, and storyteller using music to inspire awareness, empathy, and meaningful conversation.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <AboutIntro />
      <ArtistStory />
      <MemorialTribute />
      <FamilyLegacy />
      <div aria-hidden="true" className="footer-transition h-24 sm:h-32" />
    </main>
  );
}
