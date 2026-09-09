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
      <PageHero kicker="Gallery" title="Work samples" />
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2">
          {gallery.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl bg-white">
              <div className="relative aspect-[16/10] min-h-[280px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-8 sm:p-10">
                <h2 className="font-display text-3xl">{item.title}</h2>
                <p className="mt-3 text-lg text-slate">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
