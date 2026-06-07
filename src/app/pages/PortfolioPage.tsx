import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Experience } from "../components/Experience";
import { GithubStats } from "../components/GithubStats";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { LoadingBar } from "../components/LoadingBar";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";

export function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FFE500] selection:text-black font-sans relative">
      {/* Dotted Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      <Toaster position="bottom-right" theme="light" expand={true} richColors />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <LoadingBar onComplete={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main className="container mx-auto px-4 pt-20 pb-10 space-y-32">
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <GithubStats />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
