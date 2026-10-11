import { SiYoutube } from "@icons-pack/react-simple-icons";

type WatchOnYoutubeLinkProps = Readonly<{
  href: `https://www.youtube.com/watch?v=${string}`;
}>;

export function WatchOnYoutubeLink({ href }: WatchOnYoutubeLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-11 items-center gap-3 border-b border-accent/60 py-2 text-xs font-semibold text-copy-muted transition-colors duration-300 hover:border-accent-highlight hover:text-copy focus-visible:text-copy"
    >
      <SiYoutube aria-hidden="true" title="" size={18} className="text-copy" />
      Watch on YouTube
      <span
        aria-hidden="true"
        className="text-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
      >
        →
      </span>
    </a>
  );
}
