const steps = [
  { num: "01", title: "Discovery", desc: "We understand your requirements, constraints, and business context before writing a line of code." },
  { num: "02", title: "Architecture", desc: "System design, technology selection, and planning. We map out the full solution before building." },
  { num: "03", title: "Build", desc: "Iterative development with regular check-ins. You see progress continuously, not just at the end." },
  { num: "04", title: "Launch", desc: "Deployment, testing, and handover. We ensure your product is stable and ready for real users." },
  { num: "05", title: "Support", desc: "Ongoing maintenance, updates, and improvements as your product grows." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">How we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our process.</h2>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {steps.map((step) => (
            <div key={step.num} className="grid md:grid-cols-12 gap-4 py-8 items-start group">
              <span className="md:col-span-1 text-xs font-mono text-muted-foreground">{step.num}</span>
              <h3 className="md:col-span-3 text-base font-semibold">{step.title}</h3>
              <p className="md:col-span-8 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
