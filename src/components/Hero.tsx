import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import architaPhoto from "@/assets/archita-photo.png";

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Archita Jain";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pop/20 rounded-full animate-float blur-xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-highlight/15 rounded-full animate-float-delayed blur-2xl" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-secondary/30 rounded-full animate-float-slow blur-lg" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pop/25 animate-blob" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/15 rounded-full animate-float blur-xl" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-20 w-8 h-8 border-4 border-primary-foreground/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-40 right-1/3 w-12 h-12 border-4 border-pop/30 rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-highlight/30 rotate-12 animate-float-delayed" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center">
        {/* Photo */}
        <div className="relative mb-8 animate-scale-in">
          <div className="absolute inset-0 bg-pop/30 rounded-full blur-2xl scale-110 animate-blob" />
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary-foreground/60 shadow-glow">
            <img
              src={architaPhoto}
              alt="Archita Jain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name with typing effect and cursive font */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cursive italic text-primary-foreground mb-4 animate-fade-in min-h-[1.2em]" style={{ animationDelay: "0.2s" }}>
          {displayedName}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/85 font-body font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Exploring AI, ML & Data Science
        </p>

        <p className="max-w-2xl text-primary-foreground/70 text-lg mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
          B.Tech CSE (AI/ML) at PES University & BS Data Science at IIT Madras. 
          Passionate about building intelligent systems that make a real impact.
        </p>

        {/* Social links */}
        <div className="flex gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="mailto:archita.29.jain@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground rounded-full font-medium border border-primary-foreground/25 transition-all duration-300 hover:bg-primary-foreground/25 hover:scale-105"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Say Hello
          </a>
          <a
            href="https://linkedin.com/in/archita-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/archita-jain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
