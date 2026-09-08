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
        lead="Blog, vlog and master-class topics — with a live feed of PET, HDPE, PP and Kraft paper prices."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-navy p-8 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-lime uppercase">Live material prices</p>
          <h2 className="font-display mt-2 text-2xl">PET · HDPE · PP · Kraft paper</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/75">
            Connection to external market portals is being wired. Until the feed is live, these are the four
            indices we will publish on this page — not dummy numbers presented as current prices.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {priceFeeds.map((item) => (
              <div key={item.code} className="rounded-2xl bg-white/10 px-4 py-5">
                <p className="font-display text-2xl">{item.code}</p>
                <p className="mt-1 text-sm text-white/70">{item.name}</p>
                <p className="mt-4 text-xs tracking-wide text-lime uppercase">Feed pending</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {insightTopics.map((topic, index) => (
            <article key={topic.title} className="rounded-3xl bg-white p-6">
              <p className="text-sm font-semibold text-pink">0{index + 1}</p>
              <h3 className="font-display mt-2 text-xl">{topic.title}</h3>
              <p className="mt-3 text-sm text-slate">{topic.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate">
          Automatic posting from vlog to LinkedIn / Instagram / Twitter will follow once the CMS is connected.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
