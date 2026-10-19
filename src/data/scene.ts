export type City = "Johannesburg" | "Cape Town" | "Durban" | "Pretoria" | "Gqeberha";
export type Tag = "Amateur" | "Real locals" | "New" | "PPV" | "Members";
export type Voice = "en" | "af" | "zu";
export type TierId = "entry" | "regular" | "house";
export type Lane = "featured" | "local";

/** Demo profiles only. Every handle is fictional placeholder data, never a real person. */
export type Creator = {
  id: string;
  handle: string;
  title: string;
  city: City;
  tags: Tag[];
  langs: Voice[];
  hue: number;
  price: string;
  lane: Lane;
};

export const creators: Creator[] = [
  {
    id: "demo-jozi-nights",
    handle: "jozi.after.dark",
    title: "Late shift in Braamfontein",
    city: "Johannesburg",
    tags: ["Real locals", "Amateur"],
    langs: ["en", "zu"],
    hue: 330,
    price: "Free teaser",
    lane: "featured",
  },
  {
    id: "demo-kaap-sunset",
    handle: "kaapse.sonsak",
    title: "Golden hour, Sea Point",
    city: "Cape Town",
    tags: ["Amateur", "New"],
    langs: ["af", "en"],
    hue: 300,
    price: "Free teaser",
    lane: "featured",
  },
  {
    id: "demo-durbs-heat",
    handle: "durbs.heatwave",
    title: "Humid nights on the coast",
    city: "Durban",
    tags: ["Real locals", "PPV"],
    langs: ["zu", "en"],
    hue: 190,
    price: "PPV R59",
    lane: "featured",
  },
  {
    id: "demo-pta-jacaranda",
    handle: "pta.jacaranda",
    title: "Jacaranda season diaries",
    city: "Pretoria",
    tags: ["New", "Amateur"],
    langs: ["af", "en"],
    hue: 270,
    price: "Free teaser",
    lane: "featured",
  },
  {
    id: "demo-pe-windy",
    handle: "windy.city.bay",
    title: "Bay breeze, slow mornings",
    city: "Gqeberha",
    tags: ["Real locals", "New"],
    langs: ["en", "af"],
    hue: 210,
    price: "Members",
    lane: "local",
  },
  {
    id: "demo-soweto-vibe",
    handle: "soweto.slowburn",
    title: "Sunday slow burn",
    city: "Johannesburg",
    tags: ["Members", "Real locals"],
    langs: ["zu", "en"],
    hue: 320,
    price: "Members",
    lane: "local",
  },
  {
    id: "demo-melville-ppv",
    handle: "melville.mood",
    title: "Behind the curtain, part two",
    city: "Johannesburg",
    tags: ["PPV", "Amateur"],
    langs: ["en", "af"],
    hue: 340,
    price: "PPV R79",
    lane: "local",
  },
  {
    id: "demo-observatory",
    handle: "obs.after.hours",
    title: "Observatory after hours",
    city: "Cape Town",
    tags: ["Members", "Amateur"],
    langs: ["af", "en"],
    hue: 285,
    price: "Members",
    lane: "local",
  },
];

export const tiers: { id: TierId; price: string; cadence: "once" | "month" }[] = [
  { id: "entry", price: "R119", cadence: "once" },
  { id: "regular", price: "R249", cadence: "month" },
  { id: "house", price: "R499", cadence: "month" },
];

export const cities: City[] = ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Gqeberha"];
export const tags: Tag[] = ["Amateur", "Real locals", "New", "PPV", "Members"];

/** Two-letter monogram for the abstract avatar placeholders. */
export function monogram(handle: string): string {
  const parts = handle.split(/[.\s_-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? parts[0]?.[1] ?? "")).toUpperCase();
}

type Copy = {
  kicker: string;
  gateTitle: string;
  gateBody: string;
  gatePoints: string[];
  enter: string;
  leave: string;
  back: string;
  closed: string;
  fine: string;
  stamp: string;
  search: string;
  hero: string;
  heroSub: string;
  cta: string;
  heroNote: string;
  featured: string;
  localTitle: string;
  localSub: string;
  tiersTitle: string;
  tiersSub: string;
  perks: Record<TierId, string[]>;
  footer1: string;
  footer2: string;
  demoProfile: string;
  joined: string;
  allCities: string;
  locked: string;
  demoPay: string;
  once: string;
  month: string;
  empty: string;
  filters: Record<Tag | "All", string>;
  tierName: Record<TierId, string>;
  cityName: Record<City, string>;
};

