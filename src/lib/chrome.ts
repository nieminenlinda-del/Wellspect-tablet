import type { ContentPage, JourneyId } from "@/content/types";

const CATEGORY_ONLY = new Set([
  "anatomi",
  "svanen",
  "guider",
  "kontakt",
  "om-tarmskotsel",
  "rik-film",
  "video-arabiska",
  "film",
]);

const HUB_ALIASES: Record<string, string> = {
  "origo-sleeve": "origo",
  "origo-pro": "origo",
};

export function journeyIdFromPage(page: ContentPage): JourneyId | undefined {
  if (page.type === "category") return page.journey.id;
  if (page.type === "home" || page.type === "info" || page.type === "map") {
    return undefined;
  }
  return page.journeyId;
}

export function categoryHrefFromPage(page: ContentPage): string | undefined {
  const id = journeyIdFromPage(page);
  return id ? `/${id}/` : undefined;
}

/** Hierarchical parent used as the Back button fallback (never leaves the PWA). */
export function parentHref(page: ContentPage): string {
  if (page.type === "home") return "/";
  if (page.type === "info" || page.type === "map" || page.type === "category") {
    return "/";
  }
  if (page.type === "hub") {
    return `/${page.journeyId}/`;
  }
  if (CATEGORY_ONLY.has(page.itemId)) {
    return `/${page.journeyId}/`;
  }
  const hubId = HUB_ALIASES[page.itemId] ?? page.itemId;
  return `/${page.journeyId}/${hubId}/`;
}

export function splitProductTitle(title: string): { brand: string; rest: string } {
  const match = title.match(/^(LoFric®|Navina™|LoFric|Navina)\s*(.*)$/i);
  if (match) {
    return { brand: match[1], rest: match[2].trim() };
  }
  return { brand: title, rest: "" };
}
