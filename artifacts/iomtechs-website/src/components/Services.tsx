import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, BrainCircuit, Cloud, PenTool } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Scalable web applications built with modern TypeScript stacks. From government portals to commercial platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Responsive, cross-platform mobile experiences that work reliably on any device.",
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    desc: "Backend systems, APIs, and enterprise-grade architecture built for performance and maintainability.",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Systems",
    desc: "Practical AI integrations — from face recognition to threat intelligence and predictive analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deployment pipelines, cloud hosting, and infrastructure management that keeps your systems running.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Clean, functional interfaces that prioritise usability and serve real user needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">What we build.</h2>
          <p className="text-muted-foreground leading-relaxed">
            We work across the full stack — from database design to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-background p-8 hover:bg-muted transition-colors group"
            >
              <s.icon className="w-5 h-5 text-muted-foreground mb-6 group-hover:text-foreground transition-colors" />
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
