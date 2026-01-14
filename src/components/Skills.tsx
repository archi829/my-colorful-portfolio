import { Code2, Brain, Database, Wrench, Cloud, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "bg-primary/10 text-primary",
    skills: ["Python", "C++", "SQL"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "bg-accent/10 text-accent",
    skills: ["Generative AI", "RAG", "Agentic Systems", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Data Tools",
    icon: Database,
    color: "bg-highlight/10 text-highlight",
    skills: ["Pandas", "MySQL", "MongoDB"],
  },
  {
    title: "Frameworks",
    icon: Wrench,
    color: "bg-pop/20 text-pop-foreground",
    skills: ["Flask", "Streamlit", "Gradio"],
  },
  {
    title: "Cloud & Certs",
    icon: Cloud,
    color: "bg-secondary text-secondary-foreground",
    skills: ["Oracle OCI (Certified)", "Agentic Systems 101"],
  },
  {
    title: "Dev Tools",
    icon: Cpu,
    color: "bg-primary/10 text-primary",
    skills: ["Git", "VS Code", "Google Colab"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-card rounded-3xl shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
