import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "BuildConnect Kenya",
    url: "https://buildconnect-ke.vercel.app",
    github: "https://github.com/IanOtollo/buildconnect-frontend",
    description: "A construction industry platform connecting contractors, suppliers, and clients across Kenya. Full-stack TypeScript application with project management and tender workflows.",
    tags: ["TypeScript", "Web App", "Platform"],
  },
  {
    name: "Busia County Portal",
    url: "https://busiacounty.vercel.app",
    github: "https://github.com/IanOtollo/busia-county-website",
    description: "Official digital portal for Busia County Government. Citizens can access services, news, and county information through a responsive, accessible web interface.",
    tags: ["TypeScript", "Government", "Web App"],
  },
  {
    name: "IOM Properties",
    url: "https://iomproperties.vercel.app",
    github: "https://github.com/IanOtollo/IOMProperties",
    description: "Real estate listings and property management platform. Browse, list, and manage properties with a clean, professional interface built for agents and buyers.",
    tags: ["TypeScript", "Real Estate", "Platform"],
  },
  {
    name: "EventFlow Pro",
    url: "https://iombookings.vercel.app",
    github: "https://github.com/IanOtollo/eventflow-pro",
    description: "End-to-end event booking and management system. Handles ticketing, attendee management, and scheduling for organizers in East Africa.",
    tags: ["TypeScript", "SaaS", "Bookings"],
  },
  {
    name: "IOM Cars",
    url: "https://iomcars.vercel.app",
    github: "https://github.com/IanOtollo/iomcars",
    description: "Automotive marketplace for buying and selling vehicles in Kenya. Listings, filtering, dealer profiles, and enquiry management in one platform.",
    tags: ["TypeScript", "Marketplace", "Web App"],
  },
  {
    name: "IOM Transit",
    url: "https://iomtransit.vercel.app",
    github: "https://github.com/IanOtollo/IOM-Transit",
    description: "Urban transport management and tracking platform designed for fleet operators and commuters, providing real-time route and schedule information.",
    tags: ["TypeScript", "Transport", "Web App"],
  },
  {
    name: "ClearCom CTI Platform",
    url: "https://github.com/IanOtollo/clearcom-ti-platform",
    github: "https://github.com/IanOtollo/clearcom-ti-platform",
    description: "Email security and cyber threat intelligence platform for ClearCom Kenya. Aggregates threat feeds, performs analysis, and generates security reports.",
    tags: ["Python", "Cybersecurity", "Enterprise"],
  },
  {
    name: "School Biometric System",
    url: "https://school-biometric-system.vercel.app",
    github: "https://github.com/IanOtollo/school-biometric-system",
    description: "Face recognition access control system deployed in schools. Automates attendance tracking and campus security using computer vision.",
    tags: ["JavaScript", "AI", "Security"],
  },
  {
    name: "Home Energy Insights",
    url: "https://3nergy-sage.vercel.app",
    github: "https://github.com/IanOtollo/home-energy-insights",
    description: "Dashboard for monitoring and optimising residential energy consumption. Visualises usage patterns and provides recommendations to reduce costs.",
    tags: ["TypeScript", "Data Viz", "Dashboard"],
  },
  {
    name: "Busia Job & Internship Portal",
    url: "https://busia-portal-site.vercel.app",
    github: "https://github.com/IanOtollo/Busia-portal-site",
    description: "Regional employment portal connecting job seekers and employers in Busia County. Features listings, applications, and employer dashboards.",
    tags: ["PHP", "Portal", "Employment"],
  },
  {
    name: "JKUAT Emergency Portal",
    url: "https://jkuat-emergency-portal.up.railway.app/",
    github: "https://github.com/IanOtollo/jkuat-emergency-portal",
    description: "Campus emergency response and alert system for JKUAT university. Enables rapid incident reporting and coordination between security and administration.",
    tags: ["JavaScript", "Safety", "Portal"],
  },
  {
    name: "Skanem Helpdesk System",
    url: "https://helpdesk.up.railway.app/",
    github: "https://github.com/IanOtollo/skanem-helpdesk-system",
    description: "Customer support ticket management system. Enables teams to handle, track, and resolve client issues with an organised, prioritised workflow.",
    tags: ["Python", "SaaS", "Support"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 border-t border-border">
      <div className="container px-6">
        <div className="mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Real projects. Real clients.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-background p-8 flex flex-col gap-4 group"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold leading-snug">{project.name}</h3>
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.url !== project.github && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-0.5 border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <a
            href="https://github.com/IanOtollo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <Github className="w-4 h-4" />
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
