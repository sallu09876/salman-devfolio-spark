
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticCursor from '@/components/MagneticCursor';
import ScrollProgress from '@/components/ScrollProgress';
import MeshGradient from '@/components/MeshGradient';
import TiltCard from '@/components/TiltCard';
import { useToast } from '@/hooks/use-toast';
import {
  Briefcase, Code, Database, Download, Github, Linkedin, Mail, Phone,
  ShoppingCart, FileCode, MonitorSmartphone, ArrowUp, Server, Wrench,
  ExternalLink, ArrowRight,
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

// ─── Data ──────────────────────────────────────────────
const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Mobile-First'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'Validation', 'Security Headers'],
  databases: ['MongoDB', 'Mongoose ODM', 'MySQL', 'PostgreSQL', 'pg (node-postgres)', 'Connection Pooling', 'Schema Design', 'Transactions', 'Indexing'],
  tools: ['VS Code', 'Thunder Client', 'Git', 'GitHub', 'Docker & Docker Compose', 'Vercel', 'Render', 'MVC Architecture', 'API Integration', 'HTTP-only Cookies', 'CI/CD Deployment Workflows'],
};

const projects = [
  {
    title: 'MedFlow',
    subtitle: 'Hospital Appointment & EMR System',
    description: 'Full-stack MERN application with doctor/receptionist management, dynamic appointment booking, EMR, JWT auth, and role-based access control.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'RBAC'],
    link: 'https://mern-emr-app.vercel.app',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'TechVerse',
    subtitle: 'Tech Gadgets Ecommerce',
    description: 'Responsive React app with reusable components, state management, and JSON Server integration for e-commerce simulation.',
    tags: ['React', 'State Management', 'JSON Server'],
    link: 'https://tech-verse-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&auto=format&fit=crop',
  },
  {
    title: 'WebDevPro',
    subtitle: 'Web Service Agency',
    description: 'Modern React website with reusable components, API integrations, and responsive layouts for digital services.',
    tags: ['React', 'JavaScript', 'API Integration'],
    link: 'https://react-web-dev-pro.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  },
  {
    title: 'FinSight',
    subtitle: 'Finance Tracker Dashboard',
    description: 'Modern responsive React dashboard to track finances through analytics, graphs, and real-time insights.',
    tags: ['React', 'Charts', 'Analytics', 'Dashboard'],
    link: 'https://finance-dashboard-ui-flame-theta.vercel.app/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  },
  {
    title: 'CloudWay',
    subtitle: 'Trip Package Booking',
    description: 'Responsive travel booking website with smooth navigation and cross-device compatibility.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://sallu09876.github.io/PROJECT-TRIP/',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
  },
];

const services = [
  { icon: MonitorSmartphone, title: 'Full Stack Web Dev', desc: 'End-to-end MERN stack applications, from database design to polished UI.' },
  { icon: Code, title: 'Frontend Development', desc: 'Responsive, accessible interfaces with React.js and modern CSS frameworks.' },
  { icon: Server, title: 'Backend Development', desc: 'Robust Node.js/Express APIs with authentication and security best practices.' },
  { icon: Briefcase, title: 'Software Development', desc: 'Clean architecture, version control, and industry-standard workflows.' },
  { icon: ShoppingCart, title: 'Shopify Development', desc: 'Custom Shopify stores with optimized user flows and e-commerce experiences.' },
  { icon: FileCode, title: 'Custom Web Apps', desc: 'Tailored applications to solve specific business challenges.' },
];

// ─── Component ──────────────────────────────────────────
const Index = () => {
  const { toast } = useToast();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: hScrollProgress } = useScroll({
    target: horizontalContainerRef,
    offset: ['start start', 'end end'],
  });

  const xTranslate = useTransform(hScrollProgress, [0, 1], ['0%', `-${(projects.length - 1) * 100 / projects.length}%`]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Salman-Rasheed-Resume.pdf';
    link.download = 'Salman-Rasheed-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({ title: 'Resume Downloaded', description: 'Thank you for your interest!' });
  };

  return (
    <>
      <MagneticCursor />
      <ScrollProgress />
      <MeshGradient />
      <Navbar />

      {/* ─── HERO ─── */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5 space-y-8">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Software Engineer Intern at Sinnonteq
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  Hello, I'm{' '}
                  <span className="gradient-text-accent">Salman</span>
                  <br />
                  <span className="text-muted-foreground">Rasheed</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Software Developer specializing in the MERN stack — architecting and shipping production-ready applications across SaaS, B2B platforms, healthcare systems, e-commerce, and service-based websites.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#portfolio"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]"
                  >
                    View My Work
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-border font-medium text-sm text-foreground transition-colors hover:text-primary"
                  >
                    Contact Me
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-center gap-4 pt-4">
                  {[
                    { href: 'https://linkedin.com/in/salmanrasheedm', icon: Linkedin },
                    { href: 'https://github.com/sallu09876', icon: Github },
                  ].map(({ href, icon: Icon }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="w-full lg:w-2/5 flex justify-center" delay={0.2} direction="right">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass glow-border">
                  <img src={profilePhoto} alt="Salman Rasheed" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={320} height={320} />
                </div>
                <div className="absolute -z-10 inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">About</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-16 tracking-tight">
              Know Me<span className="text-primary">.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Software Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience architecting and shipping production-ready applications from responsive frontends to scalable backend systems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working as a Software Engineer Intern at Sinnonteq, contributing to backend services, system architecture, and documentation including BRD analysis and SRS preparation.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground leading-relaxed">
                  Previously completed a MERN Stack internship at Techolas Technologies — developing responsive React interfaces, integrating REST APIs, and working with MongoDB databases.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <button
                  onClick={handleDownloadResume}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-border font-medium text-sm text-foreground hover:text-primary transition-colors mt-4"
                >
                  <Download size={16} />
                  Download Resume
                </button>
              </ScrollReveal>
            </div>

            {/* Skills Bento */}
            <div className="grid grid-cols-2 gap-3">
              {([
                { label: 'Frontend', icon: Code, items: skills.frontend },
                { label: 'Backend', icon: Server, items: skills.backend },
                { label: 'Databases', icon: Database, items: skills.databases },
                { label: 'Tools', icon: Wrench, items: skills.tools },
              ] as const).map(({ label, icon: Icon, items }, i) => (
                <ScrollReveal key={label} delay={0.1 + i * 0.08}>
                  <TiltCard className="glass rounded-2xl p-5 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={16} className="text-primary" />
                      <h4 className="font-display font-semibold text-sm">{label}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map(skill => (
                        <span key={skill} className="text-[11px] px-2 py-1 rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-28 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Experience</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-16 tracking-tight">
              Professional Journey<span className="text-primary">.</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                role: 'Software Engineer Intern',
                company: 'Sinnonteq',
                companyLink: 'https://sinnonteq.com/',
                location: 'Calicut',
                period: 'Feb 2026 – Present',
                current: true,
                desc: 'Leading end-to-end development of a full-stack B2B SaaS platform across React, Node.js, and PostgreSQL.',
                responsibilities: [
                  'Developing a full-stack B2B SaaS platform independently, managing end-to-end development across React, Node.js, and PostgreSQL',
                  'Engineered production-grade REST APIs with MVC architecture, JWT auth, and migrated database from MongoDB to PostgreSQL for stronger data integrity',
                  'Built a real-time React dashboard with revenue metrics, lead pipeline, and team monitoring driving enterprise-level decision-making',
                  'Led full technical execution solo — from BRD/SRS to a scalable, multi-module B2B platform ready for production',
                ],
                tags: ['Node.js', 'Express.js', 'PostgreSQL', 'React.js', 'REST APIs', 'JWT', 'MVC'],
              },
              {
                role: 'MERN Stack Intern',
                company: 'Techolas Technologies',
                companyLink: 'https://techolas.com/',
                location: 'Calicut',
                period: 'Jun 2025 – Feb 2026',
                current: false,
                desc: 'Engineered responsive frontends and production-ready REST APIs across MongoDB and PostgreSQL stacks.',
                responsibilities: [
                  'Engineered responsive, high-performance web interfaces using React.js with modern JavaScript (ES6+) and Tailwind CSS',
                  'Designed and deployed production-ready RESTful APIs using Node.js and Express.js with MVC architecture and JWT-based security',
                  'Architected and migrated database layers across MongoDB and PostgreSQL, implementing schema design, CRUD operations, and connection pooling',
                  'Drove end-to-end development independently — from debugging complex systems to managing full version control workflows in a real production environment',
                ],
                tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT'],
              },
            ].map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.15}>
                <TiltCard className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full mt-2 sm:mt-0 w-max ${exp.current ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/[0.04] text-muted-foreground'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">
                    {exp.company} — {exp.location}
                  </a>
                  <p className="text-muted-foreground text-sm mt-3 mb-4">{exp.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.responsibilities.map(r => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary">{tag}</span>
                    ))}
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORKS — Horizontal Scroll ─── */}
      <section id="portfolio" className="relative">
        <div className="container mx-auto px-6 pt-28 pb-8">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 tracking-tight">
              Selected Works<span className="text-primary">.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div ref={horizontalContainerRef} style={{ height: `${projects.length * 100}vh` }} className="relative">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div
              ref={horizontalRef}
              className="flex gap-8 pl-6 md:pl-[calc((100vw-1400px)/2+2rem)]"
              style={{ x: xTranslate, width: `${projects.length * 90}vw` }}
            >
              {projects.map((project, i) => (
                <ScrollReveal key={project.title} delay={0} className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]">
                  <TiltCard className="glass rounded-2xl overflow-hidden h-full group">
                    <div className="relative overflow-hidden aspect-video">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 text-[10px] font-medium px-3 py-1 rounded-full bg-primary/90 text-primary-foreground">
                          ⭐ Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] text-muted-foreground border border-white/[0.06]">{tag}</span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all duration-300"
                      >
                        View Project <ExternalLink size={14} />
                      </a>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATES ─── */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Certificates</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-16 tracking-tight">
              Certifications<span className="text-primary">.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { title: 'MERN Stack Internship Certificate', org: 'Techolas Technologies', icon: Briefcase },
              { title: 'AI Certification (STEM.org Accredited)', org: 'Unique World Robotics', icon: FileCode },
            ].map((cert, i) => (
              <ScrollReveal key={cert.title} delay={i * 0.1}>
                <TiltCard className="glass rounded-2xl p-6 h-full">
                  <cert.icon size={20} className="text-primary mb-4" />
                  <h3 className="font-display font-bold mb-1">{cert.title}</h3>
                  <p className="text-primary text-sm font-medium">{cert.org}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-16 tracking-tight">
              What I Offer<span className="text-primary">.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <TiltCard className="glass rounded-2xl p-6 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Contact</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 tracking-tight">
              Get In Touch<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mb-16 max-w-md">
              Reach out for collaborations, freelance work, or just to say hello.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Mail, label: 'Email', value: 'sallu2004mkt@gmail.com', href: 'mailto:sallu2004mkt@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 8590050875', href: 'tel:+918590050875' },
              { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/salmanrasheedm', href: 'https://linkedin.com/in/salmanrasheedm' },
              { icon: Github, label: 'GitHub', value: 'github.com/sallu09876', href: 'https://github.com/sallu09876' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass rounded-2xl p-5 flex items-center gap-4 group hover:glow-border transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <button
                onClick={handleDownloadResume}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scroll to top */}
      <div className="fixed left-1/2 bottom-5 z-50 -translate-x-1/2 md:left-auto md:bottom-auto md:right-5 md:top-1/2 md:translate-x-0 md:-translate-y-1/2">
        <motion.button
          onClick={() => {
            const top = document.getElementById('home');
            if (top) top.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full glass glow-border flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg shadow-black/40 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0.8,
            y: showScrollTop ? 0 : 10,
          }}
          transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>

      <Footer />
    </>
  );
};

export default Index;
