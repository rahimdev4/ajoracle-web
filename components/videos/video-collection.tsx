import { Container } from "@/components/layout/container";
import { VideoPlayer } from "@/components/videos/video-player";
import { videosPageContent } from "@/components/videos/videos-content";
import { WatchOnYoutubeLink } from "@/components/videos/watch-on-youtube-link";

export function VideoCollection() {
  const { collection } = videosPageContent;

  return (
    <section
      aria-labelledby="video-collection-title"
      className="bg-page pb-16 sm:pb-20 lg:pb-24"
    >
      <Container>
        <div className="flex items-center gap-4 border-t border-divider/60 pt-10 sm:pt-12">
          <h2
            id="video-collection-title"
            className="eyebrow tracking-[0.24em]"
          >
            {collection.title}
          </h2>
          <span
            aria-hidden="true"
            className="h-px w-14 bg-accent/65 sm:w-20"
          />
        </div>

        <ol className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:mt-12 lg:gap-x-10 lg:gap-y-20">
          {collection.videos.map((video) => (
            <li key={video.id}>
              <article>
                <VideoPlayer
                  className="rounded-md sm:rounded-lg"
                  title={video.title}
                  poster={video.poster}
                  videoId={video.videoId}
                  sizes="(min-width: 1280px) 595px, (min-width: 768px) calc(50vw - 3rem), calc(100vw - 2.5rem)"
                />

                <h3 className="mt-5 max-w-[24ch] font-serif text-[clamp(1.625rem,2.5vw,2.125rem)] font-medium leading-[1.05] tracking-[-0.025em] text-copy">
                  {video.title}
                </h3>
                <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
                  By {video.artist}
                </p>
                <div className="mt-3">
                  <WatchOnYoutubeLink href={video.youtubeUrl} />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
