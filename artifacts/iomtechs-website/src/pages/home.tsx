import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Layout>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
      </Layout>
    </motion.div>
  );
}
