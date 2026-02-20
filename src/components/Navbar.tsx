import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

interface NavbarProps {
  isHero?: boolean;
}

const Navbar = ({ isHero = true }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHero ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className={`text-xl font-semibold tracking-tight ${isHero ? "text-white" : "text-foreground"
              }`}
          >
            IOM Techs
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isHero
                    ? "text-white/80 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              size="sm"
              className={isHero
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
              }
              asChild
            >
              <Link to="/project-request">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isHero ? "text-white" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium ${isHero ? "text-white/80" : "text-muted-foreground"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                size="sm"
                className={isHero
                  ? "bg-white text-primary w-full"
                  : "bg-primary text-primary-foreground w-full"
                }
                asChild
              >
                <Link to="/project-request">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;