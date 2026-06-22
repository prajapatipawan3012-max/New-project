import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sagar Aluminium Works — Mumbai Aluminium Manufacturer" },
      { name: "description", content: "Get in touch with Sagar Aluminium Works in Mumbai. Phone, WhatsApp, email, address and business hours." },
      { property: "og:title", content: "Contact Sagar Aluminium Works" },
      { property: "og:description", content: "Reach our Mumbai aluminium workshop — phone, WhatsApp, email and address." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  message: z.string().trim().min(5).max(800),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error("Please complete all fields."); return; }
    const d = parsed.data;
    const msg = `Hi ${site.name},\n\nName: ${d.name}\nPhone: ${d.phone}\n\n${d.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…");
  }

  return (
    <>
      <section className="aluminum-surface border-b hairline-silver">
        <div className="container-x py-16 md:py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Contact</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-silver text-balance">Let's Talk Aluminium</h1>
          <p className="mt-5 mx-auto max-w-2xl text-silver/70">Call, message or visit our Mumbai workshop. We'd love to hear about your project.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ink">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          {[
            { icon: Phone, title: "Phone", value: site.phone, href: `tel:${site.phone}` },
            { icon: MessageCircle, title: "WhatsApp", value: site.phone, href: waLink() },
            { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}` },
          ].map((c) => (
            <a key={c.title} href={c.href} target={c.title === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer"
              className="hover-lift block rounded-xl border border-white/10 bg-panel p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-royal-soft text-royal"><c.icon size={20} /></div>
              <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-royal">{c.title}</div>
              <div className="mt-1 font-medium text-silver break-all">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="container-x mt-10 grid gap-8 lg:grid-cols-3">
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ", " + site.address)}`} target="_blank" rel="noopener noreferrer" className="hover-lift block rounded-xl border border-white/10 bg-panel p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-royal-soft text-royal"><MapPin size={20} /></div>
            <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-royal">Address</div>
            <div className="mt-1 text-silver">{site.address}</div>
          </a>
          <div className="rounded-xl border border-white/10 bg-panel p-6">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-royal-soft text-royal"><Clock size={20} /></div>
            <div className="mt-4 text-sm font-semibold uppercase tracking-wider text-royal">Business Hours</div>
            <ul className="mt-2 space-y-1 text-sm text-silver">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3"><span>{h.day}</span><span className="text-silver/60">{h.time}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-panel text-silver p-6">
            <div className="font-display text-lg font-semibold">Wholesale & Trade</div>
            <p className="mt-2 text-sm text-silver/70">Contractors, builders and fabricators — ask about negotiated wholesale rates and project-grade stock.</p>
            <a href={waLink("Hi, I'm interested in wholesale rates.")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-semibold text-royal hover:underline">Message on WhatsApp →</a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-ink">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-panel p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-silver">Send a quick message</h2>
            <div className="mt-5 space-y-4">
              <div><Label htmlFor="cname" className="text-silver">Name</Label><Input id="cname" className="mt-1.5 bg-ink border-white/10 text-silver" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div><Label htmlFor="cphone" className="text-silver">Phone</Label><Input id="cphone" inputMode="tel" className="mt-1.5 bg-ink border-white/10 text-silver" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              <div><Label htmlFor="cmsg" className="text-silver">Message</Label><Textarea id="cmsg" rows={5} className="mt-1.5 bg-ink border-white/10 text-silver" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-royal hover:bg-ink hover:text-royal border border-royal text-ink">Send via WhatsApp</Button>
          </form>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-panel min-h-[340px]">
            <iframe
              title="Sagar Aluminium Works — Mumbai location"
              src={site.mapsEmbed}
              className="h-full w-full min-h-[340px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
