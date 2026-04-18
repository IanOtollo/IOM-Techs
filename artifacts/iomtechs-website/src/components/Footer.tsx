import { Link } from "wouter";
import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/IanOtollo", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ian-otollo-07b86a348/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/Ian_Otollo", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/254700399641", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <p className="text-white font-bold text-base mb-2">IOM Techs</p>
            <p className="text-zinc-500 text-sm mb-6">Nairobi-built. World-class.</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="text-white text-sm font-semibold mb-5">Services</p>
            <ul className="space-y-3 text-sm text-zinc-500">
              {["Web Development", "Mobile Apps", "API Development", "Cloud & DevOps", "Automation", "Consulting"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <p className="text-white text-sm font-semibold mb-5">Company</p>
            <ul className="space-y-3 text-sm text-zinc-500">
              {[
                { label: "About", href: "/about" },
                { label: "Our Work", href: "/work" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Start a Project", href: "/project-request" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <p className="text-white text-sm font-semibold mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="mailto:ianotollo@gmail.com" className="hover:text-white transition-colors">ianotollo@gmail.com</a></li>
              <li><a href="https://wa.me/254700399641" className="hover:text-white transition-colors">+254 700 399 641</a></li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} IOM Techs. All rights reserved.</span>
          <a href="https://ianotollo.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            Crafted by Ian Otollo →
          </a>
        </div>
      </div>
    </footer>
  );
}
