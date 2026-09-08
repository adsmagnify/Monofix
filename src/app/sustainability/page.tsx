import { CtaBand, PageHero } from "@/components/PageHero";
import { sustainabilityPoints } from "@/content/site";

export const metadata = {
  title: "Sustainability & EPR",
  description: "Packaging that protects the planet — mono-material, PCR, PPWR and EPR.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        kicker="Sustainability"
        title="Packaging that protects the planet"
        lead="Mono-material structures, circularity, PCR, PPWR / EPR compliance, and line-ready change."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {sustainabilityPoints.map((item, index) => (
            <article key={item.title} className="rounded-3xl bg-white p-7">
              <p className="font-display text-sm text-blue">0{index + 1}</p>
              <h2 className="font-display mt-2 text-2xl">{item.title}</h2>
              <p className="mt-3 text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
