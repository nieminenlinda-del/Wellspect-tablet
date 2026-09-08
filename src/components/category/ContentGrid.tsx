import Link from "next/link";
import { Illustration } from "@/components/illustrations/Illustrations";
import { strings } from "@/content/strings";
import type { Journey } from "@/content/types";

export function ContentGrid({ journey }: { journey: Journey }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute right-0 top-24 hidden h-[28rem] w-24 opacity-40 lg:block">
        <BubbleColumn />
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {journey.tiles.map((tile) => (
          <li key={tile.id}>
            <Link
              href={tile.href}
              className="tile-notch flex min-h-[var(--tile-min-h)] flex-col justify-between border-2 border-ws-blue bg-white p-3 transition hover:bg-ws-blue-soft/60 sm:p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-xl font-semibold text-ws-blue-deep">
                  {tile.title}
                </h2>
                {tile.kind === "video" ? (
                  <span className="rounded-full bg-ws-blue-soft px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ws-blue">
                    Film
                  </span>
                ) : null}
              </div>
              <div className="mx-auto h-20 w-32 sm:h-24 sm:w-36 lg:h-28 lg:w-44">
                <Illustration id={tile.illustration} title={tile.title} />
              </div>
              {tile.caption ? (
                <p className="text-sm text-ws-muted">{tile.caption}</p>
              ) : (
                <p className="text-sm text-ws-blue">{strings.actions.open}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BubbleColumn() {
  return (
    <svg viewBox="0 0 80 420" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="28" r="16" fill="#9ec3dd" />
      <circle cx="30" cy="78" r="22" fill="#c5dcef" />
      <circle cx="54" cy="140" r="18" fill="#7eb6d9" opacity="0.7" />
      <circle cx="28" cy="200" r="14" fill="#b9d6ea" />
      <circle cx="52" cy="250" r="24" fill="#8ebfdb" opacity="0.55" />
      <circle cx="34" cy="320" r="16" fill="#cfe3f2" />
      <circle cx="56" cy="380" r="20" fill="#7aaecb" opacity="0.5" />
    </svg>
  );
}
