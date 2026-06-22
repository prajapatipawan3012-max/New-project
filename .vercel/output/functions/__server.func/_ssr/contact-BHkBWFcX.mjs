import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./button-CW4ItSm4.mjs";
import { L as Label, I as Input, T as Textarea } from "./label-C2k_SvnE.mjs";
import { a as site, w as waLink } from "./router-JJiNHwuD.mjs";
import { P as Phone, f as MessageCircle, b as Mail, a as MapPin, g as Clock } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tailwind-merge.mjs";
const schema = objectType({
  name: stringType().trim().min(2).max(80),
  phone: stringType().trim().min(7).max(20),
  message: stringType().trim().min(5).max(800)
});
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    message: ""
  });
  function submit(e) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error("Please complete all fields.");
      return;
    }
    const d = parsed.data;
    const msg = `Hi ${site.name},

Name: ${d.name}
Phone: ${d.phone}

${d.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "aluminum-surface border-b hairline-silver", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 md:py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] text-royal", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance", children: "Let's Talk Aluminium" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 mx-auto max-w-2xl text-silver/70", children: "Call, message or visit our Mumbai workshop. We'd love to hear about your project." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 md:py-24 bg-ink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x grid gap-8 lg:grid-cols-3", children: [{
        icon: Phone,
        title: "Phone",
        value: site.phone,
        href: `tel:${site.phone}`
      }, {
        icon: MessageCircle,
        title: "WhatsApp",
        value: site.phone,
        href: waLink()
      }, {
        icon: Mail,
        title: "Email",
        value: site.email,
        href: `mailto:${site.email}`
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: c.title === "WhatsApp" ? "_blank" : void 0, rel: "noopener noreferrer", className: "hover-lift block rounded-xl border border-white/10 bg-panel p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-lg bg-royal-soft text-royal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm font-semibold uppercase tracking-wider text-royal", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-medium text-silver break-all", children: c.value })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x mt-10 grid gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ", " + site.address)}`, target: "_blank", rel: "noopener noreferrer", className: "hover-lift block rounded-xl border border-white/10 bg-panel p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-lg bg-royal-soft text-royal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm font-semibold uppercase tracking-wider text-royal", children: "Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-silver", children: site.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-panel p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-lg bg-royal-soft text-royal", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm font-semibold uppercase tracking-wider text-royal", children: "Business Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1 text-sm text-silver", children: site.hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-silver/60", children: h.time })
          ] }, h.day)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/10 bg-panel text-silver p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold", children: "Wholesale & Trade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-silver/70", children: "Contractors, builders and fabricators — ask about negotiated wholesale rates and project-grade stock." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: waLink("Hi, I'm interested in wholesale rates."), target: "_blank", rel: "noopener noreferrer", className: "mt-4 inline-flex text-sm font-semibold text-royal hover:underline", children: "Message on WhatsApp →" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-16 md:pb-24 bg-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "rounded-2xl border border-white/10 bg-panel p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-silver", children: "Send a quick message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cname", className: "text-silver", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cname", className: "mt-1.5 bg-ink border-white/10 text-silver", value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cphone", className: "text-silver", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cphone", inputMode: "tel", className: "mt-1.5 bg-ink border-white/10 text-silver", value: form.phone, onChange: (e) => setForm({
              ...form,
              phone: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cmsg", className: "text-silver", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "cmsg", rows: 5, className: "mt-1.5 bg-ink border-white/10 text-silver", value: form.message, onChange: (e) => setForm({
              ...form,
              message: e.target.value
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", className: "mt-6 w-full bg-royal hover:bg-ink hover:text-royal border border-royal text-ink", children: "Send via WhatsApp" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-white/10 bg-panel min-h-[340px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Sagar Aluminium Works — Mumbai location", src: site.mapsEmbed, className: "h-full w-full min-h-[340px] border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", allowFullScreen: true }) })
    ] }) })
  ] });
}
export {
  Contact as component
};
