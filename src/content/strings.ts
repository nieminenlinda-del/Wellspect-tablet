/**
 * Swedish UI strings, grouped for a later i18n pass (e.g. sv/fi/en).
 * Clinical copy lives with journey content, not here.
 */
export const locale = "sv" as const;

export const strings = {
  locale,
  brand: {
    name: "Wellspect",
    tagline: "A REAL DIFFERENCE",
    lofric: "LoFric®",
    navina: "Navina™",
  },
  home: {
    title: "BLÅS- OCH TARMSKÖTSEL",
    subtitle: "Välj det område du vill lära dig mer om.",
    skip: "Hoppa till innehåll",
    readMore: "Läs mer",
  },
  nav: {
    home: "Hem",
    homeAria: "Gå till huvudmenyn",
    info: "Info",
    infoAria: "Information om appen",
    category: "Innehåll",
    categoryAria: "Till innehållsmenyn",
    back: "Tillbaka",
    backAria: "Gå tillbaka",
    backToJourney: (name: string) => `Tillbaka till ${name}`,
    next: "Följande sida",
    previous: "Föregående sida",
    pageOf: (current: number, total: number) => `Sida ${current}/${total}`,
    multiPage: "Ämnet omfattar flera sidor",
    contentMap: "Innehållskarta",
    appNav: "Appnavigering",
  },
  sections: {
    products: "Produkter",
    support: "Stöd och information",
    safety: "Viktigt om säkerhet",
  },
  info: {
    title: "Information",
    kicker: "Så använder du appen",
    intro:
      "Här finns produktinformation, instruktionsfilmer och guider för RIK (ren intermittent kateterisering) och tarmskötsel. Innehållet är ett utbildningsstöd för dig som fått produkten förskrivet.",
    structureHeading: "Så är innehållet uppbyggt",
    structureIntro:
      "Appen är indelad i tre områden. I varje område finns produkter, filmer och stöd — alltid tillsammans med den bruksanvisning och den teknik du fått av din vårdkontakt.",
    structureItems: [
      "RIK för kvinnor — katetrar och stöd för ren intermittent kateterisering.",
      "RIK för män — katetrar, anatomi och instruktionsfilmer.",
      "Navina tarmskötsel — system för transanal irrigation efter förskrivning.",
    ],
    iconsHeading: "Ikoner i menyn",
    hardwareNote:
      "På den fysiska läsplattan stängs enheten av med hårdvaruknappen och volymen justeras på sidan. I webbappen styrs ljudet av enheten eller webbläsaren.",
    kioskHeading: "Kioskläge",
    kioskBody:
      "Kioskläge döljer extra gränssnitt, ber om helskärm och återgår till startsidan efter en stunds inaktivitet. Lämpligt på kliniktabletter.",
    kioskEnable: "Aktivera kioskläge",
    kioskDisable: "Avsluta kioskläge",
    kioskOn: "Kioskläge är på",
    kioskOff: "Kioskläge är av",
  },
  disclaimer: {
    short:
      "Innehållet är ett utbildningsstöd. Ersätter inte råd från din vårdkontakt.",
    title: "Viktigt att veta",
    notAdvice: "Ersätter inte vårdens råd",
    body:
      "LoFric®-katetrar och Navina™-produkter ska endast användas efter förskrivning och utbildning av hälso- och sjukvårdspersonal. Följ alltid den bruksanvisning som följer med produkten och de råd du fått av din förskrivare. Appen är ett utbildningsstöd och ersätter inte professionell medicinsk rådgivning, undersökning eller behandling. Kontakta din vårdkontakt om du är osäker eller om något inte känns rätt.",
  },
  video: {
    heading: "Film",
    placeholderTitle: "Videon är inte inkopplad ännu",
    placeholderBody:
      "Här visas en instruktionsfilm när en godkänd webbadress ser in i innehållsfilen. Tills dess är detta en tydlig platshållare så att kliniken kan se var filmen hör hemma.",
    coming: "Film kommer",
    language: "Språk",
  },
  guide: {
    comingTitle: "Snabbguide kommer",
    comingBody:
      "Steg-för-steg-guiden för den här produkten läggs in i innehållsmodulen. Använd tills dess bruksanvisningen i förpackningen och den teknik du lärt dig av din vårdkontakt.",
  },
  stub: {
    badge: "Platshållare",
    moreComing:
      "Mer innehåll från kiosken kan läggas till här utan att komponenterna behöver skrivas om.",
  },
  contact: {
    title: "Wellspects kontaktuppgifter",
    intro:
      "Vid produktfrågor, reklamationer eller om du behöver komma i kontakt med kundservice i Sverige:",
    company: "Wellspect AB",
    address: "Box 14, SE-431 21 Mölndal",
    visit: "Besöksadress: Aminogatan 1, Mölndal",
    phoneLabel: "Kundservice Sverige",
    phone: "+46 (0)31-376 40 20",
    switchboard: "Växel: +46 (0)31 376 40 00",
    webLabel: "Webb",
    web: "https://www.wellspect.se",
    note:
      "För medicinska frågor om din behandling, kontakta alltid din förskrivare eller vårdcentral – inte enbart tillverkaren.",
  },
  ecolabel: {
    title: "Svanenmärket",
    intro:
      "Flera LoFric®-produkter är Svanenmärkta. Märkningen betyder att produkten uppfyller Nordiska Svanens krav för just den produktgruppen.",
    bullets: [
      "Titta efter Svanenmärket på den förpackning du fått förskrivet.",
      "Märkningen gäller den specifika artikeln, inte automatiskt hela sortimentet.",
      "Miljöinformation ersätter inte bruksanvisningen eller kliniska råd.",
    ],
    note:
      "Den här sidan förklarar märkningen. Den återger inte Svanens officiella logotyp och gör inga extra miljö- eller hälsoanspråk.",
  },
  guides: {
    title: "Guider",
    intro:
      "Här samlas längre broschyrer och PDF-guider när klinikens material är inkopplat. Tills vidare är posterna platshållare.",
  },
  anatomy: {
    maleTitle: "Mannens anatomi",
    femaleTitle: "Kvinnans anatomi",
    intro:
      "Anatomibilden från kiosken kopplas in här. Sidan är ett utbildningsstöd och ersätter inte genomgången du fått av din vårdkontakt.",
  },
  actions: {
    open: "Öppna",
    close: "Stäng",
    play: "Spela upp",
    instructions: "Användarinstruktioner",
  },
} as const;

export type Strings = typeof strings;
