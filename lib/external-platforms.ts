export type ExternalPlatformId =
  | "spotify"
  | "apple-music"
  | "youtube-music"
  | "amazon-music"
  | "instagram"
  | "tiktok"
  | "youtube";

export type ExternalPlatformLink = Readonly<{
  id: ExternalPlatformId;
  name: string;
  href: `https://${string}`;
}>;

export const musicPlatforms = [
  {
    id: "spotify",
    name: "Spotify",
    href: "https://open.spotify.com/artist/3vRbhY9XA0l2G1WM9vIhnX",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/ajoracle/1863255213",
  },
  {
    id: "youtube-music",
    name: "YouTube Music",
    href: "https://music.youtube.com/channel/UCW9ydZZOAWmVsqMoc-0Qxtg",
  },
  {
    id: "amazon-music",
    name: "Amazon Music",
    href: "https://music.amazon.com/artists/B0GBQ41GMX/ajoracle",
  },
] as const satisfies readonly ExternalPlatformLink[];

export const socialPlatforms = [
  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/ajoracle/",
  },
  {
    id: "tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@realajoracle",
  },
  {
    id: "youtube",
    name: "YouTube",
    href: "https://www.youtube.com/@RealAJoracle",
  },
] as const satisfies readonly ExternalPlatformLink[];
