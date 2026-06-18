// Centralized site configuration — replace placeholders with real values.
export const site = {
  name: "Sagar Aluminium Works",
  tagline: "Premium Aluminium Windows, Doors & Fabrication Solutions",
  city: "Mumbai",
  region: "Maharashtra",
  country: "India",
  address: "Shop no.3, Suraj plaza, Station Rd, near MBMC Road, Fakhri Colony, Chandulal Park, Bhayandar West, Mira Bhayandar, Mumbai, Maharashtra 401101",
  phone: "+91 9892432018",
  whatsapp: "919892432018", // digits only, country code first
  email: "mparjapati115@gmail.com",
  hours: [
    { day: "Monday", time: "9:30 AM – 5:00 PM" },
    { day: "Tuesday – Sunday", time: "9:30 AM – 9:00 PM" },
  ],
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
  // Google Maps embed for the new address
  mapsEmbed:
    "https://www.google.com/maps?q=Sagar%20Aluminium%20Work%2C%20Shop%20no.3%2C%20Suraj%20plaza%2C%20Station%20Rd%2C%20near%20MBMC%20Road%2C%20Fakhri%20Colony%2C%20Chandulal%20Park%2C%20Bhayandar%20West%2C%20Mira%20Bhayandar%2C%20Mumbai%2C%20Maharashtra%20401101&output=embed",
};

export const waLink = (msg = "Hi Sagar Aluminium Works, I'd like a quote.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    slug: "sliding-windows",
    title: "Aluminium Sliding Windows",
    short: "Modern, durable, energy-efficient sliding window systems.",
    long: "Precision-engineered sliding windows with smooth tracks, weather seals, and toughened or laminated glass options for residences and commercial towers.",
    image: "/03.jpeg",
  },
  {
    slug: "sliding-doors",
    title: "Aluminium Sliding Doors",
    short: "Elegant sliding door systems for homes and offices.",
    long: "Large-format sliding doors with slim profiles, secure multi-point locking and quiet roller mechanisms — ideal for balconies, terraces and conference rooms.",
    image: "/02.jpeg",
  },
  {
    slug: "bathroom-doors",
    title: "Bathroom Doors",
    short: "Water-resistant, stylish aluminium bathroom doors.",
    long: "Corrosion-proof bathroom doors with frosted, acrylic or louvered panel options. Designed for wet areas with anti-rust hardware and tight sealing.",
    image: "/04.jpeg",
  },
  {
    slug: "office-partitions",
    title: "Office Partitions",
    short: "Modern partition systems for professional spaces.",
    long: "Modular glass-and-aluminium partitions for cabins, conference rooms and open plans. Clean sightlines, acoustic upgrades and quick installation.",
    image: "/Office_Partitions_2K_202606181617.jpeg",
  },
  {
    slug: "custom-fabrication",
    title: "Custom Aluminium Fabrication",
    short: "Bespoke aluminium work designed around your project.",
    long: "From façades and louvres to railings, ACP cladding and signage frames — fully custom fabrication delivered to drawing or on-site measurement.",
  },
  {
    slug: "material-supply",
    title: "Aluminium Material Supply",
    short: "Direct supply of aluminium sections and materials.",
    long: "Stocked sections, profiles, sheets and accessories from trusted Indian and international brands — sold at fair retail rates.",
  },
  {
    slug: "wholesale",
    title: "Wholesale Aluminium Products",
    short: "Bulk supply for contractors, builders and businesses.",
    long: "Negotiated wholesale pricing, project-grade stock guarantees and reliable Mumbai-wide delivery for contractors and fabricators.",
  },
  {
    slug: "installation",
    title: "Installation Services",
    short: "Professional measurement, fitting and finishing.",
    long: "Trained site teams handle measurement, removal of old fittings, installation, sealing and final cleanup — with a workmanship warranty.",
  },
];

