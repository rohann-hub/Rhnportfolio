export function Experience() {
  const experiences = [
    {
      period: "PRESENT",
      title: "B.Tech in CSE (AI & Data Science)",
      location: "TECHNO COLLEGE OF ENGINEERING AGARTALA",
      desc: "Specializing in Artificial Intelligence, Data Science and MERN Stack development. Focusing on building scalable, data-driven applications."
    },
    {
      period: "RESEARCH",
      title: "Research Intern",
      location: "NIT AGARTALA HCI & AI LAB",
      desc: "Focused on advanced computer vision using OpenCV and YOLOv8. Developed real-time detection systems and explored Human-Computer Interaction models."
    },
    {
      period: "2023",
      title: "Android Development",
      location: "NIELIT",
      desc: "Comprehensive certification in Android app development, covering lifecycle, state management, and native API integration."
    }
  ];

  return (
    <section className="space-y-16">
      <div className="flex items-center gap-6">
        <div className="flex-1 h-2 bg-black" />
        <h2 className="text-6xl font-black uppercase tracking-tighter">
          History
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="flex flex-col md:flex-row gap-8 p-8 border-4 border-black hover:bg-black hover:text-white transition-all duration-300">
              <div className="md:w-1/4">
                <span className="text-4xl font-black uppercase tracking-tighter leading-none bg-[#FFE500] text-black px-2 inline-block">
                  {exp.period}
                </span>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">{exp.title}</h3>
                  <p className="text-lg font-black uppercase tracking-widest text-[#FF70A6]">{exp.location}</p>
                </div>
                <p className="text-lg font-bold leading-tight opacity-80">
                  {exp.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
