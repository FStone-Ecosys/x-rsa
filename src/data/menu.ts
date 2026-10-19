export type City = "Johannesburg" | "Cape Town" | "Durban";
export type Tag = "Amateur" | "Local" | "Verified" | "Limited" | "Members";
export type Voice = "en" | "af" | "zu";
export type TierId = "club" | "regular" | "house";

export type Scoop = {
  id: string;
  name: string;
  parlour: string;
  city: City;
  tags: Tag[];
  note: string;
  price: string;
  image: string;
  tray: "board" | "joburg";
};

export const scoops: Scoop[] = [
  {
    id: "joburg-morning",
    name: "Joburg Morning Vibes",
    parlour: "Jabu",
    city: "Johannesburg",
    tags: ["Local", "Amateur"],
    note: "28 · Black · Versatile",
    price: "Free teaser",
    image: "/scoops/rooibos.jpg",
    tray: "board",
  },
  {
    id: "cape-cutie",
    name: "Cape Town Cutie",
    parlour: "Dylan",
    city: "Cape Town",
    tags: ["Local", "Amateur"],
    note: "24 · Coloured · Bottom",
    price: "Free teaser",
    image: "/scoops/naartjie.jpg",
    tray: "board",
  },
  {
    id: "durban-gym",
    name: "Durban Gym Session",
    parlour: "Wade",
    city: "Durban",
    tags: ["Local", "Verified"],
    note: "31 · White · Top",
    price: "Free teaser",
    image: "/scoops/malva.jpg",
    tray: "board",
  },
  {
    id: "indian-next",
    name: "Indian Boy Next Door",
    parlour: "Zayd",
    city: "Durban",
    tags: ["Local", "Amateur"],
    note: "26 · Indian · Versatile",
    price: "Free teaser",
    image: "/scoops/crisp.jpg",
    tray: "board",
  },
  {
    id: "soweto-nights",
    name: "Soweto Nights",
    parlour: "Thabo",
    city: "Johannesburg",
    tags: ["Amateur", "Local"],
    note: "29 · Black · Bottom",
    price: "Members",
    image: "/scoops/coffee.jpg",
    tray: "joburg",
  },
  {
    id: "beach-breeze",
    name: "Beach Breeze",
    parlour: "Reece",
    city: "Cape Town",
    tags: ["Local", "Verified"],
    note: "23 · Coloured · Versatile",
    price: "Members",
    image: "/scoops/milktart.jpg",
    tray: "joburg",
  },
  {
    id: "blond-buff",
    name: "Blond & Buff",
    parlour: "Brent",
    city: "Durban",
    tags: ["Verified", "Limited"],
    note: "34 · White · Top",
    price: "Members",
    image: "/scoops/mango.jpg",
    tray: "joburg",
  },
  {
    id: "private-jozi",
    name: "Private Jozi Link",
    parlour: "Kamo",
    city: "Johannesburg",
    tags: ["Members", "Local"],
    note: "27 · Black · Versatile",
    price: "Members",
    image: "/scoops/hero.jpg",
    tray: "joburg",
  },
];

export const tiers: {
  id: TierId;
  price: string;
  cadence: "once" | "month";
  perks: string[];
}[] = [
  {
    id: "club",
    price: "R119",
    cadence: "once",
    perks: ["Member access", "City filters", "No ads"],
  },
  {
    id: "regular",
    price: "R249",
    cadence: "month",
    perks: ["Full local library", "PPV unlocks", "Tips"],
  },
  {
    id: "house",
    price: "R499",
    cadence: "month",
    perks: ["Exclusive drops", "Creator support", "Priority access"],
  },
];

export const cities: City[] = ["Johannesburg", "Cape Town", "Durban"];
export const tags: Tag[] = ["Amateur", "Local", "Verified", "Limited", "Members"];

