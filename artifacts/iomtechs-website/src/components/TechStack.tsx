import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiPhp, SiJavascript } from "react-icons/si";

const techs = [
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 border-t border-border">
      <div className="container px-6">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-10">Technologies</p>
        <div className="flex flex-wrap gap-6">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <t.icon className="w-4 h-4" />
              <span className="font-mono">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
