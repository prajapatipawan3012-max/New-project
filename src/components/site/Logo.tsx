import { cn } from "@/lib/utils";
import { site } from "@/lib/site-config";

const LOGO_SRC = "/logo.png";

type Variant = "light" | "dark" | "auto";

interface LogoProps {
  variant?: Variant;
  className?: string;
  /** width hint in px for responsive image sizing */
  width?: number;
  height?: number;
  /** When true, renders as eager + high fetch priority (use on hero / header). */
  priority?: boolean;
  /** Optional itemProp for structured data (e.g. inside Organization microdata). */
  itemProp?: string;
  alt?: string;
}

/**
 * Brand mark for {site.name}.
 *
 * The logo is neon-green artwork on a white/transparent background.
 * The component accepts a `variant` prop for compatibility with light/dark surfaces.
 */
export function Logo({
  variant = "dark",
  className,
  width = 160,
  height = 48,
  priority = false,
  itemProp,
  alt,
}: LogoProps) {
  const resolvedAlt =
    alt ??
    `${site.name} logo — neon green house and aluminium mark, Mumbai aluminium windows and doors manufacturer`;

  return (
    <img
      src={LOGO_SRC}
      alt={resolvedAlt}
      width={width}
      height={height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      itemProp={itemProp}
      className={cn(
        "object-contain select-none",
        variant === "light" &&
          "brightness-110 contrast-105 saturate-110 drop-shadow-[0_0_12px_rgba(132,204,22,0.35)]",
        variant === "dark" && "",
        className,
      )}
    />
  );
}

export const LOGO_URL = LOGO_SRC;
