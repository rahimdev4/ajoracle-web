"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm } from "@/app/contact/actions";
import { contactPageContent } from "@/components/contact/contact-content";
import { Container } from "@/components/layout/container";
import type { ContactActionState, ContactField } from "@/lib/contact/types";

const initialState: ContactActionState = {
  status: "idle",
  message: "",
};

function SubmitButton({ label }: Readonly<{ label: string }>) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex min-h-13 w-full items-center justify-center gap-4 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold text-page transition-colors duration-300 hover:bg-accent-highlight disabled:cursor-wait disabled:bg-accent/60 disabled:text-page/75"
    >
      {pending ? "Sending…" : label}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
      >
        →
      </span>
    </button>
  );
}

function FieldError({
  field,
  state,
}: Readonly<{ field: ContactField; state: ContactActionState }>) {
  const message = state.fieldErrors?.[field];

  if (!message) {
    return null;
  }

  return (
    <p id={`contact-${field}-error`} className="mt-2 text-sm text-danger">
      {message}
    </p>
  );
}

export function ContactForm() {
  const { form } = contactPageContent;
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <section
      aria-labelledby="contact-form-title"
      className="bg-page pb-20 pt-2 sm:pb-24 lg:pb-28 lg:pt-4"
    >
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="relative isolate aspect-square min-w-0 w-full max-w-full overflow-hidden rounded-md border border-divider/80 bg-panel">
            <Image
              src="/images/contact/contact-pag-img.webp"
              alt="AJOracle seated in a recording studio beside a microphone"
              fill
              sizes="(min-width: 1280px) 610px, (min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
              className="size-full max-w-full object-contain"
              priority
            />
          </div>

          <div className="min-w-0 w-full max-w-full rounded-md border border-divider/80 bg-page-secondary/30 p-5 sm:p-7 lg:p-8 xl:p-10">
            <div className="border-b border-divider/70 pb-6 sm:pb-7">
              <h2
                id="contact-form-title"
                className="font-serif text-[clamp(2.5rem,4.5vw,3.75rem)] font-medium leading-[0.9] tracking-[-0.035em] text-copy"
              >
                {form.title}
              </h2>
              <p
                id="contact-form-description"
                className="mt-4 max-w-[36rem] text-sm leading-7 text-copy-muted"
              >
                {form.description}
              </p>
            </div>

            <form
              ref={formRef}
              action={formAction}
              aria-describedby="contact-form-description contact-form-status"
              noValidate={false}
              className="pt-6 sm:pt-7"
            >
              <div
                aria-hidden="true"
                className="absolute left-[-10000px] top-auto size-px overflow-hidden"
              >
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-5 sm:space-y-6">
                <div>
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
                    placeholder="Your name"
                    minLength={2}
                    maxLength={100}
                    required
                    aria-invalid={Boolean(state.fieldErrors?.name)}
                    aria-describedby={
                      state.fieldErrors?.name ? "contact-name-error" : undefined
                    }
                  />
                  <FieldError field="name" state={state} />
                </div>

                <div>
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
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={254}
                    required
                    aria-invalid={Boolean(state.fieldErrors?.email)}
                    aria-describedby={
                      state.fieldErrors?.email ? "contact-email-error" : undefined
                    }
                  />
                  <FieldError field="email" state={state} />
                </div>

                <div>
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
                    rows={6}
                    placeholder="Share your message, idea, or inquiry…"
                    minLength={10}
                    maxLength={5000}
                    required
                    aria-invalid={Boolean(state.fieldErrors?.message)}
                    aria-describedby={
                      state.fieldErrors?.message
                        ? "contact-message-error"
                        : undefined
                    }
                  />
                  <FieldError field="message" state={state} />
                </div>
              </div>

              <div className="mt-7">
                <SubmitButton label={form.submitLabel} />
              </div>

              <p
                id="contact-form-status"
                role="status"
                aria-live="polite"
                className={`mt-4 min-h-6 text-sm leading-6 ${
                  state.status === "success"
                    ? "text-positive"
                    : state.status === "error"
                      ? "text-danger"
                      : "text-copy-muted"
                }`}
              >
                {state.message}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
