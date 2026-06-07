const stacks = [
  { id: "01", name: "FRONTEND", details: "REACT / NEXT.JS / TAILWIND" },
  { id: "02", name: "BACKEND", details: "NODE.JS / EXPRESS.JS / FASTAPI" },
  { id: "03", name: "DATABASE", details: "MONGODB / SQL / POSTGRES" },
  { id: "04", name: "ML/AI", details: "SCIKIT-LEARN / YOLOV8 / OPENCV" },
  { id: "05", name: "GEN AI", details: "LANGCHAIN / LLMS / PROMPT ENG" },
  { id: "06", name: "LANGUAGE", details: "PYTHON / JAVASCRIPT / C++" },
  { id: "07", name: "AUTH", details: "JWT / AUTH.JS / SUPABASE" },
  { id: "08", name: "TOOLS", details: "GIT / DOCKER / AWS" },
];

export function TechStack() {
  return (
    <section className="space-y-12">
      <div className="flex items-center gap-6">
        <h2 className="text-6xl font-black uppercase tracking-tighter">
          TECH STACK
        </h2>
        <div className="flex-1 h-2 bg-black" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
        {stacks.map((stack) => (
          <div 
            key={stack.id}
            className="group relative p-8 border-black sm:border-r-2 sm:border-b-2 last:border-0 hover:bg-[#FFE500] transition-all duration-200"
          >
            <div className="absolute top-4 right-4 text-xs font-black">
              {stack.id}
            </div>
            <div className="space-y-4">
              <h3 className="font-black text-2xl uppercase tracking-tight leading-none">{stack.name}</h3>
              <p className="text-sm font-bold leading-tight">
                {stack.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
