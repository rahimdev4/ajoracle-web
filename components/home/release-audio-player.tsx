type ReleaseAudioPlayerProps = Readonly<{
  releaseTitle: string;
}>;

// TODO: Prayer audio source will be connected to the approved Cloudflare-hosted
// asset during the media integration phase.
export function ReleaseAudioPlayer({
  releaseTitle,
}: ReleaseAudioPlayerProps) {
  return (
    <div
      role="group"
      aria-label={`${releaseTitle} audio player`}
      className="mt-8 flex w-full max-w-[32rem] items-center gap-4"
    >
      <button
        type="button"
        disabled
        aria-label={`Play ${releaseTitle} (audio unavailable)`}
        className="grid size-11 shrink-0 cursor-not-allowed place-items-center rounded-full border border-accent/50 text-accent/75"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="ml-0.5 size-4 fill-current"
        >
          <path d="M4.75 2.9v10.2L13 8 4.75 2.9Z" />
        </svg>
      </button>

      <span aria-hidden="true" className="h-px min-w-0 flex-1 bg-divider" />

      <span className="sr-only">Duration unavailable</span>
      <span
        aria-hidden="true"
        className="shrink-0 text-xs font-medium tabular-nums tracking-[0.08em] text-copy-muted"
      >
        --:--
      </span>
    </div>
  );
}
