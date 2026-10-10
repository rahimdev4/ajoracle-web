import Image from "next/image";

import { Container } from "@/components/layout/container";
import { releasesPageContent } from "@/components/releases/releases-content";

export function ReleasesIntro() {
  const { intro } = releasesPageContent;

  return (
    <section
      aria-labelledby="releases-page-title"
      className="relative isolate flex min-h-[27rem] items-center overflow-hidden pb-16 pt-28 sm:min-h-[29rem] sm:pb-20 sm:pt-32 lg:min-h-[30rem] lg:pb-20 lg:pt-32"
    >
      <Image
        src={intro.background.src}
        alt={intro.background.alt}
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[62%_center] sm:object-[68%_center] lg:object-[72%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,6,8,0.97)_0%,rgba(5,6,8,0.85)_38%,rgba(5,6,8,0.32)_67%,rgba(5,6,8,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,6,8,0.42)_0%,rgba(5,6,8,0.06)_42%,#07080b_100%)]"
      />

      <Container className="relative z-10">
        <div className="max-w-[44rem]">
          <div className="mb-4 flex items-center gap-4 sm:mb-5">
            <p className="eyebrow tracking-[0.26em]">{intro.eyebrow}</p>
            <span
              aria-hidden="true"
              className="h-px w-14 bg-accent/70 sm:w-24"
            />
          </div>
          <h1
            id="releases-page-title"
            className="max-w-[8ch] font-serif text-[clamp(4.5rem,10vw,8.75rem)] font-medium leading-[0.72] tracking-[-0.06em] text-copy"
          >
            Latest <span className="text-accent-highlight">Releases</span>
          </h1>
          <p className="mt-7 max-w-[30rem] text-base leading-7 text-copy-muted sm:mt-8 sm:text-lg sm:leading-8">
            {intro.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
