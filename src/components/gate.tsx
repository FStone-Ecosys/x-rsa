import { useState } from "react";
import { copy, type Voice } from "@/data/scene";
import { Monogram } from "@/components/monogram";
import { useClub } from "@/lib/club-store";

const marks = [
  { label: "MS", hue: 330 },
  { label: "18+", hue: 300 },
  { label: "SA", hue: 190 },
];

export function Gate() {
  const enter = useClub((s) => s.enter);
  const [voice, setVoice] = useState<Voice>("en");
  const [closed, setClosed] = useState(false);
  const t = copy[voice];

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-5 py-12">
      <div className="w-full max-w-xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          {marks.map((mark) => (
            <Monogram
              key={mark.label}
              label={mark.label}
              hue={mark.hue}
              className="h-16 w-16 rounded-full text-lg ring-2 ring-line"
            />
          ))}
        </div>
        <p className="text-xs font-medium tracking-widest text-gold uppercase">{t.kicker}</p>
        <h1 className="mt-3 font-display text-6xl leading-none text-fg">
          Mzansi <span className="text-accent">Scene</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-muted">
          {closed ? t.closed : t.gateBody}
        </p>
        {!closed && (
          <ul className="mx-auto mt-5 flex max-w-md flex-col gap-2 text-left text-sm text-fg">
            {t.gatePoints.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={enter}
            className="min-h-11 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink"
          >
            {closed ? t.back : t.enter}
          </button>
          {!closed && (
            <button
              type="button"
              onClick={() => setClosed(true)}
              className="min-h-11 rounded-full bg-surface-2 px-6 text-sm font-semibold text-fg"
            >
              {t.leave}
            </button>
          )}
        </div>
        <p className="mt-6 text-sm text-muted">{t.fine}</p>
        <p className="mt-3 text-xs tracking-widest text-gold uppercase">{t.stamp}</p>
        <a
          href="https://www.x-rsa.lfstn.xyz"
          className="mt-6 inline-block text-sm text-fg underline decoration-line underline-offset-4"
        >
          www.x-rsa.lfstn.xyz
        </a>
        <div className="mt-6 flex justify-center gap-2" role="group" aria-label="Language">
          {(["en", "af", "zu"] as Voice[]).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setVoice(id)}
              className={`min-h-11 rounded-full px-4 text-sm ${
                voice === id ? "bg-accent text-accent-ink" : "bg-surface text-muted"
              }`}
            >
              {id === "en" ? "English" : id === "af" ? "Afrikaans" : "isiZulu"}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
