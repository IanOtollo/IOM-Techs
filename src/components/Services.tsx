import { Code2, Smartphone, Cloud, Shield, Cpu, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with React, Node.js, and modern frameworks for optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Responsive mobile-first designs and progressive web apps that work seamlessly across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deploy and manage your applications on reliable cloud platforms with scalable infrastructure.",
  },
  {
    icon: Shield,
    title: "API Development",
    description:
      "Robust RESTful APIs and integrations that connect your systems and streamline workflows.",
  },
  {
    icon: Cpu,
    title: "Automation",
    description:
      "Intelligent automation solutions that reduce manual work and boost productivity.",
  },
  {
    icon: BarChart3,
    title: "Technical Consulting",
    description:
      "Expert guidance on technology stack selection, architecture design, and best practices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-sm border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;