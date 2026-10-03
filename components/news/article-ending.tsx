import Link from "next/link";

import { Container } from "@/components/layout/container";

export function ArticleEnding() {
  return (
    <footer className="border-t border-divider/60">
      <Container>
        <div className="mx-auto flex max-w-[46rem] flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
          <div>
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-accent-highlight">
              End of structural preview
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-copy-muted">
              Production article endings will use approved editorial content only.
            </p>
          </div>

          <Link
            href="/news"
            className="group inline-flex min-h-11 shrink-0 items-center gap-3 self-start py-2 text-sm font-semibold text-copy transition-colors duration-300 hover:text-accent-highlight sm:self-auto"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
            Return to News
          </Link>
        </div>
      </Container>
    </footer>
  );
}
