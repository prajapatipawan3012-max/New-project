import { Loader } from "./Loader";

interface FullPageLoaderProps {
  variant?: "dark" | "light" | "royal" | "silver";
  label?: string;
}

export function FullPageLoader({ variant = "dark", label = "Loading site" }: FullPageLoaderProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <Loader size={64} speed={1.5} variant={variant} label={label} />
    </div>
  );
}
