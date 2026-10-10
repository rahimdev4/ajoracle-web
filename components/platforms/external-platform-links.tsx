import {
  SiAmazonmusic,
  SiApplemusic,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiYoutube,
  SiYoutubemusic,
} from "@icons-pack/react-simple-icons";

import type {
  ExternalPlatformId,
  ExternalPlatformLink,
} from "@/lib/external-platforms";

const platformMarks = {
  spotify: SiSpotify,
  "apple-music": SiApplemusic,
  "youtube-music": SiYoutubemusic,
  "amazon-music": SiAmazonmusic,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  youtube: SiYoutube,
} satisfies Record<ExternalPlatformId, typeof SiSpotify>;

type ExternalPlatformLinksProps = Readonly<{
  label: string;
  platforms: readonly ExternalPlatformLink[];
  className?: string;
  align?: "start" | "end-on-desktop";
}>;

export function ExternalPlatformLinks({
  label,
  platforms,
  className = "",
  align = "start",
}: ExternalPlatformLinksProps) {
  const desktopEndAlignment = align === "end-on-desktop";

  return (
    <div
      className={`${desktopEndAlignment ? "md:flex md:flex-col md:items-end md:text-right" : ""} ${className}`.trim()}
    >
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-copy-muted">
        {label}
      </p>
      <ul
        className={`mt-2 flex flex-wrap gap-1 ${desktopEndAlignment ? "md:justify-end" : ""}`.trim()}
      >
        {platforms.map((platform) => {
          const PlatformMark = platformMarks[platform.id];

          return (
            <li key={platform.id}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform.name} (opens in a new tab)`}
                className="inline-flex size-11 items-center justify-center text-copy transition-colors duration-300 hover:text-accent focus-visible:text-accent"
              >
                <PlatformMark
                  aria-hidden="true"
                  title=""
                  size={20}
                  className="shrink-0"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
