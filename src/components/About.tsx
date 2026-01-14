import { GraduationCap, Award, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-pop/20 rounded-full blur-2xl" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* About text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A motivated and adaptable student who enjoys exploring new projects and opportunities. 
              Organized and dependable, I approach tasks with a positive mindset and a willingness to learn.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I work well in team settings, handle multiple responsibilities efficiently, 
              and stay committed to delivering meaningful contributions. Currently pursuing dual degrees 
              in AI/ML and Data Science from two of India's premier institutions.
            </p>

            {/* Quick stat */}
            <div className="pt-4">
              <div className="inline-block p-4 bg-card rounded-2xl shadow-card border border-border">
                <div className="text-3xl font-bold text-gradient">8.93</div>
                <div className="text-sm text-muted-foreground">CGPA at PESU</div>
              </div>
            </div>
          </div>

          {/* Education & Achievements cards */}
          <div className="space-y-6">
            {/* Education */}
            <div className="p-6 bg-card rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">B.Tech CSE (AI/ML)</p>
                    <p className="text-sm text-muted-foreground">PES University</p>
                  </div>
                  <span className="px-3 py-1 bg-highlight/10 text-highlight text-sm font-medium rounded-full">8.93 CGPA</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">BS Data Science</p>
                    <p className="text-sm text-muted-foreground">IIT Madras (Online)</p>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">7.71 CGPA</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6 bg-card rounded-3xl shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-pop/20 rounded-xl">
                  <Award className="w-6 h-6 text-pop-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold">Achievements</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-pop flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">JPMC Code For Good 2025 Hackathon Winner</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-pop flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">3x CNR Scholarship Recipient (Top 20%)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-pop flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">97.33% in Class 12 • 98.56% in Class 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
