export type VideoPoster = Readonly<{
  src: `/${string}` | `https://${string}`;
  fallbackSrc?: `https://${string}`;
  alt: string;
}>;

export type VideoRecord = Readonly<{
  id: string;
  videoId: string;
  title: string;
  youtubeTitle: string;
  artist: "AJOracle";
  poster: VideoPoster;
  youtubeUrl: `https://www.youtube.com/watch?v=${string}`;
}>;

type VideosPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  featured: VideoRecord & {
    eyebrow: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    videos: readonly VideoRecord[];
  };
}>;

// Static production content boundary. A future CMS query can return this
// website-facing shape without changing the presentation components.
export const videosPageContent = {
  intro: {
    eyebrow: "AJOracle Visuals",
    title: "Videos",
    description: "Music, performances, and visual stories from AJOracle.",
  },
  featured: {
    id: "the-crucifixion-of-jesus-christ-explained-part-two",
    videoId: "llhUMsckUw8",
    eyebrow: "Featured Video",
    title: "The Crucifixion of Jesus Christ Explained Part Two",
    youtubeTitle:
      "Title: The Crucifixion of Jesus Christ Explained Part Two | What Jesus Finished at the Cross",
    artist: "AJOracle",
    poster: {
      src: "/images/videos/crucifixion-part-two-thumbnail.webp",
      alt: "Thumbnail for The Crucifixion of Jesus Christ Explained Part Two",
    },
    youtubeUrl: "https://www.youtube.com/watch?v=llhUMsckUw8",
  },
  collection: {
    eyebrow: "More Visual Stories",
    title: "More Visual Stories",
    videos: [
      {
        id: "prayer",
        videoId: "1nrpwDbiqus",
        title: "Prayer",
        youtubeTitle:
          "Prayer — streaming now on Spotify, Apple Music, and Amazon Music.",
        artist: "AJOracle",
        poster: {
          src: "https://i.ytimg.com/vi/1nrpwDbiqus/maxresdefault.jpg",
          fallbackSrc: "https://i.ytimg.com/vi/1nrpwDbiqus/sddefault.jpg",
          alt: "Thumbnail for Prayer by AJOracle",
        },
        youtubeUrl: "https://www.youtube.com/watch?v=1nrpwDbiqus",
      },
      {
        id: "our-father-in-heaven",
        videoId: "KzMo03iNEjs",
        title: "Our Father in Heaven",
        youtubeTitle: "Our Father in Heaven (Official Music Video) – AJ Oracle",
        artist: "AJOracle",
        poster: {
          src: "https://i.ytimg.com/vi/KzMo03iNEjs/maxresdefault.jpg",
          fallbackSrc: "https://i.ytimg.com/vi/KzMo03iNEjs/sddefault.jpg",
          alt: "Thumbnail for Our Father in Heaven by AJOracle",
        },
        youtubeUrl: "https://www.youtube.com/watch?v=KzMo03iNEjs",
      },
      {
        id: "mama-africa-version-2",
        videoId: "KZvcDR3-umk",
        title: "Mama Africa (Version 2)",
        youtubeTitle: "Mama Africa (Version 2) – AJ Oracle",
        artist: "AJOracle",
        poster: {
          src: "https://i.ytimg.com/vi/KZvcDR3-umk/maxresdefault.jpg",
          fallbackSrc: "https://i.ytimg.com/vi/KZvcDR3-umk/sddefault.jpg",
          alt: "Thumbnail for Mama Africa Version 2 by AJOracle",
        },
        youtubeUrl: "https://www.youtube.com/watch?v=KZvcDR3-umk",
      },
      {
        id: "hallelujah",
        videoId: "5POv1mei66c",
        title: "Hallelujah",
        youtubeTitle: "Hallelujah | AJ Oracle | (Official Cinematic Music Video)",
        artist: "AJOracle",
        poster: {
          src: "https://i.ytimg.com/vi/5POv1mei66c/maxresdefault.jpg",
          fallbackSrc: "https://i.ytimg.com/vi/5POv1mei66c/sddefault.jpg",
          alt: "Thumbnail for Hallelujah by AJOracle",
        },
        youtubeUrl: "https://www.youtube.com/watch?v=5POv1mei66c",
      },
    ],
  },
} as const satisfies VideosPageContent;
