import { femaleArticles, femaleHubs, femaleJourney, femaleVideos } from "./female";
import { maleArticles, maleGuides, maleHubs, maleJourney, maleVideos } from "./male";
import { navinaArticles, navinaHubs, navinaJourney, navinaVideos } from "./navina";
import type {
  Article,
  ContentPage,
  Guide,
  Journey,
  JourneyId,
  ProductHub,
  RouteRecord,
  VideoItem,
} from "./types";

export const journeys: Record<JourneyId, Journey> = {
  "rik-kvinnor": femaleJourney,
  "rik-man": maleJourney,
  navina: navinaJourney,
};

export const journeyList = [femaleJourney, maleJourney, navinaJourney];

type JourneyBundle = {
  hubs: Record<string, ProductHub>;
  guides: Record<string, Guide>;
  videos: Record<string, VideoItem>;
  articles: Record<string, Article>;
};

const bundles: Record<JourneyId, JourneyBundle> = {
  "rik-kvinnor": {
    hubs: femaleHubs,
    guides: {},
    videos: femaleVideos,
    articles: femaleArticles,
  },
  "rik-man": {
    hubs: maleHubs,
    guides: maleGuides,
    videos: maleVideos,
    articles: maleArticles,
  },
  navina: {
    hubs: navinaHubs,
    guides: {},
    videos: navinaVideos,
    articles: navinaArticles,
  },
};

export function isJourneyId(value: string): value is JourneyId {
  return value === "rik-kvinnor" || value === "rik-man" || value === "navina";
}

export function resolvePage(slug: string[]): ContentPage | undefined {
  if (slug.length === 0) return { type: "home" };
  if (slug.length === 1 && slug[0] === "info") return { type: "info" };
  if (slug.length === 1 && slug[0] === "innehallskarta") return { type: "map" };

  const [journeyId, ...rest] = slug;
  if (!journeyId || !isJourneyId(journeyId)) return undefined;

  const journey = journeys[journeyId];
  const bundle = bundles[journeyId];

  if (rest.length === 0) {
    return { type: "category", journey };
  }

  const key = rest.join("/");

  if (rest.length === 1 && bundle.hubs[rest[0]]) {
    return { type: "hub", journeyId, hub: bundle.hubs[rest[0]] };
  }
  if (bundle.guides[key]) {
    return { type: "guide", journeyId, itemId: rest[0], guide: bundle.guides[key] };
  }
  if (bundle.videos[key]) {
    return { type: "video", journeyId, itemId: rest[0], video: bundle.videos[key] };
  }
  if (bundle.articles[key]) {
    return {
      type: "article",
      journeyId,
      itemId: rest[0],
      article: bundle.articles[key],
    };
  }

  return undefined;
}

function pathFromHref(href: string): string[] {
  return href.split("/").filter(Boolean);
}

export function allRoutes(): RouteRecord[] {
  const routes: RouteRecord[] = [
    { slug: [], page: { type: "home" } },
    { slug: ["info"], page: { type: "info" } },
    { slug: ["innehallskarta"], page: { type: "map" } },
  ];

  for (const journey of journeyList) {
    routes.push({
      slug: [journey.id],
      page: { type: "category", journey },
    });

    const bundle = bundles[journey.id];
    const seen = new Set<string>();

    const add = (href: string) => {
      const slug = pathFromHref(href);
      const key = slug.join("/");
      if (seen.has(key)) return;
      const page = resolvePage(slug);
      if (!page) {
        throw new Error(`Broken content link: ${href}`);
      }
      seen.add(key);
      routes.push({ slug, page });
    };

    for (const tile of journey.tiles) {
      add(tile.href);
    }

    for (const hub of Object.values(bundle.hubs)) {
      add(`/${journey.id}/${hub.id}/`);
      for (const action of hub.actions) {
        add(action.href);
      }
    }

    for (const key of Object.keys(bundle.guides)) {
      add(`/${journey.id}/${key}/`);
    }
    for (const key of Object.keys(bundle.videos)) {
      add(`/${journey.id}/${key}/`);
    }
    for (const key of Object.keys(bundle.articles)) {
      add(`/${journey.id}/${key}/`);
    }
  }

  return routes;
}

export function contentMapEntries(): { path: string; label: string }[] {
  return allRoutes().map(({ slug, page }) => {
    const path = `/${slug.join("/")}${slug.length ? "/" : ""}`;
    switch (page.type) {
      case "home":
        return { path, label: "Startsida — tre resor" };
      case "info":
        return { path, label: "Instruktioner och ikonförklaring" };
      case "map":
        return { path, label: "Innehållskarta" };
      case "category":
        return { path, label: `${page.journey.homeLabel} — kategorimeny` };
      case "hub":
        return { path, label: `Produktnav: ${page.hub.title}` };
      case "guide":
        return { path, label: `Snabbguide: ${page.guide.title}` };
      case "video":
        return { path, label: `Film: ${page.video.title}` };
      case "article":
        return { path, label: page.article.title };
    }
  });
}

export function categoryHref(journeyId: JourneyId): string {
  return `/${journeyId}/`;
}

export function hubHref(journeyId: JourneyId, hubId: string): string {
  return `/${journeyId}/${hubId}/`;
}
