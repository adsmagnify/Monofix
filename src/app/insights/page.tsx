import { CtaBand, PageHero } from "@/components/PageHero";
import { insightTopics, priceFeeds } from "@/content/site";

export const metadata = {
  title: "Insights",
  description: "Trends, technology and packaging education — plus a live feed of PET, HDPE, PP and Kraft prices.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        kicker="Insights & resources"
        title="Trends, technology & packaging education series"
        lead="Live feed of prices — PET, HDPE, PP, Kraft paper."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="rounded-3xl bg-navy p-10 text-white sm:p-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-lime uppercase">Live material prices</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {priceFeeds.map((item) => (
              <div key={item.code} className="rounded-2xl bg-white/10 px-6 py-8">
                <p className="font-display text-3xl">{item.code}</p>
                <p className="mt-2 text-base text-white/70">{item.name}</p>
                <p className="mt-6 text-xs tracking-wide text-lime uppercase">Feed pending</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {insightTopics.map((topic, index) => (
            <article key={topic.title} className="rounded-3xl bg-white p-10">
              <p className="text-base font-semibold text-pink">0{index + 1}</p>
              <h3 className="font-display mt-3 text-2xl">{topic.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate">{topic.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-3xl text-lg text-slate">
          Automatic feed / posting from Vlog to LinkedIn / Insta / Twitter.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
