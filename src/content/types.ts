export type JourneyId = "rik-kvinnor" | "rik-man" | "navina";

export type IllustrationId =
  | "origo-pack"
  | "primo-pack"
  | "classic-cath"
  | "sense-pack"
  | "elle-pack"
  | "hydrokit-pack"
  | "navina-smart"
  | "navina-classic"
  | "anatomy-male"
  | "anatomy-female"
  | "film"
  | "arabic-video"
  | "swan"
  | "guides"
  | "contact"
  | "bowel"
  | "wash-hands"
  | "activate-saline"
  | "open-loop"
  | "sleeve-grip"
  | "sleeve-cover"
  | "hang-tab"
  | "insert-male"
  | "empty-dispose"
  | "video"
  | "info";

export type TileKind =
  | "hub"
  | "video"
  | "article"
  | "guides"
  | "contact"
  | "ecolabel";

export type CategoryTile = {
  id: string;
  title: string;
  kind: TileKind;
  href: string;
  illustration: IllustrationId;
  caption?: string;
};

export type HubAction = {
  id: string;
  title: string;
  href: string;
  icon: "video" | "guide" | "info";
  wide?: boolean;
};

export type ProductHub = {
  id: string;
  title: string;
  kicker: string;
  subtitle?: string;
  summary?: string;
  productVisual: IllustrationId;
  actions: HubAction[];
  ecoLabel?: boolean;
};

export type GuideStep = {
  id: string;
  number: string;
  body: string;
  illustration: IllustrationId;
};

export type GuidePage = {
  id: string;
  steps: GuideStep[];
};

export type Guide = {
  id: string;
  title: string;
  productName: string;
  intro: string;
  pages: GuidePage[];
  ecoLabel?: boolean;
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  /** Optional real media URL. Empty/undefined shows a labeled placeholder. */
  src?: string;
  language?: string;
};

export type Article = {
  id: string;
  title: string;
  kicker?: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type Journey = {
  id: JourneyId;
  homeLabel: string;
  homeLines: [string, string];
  title: string;
  kicker: string;
  intro: string;
  tiles: CategoryTile[];
};

export type ContentPage =
  | { type: "home" }
  | { type: "info" }
  | { type: "map" }
  | { type: "category"; journey: Journey }
  | { type: "hub"; journeyId: JourneyId; hub: ProductHub }
  | { type: "guide"; journeyId: JourneyId; itemId: string; guide: Guide }
  | { type: "video"; journeyId: JourneyId; itemId: string; video: VideoItem }
  | {
      type: "article";
      journeyId: JourneyId;
      itemId: string;
      article: Article;
    };

export type RouteRecord = {
  slug: string[];
  page: ContentPage;
};
