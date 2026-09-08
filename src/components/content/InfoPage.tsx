"use client";

import { useEffect, useState } from "react";
import {
  BackGlyph,
  ChevronGlyph,
  HomeGlyph,
  InfoGlyph,
  MenuGlyph,
  MultiPageGlyph,
} from "@/components/chrome/NavIcons";
import { Disclaimer } from "@/components/chrome/Disclaimer";
import { strings } from "@/content/strings";
import {
  exitKioskFullscreen,
  readKioskFlag,
  requestKioskFullscreen,
  writeKioskFlag,
} from "@/lib/kiosk";

const icons = [
  { label: "Huvudmeny knapp", node: <HomeGlyph className="h-9 w-9" /> },
  { label: "Kategorimeny knapp", node: <MenuGlyph className="h-9 w-9" /> },
  { label: "Tillbaka till undermeny knapp", node: <BackGlyph className="h-9 w-9" /> },
  { label: "Följande sida knapp", node: <ChevronGlyph direction="right" className="h-9 w-9" /> },
  { label: "Föregående sida knapp", node: <ChevronGlyph direction="left" className="h-9 w-9" /> },
  { label: "Instruktioner knapp", node: <InfoGlyph className="h-9 w-9" /> },
  { label: "Ämnet omfattar flera sidor", node: <MultiPageGlyph className="h-8 w-8" /> },
  {
    label: "Sidnummer",
    node: (
      <span className="rounded border border-dashed border-current px-2 py-1 text-sm font-semibold">
        Sida 1/2
      </span>
    ),
  },
];

export function InfoPage() {
  const [kiosk, setKiosk] = useState(false);

  useEffect(() => {
    setKiosk(readKioskFlag());
  }, []);

  const toggleKiosk = async () => {
    const next = !kiosk;
    writeKioskFlag(next);
    setKiosk(next);
    if (next) {
      await requestKioskFullscreen();
    } else {
      await exitKioskFullscreen();
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <p className="text-base leading-relaxed text-ws-ink sm:text-lg">{strings.info.intro}</p>

      <section>
        <h2 className="font-display text-2xl text-ws-blue">{strings.info.iconsHeading}</h2>
        <ul className="mt-4 space-y-3">
          {icons.map((icon) => (
            <li
              key={icon.label}
              className="flex items-center gap-4 rounded-2xl border border-ws-line px-3 py-3"
            >
              <span className="flex min-h-12 min-w-12 items-center justify-center text-ws-blue">
                {icon.node}
              </span>
              <span className="text-base text-ws-ink">{icon.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-ws-line p-4">
        <h2 className="font-display text-2xl text-ws-blue">{strings.info.kioskHeading}</h2>
        <p className="mt-2 text-ws-muted">{strings.info.kioskBody}</p>
        <p className="mt-2 text-sm font-semibold text-ws-blue-deep">
          {kiosk ? strings.info.kioskOn : strings.info.kioskOff}
        </p>
        <button
          type="button"
          onClick={() => void toggleKiosk()}
          className="mt-4 min-h-14 rounded-full bg-ws-blue px-6 text-base font-semibold text-white"
        >
          {kiosk ? strings.info.kioskDisable : strings.info.kioskEnable}
        </button>
      </section>

      <p className="text-sm text-ws-muted">{strings.info.hardwareNote}</p>
      <Disclaimer />
    </div>
  );
}
