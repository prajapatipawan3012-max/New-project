import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Logo } from "@/components/site/Logo";
import { services, whyChoose, featuredProjects, testimonials, site, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Aluminium Windows, Doors & Fabrication in Mumbai` },
      { name: "description", content: "Premium aluminium sliding windows, doors, partitions and custom fabrication in Mumbai. Retail & wholesale. Free quotes." },
      { property: "og:title", content: `${site.name} — Premium Aluminium Solutions` },
      { property: "og:description", content: "Manufacturing high-quality aluminium windows, doors and fabrication for homes, offices and commercial projects across Mumbai." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO — Neon Noir split with the uploaded logo as the brand focal point */}
      <section className="ink-panel gradient-neon-radial min-h-[92vh] md:min-h-[88vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[92vh] md:min-h-[88vh]">
          {/* Left — brand core 5/12 */}
          <div className="md:col-span-5 px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="animate-fade-up">
              <div className="mb-8">
                <Logo
                  variant="dark"
                  priority
                  width={320}
                  height={90}
                  className="h-16 sm:h-20 lg:h-24 w-auto neon-glow"
                />
              </div>
              <span className="text-silver/80 uppercase tracking-[0.3em] text-[10px] font-semibold mb-6 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-royal/70" />
                Mumbai · Established 2004
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-4 mb-8 text-silver">
                Architectural aluminium, built to glow.
              </h1>
              <p className="text-silver/75 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
                Engineering premium architectural windows, doors, and bespoke
                fabrication for Mumbai's most discerning residences and offices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  Get Free Quote
                </Link>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-silver/40 text-silver hover:bg-panel hover:text-royal hover:border-royal px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
                {[
                  ["20+", "Years"],
                  ["5000+", "Projects"],
                  ["100%", "On-Time"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-serif text-3xl lg:text-4xl text-royal text-shadow-neon">{n}</div>
                    <div className="text-silver text-[10px] uppercase tracking-[0.22em] mt-1.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Hero Image 7/12 */}
          <div className="md:col-span-7 relative overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-0">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/hero-shop.jpeg"
                alt="Sagar Aluminium Work"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlay to blend smoothly with the dark left panel */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-0 bg-royal/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP — dark precision */}
      <section className="bg-surface border-b hairline-silver">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s, i) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="group p-8 lg:p-10 border-b sm:border-b lg:border-b-0 lg:border-r last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r hairline-silver hover:bg-ink transition-colors cursor-pointer flex flex-col"
            >
              {(s as any).image && (
                <div className="w-full h-48 sm:h-56 mb-8 overflow-hidden bg-panel relative border hairline-silver">
                  <img src={(s as any).image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="w-11 h-11 bg-panel text-royal mb-6 grid place-items-center font-serif text-base shrink-0 group-hover:bg-royal group-hover:text-ink transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl text-silver mb-2 leading-tight">{s.title.replace("Aluminium ", "")}</h3>
              <p className="text-sm text-silver/60 font-light">{s.short}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-royal">
                Explore <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE — 8 reasons grid */}
      <section className="py-24 lg:py-32 bg-ink">
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Mumbai Trusts Us"
            title="Eight Standards. Every Project."
            subtitle="A practical, honest workmanship benchmark — held on every install, residential or wholesale."
            align="left"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l hairline-silver">
            {whyChoose.map((w, i) => (
              <div
                key={w.title}
                className="p-7 lg:p-8 border-r border-b hairline-silver bg-panel hover:bg-ink transition-colors group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-serif text-2xl text-royal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-silver/30 group-hover:bg-royal/60 transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-silver mb-2 leading-tight">{w.title}</h3>
                <p className="text-sm text-silver/60 font-light leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — text-only, no photographs */}
      <section className="py-24 lg:py-32 ink-panel gradient-neon-lines">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <SectionTitle
              eyebrow="Featured Projects"
              title="Recent Installations Across Mumbai"
              align="left"
              tone="silver"
              className="max-w-2xl"
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-silver hover:text-royal text-[11px] font-semibold uppercase tracking-[0.22em] border-b border-silver/40 hover:border-royal pb-1 self-start lg:self-end cursor-pointer w-fit"
            >
              View Full Gallery <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-px bg-white/10 border hairline-silver">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {featuredProjects.slice(0, 3).map((p, i) => (
                <article key={p.title} className="group bg-panel hover:bg-ink transition-colors p-7 lg:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-royal">{p.category}</span>
                    <span className="font-serif text-sm text-silver/60">— {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-silver leading-tight mb-3">{p.title}</h3>
                  <p className="text-sm text-silver/70 font-light leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Testimonials"
            title="What Our Clients Say"
            align="left"
          />
          <div className="mt-16 grid gap-px bg-white/10 border hairline-silver md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-panel p-8 lg:p-10">
                <div className="font-serif text-5xl text-royal leading-none mb-6 text-shadow-neon">"</div>
                <blockquote className="text-lg text-silver leading-relaxed font-light">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t hairline-silver flex items-baseline justify-between gap-4">
                  <div>
                    <div className="font-serif text-base text-silver">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-silver/60 mt-1">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND — bold finality */}
      <section className="ink-panel py-20 lg:py-24 border-t hairline-silver">
        <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl lg:text-5xl text-silver italic leading-tight mb-3">
              Ready for architectural excellence?
            </h2>
            <p className="text-silver/70 font-light uppercase tracking-[0.22em] text-xs">
              Consultation is complimentary for Mumbai projects.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 shrink-0">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center bg-royal hover:bg-ink hover:text-royal border border-royal text-ink px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors cursor-pointer"
            >
              Request Site Visit
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-silver border-b-2 border-royal pb-1 font-semibold hover:text-royal transition-colors text-[11px] uppercase tracking-[0.22em] self-start cursor-pointer"
            >
              Or Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
