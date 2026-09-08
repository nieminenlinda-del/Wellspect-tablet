"use client";

import { useStrings } from "@/components/i18n/LocaleProvider";

export function SkipLink() {
  const strings = useStrings();
  return (
    <a className="skip-link" href="#innehall">
      {strings.home.skip}
    </a>
  );
}

export function FallbackNote() {
  const { locale, content } = useStrings();
  if (locale === "sv") return null;
  return <p className="content-fallback-note">{content.fallbackNote}</p>;
}
