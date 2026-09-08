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
import { PageHeading } from "@/components/chrome/PageHeading";
import { Disclaimer } from "@/components/chrome/Disclaimer";
import { FallbackNote } from "@/components/i18n/LocaleBits";
import { useStrings } from "@/components/i18n/LocaleProvider";
import {
  exitKioskFullscreen,
  readKioskFlag,
  requestKioskFullscreen,
  writeKioskFlag,
} from "@/lib/kiosk";

export function InfoPage() {
  const strings = useStrings();
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

  const icons = [
    { label: `${strings.nav.home} — ${strings.nav.homeAria}`, node: <HomeGlyph className="h-9 w-9" /> },
    { label: `${strings.nav.back} — ${strings.nav.backAria}`, node: <BackGlyph className="h-9 w-9" /> },
    { label: `${strings.nav.info} — ${strings.nav.infoAria}`, node: <InfoGlyph className="h-9 w-9" /> },
    { label: `${strings.nav.category} — ${strings.nav.categoryAria}`, node: <MenuGlyph className="h-9 w-9" /> },
    { label: strings.nav.next, node: <ChevronGlyph direction="right" className="h-9 w-9" /> },
    { label: strings.nav.previous, node: <ChevronGlyph direction="left" className="h-9 w-9" /> },
    { label: strings.nav.multiPage, node: <MultiPageGlyph className="h-8 w-8" /> },
  ];

  return (
    <div className="content-page mx-auto max-w-3xl">
      <PageHeading title={strings.info.title} />
      <p className="content-lede">{strings.info.intro}</p>
      <FallbackNote />

      <section className="mt-7">
        <h2 className="section-heading">{strings.info.structureHeading}</h2>
        <p className="mt-3 text-base leading-relaxed text-ws-ink sm:text-lg">
          {strings.info.structureIntro}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-ws-ink sm:text-lg">
          {strings.info.structureItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="section-heading">{strings.info.iconsHeading}</h2>
        <ul className="mt-4 space-y-3">
          {icons.map((icon) => (
            <li key={icon.label} className="flex items-center gap-4 rounded-2xl border border-ws-line px-3 py-3">
              <span className="chrome-icon-disc text-ws-blue">
                {icon.node}
              </span>
              <span className="text-base text-ws-ink">{icon.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-ws-line p-5">
        <h2 className="section-heading">{strings.info.kioskHeading}</h2>
        <p className="mt-2 text-ws-muted">{strings.info.kioskBody}</p>
        <p className="mt-2 text-sm font-semibold text-ws-blue-deep">
          {kiosk ? strings.info.kioskOn : strings.info.kioskOff}
        </p>
        <button
          type="button"
          onClick={() => void toggleKiosk()}
          className="tap-target mt-4 rounded-full bg-ws-blue px-6 text-base font-semibold text-white"
        >
          {kiosk ? strings.info.kioskDisable : strings.info.kioskEnable}
        </button>
      </section>

      <p className="mt-6 text-sm text-ws-muted">{strings.info.hardwareNote}</p>
      <div className="mt-6">
        <Disclaimer title={strings.disclaimer.notAdvice} />
      </div>
    </div>
  );
}
