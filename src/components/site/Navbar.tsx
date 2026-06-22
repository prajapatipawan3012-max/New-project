import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/Logo";
import { site } from "@/lib/site-config";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b hairline-silver bg-ink/95 backdrop-blur-md"
          : "bg-ink/70 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0 cursor-pointer"
          aria-label={`${site.name} — Home`}
        >
          <Logo
            variant="dark"
            priority
            width={180}
            height={48}
            className="h-10 w-auto shrink-0"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-silver/75 transition-colors hover:text-royal [&.active]:text-royal cursor-pointer"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/quote"
            className="hidden sm:inline-flex items-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors cursor-pointer"
          >
            Get Free Quote
          </Link>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center border hairline-silver text-silver cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t hairline-silver bg-ink animate-fade-up">
          <nav className="container-x flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-[0.16em] text-silver hover:text-royal border-b hairline-silver last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
