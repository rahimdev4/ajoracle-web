import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <main>
      <Section
        aria-labelledby="foundation-heading"
        className="flex min-h-dvh items-center"
      >
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Phase 0
          </p>
          <h1
            id="foundation-heading"
            className="max-w-max font-serif text-[clamp(4rem,14vw,8rem)] font-medium leading-[0.85] tracking-[-0.04em] text-copy"
          >
            AJOracle
          </h1>
          <p className="mt-6 text-sm text-copy-muted sm:text-base">
            Website foundation
          </p>
        </Container>
      </Section>
    </main>
  );
}
