import { ArrowRight, Github, Twitter } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Have a project<br />in mind?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              We're available for new projects. Tell us what you're building and we'll get back to you within 24 hours.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/IanOtollo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://twitter.com/IanOtollo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
                @IanOtollo
              </a>
            </div>
          </div>

          <div className="border border-border p-8">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Project details</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project..."
                  className="bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors mt-2"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
