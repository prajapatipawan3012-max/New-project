import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-JJiNHwuD.mjs";
function SectionTitle({ eyebrow, title, subtitle, align = "center", className, tone = "ink" }) {
  const isSilver = tone === "silver";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className), children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
      "text-[10px] font-semibold uppercase tracking-[0.28em] mb-4 inline-flex items-center gap-3",
      isSilver ? "text-silver" : "text-royal"
    ), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-px w-8", isSilver ? "bg-silver/60" : "bg-royal/60") }),
      eyebrow
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: cn(
      "font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-balance",
      isSilver ? "text-silver" : "text-silver"
    ), children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: cn(
      "mt-5 text-base md:text-lg font-light text-balance leading-relaxed",
      isSilver ? "text-silver/80" : "text-muted-foreground"
    ), children: subtitle })
  ] });
}
export {
  SectionTitle as S
};
