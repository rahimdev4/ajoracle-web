type SectionHeadingProps = Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
  className?: string;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="mb-5 flex items-center gap-4 sm:mb-6">
        <p className="eyebrow tracking-[0.24em]">
          {eyebrow}
        </p>
        <span aria-hidden="true" className="h-px w-10 bg-accent/70 sm:w-16" />
      </div>
      <h2
        id={id}
        className="max-w-[14ch] font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.035em] text-copy"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[38rem] text-sm leading-7 text-copy-muted sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
