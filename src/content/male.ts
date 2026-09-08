import { strings } from "./strings";
import {
  anatomyArticle,
  contactArticle,
  ecolabelArticle,
  guidesArticle,
  moreInfoArticle,
  placeholderVideo,
  prescriptionPreamble,
} from "./shared";
import type { Article, Guide, Journey, ProductHub, VideoItem } from "./types";

export const maleJourney: Journey = {
  id: "rik-man",
  homeLabel: "RIK- för män",
  homeLines: ["RIK-", "för män"],
  title: "INNEHÅLL",
  kicker: "RIK – FÖR MÄN",
  intro:
    "Ren intermittent kateterisering (RIK) innebär att blåsan töms med en kateter enligt den rutin du lärt dig av din vårdkontakt. Här finns produkter och stöd för män.",
  tiles: [
    {
      id: "origo",
      title: "LoFric® Origo™",
      kind: "hub",
      href: "/rik-man/origo/",
      illustration: "origo-pack",
      caption: "Hydrofil kateter i fickformat",
    },
    {
      id: "primo",
      title: "LoFric® Primo™",
      kind: "hub",
      href: "/rik-man/primo/",
      illustration: "primo-pack",
      caption: "Hydrofil kateter med saltlösning i förpackningen",
    },
    {
      id: "classic",
      title: "LoFric®",
      kind: "hub",
      href: "/rik-man/classic/",
      illustration: "classic-cath",
      caption: "Den ursprungliga hydrofila tappningskatetern",
    },
    {
      id: "anatomi",
      title: "Mannens anatomi",
      kind: "article",
      href: "/rik-man/anatomi/",
      illustration: "anatomy-male",
      caption: "Urinrörets väg genom prostatan till blåsan",
    },
    {
      id: "rik-film",
      title: "Instruktionsfilm om RIK",
      kind: "video",
      href: "/rik-man/rik-film/",
      illustration: "film",
      caption: "Film som visar kateterisering steg för steg",
    },
    {
      id: "video-arabiska",
      title: "Video på arabiska",
      kind: "video",
      href: "/rik-man/video-arabiska/",
      illustration: "arabic-video",
      caption: "RIK förklarat på arabiska",
    },
    {
      id: "svanen",
      title: "Svanenmärket",
      kind: "ecolabel",
      href: "/rik-man/svanen/",
      illustration: "swan",
      caption: "Vad märkningen betyder på förpackningen",
    },
    {
      id: "guider",
      title: "Guider",
      kind: "guides",
      href: "/rik-man/guider/",
      illustration: "guides",
      caption: "Broschyrer och längre guidematerial",
    },
    {
      id: "kontakt",
      title: "Wellspects kontaktuppgifter",
      kind: "contact",
      href: "/rik-man/kontakt/",
      illustration: "contact",
      caption: "Kundservice i Sverige",
    },
  ],
};

export const origoHub: ProductHub = {
  id: "origo",
  title: "LoFric® Origo™",
  kicker: "Användarinstruktioner",
  subtitle: "Hydrofil kateter i fickformat",
  summary:
    "LoFric Origo är en hydrofil engångskateter med saltlösning för aktivering. Den är utvecklad för män, vikbar till fickformat och avsedd för intermittent kateterisering efter förskrivning.",
  productVisual: "origo-pack",
  ecoLabel: true,
  actions: [
    {
      id: "origo-video",
      title: "LoFric® Origo™ Video",
      href: "/rik-man/origo/video/",
      icon: "video",
    },
    {
      id: "origo-guide",
      title: "LoFric® Origo™ Snabbguide",
      href: "/rik-man/origo/snabbguide/",
      icon: "guide",
    },
    {
      id: "sleeve-video",
      title: "LoFric® Origo™ Sleeve Video",
      href: "/rik-man/origo-sleeve/video/",
      icon: "video",
    },
    {
      id: "sleeve-guide",
      title: "LoFric® Origo™ Sleeve Snabbguide",
      href: "/rik-man/origo-sleeve/snabbguide/",
      icon: "guide",
    },
    {
      id: "pro-video",
      title: "LoFric® Origo™ Pro Video",
      href: "/rik-man/origo-pro/video/",
      icon: "video",
    },
    {
      id: "pro-guide",
      title: "LoFric® Origo™ Pro Snabbguide",
      href: "/rik-man/origo-pro/snabbguide/",
      icon: "guide",
    },
    {
      id: "more",
      title: "Mer information",
      href: "/rik-man/origo/mer-information/",
      icon: "info",
      wide: true,
    },
  ],
};

