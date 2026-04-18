import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Globe, Smartphone, Server, Cloud, Zap, Lightbulb, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "We build production-grade websites and web applications using React, TypeScript, and Next.js. Every site is performance-optimised, SEO-ready, and built to last — not assembled from templates.",
    deliverables: ["Custom design & development", "Mobile-first responsive layout", "Performance optimisation", "SEO technical foundation", "CMS integration (optional)"],
    timeline: "7–21 days depending on scope",
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications for iOS and Android. Built to perform on real networks with limited connectivity — because not every user has fibre.",
    deliverables: ["iOS + Android from one codebase", "Offline-capable architecture", "Push notifications", "API integration", "App Store / Play Store submission"],
    timeline: "3–8 weeks",
    stack: ["React Native", "Expo", "TypeScript"],
  },
  {
    icon: Server,
    title: "API & Backend Engineering",
    desc: "Scalable REST APIs, database architecture, and backend systems built for production loads. We design for reliability, observability, and maintainability from day one.",
    deliverables: ["REST API design and documentation", "Database schema design", "Authentication & authorisation", "Rate limiting, caching, error handling", "Deployment & monitoring setup"],
    timeline: "2–6 weeks",
    stack: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment pipelines, cloud infrastructure setup, and configuration management. We get your system to production — and keep it there.",
    deliverables: ["CI/CD pipeline setup", "Cloud hosting configuration", "Environment management", "SSL, DNS, domain configuration", "Monitoring & uptime alerts"],
    timeline: "1–2 weeks",
    stack: ["Vercel", "Railway", "AWS", "GitHub Actions", "Docker"],
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Business process automation, scheduled tasks, bots, and workflow integrations. We identify the repetitive work in your business and make it disappear.",
    deliverables: ["Process analysis and mapping", "Custom automation scripts", "Third-party integrations", "Scheduled job setup", "Monitoring & alerting"],
    timeline: "1–3 weeks",
    stack: ["Python", "Node.js", "n8n", "Webhooks"],
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    desc: "Tech stack audits, architecture planning, and CTO-level strategic advice for founders and teams who need a senior technical perspective without the senior hire cost.",
    deliverables: ["Current stack audit & report", "Architecture recommendations", "Technology selection guidance", "Technical roadmap", "Code review & quality assessment"],
    timeline: "Flexible — weekly or per engagement",
    stack: ["Any stack — we advise, you choose"],
  },
];

export default function ServicesPage() {
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = blocksRef.current?.querySelectorAll(".service-block");
    if (!blocks) return;
    blocks.forEach((b) => {
      gsap.fromTo(
        b,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: b, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Layout>
        {/* Hero */}
        <section className="pt-36 pb-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Services</p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white mb-6 leading-none tracking-tight">
            What we build —<br />and how we build it.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            IOM Techs delivers complete engineering — from architecture to deployment. We don't hand off half-finished code. We ship and support.
          </p>
        </section>

        {/* Service blocks */}
        <div ref={blocksRef} className="max-w-6xl mx-auto px-6 flex flex-col gap-0 border-t border-white/8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-block grid md:grid-cols-2 gap-12 py-20 border-b border-white/8 items-start opacity-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="glass w-10 h-10 rounded-xl flex items-center justify-center">
                    <s.icon size={18} className="text-white" />
                  </div>
                  <h2 className="text-[28px] font-bold text-white">{s.title}</h2>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-8">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`glass rounded-2xl p-8 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-4">Deliverables</p>
                <ul className="space-y-3 mb-8">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="text-white mt-0.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-1">Typical Timeline</p>
                <p className="text-sm text-zinc-400">{s.timeline}</p>
              </div>
            </div>
          ))}
        </div>

        <CTA />
      </Layout>
    </motion.div>
  );
}
