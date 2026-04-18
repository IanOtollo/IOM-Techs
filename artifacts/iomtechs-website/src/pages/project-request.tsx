import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Layout from "@/components/Layout";

const serviceOptions = ["Web Development", "Mobile App", "API / Backend", "Cloud & DevOps", "Automation", "Consulting", "Other"];
const timelines = ["ASAP", "Within 1 month", "Within 3 months", "Flexible"];
const sources = ["Google Search", "GitHub", "Social Media", "Word of Mouth", "LinkedIn", "Other"];

export default function ProjectRequestPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", country: "",
    services: [] as string[], description: "", budget: "", timeline: "",
    source: "", references: "", notes: "",
  });

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));
  };

  const progress = ((step - 1) / 2) * 100;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Layout>
        <section className="pt-36 pb-20 max-w-2xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Start a Project</p>
          <h1 className="text-[clamp(32px,5vw,56px)] font-black text-white mb-12 leading-tight tracking-tight">
            Tell us about<br />your project.
          </h1>

          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-14 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">We've got your request.</h2>
              <p className="text-zinc-400 mb-8">Expect a response within 24 hours. We'll reach out to schedule a discovery call.</p>
              <Link href="/" className="inline-flex items-center gap-2 glass-pill px-6 py-2.5 text-sm text-white">
                ← Back to Home
              </Link>
            </motion.div>
          ) : (
            <div className="glass rounded-2xl p-8 md:p-10">
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${step >= n ? "bg-white text-black" : "glass text-zinc-500"}`}>
                      {n}
                    </div>
                    {n < 3 && (
                      <div className="flex-1 h-px bg-white/10 w-8 md:w-16 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-white"
                          initial={{ width: 0 }}
                          animate={{ width: step > n ? "100%" : "0%" }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    )}
                  </div>
                ))}
                <span className="font-mono text-[11px] text-zinc-500 ml-2">Step {step} of 3</span>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold text-white mb-6">About you</h2>
                    <div className="flex flex-col gap-4">
                      {[
                        { name: "name", label: "Full Name", placeholder: "Your full name", type: "text", required: true },
                        { name: "email", label: "Email", placeholder: "your@email.com", type: "email", required: true },
                        { name: "company", label: "Company / Organisation (optional)", placeholder: "Company name", type: "text", required: false },
                        { name: "country", label: "Country", placeholder: "e.g. Kenya, Uganda", type: "text", required: true },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">{f.label}</label>
                          <input type={f.type} placeholder={f.placeholder} required={f.required} className="form-input"
                            value={form[f.name as keyof typeof form] as string}
                            onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold text-white mb-6">Your project</h2>
                    <div className="flex flex-col gap-6">
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-3">Service Type (select all that apply)</label>
                        <div className="flex flex-wrap gap-2">
                          {serviceOptions.map((s) => (
                            <button key={s} type="button" onClick={() => toggleService(s)}
                              className={`px-4 py-2 text-sm rounded-full transition-all ${form.services.includes(s) ? "bg-white text-black font-medium" : "glass text-zinc-400 hover:text-white"}`}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Project Description</label>
                        <textarea rows={4} placeholder="Describe what you're building..." className="form-input resize-none"
                          value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Budget Range</label>
                        <select className="form-input" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                          <option value="">Select budget</option>
                          {["Under KES 35,000", "KES 35,000 – 120,000", "KES 120,000+", "Custom"].map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-3">Timeline Needed</label>
                        <div className="flex flex-wrap gap-2">
                          {timelines.map((t) => (
                            <button key={t} type="button" onClick={() => setForm({ ...form, timeline: t })}
                              className={`px-4 py-2 text-sm rounded-full transition-all ${form.timeline === t ? "bg-white text-black font-medium" : "glass text-zinc-400 hover:text-white"}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h2 className="text-xl font-bold text-white mb-6">Final details</h2>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-3">How did you find us?</label>
                        <div className="flex flex-wrap gap-2">
                          {sources.map((s) => (
                            <button key={s} type="button" onClick={() => setForm({ ...form, source: s })}
                              className={`px-4 py-2 text-sm rounded-full transition-all ${form.source === s ? "bg-white text-black font-medium" : "glass text-zinc-400 hover:text-white"}`}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Reference Websites (optional)</label>
                        <input type="text" placeholder="Sites you like the look of..." className="form-input"
                          value={form.references} onChange={(e) => setForm({ ...form, references: e.target.value })} />
                      </div>
                      <div>
                        <label className="block font-mono text-[11px] text-zinc-500 uppercase tracking-[0.15em] mb-2">Additional Notes (optional)</label>
                        <textarea rows={3} placeholder="Anything else we should know..." className="form-input resize-none"
                          value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nav buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/8">
                {step > 1 ? (
                  <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : <div />}
                {step < 3 ? (
                  <button onClick={() => setStep(step + 1)} className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-zinc-100 transition-colors">
                    Next <ArrowRight size={14} />
                  </button>
                ) : (
                  <button onClick={() => setDone(true)} className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-zinc-100 transition-colors">
                    Submit Request <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          )}
        </section>
      </Layout>
    </motion.div>
  );
}
