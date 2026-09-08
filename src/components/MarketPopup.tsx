"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { popup } from "@/content/site";

export function MarketPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("monofix-geo-dismissed") === "1") return;
    const timer = window.setTimeout(() => setVisible(true), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem("monofix-geo-dismissed", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className="fixed right-4 bottom-4 z-50 w-[min(100%-2rem,22rem)] rounded-2xl border border-white/15 bg-navy p-5 text-white shadow-[0_24px_60px_rgba(7,21,31,0.45)] sm:right-6 sm:bottom-6"
      role="dialog"
      aria-labelledby="geo-popup-title"
    >
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-lg text-white/70 hover:bg-white/10"
        aria-label="Close"
      >
        ×
      </button>
      <p className="text-xs font-semibold tracking-[0.2em] text-lime uppercase">Priority desks</p>
      <h2 id="geo-popup-title" className="font-display mt-2 text-xl leading-tight">
        {popup.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{popup.body}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {popup.regions.map((region) => (
          <Link
            key={region.id}
            href={`/contact?region=${region.id}`}
            onClick={dismiss}
            className="rounded-xl bg-white/10 px-3 py-3 text-center"
          >
            <span className="block font-display text-lg">{region.label}</span>
            <span className="mt-1 block text-[11px] leading-snug text-white/70">{region.detail}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        onClick={dismiss}
        className="mt-4 flex items-center justify-center rounded-full bg-lime px-4 py-2.5 text-sm font-bold text-ink"
      >
        {popup.cta}
      </Link>
    </aside>
  );
}
