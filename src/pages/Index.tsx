
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Code, Database, Download, Github, Linkedin, Mail, Phone, ShoppingCart, FileCode, MonitorSmartphone, ArrowUp, Server, Wrench } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Index = () => {
  const { toast } = useToast();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Salman-Rasheed-Resume.pdf';
    link.download = 'Salman-Rasheed-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded",
      description: "Thank you for your interest in my resume!"
    });
  };
  
  return <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-64 -right-64 z-0"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl -bottom-64 -left-64 z-0"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Software Engineer Intern at Sinnonteq
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hello, I'm <span className="text-primary">Salman Rasheed</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  Full Stack Developer (MERN) | Software Engineer Intern at Sinnonteq
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg">
                Full Stack Developer specializing in the MERN stack with hands-on experience building scalable web applications, REST APIs, and responsive user interfaces. Currently working as a Software Engineer Intern at Sinnonteq, contributing to production-level systems and real-world software solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#portfolio" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Contact Me
                </a>
              </div>
              
              <div className="pt-8 flex items-center gap-6">
                <a href="https://linkedin.com/in/salmanrasheedm" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/sallu09876" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Profile image with gradient border */}
                <div className="gradient-border w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={profilePhoto} alt="Salman Rasheed" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 bg-primary/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="section-title">Know Me Better</h2>
            <p className="section-subtitle">My background and skill set</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-6">
                I am a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience building modern web applications from frontend interfaces to backend services.
              </p>
              <p className="text-muted-foreground mb-6">
                Currently working as a Software Engineer Intern at Sinnonteq, where I contribute to backend services, system architecture, and documentation including BRD analysis and SRS preparation.
              </p>
              <p className="text-muted-foreground mb-6">
                Previously completed a MERN Stack internship at Techolas Technologies where I developed responsive React interfaces, integrated REST APIs, and worked with MongoDB databases.
              </p>
              <p className="text-muted-foreground">
                I enjoy building scalable, clean, and user-focused applications that solve real-world problems.
              </p>
              
              <div className="mt-8">
                <a href="#" className="btn-outline" onClick={handleDownloadResume}>
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Code size={24} />
                    <h4 className="font-semibold text-lg">Frontend</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      HTML, CSS, JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      React.js, Redux
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Bootstrap, Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Mobile-First Design
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Server size={24} />
                    <h4 className="font-semibold text-lg">Backend</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Node.js, Express.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      REST APIs, JWT Auth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Role-Based Authorization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Security Headers
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Database size={24} />
                    <h4 className="font-semibold text-lg">Databases</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      MongoDB, Mongoose ODM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      MySQL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Schema Design & Indexing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Database Transactions
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Wrench size={24} />
                    <h4 className="font-semibold text-lg">Tools & Concepts</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Git, GitHub, VS Code
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Docker, Docker Compose
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      MVC Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      HTTP-only Cookies
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              Experience
            </div>
            <h2 className="section-title">Professional Journey</h2>
            <p className="section-subtitle">My work experience and contributions</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-primary/20"></div>
              
              {/* Experience 1 - Sinnonteq */}
              <div className="relative flex gap-6 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <Briefcase className="text-primary" size={20} />
                </div>
                
                <div className="flex-1">
                  <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">Software Engineer Intern</h3>
                      <span className="text-sm text-primary font-medium">Feb 2026 – Present</span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      <a href="https://sinnonteq.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sinnonteq</a> — Calicut
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Contributing to a Customer Engagement Platform, working on backend services and scalable architecture with cross-functional teams.
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Working on a Customer Engagement Platform
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Contributing to backend services and scalable architecture
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Writing BRD analysis and SRS documentation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Designing MongoDB schemas and backend logic
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Collaborating with cross-functional development teams
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Node.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Express.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MongoDB</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">REST APIs</span>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Experience 2 - Techolas */}
              <div className="relative flex gap-6 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <Briefcase className="text-primary" size={20} />
                </div>
                
                <div className="flex-1">
                  <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">MERN Stack Intern</h3>
                      <span className="text-sm text-primary font-medium">Jun 2025 – Feb 2026</span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      <a href="https://techolas.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Techolas Technologies</a> — Calicut
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Developed responsive React.js interfaces, integrated REST APIs, and implemented MongoDB CRUD operations in real client projects.
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Developed responsive React.js user interfaces
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Integrated REST APIs using Node.js and Express.js
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Implemented MongoDB CRUD operations
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Practiced debugging, version control, and development workflows
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Node.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Express.js</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MongoDB</span>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              Portfolio
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - MedFlow (Featured) */}
            <div className="project-card group animate-fade-in md:col-span-2" style={{ animationDelay: '0.1s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop" alt="MedFlow – Hospital Appointment & EMR Management System" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-medium mb-3">
                    ⭐ Featured Project
                  </div>
                  <h3 className="text-xl font-bold mb-2">MedFlow – Hospital Appointment & EMR Management System</h3>
                  <p className="text-muted-foreground mb-4">
                    A full-stack MERN application featuring doctor and receptionist management, dynamic appointment slot booking, Electronic Medical Records (EMR), secure JWT authentication, role-based access control, and backend APIs with MongoDB schema design.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MongoDB</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Express.js</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React.js</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JWT Auth</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">RBAC</span>
                  </div>
                  
                  <a href="https://mern-emr-app.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - TechVerse */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&auto=format&fit=crop" alt="TechVerse – Tech Gadgets Ecom Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">TechVerse – Tech Gadgets Ecommerce Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Built a responsive React application with reusable components, state management, and JSON Server integration to simulate an e-commerce product system.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">State Management</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JSON Server</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Responsive Design</span>
                  </div>
                  
                  <a href="https://tech-verse-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 3 - WebDevPro */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" alt="WebDevPro – Web Service Agency Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">WebDevPro – Web Service Agency Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Developed a modern React website using reusable components, API integrations, and responsive layouts to showcase digital services.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JavaScript</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">API Integration</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Responsive Design</span>
                  </div>
                  
                  <a href="https://react-web-dev-pro.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 4 - CloudWay */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop" alt="CloudWay – Trip Package Booking Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">CloudWay – Trip Package Booking Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Created a responsive travel booking website using HTML, CSS, and JavaScript with smooth navigation and cross-device compatibility.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">HTML5</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">CSS3</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JavaScript</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Mobile-Friendly</span>
                  </div>
                  
                  <a href="https://sallu09876.github.io/PROJECT-TRIP/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              Certificates
            </div>
            <h2 className="section-title">Certifications & Achievements</h2>
            <p className="section-subtitle">Professional credentials and recognitions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-8 border border-white/5 bg-card/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-primary" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">MERN Stack Internship Certificate</h3>
                  <p className="text-primary font-medium mb-2">Techolas Technologies</p>
                  <p className="text-muted-foreground">
                    Successfully completed a comprehensive MERN Stack internship covering full-stack web development with MongoDB, Express.js, React.js, and Node.js.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border border-white/5 bg-card/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileCode className="text-primary" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">AI Certification (STEM.org Accredited)</h3>
                  <p className="text-primary font-medium mb-2">Unique World Robotics</p>
                  <p className="text-muted-foreground">
                    Completed comprehensive AI training program accredited by STEM.org, covering fundamental concepts and practical applications of artificial intelligence.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              Services
            </div>
            <h2 className="section-title">What I Offer</h2>
            <p className="section-subtitle">Professional services to meet your needs</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <MonitorSmartphone className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Full Stack Web Development</h3>
              <p className="text-muted-foreground">
                End-to-end web application development using the MERN stack, delivering scalable and performant solutions.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <Code className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <p className="text-muted-foreground">
                Crafting responsive, accessible, and pixel-perfect interfaces using React.js, Tailwind CSS, and modern frontend tools.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <Server className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-muted-foreground">
                Building robust server-side applications with Node.js, Express.js, REST APIs, and secure authentication systems.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <Briefcase className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Software Development</h3>
              <p className="text-muted-foreground">
                Developing custom software solutions with clean architecture, version control, and industry best practices.
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <ShoppingCart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Shopify Development</h3>
              <p className="text-muted-foreground">
                Building and customizing Shopify stores with optimized user flows, themes, and seamless e-commerce experiences.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <FileCode className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Web Applications</h3>
              <p className="text-muted-foreground">
                Building tailored web applications and tools to address specific business needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              Contact
            </div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Reach out for collaborations or inquiries</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 border-0 bg-card/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href="mailto:sallu2004mkt@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        sallu2004mkt@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-0 bg-card/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href="tel:+918590050875" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 8590050875
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-0 bg-card/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <a href="https://linkedin.com/in/salmanrasheedm" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        linkedin.com/in/salmanrasheedm
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-0 bg-card/80 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">GitHub</h4>
                      <a href="https://github.com/sallu09876" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        github.com/sallu09876
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="mt-12 text-center">
                <a href="#" className="btn-primary inline-flex items-center gap-2" onClick={handleDownloadResume}>
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      
      <Footer />
    </>;
};
export default Index;
