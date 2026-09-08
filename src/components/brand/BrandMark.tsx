import { strings } from "@/content/strings";

type Props = {
  variant?: "light" | "blue";
  className?: string;
};

export function WellspectMark({ variant = "blue", className = "" }: Props) {
  const color = variant === "light" ? "text-white" : "text-ws-blue";
  return (
    <div className={`text-right leading-none ${color} ${className}`}>
      <div className="font-display text-[1.35rem] font-semibold tracking-tight sm:text-[1.55rem]">
        {strings.brand.name}
      </div>
      <div className="mt-1 text-[0.62rem] font-semibold tracking-[0.18em] opacity-90">
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
