type NewsPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  featured: {
    eyebrow: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    description: string;
  };
}>;

export const newsPageContent = {
  intro: {
    eyebrow: "AJOracle Editorial",
    title: "News",
    description: "Stories, reflections, and the moments behind the music.",
  },
  featured: {
    eyebrow: "Featured Story",
  },
  collection: {
    eyebrow: "Latest Stories",
    title: "Written moments, given room to breathe",
    description:
      "Stories and reflections exploring music, faith, perseverance, and the moments that shape the work.",
  },
} as const satisfies NewsPageContent;
