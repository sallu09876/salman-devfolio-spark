
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-xl font-bold tracking-tight text-foreground">
              SR<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-3 max-w-sm">
              Full-Stack Developer building robust, scalable web applications with the MERN stack.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {[
              { href: 'mailto:sallu2004mkt@gmail.com', icon: Mail, label: 'Email' },
              { href: 'tel:+918590050875', icon: Phone, label: 'Phone' },
              { href: 'https://linkedin.com/in/salmanrasheedm', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://github.com/sallu09876', icon: Github, label: 'GitHub' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="h-px bg-white/[0.06] my-8" />
        
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear} Salman Rasheed. Crafted with precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
