import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-[#111] rounded-3xl px-10 md:px-20 py-20 text-center border border-white/8"
      >
        <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Let's Build</p>
        <h2 className="text-[clamp(36px,5vw,60px)] font-bold text-white mb-5 leading-tight">
          Ready to build<br />something serious?
        </h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Tell us what you need. We'll tell you how to build it right.
        </p>
        <Link href="/project-request">
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-white text-black font-semibold text-base px-10 py-4 rounded-full cursor-none"
          >
            Start a Project <ArrowRight size={18} />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
