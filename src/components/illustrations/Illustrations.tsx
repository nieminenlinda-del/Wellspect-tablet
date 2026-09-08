import type { ReactNode } from "react";
import type { IllustrationId } from "@/content/types";

type Props = {
  id: IllustrationId;
  className?: string;
  title?: string;
};

export function Illustration({ id, className = "h-full w-full", title }: Props) {
  const svg = illustrations[id];
  return (
    <svg
      viewBox="0 0 160 120"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
    >
      {svg}
    </svg>
  );
}

const ink = "#005A9C";
const mid = "#4A90C8";
const soft = "#D6E8F4";
const deep = "#003F73";

const illustrations: Record<IllustrationId, ReactNode> = {
  "origo-pack": (
    <>
      <rect x="48" y="10" width="64" height="100" rx="10" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M56 18h48c3 0 6 3 6 6v18H50V24c0-3 3-6 6-6z" fill={ink} />
      <path d="M62 52c18-10 36 8 36 22" fill="none" stroke={mid} strokeWidth="4" />
      <rect x="70" y="78" width="20" height="18" rx="4" fill={mid} />
    </>
  ),
  "primo-pack": (
    <>
      <rect x="42" y="18" width="76" height="84" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <rect x="50" y="28" width="60" height="28" rx="4" fill={ink} />
      <path d="M70 68h20v22h-20z" fill={mid} />
    </>
  ),
  "classic-cath": (
    <>
      <path d="M28 78c28-38 76-38 104 0" fill="none" stroke={soft} strokeWidth="10" />
      <path d="M30 76c28-36 74-36 100 0" fill="none" stroke={ink} strokeWidth="4" />
      <rect x="118" y="68" width="22" height="16" rx="4" fill="#2f8f5b" />
    </>
  ),
  "sense-pack": (
    <>
      <rect x="54" y="16" width="52" height="88" rx="16" fill={soft} stroke={ink} strokeWidth="2.5" />
      <circle cx="80" cy="40" r="10" fill={ink} />
      <rect x="70" y="62" width="20" height="26" rx="6" fill={mid} />
    </>
  ),
  "elle-pack": (
    <>
      <path d="M40 88h52v-44c0-16 12-28 28-28h8" fill="none" stroke={ink} strokeWidth="8" strokeLinecap="round" />
      <rect x="36" y="80" width="60" height="18" rx="6" fill={mid} />
    </>
  ),
  "hydrokit-pack": (
    <>
      <rect x="28" y="24" width="104" height="76" rx="12" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M40 48h48l12 28H52z" fill={mid} />
      <rect x="96" y="40" width="24" height="44" rx="6" fill={ink} />
    </>
  ),
  "navina-smart": (
    <>
      <rect x="52" y="14" width="56" height="92" rx="14" fill={soft} stroke={ink} strokeWidth="2.5" />
      <circle cx="80" cy="48" r="16" fill="white" stroke={ink} strokeWidth="3" />
      <circle cx="80" cy="48" r="6" fill={ink} />
      <rect x="64" y="78" width="32" height="10" rx="5" fill={mid} />
    </>
  ),
  "navina-classic": (
    <>
      <rect x="36" y="28" width="88" height="64" rx="10" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M52 60h56" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      <circle cx="80" cy="60" r="8" fill={mid} />
    </>
  ),
  "anatomy-male": (
    <>
      <ellipse cx="80" cy="58" rx="28" ry="36" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M80 28v64M68 50c8 8 16 8 24 0" fill="none" stroke={ink} strokeWidth="2.5" />
    </>
  ),
  "anatomy-female": (
    <>
      <ellipse cx="80" cy="56" rx="30" ry="34" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M68 48c8 14 16 14 24 0M80 44v36" fill="none" stroke={ink} strokeWidth="2.5" />
    </>
  ),
  film: (
    <>
      <rect x="28" y="32" width="70" height="52" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M108 40l24-10v60l-24-10z" fill={ink} />
      <circle cx="58" cy="58" r="12" fill="white" stroke={ink} strokeWidth="3" />
      <path d="M54 52l14 6-14 6z" fill={ink} />
    </>
  ),
  "arabic-video": (
    <>
      <rect x="30" y="22" width="100" height="76" rx="10" fill={soft} stroke={ink} strokeWidth="2.5" />
      <circle cx="80" cy="52" r="16" fill={ink} />
      <rect x="54" y="76" width="52" height="10" rx="4" fill={mid} />
    </>
  ),
  swan: (
    <>
      <circle cx="80" cy="60" r="36" fill="#e6f6ec" stroke="#2e8b57" strokeWidth="3" />
      <path
        d="M54 72c10-22 28-28 40-16 6 6 6 16-2 20-10 6-22 2-28-6"
        fill="none"
        stroke="#2e8b57"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="96" cy="50" r="3" fill="#2e8b57" />
    </>
  ),
  guides: (
    <>
      <rect x="44" y="22" width="52" height="76" rx="4" fill={soft} stroke={ink} strokeWidth="2" />
      <rect x="58" y="16" width="52" height="76" rx="4" fill="white" stroke={ink} strokeWidth="2.5" />
      <path d="M68 36h32M68 50h32M68 64h22" stroke={mid} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  contact: (
    <>
      <circle cx="56" cy="58" r="22" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M46 58c8-10 12-10 20 0-8 10-12 10-20 0z" fill={ink} />
      <rect x="86" y="40" width="42" height="32" rx="6" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M90 46l17 12 17-12" fill="none" stroke={ink} strokeWidth="2.5" />
    </>
  ),
  bowel: (
    <>
      <path d="M46 36c18-16 50-16 68 8 10 14-6 28-20 22-12-4-10 16-28 16-18 0-28-22-20-46z" fill={soft} stroke={ink} strokeWidth="2.5" />
    </>
  ),
  "wash-hands": (
    <>
      <path d="M40 28h20v18H40z" fill={mid} />
      <path d="M50 46v10" stroke={ink} strokeWidth="4" />
      <path d="M38 78c8-18 28-18 36 0v18H38z" fill={soft} stroke={ink} strokeWidth="2" />
      <path d="M74 78c8-16 26-12 30 6v12H74z" fill="white" stroke={ink} strokeWidth="2" />
      <circle cx="118" cy="40" r="10" fill={ink} />
    </>
  ),
  "activate-saline": (
    <>
      <rect x="62" y="16" width="36" height="88" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <rect x="68" y="24" width="24" height="18" rx="4" fill={ink} />
      <path d="M40 50c8 8 14 8 22 2" fill="none" stroke={deep} strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  "open-loop": (
    <>
      <rect x="70" y="18" width="32" height="84" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <circle cx="58" cy="70" r="12" fill="none" stroke={ink} strokeWidth="4" />
      <path d="M70 70h8" stroke={ink} strokeWidth="4" />
    </>
  ),
  "sleeve-grip": (
    <>
      <rect x="72" y="16" width="28" height="90" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <rect x="68" y="30" width="36" height="20" rx="6" fill={ink} />
      <path d="M40 52c10 6 18 8 28 6" stroke={deep} strokeWidth="4" fill="none" />
    </>
  ),
  "sleeve-cover": (
    <>
      <path d="M80 18v84" stroke={ink} strokeWidth="5" />
      <rect x="70" y="40" width="20" height="50" rx="8" fill={soft} stroke={mid} strokeWidth="3" />
      <path d="M44 70h22" stroke={deep} strokeWidth="4" />
    </>
  ),
  "hang-tab": (
    <>
      <rect x="58" y="22" width="44" height="76" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <rect x="70" y="12" width="20" height="16" rx="3" fill={ink} />
    </>
  ),
  "insert-male": (
    <>
      <ellipse cx="70" cy="58" rx="22" ry="30" fill={soft} stroke={ink} strokeWidth="2" />
      <path d="M90 40c22 8 28 28 10 44" fill="none" stroke={ink} strokeWidth="4" />
    </>
  ),
  "empty-dispose": (
    <>
      <rect x="58" y="28" width="44" height="64" rx="8" fill={soft} stroke={ink} strokeWidth="2.5" />
      <path d="M70 20h20l4 8H66z" fill={ink} />
      <path d="M72 48h16M72 62h16" stroke={mid} strokeWidth="4" />
    </>
  ),
  video: (
    <>
      <circle cx="80" cy="60" r="28" fill={ink} />
      <path d="M72 46l24 14-24 14z" fill="white" />
    </>
  ),
  info: (
    <>
      <circle cx="80" cy="60" r="30" fill={ink} />
      <path d="M80 52v28" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <circle cx="80" cy="40" r="5" fill="white" />
    </>
  ),
};
