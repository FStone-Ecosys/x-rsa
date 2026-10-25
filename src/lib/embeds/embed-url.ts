export type EmbedSource = "pornhub" | "xhamster" | "xvideos";
export type ParsedEmbed = { source: EmbedSource; label: string; embedUrl: string };

export const EMBED_LABELS: Record<EmbedSource, string> = {
  pornhub: "Pornhub",
  xhamster: "xHamster",
  xvideos: "XVideos",
};

function hostIs(host: string, domain: string): boolean {
  return host === domain || host.endsWith(`.${domain}`);
}

/** Convert a normal share URL into the official embed URL. Returns null for anything else. */
export function toEmbed(raw: string): ParsedEmbed | null {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    return null;
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  const host = u.hostname.toLowerCase();
  const parts = u.pathname.split("/").filter(Boolean);

  if (hostIs(host, "pornhub.com")) {
    const key = u.searchParams.get("viewkey");
    if (parts[0] === "view_video.php" && key && /^[A-Za-z0-9]+$/.test(key)) {
      return mk("pornhub", `https://www.pornhub.com/embed/${key}`);
    }
    return null;
  }
  if (hostIs(host, "xhamster.com")) {
    const slug = parts[0] === "videos" ? parts[1] : undefined;
    const m = slug?.match(/-(\d+)$/) ?? slug?.match(/^(\d+)$/);
    if (m) return mk("xhamster", `https://xhamster.com/xembed.php?video=${m[1]}`);
    return null;
  }
  if (hostIs(host, "xvideos.com")) {
    const m = parts[0]?.match(/^video\.?(\d+)$/);
    if (m) return mk("xvideos", `https://www.xvideos.com/embedframe/${m[1]}`);
    return null;
  }
  return null;
}

function mk(source: EmbedSource, embedUrl: string): ParsedEmbed {
  return { source, label: EMBED_LABELS[source], embedUrl };
}
