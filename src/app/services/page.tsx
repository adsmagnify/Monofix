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
      <PageHero kicker="Services" title="6 verticals of packaging excellence" />
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="grid cursor-pointer gap-4 rounded-3xl bg-white p-10 transition hover:shadow-md md:grid-cols-[6rem_1fr_auto] md:items-center md:p-12"
            >
              <span className="font-display text-3xl text-blue">{service.number}</span>
              <div>
                <h2 className="font-display text-3xl">{service.title}</h2>
                <p className="mt-3 text-lg text-slate">{service.short}</p>
              </div>
              <span className="text-base font-semibold text-navy">View vertical →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
