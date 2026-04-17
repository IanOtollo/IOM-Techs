export default function Story() {
  return (
    <section id="story" className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Built in Nairobi.<br />Deployed everywhere.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              IOM Techs is a software engineering company founded by Ian Otollo. We design and build digital products for clients across Kenya and East Africa — from county governments and schools to startups and enterprises.
            </p>
            <p>
              Our work spans web platforms, mobile applications, AI systems, and security tooling. We write real code, deploy to production, and stand behind what we build.
            </p>
            <p>
              Every project in our portfolio is live and in use. No mock-ups, no case studies with fabricated metrics — just software that works.
            </p>
            <div className="pt-4">
              <a
                href="https://ianotollo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                ianotollo.vercel.app →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
