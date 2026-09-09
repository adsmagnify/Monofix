import { whyTable } from "@/content/site";

const chapters = [
  {
    id: "brief",
    kicker: "01 — The brief",
    title: "Where agencies stop",
    note: "Design houses cover the start. Vendors are not in the room.",
    rows: whyTable.rows.slice(0, 4),
  },
  {
    id: "line",
    kicker: "02 — The line",
    title: "Where vendors begin",
    note: "Engineering and production sit here. Agencies have already left.",
    rows: whyTable.rows.slice(4, 11),
  },
  {
    id: "launch",
    kicker: "03 — The launch",
    title: "Where only MONOFIX stays",
    note: "Retail, training and end-to-end ownership — no one else holds this.",
    rows: whyTable.rows.slice(11),
  },
] as const;

function Node({ on, featured = false }: { on: boolean; featured?: boolean }) {
  return (
    <span
      className={`inline-grid h-3.5 w-3.5 place-items-center rounded-full ring-2 ${
        on
          ? featured
            ? "bg-lime ring-lime shadow-[0_0_16px_rgba(198,226,0,0.55)]"
            : "bg-blue ring-blue"
          : "bg-transparent ring-white/20"
      }`}
      aria-hidden="true"
    />
  );
}

export function DifferenceTable() {
  return (
    <div className="mt-8">
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">They start</p>
          <p className="font-display mt-1 text-lg text-white/80">Design house / Ad. agency</p>
          <p className="mt-2 text-sm text-white/45">Brief, concepts, graphics — then they hand over.</p>
        </div>
        <div className="rounded-2xl border border-lime bg-lime px-5 py-4 text-ink shadow-[0_12px_40px_rgba(198,226,0,0.18)]">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase">The unbroken line</p>
          <p className="font-display mt-1 text-lg">★ MONOFIX</p>
          <p className="mt-2 text-sm text-ink/70">From first sketch to a pack that is live on shelf.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">They finish</p>
          <p className="font-display mt-1 text-lg text-white/80">Vendor / Engineering co.</p>
          <p className="mt-2 text-sm text-white/45">Tools, filling, production — after the brief is already locked.</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <article
            key={chapter.id}
            className="relative rounded-3xl border border-white/10 bg-ink/40 p-5 backdrop-blur-sm sm:p-6"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] text-lime uppercase">{chapter.kicker}</p>
            <h3 className="font-display mt-2 text-2xl text-white">{chapter.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{chapter.note}</p>

            <ul className="mt-5 grid gap-2">
              {chapter.rows.map((row) => {
                const emphasize = "emphasize" in row && row.emphasize;
                return (
                  <li
                    key={row.capability}
                    className={`rounded-2xl px-3 py-2.5 ${
                      emphasize ? "bg-lime text-ink" : "bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={`text-sm font-medium ${emphasize ? "text-ink" : "text-white"}`}>
                        {row.capability}
                      </span>
                      <span className="flex items-center gap-2" aria-label="Who covers this">
                        <Node on={row.agency} />
                        <Node on={row.monofix} featured />
                        <Node on={row.vendor} />
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs tracking-[0.18em] text-white/35 uppercase">
        Left dot · agency &nbsp;·&nbsp; Centre glow · MONOFIX &nbsp;·&nbsp; Right dot · vendor
      </p>
    </div>
  );
}
