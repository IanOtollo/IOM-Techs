const stats = [
  { value: "40+", label: "Projects on GitHub" },
  { value: "12+", label: "Live Deployments" },
  { value: "6+", label: "Technologies" },
  { value: "2024", label: "Founded" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 border-b border-border">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-border">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-6 first:pl-0">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-1">{s.value}</p>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
