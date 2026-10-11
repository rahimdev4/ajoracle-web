import { Container } from "@/components/layout/container";
import { videosPageContent } from "@/components/videos/videos-content";

export function VideosIntro() {
  const { intro } = videosPageContent;

  return (
    <section
      aria-labelledby="videos-page-title"
      className="bg-page pb-12 pt-32 sm:pb-14 sm:pt-36 lg:pb-16 lg:pt-40"
    >
      <Container>
        <div className="border-b border-divider/60 pb-10 sm:pb-12">
          <div className="flex items-center gap-4">
            <p className="eyebrow tracking-[0.26em]">{intro.eyebrow}</p>
            <span
              aria-hidden="true"
              className="h-px w-14 bg-accent/70 sm:w-20"
            />
          </div>
          <h1
            id="videos-page-title"
            className="mt-7 font-serif text-[clamp(4.5rem,11vw,7.5rem)] font-medium leading-[0.8] tracking-[-0.06em] text-copy sm:mt-8"
          >
            {intro.title}
          </h1>
          <p className="mt-4 max-w-[42rem] text-base leading-7 text-copy-muted sm:text-lg sm:leading-8">
            {intro.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
