import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { X, M as Menu, F as Facebook, I as Instagram, Y as Youtube, a as MapPin, P as Phone, b as Mail, A as ArrowUp } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-D4-H-N50.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const site = {
  name: "Sagar Aluminium Works",
  city: "Mumbai",
  region: "Maharashtra",
  country: "India",
  address: "Shop no.3, Suraj plaza, Station Rd, near MBMC Road, Fakhri Colony, Chandulal Park, Bhayandar West, Mira Bhayandar, Mumbai, Maharashtra 401101",
  phone: "+91 9892432018",
  whatsapp: "919892432018",
  // digits only, country code first
  email: "mparjapati115@gmail.com",
  hours: [
    { day: "Monday", time: "9:30 AM – 5:00 PM" },
    { day: "Tuesday – Sunday", time: "9:30 AM – 9:00 PM" }
  ],
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#"
  },
  // Google Maps embed for the new address
  mapsEmbed: "https://www.google.com/maps?q=Sagar%20Aluminium%20Work%2C%20Shop%20no.3%2C%20Suraj%20plaza%2C%20Station%20Rd%2C%20near%20MBMC%20Road%2C%20Fakhri%20Colony%2C%20Chandulal%20Park%2C%20Bhayandar%20West%2C%20Mira%20Bhayandar%2C%20Mumbai%2C%20Maharashtra%20401101&output=embed"
};
const waLink = (msg = "Hi Sagar Aluminium Works, I'd like a quote.") => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
const services = [
  {
    slug: "sliding-windows",
    title: "Aluminium Sliding Windows",
    short: "Modern, durable, energy-efficient sliding window systems.",
    long: "Precision-engineered sliding windows with smooth tracks, weather seals, and toughened or laminated glass options for residences and commercial towers.",
    image: "/03.jpeg"
  },
  {
    slug: "sliding-doors",
    title: "Aluminium Sliding Doors",
    short: "Elegant sliding door systems for homes and offices.",
    long: "Large-format sliding doors with slim profiles, secure multi-point locking and quiet roller mechanisms — ideal for balconies, terraces and conference rooms.",
    image: "/02.jpeg"
  },
  {
    slug: "bathroom-doors",
    title: "Bathroom Doors",
    short: "Water-resistant, stylish aluminium bathroom doors.",
    long: "Corrosion-proof bathroom doors with frosted, acrylic or louvered panel options. Designed for wet areas with anti-rust hardware and tight sealing.",
    image: "/04.jpeg"
  },
  {
    slug: "office-partitions",
    title: "Office Partitions",
    short: "Modern partition systems for professional spaces.",
    long: "Modular glass-and-aluminium partitions for cabins, conference rooms and open plans. Clean sightlines, acoustic upgrades and quick installation.",
    image: "/Office_Partitions_2K_202606181617.jpeg"
  },
  {
    slug: "custom-fabrication",
    title: "Custom Aluminium Fabrication",
    short: "Bespoke aluminium work designed around your project.",
    long: "From façades and louvres to railings, ACP cladding and signage frames — fully custom fabrication delivered to drawing or on-site measurement."
  },
  {
    slug: "material-supply",
    title: "Aluminium Material Supply",
    short: "Direct supply of aluminium sections and materials.",
    long: "Stocked sections, profiles, sheets and accessories from trusted Indian and international brands — sold at fair retail rates."
  },
  {
    slug: "wholesale",
    title: "Wholesale Aluminium Products",
    short: "Bulk supply for contractors, builders and businesses.",
    long: "Negotiated wholesale pricing, project-grade stock guarantees and reliable Mumbai-wide delivery for contractors and fabricators."
  },
  {
    slug: "installation",
    title: "Installation Services",
    short: "Professional measurement, fitting and finishing.",
    long: "Trained site teams handle measurement, removal of old fittings, installation, sealing and final cleanup — with a workmanship warranty."
  }
];
const whyChoose = [
  { title: "Experienced Craftsmanship", body: "A decade-plus of work across Mumbai's residential and commercial projects." },
  { title: "Premium Materials", body: "Project-grade aluminium sections, toughened glass and stainless hardware." },
  { title: "Custom Designs", body: "Made to your drawings, site measurements and aesthetic preferences." },
  { title: "Affordable Pricing", body: "Transparent quotes — no hidden charges, retail or wholesale." },
  { title: "On-Time Delivery", body: "Committed project timelines tracked from order to handover." },
  { title: "Professional Installation", body: "Trained in-house teams, not third-party labour contractors." },
  { title: "Retail & Wholesale", body: "We serve homeowners, builders and fabricators alike." },
  { title: "Satisfaction Guaranteed", body: "Post-installation support and a workmanship warranty on every job." }
];
const featuredProjects = [
  { title: "Sea-Facing Residence — Bandra West", category: "Residential", desc: "Floor-to-ceiling sliding doors and acoustic windows for a 4BHK sea-view apartment." },
  { title: "Corporate Office — BKC", category: "Commercial", desc: "Glass-and-aluminium partition system across two floors of a fintech HQ." },
  { title: "Luxury Villa — Juhu", category: "Residential", desc: "Custom fabricated louvres, sliding stacker doors and bathroom doors." },
  { title: "Retail Showroom — Lower Parel", category: "Commercial", desc: "Storefront façade with ACP cladding and large-format display windows." },
  { title: "High-Rise Apartments — Powai", category: "Residential", desc: "Bulk supply and installation of sliding windows for 120 flats." },
  { title: "Clinic Fit-Out — Andheri East", category: "Fabrication", desc: "Modular partitions, reception cladding and signage frames." }
];
const galleryItems = [
  { category: "Sliding Windows", label: "Andheri 3BHK" },
  { category: "Sliding Windows", label: "Powai Tower" },
  { category: "Sliding Doors", label: "Bandra Penthouse" },
  { category: "Sliding Doors", label: "Juhu Villa" },
  { category: "Bathroom Doors", label: "Worli Residence" },
  { category: "Commercial", label: "BKC Office" },
  { category: "Residential", label: "Malad Bungalow" },
  { category: "Fabrication", label: "ACP Cladding — Thane" }
];
const galleryCategories = [
  "All",
  "Sliding Windows",
  "Sliding Doors",
  "Bathroom Doors",
  "Commercial",
  "Residential",
  "Fabrication"
];
const testimonials = [
  { name: "Rohan Mehta", role: "Homeowner, Bandra", quote: "Sagar's team delivered our sliding doors ahead of schedule. Build quality and finish are genuinely premium." },
  { name: "Priya Shah", role: "Architect, Mumbai", quote: "We've specified Sagar Aluminium Works on three projects now. Reliable, precise and easy to coordinate with on site." },
  { name: "Anil Kapoor", role: "Builder, Powai", quote: "Their wholesale rates and timely supply made a real difference on our 120-flat tower. Highly recommended." },
  { name: "Kavita Iyer", role: "Office Manager, BKC", quote: "Our partition fit-out was clean, quiet and finished in days. Zero disruption to the team." }
];
const faqs = [
  { q: "Do you serve all of Mumbai?", a: "Yes — we take on residential and commercial projects across Mumbai, Navi Mumbai and Thane, with select work in the wider MMR region." },
  { q: "Do you offer free site measurement?", a: "Yes. Once you share your project location and requirements, our team schedules a free measurement and consultation visit." },
  { q: "What is the typical lead time?", a: "Standard windows and doors are delivered and installed within 10–15 working days. Larger fabrication projects depend on scope." },
  { q: "Do you sell aluminium material to walk-in customers?", a: "Absolutely. We supply sections, sheets and accessories at retail rates, and offer negotiated wholesale pricing for contractors." },
  { q: "Is there a warranty?", a: "Yes — we provide a workmanship warranty on installation and pass through manufacturer warranties on hardware and glass." },
  { q: "How do I get a quote?", a: "Use the Request a Quote form, WhatsApp us, or call directly. We share itemized quotations within 24–48 hours." }
];
const LOGO_SRC = "/logo.png";
function Logo({
  variant = "dark",
  className,
  width = 160,
  height = 48,
  priority = false,
  itemProp,
  alt
}) {
  const resolvedAlt = alt ?? `${site.name} logo — neon green house and aluminium mark, Mumbai aluminium windows and doors manufacturer`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: LOGO_SRC,
      alt: resolvedAlt,
      width,
      height,
      decoding: "async",
      loading: priority ? "eager" : "lazy",
      fetchPriority: priority ? "high" : "auto",
      itemProp,
      className: cn(
        "object-contain select-none",
        variant === "light" && "brightness-110 contrast-105 saturate-110 drop-shadow-[0_0_12px_rgba(132,204,22,0.35)]",
        variant === "dark" && "",
        className
      )
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b hairline-silver bg-ink/95 backdrop-blur-md" : "bg-ink/70 backdrop-blur-sm border-b border-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-16 items-center justify-between gap-4 md:h-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-3 min-w-0 cursor-pointer",
              "aria-label": `${site.name} — Home`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Logo,
                  {
                    variant: "dark",
                    priority: true,
                    width: 180,
                    height: 48,
                    className: "h-10 w-auto shrink-0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: site.name })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-silver/75 transition-colors hover:text-royal [&.active]:text-royal cursor-pointer",
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/quote",
                className: "hidden sm:inline-flex items-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors cursor-pointer",
                children: "Get Free Quote"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "lg:hidden grid h-10 w-10 place-items-center border hairline-silver text-silver cursor-pointer",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t hairline-silver bg-ink animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-x flex flex-col py-3", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "py-3 text-sm font-semibold uppercase tracking-[0.16em] text-silver hover:text-royal border-b hairline-silver last:border-0",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/quote",
              onClick: () => setOpen(false),
              className: "mt-4 inline-flex items-center justify-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors",
              children: "Get Free Quote"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 ink-panel border-t hairline-silver", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:border-r border-white/10 lg:pr-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "dark", width: 200, height: 56, className: "h-14 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-[0.28em] text-silver/70", children: "Mumbai · Since 2004" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-silver/80 leading-relaxed font-light", children: "Mumbai's trusted manufacturer of aluminium windows, doors, partitions and custom fabrication. Premium materials, precise craftsmanship, on-time delivery." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.socials.facebook, "aria-label": "Facebook", className: "grid h-10 w-10 place-items-center border border-white/15 text-silver hover:border-royal hover:text-royal transition-colors cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.socials.instagram, "aria-label": "Instagram", className: "grid h-10 w-10 place-items-center border border-white/15 text-silver hover:border-royal hover:text-royal transition-colors cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.socials.youtube, "aria-label": "YouTube", className: "grid h-10 w-10 place-items-center border border-white/15 text-silver hover:border-royal hover:text-royal transition-colors cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:border-r border-white/10 lg:pr-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-silver", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: [
          ["/", "Home"],
          ["/about", "About"],
          ["/services", "Services"],
          ["/gallery", "Gallery"],
          ["/quote", "Request Quote"],
          ["/faq", "FAQ"],
          ["/contact", "Contact"]
        ].map(([to, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-silver/80 hover:text-royal transition-colors cursor-pointer", children: label }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:border-r border-white/10 lg:pr-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-silver", children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: services.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", hash: s.slug, className: "text-silver/80 hover:text-royal transition-colors cursor-pointer", children: s.title }) }, s.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-silver", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm text-silver/85 font-light", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "shrink-0 mt-0.5 text-royal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: site.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "shrink-0 mt-0.5 text-royal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${site.phone}`, className: "hover:text-royal", children: site.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "shrink-0 mt-0.5 text-royal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.email}`, className: "hover:text-royal break-all", children: site.email })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-silver/55", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© 2026 ",
        site.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "All rights reserved · Mumbai, India" })
    ] }) })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: waLink(),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-40 group inline-flex items-center gap-3 ink-panel border hairline-silver px-4 py-3 shadow-xl shadow-ink/30 transition-all hover:bg-royal hover:border-royal cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 32 32", width: "20", height: "20", className: "text-silver group-hover:text-white transition-colors", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.11 17.27c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.55s1.1 2.96 1.25 3.16c.15.2 2.16 3.3 5.24 4.62.73.31 1.3.5 1.74.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.03 5.33c-5.92 0-10.72 4.8-10.73 10.7 0 1.89.49 3.72 1.44 5.35L5 26.67l5.46-1.7a10.7 10.7 0 005.56 1.55h.01c5.92 0 10.72-4.8 10.73-10.7 0-2.86-1.11-5.55-3.13-7.57a10.65 10.65 0 00-7.6-3.12z" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.22em] text-white", children: "WhatsApp" })
      ]
    }
  );
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Back to top",
      className: "fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center ink-panel border hairline-silver text-silver shadow-lg shadow-ink/30 transition-colors hover:bg-royal hover:border-royal hover:text-white cursor-pointer",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 18 })
    }
  );
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const url = "/__l5e/assets-v1/77263640-1a65-4178-83c9-71bc0a394f74/the-sagar-aluminium-work-logo.png";
const logoAsset = {
  url
};
const SITE_ORIGIN = "https://sagar-aluminium-shine.lovable.app";
const LOGO_ABSOLUTE = `${SITE_ORIGIN}${logoAsset.url}`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-royal px-4 py-2 text-sm font-medium text-white hover:bg-royal/90", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-royal px-4 py-2 text-sm font-medium text-white hover:bg-royal/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} — Premium Aluminium Windows, Doors & Fabrication in Mumbai` },
      { name: "description", content: "Mumbai's trusted manufacturer of aluminium sliding windows, doors, partitions and custom fabrication. Retail and wholesale supply." },
      { name: "author", content: site.name },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0056B3" },
      { property: "og:image", content: LOGO_ABSOLUTE },
      { property: "og:image:alt", content: `${site.name} logo` },
      { name: "twitter:image", content: LOGO_ABSOLUTE }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoAsset.url },
      { rel: "apple-touch-icon", href: logoAsset.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Fira+Sans:wght@300;400;500;600;700&display=swap" }
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_ORIGIN}/#business`,
        name: site.name,
        description: "Aluminium windows, doors, partitions and fabrication manufacturer & supplier in Mumbai.",
        url: SITE_ORIGIN,
        telephone: site.phone,
        email: site.email,
        image: LOGO_ABSOLUTE,
        logo: {
          "@type": "ImageObject",
          url: LOGO_ABSOLUTE,
          contentUrl: LOGO_ABSOLUTE,
          caption: `${site.name} logo`,
          width: 512,
          height: 512
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country
        },
        areaServed: "Mumbai Metropolitan Region"
      })
    }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-16 md:pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) });
}
const BASE_URL = "";
const Route$7 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/gallery", changefreq: "monthly", priority: "0.8" },
          { path: "/quote", changefreq: "monthly", priority: "0.9" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" }
        ];
        const urls = entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$6 = () => import("./services-CpxgmZl6.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Aluminium Windows, Doors, Partitions & Fabrication | Sagar Aluminium Works"
    }, {
      name: "description",
      content: "Sliding windows, sliding doors, bathroom doors, office partitions, custom aluminium fabrication, material supply, wholesale and installation services in Mumbai."
    }, {
      property: "og:title",
      content: "Services — Sagar Aluminium Works"
    }, {
      property: "og:description",
      content: "Full range of aluminium manufacturing, supply and installation services in Mumbai."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./quote-CMS1yNTg.mjs");
const Route$5 = createFileRoute("/quote")({
  head: () => ({
    meta: [{
      title: "Request a Quote — Sagar Aluminium Works Mumbai"
    }, {
      name: "description",
      content: "Get a free, itemized quotation for aluminium windows, doors, partitions or fabrication work. Mumbai-wide service."
    }, {
      property: "og:title",
      content: "Request a Quote — Sagar Aluminium Works"
    }, {
      property: "og:description",
      content: "Free quotation for aluminium windows, doors and fabrication in Mumbai."
    }, {
      property: "og:url",
      content: "/quote"
    }],
    links: [{
      rel: "canonical",
      href: "/quote"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./gallery-uF5NOU29.mjs");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Project Gallery — Aluminium Windows, Doors & Fabrication | Sagar Aluminium Works"
    }, {
      name: "description",
      content: "Browse completed aluminium projects across Mumbai — sliding windows, sliding doors, bathroom doors, commercial fit-outs, residential installations and fabrication work."
    }, {
      property: "og:title",
      content: "Project Gallery — Sagar Aluminium Works"
    }, {
      property: "og:description",
      content: "Real residential and commercial aluminium installations from across Mumbai."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./faq-WKmoWwo5.mjs");
const Route$3 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — Aluminium Windows, Doors & Fabrication | Sagar Aluminium Works"
    }, {
      name: "description",
      content: "Answers to common questions about aluminium windows, doors, partitions, pricing, warranty and installation in Mumbai."
    }, {
      property: "og:title",
      content: "Frequently Asked Questions — Sagar Aluminium Works"
    }, {
      property: "og:description",
      content: "Common questions about our aluminium products, pricing and installation."
    }, {
      property: "og:url",
      content: "/faq"
    }],
    links: [{
      rel: "canonical",
      href: "/faq"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BHkBWFcX.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Sagar Aluminium Works — Mumbai Aluminium Manufacturer"
    }, {
      name: "description",
      content: "Get in touch with Sagar Aluminium Works in Mumbai. Phone, WhatsApp, email, address and business hours."
    }, {
      property: "og:title",
      content: "Contact Sagar Aluminium Works"
    }, {
      property: "og:description",
      content: "Reach our Mumbai aluminium workshop — phone, WhatsApp, email and address."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CT5maYEX.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: `About ${site.name} — Aluminium Manufacturer in Mumbai`
    }, {
      name: "description",
      content: "Mumbai's trusted aluminium manufacturer specialising in custom windows, doors, partitions and fabrication for homes and businesses."
    }, {
      property: "og:title",
      content: `About ${site.name}`
    }, {
      property: "og:description",
      content: "Years of craftsmanship in aluminium windows, doors and fabrication across Mumbai."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BjH8JiDB.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: `${site.name} — Aluminium Windows, Doors & Fabrication in Mumbai`
    }, {
      name: "description",
      content: "Premium aluminium sliding windows, doors, partitions and custom fabrication in Mumbai. Retail & wholesale. Free quotes."
    }, {
      property: "og:title",
      content: `${site.name} — Premium Aluminium Solutions`
    }, {
      property: "og:description",
      content: "Manufacturing high-quality aluminium windows, doors and fabrication for homes, offices and commercial projects across Mumbai."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$7.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const QuoteRoute = Route$5.update({
  id: "/quote",
  path: "/quote",
  getParentRoute: () => Route$8
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$8
});
const FaqRoute = Route$3.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  FaqRoute,
  GalleryRoute,
  QuoteRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const variantColors = {
  dark: "var(--color-ink)",
  light: "oklch(0.99 0 0)",
  royal: "var(--color-royal)",
  silver: "var(--color-silver)"
};
function Loader({
  size = 45,
  speed = 1.75,
  bgOpacity = 0.1,
  variant = "dark",
  className,
  label = "Loading"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "aria-label": label,
      className: cn("loader-container", className),
      style: {
        ["--uib-size"]: `${size}px`,
        ["--uib-color"]: variantColors[variant],
        ["--uib-speed"]: `${speed}s`,
        ["--uib-bg-opacity"]: String(bgOpacity)
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loader-half" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loader-half" })
      ]
    }
  );
}
function FullPageLoader({ variant = "dark", label = "Loading site" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 64, speed: 1.5, variant, label }) });
}
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: () => /* @__PURE__ */ jsxRuntimeExports.jsx(FullPageLoader, { variant: "royal", label: "Loading page" }),
    defaultPendingMs: 0,
    defaultPendingMinMs: 350
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Logo as L,
  site as a,
  galleryCategories as b,
  cn as c,
  whyChoose as d,
  featuredProjects as e,
  faqs as f,
  galleryItems as g,
  router as r,
  services as s,
  testimonials as t,
  waLink as w
};
