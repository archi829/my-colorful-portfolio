import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pop/30 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-highlight/20 rounded-full animate-float-delayed blur-2xl" />
      <div className="absolute top-1/2 left-1/3 w-8 h-8 border-4 border-primary-foreground/30 rotate-45 animate-spin-slow" />

      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/50 mx-auto rounded-full mb-4" />
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            I'm always excited to collaborate on interesting projects or discuss opportunities in AI/ML
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="mailto:archita.29.jain@gmail.com"
                className="group flex items-center gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="p-4 bg-primary-foreground/20 rounded-xl group-hover:bg-primary-foreground/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <p className="font-semibold text-primary-foreground">archita.29.jain@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918792878339"
                className="group flex items-center gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <div className="p-4 bg-primary-foreground/20 rounded-xl group-hover:bg-primary-foreground/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Phone</p>
                  <p className="font-semibold text-primary-foreground">+91 87928 78339</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
                <div className="p-4 bg-primary-foreground/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Location</p>
                  <p className="font-semibold text-primary-foreground">Bangalore, India</p>
                </div>
              </div>
            </div>

            {/* Social links and CTA */}
            <div className="flex flex-col justify-center items-center p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-6">
                Find Me Online
              </h3>
              
              <div className="flex gap-4 mb-8">
                <a
                  href="https://linkedin.com/in/archita-jain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-primary-foreground/20 rounded-xl hover:bg-primary-foreground hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-8 h-8 text-primary-foreground group-hover:text-foreground" />
                </a>
                <a
                  href="https://github.com/archita-jain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-primary-foreground/20 rounded-xl hover:bg-primary-foreground hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-8 h-8 text-primary-foreground group-hover:text-foreground" />
                </a>
              </div>

              <a
                href="mailto:archita.29.jain@gmail.com"
                className="group flex items-center gap-2 px-8 py-4 bg-primary-foreground text-foreground rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
