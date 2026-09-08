import type { Strings } from "@/content/strings";
import { strings as sv } from "@/content/strings";
import { daOverlay } from "@/content/locales/da";
import { enOverlay } from "@/content/locales/en";
import { fiOverlay } from "@/content/locales/fi";
import { noOverlay } from "@/content/locales/no";
import type { Locale } from "@/lib/locale";

/**
 * Nested overlay. Omitted keys fall back to complete Swedish (`src/content/strings.ts`).
 * Do not add clinical dosing, volumes, or indications here.
 */
export type StringOverlay = DeepPartial<Strings>;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (...args: infer A) => infer R
    ? (...args: A) => R
    : T[K] extends readonly (infer U)[]
      ? readonly U[]
      : T[K] extends object
        ? DeepPartial<T[K]>
        : T[K];
};

const overlays: Record<Exclude<Locale, "sv">, StringOverlay> = {
  fi: fiOverlay,
  no: noOverlay,
  da: daOverlay,
  en: enOverlay,
};

export function getStrings(locale: Locale): Strings {
  if (locale === "sv") return sv;
  const merged = deepMerge(sv, overlays[locale]);
  return { ...merged, locale };
}

export function deepMerge<T>(base: T, overlay: DeepPartial<T> | undefined): T {
  if (overlay === undefined) return base;
  if (typeof overlay === "function" || typeof base === "function") {
    return overlay as T;
  }
  if (Array.isArray(overlay)) {
    return overlay as T;
  }
  if (!isPlainObject(base) || !isPlainObject(overlay)) {
    return overlay as T;
  }
  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === undefined) continue;
    result[key] = deepMerge(
      (base as Record<string, unknown>)[key],
      value as DeepPartial<unknown>,
    );
  }
  return result as T;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
