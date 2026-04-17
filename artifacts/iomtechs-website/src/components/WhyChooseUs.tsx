const points = [
  {
    title: "Real-world experience",
    desc: "We've built systems for county governments, universities, enterprises, and startups. Our portfolio is live and verifiable.",
  },
  {
    title: "Full-stack capability",
    desc: "Frontend, backend, databases, cloud deployment, AI integration — we handle the complete product, not just one layer.",
  },
  {
    title: "African context",
    desc: "We understand the infrastructure, connectivity, and market conditions of building software in East Africa.",
  },
  {
    title: "Transparent process",
    desc: "No black boxes. You see the code, the progress, and the decisions at every stage of the project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">Why IOM Techs</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why work with us.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {points.map((p) => (
            <div key={p.title} className="bg-background p-8">
              <h3 className="text-base font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
