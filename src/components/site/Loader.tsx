import { cn } from "@/lib/utils";

type LoaderVariant = "dark" | "light" | "royal" | "silver";

interface LoaderProps {
  size?: number;
  speed?: number;
  bgOpacity?: number;
  variant?: LoaderVariant;
  className?: string;
  label?: string;
}

const variantColors: Record<LoaderVariant, string> = {
  dark: "var(--color-ink)",
  light: "oklch(0.99 0 0)",
  royal: "var(--color-royal)",
  silver: "var(--color-silver)",
};

export function Loader({
  size = 45,
  speed = 1.75,
  bgOpacity = 0.1,
  variant = "dark",
  className,
  label = "Loading",
}: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn("loader-container", className)}
      style={{
        ["--uib-size" as string]: `${size}px`,
        ["--uib-color" as string]: variantColors[variant],
        ["--uib-speed" as string]: `${speed}s`,
        ["--uib-bg-opacity" as string]: String(bgOpacity),
      }}
    >
      <div className="loader-half" />
      <div className="loader-half" />
    </div>
  );
}
