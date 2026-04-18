import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Cloud, Zap, Lightbulb, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Blazing-fast, SEO-optimised websites and web applications built on React and modern JavaScript stacks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps for iOS and Android. Built to perform on real networks, real devices.",
  },
  {
    icon: Server,
    title: "API & Backend",
    desc: "Scalable REST APIs, database architecture, and backend systems designed for production loads.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment pipelines, cloud hosting, and infrastructure configuration on Vercel, Railway, and AWS.",
  },
  {
    icon: Zap,
    title: "Automation",
    desc: "Business process automation, bots, scheduled tasks, and workflow integrations that save real time.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    desc: "Tech stack audits, architecture planning, and CTO-level strategic advice for early-stage startups.",
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".service-card");
    if (!cards) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 75%", toggleActions: "play none none none" },
      }
    );
  }, []);

  return (
    <section id="services" className="py-28 max-w-6xl mx-auto px-6">
      <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-5 gsap-init">What We Do</p>
      <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-white mb-16 gsap-init leading-tight">
        End-to-end digital engineering.
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <motion.div
            key={s.title}
            whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
            className="service-card glass rounded-2xl p-8 flex flex-col opacity-0"
          >
            <s.icon size={24} className="text-white mb-6" />
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">{s.desc}</p>
            <Link href="/services" className="mt-6 text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
              Learn more <ArrowRight size={13} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
