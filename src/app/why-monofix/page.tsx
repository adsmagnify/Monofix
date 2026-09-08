import { CtaBand, PageHero } from "@/components/PageHero";
import { whyColumns } from "@/content/site";

export const metadata = {
  title: "Why MONOFIX",
  description: "The MONOFIX difference — your end-to-end partner, till successful launch.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        kicker="Why MONOFIX"
        title="The MONOFIX difference"
        lead="Your end-to-end partner, till successful launch."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {whyColumns.map((column, index) => (
            <article key={column.title} className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="font-display text-sm text-blue">0{index + 1}</p>
              <h2 className="font-display mt-2 text-2xl">{column.title}</h2>
              <p className="mt-3 text-slate">{column.lead}</p>
              <ul className="mt-6 grid gap-2 text-sm text-ink">
                {column.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-2xl bg-lime/40 px-5 py-4 font-medium text-ink">
          Plus: Predictive modelling CAE / FEA — so structure is proven before you commit to tooling.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
