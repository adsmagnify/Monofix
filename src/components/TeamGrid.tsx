import { teamList } from "@/content/site";

type Person = (typeof teamList)[number];

function chips(value: string) {
  return value
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
}

function TeamProfile({ person }: { person: Person }) {
  const tags = [...chips(person.sectors), ...chips(person.companies)];

  return (
    <article className="rounded-3xl border-l-4 border-lime bg-white p-10 sm:p-12">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <p className="font-display text-sm text-blue">0{person.listOrder}</p>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer text-sm font-medium text-navy underline-offset-4 hover:text-blue hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <h3 className="font-display mt-3 text-3xl leading-tight text-ink">{person.name}</h3>
      <p className="mt-4 text-base leading-relaxed text-slate">{person.summary}</p>
      {tags.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-mist px-3 py-1.5 text-sm font-medium text-navy">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {person.credential ? (
        <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-blue uppercase">{person.credential}</p>
      ) : null}
    </article>
  );
}

export function TeamGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {teamList.map((person) => (
        <TeamProfile key={person.name} person={person} />
      ))}
    </div>
  );
}
