import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">MONOFIX</p>
          <p className="mt-2 max-w-md text-white/70">{site.tagline}</p>
          <p className="mt-4 flex flex-wrap gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
            {site.hashtags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                <span className="text-pink">#</span>
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-lime">Company</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/75">
            <li>
              <Link href="/about" className="hover:text-lime">
                About
              </Link>
            </li>
            <li>
              <Link href="/why-monofix" className="hover:text-lime">
                Why MONOFIX
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-lime">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-lime">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-lime">Services</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/75">
            <li>
              <Link href="/services" className="hover:text-lime">
                Six verticals
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-lime">
                Sustainability &amp; EPR
              </Link>
            </li>
            <li>
              <Link href="/packaging-made-easy" className="hover:text-lime">
                Packaging made easy
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-lime">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {site.legalName} · GST {site.gst}
          </p>
          <p>
            {site.email} · {site.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
