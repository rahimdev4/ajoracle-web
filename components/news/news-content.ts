type StorySlot = Readonly<{
  id: string;
  position: string;
  label: string;
  status: string;
  imageLabel: string;
  imageDetail: string;
}>;

type NewsPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    imageLabel: string;
    imageDetail: string;
    status: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    description: string;
    lead: StorySlot;
    secondary: readonly StorySlot[];
  };
}>;

// News V1 visual-shell content only. Story titles, excerpts, imagery,
// publication metadata, and destinations remain pending until approved.
export const newsPageContent = {
  intro: {
    eyebrow: "AJOracle Editorial",
    title: "News",
    description:
      "A quiet editorial space for approved stories, reflections, behind-the-music material, and artist updates.",
  },
  featured: {
    eyebrow: "Featured Story",
    title: "Approved featured story pending",
    description:
      "The final story title, excerpt, publication details, destination, and imagery will complete this feature when approved editorial content is connected.",
    imageLabel: "Featured story image",
    imageDetail: "Approved editorial photography or artwork pending.",
    status: "Story details and article destination pending approval",
  },
  collection: {
    eyebrow: "Latest Stories",
    title: "Written moments, given room to breathe",
    description:
      "A scalable editorial structure for approved writing without inventing article titles, dates, authors, categories, or reading times.",
    lead: {
      id: "story-slot-01",
      position: "01",
      label: "Supporting story position 01",
      status: "Approved story title, excerpt, and metadata pending",
      imageLabel: "Supporting story image",
      imageDetail: "Approved editorial imagery pending.",
    },
    secondary: [
      {
        id: "story-slot-02",
        position: "02",
        label: "Secondary story position 02",
        status: "Approved story title and publication details pending",
        imageLabel: "Secondary story image 02",
        imageDetail: "Approved editorial imagery pending.",
      },
      {
        id: "story-slot-03",
        position: "03",
        label: "Secondary story position 03",
        status: "Approved story title and publication details pending",
        imageLabel: "Secondary story image 03",
        imageDetail: "Approved editorial imagery pending.",
      },
    ],
  },
} as const satisfies NewsPageContent;
