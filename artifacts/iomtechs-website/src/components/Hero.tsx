import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 border-b border-border">
      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-10">
            IOM Techs — Software Engineering Studio
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight mb-8 leading-[1.05] text-foreground">
            We engineer<br />
            digital products<br />
            that perform.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed font-light">
            IOM Techs is a software engineering company based in Nairobi, Kenya. We build web applications, mobile apps, and AI-powered systems for clients across Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 text-sm font-medium w-full sm:w-auto transition-all"
              asChild
            >
              <a href="#portfolio">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-sm font-medium w-full sm:w-auto border-border text-foreground hover:bg-accent"
              asChild
            >
              <a href="#contact">Start a Project</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
