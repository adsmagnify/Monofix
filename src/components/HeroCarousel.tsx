"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { homeSlides } from "@/content/site";

export function HeroCarousel() {
  const count = homeSlides.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5200);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section
      className="hero-viewport relative h-svh min-h-screen w-full overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="Home banner"
    >
      {homeSlides.map((slide, i) => {
        const active = i === index;
        return (
          <figure
            key={slide.src}
            className={`absolute inset-0 m-0 transition-opacity duration-[1400ms] ease-in-out ${
              active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i < 2}
              quality={100}
              unoptimized
              draggable={false}
              className={`object-cover object-center ${active ? "hero-kenburns" : ""}`}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />
            <div
              className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/55 to-transparent"
              aria-hidden="true"
            />
          </figure>
        );
      })}
      <div className="hero-grain pointer-events-none absolute inset-0 z-20" aria-hidden="true" />
    </section>
  );
}
