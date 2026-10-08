import Image from "next/image";
import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type OraclePickPlayControlProps = Readonly<{
  title: string;
}>;

function OraclePickPlayControl({ title }: OraclePickPlayControlProps) {
  return (
    <button
      type="button"
      disabled
      aria-label={`Play ${title} (audio unavailable)`}
      className="absolute left-1/2 top-1/2 z-10 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-not-allowed place-items-center rounded-full border border-accent/70 bg-page/90 text-copy backdrop-blur-[2px] transition duration-200 enabled:hover:scale-[1.03] enabled:hover:border-accent-highlight enabled:hover:bg-page/95 enabled:focus-visible:border-accent-highlight motion-reduce:transition-none sm:size-13 lg:size-14"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="ml-0.5 size-5 fill-current"
      >
        <path d="M4.75 2.9v10.2L13 8 4.75 2.9Z" />
      </svg>
    </button>
  );
}

export function OraclePicks() {
  const { oraclePicks } = homepageContent;

  return (
    <Section
      aria-labelledby="oracle-picks-title"
      className="oracle-picks-section relative isolate overflow-hidden"
    >
      <Image
        src={oraclePicks.background.src}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover object-center"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12">
          <SectionHeading
            id="oracle-picks-title"
            eyebrow={oraclePicks.eyebrow}
            title={oraclePicks.title}
            className="order-1 [&_h2]:max-w-[16ch] lg:col-span-8"
          />

          <ol className="order-2 mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:col-span-12 lg:grid-cols-3 lg:gap-3">
            {oraclePicks.picks.map((pick, index) => (
              <li
                key={pick.id}
                className={`md:last:col-span-2 md:last:w-[calc(50%_-_1rem)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-auto lg:last:justify-self-stretch ${
                  index === 1 ? "lg:mt-10" : ""
                }`}
              >
                <article>
                  <div className="relative aspect-square w-full overflow-hidden rounded-md sm:rounded-lg">
                    <Image
                      src={pick.artwork.src}
                      alt={pick.artwork.alt}
                      fill
                      sizes="(min-width: 1280px) 390px, (min-width: 1024px) 30vw, (min-width: 768px) 44vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                    <OraclePickPlayControl title={pick.title} />
                  </div>

                  <h3 className="mt-4 max-w-[18ch] font-serif text-2xl font-medium leading-[0.98] tracking-[-0.02em] text-copy sm:text-[1.625rem]">
                    {pick.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-copy-muted">
                    {pick.artist}
                  </p>
                </article>
              </li>
            ))}
          </ol>

          <div className="order-3 mt-12 flex lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:mt-0 lg:items-end lg:justify-end">
            <Link
              href={oraclePicks.action.href}
              className="group inline-flex min-h-11 items-center gap-3 border-b border-accent/70 py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:border-accent-highlight hover:text-accent-highlight"
            >
              {oraclePicks.action.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
