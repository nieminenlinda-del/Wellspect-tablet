export const LOCALES = ["sv", "fi", "no", "da", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "sv";

export const LOCALE_STORAGE_KEY = "wellspect.locale";

export type LocaleKind = "market" | "language";

export type LocaleOption = {
  id: Locale;
  kind: LocaleKind;
  /** Native label shown on the chip. */
  labelKey: "sweden" | "finland" | "norway" | "denmark" | "english";
  ariaKey: "sweden" | "finlandAria" | "norway" | "denmark" | "englishAria";
  htmlLang: string;
};

export const localeOptions: readonly LocaleOption[] = [
  { id: "sv", kind: "market", labelKey: "sweden", ariaKey: "sweden", htmlLang: "sv" },
  { id: "fi", kind: "market", labelKey: "finland", ariaKey: "finlandAria", htmlLang: "fi" },
  { id: "no", kind: "market", labelKey: "norway", ariaKey: "norway", htmlLang: "nb" },
  { id: "da", kind: "market", labelKey: "denmark", ariaKey: "denmark", htmlLang: "da" },
  { id: "en", kind: "language", labelKey: "english", ariaKey: "englishAria", htmlLang: "en" },
] as const;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "sv" || value === "fi" || value === "no" || value === "da" || value === "en";
}

export function parseLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  return parseLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
}

export function writeStoredLocale(locale: Locale) {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export function htmlLangFor(locale: Locale): string {
  return localeOptions.find((option) => option.id === locale)?.htmlLang ?? "sv";
}
