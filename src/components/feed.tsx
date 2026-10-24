import { useMemo, useState } from "react";
import { Lock, Search } from "lucide-react";
import {
  cities,
  cityArt,
  heroArt,
  copy,
  monogram,
  creators,
  tags,
  tiers,
  type City,
  type Tag,
  type TierId,
  type Voice,
} from "@/data/scene";
import { Monogram } from "@/components/monogram";
import { useClub } from "@/lib/club-store";

export function Feed() {
  const tier = useClub((s) => s.tier);
  const join = useClub((s) => s.join);
  const leave = useClub((s) => s.leave);
  const [voice, setVoice] = useState<Voice>("en");
  const [city, setCity] = useState<City | "all">("all");
  const [tag, setTag] = useState<Tag | "All">("All");
  const [query, setQuery] = useState("");
  const [paid, setPaid] = useState(false);
  const t = copy[voice];

  const q = query.trim().toLowerCase();
  const match = (item: (typeof creators)[number]) => {
    if (city !== "all" && item.city !== city) return false;
    if (!q) return true;
    const blob = `${item.handle} ${item.city} ${item.title} ${item.tags.join(" ")}`.toLowerCase();
    return blob.includes(q);
  };

  const board = useMemo(
    () => creators.filter((s) => s.lane === "featured").filter(match),
    [city, q],
  );
  const local = useMemo(
    () =>
      creators
        .filter((s) => s.lane === "local")
        .filter(match)
        .filter((s) => (tag === "All" ? true : s.tags.includes(tag))),
    [city, q, tag],
  );

  const showLocal = true;

  function take(id: TierId) {
    join(id);
    setPaid(true);
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:px-6">
          <button
            type="button"
            onClick={leave}
            className="text-left font-display text-2xl leading-none"
          >
            Mzansi <span className="text-accent">Scene</span>
          </button>
          <label className="relative min-w-0 flex-1">
            <span className="sr-only">{t.search}</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              className="min-h-11 w-full rounded-full border border-line bg-surface pr-4 pl-10 text-sm text-fg placeholder:text-muted"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <select
              aria-label={t.allCities}
              value={city}
              onChange={(e) => setCity(e.target.value as City | "all")}
              className="min-h-11 rounded-full border border-line bg-surface px-3 text-sm"
            >
              <option value="all">{t.allCities}</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {t.cityName[c]}
                </option>
              ))}
            </select>
            <select
              aria-label="Language"
              value={voice}
              onChange={(e) => setVoice(e.target.value as Voice)}
              className="min-h-11 rounded-full border border-line bg-surface px-3 text-sm"
            >
              <option value="en">English</option>
              <option value="af">Afrikaans</option>
              <option value="zu">isiZulu</option>
            </select>
            {tier && (
              <span className="inline-flex min-h-11 items-center rounded-full bg-gold px-3 text-sm font-semibold text-accent-ink">
                {t.joined} · {t.tierName[tier]}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:px-6 md:py-16">
        <div>
          <p className="text-xs font-medium tracking-widest text-gold uppercase">
            www.x-rsa.lfstn.xyz
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none text-balance md:text-6xl">
            {t.hero}
          </h1>
          <p className="mt-4 max-w-md text-base text-muted">{t.heroSub}</p>
          <a
            href="#membership"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink"
          >
            {t.cta}
          </a>
          <p className="mt-3 text-sm text-muted">{t.heroNote}</p>
        </div>
        <Art
          src={heroArt}
          alt="Johannesburg skyline at night"
          label="MS"
          hue={320}
          className="aspect-video w-full rounded-2xl text-7xl"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <h2 className="mb-4 font-display text-3xl">{t.citiesTitle}</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {cities.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCity(city === c ? "all" : c)}
              className={`relative overflow-hidden rounded-xl text-left ${
                city === c ? "ring-2 ring-accent" : ""
              }`}
            >
              <Art
                src={cityArt[c]}
                alt={t.cityName[c]}
                label={c.slice(0, 2)}
                className="aspect-[16/10] w-full text-3xl"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-2 text-sm font-semibold">
                {t.cityName[c]}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 md:px-6">
        <h2 className="mb-1 flex items-center gap-2 font-display text-3xl">
          {t.featured}
          <span className="h-2 w-2 rounded-full bg-accent" />
        </h2>
        <p className="mb-4 max-w-xl text-sm text-muted">{t.foundingNote}</p>
        {board.length === 0 ? (
          <p className="text-sm text-muted">{t.empty}</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {board.map((creator) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
                cityLabel={t.cityName[creator.city]}
                locked={false}
                lockLabel={t.locked}
                demoLabel={t.demoProfile}
                soonLabel={t.comingSoon}
              />
            ))}
          </div>
        )}
      </section>

      {showLocal && (
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <h2 className="font-display text-3xl">{t.localTitle}</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">{t.localSub}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["All", ...tags] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setTag(id)}
                className={`min-h-11 rounded-full px-4 text-sm ${
                  tag === id ? "bg-accent text-accent-ink" : "bg-surface-2 text-fg"
                }`}
              >
                {t.filters[id]}
              </button>
            ))}
          </div>
          {local.length === 0 ? (
            <p className="mt-4 text-sm text-muted">{t.empty}</p>
          ) : (
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {local.map((creator) => {
                const locked = creator.tags.includes("Members") && !tier;
                return (
                  <CreatorCard
                    key={creator.id}
                    creator={creator}
                    cityLabel={t.cityName[creator.city]}
                    locked={locked}
                    lockLabel={t.locked}
                    demoLabel={t.demoProfile}
                    soonLabel={t.comingSoon}
                  />
                );
              })}
            </div>
          )}
        </section>
      )}

      <section id="membership" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 md:px-6">
        <h2 className="font-display text-3xl">{t.tiersTitle}</h2>
        <p className="mt-2 max-w-xl text-sm text-muted">{t.tiersSub}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tiers.map((plan) => {
            const active = tier === plan.id;
            return (
              <article
                key={plan.id}
                className="flex flex-col rounded-2xl border border-line bg-surface p-5"
              >
                <p className="text-sm text-muted">{t.tierName[plan.id]}</p>
                <p className="mt-2 font-display text-4xl text-gold">
                  {plan.price}
                  <span className="ml-2 font-sans text-sm text-muted">
                    {plan.cadence === "once" ? t.once : t.month}
                  </span>
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-fg">
                  {t.perks[plan.id].map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => take(plan.id)}
                  className={`mt-6 min-h-11 rounded-full px-4 text-sm font-semibold ${
                    active ? "bg-gold text-accent-ink" : "bg-accent text-accent-ink"
                  }`}
                >
                  {active ? t.joined : t.tierName[plan.id]}
                </button>
              </article>
            );
          })}
        </div>
        {paid && <p className="mt-4 text-sm text-gold">{t.demoPay}</p>}
      </section>

      <section id="creators" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-line">
          <Art
            src="/scene/card-smoke.webp"
            alt=""
            label="MS"
            className="absolute inset-0 h-full w-full opacity-40"
          />
          <div className="relative p-6 md:p-10">
            <h2 className="font-display text-4xl">{t.creatorTitle}</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">{t.creatorBody}</p>
            <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
              {t.creatorPoints.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <a
              href="#creators"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink"
            >
              {t.creatorCta}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
        <p>{t.footer1}</p>
        <p className="mt-1">{t.footer2}</p>
        <a
          href="https://www.x-rsa.lfstn.xyz"
          className="mt-3 inline-block text-fg underline underline-offset-4"
        >
          www.x-rsa.lfstn.xyz
        </a>
      </footer>
    </div>
  );
}

