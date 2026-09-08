type FlagProps = { className?: string };

export function SwedenFlag({ className = "h-4 w-6" }: FlagProps) {
  return (
    <svg viewBox="0 0 16 10" className={className} aria-hidden>
      <rect width="16" height="10" rx="1" fill="#005293" />
      <rect x="5" width="2" height="10" fill="#FECB00" />
      <rect y="4" width="16" height="2" fill="#FECB00" />
    </svg>
  );
}

export function FinlandFlag({ className = "h-4 w-6" }: FlagProps) {
  return (
    <svg viewBox="0 0 16 10" className={className} aria-hidden>
      <rect width="16" height="10" rx="1" fill="#fff" />
      <rect x="4.5" width="2.2" height="10" fill="#003580" />
      <rect y="3.9" width="16" height="2.2" fill="#003580" />
    </svg>
  );
}

export function NorwayFlag({ className = "h-4 w-6" }: FlagProps) {
  return (
    <svg viewBox="0 0 16 10" className={className} aria-hidden>
      <rect width="16" height="10" rx="1" fill="#BA0C2F" />
      <rect x="4.2" width="3.2" height="10" fill="#fff" />
      <rect y="3.4" width="16" height="3.2" fill="#fff" />
      <rect x="5" width="1.6" height="10" fill="#00205B" />
      <rect y="4.2" width="16" height="1.6" fill="#00205B" />
    </svg>
  );
}

export function DenmarkFlag({ className = "h-4 w-6" }: FlagProps) {
  return (
    <svg viewBox="0 0 16 10" className={className} aria-hidden>
      <rect width="16" height="10" rx="1" fill="#C8102E" />
      <rect x="5" width="2" height="10" fill="#fff" />
      <rect y="4" width="16" height="2" fill="#fff" />
    </svg>
  );
}