export const primoHub: ProductHub = {
  id: "primo",
  title: "LoFric® Primo™",
  kicker: "Användarinstruktioner",
  subtitle: "Hydrofil kateter med saltlösning i förpackningen",
  summary:
    "LoFric Primo är en hydrofil kateter med steril saltlösning i förpackningen. Ett tryck aktiverar ytan. Produkten är vikbar och avsedd för förskrivna användare.",
  productVisual: "primo-pack",
  actions: [
    {
      id: "primo-video",
      title: "LoFric® Primo™ Video",
      href: "/rik-man/primo/video/",
      icon: "video",
    },
    {
      id: "primo-guide",
      title: "LoFric® Primo™ Snabbguide",
      href: "/rik-man/primo/snabbguide/",
      icon: "guide",
    },
    {
      id: "more",
      title: "Mer information",
      href: "/rik-man/primo/mer-information/",
      icon: "info",
      wide: true,
    },
  ],
};

export const classicHub: ProductHub = {
  id: "classic",
  title: "LoFric®",
  kicker: "Användarinstruktioner",
  subtitle: "Den ursprungliga hydrofila tappningskatetern",
  summary:
    "LoFric är den ursprungliga hydrofila tappningskatetern från Wellspect. Classic-varianten aktiveras med vatten enligt bruksanvisningen i förpackningen — inte med en inbyggd saltlösningsbehållare som Origo.",
  productVisual: "classic-cath",
  actions: [
    {
      id: "classic-video",
      title: "LoFric® Video",
      href: "/rik-man/classic/video/",
      icon: "video",
    },
    {
      id: "classic-guide",
      title: "LoFric® Snabbguide",
      href: "/rik-man/classic/snabbguide/",
      icon: "guide",
    },
    {
      id: "more",
      title: "Mer information",
      href: "/rik-man/classic/mer-information/",
      icon: "info",
      wide: true,
    },
  ],
};

export const origoGuide: Guide = {
  id: "origo-snabbguide",
  title: "Så använder du LoFric Origo",
  productName: "LoFric® Origo™",
  ecoLabel: true,
  intro: prescriptionPreamble,
  pages: [
    {
      id: "p1",
      steps: [
        {
          id: "s1",
          number: "1",
          body: "Tvätta händerna ordentligt med tvål och vatten.",
          illustration: "wash-hands",
        },
        {
          id: "s2",
          number: "2",
          body: "Kläm sönder behållaren med saltlösning för att aktivera katetern. Sedan är katetern klar att användas.",
          illustration: "activate-saline",
        },
        {
          id: "s3",
          number: "3",
          body: "Dra ner remsan för att öppna.",
          illustration: "open-loop",
        },
      ],
    },
    {
      id: "p2",
      steps: [
        {
          id: "s4",
          number: "4",
          body: "Valfritt: Använd klisterfliken på baksidan för att fästa förpackningen på en torr och ren yta.",
          illustration: "hang-tab",
        },
        {
          id: "s5",
          number: "5",
          body: "Ta ut katetern. Valfritt: Greppa det rörliga handtaget intill konnektorn och justera för att kontrollera införandet utan att behöva ta på kateterslangen.",
          illustration: "sleeve-grip",
        },
        {
          id: "s6",
          number: "6",
          body: "Lyft penis upp mot magen så att urinröret rätas ut. För långsamt in katetern. När urinen börjar rinna, för in katetern något längre så att båda kateterögonen är inne i urinblåsan — precis som din vårdkontakt visat.",
          illustration: "insert-male",
        },
      ],
    },
    {
      id: "p3",
      steps: [
        {
          id: "s7",
          number: "7",
          body: "När urinen börjar rinna, för penis tillbaka mot mer normalt läge om det är den teknik du lärt dig.",
          illustration: "insert-male",
        },
        {
          id: "s8",
          number: "8",
          body: "När urinflödet avtar, dra långsamt tillbaka katetern en liten bit. Om urinen börjar rinna igen, vänta tills det slutat. Dra sedan ut katetern helt.",
          illustration: "empty-dispose",
        },
        {
          id: "s9",
          number: "9",
          body: "Lägg tillbaka katetern i förpackningen och släng enligt lokala anvisningar, vanligtvis som brännbart hushållsavfall.",
          illustration: "empty-dispose",
        },
      ],
    },
  ],
};

