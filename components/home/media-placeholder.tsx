type PlaceholderTone =
  | "portrait"
  | "release"
  | "video"
  | "editorial"
  | "screen";

type MediaPlaceholderProps = Readonly<{
  label: string;
  detail: string;
  tone: PlaceholderTone;
  className?: string;
}>;

export function MediaPlaceholder({
  label,
  detail,
  tone,
  className = "",
}: MediaPlaceholderProps) {
  return (
    <figure
      data-placeholder-tone={tone}
      className={`media-placeholder overflow-hidden border border-divider/70 bg-panel ${className}`.trim()}
    >
      <div aria-hidden="true" className="media-placeholder__mark">
        <span />
        <span />
      </div>

      <figcaption className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
        <span className="mb-2 text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight">
          Media placeholder
        </span>
        <span className="font-serif text-[clamp(1.35rem,3vw,2rem)] leading-none text-copy">
          {label}
        </span>
        <span className="mt-2 max-w-xs text-xs leading-relaxed text-copy-muted">
          {detail}
        </span>
      </figcaption>
    </figure>
  );
}
