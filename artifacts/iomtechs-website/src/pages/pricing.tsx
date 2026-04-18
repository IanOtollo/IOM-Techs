import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Check, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";

const tiers = [
  {
    name: "Starter",
    price: "KES 15,000 – 35,000",
    best: "Small businesses, landing pages, portfolios",
    items: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO",
      "2 revision rounds",
      "7–14 day delivery",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "KES 40,000 – 120,000",
    badge: "Most Popular",
    best: "Startups, e-commerce, web apps",
    items: [
      "Custom web application or e-commerce",
      "CMS integration (Sanity / Contentful)",
      "Payment integration (M-Pesa / Stripe)",
      "Database + backend API",
      "Admin dashboard",
      "14–30 day delivery",
      "3 months post-launch support",
    ],
    cta: "Start a Project",
    href: "/project-request",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    best: "Scale-ups, SaaS products, complex systems",
    items: [
      "Full-stack SaaS or platform build",
      "Cloud infrastructure setup",
      "CI/CD pipelines",
      "Performance optimisation",
      "Dedicated support SLA",
      "Timeline scoped per project",
    ],
    cta: "Book a Call",
    href: "/contact",
    highlighted: false,
  },
];

const faqs = [
  { q: "How does the process work?", a: "We start with a discovery call to understand your requirements, then provide a detailed scope and timeline. Development happens in weekly sprints with regular updates." },
  { q: "How many revisions are included?", a: "Starter includes 2 rounds. Professional includes 3 rounds. Enterprise is scoped per project. Additional revisions are billed at an hourly rate." },
  { q: "What are the payment terms?", a: "We typically work on a 50% upfront, 50% on delivery basis for smaller projects. Larger projects may use milestone-based payments." },
  { q: "Do you handle hosting?", a: "Yes — we can set up and configure hosting on Vercel, Railway, or AWS. Hosting costs are separate from development fees." },
  { q: "Do you offer maintenance after launch?", a: "Professional tier includes 3 months post-launch support. For ongoing maintenance, we offer monthly retainers scoped to your needs." },
  { q: "Are prices negotiable?", a: "Our ranges reflect real project complexity. We're transparent about what drives cost and will work with you to find a scope that fits your budget." },
];

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left text-white font-medium text-sm hover:text-zinc-300 transition-colors"
      >
        {q}
        <ChevronDown size={16} className={`text-zinc-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-zinc-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Layout>
        <section className="pt-36 pb-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Pricing</p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white mb-4 leading-none tracking-tight">
            Transparent pricing.<br />No surprises.
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
            Enterprise-quality software at rates that respect where you are.
          </p>
        </section>

        {/* Tiers */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl p-8 flex flex-col relative ${
                  t.highlighted ? "border-white/20" : ""
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-mono font-bold px-3 py-1 rounded-full">
                    {t.badge}
                  </span>
                )}
                <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-4">{t.name}</p>
                <p className="text-2xl font-bold text-white mb-2">{t.price}</p>
                <p className="text-sm text-zinc-500 mb-8">Best for: {t.best}</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check size={14} className="text-white mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={t.href}>
                  <span className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                    t.highlighted
                      ? "bg-white text-black hover:bg-zinc-100"
                      : "glass text-white hover:border-white/30"
                  }`}>
                    {t.cta}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-zinc-600 mt-6 font-mono">
            All prices in KES. USD quotes available on request.
          </p>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/8 py-20 max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-8">FAQ</p>
          <h2 className="text-3xl font-bold text-white mb-10">Common questions</h2>
          <div>
            {faqs.map((f) => (
              <Accordion key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}
