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

export type AppStoreDestination = Readonly<{
  platform: "App Store" | "Google Play";
  shortLabel: "iOS" | "Android";
  status: "Coming soon";
  href: string | null;
  qrCode: Readonly<{
    src: string;
    alt: string;
  }> | null;
}>;

type AppStoreDestinations = Readonly<{
  ios: AppStoreDestination | null;
  android: AppStoreDestination | null;
}>;

const appStoreDestinations: AppStoreDestinations = {
  // Add verified store URLs and their matching approved QR assets together.
  ios: {
    platform: "App Store",
    shortLabel: "iOS",
    status: "Coming soon",
    href: null,
    qrCode: null,
  },
  android: {
    platform: "Google Play",
    shortLabel: "Android",
    status: "Coming soon",
    href: null,
    qrCode: null,
  },
};

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
    title: {
      lead: string;
      accent: string;
    };
    description: string;
    status: string;
    background: {
      src: string;
    };
    phone: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    storeDestinations: AppStoreDestinations;
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
    eyebrow: "The AJOracle App",
    title: {
      lead: "Take the music",
      accent: "with you.",
    },
    description:
      "The AJOracle mobile experience is on its way, bringing the music and stories closer to you. A new way to experience AJOracle, wherever you are.",
    status: "Coming soon",
    background: {
      src: "/images/home/app-promotion/app-promotion-background.webp",
    },
    phone: {
      src: "/images/home/app-promotion/app-phone-mockup.svg",
      alt: "AJOracle mobile app shown on a phone",
      width: 904,
      height: 980,
    },
    storeDestinations: appStoreDestinations,
  },
} as const satisfies HomepageContent;
