import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageHero";
import { caseStudies } from "@/content/site";

export const metadata = {
  title: "Case studies",
  description: "Unique successes across NPD, cost, audit, sustainability and resourcing.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        kicker="Case studies"
        title="Unique successes"
        lead="Named programmes from the MONOFIX brief. Full write-ups and images will be added as the client folder is released."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4">
          {caseStudies.map((item, index) => (
            <article key={item.title} className="flex flex-col gap-2 rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-blue">0{index + 1}</p>
                <h2 className="font-display mt-1 text-2xl">{item.title}</h2>
              </div>
              <p className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-navy">{item.area}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate">
          Related work types also live in the{" "}
          <Link href="/gallery" className="font-semibold text-navy">
            gallery
          </Link>
          .
        </p>
      </section>
      <CtaBand />
    </>
  );
}
