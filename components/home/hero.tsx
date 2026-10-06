import Link from "next/link";

import { Container } from "@/components/layout/container";
import { homepageContent } from "@/components/home/homepage-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";

export function Hero() {
  const { hero } = homepageContent;

  return (
    <section
      aria-labelledby="home-hero-title"
      className="home-hero relative isolate overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:min-h-svh lg:pb-20 lg:pt-36"
    >
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5 lg:pb-8">
          <p className="eyebrow mb-6 tracking-[0.26em]">
            {hero.eyebrow}
          </p>
          <h1
            id="home-hero-title"
            className="font-serif text-[clamp(4.75rem,14vw,10rem)] font-medium leading-[0.72] tracking-[-0.065em] text-copy"
          >
            AJ<span className="text-accent-highlight italic">Oracle</span>
          </h1>
          <p className="mt-8 max-w-[32rem] text-base leading-8 text-copy-muted sm:text-lg">
            {hero.description}
          </p>
          <Link
            href={hero.action.href}
            className="group mt-9 inline-flex min-h-12 items-center gap-4 bg-accent px-6 py-3 text-sm font-bold text-page transition-colors duration-300 hover:bg-accent-highlight"
          >
            {hero.action.label}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="relative lg:col-span-7 lg:pl-8 xl:pl-14">
          <div
            aria-hidden="true"
            className="absolute -left-3 top-8 hidden h-[70%] w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent lg:block"
          />
          <MediaPlaceholder
            tone="portrait"
            label="Approved AJOracle portrait"
            detail="Portrait photography will replace this frame once supplied and approved."
            className="aspect-[4/5] min-h-[30rem] w-full sm:min-h-[38rem] lg:max-h-[calc(100svh-10rem)] lg:min-h-[34rem]"
          />
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-copy-muted lg:flex"
      >
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.24em]">
          Discover
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-accent/70 to-transparent" />
      </div>
    </section>
  );
}
