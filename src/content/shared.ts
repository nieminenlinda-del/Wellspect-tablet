import type { Article, VideoItem } from "./types";
import { strings } from "./strings";

export const prescriptionPreamble =
  "LoFric ska endast användas efter förskrivning. Innan användning, följ de råd och den teknik som din vårdkontakt visat. Läs bruksanvisningen i förpackningen för viktig information och fullständiga instruktioner. Kontakta din förskrivare om du upplever problem.";

export const navinaPreamble =
  "Navina ska endast användas efter förskrivning och utbildning. Följ bruksanvisningen som följer med systemet och den rutin din vårdkontakt tagit fram tillsammans med dig. Kontakta din förskrivare om något inte fungerar som det ska.";

export function contactArticle(id = "kontakt"): Article {
  return {
    id,
    title: strings.contact.title,
    paragraphs: [
      strings.contact.intro,
      `${strings.contact.company}, ${strings.contact.address}. ${strings.contact.visit}.`,
      `${strings.contact.phoneLabel}: ${strings.contact.phone}. ${strings.contact.switchboard}.`,
      `${strings.contact.webLabel}: ${strings.contact.web}`,
    ],
    note: strings.contact.note,
  };
}

export function ecolabelArticle(id = "svanen"): Article {
  return {
    id,
    title: strings.ecolabel.title,
    paragraphs: [strings.ecolabel.intro],
    bullets: [...strings.ecolabel.bullets],
    note: strings.ecolabel.note,
  };
}

export function guidesArticle(
  id: string,
  items: { title: string; note: string }[],
): Article {
  return {
    id,
    title: strings.guides.title,
    paragraphs: [strings.guides.intro],
    bullets: items.map((item) => `${item.title} — ${item.note}`),
    note: "PDF-filer kopplas in genom att lägga sökvägar i innehållsfilen när materialet är godkänt för kliniken.",
  };
}

export function anatomyArticle(id: string, title: string): Article {
  return {
    id,
    title,
    paragraphs: [
      strings.anatomy.intro,
      "Bilden ska användas tillsammans med den genomgång du fått. Appen beskriver inte hur du ska kateterisera utifrån anatomibilden ensam.",
    ],
    note: "Ersätter inte individuell undervisning.",
  };
}

export function placeholderVideo(
  id: string,
  title: string,
  description: string,
  language?: string,
): VideoItem {
  return { id, title, description, language };
}

export function comingGuideArticle(id: string, productName: string): Article {
  return {
    id,
    title: `${productName} — ${strings.guide.comingTitle}`,
    paragraphs: [strings.guide.comingBody, prescriptionPreamble],
  };
}

export function moreInfoArticle(
  id: string,
  title: string,
  paragraphs: string[],
  extraNote?: string,
): Article {
  return {
    id,
    title,
    kicker: "Mer information",
    paragraphs,
    note: extraNote ?? prescriptionPreamble,
  };
}
