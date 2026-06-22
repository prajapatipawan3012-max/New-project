import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/site-config";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aluminium Windows, Doors, Partitions & Fabrication | Sagar Aluminium Works" },
      { name: "description", content: "Sliding windows, sliding doors, bathroom doors, office partitions, custom aluminium fabrication, material supply, wholesale and installation services in Mumbai." },
      { property: "og:title", content: "Services — Sagar Aluminium Works" },
      { property: "og:description", content: "Full range of aluminium manufacturing, supply and installation services in Mumbai." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="aluminum-surface border-b hairline-silver">
        <div className="container-x py-16 md:py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Products & Services</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance">Every Aluminium Solution, Under One Roof</h1>
          <p className="mt-5 mx-auto max-w-2xl text-silver/70">Manufacturing, supply and installation — designed for residential, commercial and wholesale projects.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink">
        <div className="container-x space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={cn("relative overflow-hidden border hairline-silver flex items-center justify-center min-h-[280px] lg:min-h-[400px]", i % 2 === 1 ? "lg:order-2" : "", !(s as any).image && "gradient-neon-grid p-10 lg:p-14")}>
                {(s as any).image ? (
                  <img src={(s as any).image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="text-center relative z-10">
                    <div className="font-serif text-6xl md:text-7xl text-royal text-shadow-neon">0{i + 1}</div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-silver/60">{s.title}</div>
                  </div>
                )}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">0{i + 1} · Service</span>
                <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-silver">{s.title}</h2>
                <p className="mt-4 text-silver/70 leading-relaxed">{s.long}</p>
                <ul className="mt-6 space-y-2.5">
                  {["Custom sizes & finishes", "Premium hardware & glazing", "Professional installation"].map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-silver"><CheckCircle2 size={18} className="shrink-0 text-royal mt-0.5" />{b}</li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="bg-royal hover:bg-ink hover:text-royal border border-royal text-ink"><Link to="/quote">Get Quote</Link></Button>
                  <Button asChild variant="outline" className="border-silver/30 text-silver hover:bg-ink hover:text-royal hover:border-royal"><Link to="/contact">Talk to Us</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

