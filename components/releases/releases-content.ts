export type ReleaseArtwork = Readonly<{
  src: `/images/${string}`;
  alt: string;
}>;

export type CatalogRelease = Readonly<{
  id: string;
  title: string;
  artist: "AJOracle";
  artwork: ReleaseArtwork;
}>;

type ReleasesPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    background: ReleaseArtwork;
  };
  featured: CatalogRelease & {
    eyebrow: string;
    description: string;
    platformLabel: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    releases: readonly CatalogRelease[];
  };
}>;

// Static production content boundary. Presentation components consume this
// shape so a future CMS-backed query can replace it without changing layouts.
export const releasesPageContent = {
  intro: {
    eyebrow: "AJOracle Music",
    title: "Latest Releases",
    description: "Explore AJOracle's latest music.",
    background: {
      src: "/images/releases/latest-releases-hero-background.webp",
      alt: "",
    },
  },
  featured: {
    id: "prayer",
    eyebrow: "Featured Release",
    title: "Prayer",
    artist: "AJOracle",
    artwork: {
      src: "/images/home/latest-release/prayer.webp",
      alt: "Prayer by AJOracle release artwork",
    },
    description:
      "A song of faith, surrender, and hope. Prayer is a reminder that even in the quiet moments, we are never alone.",
    platformLabel: "Find AJOracle on",
  },
  collection: {
    eyebrow: "The Collection",
    title: "Explore the Music",
    releases: [
      {
        id: "i-am-that-i-am",
        title: "I Am That I Am",
        artist: "AJOracle",
        artwork: {
          src: "/images/releases/i-am-that-i-am.webp",
          alt: "I Am That I Am by AJOracle release artwork",
        },
      },
      {
        id: "provision-in-the-wilderness",
        title: "Provision in the Wilderness",
        artist: "AJOracle",
        artwork: {
          src: "/images/releases/provision-in-the-wilderness.webp",
          alt: "Provision in the Wilderness by AJOracle release artwork",
        },
      },
      {
        id: "christmas-of-love",
        title: "Christmas of Love",
        artist: "AJOracle",
        artwork: {
          src: "/images/releases/christmas-of-love.webp",
          alt: "Christmas of Love by AJOracle release artwork",
        },
      },
      {
        id: "our-father-in-heaven",
        title: "Our Father in Heaven",
        artist: "AJOracle",
        artwork: {
          src: "/images/releases/our-father-in-heaven.webp",
          alt: "Our Father in Heaven by AJOracle release artwork",
        },
      },
    ],
  },
} as const satisfies ReleasesPageContent;
