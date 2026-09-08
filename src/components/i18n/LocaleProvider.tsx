"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getStrings } from "@/content/i18n";
import type { Strings } from "@/content/strings";
import {
  DEFAULT_LOCALE,
  htmlLangFor,
  readStoredLocale,
  writeStoredLocale,
  type Locale,
} from "@/lib/locale";

type LocaleContextValue = {
  locale: Locale;
  strings: Strings;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLangFor(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const setLocale = (next: Locale) => {
      writeStoredLocale(next);
      setLocaleState(next);
      document.documentElement.lang = htmlLangFor(next);
    };
    return { locale, strings: getStrings(locale), setLocale };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useStrings(): Strings {
  return useLocale().strings;
}
