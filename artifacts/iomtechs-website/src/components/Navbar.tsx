import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled ? "glass h-14" : "bg-transparent h-16"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-base tracking-tight flex-shrink-0">
          IOM Techs
        </Link>

        {/* Center nav — desktop */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-200 relative pb-0.5 ${
                location === l.href
                  ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/project-request"
          className="hidden md:flex glass-pill text-sm text-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 font-medium"
        >
          Start a Project
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={l.href}
                  className="block text-3xl font-semibold text-white py-3 px-6 hover:text-zinc-400 transition-colors text-center"
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.05, duration: 0.3 }}
              className="mt-6"
            >
              <Link
                href="/project-request"
                className="glass-pill text-white text-lg font-medium px-8 py-3 block text-center"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
