import Image from "next/image";
import Link from "next/link";

import {
  homepageContent,
  type AppStoreDestination,
} from "@/components/home/homepage-content";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type StoreDestinationLinkProps = Readonly<{
  destination: AppStoreDestination;
}>;

function StoreDestination({
  destination,
}: StoreDestinationLinkProps) {
  const content = (
    <>
      {destination.qrCode ? (
        <Image
          src={destination.qrCode.src}
          alt={destination.qrCode.alt}
          width={112}
          height={112}
          sizes="64px"
          className="aspect-square w-16 rounded-sm bg-copy object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex aspect-square w-16 items-center justify-center rounded-sm border border-accent/35 bg-page/75 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-copy-muted"
        >
          {destination.shortLabel}
        </span>
      )}

      <span className="min-w-0">
        <span className="block text-xs font-semibold text-copy">
          {destination.platform}
        </span>
        <span className="mt-1 block text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent-highlight">
          {destination.status}
        </span>
      </span>
    </>
  );

  if (!destination.href || !destination.qrCode) {
    return (
      <div
        aria-label={`${destination.platform}: ${destination.status}`}
        className="grid min-w-0 grid-cols-[4rem_1fr] items-center gap-3 rounded-lg border border-accent/35 bg-page/80 p-2.5 backdrop-blur-sm"
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={destination.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid min-w-0 grid-cols-[4rem_1fr] items-center gap-3 rounded-lg border border-accent/50 bg-page/80 p-2.5 backdrop-blur-sm transition-colors duration-300 hover:border-accent-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-highlight"
    >
      {content}
    </Link>
  );
}

export function AppPromotion() {
  const { appPromotion } = homepageContent;
  const storeDestinations = Object.values(
    appPromotion.storeDestinations,
  ).filter(
    (destination): destination is AppStoreDestination => destination !== null,
  );

  return (
    <Section
      aria-labelledby="app-promotion-title"
      className="app-promotion-section relative isolate overflow-hidden bg-page !py-12 sm:!py-16 lg:!h-[clamp(31rem,55vh,37rem)] lg:!py-0"
    >
      <Image
        src={appPromotion.background.src}
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover object-[56%_center] sm:object-center"
      />

      <Container className="relative z-10 grid items-center gap-8 sm:gap-10 lg:h-full lg:grid-cols-12 lg:gap-8 xl:gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <p className="eyebrow tracking-[0.24em]">
              {appPromotion.eyebrow}
            </p>
            <span
              aria-hidden="true"
              className="h-px w-10 bg-accent/70 sm:w-16"
            />
          </div>

          <h2
            id="app-promotion-title"
            className="mt-7 max-w-[10ch] font-serif text-[clamp(3.5rem,8vw,6.25rem)] font-medium leading-[0.86] tracking-[-0.05em] text-copy lg:mt-5 lg:text-[clamp(4rem,5vw,5.25rem)]"
          >
            {appPromotion.title.lead}{" "}
            <span className="text-accent-highlight">
              {appPromotion.title.accent}
            </span>
          </h2>

          <p className="mt-5 max-w-[36rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {appPromotion.description}
          </p>

          <p className="mt-5 inline-flex min-h-10 items-center rounded-full border border-accent/80 px-6 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent-highlight sm:px-7">
            {appPromotion.status}
          </p>
        </div>

        <div className="relative flex min-h-[22rem] flex-col items-center justify-center sm:min-h-[29rem] lg:col-span-7 lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_10rem] lg:gap-4">
          <Image
            src={appPromotion.phone.src}
            alt={appPromotion.phone.alt}
            width={appPromotion.phone.width}
            height={appPromotion.phone.height}
            sizes="(min-width: 1024px) 30rem, (min-width: 640px) 27rem, calc(100vw - 3rem)"
            className="relative z-10 h-auto w-full max-w-[21rem] object-contain sm:max-w-[27rem] lg:place-self-center lg:h-[min(48vh,30rem)] lg:w-auto lg:max-w-[30rem] xl:translate-x-[35px]"
          />

          {storeDestinations.length > 0 ? (
            <div className="relative z-20 mt-3 grid w-full max-w-[23rem] grid-cols-2 gap-2 sm:mt-4 sm:max-w-[27rem] sm:gap-3 lg:mt-0 lg:w-full lg:max-w-none lg:grid-cols-1 lg:self-end lg:pb-10">
              {storeDestinations.map((destination) => (
                <StoreDestination
                  key={destination.platform}
                  destination={destination}
                />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
