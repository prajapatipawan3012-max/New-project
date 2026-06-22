import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-CW4ItSm4.mjs";
import { S as SectionTitle } from "./SectionTitle-CYcGSCtI.mjs";
import { d as whyChoose } from "./router-JJiNHwuD.mjs";
import "../_libs/sonner.mjs";
import { C as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tailwind-merge.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "aluminum-surface border-b hairline-silver", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 md:py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-royal", children: "About Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance", children: "Built on Craft. Trusted Across Mumbai." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 mx-auto max-w-2xl text-silver/70", children: "A family-run aluminium workshop turning premium materials into windows, doors and fabrication that last." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-neon-radial border hairline-silver p-10 lg:p-14 flex flex-col justify-center min-h-[360px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-6xl md:text-7xl text-royal text-shadow-neon mb-4", children: "20+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-silver/70", children: "Years of trusted aluminium fabrication in Mumbai" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { align: "left", eyebrow: "Our Story", title: "A Workshop Built Around Aluminium", subtitle: "Welcome to Sagar Aluminium Works — Mumbai's trusted name in aluminium manufacturing and supply." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-silver/70 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We specialise in creating durable, stylish and customised aluminium solutions for residential, commercial and industrial projects. With years of industry experience, we take pride in delivering quality craftsmanship, premium materials and exceptional customer service." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From aluminium sliding windows and doors to complete fabrication projects, we provide solutions that combine strength, functionality and modern design. Whether you're a homeowner remodelling a single room or a contractor outfitting an entire tower — we work to the same standard." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-royal hover:bg-ink hover:text-royal border border-royal text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Request a Quote" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-silver/30 text-silver hover:bg-ink hover:text-royal hover:border-royal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Our Services" }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Our Promise", title: "What You Get When You Work With Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: whyChoose.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-panel p-6 hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "text-royal", size: 22 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-base font-semibold text-silver", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-silver/60", children: w.body })
      ] }, w.title)) })
    ] }) })
  ] });
}
export {
  About as component
};
