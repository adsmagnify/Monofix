import { CtaBand, PageHero } from "@/components/PageHero";
import { sustainabilityPoints } from "@/content/site";

export const metadata = {
  title: "Sustainability & EPR",
  description: "Packaging that protects the planet — mono-material, PCR, PPWR and EPR.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero kicker="Sustainability" title="Packaging that protects the planet" />
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-8">
          {sustainabilityPoints.map((item, index) => (
            <article key={item.title} className="rounded-3xl bg-white p-10 sm:p-12">
              <p className="font-display text-lg text-blue">0{index + 1}</p>
              <h2 className="font-display mt-4 text-3xl">{item.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
