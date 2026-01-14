import { ExternalLink, Brain, Database, Cpu, MessageSquare, Clock, Leaf } from "lucide-react";

const projects = [
  {
    title: "Multi-Task Face Analysis",
    category: "Deep Learning",
    icon: Brain,
    color: "from-primary to-highlight",
    description: "Multi-task DL model in PyTorch for joint age/gender prediction. Fine-tuned ResNet34 achieving 8.46 RMSE (Age) and 0.91 F1 (Gender).",
    tags: ["PyTorch", "Computer Vision", "ResNet34"],
  },
  {
    title: "Post-Hoc BERT Debiasing",
    category: "NLP",
    icon: MessageSquare,
    color: "from-highlight to-primary",
    description: "Post-hoc debiasing framework for BERT using LoRA (<1% params). Achieved 47% intrinsic bias score and 81.9% accuracy recovery.",
    tags: ["NLP", "LoRA", "BERT", "PyTorch"],
  },
  {
    title: "Cinema Demand Forecasting",
    category: "Time-Series ML",
    icon: Clock,
    color: "from-accent/80 to-primary",
    description: "End-to-end forecasting pipeline for 800+ theaters. Stacking ensemble (RF, XGBoost, LightGBM → Ridge) achieving 0.58 R².",
    tags: ["Time-Series", "XGBoost", "Ensemble"],
  },
  {
    title: "FadFashion Analytics",
    category: "Generative AI",
    icon: Cpu,
    color: "from-primary to-accent/70",
    description: "AI clothing analysis pipeline using Gemini and Groq. Simulated consumer personas for style-based product feedback and automated PDF reports.",
    tags: ["Gemini", "Groq", "Analytics"],
  },
  {
    title: "MediQuick E-Pharmacy",
    category: "Backend Systems",
    icon: Database,
    color: "from-highlight to-accent/80",
    description: "MySQL-based order splitting across pharmacies by stock and distance. Doctor verification for restricted medicines with role-based workflows.",
    tags: ["MySQL", "Flask", "Backend"],
  },
  {
    title: "Urban Air Pollution Study",
    category: "Causal ML",
    icon: Leaf,
    color: "from-primary/90 to-highlight",
    description: "Double Machine Learning (EconML) to estimate causal impact of public events on air quality. Identified strong Diwali pollution shock (Z > 25).",
    tags: ["Causal ML", "EconML", "Analytics"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pop/10 rounded-full blur-2xl" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my work spanning deep learning, NLP, backend systems, and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-3xl shadow-card border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                <div className="absolute top-4 right-4 p-3 bg-primary-foreground/20 backdrop-blur-sm rounded-xl">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay link */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-foreground text-foreground rounded-full font-medium text-sm hover:scale-105 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
