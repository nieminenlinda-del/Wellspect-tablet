import { strings } from "./strings";
import {
  anatomyArticle,
  comingGuideArticle,
  contactArticle,
  ecolabelArticle,
  guidesArticle,
  moreInfoArticle,
  placeholderVideo,
} from "./shared";
import type { Article, Journey, ProductHub, VideoItem } from "./types";

export const femaleJourney: Journey = {
  id: "rik-kvinnor",
  homeLabel: "RIK- för kvinnor",
  title: "INNEHÅLL",
  tiles: [
    {
      id: "sense",
      title: "LoFric® Sense™",
      kind: "hub",
      href: "/rik-kvinnor/sense/",
      illustration: "sense-pack",
    },
    {
      id: "elle",
      title: "LoFric® Elle™",
      kind: "hub",
      href: "/rik-kvinnor/elle/",
      illustration: "elle-pack",
    },
    {
      id: "hydro-kit",
      title: "LoFric® Hydro-Kit™",
      kind: "hub",
      href: "/rik-kvinnor/hydro-kit/",
      illustration: "hydrokit-pack",
    },
    {
      id: "anatomi",
      title: "Kvinnans anatomi",
      kind: "article",
      href: "/rik-kvinnor/anatomi/",
      illustration: "anatomy-female",
    },
    {
      id: "rik-film",
      title: "Instruktionsfilm om RIK",
      kind: "video",
      href: "/rik-kvinnor/rik-film/",
      illustration: "film",
    },
    {
      id: "svanen",
      title: "Svanenmärket",
      kind: "ecolabel",
      href: "/rik-kvinnor/svanen/",
      illustration: "swan",
    },
    {
      id: "guider",
      title: "Guider",
      kind: "guides",
      href: "/rik-kvinnor/guider/",
      illustration: "guides",
    },
    {
      id: "kontakt",
      title: "Wellspects kontaktuppgifter",
      kind: "contact",
      href: "/rik-kvinnor/kontakt/",
      illustration: "contact",
    },
  ],
};

function femaleHub(
  id: string,
  title: string,
  visual: ProductHub["productVisual"],
  productName: string,
): ProductHub {
  return {
    id,
    title,
    kicker: "ANVÄNDARINSTRUKTIONER:",
    productVisual: visual,
    actions: [
      {
        id: `${id}-video`,
        title: `${productName} Video`,
        href: `/rik-kvinnor/${id}/video/`,
        icon: "video",
      },
      {
        id: `${id}-guide`,
        title: `${productName} Snabbguide`,
        href: `/rik-kvinnor/${id}/snabbguide/`,
        icon: "guide",
      },
      {
        id: `${id}-more`,
        title: "Mer information",
        href: `/rik-kvinnor/${id}/mer-information/`,
        icon: "info",
        wide: true,
      },
    ],
  };
}

export const femaleHubs: Record<string, ProductHub> = {
  sense: femaleHub("sense", "SENSE", "sense-pack", "LoFric® Sense™"),
  elle: femaleHub("elle", "ELLE", "elle-pack", "LoFric® Elle™"),
  "hydro-kit": femaleHub(
    "hydro-kit",
    "HYDRO-KIT",
    "hydrokit-pack",
    "LoFric® Hydro-Kit™",
  ),
};

export const femaleVideos: Record<string, VideoItem> = {
  "sense/video": placeholderVideo(
    "sense-video",
    "LoFric® Sense™ Video",
    "Platshållare för Sense-filmen från kiosken.",
  ),
  "elle/video": placeholderVideo(
    "elle-video",
    "LoFric® Elle™ Video",
    "Platshållare för Elle-filmen från kiosken.",
  ),
  "hydro-kit/video": placeholderVideo(
    "hydro-kit-video",
    "LoFric® Hydro-Kit™ Video",
    "Platshållare för Hydro-Kit-filmen från kiosken.",
  ),
  "rik-film": placeholderVideo(
    "rik-film-kvinnor",
    "Instruktionsfilm om RIK",
    "Övergripande film om ren intermittent kateterisering för kvinnor.",
  ),
};

export const femaleArticles: Record<string, Article> = {
  anatomi: anatomyArticle("anatomi", strings.anatomy.femaleTitle),
  svanen: ecolabelArticle(),
  guider: guidesArticle("guider", [
    {
      title: "RIK-guide för kvinnor",
      note: "PDF-platshållare.",
    },
  ]),
  kontakt: contactArticle(),
  "sense/snabbguide": comingGuideArticle("sense-guide", "LoFric® Sense™"),
  "elle/snabbguide": comingGuideArticle("elle-guide", "LoFric® Elle™"),
  "hydro-kit/snabbguide": comingGuideArticle(
    "hydro-kit-guide",
    "LoFric® Hydro-Kit™",
  ),
  "sense/mer-information": moreInfoArticle("sense-mer", "LoFric® Sense™", [
    "LoFric Sense är en hydrofil tappningskateter utformad för kvinnor. Den är diskret att ta med och har ett grepp som stödjer non-touch-teknik.",
    "Aktivering och användning ska följa bruksanvisningen och den utbildning du fått. Detaljerade steg från kiosken läggs in i ett senare innehållspass.",
  ]),
  "elle/mer-information": moreInfoArticle("elle-mer", "LoFric® Elle™", [
    "LoFric Elle är en hydrofil kateter med ett L-format handtag som ger räckvidd och grepp. Elle Pro har fler kateterögon; använd den variant du fått förskrivet.",
    "Appen beskriver inte införande steg för steg förrän klinikens material är inlagt. Följ förpackningens bruksanvisning.",
  ]),
  "hydro-kit/mer-information": moreInfoArticle(
    "hydro-kit-mer",
    "LoFric® Hydro-Kit™",
    [
      "LoFric Hydro-Kit är ett komplett set med kateter, saltlösning och uppsamlingspåse. Det kan användas när toalett eller extra vatten inte finns tillgängligt.",
      "Aktivering och tömning ska göras enligt bruksanvisningen. Inga extra volym- eller dosanvisningar ges i appen.",
    ],
  ),
};
