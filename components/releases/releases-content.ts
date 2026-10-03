type ReleaseSlot = Readonly<{
  id: string;
  position: string;
  label: string;
  status: string;
}>;

type ReleasesPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    artworkLabel: string;
    availability: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    description: string;
    slots: readonly ReleaseSlot[];
  };
}>;

// Releases V1 visual-shell content only. Every catalog-dependent field is
// explicitly marked as pending until approved CMS content is connected.
export const releasesPageContent = {
  intro: {
    eyebrow: "AJOracle Music",
    title: "Latest Releases",
    description:
      "An artwork-led home for AJOracle music, designed for calm discovery and clear listening destinations.",
  },
  featured: {
    eyebrow: "Featured Release",
    title: "Approved release title pending",
    description:
      "Approved artwork, release context, and listening destinations will complete this feature when the catalog is connected.",
    artworkLabel: "Featured release artwork",
    availability: "Listening destinations pending confirmation",
  },
  collection: {
    eyebrow: "The Collection",
    title: "Music, presented with space to resonate",
    description:
      "These structural positions establish the catalog rhythm without inventing release names, dates, or platform links.",
    slots: [
      {
        id: "release-slot-01",
        position: "01",
        label: "Release position 01",
        status: "Approved title and artwork pending",
      },
      {
        id: "release-slot-02",
        position: "02",
        label: "Release position 02",
        status: "Approved title and artwork pending",
      },
      {
        id: "release-slot-03",
        position: "03",
        label: "Release position 03",
        status: "Approved title and artwork pending",
      },
      {
        id: "release-slot-04",
        position: "04",
        label: "Release position 04",
        status: "Approved title and artwork pending",
      },
    ],
  },
} as const satisfies ReleasesPageContent;
