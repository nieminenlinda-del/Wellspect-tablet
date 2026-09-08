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
    <div className="relative min-h-dvh text-white">
      <div className="absolute inset-0 overflow-hidden">
        <NordicBackdrop />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col px-[var(--page-pad-x)] pb-[calc(var(--safe-bottom)+1.1rem)] pt-[calc(var(--safe-top)+0.8rem)]">
        <header className="flex shrink-0 items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-white/80 sm:w-16" />
            <Link
              href="/info/"
              aria-label={strings.nav.info}
              className="inline-flex min-h-[var(--tap-min)] min-w-[var(--tap-min)] items-center justify-center rounded-full border-2 border-white text-white"
            >
              <InfoGlyph className="h-10 w-10" />
            </Link>
          </div>
          <WellspectMark variant="light" />
        </header>

        <main
          id="innehall"
          className="mx-auto flex w-full max-w-[var(--home-max)] flex-1 flex-col items-center justify-center py-[var(--home-main-py)]"
        >
          <h1 className="text-center font-display text-[length:var(--home-title)] font-light tracking-[0.14em]">
            {strings.home.title}
          </h1>
          <p className="mt-3 max-w-xl text-center text-sm text-white/85 sm:text-base">
            {strings.home.subtitle}
          </p>

          <div className="journey-grid mt-[var(--home-grid-mt)]">
            <JourneyCircle href={`/${women.id}/`} label={women.homeLabel} />
            <JourneyCircle href={`/${men.id}/`} label={men.homeLabel} />
            <JourneyCircle href={`/${bowel.id}/`} label={bowel.homeLabel} />
          </div>
        </main>

        <footer className="mx-auto flex w-full max-w-[var(--app-max)] shrink-0 flex-col gap-3">
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
      className="flex size-[var(--journey-size)] items-center justify-center rounded-full border-[3px] border-white bg-white/5 px-4 text-center font-display text-[length:var(--journey-text)] leading-snug text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-[2px] transition hover:bg-white/15"
    >
      {label}
    </Link>
  );
}
