type InternalAction = Readonly<{
  href: "/releases" | "/videos" | "/news" | "/contact";
  label: string;
}>;

type PlaceholderSlot = Readonly<{
  id: string;
  label: string;
  status: string;
}>;

type HomepageContent = Readonly<{
  hero: {
    eyebrow: string;
    title: string;
    role: string;
    description: string;
    primaryAction: InternalAction;
    secondaryAction: InternalAction;
  };
  latestRelease: {
    eyebrow: string;
    title: string;
    description: string;
    action: InternalAction;
  };
  featuredVideo: {
    eyebrow: string;
    title: string;
    description: string;
    action: InternalAction;
  };
  oraclePicks: {
    eyebrow: string;
    title: string;
    description: string;
    action: InternalAction;
    slots: readonly PlaceholderSlot[];
  };
  latestStories: {
    eyebrow: string;
    title: string;
    description: string;
    action: InternalAction;
    feature: PlaceholderSlot;
    supporting: readonly PlaceholderSlot[];
  };
  appPromotion: {
    eyebrow: string;
    title: string;
    description: string;
  };
}>;

// Phase 1 visual-shell copy only. Content-dependent areas are intentionally
// labeled as placeholders until approved CMS content and media are available.
export const homepageContent = {
  hero: {
    eyebrow: "Music · Faith · Inspiration",
    title: "AJOracle",
    role: "Singer · Songwriter · Creator",
    // Temporary visual-shell copy; replace only with approved production copy.
    description:
      "A new digital home for AJOracle music, visual work, and stories.",
    primaryAction: { href: "/releases", label: "Explore Music" },
    secondaryAction: { href: "/videos", label: "Watch Latest Video" },
  },
  latestRelease: {
    eyebrow: "Latest Release",
    title: "Approved release content pending",
    description:
      "This space is reserved for the latest approved release, its story, and confirmed listening destinations.",
    action: { href: "/releases", label: "Explore releases" },
  },
  featuredVideo: {
    eyebrow: "Featured Video",
    title: "Approved video selection pending",
    description:
      "The featured title, poster, and viewing destination will be added with approved video content.",
    action: { href: "/videos", label: "Explore videos" },
  },
  oraclePicks: {
    eyebrow: "Oracle Picks",
    title: "A place for considered selections",
    description:
      "The final curated titles, artwork, and listening links will come from approved content.",
    action: { href: "/releases", label: "View all releases" },
    slots: [
      {
        id: "oracle-pick-01",
        label: "Oracle Pick 01",
        status: "Title and artwork pending approval",
      },
      {
        id: "oracle-pick-02",
        label: "Oracle Pick 02",
        status: "Title and artwork pending approval",
      },
      {
        id: "oracle-pick-03",
        label: "Oracle Pick 03",
        status: "Title and artwork pending approval",
      },
    ],
  },
  latestStories: {
    eyebrow: "Latest Stories",
    title: "Notes, news, and moments",
    description:
      "An editorial home for approved AJOracle stories, with a clear feature and supporting updates.",
    action: { href: "/news", label: "View all news" },
    feature: {
      id: "feature-story",
      label: "Feature story",
      status: "Story title and imagery pending approval",
    },
    supporting: [
      {
        id: "supporting-story-01",
        label: "Supporting story 01",
        status: "Story title and imagery pending approval",
      },
      {
        id: "supporting-story-02",
        label: "Supporting story 02",
        status: "Story title and imagery pending approval",
      },
    ],
  },
  appPromotion: {
    eyebrow: "AJOracle Mobile",
    title: "The AJOracle experience, made for mobile",
    description:
      "Approved app screens and confirmed store destinations will be added when they are ready.",
  },
} as const satisfies HomepageContent;
