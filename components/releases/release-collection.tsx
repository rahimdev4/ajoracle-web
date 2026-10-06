import type { CSSProperties } from "react";

import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { releasesPageContent } from "@/components/releases/releases-content";

const releaseLayoutCycle = [
  { className: "lg:col-span-5", row: 1 },
  { className: "lg:col-span-4 lg:col-start-9 lg:mt-28", row: 1 },
  { className: "lg:col-span-4 lg:col-start-2 lg:mt-6", row: 2 },
  { className: "lg:col-span-5 lg:col-start-7 lg:mt-24", row: 2 },
] as const;

export function ReleaseCollection() {
  const { collection } = releasesPageContent;

  return (
    <Section
      aria-labelledby="release-collection-title"
      className="release-collection-section relative isolate overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 tracking-[0.24em]">
              {collection.eyebrow}
            </p>
            <h2
              id="release-collection-title"
              className="max-w-[14ch] font-serif text-[clamp(3rem,6vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
            >
              {collection.title}
            </h2>
          </div>
          <p className="max-w-[34rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8 lg:col-span-4 lg:col-start-9">
            {collection.description}
          </p>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-20 lg:mt-24 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-28 xl:gap-x-14">
          {collection.slots.map((release, index) => {
            const layout = releaseLayoutCycle[index % releaseLayoutCycle.length];
            const cycle = Math.floor(index / releaseLayoutCycle.length);
            const rowStart = cycle * 2 + layout.row;

            return (
              <li
                key={release.id}
                className={`release-collection-item ${layout.className}`}
                style={{ "--release-row-start": rowStart } as CSSProperties}
              >
                <MediaPlaceholder
                  tone="release"
                  label={`${release.label} artwork`}
                  detail="Approved catalog artwork pending."
                  className="aspect-square w-full"
                />

                <div className="mt-5 grid grid-cols-[auto_1fr] gap-5 border-t border-divider/60 pt-5 sm:gap-6">
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent-highlight">
                    {release.position}
                  </span>
                  <div>
                    <h3 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[-0.02em] text-copy">
                      {release.label}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-copy-muted">
                      {release.status}
                    </p>
                    <p className="mt-4 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-copy-muted">
                      Listening link pending
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-24 flex items-center gap-5 border-t border-divider/60 pt-8 sm:mt-32 lg:mt-40">
          <span aria-hidden="true" className="h-px flex-1 bg-divider/60" />
          <p className="text-center text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-copy-muted">
            Approved catalog content pending
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-divider/60" />
        </div>
      </Container>
    </Section>
  );
}
