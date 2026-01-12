import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar isHero={false} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-4">
                Leadership Team
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                Meet the Mind Behind IOM Techs
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Driven by innovation, powered by passion, and committed to delivering 
                excellence in every project.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Image & Quick Stats */}
              <div>
                <div className="bg-secondary p-8 rounded-sm mb-8">
                  <div className="aspect-square bg-primary/10 rounded-sm mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">IO</div>
                      <p className="text-sm text-muted-foreground">Ian Otollo</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Ian Otollo
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Founder & CEO
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 mb-8">
                    <a
                      href="https://www.linkedin.com/in/ian-otollo-07b86a348/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="https://github.com/IanOtollo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="https://instagram.com/ian_codes_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                    </a>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href="https://ianotollo.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Full Portfolio
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="bg-secondary p-6 rounded-sm">
                  <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Email:</span>{" "}
                      ianotollo@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Phone:</span>{" "}
                      +254 700 399 641
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Location:</span>{" "}
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Bio & Details */}
              <div>
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    About Ian
                  </h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                    <p className="leading-relaxed">
                      Ian Otollo is an aspiring Full-Stack Developer and the visionary founder 
                      behind IOM Techs. With a passion for using technology to solve real-world 
                      problems, Ian brings a unique blend of technical expertise, creative 
                      problem-solving, and strategic thinking to every project.
                    </p>
                    <p className="leading-relaxed">
                      His journey in tech is driven by a commitment to Good Health and Well-Being, 
                      having contributed to impactful projects such as mobile health platforms for 
                      expectant mothers and county disaster alert systems. Through IOM Techs, Ian 
                      aims to bridge the gap between complex technology and practical business 
                      needs, delivering solutions that make a tangible difference.
                    </p>
                    <p className="leading-relaxed">
                      With expertise spanning full-stack development, project management, and 
                      cybersecurity, Ian is dedicated to building technology solutions that are 
                      not only innovative but also sustainable and impactful. His goal is to lead 
                      cutting-edge projects that improve lives while inspiring others to embrace 
                      technology for good.
                    </p>
                  </div>
                </div>

                {/* Skills & Expertise */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Core Expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Full-Stack Development",
                      "React & Node.js",
                      "Cloud Infrastructure",
                      "API Development",
                      "Problem Solving",
                      "Project Leadership",
                      "User-Centered Design",
                      "Cybersecurity Basics",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="bg-secondary px-4 py-3 rounded-sm border border-border"
                      >
                        <p className="text-sm font-medium text-foreground">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vision Statement */}
                <div className="bg-primary p-8 rounded-sm">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Vision for IOM Techs
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    "My vision for IOM Techs is to create technology solutions that truly serve 
                    people and communities. We're not just building software—we're building 
                    bridges between ideas and reality, between challenges and solutions. Every 
                    project we take on is an opportunity to make a positive impact, and that's 
                    what drives us forward."
                  </p>
                  <p className="text-sm text-white/60 mt-4 italic">
                    — Ian Otollo, Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how IOM Techs can help bring your vision to life with 
              innovative technology solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="/#contact">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
