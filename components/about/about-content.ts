type AboutImage = Readonly<{
  src: `/${string}`;
  alt: string;
}>;

type AboutNarrative = Readonly<{
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: AboutImage;
}>;

type AboutPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  artistStory: AboutNarrative;
  memorial: AboutNarrative;
  familyLegacy: AboutNarrative & {
    closingLines: readonly string[];
  };
}>;

// Existing public-site copy, retained as a small website-owned content boundary
// and pending final client approval. The duplicated memorial paragraph from the
// legacy page is intentionally not repeated in the family section.
export const aboutPageContent = {
  intro: {
    eyebrow: "About",
    title: "About AJOracle",
    description:
      "A singer, songwriter, and storyteller using music to inspire awareness, empathy, and meaningful conversation.",
  },
  artistStory: {
    eyebrow: "The Artist",
    title: "The Story Behind the Voice",
    paragraphs: [
      "AJ Oracle is a singer-songwriter and storyteller whose work explores humanity, purpose, and connection through music and advocacy.",
      "Rooted in faith and Akan heritage, she bridges creativity, culture, and community as a human-rights activist, founder, and mother.",
    ],
    image: {
      src: "/images/about/artist-story.webp",
      alt: "AJOracle writing in a notebook",
    },
  },
  memorial: {
    eyebrow: "In Loving Memory",
    title: "In Loving Memory of My Brother, Alfred",
    paragraphs: [
      "My brother Alfred is the reason AJ Oracle exists. Before the music, before the voice, before the purpose, there was my brother. He stood beside me in seasons when life was heavy and uncertain. His love, belief, and quiet strength carried me through moments that could have broken me.",
      "Though he is no longer in this world, he has never left my life. I carry him in my prayers, in my work, and in the courage it takes to keep going. His memory is sacred to me. I honor him not in passing, but in everything I create. This space is dedicated to my brother alone, with reverence, gratitude, and eternal love.",
    ],
    image: {
      src: "/images/about/alfred-tribute.webp",
      alt: "AJOracle with her brother Alfred beneath an in loving memory inscription",
    },
  },
  familyLegacy: {
    eyebrow: "Family, Love, and Legacy",
    title: "Family, Love, and Legacy",
    paragraphs: [
      "My family is my heart. We are bound by love, faith, and shared history. This space honors the people who raised me, walked with me, and continue to stand beside me. Parents, siblings, children, relatives, and generations whose prayers and sacrifices made our lives possible.",
      "Through joy and loss, through healing and endurance, our family remains connected. What was given to us in love is carried forward in how we live, how we care for one another, and how we honor those who came before us.",
    ],
    closingLines: [
      "This is family.",
      "This is love that endures.",
      "This is legacy.",
    ],
    image: {
      src: "/images/about/family-legacy.webp",
      alt: "AJOracle beside a young child in the snow",
    },
  },
} as const satisfies AboutPageContent;