export const origoSleeveGuide: Guide = {
  id: "origo-sleeve-snabbguide",
  title: "Så använder du LoFric Origo Sleeve",
  productName: "LoFric® Origo™ Sleeve",
  ecoLabel: true,
  intro: prescriptionPreamble,
  pages: [
    {
      id: "p1",
      steps: [
        {
          id: "s1",
          number: "1",
          body: "Tvätta händerna noggrant med tvål och vatten.",
          illustration: "wash-hands",
        },
        {
          id: "s2",
          number: "2",
          body: "Tryck för att frigöra saltlösningen och katetern är klar att användas. Använd öglan för att dra ner och öppna.",
          illustration: "activate-saline",
        },
      ],
    },
    {
      id: "p2",
      steps: [
        {
          id: "s3a",
          number: "3a",
          body: "Alternativ (a): Efter öppning, innan katetern tas ut, nyp och håll försiktigt i det flexibla greppet för att automatiskt dra ner skyddshöljet. Använd skyddshöljet för att kontrollera införandet utan att behöva vidröra kateterslangen.",
          illustration: "sleeve-grip",
        },
        {
          id: "s3b",
          number: "3b",
          body: "Alternativ (b): Ta ut katetern. Dra ner skyddshöljet för att täcka kateterslangen. Använd skyddshöljet för att kontrollera införandet utan att behöva vidröra kateterslangen.",
          illustration: "sleeve-cover",
        },
      ],
    },
  ],
};

export const origoProGuide: Guide = {
  id: "origo-pro-snabbguide",
  title: "Så använder du LoFric Origo Pro",
  productName: "LoFric® Origo™ Pro",
  ecoLabel: true,
  intro:
    "Origo Pro aktiveras på samma sätt som Origo. Införandet följer den teknik du lärt dig och bruksanvisningen i just din förpackning. Pro-varianten har fler kateterögon — det ändrar inte att du ska följa din förskrivna rutin.",
  pages: [
    {
      id: "p1",
      steps: [
        {
          id: "s1",
          number: "1",
          body: "Tvätta händerna ordentligt med tvål och vatten.",
          illustration: "wash-hands",
        },
        {
          id: "s2",
          number: "2",
          body: "Tryck för att frigöra saltlösningen. Katetern är därefter klar att användas.",
          illustration: "activate-saline",
        },
        {
          id: "s3",
          number: "3",
          body: "Öppna förpackningen med öglan eller remsan. Använd greppet så att du inte behöver vidröra kateterslangen.",
          illustration: "open-loop",
        },
      ],
    },
    {
      id: "p2",
      steps: [
        {
          id: "s4",
          number: "4",
          body: "Kateterisera enligt den teknik din vårdkontakt visat och enligt bruksanvisningen i förpackningen.",
          illustration: "insert-male",
        },
        {
          id: "s5",
          number: "5",
          body: "När blåsan är tömd enligt din vana, dra ut katetern långsamt och släng den enligt lokala anvisningar.",
          illustration: "empty-dispose",
        },
      ],
    },
  ],
};

export const maleVideos: Record<string, VideoItem> = {
  "origo/video": placeholderVideo(
    "origo-video",
    "LoFric® Origo™ Video",
    "Instruktionsfilm för LoFric Origo. Lägg in godkänd film-URL i content/male.ts när kliniken har rättigheter att visa den offline.",
  ),
  "origo-sleeve/video": placeholderVideo(
    "origo-sleeve-video",
    "LoFric® Origo™ Sleeve Video",
    "Instruktionsfilm för Origo Sleeve. Platshållare tills en godkänd URL kopplas in.",
  ),
  "origo-pro/video": placeholderVideo(
    "origo-pro-video",
    "LoFric® Origo™ Pro Video",
    "Instruktionsfilm för Origo Pro. Platshållare tills en godkänd URL kopplas in.",
  ),
  "primo/video": placeholderVideo(
    "primo-video",
    "LoFric® Primo™ Video",
    "Instruktionsfilm för LoFric Primo. Platshållare.",
  ),
  "classic/video": placeholderVideo(
    "classic-video",
    "LoFric® Video",
    "Instruktionsfilm för LoFric Classic. Platshållare.",
  ),
  "rik-film": placeholderVideo(
    "rik-film",
    "Instruktionsfilm om RIK",
    "Övergripande film om ren intermittent kateterisering för män. Koppla in klinikens film här.",
  ),
  "video-arabiska": placeholderVideo(
    "video-arabiska",
    "Video på Arabiska",
    "Arabisk instruktionsfilm från kiosken. Lägg in URL i innehållsmodulen.",
    "ar",
  ),
};

