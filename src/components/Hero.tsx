import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import architaPhoto from "@/assets/archita-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pop/30 rounded-full animate-float blur-xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-highlight/20 rounded-full animate-float-delayed blur-2xl" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-secondary/40 rounded-full animate-float-slow blur-lg" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pop/40 animate-blob" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full animate-float blur-xl" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-20 w-8 h-8 border-4 border-primary-foreground/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-40 right-1/3 w-12 h-12 border-4 border-pop/50 rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-highlight/40 rotate-12 animate-float-delayed" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        {/* Photo */}
        <div className="relative mb-8 animate-scale-in">
          <div className="absolute inset-0 bg-pop/50 rounded-full blur-2xl scale-110 animate-blob" />
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary-foreground/80 shadow-glow">
            <img
              src={architaPhoto}
              alt="Archita Jain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Archita Jain
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          AI/ML Engineer • Data Scientist • Problem Solver
        </p>

        <p className="max-w-2xl text-primary-foreground/80 text-lg mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
          B.Tech CSE (AI/ML) at PES University & BS Data Science at IIT Madras. 
          Passionate about building intelligent systems that make a real impact.
        </p>

        {/* Social links */}
        <div className="flex gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="mailto:archita.29.jain@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-primary-foreground text-foreground rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Say Hello
          </a>
          <a
            href="https://linkedin.com/in/archita-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full border-2 border-primary-foreground/30 transition-all duration-300 hover:bg-primary-foreground hover:text-foreground hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/archita-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground rounded-full border-2 border-primary-foreground/30 transition-all duration-300 hover:bg-primary-foreground hover:text-foreground hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
