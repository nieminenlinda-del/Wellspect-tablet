"use client";

import Link from "next/link";
import { ProductName } from "@/components/brand/BrandMark";
import { PageHeading, SectionHeading } from "@/components/chrome/PageHeading";
import {
  DropletGlyph,
  MultiPageGlyph,
  PersonGlyph,
  PlayGlyph,
} from "@/components/chrome/NavIcons";
import { FallbackNote } from "@/components/i18n/LocaleBits";
import { Illustration } from "@/components/illustrations/Illustrations";
import { isProductPackshot } from "@/content/productPackshots";
import { useStrings } from "@/components/i18n/LocaleProvider";
import type { CategoryTile, Journey, TileKind } from "@/content/types";

export function ContentGrid({ journey }: { journey: Journey }) {
  const strings = useStrings();
  const products = journey.tiles.filter((tile) => tile.kind === "hub");
  const support = journey.tiles.filter((tile) => tile.kind !== "hub");
  const kicker = strings.journeys[journey.id].kicker;

  return (
    <div className="content-page">
      <PageHeading title={strings.category.title} />
      <p className="content-lede">{journey.intro}</p>
      <FallbackNote />
      <p className="content-kicker">{kicker}</p>

      <section className="mt-7">
        <SectionHeading>{strings.sections.products}</SectionHeading>
        <ul className="category-grid">
          {products.map((tile) => (
            <li key={tile.id}>
              <CategoryCard tile={tile} />
            </li>
          ))}
        </ul>
      </section>

      {support.length > 0 ? (
        <section className="mt-9">
          <SectionHeading>{strings.sections.support}</SectionHeading>
          <ul className="category-grid">
            {support.map((tile) => (
              <li key={tile.id}>
                <CategoryCard tile={tile} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function CategoryCard({ tile }: { tile: CategoryTile }) {
  const strings = useStrings();
  const showPackshot = isProductPackshot(tile.illustration);

  return (
    <Link href={tile.href} className="category-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0">
          <ProductName title={tile.title} />
        </h3>
        <span className="category-card-icon text-ws-blue">
          <TileGlyph kind={tile.kind} />
        </span>
      </div>
      <div className={`category-card-visual ${showPackshot ? "category-card-visual--pack" : ""}`}>
        <Illustration id={tile.illustration} title={tile.title} />
      </div>
      {tile.caption ? (
        <p className="category-card-caption">{tile.caption}</p>
      ) : (
        <p className="category-card-caption text-ws-blue">{strings.actions.open}</p>
      )}
    </Link>
  );
}

function TileGlyph({ kind }: { kind: TileKind }) {
  if (kind === "hub") return <DropletGlyph className="h-6 w-6" />;
  if (kind === "video") return <PlayGlyph className="h-6 w-6" />;
  if (kind === "guides") return <MultiPageGlyph className="h-6 w-6" />;
  return <PersonGlyph className="h-6 w-6" />;
}
