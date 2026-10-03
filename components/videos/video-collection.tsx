import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { videosPageContent } from "@/components/videos/videos-content";

const videoLayouts = [
  {
    media: "lg:col-span-8",
    copy: "lg:col-span-3 lg:col-start-10",
  },
  {
    media: "lg:col-span-7 lg:col-start-6",
    copy: "lg:col-span-4 lg:col-start-1 lg:row-start-1",
  },
  {
    media: "lg:col-span-9",
    copy: "lg:col-span-3 lg:col-start-10",
  },
] as const;

export function VideoCollection() {
  const { collection } = videosPageContent;

  return (
    <Section
      aria-labelledby="video-collection-title"
      className="video-collection-section relative isolate overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
              {collection.eyebrow}
            </p>
            <h2
              id="video-collection-title"
              className="max-w-[14ch] font-serif text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {collection.title}
            </h2>
          </div>
          <p className="max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:col-start-9">
            {collection.description}
          </p>
        </div>

        <ol className="mt-16 divide-y divide-divider/60 border-y border-divider/60 sm:mt-20 lg:mt-24">
          {collection.slots.map((video, index) => {
            const layout = videoLayouts[index];

            return (
              <li
                key={video.id}
                className="grid gap-7 py-14 first:pt-8 last:pb-8 sm:gap-9 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-28"
              >
                <div className={layout.media}>
                  <MediaPlaceholder
                    tone="video"
                    label={`${video.label} poster`}
                    detail="Approved 16:9 poster or selected frame pending."
                    className="aspect-video w-full"
                  />
                </div>

                <div className={layout.copy}>
                  <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-accent-highlight">
                    {video.position}
                  </p>
                  <h3 className="mt-4 max-w-[15ch] font-serif text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.025em] text-copy">
                    {video.label}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-copy-muted">
                    {video.status}
                  </p>
                  <p className="mt-6 border-t border-divider/60 pt-4 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
                    Viewing destination pending
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
