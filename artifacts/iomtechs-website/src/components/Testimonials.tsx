import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "IOM Techs completely transformed our digital infrastructure. Their engineering team is world-class, delivering a product that exceeded our expectations in every way.",
    name: "Sarah Jenkins",
    role: "CTO, Global Finance",
  },
  {
    quote: "Working with them felt like an extension of our own team. The level of communication, speed, and technical prowess is unmatched. They are true partners.",
    name: "David Chen",
    role: "Founder, HealthAI",
  },
  {
    quote: "From discovery to launch, the process was flawless. The platform they built handles millions of requests seamlessly. Absolute top-tier development.",
    name: "Elena Rodriguez",
    role: "VP Engineering, Nexus Stream",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="container px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-accent mb-4 uppercase tracking-widest">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Trusted by visionaries.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 border border-white/10 bg-black/40 flex flex-col justify-between hover:border-accent/50 transition-colors"
            >
              <div>
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-sm text-white/50 font-mono mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}