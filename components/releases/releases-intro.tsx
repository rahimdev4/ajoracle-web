import { Container } from "@/components/layout/container";
import { releasesPageContent } from "@/components/releases/releases-content";

export function ReleasesIntro() {
  const { intro } = releasesPageContent;

  return (
    <section
      aria-labelledby="releases-page-title"
      className="releases-intro relative isolate flex min-h-[38rem] items-end overflow-hidden pb-20 pt-32 sm:min-h-[42rem] sm:pb-24 sm:pt-36 lg:min-h-[46rem] lg:pb-28 lg:pt-40"
    >
      <Container className="relative z-10 grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-4">
            <p className="eyebrow tracking-[0.26em]">
              {intro.eyebrow}
            </p>
            <span aria-hidden="true" className="h-px w-12 bg-accent/65 sm:w-20" />
          </div>
          <h1
            id="releases-page-title"
            className="max-w-[10ch] font-serif text-[clamp(4.25rem,11vw,8.5rem)] font-medium leading-[0.75] tracking-[-0.06em] text-copy"
          >
            Latest <span className="text-accent-highlight italic">Releases</span>
          </h1>
        </div>

        <div className="border-l border-divider/80 pl-5 lg:col-span-3 lg:col-start-10 lg:mb-2 lg:pl-7">
          <p className="max-w-[30rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {intro.description}
          </p>
          <p className="mt-7 text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-copy-muted">
            Curated catalog · Visual shell
          </p>
        </div>
      </Container>
    </section>
  );
}
