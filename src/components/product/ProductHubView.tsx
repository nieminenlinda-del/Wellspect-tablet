"use client";

import Link from "next/link";
import { ProductName } from "@/components/brand/BrandMark";
import { PageHeading } from "@/components/chrome/PageHeading";
import {
  InfoGlyph,
  MultiPageGlyph,
  PlayGlyph,
} from "@/components/chrome/NavIcons";
import { Disclaimer } from "@/components/chrome/Disclaimer";
import { FallbackNote } from "@/components/i18n/LocaleBits";
import { Illustration } from "@/components/illustrations/Illustrations";
import { useStrings } from "@/components/i18n/LocaleProvider";
import type { HubAction, ProductHub } from "@/content/types";

export function ProductHubView({ hub }: { hub: ProductHub }) {
  const strings = useStrings();
  return (
    <div className="content-page">
      <PageHeading title={hub.title} />
      {hub.subtitle ? <p className="product-subtitle">{hub.subtitle}</p> : null}
      <FallbackNote />

      <div className="product-hero">
        <div>
          {hub.summary ? <p className="content-lede">{hub.summary}</p> : null}
          {hub.ecoLabel ? (
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ws-swan">
              {strings.ecolabel.title}
            </p>
          ) : null}
        </div>
        <div className="product-packshot">
          <Illustration id={hub.productVisual} title={hub.title} />
        </div>
      </div>

      <section className="mt-8">
        <h2 className="section-heading">{strings.actions.instructions}</h2>
        <ul className="action-grid">
          {hub.actions.map((action) => (
            <li key={action.id} className={action.wide ? "col-span-full" : ""}>
              <ActionCard action={action} />
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8">
        <Disclaimer title={strings.sections.safety} />
      </div>
    </div>
  );
}

function ActionCard({ action }: { action: HubAction }) {
  const branded = /^(LoFric|Navina)/i.test(action.title);
  return (
    <Link href={action.href} className="category-card category-card--action">
      <div className="flex items-start justify-between gap-3">
        {branded ? (
          <ProductName title={action.title} />
        ) : (
          <span className="product-name font-semibold">{action.title}</span>
        )}
        <span className="category-card-icon text-ws-blue">
          {action.icon === "video" ? (
            <PlayGlyph className="h-6 w-6" />
          ) : action.icon === "guide" ? (
            <MultiPageGlyph className="h-6 w-6" />
          ) : (
            <InfoGlyph className="h-6 w-6" />
          )}
        </span>
      </div>
    </Link>
  );
}
