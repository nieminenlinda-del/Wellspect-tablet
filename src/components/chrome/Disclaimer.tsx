"use client";

import { useStrings } from "@/components/i18n/LocaleProvider";

type Props = {
  compact?: boolean;
  light?: boolean;
  title?: string;
};

export function Disclaimer({ compact = false, light = false, title }: Props) {
  const strings = useStrings();
  const heading = title ?? strings.disclaimer.title;
  const tone = light ? "text-white/85" : "text-ws-muted";
  if (compact) {
    return <p className={`text-xs leading-relaxed sm:text-sm ${tone}`}>{strings.disclaimer.short}</p>;
  }
  return (
    <aside className="disclaimer-box" aria-label={heading}>
      <p className="font-display font-semibold text-ws-blue-deep">{heading}</p>
      <p className="mt-1 text-ws-muted">{strings.disclaimer.body}</p>
    </aside>
  );
}
