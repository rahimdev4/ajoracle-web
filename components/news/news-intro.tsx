import { Container } from "@/components/layout/container";
import { newsPageContent } from "@/components/news/news-content";

export function NewsIntro() {
  const { intro } = newsPageContent;

  return (
    <section
      aria-labelledby="news-page-title"
      className="news-intro relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <Container className="relative z-10">
        <div className="pt-7 sm:pt-9">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-8 tracking-[0.26em]">
                {intro.eyebrow}
              </p>
              <h1
                id="news-page-title"
                className="font-serif text-[clamp(4.75rem,11vw,8.5rem)] font-medium leading-[0.74] tracking-[-0.06em] text-copy"
              >
                {intro.title}
              </h1>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pb-1">
              <p className="max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
                {intro.description}
              </p>
              <div className="mt-7 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-accent/65" />
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
                  Editorial index
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