export const copy: Record<Voice, Copy> = {
  en: {
    kicker: "Mzansi Scene · 18+ only",
    gateTitle: "Mzansi Scene",
    gateBody:
      "A private, members-only home for local South African gay creators. Entry is R119, once.",
    gatePoints: [
      "Strictly 18+. By entering you confirm you are an adult.",
      "Every creator is a verified adult who consented to share their content.",
      "Discreet billing. Nothing on your statement says what this is.",
      "You can leave at any time, no questions asked.",
    ],
    enter: "I'm 18+, let me in",
    leave: "Leave",
    back: "Changed my mind, let me in",
    closed: "No problem. Nothing was saved and nothing was charged.",
    fine: "Demo only. Entering does not charge a card. Profiles shown are fictional placeholders.",
    stamp: "Real locals · Consent first · Privacy always",
    search: "Search creators, cities or tags",
    hero: "Real local guys. Your city. Your scene.",
    heroSub:
      "Amateur creators from Johannesburg, Cape Town, Durban, Pretoria, Gqeberha and all over Mzansi, in English, Afrikaans and isiZulu.",
    cta: "Get entry — R119",
    heroNote: "Verified adults · Discreet billing · No ads",
    featured: "Featured creators",
    localTitle: "Real locals",
    localSub: "Fresh drops from amateur creators near you. Members get the full feed.",
    tiersTitle: "Membership",
    tiersSub: "R119 once opens the feed. Higher tiers add more. This checkout is a demo.",
    perks: {
      entry: ["Access to the feed", "City filters", "No ads"],
      regular: ["More content every week", "Member pricing on PPV", "Send tips to creators"],
      house: ["Full archive", "Priority DMs", "Monthly PPV credits"],
    },
    footer1: "Mzansi Scene · www.x-rsa.lfstn.xyz · Demo platform. Nothing is charged.",
    footer2: "Creators keep 75% · 18+ verified adults only · Privacy first",
    demoProfile: "Demo profile",
    joined: "You're in",
    allCities: "All cities",
    locked: "Members",
    demoPay: "Demo only — nothing is charged.",
    once: "once",
    month: "/ month",
    empty: "Nothing here yet. Try another city or tag.",
    filters: {
      All: "All",
      Amateur: "Amateur",
      "Real locals": "Real locals",
      New: "New",
      PPV: "PPV",
      Members: "Members",
    },
    tierName: { entry: "Entry", regular: "Regular", house: "Inner Circle" },
    cityName: {
      Johannesburg: "Johannesburg",
      "Cape Town": "Cape Town",
      Durban: "Durban",
      Pretoria: "Pretoria",
      Gqeberha: "Gqeberha",
    },
  },
  af: {
    kicker: "Mzansi Scene · Slegs 18+",
    gateTitle: "Mzansi Scene",
    gateBody:
      "’n Privaat tuiste, net vir lede, vir plaaslike Suid-Afrikaanse gay skeppers. Toegang kos R119, eenmalig.",
    gatePoints: [
      "Streng 18+. Deur in te gaan bevestig jy dat jy ’n volwassene is.",
      "Elke skepper is ’n geverifieerde volwassene wat ingestem het om sy inhoud te deel.",
      "Diskrete fakturering. Niks op jou staat sê wat dit is nie.",
      "Jy kan enige tyd weggaan, sonder vrae.",
    ],
    enter: "Ek is 18+, laat my in",
    leave: "Gaan weg",
    back: "Ek het van plan verander, laat my in",
    closed: "Geen probleem nie. Niks is gestoor en niks is gehef nie.",
    fine: "Net ’n demo. Geen kaart word gehef nie. Die profiele is fiktiewe plekhouers.",
    stamp: "Regte plaaslikes · Toestemming eerste · Altyd privaat",
    search: "Soek skeppers, stede of etikette",
    hero: "Regte plaaslike ouens. Jou stad. Jou scene.",
    heroSub:
      "Amateur-skeppers uit Johannesburg, Kaapstad, Durban, Pretoria, Gqeberha en oral in Mzansi, in Engels, Afrikaans en isiZulu.",
    cta: "Kry toegang — R119",
    heroNote: "Geverifieerde volwassenes · Diskrete fakturering · Geen advertensies",
    featured: "Uitgeligte skeppers",
    localTitle: "Regte plaaslikes",
    localSub: "Vars plasings van amateur-skeppers naby jou. Lede kry die volle voer.",
    tiersTitle: "Lidmaatskap",
    tiersSub:
      "R119 eenmalig maak die voer oop. Hoër vlakke gee meer. Hierdie betaalblad is ’n demo.",
    perks: {
      entry: ["Toegang tot die voer", "Stadfilters", "Geen advertensies"],
      regular: ["Elke week meer inhoud", "Ledepryse op PPV", "Stuur fooitjies aan skeppers"],
      house: ["Volle argief", "Voorrang-DM’s", "Maandelikse PPV-krediete"],
    },
    footer1: "Mzansi Scene · www.x-rsa.lfstn.xyz · Demo-platform. Niks word gehef nie.",
    footer2: "Skeppers hou 75% · Slegs geverifieerde volwassenes (18+) · Privaatheid eerste",
    demoProfile: "Demo-profiel",
    joined: "Jy’s in",
    allCities: "Alle stede",
    locked: "Lede",
    demoPay: "Net ’n demo — niks word gehef nie.",
    once: "eenmalig",
    month: "/ maand",
    empty: "Nog niks hier nie. Probeer ’n ander stad of etiket.",
    filters: {
      All: "Alles",
      Amateur: "Amateur",
      "Real locals": "Regte plaaslikes",
      New: "Nuut",
      PPV: "PPV",
      Members: "Lede",
    },
    tierName: { entry: "Toegang", regular: "Gereeld", house: "Binnekring" },
    cityName: {
      Johannesburg: "Johannesburg",
      "Cape Town": "Kaapstad",
      Durban: "Durban",
      Pretoria: "Pretoria",
      Gqeberha: "Gqeberha",
    },
  },
  zu: {
    kicker: "Mzansi Scene · Abaneminyaka engu-18+ kuphela",
    gateTitle: "Mzansi Scene",
    gateBody:
      "Ikhaya eliyimfihlo, elamalungu kuphela, labadali bezitabane bendawo baseNingizimu Afrika. Ukungena kuyi-R119, kanye nje.",
    gatePoints: [
      "Abaneminyaka engu-18 nangaphezulu kuphela. Ngokungena uqinisekisa ukuthi ungumuntu omdala.",
      "Wonke umdali ungumuntu omdala oqinisekisiwe ovumile ukwabelana ngokuqukethwe kwakhe.",
      "Ukukhokha okuyimfihlo. Akukho lutho esitatimendeni sakho oluveza ukuthi kuyini.",
      "Ungahamba noma nini, ngaphandle kwemibuzo.",
    ],
    enter: "Ngineminyaka engu-18+, ngivumele ngingene",
    leave: "Hamba",
    back: "Ngishintshe umqondo, ngivumele ngingene",
    closed: "Kulungile. Akukho okugciniwe futhi ayikho imali ekhokhisiwe.",
    fine: "Isibonelo kuphela. Alikho ikhadi elikhokhiswayo. Amaphrofayela akhonjiswayo angawokuzenzela.",
    stamp: "Abantu bendawo bangempela · Imvume kuqala · Ubumfihlo njalo",
    search: "Sesha abadali, amadolobha noma omaki",
    hero: "Abafana bendawo bangempela. Idolobha lakho. Isigcawu sakho.",
    heroSub:
      "Abadali abasafufusa abavela eGoli, eKapa, eThekwini, ePitoli, eGqeberha nakuyo yonke iMzansi, ngesiNgisi, isiBhunu nesiZulu.",
    cta: "Thola ukungena — R119",
    heroNote: "Abantu abadala abaqinisekisiwe · Ukukhokha okuyimfihlo · Azikho izikhangiso",
    featured: "Abadali abagqamile",
    localTitle: "Abantu bendawo bangempela",
    localSub: "Okusha okuvela kubadali abasafufusa abaseduze nawe. Amalungu athola konke.",
    tiersTitle: "Ubulungu",
    tiersSub:
      "U-R119 kanye uvula okuqukethwe. Amazinga aphezulu anikeza okwengeziwe. Lokhu kukhokha kuyisibonelo.",
    perks: {
      entry: ["Ukufinyelela kokuqukethwe", "Izihlungi zamadolobha", "Azikho izikhangiso"],
      regular: [
        "Okuqukethwe okwengeziwe isonto nesonto",
        "Amanani amalungu ku-PPV",
        "Thumela amathiphu kubadali",
      ],
      house: [
        "Wonke umlando wokuqukethwe",
        "Ama-DM aphambili",
        "Amakhredithi e-PPV njalo ngenyanga",
      ],
    },
    footer1: "Mzansi Scene · www.x-rsa.lfstn.xyz · Inkundla yesibonelo. Ayikho imali ekhokhiswayo.",
    footer2:
      "Abadali bagcina u-75% · Abantu abadala abaqinisekisiwe (18+) kuphela · Ubumfihlo kuqala",
    demoProfile: "Iphrofayela yesibonelo",
    joined: "Usungenile",
    allCities: "Wonke amadolobha",
    locked: "Amalungu",
    demoPay: "Isibonelo kuphela — ayikho imali ekhokhiswayo.",
    once: "kanye",
    month: "/ ngenyanga",
    empty: "Akukho lutho okwamanje. Zama elinye idolobha noma umaki.",
    filters: {
      All: "Konke",
      Amateur: "Abasafufusa",
      "Real locals": "Abendawo",
      New: "Okusha",
      PPV: "PPV",
      Members: "Amalungu",
    },
    tierName: { entry: "Ukungena", regular: "Njalo", house: "Isigungu Sangaphakathi" },
    cityName: {
      Johannesburg: "eGoli",
      "Cape Town": "eKapa",
      Durban: "eThekwini",
      Pretoria: "ePitoli",
      Gqeberha: "eGqeberha",
    },
  },
};
