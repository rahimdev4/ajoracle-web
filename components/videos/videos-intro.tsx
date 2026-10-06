import { Container } from "@/components/layout/container";
import { videosPageContent } from "@/components/videos/videos-content";

export function VideosIntro() {
  const { intro } = videosPageContent;

  return (
    <section
      aria-labelledby="videos-page-title"
      className="videos-intro relative isolate flex min-h-[36rem] items-center overflow-hidden pb-20 pt-32 sm:min-h-[40rem] sm:pb-24 sm:pt-36 lg:min-h-[44rem] lg:pb-28 lg:pt-40"
    >
      <Container className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6 tracking-[0.26em]">
            {intro.eyebrow}
          </p>
          <h1
            id="videos-page-title"
            className="font-serif text-[clamp(5rem,14vw,10rem)] font-medium leading-[0.7] tracking-[-0.065em] text-copy"
          >
            Videos
          </h1>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:pb-1">
          <div className="mb-6 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-accent/65" />
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-copy-muted">
              Moving image · Visual shell
            </p>
          </div>
          <p className="max-w-[32rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {intro.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
