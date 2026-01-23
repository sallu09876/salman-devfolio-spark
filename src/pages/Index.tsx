
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Code, Database, Download, Github, Linkedin, Mail, Phone, ShoppingCart, FileCode, MonitorSmartphone, ArrowUp } from 'lucide-react';
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
                  MERN Stack Intern at Techolas Technologies
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hello, I'm <span className="text-primary">Salman Rasheed</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                  MERN Stack Developer | Currently interning at Techolas Technologies
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg">
                BCA graduate currently pursuing a MERN Stack internship at Techolas Technologies. 
                Passionate about creating responsive, user-friendly web applications with modern technologies. 
                Let's build something amazing together.
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
                Enthusiastic and detail-oriented MERN Stack Developer currently pursuing full-stack development with hands-on 
                experience in MongoDB, Express.js, React.js, and Node.js. Successfully completed the Frontend Development phase, 
                mastering HTML, CSS, JavaScript (ES6+), React.js, and responsive web design.
              </p>
              <p className="text-muted-foreground mb-6">
                Passionate about building scalable, user-focused web applications and continuously improving technical and 
                problem-solving skills through real-world projects and internships. Currently gaining hands-on experience at 
                Techolas Technologies, where I'm working on real client projects using modern front-end practices.
              </p>
              <p className="text-muted-foreground">
                With a strong foundation in responsive design, clean code practices, and modern web technologies, I'm committed 
                to creating impactful digital solutions that enhance user experience and solve real-world challenges.
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
                    <h4 className="font-semibold text-lg">Frontend Development</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      HTML5, CSS3
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      JavaScript (ES6+)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      React.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Bootstrap
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Database size={24} />
                    <h4 className="font-semibold text-lg">Backend & Database</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Express.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      RESTful APIs
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <MonitorSmartphone size={24} />
                    <h4 className="font-semibold text-lg">Web Design</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Responsive Layouts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Mobile-First Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Cross-Browser Compatibility
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <FileCode size={24} />
                    <h4 className="font-semibold text-lg">Version Control</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Git
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      GitHub
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm sm:col-span-2">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Briefcase size={24} />
                    <h4 className="font-semibold text-lg">Soft Skills</h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Communication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Teamwork
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Adaptability
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Problem-Solving
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
            <p className="section-subtitle">My current internship and learning experience</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div className="relative flex gap-6 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <Briefcase className="text-primary" size={20} />
                </div>
                
                <div className="flex-1">
                  <Card className="p-6 border border-white/5 bg-card/80 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">MERN Stack Intern</h3>
                      <span className="text-sm text-primary font-medium">June 2025 - Present</span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Techolas Technologies - Calicut</h4>
                    <p className="text-muted-foreground mb-4">
                      Developing and maintaining front-end components using HTML, CSS, JavaScript, and React. 
                      Building responsive and user-friendly interfaces with clean, optimized code.
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Developed and maintained front-end components using HTML, CSS, JS, and React
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Built responsive and user-friendly interfaces with clean, optimized code
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Worked closely with designers to translate UI/UX concepts into functional interfaces
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Gained hands-on experience in real client projects using modern front-end practices
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">HTML5</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">CSS3</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JavaScript</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React.js</span>
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
            {/* Project 1 - TechVerse */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&auto=format&fit=crop" alt="TechVerse – Tech Gadgets Ecom Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">TechVerse – Tech Gadgets Ecom Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Built a responsive React app with reusable components, state management, and JSON server integration for optimized performance and user experience.
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
            
            {/* Project 2 - WebDevPro */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" alt="WebDevPro – Web Service Agency Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">WebDevPro – Web Service Agency Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Built a fully responsive React-based web service website with clean, modern UI components. 
                    Implemented reusable components, state management, and API integrations to enhance user experience.
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
            
            {/* Project 3 - CloudWay */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop" alt="CloudWay – Trip Package Booking Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">CloudWay – Trip Package Booking Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Developed a responsive travel booking platform using HTML, CSS, and JavaScript. 
                    Added smooth navigation, mobile-friendly layouts, and interactive UI features for booking trip packages.
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
            
            {/* Project 4 - BZone */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://miro.medium.com/v2/resize:fit:2000/1*2PsY9nv-WYINzwtXB15Pow.png" alt="BZone – College Event Management System" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">BZone – College Event Management System</h3>
                  <p className="text-muted-foreground mb-4">
                    Designed responsive front-end UI for event registration to simplify manual processes. 
                    Built role-based login interfaces with HTML, CSS, and JavaScript.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">HTML5</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">CSS3</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JavaScript</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 5 - OPCW */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img src="https://img.freepik.com/free-psd/gradient-sales-template-design_23-2151082125.jpg" alt="OPCW – Online Phone Case Customization Website" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">OPCW – Phone Case Customization Website</h3>
                  <p className="text-muted-foreground mb-4">
                    Created an interactive product preview feature using JavaScript. 
                    Ensured mobile responsiveness and improved user experience across browsers.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">JavaScript</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">HTML5</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">CSS3</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Responsive Design</span>
                  </div>
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
          
          <div className="max-w-3xl mx-auto">
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
                    Completed comprehensive AI training program accredited by STEM.org, covering fundamental concepts 
                    and practical applications of artificial intelligence.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <span className="font-medium">Duration:</span> February 2025 - March 2025
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
              <h3 className="text-xl font-bold mb-3">Full-stack Web Development</h3>
              <p className="text-muted-foreground">
                Complete web application development from frontend to backend, 
                creating seamless user experiences with modern technologies.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <Code className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Front-end Development</h3>
              <p className="text-muted-foreground">
                Crafting responsive, accessible, and user-friendly interfaces 
                using modern front-end technologies like React.js.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <Database className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Back-end Development</h3>
              <p className="text-muted-foreground">
                Building robust server-side applications with Node.js, Express, 
                Python Flask for reliable and scalable backends.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <ShoppingCart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce Website Design</h3>
              <p className="text-muted-foreground">
                Developing custom e-commerce solutions including Shopify stores 
                with optimized user flows and payment integrations.
              </p>
            </div>
            
            {/* Service 5 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <Database className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Database Management</h3>
              <p className="text-muted-foreground">
                Designing, implementing, and optimizing database systems using 
                MySQL, MongoDB, and other technologies for efficient data handling.
              </p>
            </div>
            
            {/* Service 6 */}
            <div className="service-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-primary/10 p-3 rounded-lg w-max mb-4">
                <FileCode className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Web Solutions</h3>
              <p className="text-muted-foreground">
                Building tailored web applications and tools to address specific 
                business needs and challenges.
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

