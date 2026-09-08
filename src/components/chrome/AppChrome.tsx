import type { ReactNode } from "react";
import Link from "next/link";
import { WellspectMark } from "@/components/brand/BrandMark";
import {
  BackGlyph,
  HomeGlyph,
  InfoGlyph,
  MenuGlyph,
} from "@/components/chrome/NavIcons";
import { strings } from "@/content/strings";
import type { ContentPage } from "@/content/types";

type Props = {
  page: ContentPage;
  children: ReactNode;
};

export function AppChrome({ page, children }: Props) {
  if (page.type === "home") {
    return <>{children}</>;
  }

  const journeyId =
    page.type === "category"
      ? page.journey.id
      : page.type === "info" || page.type === "map"
        ? undefined
        : page.journeyId;

  const categoryHref = journeyId ? `/${journeyId}/` : undefined;
  const backHref = submenuHref(page);
  const showCategory = Boolean(categoryHref) && page.type !== "category";
  const title = chromeTitle(page);

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white">
      <header className="relative z-10 shrink-0 border-b border-ws-line/50 bg-white/95 px-[var(--page-pad-x)] pb-2 pt-[calc(var(--safe-top)+0.65rem)] backdrop-blur">
        <div className="mx-auto flex max-w-[var(--app-max)] items-start justify-between gap-4">
          <div className="page-curve min-w-0 pl-8 pt-1">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ws-blue-mid">
              {page.type === "guide" || page.type === "hub"
                ? "Användarinstruktioner"
                : "Wellspect"}
            </p>
            <h1 className="font-display text-[length:var(--chrome-title)] font-light tracking-wide text-ws-blue">
              {title}
            </h1>
          </div>
          <WellspectMark />
        </div>
      </header>

      <main
        id="innehall"
        className="relative mx-auto w-full min-h-0 max-w-[var(--app-max)] flex-1 overflow-y-auto px-[var(--page-pad-x)] py-[var(--page-pad-y)]"
      >
        {children}
      </main>

      <footer className="shrink-0 border-t-2 border-ws-blue bg-white px-[var(--page-pad-x)] pb-[calc(var(--safe-bottom)+0.55rem)] pt-2">
        <nav
          aria-label="Appnavigering"
          className="mx-auto flex max-w-[var(--app-max)] items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <ChromeLink href="/info/" label={strings.nav.info}>
              <span className="text-ws-blue">
                <InfoGlyph className="h-11 w-11" />
              </span>
            </ChromeLink>
            <ChromeLink href="/" label={strings.nav.home}>
              <span className="text-ws-blue">
                <HomeGlyph className="h-10 w-10" />
              </span>
            </ChromeLink>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {showCategory && categoryHref ? (
              <ChromeLink href={categoryHref} label={strings.nav.category}>
                <span className="text-ws-blue">
                  <MenuGlyph className="h-10 w-10" />
                </span>
              </ChromeLink>
            ) : null}
            {backHref ? (
              <ChromeLink href={backHref} label={strings.nav.backSubmenu}>
                <span className="text-ws-blue">
                  <BackGlyph className="h-10 w-10" />
                </span>
              </ChromeLink>
            ) : null}
          </div>
        </nav>
      </footer>
    </div>
  );
}

function ChromeLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      className="inline-flex min-h-[var(--tap-min)] min-w-[var(--tap-min)] items-center justify-center rounded-full text-ws-blue transition hover:bg-ws-blue-soft"
    >
      {children}
    </Link>
  );
}

function chromeTitle(page: ContentPage): string {
  switch (page.type) {
    case "info":
      return strings.info.title;
    case "map":
      return strings.nav.contentMap;
    case "category":
      return page.journey.title;
    case "hub":
      return page.hub.title;
    case "guide":
      return page.guide.productName;
    case "video":
      return page.video.title;
    case "article":
      return page.article.title;
    default:
      return strings.brand.name;
  }
}

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

function submenuHref(page: ContentPage): string | undefined {
  if (page.type !== "guide" && page.type !== "video" && page.type !== "article") {
    return undefined;
  }
  if (CATEGORY_ONLY.has(page.itemId)) return undefined;
  const hubId = HUB_ALIASES[page.itemId] ?? page.itemId;
  return `/${page.journeyId}/${hubId}/`;
}
