export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="border-2 border-black px-4 py-1">
          <a href="#" className="text-xl font-black tracking-tighter uppercase">
            RUPJIT.DEV
          </a>
        </div>

        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-tight">
          <a href="#about" className="hover:underline transition-all">About</a>
          <a href="#projects" className="hover:underline transition-all">Projects</a>
          <a href="https://github.com/rohann-hub" target="_blank" rel="noreferrer" className="hover:underline transition-all">GitHub</a>
          <a 
            href="#contact" 
            className="bg-[#FFE500] border-2 border-black px-6 py-2 hover:bg-black hover:text-[#FFE500] transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
