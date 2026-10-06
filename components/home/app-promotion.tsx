import { homepageContent } from "@/components/home/homepage-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function AppPromotion() {
  const { appPromotion } = homepageContent;

  return (
    <Section
      aria-labelledby="app-promotion-title"
      className="app-promotion-section relative isolate overflow-hidden bg-page-secondary/55"
    >
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5 tracking-[0.24em]">
            {appPromotion.eyebrow}
          </p>
          <h2
            id="app-promotion-title"
            className="max-w-[11ch] font-serif text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-copy"
          >
            {appPromotion.title}
          </h2>
          <p className="mt-7 max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {appPromotion.description}
          </p>
          <p className="mt-7 inline-flex border border-divider/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-copy-muted">
            Store links pending confirmation
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[38rem] items-end justify-center gap-3 px-4 sm:gap-6 lg:col-span-7 lg:justify-end">
          <MediaPlaceholder
            tone="screen"
            label="App screen 01"
            detail="Current app screenshot pending."
            className="aspect-[9/19] w-[44%] max-w-[15rem] rounded-[1.75rem] sm:rounded-[2.25rem]"
          />
          <MediaPlaceholder
            tone="screen"
            label="App screen 02"
            detail="Current app screenshot pending."
            className="mb-10 aspect-[9/19] w-[44%] max-w-[15rem] rounded-[1.75rem] sm:mb-16 sm:rounded-[2.25rem]"
          />
        </div>
      </Container>
    </Section>
  );
}
