"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigationItems } from "@/components/layout/site-navigation-items";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const header = document.getElementById("site-header");

    if (!header) {
      return;
    }

    const updateScrolledState = () => {
      header.dataset.scrolled = String(window.scrollY > 16);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const closeAtDesktopWidth = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeAtDesktopWidth);

    return () => {
      desktopQuery.removeEventListener("change", closeAtDesktopWidth);
    };
  }, []);

  useEffect(() => {
    const header = document.getElementById("site-header");
    const menuButton = menuButtonRef.current;
    header?.setAttribute("data-menu-open", String(isMenuOpen));

    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const pageElements = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement &&
        element.id !== "site-header" &&
        element.tagName !== "SCRIPT",
    );
    const siteBrandLink = document.getElementById("site-brand-link");
    const backgroundElements = siteBrandLink
      ? [...pageElements, siteBrandLink]
      : pageElements;
    const backgroundStates = backgroundElements.map((element) => ({
      element,
      inert: element.inert,
      ariaHidden: element.getAttribute("aria-hidden"),
    }));

    document.body.style.overflow = "hidden";

    backgroundElements.forEach((element) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      firstMobileLinkRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const menuLinks = Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [],
      );
      const focusableElements = [menuButton, ...menuLinks].filter(
        (element): element is HTMLElement => element !== null,
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;

      backgroundStates.forEach(({ element, inert, ariaHidden }) => {
        element.inert = inert;

        if (ariaHidden === null) {
          element.removeAttribute("aria-hidden");
        } else {
          element.setAttribute("aria-hidden", ariaHidden);
        }
      });

      header?.setAttribute("data-menu-open", "false");
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav aria-label="Primary navigation" className="hidden lg:block">
        <ul className="flex items-center gap-6 xl:gap-8">
          {navigationItems.map((item) => {
            const isActive = isCurrentPath(pathname, item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative inline-flex min-h-12 items-center px-1 text-[0.8125rem] font-medium tracking-[0.035em] transition-colors duration-300 ${
                    isActive
                      ? "text-copy"
                      : "text-copy-muted hover:text-copy"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-1 bottom-1.5 h-px origin-left bg-accent transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        className="-mr-2 inline-flex min-h-11 items-center gap-3 px-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-copy transition-colors duration-300 hover:text-accent-highlight lg:hidden"
      >
        <span>{isMenuOpen ? "Close" : "Menu"}</span>
        <span aria-hidden="true" className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-[0.3rem] h-px w-5 bg-current transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[0.2rem] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute bottom-[0.3rem] left-0 h-px w-5 bg-current transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[0.2rem] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isMenuOpen ? (
        <nav
          ref={mobileMenuRef}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-navigation fixed inset-0 z-10 overflow-y-auto overscroll-contain pt-[4.5rem] lg:hidden"
        >
          <div className="mx-auto flex min-h-full w-full max-w-[85rem] items-center px-5 py-8 sm:px-7">
            <ul className="w-full border-t border-divider/60">
              {navigationItems.map((item, index) => {
                const isActive = isCurrentPath(pathname, item.href);

                return (
                  <li key={item.href} className="border-b border-divider/60">
                    <Link
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex min-h-16 items-center justify-between gap-6 py-4 text-[clamp(1.35rem,6vw,2rem)] font-medium tracking-[-0.025em] transition-colors duration-300 ${
                        isActive
                          ? "text-copy"
                          : "text-copy-muted hover:text-copy"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className={`h-px bg-accent transition-[width,opacity] duration-300 ${
                          isActive
                            ? "w-10 opacity-100"
                            : "w-6 opacity-0 group-hover:opacity-60"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      ) : null}
    </>
  );
}
