const p1 = "/images/portfolio-1.png";
const p2 = "/images/portfolio-2.png";
const p3 = "/images/portfolio-3.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32">
      <div className="container px-6">
        <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Selected Work</h2>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Proof of craft.</h3>
        
        <div className="flex flex-col gap-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 max-w-lg">
              <h4 className="text-3xl font-bold mb-4">Nova Banking</h4>
              <p className="text-white/60 mb-6 text-lg">A next-generation financial platform built for speed and security. Handled over $2B in transactions in its first year.</p>
              <div className="flex gap-3 text-sm font-mono text-primary"><span className="px-3 py-1 bg-primary/10 rounded-full">FinTech</span><span className="px-3 py-1 bg-primary/10 rounded-full">Mobile App</span></div>
            </div>
            <div className="order-1 md:order-2">
              <img src={p1} alt="Nova Banking" className="w-full rounded-xl border border-white/10" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={p2} alt="Pulse Fitness" className="w-full rounded-xl border border-white/10" />
            </div>
            <div className="max-w-lg ml-auto">
              <h4 className="text-3xl font-bold mb-4">Pulse Fitness</h4>
              <p className="text-white/60 mb-6 text-lg">AI-powered personal training app with real-time biometric tracking and custom workout generation.</p>
              <div className="flex gap-3 text-sm font-mono text-secondary"><span className="px-3 py-1 bg-secondary/10 rounded-full">HealthTech</span><span className="px-3 py-1 bg-secondary/10 rounded-full">AI/ML</span></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 max-w-lg">
              <h4 className="text-3xl font-bold mb-4">Nexus Data AI</h4>
              <p className="text-white/60 mb-6 text-lg">Enterprise analytics dashboard for real-time predictive modeling. Turning petabytes of data into actionable insights.</p>
              <div className="flex gap-3 text-sm font-mono text-accent"><span className="px-3 py-1 bg-accent/10 rounded-full">Enterprise</span><span className="px-3 py-1 bg-accent/10 rounded-full">Data Viz</span></div>
            </div>
            <div className="order-1 md:order-2">
              <img src={p3} alt="Nexus Data AI" className="w-full rounded-xl border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
