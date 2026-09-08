import Link from "next/link";
import { Illustration } from "@/components/illustrations/Illustrations";
import { strings } from "@/content/strings";
import type { ProductHub } from "@/content/types";

export function ProductHubView({ hub }: { hub: ProductHub }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_16rem]">
      <div>
        <p className="font-display text-sm font-bold tracking-wide text-ws-blue">
          {hub.kicker}
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {hub.actions.map((action) => (
            <li key={action.id} className={action.wide ? "sm:col-span-2" : ""}>
              <Link
                href={action.href}
                className="tile-notch flex min-h-24 items-center justify-between gap-3 border-2 border-ws-blue px-4 py-4 text-left transition hover:bg-ws-blue-soft/70 sm:min-h-[6.5rem]"
              >
                <span className="font-display text-lg font-semibold text-ws-blue-deep">
                  {action.title}
                </span>
                <span className="shrink-0 text-ws-blue" aria-hidden>
                  {action.icon === "video" ? "▶" : action.icon === "guide" ? "☰" : "i"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <aside className="flex flex-col items-center justify-between gap-4">
        <div className="h-44 w-full max-w-[13rem] lg:h-52 lg:max-w-[16rem]">
          <Illustration id={hub.productVisual} title={hub.title} />
        </div>
        {hub.ecoLabel ? (
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-ws-swan">
            {strings.ecolabel.title}
          </p>
        ) : null}
      </aside>
    </div>
  );
}
