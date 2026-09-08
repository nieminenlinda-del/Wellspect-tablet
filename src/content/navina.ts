import {
  comingGuideArticle,
  contactArticle,
  guidesArticle,
  moreInfoArticle,
  navinaPreamble,
  placeholderVideo,
} from "./shared";
import type { Article, Journey, ProductHub, VideoItem } from "./types";

export const navinaJourney: Journey = {
  id: "navina",
  homeLabel: "Navina Tarmskötsel",
  homeLines: ["Navina", "Tarmskötsel"],
  title: "INNEHÅLL",
  kicker: "NAVINA TARMSKÖTSEL",
  intro:
    "Transanal irrigation (TAI) är en metod för tarmskötsel som förskrivs när din vårdkontakt bedömt att den passar dig. Volymer och inställningar är individuella och anges inte i appen.",
  tiles: [
    {
      id: "smart",
      title: "Navina™ Smart",
      kind: "hub",
      href: "/navina/smart/",
      illustration: "navina-smart",
      caption: "Elektroniskt system för transanal irrigation",
    },
    {
      id: "classic",
      title: "Navina™ Classic",
      kind: "hub",
      href: "/navina/classic/",
      illustration: "navina-classic",
      caption: "Manuellt system för transanal irrigation",
    },
    {
      id: "om-tarmskotsel",
      title: "Om tarmskötsel",
      kind: "article",
      href: "/navina/om-tarmskotsel/",
      illustration: "bowel",
      caption: "Vad Navina är — utan doser eller volymer",
    },
    {
      id: "film",
      title: "Instruktionsfilm",
      kind: "video",
      href: "/navina/film/",
      illustration: "film",
      caption: "Film om Navina tarmskötsel",
    },
    {
      id: "guider",
      title: "Guider",
      kind: "guides",
      href: "/navina/guider/",
      illustration: "guides",
      caption: "Broschyrer och längre guidematerial",
    },
    {
      id: "kontakt",
      title: "Wellspects kontaktuppgifter",
      kind: "contact",
      href: "/navina/kontakt/",
      illustration: "contact",
      caption: "Kundservice i Sverige",
    },
  ],
};

function navinaHub(
  id: string,
  title: string,
  visual: ProductHub["productVisual"],
  productName: string,
  subtitle: string,
  summary: string,
): ProductHub {
  return {
    id,
    title,
    kicker: "Användarinstruktioner",
    subtitle,
    summary,
    productVisual: visual,
    actions: [
      {
        id: `${id}-video`,
        title: `${productName} Video`,
        href: `/navina/${id}/video/`,
        icon: "video",
      },
      {
        id: `${id}-guide`,
        title: `${productName} Snabbguide`,
        href: `/navina/${id}/snabbguide/`,
        icon: "guide",
      },
      {
        id: `${id}-more`,
        title: "Mer information",
        href: `/navina/${id}/mer-information/`,
        icon: "info",
        wide: true,
      },
    ],
  };
}

export const navinaHubs: Record<string, ProductHub> = {
  smart: navinaHub(
    "smart",
    "Navina™ Smart",
    "navina-smart",
    "Navina™ Smart",
    "Elektroniskt system för transanal irrigation",
    "Navina Smart är ett elektroniskt system för transanal irrigation. Inställningar och användning styrs av den utbildning och det schema du fått.",
  ),
  classic: navinaHub(
    "classic",
    "Navina™ Classic",
    "navina-classic",
    "Navina™ Classic",
    "Manuellt system för transanal irrigation",
    "Navina Classic är ett manuellt system för transanal irrigation. Volym och teknik är individuella och ska inte ändras utifrån den här appen.",
  ),
};

export const navinaVideos: Record<string, VideoItem> = {
  "smart/video": placeholderVideo(
    "smart-video",
    "Navina™ Smart Video",
    "Platshållare för Smart-filmen från kiosken.",
  ),
  "classic/video": placeholderVideo(
    "classic-video",
    "Navina™ Classic Video",
    "Platshållare för Classic-filmen från kiosken.",
  ),
  film: placeholderVideo(
    "navina-film",
    "Instruktionsfilm Navina",
    "Övergripande film om Navina tarmskötsel.",
  ),
};

export const navinaArticles: Record<string, Article> = {
  "om-tarmskotsel": {
    id: "om-tarmskotsel",
    title: "Om tarmskötsel",
    kicker: "Utbildningsstöd",
    paragraphs: [
      "Navina är ett system för transanal irrigation (sköljning) som förskrivs när din vårdkontakt bedömt att det passar dig. Appen beskriver inte volymer, tider eller inställningar — de är individuella.",
      "Tarmskötsel med Navina ska alltid följa den rutin du tränat in tillsammans med din vårdkontakt och bruksanvisningen som följer med din enhet.",
      navinaPreamble,
    ],
    note: "Inga doser, vattentemperaturer eller sköljvolymer anges i appen.",
  },
  guider: guidesArticle("guider", [
    {
      title: "Navina startguide",
      note: "PDF-platshållare.",
    },
  ]),
  kontakt: contactArticle(),
  "smart/snabbguide": comingGuideArticle("smart-guide", "Navina™ Smart"),
  "classic/snabbguide": comingGuideArticle("classic-guide", "Navina™ Classic"),
  "smart/mer-information": moreInfoArticle(
    "smart-mer",
    "Navina™ Smart",
    [
      "Navina Smart är ett elektroniskt system för transanal irrigation. Inställningar och användning styrs av den utbildning och det schema du fått.",
      "Appen kopplar senare in kioskens steg och filmer. Tills dess: använd bruksanvisningen och din vårdkontakt.",
    ],
    navinaPreamble,
  ),
  "classic/mer-information": moreInfoArticle(
    "classic-mer",
    "Navina™ Classic",
    [
      "Navina Classic är ett manuellt system för transanal irrigation. Volym och teknik är individuella och ska inte ändras utifrån den här appen.",
    ],
    navinaPreamble,
  ),
};
