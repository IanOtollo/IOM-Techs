import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiDocker } from "react-icons/si";

export default function TechStack() {
  const techs = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiDocker, name: "Docker" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/50">
      <div className="container px-6">
        <p className="text-center text-sm font-mono text-white/40 mb-10 uppercase tracking-widest">Powered By</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-60">
          {techs.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-2 hover:opacity-100 hover:text-primary transition-all">
              <t.icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}