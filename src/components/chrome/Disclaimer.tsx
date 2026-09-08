import { strings } from "@/content/strings";

type Props = {
  compact?: boolean;
  light?: boolean;
};

export function Disclaimer({ compact = false, light = false }: Props) {
  const tone = light ? "text-white/85" : "text-ws-muted";
  if (compact) {
    return <p className={`text-xs leading-relaxed sm:text-sm ${tone}`}>{strings.disclaimer.short}</p>;
  }
  return (
    <aside
      className="rounded-2xl border border-ws-line/70 bg-ws-blue-soft/70 px-4 py-3 text-sm leading-relaxed text-ws-ink"
      aria-label={strings.disclaimer.title}
    >
      <p className="font-display font-semibold text-ws-blue-deep">{strings.disclaimer.title}</p>
      <p className="mt-1 text-ws-muted">{strings.disclaimer.body}</p>
    </aside>
  );
}
