import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            © 2025 Archita Jain. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-background/70">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
