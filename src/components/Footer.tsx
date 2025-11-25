
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -top-64 -right-64 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary flex items-center">
              <span className="relative font-bold text-white">
                <span className="relative z-10">SR</span>
                <span className="absolute -inset-1 bg-primary rounded-md blur-sm z-0"></span>
              </span>
            </a>
            <p className="text-muted-foreground mt-3 max-w-md">
              Full-Stack Developer specializing in creating robust, scalable web applications with exceptional user experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="mailto:sallu2004mkt@gmail.com" 
                className="bg-card/80 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors border border-white/5"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+918590050875" 
                className="bg-card/80 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors border border-white/5"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/salmanrasheedm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-card/80 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/sallu09876" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-card/80 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors border border-white/5"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Salman Rasheed. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="w-full h-px bg-white/5 my-8"></div>
        
        <div className="text-center text-sm text-muted-foreground">
          Designed and developed with passion and precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

