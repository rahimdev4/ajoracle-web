import Link from "next/link";

import { Container } from "@/components/layout/container";
import { FooterContactCallout } from "@/components/layout/footer-contact-callout";
import { navigationItems } from "@/components/layout/site-navigation-items";
import { ExternalPlatformLinks } from "@/components/platforms/external-platform-links";
import {
  musicPlatforms,
  socialPlatforms,
} from "@/lib/external-platforms";

export function Footer() {
  return (
    <footer className="border-t border-divider/60 bg-page" aria-label="Site footer">
      <Container>
        <FooterContactCallout />

        <div className="border-t border-divider/60 py-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Link
              href="/"
              aria-label="AJOracle home"
              className="self-start font-serif text-3xl font-medium leading-none tracking-[-0.04em] text-copy transition-colors duration-300 hover:text-accent-highlight"
            >
              AJOracle
            </Link>

            <nav aria-label="Footer navigation" className="w-full md:w-auto">
              <ul className="grid w-full grid-cols-3 gap-x-3 gap-y-1 md:flex md:max-w-2xl md:flex-wrap md:justify-end md:gap-x-6 md:gap-y-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-12 w-full items-center text-xs font-medium text-copy-muted transition-colors duration-300 hover:text-copy md:min-h-11 md:w-auto"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-6 grid gap-6 border-t border-divider/40 pb-4 pt-6 sm:grid-cols-2 sm:gap-8 md:pb-0 lg:gap-12">
            <ExternalPlatformLinks
              label="Listen"
              platforms={musicPlatforms}
            />
            <ExternalPlatformLinks
              label="Follow"
              platforms={socialPlatforms}
              align="end-on-desktop"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
