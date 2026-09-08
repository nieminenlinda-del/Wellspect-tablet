"use client";

import type { ReactNode } from "react";
import { WellspectMark } from "@/components/brand/BrandMark";
import { ChromeIconLink, ChromeIconStack } from "@/components/chrome/ChromeIconLink";
import { useStrings } from "@/components/i18n/LocaleProvider";
import type { ContentPage } from "@/content/types";
import {
  categoryHrefFromPage,
  journeyIdFromPage,
  parentHref,
} from "@/lib/chrome";

type Props = {
  page: ContentPage;
  children: ReactNode;
};

export function AppChrome({ page, children }: Props) {
  const strings = useStrings();
  if (page.type === "home") {
    return <>{children}</>;
  }

  const journeyId = journeyIdFromPage(page);
  const categoryHref = categoryHrefFromPage(page);
  const showCategory = Boolean(categoryHref) && page.type !== "category";
  const backHref = parentHref(page);

  return (
    <div className="app-shell" data-journey={journeyId ?? undefined}>
      <header className="app-chrome">
        <div className="app-chrome-inner">
          <nav aria-label={strings.nav.appNav}>
            <ChromeIconStack>
              <ChromeIconLink
                href={backHref}
                icon="back"
                label={strings.nav.back}
                ariaLabel={strings.nav.backAria}
                historyBack
              />
              <ChromeIconLink
                href="/"
                icon="home"
                label={strings.nav.home}
                ariaLabel={strings.nav.homeAria}
              />
              {showCategory && categoryHref ? (
                <ChromeIconLink
                  href={categoryHref}
                  icon="menu"
                  label={strings.nav.category}
                  ariaLabel={strings.nav.categoryAria}
                />
              ) : null}
              <ChromeIconLink
                href="/info/"
                icon="info"
                label={strings.nav.info}
                ariaLabel={strings.nav.infoAria}
                current={page.type === "info"}
              />
            </ChromeIconStack>
          </nav>
          <WellspectMark />
        </div>
      </header>

      <main id="innehall" className="app-main">
        {children}
      </main>
    </div>
  );
}
