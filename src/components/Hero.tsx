import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-4">
            Technology Solutions
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Building Tomorrow's Digital Solutions Today
          </h1>

          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            We deliver cutting-edge technology solutions that transform ideas into
            powerful digital experiences. From web development to cloud infrastructure,
            we're your partner in digital innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-medium"
              asChild
            >
              <Link to="/project-request">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="border border-white/50 bg-transparent text-white hover:bg-white/10 font-medium"
              asChild
            >
              <a href="/#services">
                Our Solutions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;