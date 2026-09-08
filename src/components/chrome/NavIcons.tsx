type IconProps = {
  className?: string;
};

/** Info “i” — the circular disc comes from ChromeIconLink. */
export function InfoGlyph({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="9.6" r="2" fill="currentColor" />
      <path
        d="M16 14.4v10"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Outlined house — standard Home affordance. */
export function HomeGlyph({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M5.5 15.2 16 6.2l10.5 9V25.2A1.8 1.8 0 0 1 24.7 27H7.3A1.8 1.8 0 0 1 5.5 25.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 27v-8.2h7.6V27"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Simple left chevron — standard Back. */
export function BackGlyph({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M19.5 7 10 16l9.5 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 2×2 grid for the category/innehåll menu. */
export function MenuGlyph({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="7" y="7" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" strokeWidth="2.1" />
      <rect x="18" y="7" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" strokeWidth="2.1" />
      <rect x="7" y="18" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" strokeWidth="2.1" />
      <rect x="18" y="18" width="7" height="7" rx="1.4" fill="none" stroke="currentColor" strokeWidth="2.1" />
    </svg>
  );
}

export function ChevronGlyph({
  direction,
  className = "h-8 w-8",
}: IconProps & { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`${className} ${direction === "left" ? "-scale-x-100" : ""}`}
      aria-hidden
    >
      <path
        d="M12 7l10 9-10 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MultiPageGlyph({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="6" y="8" width="16" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="5" width="16" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function DropletGlyph({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M12 7c0 6-6 9-6 14a6 6 0 0 0 12 0c0-5-6-8-6-14z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M22 11c0 4.5-4.5 7-4.5 11a4.5 4.5 0 0 0 9 0c0-4-4.5-6.5-4.5-11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayGlyph({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="12.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M13.2 11.2v9.6l8.4-4.8z" fill="currentColor" />
    </svg>
  );
}

export function PersonGlyph({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 26c1.4-6 4.4-8.5 8-8.5S22.6 20 24 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
