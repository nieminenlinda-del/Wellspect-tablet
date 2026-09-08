import type { StringOverlay } from "@/content/i18n";

/** Norwegian chrome/UI only. Clinical/product copy falls back to Swedish. */
export const noOverlay: StringOverlay = {
  home: {
    title: "BLÆRE- OG TARMSTELL",
    subtitle: "Velg området du vil lære mer om.",
    skip: "Hopp til innhold",
    readMore: "Les mer",
  },
  market: {
    groupLabel: "Land og språk",
    groupAria: "Velg land eller språk",
  },
  category: { title: "INNHOLD" },
  content: {
    fallbackNote:
      "Produkttekster og kliniske avsnitt vises på svensk inntil en offisiell oversettelse finnes.",
  },
  journeys: {
    "rik-kvinnor": {
      homeLabel: "RIK- for kvinner",
      homeLines: ["RIK-", "for kvinner"],
      kicker: "RIK – FOR KVINNER",
    },
    "rik-man": {
      homeLabel: "RIK- for menn",
      homeLines: ["RIK-", "for menn"],
      kicker: "RIK – FOR MENN",
    },
    navina: {
      homeLabel: "Navina tarmstell",
      homeLines: ["Navina", "Tarmstell"],
      kicker: "NAVINA TARMSTELL",
    },
  },
  notFound: {
    title: "Siden finnes ikke",
    body: "Gå tilbake til startsiden og velg en av de tre reisene.",
  },
  nav: {
    home: "Hjem",
    homeAria: "Gå til hovedmenyen",
    info: "Info",
    infoAria: "Informasjon om appen",
    category: "Innhold",
    categoryAria: "Til innholdsmenyen",
    back: "Tilbake",
    backAria: "Gå tilbake",
    backToJourney: (name: string) => `Tilbake til ${name}`,
    next: "Neste side",
    previous: "Forrige side",
    pageOf: (current: number, total: number) => `Side ${current}/${total}`,
    multiPage: "Emnet omfatter flere sider",
    contentMap: "Innholdskart",
    appNav: "Appnavigering",
  },
  sections: {
    products: "Produkter",
    support: "Støtte og informasjon",
    safety: "Viktig om sikkerhet",
  },
  info: {
    title: "Informasjon",
    kicker: "Slik bruker du appen",
    iconsHeading: "Ikoner i menyen",
    kioskHeading: "Kioskmodus",
    kioskBody:
      "Kioskmodus skjuler ekstra grensesnitt, ber om fullskjerm og går tilbake til startsiden etter en stunds inaktivitet. Passer på klinikktabletter.",
    kioskEnable: "Aktiver kioskmodus",
    kioskDisable: "Avslutt kioskmodus",
    kioskOn: "Kioskmodus er på",
    kioskOff: "Kioskmodus er av",
  },
  disclaimer: {
    short: "Innholdet er et opplæringsstøtte. Erstatter ikke råd fra din helsekontakt.",
    title: "Viktig å vite",
    notAdvice: "Erstatter ikke helsetjenestens råd",
  },
  video: {
    heading: "Film",
    placeholderTitle: "Videoen er ikke koblet inn ennå",
    coming: "Film kommer",
    language: "Språk",
  },
  actions: {
    open: "Åpne",
    close: "Lukk",
    play: "Spill av",
    instructions: "Bruksanvisning",
  },
};
