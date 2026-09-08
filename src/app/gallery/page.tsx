import Image from "next/image";
import { CtaBand, PageHero } from "@/components/PageHero";
import { gallery } from "@/content/site";

export const metadata = {
  title: "Gallery",
  description: "Work samples from MONOFIX Packaging Solutions.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Work samples"
        lead="A first set of project types. Further images will be added as the client folder is completed."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {gallery.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl">{item.title}</h2>
                <p className="mt-2 text-slate">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
