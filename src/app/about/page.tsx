import { CtaBand, PageHero } from "@/components/PageHero";
import { site, team } from "@/content/site";

export const metadata = {
  title: "About us",
  description: "Top team of packaging and design specialists — Team MONOFIX.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="Top team of packaging & design specialists"
        lead="Team MONOFIX is a packaging and design practice working with brands in India, USA, Europe, the UK and MENA."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Team MONOFIX</h2>
            <p className="mt-4 text-slate">
              {site.legalName} is headquartered in Andheri East, Mumbai, with people on the ground across{" "}
              {site.locations.join(", ")}.
            </p>
            <ol className="mt-8 grid gap-3">
              {team.map((person, i) => (
                <li key={person} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4">
                  <span className="font-display text-blue">0{i + 1}</span>
                  <span className="text-lg font-medium">{person}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white">
            <p className="text-lime">Headquarters</p>
            <p className="mt-3 font-medium">
              {site.name}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </p>
            <p className="mt-6 text-sm text-white/70">GST {site.gst}</p>
            <p className="mt-8 text-sm">
              The practice covers NPD, cost and value engineering, audit and quality, 3D / CAE / artworks,
              sustainability and EPR, and resourcing.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
