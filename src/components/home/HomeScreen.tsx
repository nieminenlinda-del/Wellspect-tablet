import Link from "next/link";
import { ProductWordmark, WellspectMark } from "@/components/brand/BrandMark";
import { InfoGlyph } from "@/components/chrome/NavIcons";
import { NordicBackdrop } from "@/components/home/NordicBackdrop";
import { Disclaimer } from "@/components/chrome/Disclaimer";
import { journeyList } from "@/content/catalog";
import { strings } from "@/content/strings";

export function HomeScreen() {
  const [women, men, bowel] = journeyList;

  return (
    <div className="relative min-h-dvh overflow-x-hidden overflow-y-auto text-white">
      <NordicBackdrop />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[var(--app-max)] flex-col px-[var(--content-pad-x)] pb-[calc(var(--safe-bottom)+1.1rem)] pt-[calc(var(--safe-top)+0.8rem)]">
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-white/80 sm:w-16" />
            <Link
              href="/info/"
              aria-label={strings.nav.info}
              className="tap-target inline-flex items-center justify-center rounded-full border-2 border-white text-white"
            >
              <InfoGlyph className="h-10 w-10" />
            </Link>
          </div>
          <WellspectMark variant="light" />
        </header>

        <main
          id="innehall"
          className="home-main mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-6"
        >
          <h1 className="home-title text-center font-display text-[clamp(1.7rem,4.2vw,3.2rem)] font-light tracking-[0.14em]">
            {strings.home.title}
          </h1>
          <p className="mt-3 max-w-xl text-center text-sm text-white/85 sm:text-base">
            {strings.home.subtitle}
          </p>

          <div className="journey-grid mt-8 sm:mt-10">
            <JourneyCircle href={`/${women.id}/`} label={women.homeLabel} />
            <JourneyCircle href={`/${men.id}/`} label={men.homeLabel} />
            <JourneyCircle href={`/${bowel.id}/`} label={bowel.homeLabel} />
          </div>
        </main>

        <footer className="mx-auto flex w-full max-w-[var(--app-max)] flex-col gap-3">
          <div className="flex items-end justify-between gap-4">
            <ProductWordmark name={strings.brand.navina} />
            <ProductWordmark name={strings.brand.lofric} />
          </div>
          <div className="max-w-xl self-center text-center sm:self-end sm:text-right">
            <Disclaimer compact light />
          </div>
        </footer>
      </div>
    </div>
  );
}

function JourneyCircle({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="journey-circle"
    >
      {label}
    </Link>
  );
}
