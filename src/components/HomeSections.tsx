import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { DifferenceTable } from "@/components/DifferenceTable";
import { Section, SectionHead } from "@/components/Section";
import {
  caseStudies,
  gallery,
  insightTopics,
  priceFeeds,
  services,
  site,
  sustainabilityPoints,
  teamHighlights,
  teamList,
  testimonials,
} from "@/content/site";

export function HomeSections() {
  return (
    <>
      <Section id="about" className="bg-paper">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              kicker="About us"
              title={
                <>
                  Top team of packaging &amp;{" "}
                  <span className="text-blue">design specialists</span>
                </>
              }
              lead="Team MONOFIX"
            />
            <ul className="mt-8 space-y-5 rounded-2xl bg-blue px-8 py-8 text-white sm:px-10 sm:py-10">
              {teamHighlights.map((point) => (
                <li key={point} className="flex gap-4 text-base font-semibold leading-relaxed sm:text-lg">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ol className="grid gap-3">
            {teamList.map((person) => (
              <li
                key={person.name}
                className="flex items-center gap-5 rounded-2xl border-l-4 border-lime bg-white px-6 py-4"
              >
                <span className="font-display w-10 text-xl text-blue">0{person.listOrder}</span>
                <span className="text-xl font-medium text-ink sm:text-2xl">{person.listName}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="why" className="bg-ink text-white">
        <SectionHead
          light
          kicker="Why MONOFIX"
          title={
            <>
              The MONOFIX <span className="text-lime">difference</span>
            </>
          }
          lead="Your End-to-End partner, till successful Launch !"
        />
        <DifferenceTable />
      </Section>

      <Section id="services" className="bg-white">
        <SectionHead
          kicker="Services"
          title={
            <>
              6 verticals of <span className="text-blue">packaging excellence</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl border border-mist p-6">
              <p className="font-display text-sm text-blue">Vertical {service.number}</p>
              <h3 className="font-display mt-2 text-xl text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{service.short}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="gallery" className="bg-paper">
        <SectionHead kicker="Gallery" title={<>Work <span className="text-blue">samples</span></>} />
        <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-3 lg:h-[min(58vh,32rem)] lg:grid-cols-4">
          {gallery.map((item, index) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 row-span-2 min-h-[16rem]" : "min-h-[8rem]"}`}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-display text-lg leading-tight sm:text-xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="sustainability" className="bg-[linear-gradient(135deg,#0a2418_0%,#07151f_55%,#0c2c4a_100%)] text-white">
        <SectionHead
          light
          kicker="Sustainability & EPR"
          title={
            <>
              Packaging that <span className="text-lime">protects</span> the planet
            </>
          }
        />
        <ol className="mt-10 grid gap-4 lg:grid-cols-2">
          {sustainabilityPoints.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-lime/25 bg-white/5 px-6 py-6">
              <p className="font-display text-xl text-lime">0{index + 1}</p>
              <h3 className="font-display mt-2 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="testimonials" className="bg-white">
        <SectionHead
          kicker="Client testimonials"
          title={
            <>
              Trusted by <span className="text-blue">global brands</span>
            </>
          }
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.title} className="rounded-2xl border border-mist p-6">
              <p className="font-display text-lg text-pink">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-5 text-sm font-medium text-navy">— {item.role}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section id="packgn" className="bg-lime">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">
              Packaging made easy + pay n use
            </p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              PACKGN made easy
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-bold text-white hover:bg-navy"
              >
                Start your project
              </Link>
              <Link
                href="/#contact"
                className="cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-bold text-ink"
              >
                Pay n use
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white/80 p-8">
            <p className="font-display text-2xl text-ink">Pay n use</p>
            <p className="mt-3 text-base leading-relaxed text-slate">
              A pay-per-use calculator for pack quality and endurance. The application will be embedded here.
            </p>
          </div>
        </div>
      </Section>

      <Section id="insights" className="bg-paper">
        <SectionHead
          kicker="Insights & resources"
          title={
            <>
              Trends, technology &amp;{" "}
              <span className="text-blue">packaging education series</span>
            </>
          }
          lead="Live feed of prices — PET, HDPE, PP, Kraft paper."
        />
        <div className="mt-8 rounded-2xl bg-navy p-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-lime uppercase">Live material prices</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {priceFeeds.map((item) => (
              <div key={item.code} className="rounded-xl bg-white/10 px-4 py-4">
                <p className="font-display text-2xl">{item.code}</p>
                <p className="text-xs text-white/65">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {insightTopics.map((topic, index) => (
            <article key={topic.title} className="rounded-2xl bg-white px-5 py-4">
              <p className="text-xs font-semibold text-pink">0{index + 1}</p>
              <h3 className="font-display mt-1 text-base leading-snug">{topic.title}</h3>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate">Automatic feed / posting from Vlog to LinkedIn / Insta / Twitter.</p>
      </Section>

      <Section id="casestudies" className="bg-ink text-white">
        <SectionHead
          light
          kicker="Case studies"
          title={
            <>
              Unique <span className="text-lime">successes</span>
            </>
          }
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-5"
            >
              <div>
                <p className="font-display text-sm text-lime">0{index + 1}</p>
                <h3 className="font-display mt-1 text-lg sm:text-xl">{item.title}</h3>
              </div>
              <span className="shrink-0 rounded-full bg-lime px-3 py-1 text-[10px] font-bold tracking-wide text-ink uppercase">
                {item.area}
              </span>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" className="bg-paper">
        <SectionHead
          kicker="Contact us"
          title={
            <>
              Let&apos;s start something <span className="text-blue">new</span>
            </>
          }
          lead={site.responseTime}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold">Headquarters</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold">Locations</p>
              <p className="mt-2 text-sm text-slate">{site.locations.join(", ")}</p>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold">Email</p>
              <a className="mt-2 block text-sm text-navy" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold">Mobile</p>
              <a className="mt-2 block text-sm text-navy" href={site.phoneHref}>
                {site.phone}
              </a>
            </div>
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold">LinkedIn</p>
              <p className="mt-2 text-sm text-slate">To be added</p>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <h3 className="font-display mb-5 text-2xl">Get in touch</h3>
            <Suspense fallback={<p className="text-slate">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>
    </>
  );
}
