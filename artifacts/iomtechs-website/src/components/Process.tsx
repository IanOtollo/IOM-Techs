import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your goals, your users, and your technical constraints. No assumptions. Every project starts with an honest conversation.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "We design the system before we write a single line of code. Structure first — the build follows the blueprint.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Iterative development with weekly deliverables. You see progress continuously, not just at the end of a 3-month silence.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Deployment, testing, handover. Then we stay. Bugs don't sleep — and neither do we when your system is on the line.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="overflow-hidden bg-[#0a0a0a] border-t border-white/8">
      <div className="pt-28 pb-12 max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-5">How We Work</p>
        <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-16 leading-tight">
          From brief to launch —<br />without the chaos.
        </h2>
      </div>

      {/* Horizontal track — desktop only */}
      <div
        ref={trackRef}
        className="hidden md:flex gap-0 pb-28"
        style={{ width: "max-content" }}
      >
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="w-[420px] shrink-0 px-12 border-r border-white/8 last:border-r-0 flex flex-col justify-start pt-4 pb-16 relative"
          >
            <span
              className="absolute top-0 left-12 font-mono text-[96px] font-black text-white/5 leading-none select-none"
              aria-hidden
            >
              {s.num}
            </span>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6 relative z-10">{s.num}</span>
            <h3 className="text-[32px] font-bold text-white mb-4 relative z-10">{s.title}</h3>
            <p className="text-zinc-400 text-base leading-relaxed relative z-10 max-w-xs">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Vertical — mobile */}
      <div className="md:hidden flex flex-col gap-0 border-t border-white/8">
        {steps.map((s) => (
          <div key={s.num} className="px-6 py-10 border-b border-white/8 relative">
            <span className="absolute top-4 right-6 font-mono text-[64px] font-black text-white/5 leading-none select-none" aria-hidden>
              {s.num}
            </span>
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] block mb-3">{s.num}</span>
            <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
