import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Layout from "@/components/Layout";
import CTA from "@/components/CTA";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
}

const filters = ["All", "Web", "Mobile", "API", "Tools"];

export default function WorkPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/IanOtollo/repos?sort=updated&per_page=40")
      .then((r) => r.json())
      .then((data: Repo[]) => {
        setRepos(data.filter((r) => !r.name.includes("config") && r.name !== "IanOtollo"));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filterFn = (r: Repo) => {
    if (active === "All") return true;
    const lang = r.language?.toLowerCase() ?? "";
    const topics = r.topics?.join(" ").toLowerCase() ?? "";
    const name = r.name.toLowerCase();
    if (active === "Web") return lang.includes("type") || lang.includes("java") || lang.includes("html") || name.includes("web") || name.includes("site");
    if (active === "Mobile") return topics.includes("mobile") || name.includes("mobile") || topics.includes("react-native");
    if (active === "API") return lang.includes("python") || topics.includes("api") || name.includes("api");
    if (active === "Tools") return lang === "c" || lang === "java" || name.includes("bot") || name.includes("tool");
    return true;
  };

  const filtered = repos.filter(filterFn);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Layout>
        <section className="pt-36 pb-20 max-w-6xl mx-auto px-6">
          <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-[0.2em] mb-6">Our Work</p>
          <h1 className="text-[clamp(40px,6vw,72px)] font-black text-white mb-6 leading-none tracking-tight">
            Our work speaks<br />for itself.
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-12">
            Real projects. Real clients. Everything below is live and in use.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-sm font-mono transition-all rounded-full ${
                  active === f
                    ? "bg-white text-black font-medium"
                    : "glass text-zinc-400 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass rounded-xl h-40 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((r, i) => (
                <motion.a
                  key={r.id}
                  href={r.homepage || r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.2)" }}
                  className="glass rounded-xl p-6 flex flex-col group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-zinc-200 transition-colors line-clamp-1">
                      {r.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </h3>
                    <div className="flex gap-2 ml-2 shrink-0">
                      <a href={r.html_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                        className="text-zinc-600 hover:text-white transition-colors">
                        <Github size={12} />
                      </a>
                      {r.homepage && (
                        <ExternalLink size={12} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                      )}
                    </div>
                  </div>
                  {r.description && (
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-1 line-clamp-2">{r.description}</p>
                  )}
                  <div className="flex items-center gap-3 mt-auto pt-3">
                    {r.language && (
                      <span className="text-[11px] font-mono px-2 py-0.5 border border-white/10 text-zinc-600">
                        {r.language}
                      </span>
                    )}
                    {r.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-zinc-600">
                        <Star size={9} /> {r.stargazers_count}
                      </span>
                    )}
                    {r.homepage && (
                      <span className="text-[11px] font-mono text-zinc-600 ml-auto">Live</span>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <p className="text-zinc-600 text-center py-20">No projects found in this category.</p>
          )}

          <div className="mt-12">
            <a
              href="https://github.com/IanOtollo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass-pill px-6 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={14} />
              View all on GitHub →
            </a>
          </div>
        </section>

        <CTA />
      </Layout>
    </motion.div>
  );
}
