import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SiteNavigation } from "@/components/layout/site-navigation";

export function Header() {
  return (
    <header
      id="site-header"
      className="site-header"
      data-menu-open="false"
      data-scrolled="false"
    >
      <Container className="relative z-20 flex h-[4.5rem] items-center justify-between lg:h-[5.5rem]">
        <Link
          href="/"
          aria-label="AJOracle home"
          className="inline-flex min-h-11 items-center font-serif text-[2rem] font-medium leading-none tracking-[-0.045em] text-copy transition-colors duration-300 hover:text-accent-highlight lg:text-[2.125rem]"
        >
          AJOracle
        </Link>

        <SiteNavigation />
      </Container>
    </header>
  );
}
