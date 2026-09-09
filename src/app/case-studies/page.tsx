import { CtaBand, PageHero } from "@/components/PageHero";
import { caseStudies } from "@/content/site";

export const metadata = {
  title: "Case studies",
  description: "Unique successes across NPD, cost, audit, sustainability and resourcing.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero kicker="Case studies" title="Unique successes" />
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-6">
          {caseStudies.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl bg-white p-10 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-lg text-blue">0{index + 1}</p>
                <h2 className="font-display mt-2 text-3xl">{item.title}</h2>
              </div>
              <p className="w-fit rounded-full bg-mist px-5 py-2 text-sm font-medium text-navy">{item.area}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
