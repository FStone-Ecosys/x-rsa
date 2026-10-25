# Mzansi Scene (X-RSA)

A private, 18+ members' platform for local South African gay creators. Real locals, amateur creators, city first, in English, Afrikaans and isiZulu.

[www.x-rsa.lfstn.xyz](https://www.x-rsa.lfstn.xyz)

- 18+ only. Every creator is a verified adult who consented to share their content.
- Privacy first: discreet billing, and you can leave at any time.
- Creators keep 75%.
- City filters: Johannesburg, Cape Town, Durban, Pretoria, Gqeberha.
- All creator profiles in `src/data/scene.ts` are fictional demo placeholders, never real people. Artwork is abstract (gradients and monograms), no photos.

Demo checkout. Nothing is charged.

| Tier | Price | Includes |
| --- | --- | --- |
| Entry | R119 once | Access to the feed, city filters, no ads |
| Regular | R249 / month | More content, member pricing on PPV, tips |
| Inner Circle | R499 / month | Full archive, priority DMs, PPV credits |

```bash
npm install
npm run dev
```

## How to add a free embed (30 seconds)

1. Copy the normal share link from Pornhub, xHamster or XVideos (only these three work).
2. Open `src/data/embeds.ts` and add a line inside the `embeds` array:
   `{ url: "https://www.xvideos.com/video123/slug", title: "Optional", city: "Durban" },`
3. Commit and push. It appears in the free **Taste** section after the 18+ gate, played by the site's official embed player, labelled "via …".

Only embed via official players; never download or re-host. Links from any other site are ignored. Pull any video on request.
