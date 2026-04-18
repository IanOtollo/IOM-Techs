import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, MessageCircle, Check } from "lucide-react";
import Layout from "@/components/Layout";

const services = ["Web Development", "Mobile App", "API / Backend", "Cloud & DevOps", "Automation", "Consulting", "Other"];
const budgets = ["Under KES 35,000", "KES 35,000 – 120,000", "KES 120,000+", "Custom / Enterprise"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Layout>
        <section className="pt-36 pb-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Contact</p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white mb-6 leading-none tracking-tight">
            Let's build something.
          </h1>

          <div className="grid md:grid-cols-2 gap-16 mt-12">
            {/* Left */}
            <div>
              <p className="text-zinc-400 text-base mb-10 leading-relaxed">
                Reach out directly or fill in the form. We respond within 24 hours.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  { icon: Mail, label: "ianotollo@gmail.com", href: "mailto:ianotollo@gmail.com" },
                  { icon: Phone, label: "+254 700 399 641", href: "https://wa.me/254700399641" },
                  { icon: MapPin, label: "Nairobi, Kenya", href: null },
                  { icon: Clock, label: "Usually within 24 hours", href: null },
                ].map((c) => (
                  <li key={c.label} className="flex items-center gap-3 text-sm text-zinc-400">
                    <div className="glass w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                      <c.icon size={14} className="text-white" />
                    </div>
                    {c.href ? (
                      <a href={c.href} className="hover:text-white transition-colors">{c.label}</a>
                    ) : (
                      <span>{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/IanOtollo" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ian-otollo-07b86a348/" },
                  { icon: Twitter, href: "https://twitter.com/Ian_Otollo" },
                  { icon: MessageCircle, href: "https://wa.me/254700399641" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="glass w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message received.</h3>
                  <p className="text-zinc-400 text-sm">We'll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
                    { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
                    { name: "company", label: "Company (optional)", type: "text", placeholder: "Company name", required: false },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="form-input"
                        value={form[f.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Service Needed</label>
                    <select
                      className="form-input"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Budget Range</label>
                    <select
                      className="form-input"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    >
                      <option value="">Select budget</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Project Brief</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project..."
                      className="form-input resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="w-full bg-white text-black font-semibold text-sm py-3.5 rounded-xl hover:bg-zinc-100 transition-colors mt-2">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}
