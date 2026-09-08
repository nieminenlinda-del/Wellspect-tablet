"use client";

import type { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BackGlyph,
  HomeGlyph,
  InfoGlyph,
  MenuGlyph,
} from "@/components/chrome/NavIcons";

const icons = {
  back: BackGlyph,
  home: HomeGlyph,
  info: InfoGlyph,
  menu: MenuGlyph,
} as const;

export type ChromeIconName = keyof typeof icons;

type Props = {
  href: string;
  icon: ChromeIconName;
  label: string;
  ariaLabel: string;
  tone?: "brand" | "light";
  current?: boolean;
  /** Use session history when possible; `href` is the kiosk-safe fallback. */
  historyBack?: boolean;
};

export function ChromeIconLink({
  href,
  icon,
  label,
  ariaLabel,
  tone = "brand",
  current = false,
  historyBack = false,
}: Props) {
  const router = useRouter();
  const Icon = icons[icon];
  const filled = tone === "light" ? false : icon === "info" || current;

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!historyBack) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    if (window.history.length > 1) {
      event.preventDefault();
      router.back();
    }
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      title={ariaLabel}
      aria-current={current ? "page" : undefined}
      onClick={onClick}
      className={`chrome-icon-link ${tone === "light" ? "chrome-icon-link--light" : ""}`}
    >
      <span className={`chrome-icon-disc ${filled ? "chrome-icon-disc--filled" : ""}`}>
        <Icon className="chrome-icon-svg" />
      </span>
      <span className="chrome-icon-label">{label}</span>
    </Link>
  );
}

export function ChromeIconStack({ children }: { children: ReactNode }) {
  return <div className="chrome-icon-stack">{children}</div>;
}
