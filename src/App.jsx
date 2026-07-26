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
  const trajectory = [
    {
      role: "Generative AI Engineering Intern",
      entity: "Decodelabs",
      timeline: "May 2026 - June 2026",
      type: "Experience",
      desc: "Engineered production-grade GenAI systems, context-aware memory chatbots, and automated multi-language code review pipelines.",
      highlights: [
        "Tech: Python, Google Gemini API, Modular Architecture",
        "Built intelligent memory buffers & secure multi-modal workflows"
      ],
      color: "border-indigo-500",
      certLink: "/DecodeLabs Internship Certificate (1).pdf", 
      lorLink: "/Letter_of_Recommendation.pdf"         
    },
    {
      role: "PR & Event Management Sublead / E-Cell Core",
      entity: "Trendles",
      timeline: "Oct 2025 - Present",
      type: "Leadership",
      desc: "Driving campus-wide entrepreneurial initiatives, managing large-scale event logistics, and directing institutional public relations.",
      highlights: [
        "Spearheaded digital promotional campaigns & event execution",
        "Managed financial tracking and budgeting for E-Cell operations"
      ],
      color: "border-emerald-500"
    },
    {
      role: "B.Tech in Computer Science & Engineering",
      entity: "IIIT Kottayam",
      timeline: "2024 - Present",
      type: "Education",
      desc: "Current CGPA: 8.24 / 10.",
      highlights: [
        "Active member of technical and entrepreneurial student communities."
      ],
      color: "border-amber-500"
    },
    {
      role: "Senior Secondary & Secondary Education",
      entity: "The Modern Academy, Kolkata",
      timeline: "2022 - 2024",
      type: "Education",
      desc: "Completed foundational and advanced secondary schooling with high academic standing.",
      highlights: [
        "Class 12 ISC (PCMB): 88% (2024)",
        "Class 10 ICSE: 94% (2022)"
      ],
      color: "border-amber-500"
    }
  ];
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
  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      category: "Hackathon Qualifier",
      date: "2024",
      desc: "Successfully qualified the internal round for India's premier nationwide innovation and hackathon initiative.",
      badge: "Qualifier",
      link: null // Kept clean without link
    },
    {
      title: "ML Workshop – Techfest, IIT Bombay",
      category: "Specialized Workshop",
      date: "2025",
      desc: "Completed intensive technical training and hands-on machine learning applications during IIT Bombay's annual Techfest.",
      badge: "Completed",
      link: "/cb86f980-f749-11f0-bf36-77b635c6f78c.pdf"
    },
    {
      title: "Summer Analytics – IIT Guwahati",
      category: "Data Program",
      date: "2025",
      desc: "Participated in the rigorous data science and analytics program covering statistical modeling and analytical tools.",
      badge: "Participant",
      link: null
    },
    {
      title: "Cloud with Anthropic API Certification",
      category: "AI & Cloud Credential",
      date: "Verified",
      desc: "Validated expertise in building cloud-integrated AI workflows using Claude models and Anthropic API architectures.",
      badge: "Certified",
      link: "/certificate-2vvibhmmqfz3-1780131832.pdf"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      category: "Cloud Architecture",
      date: "Verified",
      desc: "Gained comprehensive foundational knowledge of AWS cloud services, infrastructure security, pricing, and deployment models.",
      badge: "Certified",
      link: "/ecf763a3-081e-44ca-9e20-6c809e3b98e9 (1).pdf"
    }
  ];

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
 // 1. State for Modal & Active Tabs (Keep this at the top of your component)
  const [activeProject, setActiveProject] = useState(null);
  const [modalTab, setModalTab] = useState("architecture"); // 'architecture' or 'telemetry'

  // 2. The Integrated Projects Array
  const architectureProjects = [
    {
      id: "sentinel",
      title: "SentinelAI",
      type: "IoT & Edge AI",
      status: "IN DEVELOPMENT",
      desc: "An end-to-end edge surveillance architecture that upgrades a standard ESP32-CAM into a proactive AI assistant. Processes live streams to understand complex scenes and enables NLP video queries.",
      tech: ["ESP32-CAM", "YOLO11n", "ByteTrack", "Qwen2.5-VL", "Llama 3"],
      color: "sky",
      metrics: { Compute: "Edge-to-Local", Perception: "Real-Time", Tracking: "Temporal", Retrieval: "LLM NLP" },
      github: "#",
      live: "#",
      logs: [
        { time: "00:00:11.241", level: "INFO", module: "HARDWARE", msg: "ESP32-CAM initialized. Streaming via RTSP over Wi-Fi.", color: "text-blue-400" },
        { time: "00:00:14.002", level: "SUCCESS", module: "VISION", msg: "YOLO11n & ByteTrack loaded. Tracking temporal entities.", color: "text-emerald-400" },
        { time: "00:00:19.892", level: "WARN", module: "VLM", msg: "Frame drop detected. Qwen2.5-VL adjusting probabilistic threshold.", color: "text-amber-400" },
        { time: "00:00:23.105", level: "INFO", module: "NLP", msg: "Conversational retrieval ready. Awaiting natural language query.", color: "text-blue-400" }
      ],
      blueprint: [
        { node: "Edge Sensor", tech: "ESP32-CAM", desc: "Captures & streams raw video" },
        { node: "Transport", tech: "Wi-Fi (RTSP)", desc: "Low-latency frame transmission to server" },
        { node: "Perception Node", tech: "YOLO11n + ByteTrack", desc: "Object detection & temporal tracking" },
        { node: "Semantic Engine", tech: "Qwen2.5-VL", desc: "Translates tracked pixels to semantic events" },
        { node: "Query Interface", tech: "Llama 3 + PostGIS", desc: "NLP interface for querying event history" }
      ]
    },
    {
      id: "boddai",
      title: "Bodd AI Workspace",
      type: "GenAI & Graph Theory",
      status: "SYSTEM ONLINE",
      desc: "Engineered a next-generation AI workspace that replaces traditional linear chat with a Directed Acyclic Graph (DAG) topology for complex, multi-threaded reasoning without context truncation.",
      tech: ["React 18", "Express.js", "Gemini SDK", "React Flow", "Kahn's Algo"],
      color: "amber",
      metrics: { Latency: "Zero-Latency SSE", Algorithm: "Kahn's Sort", Compression: "75% Token Red.", Topology: "DAG" },
      github: "https://github.com/Shubhomoy919/Bodd-2",
      live: "#",
      logs: [
        { time: "10:14:02.105", level: "INFO", module: "DAG_CORE", msg: "Initializing workspace UI. Allocating memory buffers.", color: "text-blue-400" },
        { time: "10:14:04.422", level: "WARN", module: "ALGO", msg: "Cyclical dependency detected. Kahn's Sorting bypassed corruption.", color: "text-amber-400" },
        { time: "10:14:07.019", level: "SUCCESS", module: "NET", msg: "Express.js SSE connection established. Latency: 12ms.", color: "text-emerald-400" },
        { time: "10:14:12.890", level: "DEBUG", module: "OPT", msg: "Contextual compression successful. Payload compressed by 75%.", color: "text-slate-400" }
      ],
      blueprint: [
        { node: "Client UI", tech: "React 18 + React Flow", desc: "Renders interactive DAG canvas" },
        { node: "Safety Engine", tech: "Kahn's Algorithm", desc: "Prevents graph cycles and logic corruption" },
        { node: "API Gateway", tech: "Express.js (SSE)", desc: "Maintains zero-latency continuous data stream" },
        { node: "Optimization", tech: "Context Compressor", desc: "Reduces token payload dynamically" },
        { node: "LLM Inference", tech: "Google Gemini", desc: "Generates node-specific responses" }
      ]
    },
    {
      id: "greentravel",
      title: "GreenTravel API",
      type: "ML & Process Mining",
      status: "DATA MINED",
      desc: "Analyzed historical corporate travel datasets, pinpointing process bottlenecks to enforce strategic modal shifts and architect a data-backed roadmap for Net-Zero emissions by 2030.",
      tech: ["Python", "Scikit-Learn", "Celonis", "Pandas", "PostgreSQL"],
      color: "emerald",
      metrics: { Footprint: "178M kg CO2e", Reduction: "85% per-trip", Target: "Rail < 400km", Engine: "Predictive ML" },
      github: "https://github.com/Shubhomoy919/capstone-project_iit_guwahati",
      live: "#",
      logs: [
        { time: "08:30:15.001", level: "INFO", module: "DATA", msg: "Relational pipeline established. 178M kg CO2e mapped.", color: "text-blue-400" },
        { time: "08:30:22.404", level: "WARN", module: "MINING", msg: "Policy deviations detected in Sales department logs.", color: "text-amber-400" },
        { time: "08:30:29.811", level: "INFO", module: "ML_CORE", msg: "Scikit-Learn engine forecasting future carbon outputs.", color: "text-blue-400" },
        { time: "08:30:31.999", level: "SUCCESS", module: "EXEC", msg: "Modal shift proscribed: Rail enforced for trips < 400km.", color: "text-emerald-400" }
      ],
      blueprint: [
        { node: "Data Ingestion", tech: "Pandas + CSV", desc: "Consolidates disconnected historical travel logs" },
        { node: "Relational Mapping", tech: "PostgreSQL", desc: "Links employee attributes to temporal trip data" },
        { node: "Process Mining", tech: "Celonis", desc: "Uncovers behavioral deviations from corporate policy" },
        { node: "Predictive Engine", tech: "Scikit-Learn", desc: "Forecasts emissions & identifies shift opportunities" },
        { node: "Action Output", tech: "Strategic Roadmap", desc: "Enforces rail alternatives for short-haul travel" }
      ]
    },
    {
      id: "decodelabs",
      title: "Decodelabs Suite",
      type: "Production Suite",
      status: "AGENTS DEPLOYED",
      desc: "A comprehensive suite of production-grade generative AI systems spanning multi-turn conversational agents, static code review engines, and automated multi-modal content pipelines.",
      tech: ["Python", "Gemini API", "Modular Architecture", "Security Pipelines"],
      color: "indigo",
      metrics: { Memory: "Context-Aware", Analysis: "Multi-Language", Pipeline: "Multi-Modal", Scale: "Production" },
      github: "https://github.com/Shubhomoy919/decodelabs_tasks",
      live: "#",
      logs: [
        { time: "SYS:BOOT", level: "INFO", module: "INIT", msg: "Decodelabs GenAI Engine Suite initialized.", color: "text-blue-400" },
        { time: "SYS:MEM", level: "SUCCESS", module: "AGENT", msg: "Context-aware conversational agent loaded into buffer.", color: "text-emerald-400" },
        { time: "SYS:SCAN", level: "WARN", module: "REVIEW", msg: "Vulnerabilities detected in Javascript payload. Patching...", color: "text-amber-400" },
        { time: "SYS:GEN", level: "INFO", module: "MEDIA", msg: "Multi-modal content pipeline executing generation workflow.", color: "text-blue-400" }
      ],
      blueprint: [
        { node: "Input Gateway", tech: "User Interface", desc: "Captures text, code, or multi-modal prompts" },
        { node: "State Manager", tech: "Memory Buffer", desc: "Retains context for multi-turn conversations" },
        { node: "Routing Logic", tech: "Modular Handlers", desc: "Directs request to Reviewer, Chat, or Media engine" },
        { node: "AI Processor", tech: "Google Gemini API", desc: "Executes core generative and analytical tasks" },
        { node: "Output Pipeline", tech: "Security Layer", desc: "Sanitizes and delivers final assets" }
      ]
    }
  ];
  // ==========================================
  // DASHBOARD DATA (LIVE TELEMETRY)
  // ==========================================
  const [activeCommit, setActiveCommit] = useState(null);

  // Heatmap with "Live Sync" simulating real-time pushed code
  const heatmapData = Array.from({ length: 112 }).map((_, i) => {
    const rand = Math.random();
    let level = 0, commits = 0;
    if (rand > 0.4) { level = 1; commits = Math.floor(Math.random() * 3) + 1; }
    if (rand > 0.7) { level = 2; commits = Math.floor(Math.random() * 5) + 4; }
    if (rand > 0.9) { level = 3; commits = Math.floor(Math.random() * 10) + 8; }
    
    // Make 2 random recent tiles act as "live syncing" (pulsing)
    const isLive = i === 108 || i === 110; 
    return { id: i, level, commits, date: `${112 - i} days ago`, isLive };
  });

  // Categorized Stack displaying pure engineering + CS Theory
  const coreStack = {
    engineering: [
      { name: "Python", meta: "Data/Backend", color: "text-amber-400", border: "border-amber-400/30", bg: "bg-amber-400/10" },
      { name: "C / C++", meta: "Low-Level Sys", color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/10" },
      { name: "React 18", meta: "Client Logic", color: "text-sky-400", border: "border-sky-400/30", bg: "bg-sky-400/10" },
      { name: "Node / SQL", meta: "Persistence", color: "text-emerald-400", border: "border-emerald-400/30", bg: "bg-emerald-400/10" },
    ],
    intelligence: [
      { name: "Gemini SDK", meta: "Agentic AI", color: "text-indigo-400", border: "border-indigo-400/30", bg: "bg-indigo-400/10" },
      { name: "OpenCV", meta: "Edge Vision", color: "text-red-400", border: "border-red-400/30", bg: "bg-red-400/10" },
    ],
    theory: [
      { name: "Probabilistic Modeling", meta: "Math", color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/10" },
      { name: "Automata / FAs", meta: "Computation", color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/10" },
      { name: "OOAD Patterns", meta: "Architecture", color: "text-teal-400", border: "border-teal-400/30", bg: "bg-teal-400/10" }
    ]
  };
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
            <span className="text-white font-mono tracking-wider">SHUBHOMOY<span className="text-amber-400"> SARKAR</span></span>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
            <a href="#manifesto" className="hover:text-amber-400 transition-colors">Manifesto</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Trajectory</a>
            <a href="#achievements" className="hover:text-amber-400 transition-colors">Records</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Architecture</a>
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
              Available for Internships
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
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-light">
            Computer Science engineering student in the 5th semester at IIIT Kottayam, specializing in full-stack architecture, generative AI, and agentic workflows. Experienced in building production-ready applications with strong foundations in data structures, algorithms, and machine learning pipelines.
          </p>
        </RevealSection>

        <RevealSection delay="600ms">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Top Centered: Download CV */}
            <div className="mb-6">
              <a 
                href="/Shubhomoy_Sarkar_Resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-8 py-4 bg-amber-500/10 border border-amber-500/50 hover:border-amber-400 rounded-2xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-3 text-center"
              >
                <div className="absolute inset-0 bg-linear-to-r from-amber-500/10 to-orange-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative text-amber-400 font-mono tracking-widest text-sm uppercase group-hover:text-amber-300 font-bold">
                  Download CV
                </span>
                <svg className="w-4 h-4 relative text-amber-400 group-hover:text-amber-300 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>

            {/* Bottom Row: Inspect Projects & Contact Me */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center">
              <a 
                href="#projects" 
                className="relative group px-12 py-5 bg-amber-500 rounded-2xl font-black text-slate-950 transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] overflow-hidden text-center w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-slate-950 group-hover:text-slate-950 transition-colors text-lg tracking-wider uppercase font-extrabold">
                  Inspect Projects
                </span>
              </a>

              <a 
                href="#contact" 
                className="px-12 py-5 bg-slate-900/60 backdrop-blur-md rounded-2xl font-bold transition-all duration-300 border border-slate-700 hover:text-amber-400 hover:border-amber-500/50 text-lg tracking-wider uppercase flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Contact Me
              </a>
            </div>
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
            
            <div className="space-y-8 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                I build at the cross-section of <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400 font-medium">full-stack engineering</span>  and <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400 font-medium">applied AI</span>. Beyond just making code compile, I focus on systems efficiency, reliable architecture, and predictive ML pipelines that solve real problems.
              </p>

              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                Whether that’s deploying real-time edge AI surveillance, architecting decarbonization models, or engineering production-grade GenAI workflows, my focus is taking intelligent systems out of Jupyter notebooks and into live, high-throughput environments.
              </p>

              <p className="text-base md:text-lg text-amber-500 font-mono tracking-widest uppercase mt-8 border-l-2 border-amber-500 pl-4 bg-amber-500/5 py-2 inline-block pr-6 rounded-r-lg">
                Fast execution, solid logic, zero fluff.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>
{/* ========================================== */}
      {/* EDUCATION & EXPERIENCE SECTION */}
      {/* ========================================== */}
      <section id="experience" className="relative z-10 border-t border-slate-900 bg-[#030508] py-24">
        <RevealSection>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-16 tracking-tight text-white flex items-center gap-4">
              <span className="w-8 h-0.5 bg-indigo-500"></span>
              Education & Experience
            </h2>
            
            <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-16">
              {trajectory.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Glowing Timeline Dot */}
                  <div className={`absolute -left-1.25 top-1 h-2.5 w-2.5 rounded-full bg-[#030508] border-2 ${item.color} group-hover:scale-150 group-hover:bg-current transition-all duration-300`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.role}</h3>
                    <span className="text-slate-500 font-mono text-sm tracking-widest uppercase">{item.timeline}</span>
                  </div>
                  
                  <h4 className="text-lg text-indigo-400 font-medium mb-4">
                    {item.entity} 
                    <span className="text-slate-600 ml-2 text-sm uppercase tracking-widest font-mono">[{item.type}]</span>
                  </h4>
                  
                  <p className="text-slate-300 font-light leading-relaxed max-w-3xl mb-6">
                    {item.desc}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-3 max-w-3xl mb-6">
                    {item.highlights.map((point, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1">▹</span>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* High-Tech Animated Buttons for Certificate & LOR */}
                  {(item.certLink || item.lorLink) && (
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {item.certLink && (
                        <a 
                          href={item.certLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group/cert relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                        >
                          {/* Light sweep animation */}
                          <span className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/cert:translate-x-[300%] transition-transform duration-1000 ease-in-out"></span>

                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                          <span>Completion Certificate</span>
                          <span className="inline-block transition-transform duration-300 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}

                      {item.lorLink && (
                        <a 
                          href={item.lorLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group/lor relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                        >
                          {/* Light sweep animation */}
                          <span className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/lor:translate-x-[300%] transition-transform duration-1000 ease-in-out"></span>

                          <span className="text-emerald-400 font-bold">★</span>
                          <span>Letter of Recommendation</span>
                          <span className="inline-block transition-transform duration-300 group-hover/lor:translate-x-0.5 group-hover/lor:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>
      {/* ========================================== */}
      {/* SYSTEM ARCHITECTURE (PROJECTS) SECTION */}
      {/* ========================================== */}
      <section id="projects" className="relative z-10 py-32 bg-[#030508] border-t border-slate-900">
        <RevealSection>
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white flex items-center gap-4 mb-4 tracking-tight">
                  <span className="text-amber-500 font-light">/</span> System Architecture
                </h2>
                <p className="text-slate-400 font-mono text-sm tracking-widest uppercase pl-8 border-l border-slate-800">
                  Production Workloads & Prototypes
                </p>
              </div>
              <div className="hidden md:flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">All Systems Nominal</span>
              </div>
            </div>

            {/* The Targeting Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {architectureProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => { setActiveProject(project); setModalTab("architecture"); }}
                  className="group relative rounded-3xl bg-[#070b14] border border-slate-800/80 hover:border-slate-500/50 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] flex flex-col min-h-105"
                >
                  {/* Holographic Scanline Effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] blur-[1px] z-20"></div>

                  {/* Top Control Bar */}
                  <div className="px-5 py-4 border-b border-slate-800/60 flex justify-between items-center bg-slate-950/40 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] animate-pulse ${
                        project.color === 'emerald' ? 'text-emerald-500 bg-emerald-500' : 
                        project.color === 'amber' ? 'text-amber-500 bg-amber-500' : 
                        project.color === 'sky' ? 'text-sky-500 bg-sky-500' :
                        'text-indigo-500 bg-indigo-500'
                      }`}></span>
                      <span className="text-[9px] font-mono tracking-widest text-slate-300 uppercase">{project.status}</span>
                    </div>
                  </div>

                  {/* Inner Content */}
                  <div className="p-6 flex flex-col grow relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                    <p className={`font-mono text-[10px] tracking-widest uppercase mb-4 ${
                      project.color === 'emerald' ? 'text-emerald-400' : 
                      project.color === 'amber' ? 'text-amber-400' : 
                      project.color === 'sky' ? 'text-sky-400' :
                      'text-indigo-400'
                    }`}>{project.type}</p>
                    
                    <p className="text-slate-400 text-sm leading-relaxed font-light mb-6 grow">
                      {project.desc}
                    </p>

                    {/* Tech Stack Matrix */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-mono text-slate-300 bg-slate-900 rounded border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ambient Background Glow */}
                  <div className={`absolute bottom-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] rounded-full pointer-events-none ${
                    project.color === 'emerald' ? 'bg-emerald-500' : 
                    project.color === 'amber' ? 'bg-amber-500' : 
                    project.color === 'sky' ? 'bg-sky-500' :
                    'bg-indigo-500'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>
      {/* ========================================== */}
      {/* LIVE TELEMETRY & ARSENAL (THE DASHBOARD) */}
      {/* ========================================== */}
      <section id="arsenal" className="relative z-10 py-32 bg-[#030508] border-t border-slate-900 overflow-hidden">
        {/* Holographic Radar Background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-slate-800/20 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-slate-800/30 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>

        <RevealSection>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Section Header */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white flex items-center gap-4 mb-4 tracking-tight">
                  <span className="text-emerald-500 font-light">/</span> Live Telemetry
                </h2>
                <p className="text-slate-400 font-mono text-sm tracking-widest uppercase pl-8 border-l border-slate-800">
                  The Arsenal & Operator Metrics
                </p>
              </div>
              <div className="hidden md:flex items-center gap-3 bg-[#05080f]/80 backdrop-blur-md border border-slate-800 px-5 py-2.5 rounded-xl shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Global State:</span>
                <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest">OPTIMAL</span>
              </div>
            </div>

            {/* THE ULTRA BENTO BOX GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto">
              
              {/* 1. THE NEURAL MATRIX (Core Stack) - Spans 2 columns */}
              <div className="lg:col-span-2 bg-[#05080f]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 hover:border-slate-500/50 transition-all duration-500 group relative overflow-hidden shadow-[0_0_40px_-20px_rgba(0,0,0,0.5)]">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-700"></div>
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <p className="text-slate-500 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Neural Matrix // Stack Domains
                  </p>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Category Loop */}
                  {Object.entries(coreStack).map(([category, skills], idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-center">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest w-24 shrink-0">[{category}]</span>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {skills.map((tech, i) => (
                          <div key={i} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border ${tech.border} ${tech.bg} flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 cursor-default backdrop-blur-sm`}>
                            <span className={`font-black tracking-tight ${tech.color} text-xs md:text-sm`}>{tech.name}</span>
                            <span className="hidden md:block w-px h-3 bg-slate-700/50"></span>
                            <span className="hidden md:block text-[9px] font-mono text-slate-400 uppercase tracking-widest">{tech.meta}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. OPERATOR BIO-METRICS (SVG Data Viz) */}
              <div className="bg-[#05080f]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 hover:border-slate-500/50 transition-all duration-500 relative flex flex-col shadow-[0_0_40px_-20px_rgba(0,0,0,0.5)] group overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <p className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  Bio-Metrics
                </p>
                
                <div className="flex justify-around items-center mb-6">
                  {/* Gauge 1: Algorithmic Output */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-2">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#1e293b" strokeWidth="3" fill="none" />
                        <path strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-[fade-in_1s_ease-out_forwards] drop-shadow-[0_0_4px_#38bdf8]" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white">65%</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest text-center">Algorithmic<br/>Output</span>
                  </div>

                  {/* Gauge 2: Gym */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-2">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <path strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#1e293b" strokeWidth="3" fill="none" />
                        <path strokeDasharray="35, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-[fade-in_1.5s_ease-out_forwards] drop-shadow-[0_0_4px_#f59e0b]" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-white">35%</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest text-center">Physical<br/>Iron (Gym)</span>
                  </div>
                </div>

                {/* Live Heartbeat SVG (Caffeine) */}
                <div className="mt-auto p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 relative overflow-hidden">
                  <div className="flex justify-between items-end mb-2 relative z-10">
                    <span className="text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest">Caffeine Levels</span>
                    <span className="text-xs font-mono font-bold text-emerald-400 drop-shadow-[0_0_5px_#34d399]">OPTIMAL</span>
                  </div>
                  {/* The ECG Line */}
                  <svg className="w-full h-8 opacity-80 relative z-10" viewBox="0 0 200 40">
                    <polyline points="0,20 40,20 50,5 60,35 70,20 130,20 140,5 150,35 160,20 200,20" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Scanning overlay simulating a monitor */}
                    <rect x="0" y="0" w="100%" h="100%" fill="url(#gradient)" className="animate-[scan-horizontal_2s_linear_infinite]" />
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#05080f" stopOpacity="1" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </linearGradient>
                  </svg>
                </div>
              </div>

              {/* 3. WAKATIME TERMINAL (Live Startup Process) */}
              <div className="lg:col-span-1 bg-[#05080f]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 hover:border-slate-500/50 transition-all duration-500 shadow-[0_0_40px_-20px_rgba(0,0,0,0.5)] flex flex-col">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/20 shadow-[0_0_4px_#ef4444]"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-500/20 shadow-[0_0_4px_#f59e0b]"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-500/20 shadow-[0_0_4px_#10b981]"></span>
                  </div>
                  <span className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">sys_terminal_zsh</span>
                </div>
                
                {/* Advanced CS/Math Boot Sequence */}
                <div className="font-mono text-[11px] md:text-xs text-slate-400 space-y-2.5 grow">
                  <p className="text-sky-400 font-bold">shubh@operator <span className="text-slate-300 font-normal">~ init --pipeline=edge_ai</span></p>
                  
                  <div className="animate-[fade-in_0.1s_ease-out_forwards]" style={{ animationDelay: '300ms', opacity: 0 }}>
                    <p className="text-emerald-400 mb-1 flex items-center gap-2">✔ Tensor Cores allocated.</p>
                    <p className="text-slate-500 pl-4">&gt; NPU Load: [||||||||||......] 62%</p>
                  </div>
                  
                  <div className="animate-[fade-in_0.1s_ease-out_forwards] pt-2 border-t border-slate-800/50 mt-2" style={{ animationDelay: '800ms', opacity: 0 }}>
                    <p className="text-sky-400 font-bold">shubh@operator <span className="text-slate-300 font-normal">~ execute --module=algorithms</span></p>
                  </div>

                  <div className="animate-[fade-in_0.1s_ease-out_forwards]" style={{ animationDelay: '1200ms', opacity: 0 }}>
                    <p className="text-amber-400 mb-1 flex items-center gap-2">
                      <span className="animate-spin text-amber-500">⟳</span> Active Engineering Process
                    </p>
                    <p className="text-slate-300 pl-4 leading-relaxed">
                      Deploying Directed Acyclic Graphs:<br/>
                      <span className="text-emerald-400">Kahn's Topological Sort...</span>
                    </p>
                  </div>

                  <p className="animate-[fade-in_0.1s_ease-out_forwards] text-indigo-400 pt-2 flex items-center gap-2 mt-auto" style={{ animationDelay: '1600ms', opacity: 0 }}>
                    &gt; INJECTING PROBABILISTIC MODELS <span className="w-2 h-4 bg-indigo-400 animate-pulse block"></span>
                  </p>
                </div>
              </div>

              {/* 4. GITHUB HEATMAP (Live Commits) */}
              <div className="lg:col-span-2 bg-[#05080f]/80 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 hover:border-slate-500/50 transition-all duration-500 relative group overflow-hidden shadow-[0_0_40px_-20px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <div className="flex justify-between items-start md:items-center mb-8 relative z-10 flex-col md:flex-row gap-4">
                  <div>
                    <p className="text-slate-500 font-mono text-xs tracking-widest uppercase flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                      Git Telemetry
                    </p>
                    <p className="text-white font-bold text-lg">1,492 <span className="text-slate-500 font-normal text-sm">Commits (Simulated)</span></p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-ping"></span>
                    <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase">Awaiting Push</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-0.75 sm:gap-1.5 md:gap-2 relative z-10 w-full h-full content-end">
                  {heatmapData.map((data, i) => (
                    <div 
                      key={i} 
                      onMouseEnter={() => setActiveCommit(data)}
                      onMouseLeave={() => setActiveCommit(null)}
                      className={`relative h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-xs transition-all duration-300 hover:scale-125 hover:z-20 cursor-crosshair ${
                        data.isLive ? 'bg-emerald-400 shadow-[0_0_15px_#34d399] animate-[pulse_1.5s_ease-in-out_infinite]' :
                        data.level === 0 ? 'bg-slate-800/50 hover:bg-slate-700' :
                        data.level === 1 ? 'bg-emerald-900/60 border border-emerald-800 hover:border-emerald-500' :
                        data.level === 2 ? 'bg-emerald-600 shadow-[0_0_6px_#059669]' :
                        'bg-emerald-400 shadow-[0_0_12px_#34d399]'
                      }`}
                    >
                      {activeCommit?.id === data.id && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-[10px] whitespace-nowrap z-50 flex flex-col items-center pointer-events-none shadow-xl">
                          <span className="text-emerald-400 font-bold">{data.commits} commits</span>
                          <span className="text-slate-400">{data.isLive ? 'Just now' : data.date}</span>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[5px] border-transparent border-t-slate-700"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </RevealSection>
      </section>

      {/* ========================================== */}
      {/* THE ADVANCED COMMAND CENTER MODAL */}
      {/* ========================================== */}
      {activeProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          {/* Deep Blur Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity"
            onClick={() => setActiveProject(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-5xl bg-[#030508] border border-slate-700 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh] ring-1 ring-white/10">
            
            {/* Modal Header Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 border-b border-slate-800 bg-[#070b14]">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-amber-500 font-mono text-xs tracking-widest uppercase border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-sm">
                  {activeProject.id}.exe
                </span>
                <h3 className="text-white font-bold tracking-tight text-lg">{activeProject.title} // Command Center</h3>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex items-center gap-2 bg-slate-900 rounded-lg p-1 border border-slate-800">
                <button 
                  onClick={() => setModalTab("architecture")}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-md transition-all ${modalTab === 'architecture' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Architecture
                </button>
                <button 
                  onClick={() => setModalTab("telemetry")}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-md transition-all ${modalTab === 'telemetry' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Telemetry
                </button>
                <div className="w-px h-6 bg-slate-700 mx-2"></div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-mono tracking-widest uppercase text-red-400 hover:bg-red-500/10 rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">
              <div className="absolute inset-0 bg-[#030508]/95 z-0"></div>
              
              <div className="relative z-10 flex flex-col gap-6">
                
                {/* Dynamic Content based on Tab */}
                {modalTab === 'architecture' ? (
                  <div className="w-full bg-[#070b14] border border-slate-800 rounded-xl p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[30px_30px]"></div>
                    
                    <h4 className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-8 relative z-10 flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full animate-pulse ${
                        activeProject.color === 'emerald' ? 'bg-emerald-500' : 
                        activeProject.color === 'amber' ? 'bg-amber-500' : 
                        activeProject.color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500'
                      }`}></span>
                      Infrastructure Pipeline
                    </h4>
                    
                    {/* ADVANCED DATA FLOW MAP */}
                    <div className="relative z-10 pl-4 md:pl-8 border-l-2 border-slate-800 space-y-8 py-2">
                      {activeProject.blueprint.map((step, index) => (
                        <div key={index} className="relative pl-6 md:pl-8">
                          {/* Node Connection Point */}
                          <div className={`absolute -left-1.25 md:-left-2.25 top-1.5 w-2 h-2 md:w-4 md:h-4 rounded-full bg-slate-950 border-2 ${
                            activeProject.color === 'emerald' ? 'border-emerald-500' : 
                            activeProject.color === 'amber' ? 'border-amber-500' : 
                            activeProject.color === 'sky' ? 'border-sky-500' : 'border-indigo-500'
                          }`}></div>
                          
                          {/* Data Flow Arrow (except for last item) */}
                          {index !== activeProject.blueprint.length - 1 && (
                            <div className="absolute -left-3.5 md:-left-4.5 top-10 text-slate-700">
                              ↓
                            </div>
                          )}

                          <div className="bg-slate-900/50 border border-slate-800/80 rounded-lg p-4 hover:border-slate-600 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                              <h5 className="text-white font-bold text-sm md:text-base">{step.node}</h5>
                              <span className={`font-mono text-[10px] px-2 py-1 rounded bg-slate-950 border border-slate-800 ${
                                activeProject.color === 'emerald' ? 'text-emerald-400' : 
                                activeProject.color === 'amber' ? 'text-amber-400' : 
                                activeProject.color === 'sky' ? 'text-sky-400' : 'text-indigo-400'
                              }`}>
                                {step.tech}
                              </span>
                            </div>
                            <p className="text-slate-400 text-xs md:text-sm">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Metrics Dashboard */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(activeProject.metrics).map(([key, value], i) => (
                        <div key={i} className="bg-[#070b14] border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors">
                          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-2">{key}</p>
                          <p className="text-white font-mono text-sm md:text-lg">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* ADVANCED SYSTEM LOGS */}
                    <div className="bg-[#070b14] border border-slate-800 rounded-xl p-6 font-mono text-xs h-full flex flex-col min-h-75">
                      <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                        <p className="text-slate-500 tracking-widest uppercase">Live Telemetry</p>
                        <p className="text-emerald-500 animate-pulse text-[10px]">● REC</p>
                      </div>
                      
                      <div className="grow space-y-3">
                        {activeProject.logs.map((log, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:gap-3 opacity-90 hover:opacity-100 transition-opacity">
                            <span className="text-slate-600 shrink-0">[{log.time}]</span>
                            <div className="flex gap-3">
                              <span className={`shrink-0 w-16 ${log.color}`}>[{log.level}]</span>
                              <span className="text-slate-300">
                                <span className="text-slate-500">[{log.module}]</span> {log.msg}
                              </span>
                            </div>
                          </div>
                        ))}
                        <p className="text-slate-500 mt-4">
                          <span className="animate-pulse">_</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Bottom Action Footer */}
                <div className="pt-6 mt-2 border-t border-slate-800/80 flex flex-col sm:flex-row gap-4 justify-end">
                  <a href={activeProject.github} target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-mono text-xs tracking-widest uppercase hover:bg-slate-800 hover:text-white transition-all text-center flex items-center justify-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    Source Code
                  </a>
                  <a href={activeProject.live} target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-black tracking-widest text-xs uppercase hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all text-center flex items-center justify-center gap-2">
                    Execute Live ↗
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
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
{/* ========================================== */}
      {/* HALL OF RECORDS (ACHIEVEMENTS) SECTION */}
      {/* ========================================== */}
      <section id="achievements" className="relative z-10 border-t border-slate-900 bg-[#030508] py-24 overflow-hidden">
        {/* Subtle Ambient Background Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <RevealSection>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-4 mb-2">
                  <span className="w-8 h-0.5 bg-linear-to-r from-amber-500 to-amber-300"></span>
                  Hall Of Records
                </h2>
                <p className="text-slate-400 font-mono text-xs tracking-widest uppercase pl-12">
                  Verified Milestones & Cloud Credentials
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className="relative p-7 bg-slate-950/60 backdrop-blur-xl border border-slate-800/80 hover:border-amber-500/40 rounded-2xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.15)]"
                >
                  {/* Subtle Top Inner Glow */}
                  <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div>
                    {/* Header: Category Pill & Date */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 shadow-inner">
                        {item.category}
                      </span>
                      <span className="text-slate-500 font-mono text-xs font-light">{item.date}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-100 mb-3 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-400 font-light leading-relaxed text-sm mb-6">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Footer Action Bar */}
                  <div className="pt-4 border-t border-slate-800/60 flex justify-between items-center">
                    <span className="text-slate-500 font-mono text-[11px] tracking-wider uppercase">
                      Status
                    </span>

                    <div className="flex items-center gap-3">
                      {/* Animated Stylish View Credential Button */}
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group/btn relative inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 hover:text-white transition-all duration-300 active:scale-95"
                        >
                          <span>Verify</span>
                          <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                            ↗
                          </span>
                        </a>
                      )}

                      {/* Status Badge */}
                      <span className="text-emerald-400 font-mono text-[11px] tracking-widest uppercase bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>
      {/* --- 5. CONTACT & DEPLOYMENT --- */}
      {/* ========================================== */}
      {/* CONTACT SECTION */}
      {/* ========================================== */}
      <section id="contact" className="relative z-10 border-t border-slate-900 bg-[#030508] py-32">
        <RevealSection>
          <div className="max-w-4xl mx-auto px-6 text-center">
            
            {/* 1. Scaled-down, professional heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
              Ready to Engineer <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-fuchsia-400">The Future.</span>
            </h2>
            
            {/* 2. Clean, normal-weight paragraph */}
            <p className="text-lg md:text-xl text-slate-400 mb-12 font-normal max-w-2xl mx-auto leading-relaxed">
              Actively seeking software engineering internships and highly challenging roles at tier-one technology companies. Let's build something massive.
            </p>
            
            {/* 3 & 4. Updated headings, normal font weight, single-line phone */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mb-16">
              <a href="mailto:shubhomoysarkar00@gmail.com" className="flex-1 max-w-85 p-6 bg-slate-900/40 border border-slate-800 hover:border-amber-500 rounded-2xl transition-all flex flex-col justify-center mx-auto sm:mx-0">
                <span className="text-amber-400 font-mono text-xs uppercase block mb-2 tracking-widest">Email</span>
                <span className="text-slate-200 text-lg font-normal">shubhomoysarkar00@gmail.com</span>
              </a>
              
              <a href="tel:+919163406409" className="flex-1 max-w-85 p-6 bg-slate-900/40 border border-slate-800 hover:border-indigo-500 rounded-2xl transition-all flex flex-col justify-center mx-auto sm:mx-0">
                <span className="text-indigo-400 font-mono text-xs uppercase block mb-2 tracking-widest">Phone No</span>
                <span className="text-slate-200 text-lg font-normal whitespace-nowrap">+91 9163406409</span>
              </a>
            </div>

            {/* Social/Professional Links */}
            <div className="flex justify-center gap-10 border-t border-slate-900 pt-10 text-sm font-normal uppercase tracking-widest text-slate-400">
              <a href="https://github.com/Shubhomoy919" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/shubhomoy-sarkar-2b2171320" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
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