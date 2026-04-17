import { motion } from "framer-motion";
import { Zap, ShieldCheck, Rocket, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Uncompromising Speed",
    desc: "We build systems that are lightning fast from day one. Performance isn't an afterthought; it's a core requirement."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Bank-grade security protocols integrated into every layer of our applications. Your data is fortified."
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    desc: "Infrastructure designed to grow. When your user base 10xs overnight, your systems won't blink."
  },
  {
    icon: Target,
    title: "Laser Focus",
    desc: "We don't take every project. We partner with ambitious companies and dedicate our top talent to their success."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-widest">The IOM Difference</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">We build what others say is impossible.</h3>
            <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
              We aren't an agency; we're an extension of your engineering team. We bring intense focus, deep technical expertise, and a refusal to settle for "good enough." 
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-mono text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              Always shipping
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div 
                key={r.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <r.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-2">{r.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}