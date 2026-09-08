"use client";

import type { ReactNode } from "react";
import {
  DenmarkFlag,
  FinlandFlag,
  NorwayFlag,
  SwedenFlag,
} from "@/components/home/FlagGlyphs";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { localeOptions, type Locale } from "@/lib/locale";

const flags: Partial<Record<Locale, () => ReactNode>> = {
  sv: () => <SwedenFlag className="market-flag" />,
  fi: () => <FinlandFlag className="market-flag" />,
  no: () => <NorwayFlag className="market-flag" />,
  da: () => <DenmarkFlag className="market-flag" />,
};

type Props = {
  tone?: "light" | "brand";
};

export function MarketSelector({ tone = "light" }: Props) {
  const { locale, setLocale, strings } = useLocale();

  return (
    <div
      className={`market-selector ${tone === "light" ? "market-selector--light" : ""}`}
      role="radiogroup"
      aria-label={strings.market.groupAria}
    >
      {localeOptions.map((option) => {
        const selected = option.id === locale;
        const label = strings.market[option.labelKey];
        const aria = strings.market[option.ariaKey];
        const Flag = flags[option.id];
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={aria}
            className={`market-chip tap-target ${selected ? "market-chip--active" : ""}`}
            onClick={() => setLocale(option.id)}
          >
            {Flag ? <Flag /> : <span className="market-en-badge" aria-hidden>EN</span>}
            <span className="market-chip-label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
