import { aboutPageContent } from "@/components/about/about-content";
import { Container } from "@/components/layout/container";

export function AboutIntro() {
  const { intro } = aboutPageContent;

  return (
    <section
      aria-labelledby="about-page-title"
      className="bg-page pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40"
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
            id="about-page-title"
            className="mt-6 max-w-[15ch] font-serif text-[clamp(3.75rem,9vw,6.5rem)] font-medium leading-[0.82] tracking-[-0.055em] text-copy sm:mt-7"
          >
            {intro.title}
          </h1>
          <p className="mt-5 max-w-[42rem] text-base leading-7 text-copy-muted sm:text-lg sm:leading-8">
            {intro.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
