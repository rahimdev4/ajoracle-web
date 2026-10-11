import { SiInstagram, SiTiktok, SiYoutube } from "@icons-pack/react-simple-icons";

import { contactPageContent } from "@/components/contact/contact-content";
import { Container } from "@/components/layout/container";
import { socialPlatforms } from "@/lib/external-platforms";

const socialMarks = {
  instagram: SiInstagram,
  tiktok: SiTiktok,
  youtube: SiYoutube,
} as const;

export function ContactIntro() {
  const { intro } = contactPageContent;

  return (
    <section
      aria-labelledby="contact-page-title"
      className="bg-page pb-10 pt-32 sm:pb-12 sm:pt-36 lg:pb-14 lg:pt-40"
    >
      <Container>
        <div className="max-w-[52rem]">
          <div className="flex items-center gap-4">
            <p className="eyebrow tracking-[0.26em]">{intro.eyebrow}</p>
            <span aria-hidden="true" className="h-px w-14 bg-accent/70" />
          </div>

          <h1
            id="contact-page-title"
            className="mt-5 font-serif text-[clamp(4rem,8vw,6.75rem)] font-medium leading-[0.82] tracking-[-0.055em] text-copy sm:mt-6"
          >
            {intro.title}
          </h1>

          <p className="mt-7 max-w-[45rem] text-base leading-8 text-copy-muted sm:text-lg sm:leading-9">
            {intro.description}
          </p>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href={`mailto:${intro.email}`}
              className="inline-flex min-h-11 items-center gap-3 self-start rounded-sm text-sm font-medium text-copy transition-colors duration-300 hover:text-accent-highlight focus-visible:text-accent-highlight"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="1.5" />
                <path d="m3.5 6 8.5 6.5L20.5 6" />
              </svg>
              {intro.email}
            </a>

            <span
              aria-hidden="true"
              className="hidden h-6 w-px bg-divider/80 sm:block"
            />

            <ul className="flex items-center gap-1" aria-label="AJOracle social media">
              {socialPlatforms.map((platform) => {
                const SocialMark = socialMarks[platform.id];

                return (
                  <li key={platform.id}>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${platform.name} (opens in a new tab)`}
                      className="inline-flex size-11 items-center justify-center rounded-sm text-accent transition-colors duration-300 hover:text-accent-highlight focus-visible:text-accent-highlight"
                    >
                      <SocialMark aria-hidden="true" title="" size={19} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="mt-9 h-px bg-divider/70" />
      </Container>
    </section>
  );
}
