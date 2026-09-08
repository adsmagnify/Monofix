import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CtaBand } from "@/components/PageHero";
import { services, site, team, testimonials } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">Packaging solutions</p>
            <h1 className="font-display mt-3 text-4xl leading-tight text-ink sm:text-5xl">{site.tagline}</h1>
            <p className="mt-5 max-w-xl text-lg text-slate">
              Your end-to-end partner, till successful launch — NPD, design, value optimisation, PPWR,
              sustainability, auditing, specification writing and resourcing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white">
                Six verticals
              </Link>
              <Link href="/contact" className="rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink">
                Talk to the team
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white">
            <p className="text-sm text-lime">Expertise you can leverage</p>
            <p className="font-display mt-2 text-2xl">North America, Europe &amp; MENA — plus India.</p>
            <ul className="mt-6 grid gap-2 text-sm text-white/80">
              <li>Live material price feed on Insights (PET, HDPE, PP, Kraft).</li>
              <li>Priority USA / EU desks for PPWR, NPD and resourcing.</li>
              <li>Locations: {site.locations.join(", ")}.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-pink uppercase">Services</p>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl">Six verticals of packaging excellence</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-3xl border border-mist bg-paper p-6 transition hover:-translate-y-0.5 hover:border-blue"
              >
                <span className="font-display text-sm text-blue">{service.number}</span>
                <h3 className="font-display mt-2 text-xl text-ink group-hover:text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{service.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-lime uppercase">About us</p>
            <h2 className="font-display mt-2 text-3xl sm:text-4xl">Top team of packaging &amp; design specialists</h2>
            <p className="mt-4 text-white/75">
              Team MONOFIX brings packaging, design and commercial judgement together — so brands can move from
              brief to a successful launch.
            </p>
            <ol className="mt-6 grid gap-2">
              {team.map((person, i) => (
                <li key={person} className="flex items-center gap-3 text-lg">
                  <span className="font-display w-8 text-lime">0{i + 1}</span>
                  {person}
                </li>
              ))}
            </ol>
            <Link href="/about" className="mt-8 inline-flex rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink">
              Meet the team
            </Link>
          </div>
          <Image
            src="/gcc-collaborations.jpg"
            alt="MONOFIX expertise for companies in North America, Europe and MENA"
            width={1200}
            height={900}
            className="h-auto w-full rounded-3xl"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-blue uppercase">Clients</p>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl">Trusted by global brands</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-pink">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-medium text-navy">— {item.role}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