export const whyChoose = [
  { title: "Experienced Craftsmanship", body: "A decade-plus of work across Mumbai's residential and commercial projects." },
  { title: "Premium Materials", body: "Project-grade aluminium sections, toughened glass and stainless hardware." },
  { title: "Custom Designs", body: "Made to your drawings, site measurements and aesthetic preferences." },
  { title: "Affordable Pricing", body: "Transparent quotes — no hidden charges, retail or wholesale." },
  { title: "On-Time Delivery", body: "Committed project timelines tracked from order to handover." },
  { title: "Professional Installation", body: "Trained in-house teams, not third-party labour contractors." },
  { title: "Retail & Wholesale", body: "We serve homeowners, builders and fabricators alike." },
  { title: "Satisfaction Guaranteed", body: "Post-installation support and a workmanship warranty on every job." },
];

export const featuredProjects = [
  { title: "Sea-Facing Residence — Bandra West", category: "Residential", desc: "Floor-to-ceiling sliding doors and acoustic windows for a 4BHK sea-view apartment." },
  { title: "Corporate Office — BKC", category: "Commercial", desc: "Glass-and-aluminium partition system across two floors of a fintech HQ." },
  { title: "Luxury Villa — Juhu", category: "Residential", desc: "Custom fabricated louvres, sliding stacker doors and bathroom doors." },
  { title: "Retail Showroom — Lower Parel", category: "Commercial", desc: "Storefront façade with ACP cladding and large-format display windows." },
  { title: "High-Rise Apartments — Powai", category: "Residential", desc: "Bulk supply and installation of sliding windows for 120 flats." },
  { title: "Clinic Fit-Out — Andheri East", category: "Fabrication", desc: "Modular partitions, reception cladding and signage frames." },
];

export const galleryItems = [
  { category: "Sliding Windows", label: "Andheri 3BHK" },
  { category: "Sliding Windows", label: "Powai Tower" },
  { category: "Sliding Doors", label: "Bandra Penthouse" },
  { category: "Sliding Doors", label: "Juhu Villa" },
  { category: "Bathroom Doors", label: "Worli Residence" },
  { category: "Commercial", label: "BKC Office" },
  { category: "Residential", label: "Malad Bungalow" },
  { category: "Fabrication", label: "ACP Cladding — Thane" },
];

export const galleryCategories = [
  "All",
  "Sliding Windows",
  "Sliding Doors",
  "Bathroom Doors",
  "Commercial",
  "Residential",
  "Fabrication",
];

export const testimonials = [
  { name: "Rohan Mehta", role: "Homeowner, Bandra", quote: "Sagar's team delivered our sliding doors ahead of schedule. Build quality and finish are genuinely premium." },
  { name: "Priya Shah", role: "Architect, Mumbai", quote: "We've specified Sagar Aluminium Works on three projects now. Reliable, precise and easy to coordinate with on site." },
  { name: "Anil Kapoor", role: "Builder, Powai", quote: "Their wholesale rates and timely supply made a real difference on our 120-flat tower. Highly recommended." },
  { name: "Kavita Iyer", role: "Office Manager, BKC", quote: "Our partition fit-out was clean, quiet and finished in days. Zero disruption to the team." },
];

export const faqs = [
  { q: "Do you serve all of Mumbai?", a: "Yes — we take on residential and commercial projects across Mumbai, Navi Mumbai and Thane, with select work in the wider MMR region." },
  { q: "Do you offer free site measurement?", a: "Yes. Once you share your project location and requirements, our team schedules a free measurement and consultation visit." },
  { q: "What is the typical lead time?", a: "Standard windows and doors are delivered and installed within 10–15 working days. Larger fabrication projects depend on scope." },
  { q: "Do you sell aluminium material to walk-in customers?", a: "Absolutely. We supply sections, sheets and accessories at retail rates, and offer negotiated wholesale pricing for contractors." },
  { q: "Is there a warranty?", a: "Yes — we provide a workmanship warranty on installation and pass through manufacturer warranties on hardware and glass." },
  { q: "How do I get a quote?", a: "Use the Request a Quote form, WhatsApp us, or call directly. We share itemized quotations within 24–48 hours." },
];
