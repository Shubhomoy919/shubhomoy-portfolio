import React, { useState, useEffect, useRef } from 'react';

// --- CUSTOM HOOK: SCROLL ANIMATIONS ---
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return [domRef, isVisible];
};

// --- REUSABLE ANIMATED COMPONENT ---
const RevealSection = ({ children, className = "", delay = "0ms" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

const App = () => {
  // --- MOUSE SPOTLIGHT ENGINE ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- DATA ARSENAL ---
  const skills = [
    { 
      category: "Theoretical & Core CS", 
      color: "from-amber-400 to-orange-600", 
      items: [
        "Data Structures & Algorithms: Advanced complexity optimization", 
        "Operating Systems & DBMS: Concurrency, ACID properties, indexing", 
        "Computer Networks & Architecture: TCP/IP, socket programming", 
        "Compiler Design & Theory of Computation: State machines & parsing",
        "Software Architecture & OOAD: Scalable modular system design"
      ] 
    },
    { 
      category: "Advanced AI, ML & DL", 
      color: "from-indigo-400 to-violet-600", 
      items: [
        "Generative AI & Agentic Workflows: Multi-agent automation frameworks", 
        "Deep Learning: Neural network training, fine-tuning, & LLM integration", 
        "Python Data Science Libraries: Pandas, NumPy, Scikit-learn", 
        "Computational Pipelines: Statistical modeling & bioinformatics processing"
      ] 
    },
    { 
      category: "Modern Full-Stack Engineering", 
      color: "from-emerald-400 to-teal-600", 
      items: [
        "Language Mastery: C, C++, Java, Python, JavaScript (ES6+)", 
        "Frontend Engineering: React, Next.js, HTML5, Advanced CSS Architecture", 
        "Backend Infrastructure: RESTful APIs, asynchronous services, authentication", 
        "Database Modeling: Relational schema optimization & state management"
      ] 
    }
  ];

  // --- SCALABLE PROJECTS ARRAY (Easily add more projects here later!) ---
  const projects = [
    {
      title: "Bodd AI: DAG Workspace",
      category: "Generative AI & Graph Theory",
      desc: "Engineered a next-generation AI workspace that replaces traditional linear chat with a Directed Acyclic Graph (DAG) topology. This allows users to construct, branch, and merge complex, multi-threaded reasoning paths without context truncation.",
      tags: ["React 18", "Vite", "Node.js", "Google GenAI SDK", "React Flow", "Framer Motion"],
      highlights: [
        { title: "Algorithmic DAG Safety", color: "amber", text: "Implemented Kahn's Topological Sorting and DFS ancestor traversal to mathematically guarantee graph state integrity and prevent cyclical corruption." },
        { title: "Zero-Latency Real-Time SSE", color: "indigo", text: "Architected an Express.js backend utilizing Server-Sent Events (SSE) for dynamic token-by-token streaming from Gemini models." },
        { title: "Dynamic Token Optimization", color: "emerald", text: "Engineered a contextual compression algorithm that achieves a 75%+ reduction in token payload while maintaining complete context retention." }
      ],
      github: "https://github.org/Shubhomoy919/Bodd-2",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      accentColor: "from-amber-400 to-orange-500"
    },
    {
      title: "GreenTravel: Decarbonizing Corporate Travel",
      category: "Machine Learning & Process Mining",
      desc: "Acted as a Sustainability Data Consultant to analyze historical travel datasets, pinpoint process bottlenecks, and enforce strategic modal shifts to architect a data-backed roadmap for achieving corporate Net-Zero emissions by 2030.",
      tags: ["Python (Pandas, NumPy)", "Scikit-Learn", "Celonis", "Jupyter", "Data Architecture"],
      highlights: [
        { 
          title: "Relational Data Architecture", 
          text: "Engineered a robust pipeline linking complex CSV datasets (Trip Data, Event Logs, and Attributes) to map the complete lifecycle of corporate travel behaviors and timestamps." 
        },
        { 
          title: "Process Mining (Celonis)", 
          text: "Ingested event logs into Celonis enterprise software to act as a business 'X-ray', uncovering critical deviations between corporate travel policy and actual employee behaviors, such as bypassing pre-approvals." 
        },
        { 
          title: "Predictive ML Engine", 
          text: "Utilized Scikit-Learn to develop machine learning algorithms that forecast future trip carbon outputs and classify which specific journeys were mathematically eligible for a low-carbon modal shift." 
        },
        { 
          title: "Root Cause & Business Impact", 
          text: "Consolidated disconnected logs to visualize a 178M kg CO2e footprint, identifying the Sales department's short-haul flights as the primary hotspot. Proscribed a data-backed shift to rail for trips under 400km, projecting an 85% per-trip emissions reduction." 
        }
      ],
      github: "https://github.com/Shubhomoy919/capstone-project_iit_guwahati",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      accentColor: "from-emerald-400 to-teal-500"
    },
    {
      title: "Decodelabs: GenAI Engine Suite",
      category: "Production Internship Portfolio",
      desc: "A comprehensive suite of production-grade generative AI systems spanning multi-turn conversational agents, static code review engines, and automated multi-modal content pipelines.",
      tags: ["Python", "Google Gemini API", "Modular Architecture", "Environment Security"],
      highlights: [
        { title: "Context-Aware Memory Chatbot", color: "indigo", text: "Conversational AI agent engineered with state retention and dynamic prompt buffers using Google Gemini API to preserve long-term context." },
        { title: "Multi-Language AI Code Reviewer", color: "emerald", text: "Automated static code analysis assistant performing bug detection and performance suggestions across Python, Java, and JavaScript." },
        { title: "Cross-Platform Marketing & Image Generation", color: "amber", text: "Generative copywriting pipelines and multi-modal image generation workflows with automated asset persistence." }
      ],
      github: "https://github.org/Shubhomoy919/decodelabs_tasks",
      badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
      accentColor: "from-indigo-400 to-violet-500"
    }
    /* 
      Want to add another project later? Just copy the block below and paste it inside this array:
      {
        title: "Your New Project Name",
        category: "Domain / Category",
        desc: "Description of your new project...",
        tags: ["Tech 1", "Tech 2"],
        highlights: [
          { title: "Feature 1", color: "amber", text: "Explanation..." }
        ],
        github: "https://github.org/...",
        badgeColor: "border-teal-500/30 bg-teal-500/10 text-teal-400",
        accentColor: "from-teal-400 to-cyan-500"
      }
    */
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* --- INJECTED CLASSY LUXURY STYLES --- */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-25px) scale(1.03); } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-bg-shift { background-size: 200% 200%; animation: gradient-shift 8s ease infinite; }
        .bg-grid-luxury { background-size: 60px 60px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px); }
      `}</style>

      {/* --- LUXURY AMBIENT PHYSICS LIGHTING --- */}
      <div className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300" style={{ background: `radial-gradient(900px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.04), transparent 80%)` }} />
      <div className="fixed inset-0 bg-grid-luxury pointer-events-none z-0 opacity-60"></div>
      <div className="fixed top-[-15%] left-[-10%] w-[55%] h-[65%] bg-amber-600/10 blur-[180px] rounded-full mix-blend-screen pointer-events-none z-0" style={{ animation: 'float 18s ease-in-out infinite' }}></div>
      <div className="fixed bottom-[-15%] right-[-10%] w-[50%] h-[60%] bg-indigo-900/15 blur-[180px] rounded-full mix-blend-screen pointer-events-none z-0" style={{ animation: 'float 22s ease-in-out infinite reverse' }}></div>

      {/* --- CLASSY STICKY NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/60 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-extrabold text-xl tracking-tighter flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)] animate-pulse"></span>
            <span className="text-white font-mono tracking-wider">SHUBHOMOY<span className="text-amber-400">.SARKAR</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
            <a href="#manifesto" className="hover:text-amber-400 transition-colors">Manifesto</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Arsenal</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* --- 1. THE HERO ENGINE (3-LINE PROFESSIONAL BIO) --- */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 z-10 pt-20">
        <RevealSection delay="0ms">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.15)] group hover:border-amber-400/60 transition-all duration-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-amber-300 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold group-hover:text-amber-100 transition-colors">
              Systems Online • Available for Internships
            </span>
          </div>
        </RevealSection>

        <RevealSection delay="200ms">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-6 leading-[1.05]">
            <span className="block text-white mb-2 drop-shadow-2xl">Shubhomoy Sarkar</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-indigo-400 animate-bg-shift drop-shadow-[0_0_50px_rgba(245,158,11,0.3)]">
              Full Stack & AI Engineer
            </span>
          </h1>
        </RevealSection>
        
        <RevealSection delay="400ms">
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-16 font-light">
            Computer Science engineering student in the 5th semester at IIIT Kottayam, specializing in full-stack architecture, generative AI, and agentic workflows. Experienced in building production-ready applications with strong foundations in data structures, algorithms, and machine learning pipelines.
          </p>
        </RevealSection>

        <RevealSection delay="600ms">
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="#projects" className="relative group px-12 py-5 bg-amber-500 rounded-2xl font-black text-slate-950 transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-slate-950 group-hover:text-slate-950 transition-colors text-lg tracking-wider uppercase font-extrabold">Inspect Production Builds</span>
            </a>
            <a href="#contact" className="px-12 py-5 bg-slate-900/60 backdrop-blur-md rounded-2xl font-bold transition-all duration-300 border border-slate-700 hover:text-amber-400 hover:border-amber-500/50 text-lg tracking-wider uppercase flex items-center justify-center gap-3">
               Initialize Contact
            </a>
          </div>
        </RevealSection>
      </header>

      {/* --- 2. ENGINEERING MANIFESTO (CORE FOUNDATIONS & ARCHITECTURE) --- */}
      <section id="manifesto" className="relative z-10 px-6 py-32">
        <RevealSection>
          <div className="max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-[3rem] p-10 md:p-24 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-1000">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-amber-400 via-indigo-500 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white flex items-center gap-6">
              <span className="text-transparent bg-clip-text bg-linear-to-b from-amber-400 to-amber-700">/</span> Engineering Manifesto
            </h2>
            
            <div className="space-y-10 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              <p>
                Robust software engineering is rooted in unbreakable theoretical foundations and rigorous problem-solving methodologies. My development approach centers on leveraging core computer science principles to design efficient, scalable systems.
              </p>
              <p>
                My academic path at IIIT Kottayam provides deep mastery across essential computer science disciplines including Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Compiler Design, Software Architecture, Computer Organization, and Advanced Mathematics. This strong structural framework allows me to translate theoretical concepts into high-performance, production-ready code.
              </p>
              <p>
                In the application layer, I engineer scalable full-stack applications and advanced AI systems. Leveraging strong backend architectures, Python libraries, machine learning pipelines, and agentic workflows, I bridge the gap between low-level system design and high-level intelligent automation.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* --- 3. FEATURED ARCHITECTURE (SCALABLE DYNAMIC PROJECTS SECTION) --- */}
      <section id="projects" className="relative z-10 px-6 py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-32">
          
          <RevealSection>
            <div className="flex flex-col mb-16">
              <span className="text-amber-400 font-mono tracking-widest text-sm md:text-base uppercase mb-4 flex items-center gap-4">
                <span className="h-px w-12 bg-amber-500"></span> Production Builds
              </span>
              <h2 className="text-6xl md:text-7xl font-black text-white">System Architecture</h2>
            </div>
          </RevealSection>

          {/* DYNAMICALLY MAPPED PROJECTS (Easy to add more later!) */}
          {projects.map((proj, index) => (
            <RevealSection key={index} delay={`${index * 200}ms`}>
              <div className="group relative bg-slate-900/30 border border-slate-800 hover:border-amber-500/50 rounded-[3rem] p-8 md:p-16 backdrop-blur-2xl transition-all duration-700 hover:shadow-[0_30px_100px_rgba(245,158,11,0.12)] overflow-hidden">
                <div className="absolute top-[-30%] right-[-20%] w-[70%] h-full bg-amber-600/5 blur-[150px] rounded-full pointer-events-none group-hover:bg-amber-500/10 transition-all duration-1000"></div>

                <div className="relative z-10 flex flex-col xl:flex-row gap-16 items-center">
                  <div className="xl:w-1/2">
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                      <span className={`px-5 py-2 rounded-full text-xs md:text-sm font-mono font-bold tracking-widest uppercase border ${proj.badgeColor}`}>
                        {proj.category}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                      {proj.title.split(':')[0]}: <br/>
                      <span className={`text-transparent bg-clip-text bg-linear-to-r ${proj.accentColor}`}>
                        {proj.title.split(':')[1]}
                      </span>
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed mb-12 text-xl md:text-2xl font-light">
                      {proj.desc}
                    </p>

                    <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-10 py-5 bg-slate-100 text-slate-950 hover:bg-amber-400 rounded-2xl font-black text-lg transition-colors duration-300 shadow-2xl uppercase tracking-wider">
                      Inspect Architecture &rarr;
                    </a>
                  </div>

                  <div className="xl:w-1/2 w-full space-y-6">
                    {proj.highlights.map((item, idx) => (
                      <div key={idx} className="bg-[#0b0e16]/80 p-8 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-colors relative overflow-hidden group/card">
                        <div className={`absolute top-0 left-0 w-1 h-full bg-amber-500/50 group-hover/card:bg-amber-400 transition-colors`}></div>
                        <h4 className={`text-amber-400 font-bold mb-4 flex items-center gap-4 text-xl md:text-2xl`}>
                          <span className={`h-3.5 w-3.5 bg-amber-500 rounded-full shadow-[0_0_12px_currentColor] animate-pulse`}></span> {item.title}
                        </h4>
                        <p className="text-slate-300 leading-relaxed font-light text-lg">{item.text}</p>
                      </div>
                    ))}
                    
                    <div className="pt-8 flex flex-wrap gap-3">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="text-sm font-bold text-slate-300 bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-xl shadow-inner">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}

        </div>
      </section>

      {/* --- 4. ARSENAL (SKILLS) --- */}
      <section id="skills" className="relative z-10 py-32 border-t border-slate-900 bg-[#05070a]/90">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="flex flex-col items-center text-center mb-24">
              <span className="text-emerald-400 font-mono tracking-widest text-sm uppercase mb-4 flex items-center gap-4">
                 Technical Arsenal
              </span>
              <h2 className="text-6xl md:text-7xl font-black text-white">Core Competencies</h2>
            </div>
          </RevealSection>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <RevealSection key={index} delay={`${index * 200}ms`}>
                <div className="group relative bg-slate-900/30 border border-slate-800 rounded-[3rem] p-12 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:border-slate-700 h-full">
                  
                  <div className={`absolute inset-0 rounded-[3rem] bg-linear-to-b ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}></div>
                  <div className={`absolute top-0 left-0 w-full h-2 rounded-t-[3rem] bg-linear-to-r ${skill.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <h3 className="font-black text-3xl md:text-4xl mb-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-500 leading-tight">
                    {skill.category}
                  </h3>
                  
                  <ul className="space-y-8">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-300 group-hover:text-white transition-colors duration-500">
                        <span className={`h-3 w-3 mt-2 shrink-0 rounded-full bg-linear-to-r ${skill.color} mr-5 shadow-[0_0_12px_currentColor]`}></span>
                        <span className="text-lg md:text-xl leading-relaxed font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CONTACT & DEPLOYMENT --- */}
      <section id="contact" className="relative z-10 border-t border-slate-900 bg-[#030508] py-32 md:py-48">
        <RevealSection>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black mb-12 tracking-tighter text-white leading-[1.1]">
              Ready to Engineer <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-indigo-400 animate-bg-shift drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">The Future.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-400 mb-20 font-light max-w-3xl mx-auto leading-relaxed">
              Actively seeking software engineering internships and highly challenging roles at tier-one technology companies. <strong className="text-white font-medium">Let's build something massive.</strong>
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-24">
              <a href="mailto:shubhomoysarkar00@gmail.com" className="w-full md:w-auto flex flex-col items-center justify-center p-8 md:px-16 bg-slate-900/40 border border-slate-800 hover:border-amber-500 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(245,158,11,0.15)] group">
                <span className="text-amber-400 font-mono tracking-widest text-sm uppercase mb-4 group-hover:text-amber-300">Email Protocol</span>
                <span className="text-white font-black text-2xl md:text-3xl">shubhomoysarkar00@gmail.com</span>
              </a>
              <a href="tel:+919163406409" className="w-full md:w-auto flex flex-col items-center justify-center p-8 md:px-16 bg-slate-900/40 border border-slate-800 hover:border-indigo-500 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(99,102,241,0.15)] group">
                <span className="text-indigo-400 font-mono tracking-widest text-sm uppercase mb-4 group-hover:text-indigo-300">Comm Link</span>
                <span className="text-white font-black text-2xl md:text-3xl">+91 9163406409</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 border-t border-slate-900 pt-16">
              <a href="https://github.org/Shubhomoy919" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 text-xl md:text-2xl font-bold tracking-wider flex items-center gap-4 hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/shubhomoy-sarkar-2b2171320" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 text-xl md:text-2xl font-bold tracking-wider flex items-center gap-4 hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn Network
              </a>
            </div>
          </div>
        </RevealSection>
      </section>
      
    </div>
  );
};

export default App;