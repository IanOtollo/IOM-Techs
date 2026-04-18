import { motion } from "framer-motion";
import { Link } from "wouter";
import { Github, Linkedin, ExternalLink, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";
import { SiTypescript, SiReact, SiPython, SiNodedotjs, SiPostgresql, SiDocker, SiPhp, SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const values = [
  { title: "Precision", desc: "Every decision — from architecture to naming — is deliberate. We don't ship code we wouldn't put our name on." },
  { title: "Speed", desc: "Delivery speed is a competitive advantage. We build fast without cutting corners." },
  { title: "Honesty", desc: "If a scope is unclear, a deadline is at risk, or a solution won't work — we say so. No surprises." },
  { title: "Quality", desc: "We hold ourselves to the standard of software we'd want to use ourselves." },
];

const techs = [
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiDocker, name: "Docker" },
];

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Layout>
        {/* Hero */}
        <section className="pt-36 pb-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">About</p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white mb-6 leading-none tracking-tight">
            Built in Nairobi.<br />Built for the world.
          </h1>
        </section>

        {/* Story */}
        <section className="border-t border-white/8 py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Our Story</p>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">What IOM Techs is</h2>
          </div>
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>IOM Techs is a software engineering company built on the belief that world-class digital products can be designed, built, and shipped from Nairobi — not despite the location, but with full awareness of it.</p>
            <p>We work with businesses that want software built properly: structured, tested, documented, and deployed with care. Not hacked together overnight and handed off with crossed fingers.</p>
            <p>Every project in our portfolio is live and in use. No fabricated case studies. No inflated metrics. Just code we wrote and clients who use it.</p>
          </div>
        </section>

        {/* Founder */}
        <section className="border-t border-white/8 py-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-10">Founder</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-10 max-w-2xl"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-black text-white shrink-0">
                I
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ian Otollo</h3>
                <p className="text-zinc-500 text-sm font-mono">Founder & Lead Engineer</p>
                <p className="text-zinc-600 text-xs flex items-center gap-1 mt-1"><MapPin size={10} /> Nairobi · Busia, Kenya</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Full-stack developer and software engineer with experience spanning TypeScript, Python, PHP, and Java. Builds across government, education, transport, fintech, and enterprise. Hireable — and shipping.
            </p>
            <div className="flex gap-3">
              <a href="https://ianotollo.vercel.app" target="_blank" rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
                <ExternalLink size={12} /> Portfolio
              </a>
              <a href="https://github.com/IanOtollo" target="_blank" rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
                <Github size={12} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ian-otollo-07b86a348/" target="_blank" rel="noopener noreferrer"
                className="glass-pill flex items-center gap-2 px-4 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
                <Linkedin size={12} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="border-t border-white/8 py-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-10">Values</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section className="border-t border-white/8 py-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-8">Technologies</p>
          <div className="flex flex-wrap gap-3">
            {techs.map((t) => (
              <div key={t.name} className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <t.icon className="w-4 h-4" />
                <span className="font-mono">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="border-t border-white/8 py-16 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-3">Location</p>
          <p className="text-lg text-white">Headquartered in Nairobi, Kenya. <span className="text-zinc-500">Serving clients globally.</span></p>
        </section>

        <CTA />
      </Layout>
    </motion.div>
  );
}
