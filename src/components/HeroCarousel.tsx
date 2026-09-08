"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/home/one-carousel.jpg",
    alt: "Innovative packaging solutions that mean business",
  },
  {
    src: "/home/twoo-carousel.png",
    alt: "From a complex packaging problem to a launch that grows the brand",
  },
  {
    src: "/home/three-carousel.png",
    alt: "Innovative packaging solutions — a clear path through complexity",
  },
  {
    src: "/home/four-carousel.png",
    alt: "Innovative packaging solutions that mean business",
  },
  {
    src: "/home/five-carousel.png",
    alt: "Smarter, sustainable, impactful packaging",
  },
  {
    src: "/home/six-carousel.jpg",
    alt: "Over 70 percent of consumers prefer sustainable packaging",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink" aria-roledescription="carousel" aria-label="Home visuals">
      <div className="relative mx-auto aspect-[16/9] max-h-[82vh] w-full max-w-[1600px]">
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            className={`absolute inset-0 m-0 transition-opacity duration-1000 ${
              i === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </figure>
        ))}
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition ${
                i === index ? "w-8 bg-lime" : "w-2.5 bg-white/50 hover:bg-white"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
