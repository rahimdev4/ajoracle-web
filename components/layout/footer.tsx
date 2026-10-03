import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navigationItems } from "@/components/layout/site-navigation-items";

export function Footer() {
  return (
    <footer className="border-t border-divider/60 bg-page" aria-label="Site footer">
      <Container>
        <div className="grid gap-8 py-20 sm:py-24 lg:grid-cols-12 lg:items-end lg:py-28">
          <div className="lg:col-span-8">
            <p className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-accent-highlight sm:text-xs">
              Contact
            </p>
            <h2 className="max-w-[12ch] font-serif text-[clamp(3.25rem,7vw,6rem)] font-medium leading-[0.86] tracking-[-0.04em] text-copy">
              Connect with AJOracle
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-5 bg-accent px-6 py-3 text-sm font-bold text-page transition-colors duration-300 hover:bg-accent-highlight"
            >
              Contact
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-divider/60 py-8 md:flex-row md:items-end md:justify-between">
          <Link
            href="/"
            aria-label="AJOracle home"
            className="self-start font-serif text-3xl font-medium leading-none tracking-[-0.04em] text-copy transition-colors duration-300 hover:text-accent-highlight"
          >
            AJOracle
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex max-w-2xl flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-xs font-medium text-copy-muted transition-colors duration-300 hover:text-copy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
