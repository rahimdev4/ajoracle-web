import { aboutPageContent } from "@/components/about/about-content";
import { MediaPlaceholder } from "@/components/home/media-placeholder";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CreativePerspective() {
  const { creativePerspective } = aboutPageContent;

  return (
    <Section
      aria-labelledby="about-creative-title"
      className="about-creative-story relative isolate overflow-hidden"
    >
      <Container className="relative z-10 grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-16">
        <div className="lg:col-span-5 lg:pl-8 xl:pl-14">
          <p className="eyebrow mb-5 tracking-[0.24em]">
            {creativePerspective.eyebrow}
          </p>
          <h2
            id="about-creative-title"
            className="max-w-[12ch] font-serif text-[clamp(3rem,5.5vw,5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-copy"
          >
            {creativePerspective.title}
          </h2>
          <div className="mt-7 max-w-[35rem] space-y-5 text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
            {creativePerspective.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 size-28 border-r border-t border-accent/25 sm:-right-8 sm:-top-8 sm:size-40"
          />
          <MediaPlaceholder
            tone="portrait"
            label={creativePerspective.mediaLabel}
            detail={creativePerspective.mediaDetail}
            className="relative aspect-[3/4] min-h-[30rem] w-full sm:min-h-[38rem]"
          />
        </div>
      </Container>
    </Section>
  );
}
