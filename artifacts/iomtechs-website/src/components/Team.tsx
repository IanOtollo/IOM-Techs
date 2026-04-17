export default function Team() {
  return (
    <section className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">The Team</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Led by engineers,<br />not managers.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
            <p>
              IOM Techs is led by <strong className="text-foreground font-medium">Ian Otollo</strong>, a full-stack developer and software engineer based between Nairobi and Busia, Kenya.
            </p>
            <p>
              With experience across TypeScript, Python, PHP, and Java — and deployments spanning government, healthcare, education, transport, and fintech — we bring engineering depth to every engagement.
            </p>
            <p>
              Our team stays lean and focused. You work directly with the people building your product.
            </p>
            <div className="pt-4 flex gap-6">
              <a
                href="https://ianotollo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Portfolio →
              </a>
              <a
                href="https://github.com/IanOtollo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
