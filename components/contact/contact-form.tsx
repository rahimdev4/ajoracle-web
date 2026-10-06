import { contactPageContent } from "@/components/contact/contact-content";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function ContactForm() {
  const { composition, form } = contactPageContent;

  return (
    <Section
      aria-labelledby="contact-composition-title"
      className="contact-main-section relative isolate overflow-hidden"
    >
      <Container className="relative z-10 grid gap-16 lg:grid-cols-12 lg:gap-10 xl:gap-16">
        <div className="lg:col-span-5 lg:pt-10">
          <p className="eyebrow mb-5 tracking-[0.24em]">
            {composition.eyebrow}
          </p>
          <h2
            id="contact-composition-title"
            className="max-w-[11ch] font-serif text-[clamp(3.25rem,6vw,5.5rem)] font-medium leading-[0.87] tracking-[-0.04em] text-copy"
          >
            {composition.title}
          </h2>
          <p className="mt-7 max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {composition.description}
          </p>

          <div className="mt-12 max-w-md border-t border-divider/60 pt-6">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-copy-muted">
              Content status
            </p>
            <p className="mt-3 text-xs leading-6 text-copy-muted">
              {composition.contentStatus}
            </p>
          </div>
        </div>

        <div className="contact-form-shell lg:col-span-6 lg:col-start-7">
          <form
            aria-labelledby="contact-form-title"
            aria-describedby="contact-form-description contact-form-status"
          >
            <div className="border-b border-divider/70 pb-8 sm:pb-10">
              <p className="eyebrow mb-4 tracking-[0.22em]">
                {form.eyebrow}
              </p>
              <h3
                id="contact-form-title"
                className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[0.9] tracking-[-0.035em] text-copy"
              >
                {form.title}
              </h3>
              <p
                id="contact-form-description"
                className="mt-5 max-w-[36rem] text-sm leading-7 text-copy-muted"
              >
                {form.description}
              </p>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-name">
                Name
                <span aria-hidden="true" className="text-accent-highlight">
                  *
                </span>
                <span className="sr-only"> (required)</span>
              </label>
              <input
                className="contact-form-control"
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-email">
                Email
                <span aria-hidden="true" className="text-accent-highlight">
                  *
                </span>
                <span className="sr-only"> (required)</span>
              </label>
              <input
                className="contact-form-control"
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-message">
                Message
                <span aria-hidden="true" className="text-accent-highlight">
                  *
                </span>
                <span className="sr-only"> (required)</span>
              </label>
              <textarea
                className="contact-form-control contact-form-message"
                id="contact-message"
                name="message"
                rows={7}
                required
              />
            </div>

            <div className="flex flex-col gap-5 border-t border-divider/70 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <button
                type="submit"
                disabled
                aria-describedby="contact-form-status"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 bg-accent px-6 py-3 text-sm font-bold text-page disabled:cursor-not-allowed disabled:bg-accent/55 disabled:text-page/80"
              >
                {form.submitLabel}
                <span aria-hidden="true">→</span>
              </button>

              <p
                id="contact-form-status"
                className="max-w-sm text-xs leading-6 text-copy-muted sm:text-right"
              >
                <span className="block font-semibold uppercase tracking-[0.16em] text-copy">
                  {form.statusLabel}
                </span>
                <span className="mt-1 block">{form.statusDescription}</span>
              </p>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
