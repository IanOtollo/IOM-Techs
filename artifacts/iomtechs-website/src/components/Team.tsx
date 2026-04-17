const teamImg = "/images/team.png";

export default function Team() {
  return (
    <section className="py-32">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">Our Team</h2>
          <h3 className="text-4xl font-bold">The minds behind the code.</h3>
        </div>
        <img
          src={teamImg}
          alt="Team"
          className="w-full max-w-5xl mx-auto rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}
