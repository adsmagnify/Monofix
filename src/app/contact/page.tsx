import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact us",
  description: "Let's start something new. MONOFIX responds within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact us" title="Let's start something new!" lead={site.responseTime} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-2xl">Headquarters</h2>
          <p className="mt-3 text-slate">
            {site.name}
            <br />
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.line3}
          </p>
          <p className="mt-6 text-slate">
            <strong>Locations:</strong> {site.locations.join(", ")}
          </p>
          <p className="mt-4">
            <a className="font-semibold text-navy" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <br />
            <a className="font-semibold text-navy" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
          <p className="mt-6 text-sm text-slate">LinkedIn: to be added when the company page URL is confirmed.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 sm:p-8">
          <Suspense fallback={<p>Loading form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
