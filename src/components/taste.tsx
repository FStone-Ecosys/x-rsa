import { embeds } from "@/data/embeds";
import type { Voice } from "@/data/scene";
import { toEmbed } from "@/lib/embeds/embed-url";

const tasteCopy: Record<Voice, { title: string; sub: string; note: string; via: string; cta: string }> = {
  en: {
    title: "Taste",
    sub: "Free to watch, no R119 needed.",
    note: "Partner embeds from official players. These are not Mzansi Scene creators.",
    via: "via",
    cta: "Want the real locals? Unlock for R119",
  },
  af: {
    title: "Proe",
    sub: "Gratis om te kyk, geen R119 nodig nie.",
    note: "Vennoot-insluitings van amptelike spelers. Dit is nie Mzansi Scene-skeppers nie.",
    via: "via",
    cta: "Wil jy die regte locals hê? Ontsluit vir R119",
  },
  zu: {
    title: "Nambitha",
    sub: "Mahhala ukubuka, akudingeki i-R119.",
    note: "Okushumekiwe kozakwethu kusuka kubadlali abasemthethweni. Laba akubona abadali be-Mzansi Scene.",
    via: "nge",
    cta: "Ufuna abantu bendawo bangempela? Vula nge-R119",
  },
};

export function Taste({ voice, onUnlock }: { voice: Voice; onUnlock: () => void }) {
  const items = embeds
    .map((e) => ({ ...e, parsed: toEmbed(e.url) }))
    .filter((e) => e.parsed !== null);
  if (items.length === 0) return null;
  const t = tasteCopy[voice];

  return (
    <section id="taste" className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h2 className="font-display text-3xl">{t.title}</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">{t.sub}</p>
      <p className="mt-1 max-w-xl text-xs text-muted">{t.note}</p>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.parsed!.embedUrl} className="overflow-hidden rounded-2xl bg-surface">
            <div className="relative aspect-video w-full bg-bg">
              <iframe
                src={item.parsed!.embedUrl}
                title={item.title ?? `${item.parsed!.label} video`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allow="fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="flex items-center justify-between gap-2 p-3 text-sm">
              <span className="truncate">{item.title ?? ""}</span>
              <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                {t.via} {item.parsed!.label}
                {item.city ? ` · ${item.city}` : ""}
              </span>
            </div>
          </article>
        ))}
      </div>
      <button
        type="button"
        onClick={onUnlock}
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink"
      >
        {t.cta}
      </button>
    </section>
  );
}
