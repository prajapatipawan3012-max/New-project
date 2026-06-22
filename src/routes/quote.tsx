import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services, site, waLink } from "@/lib/site-config";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Sagar Aluminium Works Mumbai" },
      { name: "description", content: "Get a free, itemized quotation for aluminium windows, doors, partitions or fabrication work. Mumbai-wide service." },
      { property: "og:title", content: "Request a Quote — Sagar Aluminium Works" },
      { property: "og:description", content: "Free quotation for aluminium windows, doors and fabrication in Mumbai." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[+0-9\s\-()]+$/, "Invalid characters"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  product: z.string().min(1, "Select a product"),
  location: z.string().trim().min(2, "Project location is required").max(120),
  quantity: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

function QuotePage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", location: "", quantity: "", message: "" });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const d = parsed.data;
    const msg =
      `Hi ${site.name}, I'd like a quote.\n\n` +
      `Name: ${d.name}\nPhone: ${d.phone}` +
      (d.email ? `\nEmail: ${d.email}` : "") +
      `\nProduct: ${d.product}\nLocation: ${d.location}` +
      (d.quantity ? `\nQuantity: ${d.quantity}` : "") +
      (d.message ? `\n\nDetails: ${d.message}` : "");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your details…");
  }

  return (
    <>
      <section className="aluminum-surface border-b hairline-silver">
        <div className="container-x py-16 md:py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Free Quotation</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance">Request a Quote</h1>
          <p className="mt-5 mx-auto max-w-2xl text-silver/70">Tell us about your project. We'll respond on WhatsApp within 24 hours with pricing and next steps.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-panel p-6 md:p-10 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name *"><Input id="name" required className="bg-ink border-white/10 text-silver" value={form.name} onChange={(e) => update("name", e.target.value)} /></Field>
              <Field id="phone" label="Phone Number *"><Input id="phone" inputMode="tel" required className="bg-ink border-white/10 text-silver" value={form.phone} onChange={(e) => update("phone", e.target.value)} /></Field>
              <Field id="email" label="Email Address"><Input id="email" type="email" className="bg-ink border-white/10 text-silver" value={form.email} onChange={(e) => update("email", e.target.value)} /></Field>
              <Field id="product" label="Product Required *">
                <Select value={form.product} onValueChange={(v) => update("product", v)}>
                  <SelectTrigger id="product" className="bg-ink border-white/10 text-silver"><SelectValue placeholder="Select a product" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field id="location" label="Project Location *"><Input id="location" placeholder="Area, Mumbai" required className="bg-ink border-white/10 text-silver" value={form.location} onChange={(e) => update("location", e.target.value)} /></Field>
              <Field id="quantity" label="Quantity / Size"><Input id="quantity" placeholder="e.g. 6 windows, 12x8 ft" className="bg-ink border-white/10 text-silver" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} /></Field>
            </div>
            <div className="mt-5">
              <Field id="message" label="Message">
                <Textarea id="message" rows={5} className="bg-ink border-white/10 text-silver" placeholder="Describe your project, preferred finishes, timeline…" value={form.message} onChange={(e) => update("message", e.target.value)} />
              </Field>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-royal hover:bg-ink hover:text-royal border border-royal text-ink">Send via WhatsApp</Button>
            <p className="mt-3 text-center text-xs text-silver/60">Your details open in WhatsApp — no data is stored on this site.</p>
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-royal/30 bg-panel text-silver p-7 neon-glow">
              <h3 className="font-display text-lg font-semibold">Why request a quote?</h3>
              <ul className="mt-4 space-y-3 text-sm text-silver/80">
                {["Itemized pricing, no hidden charges", "Free site measurement on request", "Response within 24 hours", "Retail and wholesale rates available"].map((p) => (
                  <li key={p} className="flex gap-2"><CheckCircle2 size={18} className="shrink-0 text-royal" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-panel p-7">
              <h3 className="font-display text-base font-semibold text-silver">Prefer a call?</h3>
              <p className="mt-2 text-sm text-silver/70">Reach us directly:</p>
              <div className="mt-3 space-y-1.5 text-sm">
                <a href={`tel:${site.phone}`} className="block font-medium text-royal hover:underline">{site.phone}</a>
                <a href={`mailto:${site.email}`} className="block text-silver hover:text-royal break-all">{site.email}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-silver">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
