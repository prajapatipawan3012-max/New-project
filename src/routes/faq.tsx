import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/site-config";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aluminium Windows, Doors & Fabrication | Sagar Aluminium Works" },
      { name: "description", content: "Answers to common questions about aluminium windows, doors, partitions, pricing, warranty and installation in Mumbai." },
      { property: "og:title", content: "Frequently Asked Questions — Sagar Aluminium Works" },
      { property: "og:description", content: "Common questions about our aluminium products, pricing and installation." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <section className="aluminum-surface border-b hairline-silver">
        <div className="container-x py-16 md:py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Help Center</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance">Frequently Asked Questions</h1>
          <p className="mt-5 mx-auto max-w-2xl text-silver/70">Can't find what you're looking for? Reach out — we usually reply within a few hours.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink">
        <div className="container-x max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-white/10 bg-panel px-5">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-silver hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-silver/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-royal hover:bg-ink hover:text-royal border border-royal text-ink"><Link to="/contact">Still have questions? Contact us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}

