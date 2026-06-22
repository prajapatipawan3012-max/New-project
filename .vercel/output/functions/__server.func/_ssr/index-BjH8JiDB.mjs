import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionTitle } from "./SectionTitle-CYcGSCtI.mjs";
import { L as Logo, w as waLink, s as services, d as whyChoose, e as featuredProjects, t as testimonials } from "./router-JJiNHwuD.mjs";
import "../_libs/sonner.mjs";
import { h as ArrowRight, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "ink-panel gradient-neon-radial min-h-[92vh] md:min-h-[88vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 min-h-[92vh] md:min-h-[88vh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5 px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "dark", priority: true, width: 320, height: 90, className: "h-16 sm:h-20 lg:h-24 w-auto neon-glow" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-silver/80 uppercase tracking-[0.3em] text-[10px] font-semibold mb-6 inline-flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-royal/70" }),
          "Mumbai · Established 2004"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-4 mb-8 text-silver", children: "Architectural aluminium, built to glow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-silver/75 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md", children: "Engineering premium architectural windows, doors, and bespoke fabrication for Mumbai's most discerning residences and offices." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "inline-flex items-center justify-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer", children: "Get Free Quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink(), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center border border-silver/40 text-silver hover:bg-panel hover:text-royal hover:border-royal px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer", children: "WhatsApp Us" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md", children: [["20+", "Years"], ["5000+", "Projects"], ["100%", "On-Time"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl lg:text-4xl text-royal text-shadow-neon", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-silver text-[10px] uppercase tracking-[0.22em] mt-1.5", children: l })
        ] }, l)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 relative overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 w-full h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/hero-shop.jpeg", alt: "Sagar Aluminium Work", className: "w-full h-full object-cover object-center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink via-ink/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-royal/10 mix-blend-overlay" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface border-b hairline-silver", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", children: services.slice(0, 4).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", hash: s.slug, className: "group p-8 lg:p-10 border-b sm:border-b lg:border-b-0 lg:border-r last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r hairline-silver hover:bg-ink transition-colors cursor-pointer flex flex-col", children: [
      s.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-48 sm:h-56 mb-8 overflow-hidden bg-panel relative border hairline-silver", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-panel text-royal mb-6 grid place-items-center font-serif text-base shrink-0 group-hover:bg-royal group-hover:text-ink transition-colors", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-silver mb-2 leading-tight", children: s.title.replace("Aluminium ", "") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-silver/60 font-light", children: s.short }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-royal", children: [
        "Explore ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
      ] })
    ] }, s.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Why Mumbai Trusts Us", title: "Eight Standards. Every Project.", subtitle: "A practical, honest workmanship benchmark — held on every install, residential or wholesale.", align: "left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l hairline-silver", children: whyChoose.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 lg:p-8 border-r border-b hairline-silver bg-panel hover:bg-ink transition-colors group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-2xl text-royal", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-silver/30 group-hover:bg-royal/60 transition-colors" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-silver mb-2 leading-tight", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-silver/60 font-light leading-relaxed", children: w.body })
      ] }, w.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 ink-panel gradient-neon-lines", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Featured Projects", title: "Recent Installations Across Mumbai", align: "left", tone: "silver", className: "max-w-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-silver hover:text-royal text-[11px] font-semibold uppercase tracking-[0.22em] border-b border-silver/40 hover:border-royal pb-1 self-start lg:self-end cursor-pointer w-fit", children: [
          "View Full Gallery ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-white/10 border hairline-silver", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10", children: featuredProjects.slice(0, 3).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-panel hover:bg-ink transition-colors p-7 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-royal", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-sm text-silver/60", children: [
            "— ",
            String(i + 1).padStart(2, "0")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-silver leading-tight mb-3", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-silver/70 font-light leading-relaxed", children: p.desc })
      ] }, p.title)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTitle, { eyebrow: "Testimonials", title: "What Our Clients Say", align: "left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-px bg-white/10 border hairline-silver md:grid-cols-2", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-panel p-8 lg:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-5xl text-royal leading-none mb-6 text-shadow-neon", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-lg text-silver leading-relaxed font-light", children: t.quote }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-8 pt-6 border-t hairline-silver flex items-baseline justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-base text-silver", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.24em] text-silver/60 mt-1", children: t.role })
        ] }) })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "ink-panel py-20 lg:py-24 border-t hairline-silver", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl lg:text-5xl text-silver italic leading-tight mb-3", children: "Ready for architectural excellence?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-silver/70 font-light uppercase tracking-[0.22em] text-xs", children: "Consultation is complimentary for Mumbai projects." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-5 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "inline-flex items-center justify-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors cursor-pointer", children: "Request Site Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 text-silver border-b-2 border-royal pb-1 font-semibold hover:text-royal transition-colors text-[11px] uppercase tracking-[0.22em] self-start cursor-pointer", children: [
          "Or Contact Us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
