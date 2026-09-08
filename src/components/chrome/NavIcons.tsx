type IconProps = {
  className?: string;
};

export function InfoGlyph({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <path
        d="M16 13.2v9"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="16" cy="9.2" r="1.6" fill="white" />
    </svg>
  );
}

export function HomeGlyph({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M5 15.2 16 6l11 9.2V26a1.6 1.6 0 0 1-1.6 1.6H6.6A1.6 1.6 0 0 1 5 26z"
        fill="currentColor"
      />
      <path d="M12.2 27V19h7.6v8" fill="white" />
    </svg>
  );
}

export function MenuGlyph({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M6 9h20M6 16h20M6 23h20"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BackGlyph({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        d="M24 8v8.5a5 5 0 0 1-5 5H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M13 16.5 7.5 21.5 13 26.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
