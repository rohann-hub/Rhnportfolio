export function About() {
  return (
    <section id="about" className="space-y-12">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-2/5">
          <div className="border-4 border-black p-4 relative group">
            <div className="aspect-[4/5] bg-black flex items-center justify-center">
              <span className="text-[12rem] font-black text-white selection:text-[#FFE500]">R</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FFE500] border-4 border-black text-black text-xs font-black px-4 py-2 uppercase tracking-widest rotate-[-5deg]">
              Founder @ rupjit.dev
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              The <span className="bg-[#FFE500] px-2">Blueprint</span>
            </h2>
            <p className="text-black text-xl md:text-2xl font-bold leading-tight">
              I am Rupjit Shil. A Computer Science Engineer specializing in 
              AI & Data Science. I bridge the gap between complex algorithms 
              and human-centric software.
            </p>
            <p className="text-gray-700 text-lg">
              Currently researching at NIT Agartala's HCI & AI Lab. I don't just write code; 
              I architect digital ecosystems that are scalable, secure, and smart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-black p-6 hover:bg-[#FFE500] transition-colors group">
              <h3 className="text-xl font-black mb-2 uppercase">Expertise</h3>
              <p className="font-bold">MERN Stack, Python, ML & Deep Learning, Cloud Architecture.</p>
            </div>
            <div className="border-2 border-black p-6 hover:bg-[#FFE500] transition-colors group">
              <h3 className="text-xl font-black mb-2 uppercase">Research</h3>
              <p className="font-bold">Human-Computer Interaction & AI Lab, National Institute of Technology.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-widest bg-black text-white">
              📍 Agartala, India
            </div>
            <div className="border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-widest">
              Available for Internships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
