import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <div className="text-4xl font-black tracking-tighter uppercase leading-none">rupjit.dev</div>
            <p className="text-black font-bold text-lg leading-tight">
              Designing for the future with the raw aesthetics of the past. 
              Built with React, Tailwind, and determination.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Navigation</h4>
              <nav className="flex flex-col gap-2 font-black uppercase text-sm">
                <a href="#" className="hover:underline">Home</a>
                <a href="#projects" className="hover:underline">Work</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Connect</h4>
              <div className="flex flex-col gap-2 font-black uppercase text-sm">
                <a href="https://github.com/rupjit-shil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/rupjitshil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:rupjit001@gmail.com" className="flex items-center gap-2 hover:underline">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t-2 border-black">
          <div className="text-xs font-black uppercase">
            © 2026 RUPJIT SHIL — ALL RIGHTS RESERVED
          </div>
          <div className="bg-[#FFE500] border-2 border-black text-black text-xs font-black px-4 py-1 uppercase tracking-widest">
            STAY BRUTAL
          </div>
        </div>
      </div>
    </footer>
  );
}
