export type City = "Johannesburg" | "Cape Town" | "Durban";
export type Tag = "Classic" | "Local" | "Sorbet" | "Limited" | "Members";
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
    id: "rooibos",
    name: "Rooibos Burnt Sugar",
    parlour: "Goli Creamery",
    city: "Johannesburg",
    tags: ["Local", "Classic"],
    note: "Red bush, burnt sugar",
    price: "R48",
    image: "/scoops/rooibos.jpg",
    tray: "board",
  },
  {
    id: "naartjie",
    name: "Naartjie Granita",
    parlour: "Sea Point Scoop",
    city: "Cape Town",
    tags: ["Sorbet", "Local"],
    note: "Cold citrus, no dairy",
    price: "R42",
    image: "/scoops/naartjie.jpg",
    tray: "board",
  },
  {
    id: "malva",
    name: "Malva Night",
    parlour: "Thekwini Malt",
    city: "Durban",
    tags: ["Local", "Classic"],
    note: "Sponge, apricot syrup",
    price: "R52",
    image: "/scoops/malva.jpg",
    tray: "board",
  },
  {
    id: "crisp",
    name: "Peppermint Crisp",
    parlour: "Phoenix Dairy",
    city: "Durban",
    tags: ["Classic", "Limited"],
    note: "Mint shard, dark chocolate",
    price: "R46",
    image: "/scoops/crisp.jpg",
    tray: "board",
  },
  {
    id: "coffee",
    name: "Flat White Swirl",
    parlour: "Braamfontein Cold",
    city: "Johannesburg",
    tags: ["Classic"],
    note: "Espresso, cocoa nib",
    price: "R44",
    image: "/scoops/coffee.jpg",
    tray: "joburg",
  },
  {
    id: "milktart",
    name: "Melktert",
    parlour: "Parkhurst Spoon",
    city: "Johannesburg",
    tags: ["Local", "Classic"],
    note: "Cinnamon, pastry crust",
    price: "R45",
    image: "/scoops/milktart.jpg",
    tray: "joburg",
  },
  {
    id: "mango",
    name: "Mango Lassi",
    parlour: "Fordsburg Ice",
    city: "Johannesburg",
    tags: ["Sorbet", "Limited"],
    note: "Ripe mango, cardamom",
    price: "R49",
    image: "/scoops/mango.jpg",
    tray: "joburg",
  },
  {
    id: "reserve",
    name: "Parlour Reserve",
    parlour: "Goli Creamery",
    city: "Johannesburg",
    tags: ["Members", "Limited"],
    note: "Three-scoop house tray",
    price: "R68",
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
    perks: ["Member board", "City drop notes", "No ads on the tray"],
  },
  {
    id: "regular",
    price: "R249",
    cadence: "month",
    perks: ["Weekly pint credit", "Early Saturday drops", "Member pricing"],
  },
  {
    id: "house",
    price: "R499",
    cadence: "month",
    perks: ["Reserved flavours", "Maker collabs", "Priority delivery"],
  },
];

