"use client";

import { splitProductTitle } from "@/lib/chrome";
import { useStrings } from "@/components/i18n/LocaleProvider";

type Props = {
  variant?: "light" | "blue";
  className?: string;
};

export function WellspectMark({ variant = "blue", className = "" }: Props) {
  const strings = useStrings();
  const color = variant === "light" ? "text-white" : "text-ws-blue";
  return (
    <div className={`brand-mark text-right leading-none ${color} ${className}`}>
      <div className="font-display text-[1.2rem] font-semibold uppercase tracking-[0.08em] sm:text-[1.45rem]">
        {strings.brand.name}
      </div>
      <div className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] opacity-85">
        {strings.brand.tagline}
      </div>
    </div>
  );
}

export function ProductWordmark({
  name,
  variant = "light",
}: {
  name: string;
  variant?: "light" | "blue";
}) {
  return (
    <span
      className={`font-display text-xl italic font-bold sm:text-2xl ${
        variant === "light" ? "text-white" : "text-ws-blue"
      }`}
    >
      {name}
    </span>
  );
}

export function ProductName({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const { brand, rest } = splitProductTitle(title);
  return (
    <span className={`product-name ${className}`}>
      <span className="product-name-brand">{brand}</span>
      {rest ? <span className="product-name-rest"> {rest}</span> : null}
    </span>
  );
}
