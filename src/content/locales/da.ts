import type { StringOverlay } from "@/content/i18n";

/** Danish chrome/UI only. Clinical/product copy falls back to Swedish. */
export const daOverlay: StringOverlay = {
  home: {
    title: "BLÆRE- OG TARMPLEJE",
    subtitle: "Vælg det område, du vil lære mere om.",
    skip: "Hop til indhold",
    readMore: "Læs mere",
  },
  market: {
    groupLabel: "Land og sprog",
    groupAria: "Vælg land eller sprog",
  },
  category: { title: "INDHOLD" },
  content: {
    fallbackNote:
      "Produkttekster og kliniske afsnit vises på svensk, indtil en officiel oversættelse findes.",
  },
  journeys: {
    "rik-kvinnor": {
      homeLabel: "RIK- til kvinder",
      homeLines: ["RIK-", "til kvinder"],
      kicker: "RIK – TIL KVINDER",
    },
    "rik-man": {
      homeLabel: "RIK- til mænd",
      homeLines: ["RIK-", "til mænd"],
      kicker: "RIK – TIL MÆND",
    },
    navina: {
      homeLabel: "Navina tarmpleje",
      homeLines: ["Navina", "Tarmpleje"],
      kicker: "NAVINA TARMPLEJE",
    },
  },
  notFound: {
    title: "Siden findes ikke",
    body: "Gå tilbage til startsiden og vælg en af de tre rejser.",
  },
  nav: {
    home: "Hjem",
    homeAria: "Gå til hovedmenuen",
    info: "Info",
    infoAria: "Information om appen",
    category: "Indhold",
    categoryAria: "Til indholdsmenuen",
    back: "Tilbage",
    backAria: "Gå tilbage",
    backToJourney: (name: string) => `Tilbage til ${name}`,
    next: "Næste side",
    previous: "Forrige side",
    pageOf: (current: number, total: number) => `Side ${current}/${total}`,
    multiPage: "Emnet omfatter flere sider",
    contentMap: "Indholdskort",
    appNav: "Appnavigering",
  },
  sections: {
    products: "Produkter",
    support: "Støtte og information",
    safety: "Vigtigt om sikkerhed",
  },
  info: {
    title: "Information",
    kicker: "Sådan bruger du appen",
    iconsHeading: "Ikoner i menuen",
    kioskHeading: "Kiosktilstand",
    kioskBody:
      "Kiosktilstand skjuler ekstra grænseflade, beder om fuld skærm og vender tilbage til startsiden efter en tids inaktivitet. Velegnet på kliniktablets.",
    kioskEnable: "Aktivér kiosktilstand",
    kioskDisable: "Afslut kiosktilstand",
    kioskOn: "Kiosktilstand er til",
    kioskOff: "Kiosktilstand er fra",
  },
  disclaimer: {
    short: "Indholdet er et uddannelsesstøtte. Erstatter ikke råd fra din sundhedskontakt.",
    title: "Vigtigt at vide",
    notAdvice: "Erstatter ikke sundhedsvæsenets råd",
  },
  video: {
    heading: "Film",
    placeholderTitle: "Videoen er ikke tilsluttet endnu",
    coming: "Film kommer",
    language: "Sprog",
  },
  actions: {
    open: "Åbn",
    close: "Luk",
    play: "Afspil",
    instructions: "Brugsanvisning",
  },
};
