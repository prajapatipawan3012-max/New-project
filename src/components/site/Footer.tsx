import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { site, services } from "@/lib/site-config";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="mt-24 ink-panel border-t hairline-silver">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:border-r border-white/10 lg:pr-10">
          <Logo variant="dark" width={200} height={56} className="h-14 w-auto" />
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-silver/70">
            Mumbai · Since 2004
          </div>
          <p className="mt-5 text-sm text-silver/80 leading-relaxed font-light">
            Mumbai's trusted manufacturer of aluminium windows, doors,
            partitions and custom fabrication. Premium materials, precise
            craftsmanship, on-time delivery.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.socials.facebook} aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-white/15 text-silver hover:border-royal hover:text-royal transition-colors cursor-pointer"><Facebook size={16} /></a>
            <a href={site.socials.instagram} aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-white/15 text-silver hover:border-royal hover:text-royal transition-colors cursor-pointer"><Instagram size={16} /></a>
            <a href={site.socials.youtube} aria-label="YouTube" className="grid h-10 w-10 place-items-center border border-white/15 text-silver hover:border-royal hover:text-royal transition-colors cursor-pointer"><Youtube size={16} /></a>
          </div>
        </div>

        <div className="lg:border-r border-white/10 lg:pr-10">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">Navigate</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/", "Home"], ["/about", "About"], ["/services", "Services"],
              ["/gallery", "Gallery"], ["/quote", "Request Quote"], ["/faq", "FAQ"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-silver/80 hover:text-royal transition-colors cursor-pointer">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-r border-white/10 lg:pr-10">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="text-silver/80 hover:text-royal transition-colors cursor-pointer">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-silver">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-silver/85 font-light">
            <li className="flex gap-3"><MapPin size={16} className="shrink-0 mt-0.5 text-royal" /><span>{site.address}</span></li>
            <li className="flex gap-3"><Phone size={16} className="shrink-0 mt-0.5 text-royal" /><a href={`tel:${site.phone}`} className="hover:text-royal">{site.phone}</a></li>
            <li className="flex gap-3"><Mail size={16} className="shrink-0 mt-0.5 text-royal" /><a href={`mailto:${site.email}`} className="hover:text-royal break-all">{site.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-silver/55">
          <div>© 2026 {site.name}</div>
          <div>All rights reserved · Mumbai, India</div>
        </div>
      </div>
    </footer>
  );
}
