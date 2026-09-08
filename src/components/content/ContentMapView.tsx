"use client";

import Link from "next/link";
import { PageHeading } from "@/components/chrome/PageHeading";
import { contentMapEntries } from "@/content/catalog";
import { useStrings } from "@/components/i18n/LocaleProvider";

export function ContentMapView() {
  const strings = useStrings();
  const entries = contentMapEntries();
  return (
    <div className="content-page mx-auto max-w-3xl">
      <PageHeading title={strings.nav.contentMap} />
      <ol className="mt-4 space-y-2">
        {entries.map((entry) => (
          <li key={entry.path}>
            <Link
              href={entry.path}
              className="tap-target flex items-baseline justify-between gap-3 rounded-xl px-2 py-2 hover:bg-ws-blue-soft"
            >
              <span className="text-ws-ink">{entry.label}</span>
              <code className="shrink-0 text-xs text-ws-blue">{entry.path}</code>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