function CreatorCard({
  creator,
  cityLabel,
  locked,
  lockLabel,
  demoLabel,
  soonLabel,
}: {
  creator: (typeof creators)[number];
  cityLabel: string;
  locked: boolean;
  lockLabel: string;
  demoLabel: string;
  soonLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-surface">
      <div className="relative">
        <Art
          src={creator.art}
          alt=""
          label={monogram(creator.handle)}
          hue={creator.hue}
          className="aspect-[4/5] w-full text-5xl"
        />
        <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-ink">
          {cityLabel}
        </span>
        {locked && (
          <a
            href="#membership"
            className="absolute inset-0 flex items-end bg-bg/60 p-3 text-sm font-semibold text-fg"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-2">
              <Lock className="h-4 w-4" />
              {lockLabel}
            </span>
          </a>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-display text-xl leading-tight">{creator.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {soonLabel} · {creator.langs.map((l) => l.toUpperCase()).join(" · ")}
        </p>
        <p className="mt-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-gold">{creator.price}</span>
          <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
            {demoLabel}
          </span>
        </p>
      </div>
    </article>
  );
}

/** Atmospheric image with the monogram as fallback if it fails to load. */
function Art({
  src,
  alt,
  label,
  hue,
  className = "",
}: {
  src?: string;
  alt: string;
  label: string;
  hue?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <Monogram label={label} hue={hue} className={className} />;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`bg-bg object-cover ${className}`}
    />
  );
}
