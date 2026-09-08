import Link from "next/link";
import { contentMapEntries } from "@/content/catalog";

export function ContentMapView() {
  const entries = contentMapEntries();
  return (
    <ol className="mx-auto max-w-3xl space-y-2">
      {entries.map((entry) => (
        <li key={entry.path}>
          <Link
            href={entry.path}
            className="flex min-h-12 items-baseline justify-between gap-3 rounded-xl px-2 py-2 hover:bg-ws-blue-soft"
          >
            <span className="text-ws-ink">{entry.label}</span>
            <code className="shrink-0 text-xs text-ws-blue">{entry.path}</code>
          </Link>
        </li>
      ))}
    </ol>
  );
}
