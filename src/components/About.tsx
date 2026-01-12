import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Agile Development",
  "Client-First Approach",
  "Modern Tech Stack",
  "Scalable Solutions",
  "Responsive Design",
  "Ongoing Support",
];

const stats = [
  { value: "2025", label: "Founded" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Fast", label: "Turnaround Time" },
  { value: "Kenya", label: "Based in East Africa" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Innovation-Driven Technology Partner
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              IOM Techs is a forward-thinking technology startup dedicated to empowering 
              businesses through innovative digital solutions. We specialize in custom 
              software development, web applications, and cloud infrastructure that drive 
              real business value. Our mission is to bridge the gap between complex 
              technology and practical business needs, delivering solutions that are 
              scalable, efficient, and built to last.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-primary p-12 rounded-sm">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="border-t border-border pt-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Founder Info */}
            <div className="lg:col-span-2">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
                Founder & CEO
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ian Otollo
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ian Otollo is an aspiring Full-Stack Developer and the visionary founder 
                behind IOM Techs. With a passion for using technology to solve real-world 
                problems, Ian brings a unique blend of technical expertise, creative 
                problem-solving, and strategic thinking to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His journey in tech is driven by a commitment to Good Health and Well-Being, 
                having contributed to impactful projects such as mobile health platforms for 
                expectant mothers and county disaster alert systems. With expertise spanning 
                full-stack development, project management, and cybersecurity, Ian is dedicated 
                to building technology solutions that are not only innovative but also 
                sustainable and impactful.
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "React & Node.js",
                    "Cloud Solutions",
                    "API Development",
                    "Project Leadership",
                    "Problem Solving",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-sm border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
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

            {/* Vision Statement */}
            <div className="bg-secondary p-8 rounded-sm border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Vision
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "My vision for IOM Techs is to create technology solutions that truly serve 
                people and communities. We're not just building software—we're building 
                bridges between ideas and reality, between challenges and solutions."
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                — Ian Otollo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;