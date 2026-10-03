import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className = "", ...props }: SectionProps) {
  return (
    <section
      className={`py-20 sm:py-24 lg:py-32 xl:py-36 ${className}`.trim()}
      {...props}
    />
  );
}
