import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionTitle } from "@/components/site/SectionTitle";
import { galleryItems, galleryCategories } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Aluminium Windows, Doors & Fabrication | Sagar Aluminium Works" },
      { name: "description", content: "Browse completed aluminium projects across Mumbai — sliding windows, sliding doors, bathroom doors, commercial fit-outs, residential installations and fabrication work." },
      { property: "og:title", content: "Project Gallery — Sagar Aluminium Works" },
      { property: "og:description", content: "Real residential and commercial aluminium installations from across Mumbai." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<{ label: string; category: string } | null>(null);

  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <>
      <section className="aluminum-surface border-b hairline-silver">
        <div className="container-x py-16 md:py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Gallery</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance">Curated Work</h1>
          <p className="mt-5 mx-auto max-w-2xl text-silver/70">A minimal, abstract look at the project categories we deliver across Mumbai. Click any card to learn more.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ink">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  filter === c
                    ? "border-royal bg-royal text-ink"
                    : "border-white/10 bg-panel text-silver hover:border-royal/60 hover:text-royal",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <button
                key={it.label}
                onClick={() => setActive(it)}
                className="group text-left hover-lift overflow-hidden rounded-xl border border-white/10 bg-panel"
              >
                <div className="gradient-neon-radial p-8 aspect-square flex flex-col items-center justify-center">
                  <div className="font-serif text-4xl text-royal text-shadow-neon group-hover:scale-105 transition-transform">{it.label.charAt(0)}</div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-royal">{it.category}</div>
                  <div className="mt-1 font-medium text-silver">{it.label}</div>
                </div>
              </button>
            ))}
          </div>
          {items.length === 0 && (
            <p className="mt-12 text-center text-silver/60">No items in this category yet.</p>
          )}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-panel border-white/10">
          <DialogTitle className="sr-only">{active?.label}</DialogTitle>
          {active && (
            <>
              <div className="gradient-neon-grid p-10 aspect-video flex items-center justify-center">
                <div className="font-serif text-6xl text-royal text-shadow-neon">{active.label.charAt(0)}</div>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-royal">{active.category}</div>
                <div className="mt-1 font-display text-lg font-semibold text-silver">{active.label}</div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

