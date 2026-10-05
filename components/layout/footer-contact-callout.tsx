"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FooterContactCallout() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
    return null;
  }

  return (
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
  );
}
