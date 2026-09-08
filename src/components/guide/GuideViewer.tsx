"use client";

import { useEffect, useState } from "react";
import { ChevronGlyph, MultiPageGlyph } from "@/components/chrome/NavIcons";
import { Illustration } from "@/components/illustrations/Illustrations";
import { strings } from "@/content/strings";
import type { Guide } from "@/content/types";

export function GuideViewer({ guide }: { guide: Guide }) {
  const [index, setIndex] = useState(0);
  const total = guide.pages.length;
  const page = guide.pages[index];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setIndex((value) => Math.min(total - 1, value + 1));
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  if (!page) return null;

  return (
    <div>
      <p className="max-w-3xl text-sm leading-relaxed text-ws-muted">{guide.intro}</p>
      <h2 className="mt-4 font-display text-2xl text-ws-blue-deep sm:text-3xl">{guide.title}</h2>

      <ol className="mt-6 space-y-5">
        {page.steps.map((step) => (
          <li
            key={step.id}
            className="grid gap-4 rounded-3xl border border-ws-line bg-ws-blue-soft/40 p-4 sm:grid-cols-[8.5rem_1fr] sm:p-5"
          >
            <div className="h-28">
              <Illustration id={step.illustration} />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-ws-blue">
                {step.number}.
              </p>
              <p className="mt-1 text-base leading-relaxed text-ws-ink sm:text-lg">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          disabled={index === 0}
          className="tap-target inline-flex items-center justify-center rounded-full border-2 border-ws-blue text-ws-blue disabled:opacity-30"
          aria-label={strings.nav.previous}
        >
          <ChevronGlyph direction="left" />
        </button>

        <div className="flex items-center gap-3 text-ws-ink">
          {total > 1 ? (
            <span className="text-ws-muted" title={strings.nav.multiPage}>
              <MultiPageGlyph />
            </span>
          ) : null}
          <p className="rounded-md border border-dashed border-ws-ink/50 px-3 py-1 font-semibold">
            {strings.nav.pageOf(index + 1, total)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIndex((value) => Math.min(total - 1, value + 1))}
          disabled={index === total - 1}
          className="tap-target inline-flex items-center justify-center rounded-full border-2 border-ws-blue text-ws-blue disabled:opacity-30"
          aria-label={strings.nav.next}
        >
          <ChevronGlyph direction="right" />
        </button>
      </div>
    </div>
  );
}
