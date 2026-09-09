import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  bleed?: boolean;
};

export function Section({ id, className = "bg-paper", children, bleed = false }: SectionProps) {
  if (bleed) {
    return (
      <section id={id} className={`screen-full ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`screen-full relative flex min-h-svh flex-col ${className}`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        {children}
      </div>
    </section>
  );
}

type HeadProps = {
  kicker: string;
  title: ReactNode;
  lead?: string;
  light?: boolean;
};

export function SectionHead({ kicker, title, lead, light = false }: HeadProps) {
  return (
    <header className="max-w-4xl">
      <p
        className={`text-xs font-semibold tracking-[0.28em] uppercase sm:text-sm ${
          light ? "text-lime" : "text-blue"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`font-display mt-3 text-3xl leading-[1.08] sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-slate"}`}>
          {lead}
        </p>
      ) : null}
    </header>
  );
}
