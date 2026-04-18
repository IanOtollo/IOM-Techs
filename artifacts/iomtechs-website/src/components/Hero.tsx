import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";

const chips = [
  "12+ Projects Delivered",
  "4 Countries Reached",
  "100% On-Time Delivery",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10 overflow-hidden">
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-8"
      >
        Nairobi, Kenya — Software Development Studio
      </motion.p>

      {/* Headline */}
      <div className="overflow-hidden mb-6">
        {["We Build", "Software", "That Works."].map((line, i) => (
          <motion.h1
            key={line}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(44px,8vw,96px)] font-black leading-none tracking-[-0.03em] text-white"
          >
            {line}
          </motion.h1>
        ))}
      </div>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-[18px] text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
      >
        IOM Techs engineers custom web platforms, mobile apps, APIs, and automation systems for businesses that demand results.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-14"
      >
        <Link href="/project-request">
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-white text-black font-medium text-sm px-8 py-3.5 rounded-full transition-all cursor-none"
          >
            Start a Project <ArrowRight size={16} />
          </motion.span>
        </Link>
        <Link href="/work">
          <span className="glass-pill text-white text-sm px-8 py-3.5 hover:border-white/30 transition-all inline-block">
            See Our Work
          </span>
        </Link>
      </motion.div>

      {/* Stat chips */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {chips.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="glass-pill px-5 py-2 text-sm text-zinc-300"
          >
            {c}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-2 text-zinc-600">
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="bounce-y" />
      </div>
    </section>
  );
}
