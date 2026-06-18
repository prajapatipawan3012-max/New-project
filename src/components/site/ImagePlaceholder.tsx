import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  className?: string;
  ratio?: "video" | "square" | "portrait" | "wide" | "hero";
  variant?: "neon" | "ink" | "grid" | "lines";
};

const ratioMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
  hero: "aspect-[4/5] md:aspect-[4/5]",
};

const patternMap = {
  neon: "gradient-neon-radial",
  ink: "ink-panel",
  grid: "gradient-neon-grid",
  lines: "gradient-neon-lines",
};

/**
 * Abstract pattern placeholder for sections that previously held photographs.
 * Renders a dark, neon-accented gradient instead of a photo to keep the site
 * image-light and brand-coherent.
 */
export function ImagePlaceholder({ label, className, ratio = "video", variant = "neon" }: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border hairline-silver",
        patternMap[variant],
        ratioMap[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-silver/50">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="opacity-60">
          <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1" />
          <path d="M3 16l5-5 4 4 4-4 5 5" stroke="currentColor" strokeWidth="1" />
          <circle cx="9" cy="9" r="1.5" stroke="currentColor" strokeWidth="1" />
        </svg>
        {label && (
          <span className="px-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em]">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
