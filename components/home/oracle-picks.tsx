import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function OraclePicks() {
  const { oraclePicks } = homepageContent;

  return (
    <Section
      aria-labelledby="oracle-picks-title"
      className="oracle-picks-section relative isolate overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            id="oracle-picks-title"
            eyebrow={oraclePicks.eyebrow}
            title={oraclePicks.title}
            description={oraclePicks.description}
            className="lg:col-span-6"
          />
          <div className="flex items-end lg:col-span-3 lg:col-start-10 lg:justify-end">
            <Link
              href={oraclePicks.action.href}
              className="group inline-flex min-h-11 items-center gap-3 py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight"
            >
              {oraclePicks.action.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          {oraclePicks.slots.map((pick, index) => (
            <li
              key={pick.id}
              className={`sm:last:col-span-2 lg:col-span-4 lg:last:col-span-4 ${
                index === 1 ? "lg:mt-16" : ""
              }`}
            >
              <MediaPlaceholder
                tone="release"
                label={`${pick.label} artwork`}
                detail="Approved curated artwork will replace this square."
                className="aspect-square w-full"
              />
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-divider/60 pt-4">
                <div>
                  <h3 className="font-serif text-2xl leading-none text-copy">
                    {pick.label}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-copy-muted">
                    {pick.status}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
