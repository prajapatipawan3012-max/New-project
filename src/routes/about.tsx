import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CheckCircle2 } from "lucide-react";
import { whyChoose, site } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${site.name} — Aluminium Manufacturer in Mumbai` },
      { name: "description", content: "Mumbai's trusted aluminium manufacturer specialising in custom windows, doors, partitions and fabrication for homes and businesses." },
      { property: "og:title", content: `About ${site.name}` },
      { property: "og:description", content: "Years of craftsmanship in aluminium windows, doors and fabrication across Mumbai." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="aluminum-surface border-b hairline-silver">
        <div className="container-x py-16 md:py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">About Us</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance">Built on Craft. Trusted Across Mumbai.</h1>
          <p className="mt-5 mx-auto max-w-2xl text-silver/70">A family-run aluminium workshop turning premium materials into windows, doors and fabrication that last.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="gradient-neon-radial border hairline-silver p-10 lg:p-14 flex flex-col justify-center min-h-[360px]">
              <div className="font-serif text-6xl md:text-7xl text-royal text-shadow-neon mb-4">20+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-silver/70">Years of trusted aluminium fabrication in Mumbai</div>
            </div>
            <div>
              <SectionTitle align="left" eyebrow="Our Story" title="A Workshop Built Around Aluminium" subtitle="Welcome to Sagar Aluminium Works — Mumbai's trusted name in aluminium manufacturing and supply." />
              <div className="mt-6 space-y-4 text-silver/70 leading-relaxed">
                <p>We specialise in creating durable, stylish and customised aluminium solutions for residential, commercial and industrial projects. With years of industry experience, we take pride in delivering quality craftsmanship, premium materials and exceptional customer service.</p>
                <p>From aluminium sliding windows and doors to complete fabrication projects, we provide solutions that combine strength, functionality and modern design. Whether you're a homeowner remodelling a single room or a contractor outfitting an entire tower — we work to the same standard.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-royal hover:bg-ink hover:text-royal border border-royal text-ink"><Link to="/quote">Request a Quote</Link></Button>
                <Button asChild variant="outline" className="border-silver/30 text-silver hover:bg-ink hover:text-royal hover:border-royal"><Link to="/services">Our Services</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="container-x">
          <SectionTitle eyebrow="Our Promise" title="What You Get When You Work With Us" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-xl border border-white/10 bg-panel p-6 hover-lift">
                <CheckCircle2 className="text-royal" size={22} />
                <h3 className="mt-4 font-display text-base font-semibold text-silver">{w.title}</h3>
                <p className="mt-2 text-sm text-silver/60">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
