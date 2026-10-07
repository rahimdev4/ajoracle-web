import Image from "next/image";
import Link from "next/link";

import { homepageContent } from "@/components/home/homepage-content";
import { Container } from "@/components/layout/container";

export function Hero() {
  const { hero } = homepageContent;

  return (
    <section
      aria-labelledby="home-hero-title"
      className="home-hero relative isolate overflow-hidden pt-[4.5rem] lg:pt-[5.5rem]"
    >
      <Container className="home-hero__layout relative z-10 grid items-center gap-10 sm:gap-12">
        <div className="home-hero__copy relative z-10 max-w-[36rem] lg:pb-6">
          <p className="eyebrow mb-4 tracking-[0.24em]">
            {hero.eyebrow}
          </p>
          <h1
            id="home-hero-title"
            className="pb-5 font-serif text-[clamp(4rem,18vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-copy lg:text-[clamp(5rem,6.5vw,6.25rem)]"
          >
            <span className="whitespace-nowrap">
              {"AJ"}
              <span className="text-accent italic">Oracle</span>
            </span>
          </h1>
          <p className="mt-7 text-sm font-medium tracking-[0.06em] text-copy sm:text-base lg:whitespace-nowrap">
            {hero.role}
          </p>
          <p className="mt-5 max-w-full text-base leading-7 text-copy-muted sm:max-w-[34ch] sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={hero.primaryAction.href}
              className="group inline-flex min-h-12 items-center gap-4 bg-accent px-5 py-3 text-sm font-bold text-page transition-colors duration-300 hover:bg-accent-highlight sm:px-6"
            >
              {hero.primaryAction.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href={hero.secondaryAction.href}
              className="group inline-flex min-h-12 items-center gap-3 py-2 text-sm font-semibold text-copy-muted transition-colors duration-300 hover:text-copy"
            >
              <span
                aria-hidden="true"
                className="grid size-8 place-items-center rounded-full border border-divider/80 transition-colors duration-300 group-hover:border-accent/70"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="ml-0.5 size-3.5 fill-current"
                >
                  <path d="M4.75 2.9v10.2L13 8 4.75 2.9Z" />
                </svg>
              </span>
              {hero.secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="home-hero__portrait relative z-0 mx-auto aspect-square w-full max-w-[38rem] overflow-hidden lg:mx-0 lg:max-w-[37.5rem] lg:justify-self-end">
          <Image
            src="/images/home/hero/ajoracle-hero-portrait.webp"
            alt="Portrait of AJOracle seated in an ornate garden setting"
            fill
            preload
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 52vw, (min-width: 640px) 608px, calc(100vw - 2.5rem)"
            className="home-hero__portrait-image object-cover object-center"
          />
        </div>
      </Container>
    </section>
  );
}
