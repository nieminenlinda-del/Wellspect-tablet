import type { StringOverlay } from "@/content/i18n";

/** Finnish chrome/UI only. Clinical/product copy falls back to Swedish. */
export const fiOverlay: StringOverlay = {
  home: {
    title: "RAKON JA SUOLEN HOITO",
    subtitle: "Valitse alue, josta haluat lisätietoa.",
    skip: "Siirry sisältöön",
    readMore: "Lue lisää",
  },
  market: {
    groupLabel: "Maa ja kieli",
    groupAria: "Valitse maa tai kieli",
  },
  category: { title: "SISÄLTÖ" },
  content: {
    fallbackNote:
      "Tuotetekstit ja kliiniset osiot näytetään ruotsiksi, kunnes virallinen käännös on saatavilla.",
  },
  journeys: {
    "rik-kvinnor": {
      homeLabel: "RIK- naisille",
      homeLines: ["RIK-", "naisille"],
      kicker: "RIK – NAISILLE",
    },
    "rik-man": {
      homeLabel: "RIK- miehille",
      homeLines: ["RIK-", "miehille"],
      kicker: "RIK – MIEHILLE",
    },
    navina: {
      homeLabel: "Navina suolen hoito",
      homeLines: ["Navina", "Suolen hoito"],
      kicker: "NAVINA SUOLEN HOITO",
    },
  },
  notFound: {
    title: "Sivua ei löydy",
    body: "Palaa aloitussivulle ja valitse yksi kolmesta osiosta.",
  },
  nav: {
    home: "Koti",
    homeAria: "Siirry päävalikkoon",
    info: "Info",
    infoAria: "Tietoa sovelluksesta",
    category: "Sisältö",
    categoryAria: "Sisältövalikkoon",
    back: "Takaisin",
    backAria: "Palaa takaisin",
    backToJourney: (name: string) => `Takaisin: ${name}`,
    next: "Seuraava sivu",
    previous: "Edellinen sivu",
    pageOf: (current: number, total: number) => `Sivu ${current}/${total}`,
    multiPage: "Aiheessa on useita sivuja",
    contentMap: "Sisältökartta",
    appNav: "Sovelluksen navigointi",
  },
  sections: {
    products: "Tuotteet",
    support: "Tuki ja tieto",
    safety: "Tärkeää turvallisuudesta",
  },
  info: {
    title: "Tiedot",
    kicker: "Näin käytät sovellusta",
    iconsHeading: "Valikon kuvakkeet",
    kioskHeading: "Kioskitila",
    kioskBody:
      "Kioskitila piilottaa ylimääräisen käyttöliittymän, pyytää koko näyttöä ja palaa aloitussivulle hetken käyttämättömyyden jälkeen. Sopii klinikkataulutietokoneille.",
    kioskEnable: "Ota kioskitila käyttöön",
    kioskDisable: "Poista kioskitila",
    kioskOn: "Kioskitila on päällä",
    kioskOff: "Kioskitila on pois päältä",
  },
  disclaimer: {
    short: "Sisältö on koulutustukea. Ei korvaa hoitokontaktisi ohjeita.",
    title: "Hyvä tietää",
    notAdvice: "Ei korvaa hoidon ohjeita",
  },
  video: {
    heading: "Video",
    placeholderTitle: "Videota ei ole vielä kytketty",
    coming: "Video tulossa",
    language: "Kieli",
  },
  actions: {
    open: "Avaa",
    close: "Sulje",
    play: "Toista",
    instructions: "Käyttöohjeet",
  },
};