export const cities: City[] = ["Johannesburg", "Cape Town", "Durban"];
export const tags: Tag[] = ["Classic", "Local", "Sorbet", "Limited", "Members"];

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
    kicker: "South African ice cream",
    gateBody: "A members' parlour for local scoops. Look for free. The club is R119, once.",
    enter: "Step inside",
    leave: "Not tonight",
    back: "Actually, let me in",
    closed: "The parlour stays open.",
    fine: "Demo only. Stepping in does not charge a card.",
    stamp: "Local scoops. City drops. Parlours first.",
    search: "Search flavours, cities, or parlours",
    hero: "Real scoops. Your city.",
    heroSub: "Trays from Johannesburg, Cape Town, Durban and the rest of the country.",
    cta: "Join the club — R119",
    heroNote: "Member pints · City drops · No ads",
    featured: "On the board",
    cityTitle: "Johannesburg tray",
    citySub: "Scoops from Jozi parlours. Unfussy. Cold. Local.",
    tiersTitle: "Membership",
    tiersSub: "R119 once opens the club. Higher trays are separate, and this checkout is a demo.",
    footer1: "X-RSA · www.x-rsa.lfstn.xyz · Demo parlour. Nothing is charged.",
    footer2: "Parlours keep 75% of pint sales · Local first",
    joined: "You're in",
    allCities: "All cities",
    locked: "Members",
    demoPay: "Demo only — nothing is charged.",
    once: "once",
    month: "/ month",
    empty: "Nothing on this tray. Try another city or word.",
    filters: {
      All: "All",
      Classic: "Classic",
      Local: "Local",
      Sorbet: "Sorbet",
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
    kicker: "Suid-Afrikaanse roomys",
    gateBody: "’n Lede-parlour vir plaaslike geure. Kyk gratis. Die klub is R119, eenmalig.",
    enter: "Stap in",
    leave: "Nie vanaand nie",
    back: "Tog maar in",
    closed: "Die parlour bly oop.",
    fine: "Net ’n demo. Geen kaart word gehef nie.",
    stamp: "Plaaslike geure. Stad-druppels. Parlours eerste.",
    search: "Soek geure, stede of parlours",
    hero: "Regte roomys. Jou stad.",
    heroSub: "Skinkborde uit Johannesburg, Kaapstad, Durban en die res van die land.",
    cta: "Sluit aan — R119",
    heroNote: "Lede-pinte · Stad-druppels · Geen advertensies",
    featured: "Op die bord",
    cityTitle: "Johannesburg-skinkbord",
    citySub: "Roomys van Jozi-parlours. Eenvoudig. Koud. Plaaslik.",
    tiersTitle: "Lidmaatskap",
    tiersSub: "R119 eenmalig maak die klub oop. Hoër bakke is apart, en dié betaal is ’n demo.",
    footer1: "X-RSA · www.x-rsa.lfstn.xyz · Demo. Niks word gehef nie.",
    footer2: "Parlours hou 75% van pintverkope · Plaaslik eerste",
    joined: "Jy’s in",
    allCities: "Alle stede",
    locked: "Lede",
    demoPay: "Net ’n demo — niks word gehef nie.",
    once: "eenmalig",
    month: "/ maand",
    empty: "Niks op hierdie skinkbord nie. Probeer ’n ander stad of woord.",
    filters: {
      All: "Alles",
      Classic: "Klassiek",
      Local: "Plaaslik",
      Sorbet: "Sorbet",
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
    kicker: "I-ayisikhilimu yaseNingizimu Afrika",
    gateBody: "Indawo yamalungu yama-scoop asekhaya. Buka mahhala. Iklabhu yi-R119, kanye.",
    enter: "Ngena",
    leave: "Hhayi namuhla",
    back: "Ngivumele ngingene",
    closed: "Iparlour ihlala ivuliwe.",
    fine: "Isibonelo kuphela. Ayikho imali ekhokhiswayo.",
    stamp: "Ama-scoop asekhaya. Amadolobha. Amaparlour kuqala.",
    search: "Sesha ama-flavour, amadolobha, noma amaparlour",
    hero: "I-ayisikhilimu yangempela. Idolobha lakho.",
    heroSub: "Amathreyi aseGoli, eKapa, naseThekwini.",
    cta: "Joyina iklabhu — R119",
    heroNote: "Amapinti · Izithunzi zedolobha · Azikho izikhangiso",
    featured: "Ebhodini",
    cityTitle: "Ithreyi yaseGoli",
    citySub: "Ama-scoop asemaparlour aseGoli. Alula. Abandayo. Asekhaya.",
    tiersTitle: "Ubulungu",
    tiersSub: "U-R119 kanye uvula iklabhu. Amazinga aphezulu ahlukene. Lokhu kuyisibonelo.",
    footer1: "X-RSA · www.x-rsa.lfstn.xyz · Isibonelo. Ayikho imali ekhokhiswayo.",
    footer2: "Amaparlour agcina u-75% · Okwasekhaya kuqala",
    joined: "Usungenile",
    allCities: "Wonke amadolobha",
    locked: "Amalungu",
    demoPay: "Isibonelo kuphela — ayikho imali.",
    once: "kanye",
    month: "/ ngenyanga",
    empty: "Akukho lutho kule threyi. Zama elinye idolobha noma elinye igama.",
    filters: {
      All: "Konke",
      Classic: "Okujwayelekile",
      Local: "Okwasendaweni",
      Sorbet: "I-sorbet",
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
