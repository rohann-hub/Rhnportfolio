import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github } from "lucide-react";

export function GithubStats() {
  return (
    <section className="space-y-12">
      <div className="flex items-center gap-6">
        <h2 className="text-6xl font-black uppercase tracking-tighter">
          Activity
        </h2>
        <div className="flex-1 h-2 bg-black" />
      </div>

      <div className="border-4 border-black p-10 bg-white relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative border-4 border-black p-2">
            <div className="w-32 h-32 bg-[#FFE500] flex items-center justify-center">
              <Github size={64} className="text-black" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none">rupjit-shil</h3>
            <p className="bg-black text-white inline-block px-4 py-1 font-black text-sm uppercase tracking-widest italic">"Architecting Intelligence"</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="border-2 border-black p-4"><span className="text-3xl font-black block leading-none">25+</span> REPOSITORIES</div>
              <div className="border-2 border-black p-4"><span className="text-3xl font-black block leading-none">500+</span> CONTRIBUTIONS</div>
              <div className="border-2 border-black p-4"><span className="text-3xl font-black block leading-none">12</span> STARS</div>
            </div>
          </div>

          <button 
            onClick={() => window.open('https://github.com/rohann-hub', '_blank')}
            className="bg-black text-white p-6 font-black uppercase text-xs flex items-center gap-4 hover:bg-[#FFE500] hover:text-black transition-colors"
          >
            VIEW GITHUB <Github size={24} />
          </button>
        </div>

        <div className="mt-12 space-y-6">
          <div className="text-xl font-black uppercase tracking-tighter">Contribution Heatmap</div>
          <div className="w-full overflow-x-auto border-4 border-black p-6 bg-white">
            <div className="min-w-[700px]">
              <ImageWithFallback 
                src="https://ghchart.rshah.org/000000/rupjit-shil"
                alt="GitHub Contribution Graph"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
