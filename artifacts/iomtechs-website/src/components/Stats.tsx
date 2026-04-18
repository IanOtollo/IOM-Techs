import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 12, suffix: "+", label: "Projects Delivered" },
  { end: 3, suffix: "+", label: "Years Building" },
  { end: 4, suffix: "", label: "Countries Reached" },
  { end: 100, suffix: "%", label: "On-Time Delivery" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>("[data-count]");
    if (!els) return;
    els.forEach((el) => {
      const end = Number(el.dataset.count);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration: 1.8,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="border-y border-white/8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center py-12 px-6 text-center">
            <p className="text-[64px] font-black text-white leading-none">
              <span data-count={s.end}>0</span>
              {s.suffix}
            </p>
            <p className="font-mono text-sm text-zinc-500 mt-3 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
