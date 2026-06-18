import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "ink" | "silver";
};

export function SectionTitle({ eyebrow, title, subtitle, align = "center", className, tone = "ink" }: Props) {
  const isSilver = tone === "silver";
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <div className={cn(
          "text-[10px] font-semibold uppercase tracking-[0.28em] mb-4 inline-flex items-center gap-3",
          isSilver ? "text-silver" : "text-royal",
        )}>
          <span className={cn("h-px w-8", isSilver ? "bg-silver/60" : "bg-royal/60")} />
          {eyebrow}
        </div>
      )}
      <h2 className={cn(
        "font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance",
        isSilver ? "text-silver" : "text-silver",
      )}>{title}</h2>
      {subtitle && (
        <p className={cn(
          "mt-5 text-base md:text-lg font-light text-balance leading-relaxed",
          isSilver ? "text-silver/80" : "text-muted-foreground",
        )}>{subtitle}</p>
      )}
    </div>
  );
}
