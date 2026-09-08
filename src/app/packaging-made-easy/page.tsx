import Link from "next/link";
import { CtaBand, PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Packaging made easy",
  description: "Pay-and-use packaging quality and endurance calculator.",
};

export default function PayAndUsePage() {
  return (
    <>
      <PageHero
        kicker="Packaging made easy + pay n use"
        title="A calculator for pack quality and endurance"
        lead="A pay-per-use tool so visitors can check packaging quality and endurance metrics. The application will be embedded here."
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-dashed border-navy/30 bg-white p-10 text-center">
          <p className="font-display text-2xl">Calculator embedding next</p>
          <p className="mt-3 text-slate">
            Multi-currency pricing for the tool, and the live PET / HDPE / PP / Kraft feed on Insights, are part of
            the same build path.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white">
            Ask about pay-and-use access
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