export const maleArticles: Record<string, Article> = {
  anatomi: anatomyArticle("anatomi", strings.anatomy.maleTitle),
  svanen: ecolabelArticle(),
  guider: guidesArticle("guider", [
    {
      title: "RIK-guide för män",
      note: "PDF-platshållare (t.ex. Toisto-katetrointiopas / svensk motsvarighet).",
    },
    {
      title: "LoFric Origo användarfolder",
      note: "Kopplas in när filen finns i public/guides.",
    },
  ]),
  kontakt: contactArticle(),
  "origo/mer-information": moreInfoArticle(
    "origo-mer",
    "LoFric® Origo™",
    [
      "LoFric Origo är en hydrofil engångskateter med saltlösning för aktivering. Den är utvecklad för män, vikbar till fickformat och avsedd för intermittent kateterisering efter förskrivning.",
      "Förpackningen öppnas med en remsa eller ögla. Ett justerbart grepp vid konnektorn gör det möjligt att styra katetern utan att ta på slangen (non-touch), om det är den teknik du lärt dig.",
      "Sleeve-varianten har ett skyddshölje som kan dras ner över slangen. Pro-varianten följer samma aktivering; följ alltid bruksanvisningen i just den förpackning du fått.",
    ],
  ),
  "primo/mer-information": moreInfoArticle(
    "primo-mer",
    "LoFric® Primo™",
    [
      "LoFric Primo är en hydrofil kateter med steril saltlösning i förpackningen. Ett tryck aktiverar ytan. Produkten är vikbar och avsedd för förskrivna användare.",
      "Öppning och införing ska göras enligt bruksanvisningen och den teknik din vårdkontakt visat. Appen lägger inte till egna kliniska steg för Primo förrän kioskmaterialet är inlagt.",
    ],
  ),
  "classic/mer-information": moreInfoArticle(
    "classic-mer",
    "LoFric®",
    [
      "LoFric är den ursprungliga hydrofila tappningskatetern från Wellspect. Classic-varianten aktiveras med vatten enligt bruksanvisningen i förpackningen — inte med en inbyggd saltlösningsbehållare som Origo.",
      "Använd endast den produkt och den storlek du fått förskrivet. Uppmärksamma skillnaden i aktivering så att du inte blandar ihop rutinerna.",
    ],
  ),
  "primo/snabbguide": {
    id: "primo-guide-stub",
    title: "LoFric® Primo™ — snabbguide",
    paragraphs: [
      strings.guide.comingBody,
      "Primo aktiveras genom att trycka så att saltlösningen rinner över katetern, därefter öppnas förpackningen enligt bruksanvisningen. Detaljerade steg läggs in från kiosken i ett senare innehållspass.",
      prescriptionPreamble,
    ],
  },
  "classic/snabbguide": {
    id: "classic-guide-stub",
    title: "LoFric® — snabbguide",
    paragraphs: [
      strings.guide.comingBody,
      "Classic fylls med vatten i förpackningen och behöver tid att aktiveras enligt bruksanvisningen. Använd inte Origos steg för den här produkten.",
      prescriptionPreamble,
    ],
  },
};

export const maleHubs: Record<string, ProductHub> = {
  origo: origoHub,
  primo: primoHub,
  classic: classicHub,
};

export const maleGuides: Record<string, Guide> = {
  "origo/snabbguide": origoGuide,
  "origo-sleeve/snabbguide": origoSleeveGuide,
  "origo-pro/snabbguide": origoProGuide,
};
