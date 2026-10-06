import { aboutPageContent } from "@/components/about/about-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";

export function AboutIntro() {
  const { intro } = aboutPageContent;

  return (
    <section
      aria-labelledby="about-page-title"
      className="about-intro relative isolate overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-[50rem] lg:pb-28 lg:pt-40"
    >
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div className="lg:col-span-5 lg:pb-8">
          <div className="mb-6 flex items-center gap-4">
            <p className="eyebrow tracking-[0.26em]">
              {intro.eyebrow}
            </p>
            <span aria-hidden="true" className="h-px w-12 bg-accent/65" />
          </div>
          <h1
            id="about-page-title"
            className="font-serif text-[clamp(5rem,13vw,9.5rem)] font-medium leading-[0.72] tracking-[-0.065em] text-copy"
          >
            {intro.title}
          </h1>
          <p className="mt-8 max-w-[34rem] text-base leading-8 text-copy sm:text-lg sm:leading-9">
            {intro.description}
          </p>
          <p className="mt-8 max-w-sm border-l border-divider/80 pl-5 text-xs leading-6 text-copy-muted">
            {intro.status}
          </p>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7 lg:pl-5">
          <div
            aria-hidden="true"
            className="absolute -left-3 top-12 hidden h-[62%] w-px bg-gradient-to-b from-transparent via-accent/55 to-transparent lg:block"
          />
          <MediaPlaceholder
            tone="portrait"
            label={intro.mediaLabel}
            detail={intro.mediaDetail}
            className="aspect-[4/5] min-h-[31rem] w-full sm:min-h-[39rem] lg:min-h-[40rem]"
          />
        </div>
      </Container>
    </section>
  );
}
