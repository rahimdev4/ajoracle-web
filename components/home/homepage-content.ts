type InternalAction = Readonly<{
  href: "/releases" | "/videos" | "/news" | "/contact";
  label: string;
}>;

type OraclePick = Readonly<{
  id: string;
  title: string;
  artist: string;
  artwork: {
    src: string;
    alt: string;
  };
  audioSrc: string | null;
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
    artist: string;
    artwork: {
      src: string;
      alt: string;
    };
    description: string;
    action: InternalAction;
  };
  featuredVideo: {
    eyebrow: string;
    title: string;
    artist: string;
    poster: {
      src: string;
      alt: string;
    };
    videoId: string;
    action: InternalAction;
  };
  oraclePicks: {
    eyebrow: string;
    title: string;
    background: {
      src: string;
    };
    action: InternalAction;
    picks: readonly OraclePick[];
  };
  latestStories: {
    eyebrow: string;
    title: string;
    description: string;
    action: InternalAction;
  };
  appPromotion: {
    eyebrow: string;
    title: string;
    description: string;
  };
}>;

// Static homepage presentation data. Fields awaiting CMS or client approval
// are identified locally so verified content is not mistaken for placeholder copy.
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
    title: "Prayer",
    artist: "AJOracle",
    artwork: {
      src: "/images/home/latest-release/prayer.webp",
      alt: "Prayer by AJOracle release artwork",
    },
    // Temporary, unverified editorial copy pending final client approval.
    description:
      "A song of faith, surrender, and hope. Prayer is a reminder that even in the quiet moments, we are never alone.",
    action: { href: "/releases", label: "Explore releases" },
  },
  featuredVideo: {
    eyebrow: "Featured Video",
    title: "Great Is Thy Faithfulness",
    artist: "AJOracle",
    poster: {
      src: "/images/home/featured-video/great-is-thy-faithfulness.webp",
      alt: "Sunset over a mountain lake, featured visual for Great Is Thy Faithfulness by AJOracle",
    },
    videoId: "pgegvwDMcyo",
    action: { href: "/videos", label: "Explore videos" },
  },
  oraclePicks: {
    eyebrow: "Oracle Picks",
    title: "A place for considered selections",
    background: {
      src: "/images/home/oracle-picks/oracle-picks-background.webp",
    },
    action: { href: "/releases", label: "View all releases" },
    picks: [
      {
        id: "i-am-that-i-am",
        title: "I Am That I Am",
        artist: "AJOracle",
        artwork: {
          src: "/images/home/oracle-picks/i-am-that-i-am.webp",
          alt: "I Am That I Am by AJOracle artwork",
        },
        audioSrc: null,
      },
      {
        id: "fall-into-your-hands",
        title: "Fall Into Your Hands",
        artist: "AJOracle",
        artwork: {
          src: "/images/home/oracle-picks/fall-into-your-hands.webp",
          alt: "Fall Into Your Hands by AJOracle artwork",
        },
        audioSrc: null,
      },
      {
        id: "father-hear-us",
        title: "Father Hear Us",
        artist: "AJOracle",
        artwork: {
          src: "/images/home/oracle-picks/father-hear-us.webp",
          alt: "Father Hear Us by AJOracle artwork",
        },
        audioSrc: null,
      },
    ],
  },
  latestStories: {
    eyebrow: "Latest Stories",
    title: "Notes, news, and moments",
    description:
      "Stories, reflections, and the moments behind the music.",
    action: { href: "/news", label: "View all stories" },
  },
  appPromotion: {
    eyebrow: "AJOracle Mobile",
    title: "The AJOracle experience, made for mobile",
    description:
      "Approved app screens and confirmed store destinations will be added when they are ready.",
  },
} as const satisfies HomepageContent;
