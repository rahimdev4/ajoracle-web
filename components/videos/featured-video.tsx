import { Container } from "@/components/layout/container";
import { VideoPlayer } from "@/components/videos/video-player";
import { videosPageContent } from "@/components/videos/videos-content";
import { WatchOnYoutubeLink } from "@/components/videos/watch-on-youtube-link";

export function FeaturedVideo() {
  const { featured } = videosPageContent;

  return (
    <section
      aria-labelledby="videos-featured-title"
      className="bg-page pb-16 sm:pb-24"
    >
      <Container>
        <div className="flex items-center gap-4">
          <p className="eyebrow tracking-[0.24em]">{featured.eyebrow}</p>
          <span
            aria-hidden="true"
            className="h-px w-14 bg-accent/65 sm:w-20"
          />
        </div>

        <VideoPlayer
          className="mt-6 rounded-md sm:mt-8 sm:rounded-lg"
          title={featured.title}
          poster={featured.poster}
          videoId={featured.videoId}
          sizes="(min-width: 1280px) 1230px, (min-width: 640px) calc(100vw - 3.5rem), calc(100vw - 2.5rem)"
        />

        <div className="mt-5 max-w-[58rem] sm:mt-6">
          <h2
            id="videos-featured-title"
            className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[0.96] tracking-[-0.035em] text-copy"
          >
            {featured.title}
          </h2>
          <p className="mt-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
            By {featured.artist}
          </p>
          <div className="mt-4">
            <WatchOnYoutubeLink href={featured.youtubeUrl} />
          </div>
        </div>
      </Container>
    </section>
  );
}
