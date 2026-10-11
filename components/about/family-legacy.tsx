import Image from "next/image";

import { aboutPageContent } from "@/components/about/about-content";
import { Container } from "@/components/layout/container";

export function FamilyLegacy() {
  const { familyLegacy } = aboutPageContent;

  return (
    <section
      aria-labelledby="about-family-title"
      className="bg-page py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-md bg-surface lg:col-span-6">
            <Image
              src={familyLegacy.image.src}
              alt={familyLegacy.image.alt}
              fill
              sizes="(min-width: 1280px) 610px, (min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex items-center gap-4">
              <p className="eyebrow tracking-[0.24em]">
                {familyLegacy.eyebrow}
              </p>
              <span aria-hidden="true" className="h-px w-14 bg-accent/65" />
            </div>
            <h2
              id="about-family-title"
              className="mt-5 max-w-[14ch] font-serif text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] text-copy"
            >
              {familyLegacy.title}
            </h2>
            <div className="mt-7 max-w-[40rem] space-y-5 text-base leading-8 text-copy-muted">
              {familyLegacy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 space-y-1 font-serif text-2xl leading-tight text-copy">
              {familyLegacy.closingLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
