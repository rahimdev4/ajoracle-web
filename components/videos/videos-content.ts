type VideoSlot = Readonly<{
  id: string;
  position: string;
  label: string;
  status: string;
}>;

type VideosPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    posterLabel: string;
    availability: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    description: string;
    slots: readonly VideoSlot[];
  };
}>;

// Videos V1 visual-shell content only. Video titles, posters, metadata, and
// playback destinations remain explicitly pending until approved content exists.
export const videosPageContent = {
  intro: {
    eyebrow: "AJOracle Visuals",
    title: "Videos",
    description:
      "A cinematic home for approved AJOracle visual work, with space for each story to unfold.",
  },
  featured: {
    eyebrow: "Featured Video",
    title: "Approved featured video pending",
    description:
      "The final poster, title, context, and viewing destination will complete this feature when approved video content is connected.",
    posterLabel: "Featured video poster",
    availability: "Playback destination pending approval",
  },
  collection: {
    eyebrow: "Video Collection",
    title: "Visual stories, presented with intention",
    description:
      "Three structural positions establish a spacious media rhythm without inventing titles, dates, descriptions, or platform links.",
    slots: [
      {
        id: "video-slot-01",
        position: "01",
        label: "Video position 01",
        status: "Approved title and poster pending",
      },
      {
        id: "video-slot-02",
        position: "02",
        label: "Video position 02",
        status: "Approved title and poster pending",
      },
      {
        id: "video-slot-03",
        position: "03",
        label: "Video position 03",
        status: "Approved title and poster pending",
      },
    ],
  },
} as const satisfies VideosPageContent;
