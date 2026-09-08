import Link from "next/link";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead?: string;
};

export function PageHero({ kicker, title, lead }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.22em] text-lime uppercase">{kicker}</p>
        <h1 className="font-display mt-3 max-w-4xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        {lead ? <p className="mt-5 max-w-2xl text-lg text-white/75">{lead}</p> : null}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-lime">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="font-display text-2xl text-ink sm:text-3xl">Let&apos;s start something new.</p>
          <p className="mt-1 text-ink/80">Get in touch… responds within 24 hours.</p>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-navy"
        >
          Contact MONOFIX
        </Link>
      </div>
    </section>
  );
}
