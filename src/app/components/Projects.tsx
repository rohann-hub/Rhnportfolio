import { ExternalLink, Github } from "lucide-react";

const projectList = [
  {
    id: "01",
    featured: true,
    title: "IntrusionIQ",
    description: "An AI-powered SOC platform for real-time network intrusion detection. Uses XGBoost and Isolation Forest for anomaly detection, with a FastAPI backend and React dashboard.",
    tags: ["XGBoost", "FastAPI", "React", "Docker"],
    link: "https://github.com/rohann-hub",
    color: "#FFE500"
  },
  {
    id: "02",
    featured: false,
    title: "Banking System",
    description: "A secure full-stack banking application with account management, transaction history, and JWT-based authentication.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/rohann-hub/Bank-Transaction-System-Backend-Ledger-",
    color: "#0000FF"
  },
  {
    id: "03",
    featured: false,
    title: "DocuMind AI",
    description: "A fully offline, privacy-first RAG chatbot that reads custom documents and answers questions using LangChain, FAISS vector search, HuggingFace embeddings, and a local LLaMA 3 model via Ollama — no API keys, no cloud.",
    tags: ["LangChain", "FAISS", "HuggingFace", "Ollama", "Python", "RAG"],
    link: "https://github.com/rohann-hub/DocuMind-AI",
    github: "https://github.com/rohann-hub/DocuMind-AI",
    color: "#7C3AED"
  },
  {
    id: "04",
    featured: false,
    title: "Insurance Premium Prediction",
    description: "A FastAPI-based ML service that predicts insurance premium categories (Low / Medium / High) from user inputs like age, BMI, income, smoking status, and city tier. Features automatic feature engineering and Pydantic-validated clean JSON responses.",
    tags: ["FastAPI", "Scikit-learn", "Python", "Pydantic", "ML", "REST API"],
    link: "https://github.com/rohann-hub/Insurance_Premium_Prediction",
    github: "https://github.com/rohann-hub/Insurance_Premium_Prediction",
    color: "#059669"
  }
];

export function Projects() {
  return (
    <section id="projects" className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
          Work
        </h2>
        <a href="https://github.com/rupjit-shil" target="_blank" rel="noreferrer" className="text-xl font-black uppercase hover:underline">
          View all repositories →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projectList.map((project) => (
          <div 
            key={project.id}
            className="group relative flex flex-col md:flex-row border-4 border-black bg-white hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0_0_#000]"
          >
            <div 
              className="w-full md:w-2/5 aspect-video md:aspect-auto border-b-4 md:border-b-0 md:border-r-4 border-black overflow-hidden flex items-center justify-center font-black text-6xl text-white"
              style={{ backgroundColor: project.color }}
            >
              {project.title.charAt(0)}
            </div>
            
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest">{project.id} // CASE_STUDY</span>
                  {project.featured && <span className="bg-[#FFE500] border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase">Featured</span>}
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-lg font-bold leading-tight">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border-2 border-black px-3 py-1 text-[10px] font-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white px-6 py-4 font-black uppercase tracking-widest text-xs hover:bg-[#FFE500] hover:text-black transition-colors border-2 border-black flex items-center justify-center gap-2">
                  Launch Project <ExternalLink size={16} />
                </button>
                <button className="bg-white text-black border-2 border-black p-4 hover:bg-black hover:text-white transition-colors">
                  <Github size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
