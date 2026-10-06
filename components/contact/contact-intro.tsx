import { contactPageContent } from "@/components/contact/contact-content";
import { Container } from "@/components/layout/container";

export function ContactIntro() {
  const { intro } = contactPageContent;

  return (
    <section
      aria-labelledby="contact-page-title"
      className="contact-intro relative isolate flex min-h-[31rem] items-end overflow-hidden pb-16 pt-32 sm:min-h-[35rem] sm:pb-20 sm:pt-36 lg:min-h-[39rem] lg:pb-24 lg:pt-40"
    >
      <Container className="relative z-10">
        <div className="grid gap-10 border-t border-divider/60 pt-7 sm:pt-9 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 tracking-[0.26em]">
              {intro.eyebrow}
            </p>
            <h1
              id="contact-page-title"
              className="font-serif text-[clamp(4.75rem,11vw,8.5rem)] font-medium leading-[0.74] tracking-[-0.06em] text-copy"
            >
              {intro.title}
            </h1>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pb-1">
            <p className="max-w-[32rem] text-base leading-8 text-copy sm:text-lg sm:leading-9">
              {intro.description}
            </p>
            <div className="mt-7 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-accent/65" />
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
                Quiet connection · Structural shell
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
