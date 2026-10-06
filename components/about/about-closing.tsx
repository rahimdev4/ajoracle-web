import { aboutPageContent } from "@/components/about/about-content";
import { Container } from "@/components/layout/container";

export function AboutClosing() {
  const { closing } = aboutPageContent;

  return (
    <section
      aria-labelledby="about-closing-title"
      className="about-closing relative isolate overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <Container className="relative z-10">
        <div className="grid gap-10 border-y border-divider/60 py-12 sm:py-16 lg:grid-cols-12 lg:items-end lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-5 tracking-[0.24em]">
              {closing.eyebrow}
            </p>
            <h2
              id="about-closing-title"
              className="max-w-[14ch] font-serif text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {closing.title}
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
              {closing.description}
            </p>
            <p className="mt-7 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
              {closing.status}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
