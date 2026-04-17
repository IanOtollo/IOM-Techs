import { motion } from "framer-motion";
import { Code2, Smartphone, Cpu, BrainCircuit, Cloud, PenTool } from "lucide-react";

const services = [
  { icon: Code2, title: "Web Development", desc: "Ultra-fast, scalable web applications built with modern frameworks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feeling iOS and Android apps that users love." },
  { icon: Cpu, title: "Software Engineering", desc: "Complex enterprise software architecture and backend systems." },
  { icon: BrainCircuit, title: "AI & ML Solutions", desc: "Intelligent automation and predictive models tailored to your business." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Robust infrastructure, CI/CD pipelines, and cloud migration." },
  { icon: PenTool, title: "UI/UX Design", desc: "Stunning interfaces that convert and engage." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Full-spectrum engineering.</h3>
          <p className="text-lg text-white/60">We don't just write code. We architect solutions that scale, perform, and dominate their markets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer"
            >
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:text-secondary transition-colors" />
              <h4 className="text-xl font-bold mb-3">{s.title}</h4>
              <p className="text-white/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}