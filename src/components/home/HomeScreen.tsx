import Link from "next/link";
import { ProductWordmark, WellspectMark } from "@/components/brand/BrandMark";
import { ChromeIconLink } from "@/components/chrome/ChromeIconLink";
import { NordicBackdrop } from "@/components/home/NordicBackdrop";
import { journeyList } from "@/content/catalog";
import { strings } from "@/content/strings";

export function HomeScreen() {
  const [women, men, bowel] = journeyList;

  return (
    <div className="relative min-h-dvh overflow-x-hidden overflow-y-auto text-white">
      <NordicBackdrop />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[var(--app-max)] flex-col px-[var(--content-pad-x)] pb-[calc(var(--safe-bottom)+1.1rem)] pt-[calc(var(--safe-top)+0.7rem)]">
        <header className="flex items-start justify-between gap-4">
          <ChromeIconLink
            href="/info/"
            icon="info"
            label={strings.nav.info}
            ariaLabel={strings.nav.infoAria}
            tone="light"
          />
          <WellspectMark variant="light" />
        </header>

        <main
          id="innehall"
          className="home-main mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-5"
        >
          <h1 className="home-title text-center font-display text-[clamp(1.55rem,3.8vw,3rem)] font-extralight uppercase tracking-[0.16em]">
            {strings.home.title}
          </h1>
          <svg
            className="home-title-rule"
            viewBox="0 0 800 28"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M36 8c0 12 28 14 52 14h624c24 0 52-2 52-14"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="journey-grid mt-8 sm:mt-10">
            <JourneyCircle
              href={`/${women.id}/`}
              lines={women.homeLines}
              label={women.homeLabel}
            />
            <JourneyCircle
              href={`/${men.id}/`}
              lines={men.homeLines}
              label={men.homeLabel}
            />
            <JourneyCircle
              href={`/${bowel.id}/`}
              lines={bowel.homeLines}
              label={bowel.homeLabel}
            />
          </div>
        </main>

        <footer className="mx-auto flex w-full max-w-[var(--app-max)] flex-col gap-3">
          <div className="flex items-end justify-between gap-4">
            <ProductWordmark name={strings.brand.navina} />
            <ProductWordmark name={strings.brand.lofric} />
          </div>
          <p className="max-w-2xl self-center text-center text-xs leading-relaxed text-white/85 sm:self-center sm:text-sm">
            {strings.disclaimer.short}{" "}
            <Link
              href="/info/"
              className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
            >
              {strings.home.readMore}
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

function JourneyCircle({
  href,
  lines,
  label,
}: {
  href: string;
  lines: [string, string];
  label: string;
}) {
  return (
    <Link href={href} className="journey-circle" aria-label={label}>
      <span className="journey-circle-lines">
        <span>{lines[0]}</span>
        <span>{lines[1]}</span>
      </span>
    </Link>
  );
}
