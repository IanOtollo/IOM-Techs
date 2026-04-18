import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
}

const highlighted = [
  {
    name: "BuildConnect Kenya",
    url: "https://buildconnect-ke.vercel.app",
    github: "https://github.com/IanOtollo/buildconnect-frontend",
    tag: "Web Platform",
    desc: "Construction industry platform connecting contractors, suppliers, and clients across Kenya.",
    stack: ["TypeScript", "React", "Vercel"],
  },
  {
    name: "Busia County Portal",
    url: "https://busiacounty.vercel.app",
    github: "https://github.com/IanOtollo/busia-county-website",
    tag: "Government",
    desc: "Official digital portal for Busia County Government — citizen services, news, and county information.",
    stack: ["TypeScript", "React"],
  },
  {
    name: "ClearCom CTI Platform",
    url: "https://github.com/IanOtollo/clearcom-ti-platform",
    github: "https://github.com/IanOtollo/clearcom-ti-platform",
    tag: "Cybersecurity",
    desc: "Email security and cyber threat intelligence platform for ClearCom Kenya. Aggregates threat feeds and generates security reports.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
  },
];

export default function Portfolio() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/IanOtollo/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => r.description || r.homepage).slice(0, 6));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".proj-card");
    if (!cards?.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%", toggleActions: "play none none none" },
      }
    );
  }, [repos]);

  return (
    <section id="portfolio" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-5">Selected Work</p>
        <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-white mb-16 leading-tight">
          Projects that ship and scale.
        </h2>

        {/* Featured */}
        <div ref={cardsRef} className="flex flex-col gap-6 mb-16">
          {highlighted.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              className="proj-card glass rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center opacity-0"
            >
              <div>
                <span className="inline-block glass-pill text-[11px] font-mono text-zinc-400 px-3 py-1 mb-4">
                  {p.tag}
                </span>
                <h3 className="text-[28px] font-bold text-white mb-3">{p.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.url !== p.github && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-white hover:text-zinc-300 transition-colors">
                      <ExternalLink size={14} /> Live Site
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
              {/* Abstract visual */}
              <div className="hidden md:flex items-center justify-center h-48 rounded-xl bg-white/[0.02] border border-white/8">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="100" height="100" rx="8" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <rect x="25" y="25" width="70" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
                  <rect x="25" y="37" width="50" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
                  <rect x="25" y="47" width="60" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
                  <rect x="25" y="65" width="30" height="30" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                  <rect x="63" y="65" width="30" height="13" rx="2" fill="rgba(255,255,255,0.06)"/>
                  <rect x="63" y="82" width="20" height="13" rx="2" fill="rgba(255,255,255,0.04)"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub repos grid */}
        {repos.length > 0 && (
          <>
            <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">More from GitHub</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {repos.map((r) => (
                <a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 hover:border-white/20 transition-all group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-white text-sm group-hover:text-zinc-200 transition-colors leading-snug">
                      {r.name}
                    </h4>
                    <ExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400 shrink-0 mt-0.5 ml-2" />
                  </div>
                  {r.description && (
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-2">{r.description}</p>
                  )}
                  <div className="flex items-center gap-3">
                    {r.language && (
                      <span className="text-[11px] font-mono px-2 py-0.5 border border-white/10 text-zinc-500">
                        {r.language}
                      </span>
                    )}
                    {r.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                        <Star size={10} /> {r.stargazers_count}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        <Link href="/work" className="inline-flex items-center gap-2 glass-pill px-6 py-2.5 text-sm text-zinc-300 hover:text-white transition-colors">
          <Github size={14} /> View all work →
        </Link>
      </div>
    </section>
  );
}