type Copy = {
  kicker: string;
  gateBody: string;
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
  cityTitle: string;
  citySub: string;
  tiersTitle: string;
  tiersSub: string;
  footer1: string;
  footer2: string;
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
    kicker: "South African local content",
    gateBody: "A members' platform for real local guys. Look for free. The club is R119, once.",
    enter: "Step inside",
    leave: "Not tonight",
    back: "Actually, let me in",
    closed: "The platform stays open.",
    fine: "Demo only. Stepping in does not charge a card. 18+ only.",
    stamp: "Real local. City first. Members only.",
    search: "Search guys, cities, or categories",
    hero: "Real SA guys. Your city. Your scene.",
    heroSub: "Genuine content from Johannesburg, Cape Town, Durban and everywhere in Mzansi.",
    cta: "Unlock Local — R119",
    heroNote: "Private videos · Verified locals · No ads",
    featured: "Featured",
    cityTitle: "Johannesburg Scene",
    citySub: "Amateur content from real Johannesburg locals. Unfiltered. Authentic. Yours.",
    tiersTitle: "Membership",
    tiersSub: "R119 once opens the club. Higher tiers are separate, and this checkout is a demo.",
    footer1: "X-RSA · www.x-rsa.lfstn.xyz · Demo platform. Nothing is charged.",
    footer2: "Creators keep 75% · Local first · Privacy respected",
    joined: "You're in",
    allCities: "All cities",
    locked: "Members",
    demoPay: "Demo only — nothing is charged.",
    once: "once",
    month: "/ month",
    empty: "Nothing here. Try another city or filter.",
    filters: {
      All: "All",
      Amateur: "Amateur",
      Local: "Local",
      Verified: "Verified",
      Limited: "Limited",
      Members: "Members",
    },
    tierName: { club: "Club", regular: "Regular", house: "House" },
    cityName: {
      Johannesburg: "Johannesburg",
      "Cape Town": "Cape Town",
      Durban: "Durban",
    },
  },
  af: {
    kicker: "Suid-Afrikaanse plaaslike inhoud",
    gateBody: "’n Lede-platform vir regte plaaslike ouens. Kyk gratis. Die klub is R119, eenmalig.",
    enter: "Stap in",
    leave: "Nie vanaand nie",
    back: "Tog maar in",
    closed: "Die platform bly oop.",
    fine: "Net ’n demo. Geen kaart word gehef nie. 18+ alleenlik.",
    stamp: "Regte plaaslik. Stad eerste. Lede alleenlik.",
    search: "Soek ouens, stede of kategorieë",
    hero: "Regte SA ouens. Jou stad. Jou toneel.",
    heroSub: "Egte inhoud uit Johannesburg, Kaapstad, Durban en oral in Mzansi.",
    cta: "Ontsluit Plaaslik — R119",
    heroNote: "Private video’s · Geverifieerde plaaslikes · Geen advertensies",
    featured: "Uitgelig",
    cityTitle: "Johannesburg-toneel",
    citySub: "Amateur-inhoud van regte Johannesburg-plaaslikes. Ongefiltreer. Outentiek. Joune.",
    tiersTitle: "Lidmaatskap",
    tiersSub: "R119 eenmalig maak die klub oop. Hoër vlakke is apart, en dié betaal is ’n demo.",
    footer1: "X-RSA · www.x-rsa.lfstn.xyz · Demo. Niks word gehef nie.",
    footer2: "Skeppers hou 75% · Plaaslik eerste · Privaatheid gerespekteer",
    joined: "Jy’s in",
    allCities: "Alle stede",
    locked: "Lede",
    demoPay: "Net ’n demo — niks word gehef nie.",
    once: "eenmalig",
    month: "/ maand",
    empty: "Niks hier nie. Probeer ’n ander stad of filter.",
    filters: {
      All: "Alles",
      Amateur: "Amateur",
      Local: "Plaaslik",
      Verified: "Geverifieer",
      Limited: "Beperk",
      Members: "Lede",
    },
    tierName: { club: "Klub", regular: "Gewoon", house: "Huis" },
    cityName: {
      Johannesburg: "Johannesburg",
      "Cape Town": "Kaapstad",
      Durban: "Durban",
    },
  },
  zu: {
    kicker: "Okuqukethwe kwaseNingizimu Afrika",
    gateBody: "Inkundla yamalungu yabafana bangempela bendawo. Buka mahhala. Iklabhu yi-R119, kanye.",
    enter: "Ngena",
    leave: "Hhayi namuhla",
    back: "Ngivumele ngingene",
    closed: "Inkundla ihlala ivuliwe.",
    fine: "Isibonelo kuphela. Ayikho imali ekhokhiswayo. Abantu abadala kuphela.",
    stamp: "Okwangempela. Idolobha kuqala. Amalungu kuphela.",
    search: "Sesha abafana, amadolobha, noma izigaba",
    hero: "Abafana bangempela baseSA. Idolobha lakho. Isigcawu sakho.",
    heroSub: "Okuqukethwe kwangempela kusuka eGoli, eKapa, eThekwini nasezindaweni zonke.",
    cta: "Vula Okwendawo — R119",
    heroNote: "Amavidiyo ayimfihlo · Abaqinisekisiwe · Azikho izikhangiso",
    featured: "Okugqamile",
    cityTitle: "Isigcawu saseGoli",
    citySub: "Okuqukethwe kwama-amateur kusuka kubantu bangempela baseGoli. Akuhluzwa. Kwangempela. Okwakho.",
    tiersTitle: "Ubulungu",
    tiersSub: "U-R119 kanye uvula iklabhu. Amazinga aphezulu ahlukene. Lokhu kuyisibonelo.",
    footer1: "X-RSA · www.x-rsa.lfstn.xyz · Isibonelo. Ayikho imali ekhokhiswayo.",
    footer2: "Abadali bagcina u-75% · Okwasekhaya kuqala · Ubumfihlo buhlonishwa",
    joined: "Usungenile",
    allCities: "Wonke amadolobha",
    locked: "Amalungu",
    demoPay: "Isibonelo kuphela — ayikho imali.",
    once: "kanye",
    month: "/ ngenyanga",
    empty: "Akukho lutho lapha. Zama elinye idolobha noma isihlungi.",
    filters: {
      All: "Konke",
      Amateur: "I-amateur",
      Local: "Okwasendaweni",
      Verified: "Okuqinisekisiwe",
      Limited: "Okulinganiselwe",
      Members: "Amalungu",
    },
    tierName: { club: "Iklabhu", regular: "Okujwayelekile", house: "Ikhaya" },
    cityName: {
      Johannesburg: "eGoli",
      "Cape Town": "eKapa",
      Durban: "eThekwini",
    },
  },
};
