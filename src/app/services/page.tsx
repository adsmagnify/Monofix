import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageHero";
import { services } from "@/content/site";

export const metadata = {
  title: "Services",
  description: "Six verticals of packaging excellence from MONOFIX.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Six verticals of packaging excellence"
        lead="From new pack development to EPR, resourcing and CAE — one team through launch."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="grid gap-3 rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-md md:grid-cols-[5rem_1fr_auto] md:items-center"
            >
              <span className="font-display text-2xl text-blue">{service.number}</span>
              <div>
                <h2 className="font-display text-2xl">{service.title}</h2>
                <p className="mt-2 text-slate">{service.short}</p>
              </div>
              <span className="text-sm font-semibold text-navy">View vertical →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
