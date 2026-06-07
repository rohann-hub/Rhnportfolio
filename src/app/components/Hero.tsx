import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Decorative Geometric Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[10%] w-16 h-16 bg-[#0000FF] z-0"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[5%] w-24 h-24 bg-[#FF70A6] rounded-full z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-6 h-6 bg-[#FF8C00] rounded-full z-0"
      />
      <motion.div 
        animate={{ rotate: [45, 65, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[15%] w-12 h-12 bg-[#FF8C00] rotate-45 z-0"
      />
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[25%] w-10 h-10 border-4 border-[#FFE500] z-0"
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#FFE500] border-2 border-black px-4 py-2"
          >
            <p className="text-black font-black uppercase text-sm md:text-lg tracking-tight">
              CS ENGINEER & AI ENTHUSIAST
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[12rem] font-black leading-[0.85] tracking-tighter"
          >
            RUPJIT <br />
            <span className="text-white [-webkit-text-stroke:4px_black] md:[-webkit-text-stroke:6px_black]">SHIL</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl space-y-8"
          >
            <p className="text-xl md:text-2xl font-bold leading-tight text-black">
              Building systems that detect intrusions before they happen. 
              Specializing in AI and scalable backend architectures.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-sm hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 border-black">
                View My Projects
              </button>
              <button className="bg-white text-black border-4 border-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:translate-x-1 hover:-translate-y-1 transition-transform">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
