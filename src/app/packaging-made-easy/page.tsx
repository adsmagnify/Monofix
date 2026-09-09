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
        title="PACKGN made easy"
        lead="A pay-per-use calculator for pack quality and endurance. The application will be embedded here."
      />
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="rounded-3xl border border-dashed border-navy/30 bg-white px-10 py-20 text-center">
          <p className="font-display text-3xl">Pay n use</p>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate">
            The calculator will sit on this page once it is ready to embed.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex cursor-pointer rounded-full bg-ink px-8 py-4 text-base font-bold text-white"
          >
            Ask about pay-and-use access
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
