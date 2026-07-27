import React, { useState, useEffect, useRef, useMemo } from 'react';

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

// --- AI DIGITAL TWIN COMPONENT (OMNI-INDEXED COGNITIVE ENGINE v10.0) ---
const DigitalTwin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'system', 
      text: 'INIT // SHUBH-AI KERNEL v11.0 (Cognitive Neural Matrix Active)\nIndexed: 100% Portfolio Vectors, Architecture Graphs, Deep Engineering Glossaries, & Recruiter Evaluation Models.' 
    },
    { 
      role: 'ai', 
      text: 'Terminal online. I am Shubhomoy Sarkar’s high-fidelity AI Digital Twin. I have full technical and operational awareness of his engineering projects (SentinelAI, Bodd AI, GreenTravel API, Decodelabs), IIIT Kottayam academic record (CGPA 8.24), certifications, and live telemetry.\n\nType a query or enter "/" to view system commands.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  
  // Advanced State & Memory
  const [activeContext, setActiveContext] = useState(null); // Context buffer for pronouns
  const [thoughtLogs, setThoughtLogs] = useState([]);
  const [suggestedChips, setSuggestedChips] = useState(["/eval", "What are his projects?", "Explain Kahn's Algo", "CGPA & Marks"]);
  
  // Terminal Command History State
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, thoughtLogs]);

  // Focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // --- EXHAUSTIVE OMNI-INDEXED DEEP KNOWLEDGE GRAPH ---
  const knowledgeGraph = {
    overview: "Shubhomoy Sarkar is a Full Stack & AI Systems Engineer in his 5th semester pursuing B.Tech in CSE at IIIT Kottayam (Current CGPA: 8.24/10). He specializes in edge AI surveillance, generative AI workflows, agentic automation, and predictive ML pipelines. Manifesto: 'Fast execution, solid logic, zero fluff.'",
    
    contact: "Reach Shubhomoy directly:\n• Email: shubhomoysarkar00@gmail.com\n• Phone: +91 9163406409\n• GitHub: github.com/Shubhomoy919\n• LinkedIn: linkedin.com/in/shubhomoy-sarkar-2b2171320",
    
    hire: "EVALUATION SUMMARY // Why Hire Shubhomoy?\n1. Production Engineering: Hands-on experience building GenAI memory systems and multi-modal pipelines at Decodelabs.\n2. Deep Systems Thinking: Uses advanced Computer Science primitives (DAG topology, Kahn's topological sort, Server-Sent Events, Edge-to-Local YOLO vision).\n3. Competitive & Certified: SIH 2024 Qualifier, Anthropic Cloud API Certified, and AWS Cloud Practitioner Essentials Certified.\n4. High Output & Discipline: Tracks ~38 hrs/wk cognitive coding load and applies physical hypertrophy principles (progressive overload) to engineering scaling.",

    decodelabs_intern: "Generative AI Engineering Intern at Decodelabs (May 2026 - June 2026):\n• Engineered production GenAI systems, context-aware memory chatbots, and automated multi-language code review pipelines.\n• Core Stack: Python, Google Gemini API, Modular Security Pipelines.\n• Credentials: Verified Completion Certificate & Letter of Recommendation available in portfolio.",
    
    trendles: "PR & Event Management Sublead / E-Cell Core at Trendles (Oct 2025 - Present):\n• Spearheads campus-wide entrepreneurial events, manages media outreach, and oversees financial budgeting/tracking for E-Cell operations.",
    
    education: "ACADEMIC STANDING:\n• B.Tech in CSE at IIIT Kottayam (2024 - Present): Current CGPA 8.24 / 10 (5th Semester).\n• The Modern Academy, Kolkata:\n  - Class 12 ISC (PCMB): 88% (2024)\n  - Class 10 ICSE: 94% (2022)",
    
    startup: "EDTECH STARTUP INITIATIVE:\n• Shubhomoy is actively founding an EdTech startup building a specialized Class 8 Biology interactive curriculum tailored to the Maharashtra State Board, combining high-throughput web engineering with scalable pedagogical design.",
    
    all_projects: "PRODUCTION SYSTEMS & ARCHITECTURES:\n1. SentinelAI: Edge IoT surveillance (ESP32-CAM -> YOLO11n + ByteTrack -> Qwen2.5-VL -> Llama 3 + PostGIS).\n2. Bodd AI Workspace: Non-linear GenAI reasoning DAG using Kahn's topological sort & SSE.\n3. GreenTravel API: Decarbonization process mining analyzing 178M kg CO2e via Celonis & Scikit-Learn.\n4. Decodelabs Suite: Multi-turn GenAI agents with context-aware memory buffers.",

    sentinel: "PROJECT // SentinelAI (IoT & Edge AI Surveillance):\n• Concept: Upgrades standard ESP32-CAM into a proactive AI assistant.\n• Architecture: ESP32-CAM Sensor -> RTSP Wi-Fi Transport -> Perception Node (YOLO11n object detection + ByteTrack entity association) -> Semantic Engine (Qwen2.5-VL visual context) -> Query Interface (Llama 3 + PostGIS spatial index).\n• Impact: Converts raw video feeds into queryable semantic video data.",
    
    boddai: "PROJECT // Bodd AI Workspace (Graph Theory & GenAI):\n• Concept: Replaces linear chat threads with a Directed Acyclic Graph (DAG) for branching multi-threaded AI reasoning.\n• Architecture: React 18 frontend with React Flow, Express.js backend with Server-Sent Events (SSE), Google Gemini SDK, Kahn's Topological Sorting algorithm.\n• Key Metric: 75% token payload reduction via dynamic context compression, zero-latency streaming.",
    
    greentravel: "PROJECT // GreenTravel API (ML & Process Mining):\n• Concept: Data-driven corporate travel decarbonization platform targeting Net-Zero 2030 emissions.\n• Tech Stack: Python, Pandas, PostgreSQL, Celonis Process Mining, Scikit-Learn.\n• Impact: Analyzed 178M kg CO2e footprint, enforced modal shift (<400km trip shift to rail), achieved 85% per-trip carbon reduction.",
    
    decodelabs_suite: "PROJECT // Decodelabs Production GenAI Suite:\n• Concept: Enterprise generative AI suite spanning multi-turn conversational memory, static code review, and content generation.\n• Tech Stack: Python, Gemini API, Modular Router, Security Sanitization Layer.",

    telemetry: "LIVE TELEMETRY & AUDITOR:\n• Real-Time GitHub API Integration: Live contribution matrix for current month + dynamic language byte breakdown across repos.\n• GenAI Portfolio Auditor: React Fiber DOM tree optimization, Tailwind v4 canonical utilities, WCAG 2.1 A11y contrast ratios (>4.5:1).\n• Spotify Integration: 'The Morning' by The Weeknd (Custom animated vinyl widget).",

    achievements: "HALL OF RECORDS & CREDENTIALS:\n• Smart India Hackathon 2024: Internal Round Qualifier.\n• IIT Bombay Techfest 2025: Completed Machine Learning Workshop.\n• IIT Guwahati Summer Analytics 2025: Data Science Program Participant.\n• Anthropic API Certification: Verified AI/Cloud Workflow Credential.\n• AWS Cloud Practitioner Essentials: Verified AWS Cloud Credential.",

    skills: "CORE COMPETENCIES:\n1. Theoretical CS: DSA complexity optimization, OS concurrency, DBMS indexing/ACID, Computer Networks TCP/IP, TOC state machines, OOAD.\n2. AI / ML / DL: GenAI, Agentic workflows, Scikit-Learn, Pandas, NumPy, Deep Learning, Computer Vision (YOLO/ByteTrack/VLMs).\n3. Full-Stack: C, C++, Java, Python, JavaScript, TypeScript, React, Next.js, Express.js, REST APIs, PostgreSQL, Tailwind CSS.",

    // --- DEEP ENGINEERING GLOSSARY & CONCEPT EXPLANATIONS ---
    def_dag: "ENGINEERING EXPLANATION // DAG (Directed Acyclic Graph):\nA Directed Acyclic Graph is a finite directed graph with no directed cycles. In Bodd AI, it is used as the fundamental spatial topology for conversation branches. Unlike linear chat histories that truncate prior context, a DAG lets developers fork reasoning streams into independent nodes while preserving explicit parent-child lineage.",
    
    def_kahns: "ENGINEERING EXPLANATION // Kahn's Algorithm:\nKahn's Algorithm is a linear-time ($O(|V| + |E|)$) topological sorting method that operates by iteratively removing nodes with zero in-degrees (no incoming dependencies). In Bodd AI, it acts as a real-time graph integrity engine to detect and prevent circular context loops during branch merging, ensuring logical consistency before sending payloads to LLMs.",
    
    def_sse: "ENGINEERING EXPLANATION // SSE (Server-Sent Events):\nServer-Sent Events is a unidirectional HTTP streaming protocol (`text/event-stream`) allowing servers to push real-time updates over a single persistent TCP connection. Bodd AI utilizes SSE instead of WebSockets or Polling to stream Gemini LLM tokens to the client with sub-15ms latency while minimizing socket handshake overhead.",
    
    def_yolo: "ENGINEERING EXPLANATION // YOLO11n (You Only Look Once v11 Nano):\nYOLO11n is an ultra-lightweight real-time object detection architecture optimized for edge devices. In SentinelAI, it runs on local edge compute to extract bounding boxes and confidence class scores from ESP32-CAM RTSP video feeds at high FPS without cloud latency.",
    
    def_byatrack: "ENGINEERING EXPLANATION // ByteTrack:\nByteTrack is a multi-object tracking algorithm that associates low-confidence detection boxes instead of discarding them, utilizing Kalman filtering and Intersection over Union (IoU) mapping. SentinelAI employs ByteTrack to maintain continuous spatial-temporal entity IDs across video frames.",
    
    def_qwen: "ENGINEERING EXPLANATION // Qwen2.5-VL (Vision-Language Model):\nQwen2.5-VL is a multimodal vision-language neural network capable of reasoning over spatial pixel coordinates and time-series video frames. SentinelAI feeds ByteTrack object crops into Qwen2.5-VL to generate structured natural-language event descriptions for PostGIS storage.",
    
    def_celonis: "ENGINEERING EXPLANATION // Celonis & Process Mining:\nProcess mining extracts event logs from transactional databases to reconstruct, visualize, and analyze end-to-end execution flows. In GreenTravel API, Celonis isolates non-compliant corporate travel booking pathways, identifying operational bottlenecks to enforce low-carbon modal shifts.",
    
    def_fiber: "ENGINEERING EXPLANATION // React Fiber Engine:\nReact Fiber is the internal reconciliation engine introduced in React 16+. It breaks rendering work into incremental units, enabling time-slicing and priority-based scheduling. The GenAI Portfolio Auditor inspects Fiber tree nodes to confirm zero redundant re-renders during state mutations.",
    
    def_hypertrophy: "ENGINEERING METAPHOR // Progressive Overload & Hypertrophy:\nHypertrophy is the structural growth of muscle tissue induced by systematic progressive overload. Shubhomoy applies this exact discipline to software systems engineering: progressively overloading systems with higher concurrency, bigger payloads, and harder algorithms while systematically refactoring code bottlenecks."
  };

  // --- MULTI-FACTOR WEIGHTED INTENT & ROUTING ENGINE ---
  const processQuery = (query) => {
    const q = query.toLowerCase().trim();
    let response = "";
    let detectedContext = null;
    let nextChips = ["/eval", "What are his projects?", "CGPA & Marks", "Help"];

    // Command Handlers
    if (q.startsWith('/')) {
      const cmd = q.slice(1);
      if (cmd === 'help' || cmd === 'commands') {
        return {
          resp: "AVAILABLE COMMANDS:\n• /projects - Inspect all 4 engineering architectures\n• /eval - Recruiter quick evaluation summary\n• /stack - Technical competencies & core CS\n• /experience - Decodelabs & Trendles records\n• /contact - Get Shubhomoy's contact info\n• /clear - Reset terminal screen",
          chips: ["/projects", "/eval", "/stack", "/contact"]
        };
      }
      if (cmd === 'projects') return { resp: knowledgeGraph.all_projects, chips: ["SentinelAI", "Bodd AI", "GreenTravel", "Decodelabs"] };
      if (cmd === 'eval' || cmd === 'hire') return { resp: knowledgeGraph.hire, chips: ["/projects", "/stack", "/contact"] };
      if (cmd === 'stack') return { resp: knowledgeGraph.skills, chips: ["Explain Kahn's Algo", "Explain DAG", "/projects"] };
      if (cmd === 'contact') return { resp: knowledgeGraph.contact, chips: ["/eval", "/projects"] };
      if (cmd === 'clear') {
        setMessages([{ role: 'system', text: 'INIT // SCREEN CLEARED' }, { role: 'ai', text: 'Terminal reset. How may I assist your evaluation?' }]);
        return { resp: null, chips: ["/eval", "What are his projects?", "Help"] };
      }
    }

    // Direct Engineering Terms & Glossary
    if (q.includes("dag") || q.includes("directed acyclic")) { response = knowledgeGraph.def_dag; nextChips = ["Explain Kahn's Algo", "Bodd AI", "Explain SSE"]; }
    else if (q.includes("kahn") || q.includes("topological")) { response = knowledgeGraph.def_kahns; nextChips = ["Explain DAG", "Bodd AI", "Projects"]; }
    else if (q.includes("sse") || q.includes("server sent") || q.includes("server-sent")) { response = knowledgeGraph.def_sse; nextChips = ["Bodd AI", "Explain DAG"]; }
    else if (q.includes("yolo") || q.includes("yolo11")) { response = knowledgeGraph.def_yolo; nextChips = ["SentinelAI", "Explain ByteTrack"]; }
    else if (q.includes("byte") || q.includes("bytetrack")) { response = knowledgeGraph.def_byatrack; nextChips = ["SentinelAI", "Explain Qwen"]; }
    else if (q.includes("qwen") || q.includes("vlm") || q.includes("vision language")) { response = knowledgeGraph.def_qwen; nextChips = ["SentinelAI", "Explain YOLO11n"]; }
    else if (q.includes("celonis") || q.includes("process mining")) { response = knowledgeGraph.def_celonis; nextChips = ["GreenTravel API", "/projects"]; }
    else if (q.includes("fiber") || q.includes("react fiber")) { response = knowledgeGraph.def_fiber; nextChips = ["GenAI Auditor", "Telemetry"]; }
    else if (q.includes("hypertrophy") || q.includes("gym") || q.includes("overload")) { response = knowledgeGraph.def_hypertrophy; nextChips = ["Bio-Metrics", "/eval"]; }

    // Memory Resolver for Relative Pronouns ("What tech did he use for it?", "Tell me about that project")
    if (!response && (q.includes("it") || q.includes("that") || q.includes("this project") || q.includes("tech stack") || q.includes("how does it work"))) {
      if (activeContext === 'boddai') { response = knowledgeGraph.boddai; nextChips = ["Explain Kahn's Algo", "Explain DAG"]; }
      else if (activeContext === 'sentinel') { response = knowledgeGraph.sentinel; nextChips = ["Explain YOLO11n", "Explain ByteTrack"]; }
      else if (activeContext === 'greentravel') { response = knowledgeGraph.greentravel; nextChips = ["Explain Celonis", "Projects"]; }
      else if (activeContext === 'decodelabs') { response = knowledgeGraph.decodelabs_suite; nextChips = ["Decodelabs Intern", "/eval"]; }
    }

    // Project Query Router
    if (!response && (q.includes("project") || q.includes("built") || q.includes("made") || q.includes("system") || q.includes("work") || q.includes("architecture"))) {
      if (q.includes("sentinel") || q.includes("esp32") || q.includes("camera") || q.includes("edge")) { response = knowledgeGraph.sentinel; detectedContext = 'sentinel'; nextChips = ["Explain YOLO11n", "Explain ByteTrack", "Other Projects"]; }
      else if (q.includes("bodd") || q.includes("workspace") || q.includes("graph")) { response = knowledgeGraph.boddai; detectedContext = 'boddai'; nextChips = ["Explain Kahn's Algo", "Explain DAG", "Other Projects"]; }
      else if (q.includes("green") || q.includes("travel") || q.includes("carbon") || q.includes("co2")) { response = knowledgeGraph.greentravel; detectedContext = 'greentravel'; nextChips = ["Explain Celonis", "Other Projects"]; }
      else if (q.includes("decode") && (q.includes("suite") || q.includes("agent"))) { response = knowledgeGraph.decodelabs_suite; detectedContext = 'decodelabs'; nextChips = ["Decodelabs Intern", "Other Projects"]; }
      else { response = knowledgeGraph.all_projects; nextChips = ["SentinelAI", "Bodd AI", "GreenTravel API", "Decodelabs Suite"]; }
    }

    // General Background, Education, Experience & Credentials
    if (!response) {
      if (q.includes("hire") || q.includes("why") || q.includes("evaluation") || q.includes("good candidate")) { response = knowledgeGraph.hire; nextChips = ["/projects", "/stack", "/contact"]; }
      else if (q.includes("startup") || q.includes("biology") || q.includes("maharashtra") || q.includes("edtech")) { response = knowledgeGraph.startup; nextChips = ["/projects", "/eval"]; }
      else if (q.includes("decode") || q.includes("intern") || q.includes("internship")) { response = knowledgeGraph.decodelabs_intern; detectedContext = 'decodelabs'; nextChips = ["Decodelabs Suite", "/eval"]; }
      else if (q.includes("trendles") || q.includes("e-cell") || q.includes("pr")) { response = knowledgeGraph.trendles; nextChips = ["Decodelabs Intern", "Education"]; }
      else if (q.includes("iiit") || q.includes("cgpa") || q.includes("marks") || q.includes("education") || q.includes("school") || q.includes("college")) { response = knowledgeGraph.education; nextChips = ["/eval", "/projects", "/stack"]; }
      else if (q.includes("skill") || q.includes("stack") || q.includes("competenc") || q.includes("languages")) { response = knowledgeGraph.skills; nextChips = ["Explain Kahn's Algo", "/projects", "/eval"]; }
      else if (q.includes("achieve") || q.includes("hackathon") || q.includes("certif") || q.includes("aws") || q.includes("anthropic") || q.includes("sih")) { response = knowledgeGraph.achievements; nextChips = ["/eval", "/projects"]; }
      else if (q.includes("telemetry") || q.includes("auditor") || q.includes("spotify") || q.includes("github")) { response = knowledgeGraph.telemetry; nextChips = ["/projects", "Explain React Fiber"]; }
      else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach")) { response = knowledgeGraph.contact; nextChips = ["/eval", "/projects"]; }
      else if (q.includes("who") || q.includes("shubhomoy") || q.includes("about") || q.includes("manifesto")) { response = knowledgeGraph.overview; nextChips = ["/eval", "/projects", "/stack"]; }
      else {
        response = "Command or intent not explicitly mapped. Try asking about his projects ('SentinelAI', 'Bodd AI'), CS concepts ('Explain Kahn's Algo', 'Explain DAG'), academic record ('CGPA'), or enter '/help' for commands.";
        nextChips = ["/projects", "/eval", "/help", "CGPA & Marks"];
      }
    }

    if (detectedContext) setActiveContext(detectedContext);
    return { resp: response, chips: nextChips };
  };

  const simulateStreaming = (fullText, chips) => {
    setIsThinking(false);
    setIsTyping(true);
    let currentText = "";
    let i = 0;
    
    setMessages(prev => [...prev, { role: 'ai', text: '' }]);

    const streamInterval = setInterval(() => {
      currentText += fullText.charAt(i);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = currentText;
        return newMessages;
      });
      i++;
      if (i >= fullText.length) {
        clearInterval(streamInterval);
        setIsTyping(false);
        setSuggestedChips(chips);
      }
    }, 3); // High-speed streaming engine
  };

  const handleSend = (overrideQuery = null) => {
    const userQuery = (overrideQuery || input).trim();
    if (!userQuery || isTyping || isThinking) return;
    
    setCommandHistory(prev => [userQuery, ...prev]);
    setHistoryIndex(-1);

    setMessages(prev => [...prev, { role: 'user', text: userQuery }]);
    setInput('');
    setIsThinking(true);
    setThoughtLogs([]);

    const thoughtProcess = [
      `[SYS_DECODE] Parsing intent vector & tokenizing input: "${userQuery}"...`,
      `[MEM_SYNC] Synchronizing conversation context buffer (Active: ${activeContext || 'GLOBAL'})...`,
      `[NEURAL_GRAPH] Traversing 20+ portfolio schemas & deep engineering dictionary...`,
      `[STREAM_INIT] Generating optimal candidate answer tokens...`
    ];

    let step = 0;
    const thoughtInterval = setInterval(() => {
      if (step < thoughtProcess.length) {
        setThoughtLogs(prev => [...prev, thoughtProcess[step]]);
        step++;
      } else {
        clearInterval(thoughtInterval);
        const { resp, chips } = processQuery(userQuery);
        if (resp !== null) {
          simulateStreaming(resp, chips);
        } else {
          setIsThinking(false);
        }
      }
    }, 120);
  };

  const handleKeyDown = (e) => {
    if (commandHistory.length === 0) return;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`relative group flex items-center justify-center w-16 h-16 rounded-full bg-[#070b14] border ${isOpen ? 'border-sky-500 shadow-[0_0_30px_rgba(56,189,248,0.5)]' : 'border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.8)]'} hover:border-sky-400 transition-all duration-300 overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-sky-500/10 ${isOpen ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`}></div>
          <svg className={`w-6 h-6 text-sky-400 transition-transform duration-500 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <svg className={`absolute w-6 h-6 text-sky-400 transition-transform duration-500 ${isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          {!isOpen && <div className="absolute inset-0 rounded-full border border-sky-500/50 animate-ping"></div>}
        </button>
      </div>

      {/* Main Terminal Window */}
      <div className={`fixed bottom-28 right-6 md:right-10 w-[calc(100vw-48px)] ${isMaximized ? 'md:w-212.5 h-[82vh]' : 'md:w-125 h-160 max-h-[82vh]'} bg-[#030508]/95 backdrop-blur-3xl border border-slate-700 rounded-2xl shadow-[0_30px_90px_-15px_rgba(0,0,0,0.95)] z-100 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
        
        {/* Terminal Header */}
        <div className="bg-[#070b14] px-5 py-4 border-b border-slate-800 flex justify-between items-center relative overflow-hidden select-none">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-sky-500 to-transparent"></div>
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded-full border border-sky-500/30 bg-sky-500/10 flex items-center justify-center text-sky-400">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs tracking-widest font-mono uppercase">Shubh-AI // Neural Engine v11.0</h3>
              <p className="text-sky-500 text-[9px] tracking-widest font-mono uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span> Context Buffer: {activeContext ? activeContext.toUpperCase() : 'GLOBAL'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 relative z-10">
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-slate-400 hover:text-white p-1 transition-colors text-xs font-mono"
            >
              {isMaximized ? "🗗" : "🗖"}
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-red-400 p-1 transition-colors text-xs font-mono"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Message Conversation Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className={`text-[9px] font-mono tracking-widest uppercase mb-1 flex items-center gap-1 ${msg.role === 'user' ? 'text-amber-400' : msg.role === 'system' ? 'text-slate-500' : 'text-sky-400'}`}>
                {msg.role === 'user' ? 'GUEST_OPERATOR' : msg.role === 'system' ? 'SYS_KERNEL' : 'SHUBH_AI'}
              </span>
              <div className={`px-4 py-3 max-w-[92%] font-mono text-[11px] leading-relaxed tracking-wide whitespace-pre-line ${
                msg.role === 'user' 
                  ? 'bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-2xl rounded-tr-sm' 
                  : msg.role === 'system'
                  ? 'bg-transparent border border-slate-800 text-slate-500 w-full rounded-sm text-[10px]'
                  : 'bg-slate-900/80 border border-slate-700/80 text-slate-200 rounded-2xl rounded-tl-sm shadow-[0_0_20px_rgba(56,189,248,0.05)]'
              }`}>
                {msg.text}
                {isTyping && i === messages.length - 1 && msg.role === 'ai' && (
                  <span className="inline-block w-1.5 h-3 bg-sky-400 ml-1 animate-pulse align-middle"></span>
                )}
              </div>
            </div>
          ))}
          
          {/* Chain-of-Thought (CoT) Visualizer */}
          {isThinking && (
            <div className="flex flex-col items-start w-full border border-slate-800 rounded-xl p-3 bg-slate-950/80 font-mono text-[9px] text-slate-400 space-y-1.5 shadow-inner">
               <span className="text-sky-400 font-bold mb-1">[CHAIN-OF-THOUGHT REASONING]</span>
               {thoughtLogs.map((log, index) => (
                 <span key={index} className="animate-fade-in text-sky-500/80 flex items-center gap-1">
                   <span className="text-slate-600">›</span> {log}
                 </span>
               ))}
               <span className="animate-pulse text-sky-400">_</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Dynamic Context Chips */}
        {!isTyping && !isThinking && suggestedChips.length > 0 && (
          <div className="px-5 pb-3 flex flex-wrap gap-2 border-b border-slate-800/60 bg-[#070b14]">
            {suggestedChips.map((chip, idx) => (
              <button 
                key={idx}
                onClick={() => handleSend(chip)} 
                className="text-[9px] font-mono uppercase tracking-wider text-slate-300 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded-lg hover:text-white hover:border-sky-400 hover:bg-sky-500/10 transition-all"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Command Input Area */}
        <div className="p-4 bg-slate-950">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center">
            <span className="absolute left-4 text-sky-500 font-mono text-sm font-bold">{'>'}</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isTyping || isThinking}
              placeholder={isThinking || isTyping ? "AWAITING ENGINE PROCESSING..." : "Ask query or type command (e.g. '/help')..."}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3.5 pl-9 pr-12 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isTyping || isThinking}
              className="absolute right-2 p-2 bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-[#070b14] rounded-lg transition-colors disabled:opacity-30 disabled:hover:bg-sky-500/10 disabled:hover:text-sky-500"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </>
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
      link: null
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

  // State for Modal & Active Tabs
  const [activeProject, setActiveProject] = useState(null);
  const [modalTab, setModalTab] = useState("architecture");

  // Architecture Projects Array
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

  // --- OPERATOR TELEMETRY DATA (LIVE GITHUB INTEGRATION) ---
  const GITHUB_USERNAME = "Shubhomoy919";

  const [activeCommit, setActiveCommit] = useState(null);
  const [isGithubLoading, setIsGithubLoading] = useState(true);

  // Live Language State (Replaces static wakatimeData)
  const [languageTelemetry, setLanguageTelemetry] = useState([
    { lang: "Python", percent: 55, color: "bg-blue-500" },
    { lang: "JavaScript", percent: 25, color: "bg-amber-400" },
    { lang: "TypeScript", percent: 15, color: "bg-sky-400" },
    { lang: "Jupyter", percent: 5, color: "bg-orange-500" }
  ]);

  // Live Commits State
  const [currentMonthCommits, setCurrentMonthCommits] = useState({});

  const now = new Date();
  const currentMonthName = now.toLocaleString('en-US', { month: 'short' });
  const currentYear = now.getFullYear();
  const daysInCurrentMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsGithubLoading(true);

        // 1. Fetch Repositories to calculate exact real-time language percentages
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        if (reposRes.ok) {
          const repos = await reposRes.json();
          const langBytes = {};
          let totalBytes = 0;

          const colorMap = {
            Python: "bg-blue-500",
            JavaScript: "bg-amber-400",
            TypeScript: "bg-sky-400",
            "Jupyter Notebook": "bg-orange-500",
            "C++": "bg-indigo-500",
            C: "bg-slate-400",
            HTML: "bg-red-500",
            CSS: "bg-fuchsia-500"
          };

          // Fetch individual language stats for each repo
          await Promise.all(
            repos.map(async (repo) => {
              if (repo.fork) return; // Ignore forks for accurate personal telemetry
              try {
                const langRes = await fetch(repo.languages_url);
                if (langRes.ok) {
                  const languages = await langRes.json();
                  Object.entries(languages).forEach(([lang, bytes]) => {
                    langBytes[lang] = (langBytes[lang] || 0) + bytes;
                    totalBytes += bytes;
                  });
                }
              } catch (e) {
                console.error("Language fetch error:", e);
              }
            })
          );

          if (totalBytes > 0) {
            const formattedLangs = Object.entries(langBytes)
              .map(([lang, bytes]) => ({
                lang: lang === "Jupyter Notebook" ? "Jupyter" : lang,
                percent: Math.round((bytes / totalBytes) * 100),
                color: colorMap[lang] || "bg-emerald-400"
              }))
              .filter(item => item.percent > 0)
              .sort((a, b) => b.percent - a.percent)
              .slice(0, 4); // Keep top 4 languages

            if (formattedLangs.length > 0) setLanguageTelemetry(formattedLangs);
          }
        }

        // 2. Fetch User Events to count exact daily commits for the Current Month
        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`);
        if (eventsRes.ok) {
          const events = await eventsRes.json();
          const commitCounts = {};

          events.forEach(event => {
            if (event.type === "PushEvent") {
              const eventDate = new Date(event.created_at);
              if (eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === currentYear) {
                const day = eventDate.getDate();
                const commitSize = event.payload?.commits?.length || 1;
                commitCounts[day] = (commitCounts[day] || 0) + commitSize;
              }
            }
          });
          setCurrentMonthCommits(commitCounts);
        }
      } catch (err) {
        console.error("GitHub API Error:", err);
      } finally {
        setIsGithubLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Replaces the old random heatmapData logic with the live GitHub payload
  const heatmapData = useMemo(() => {
    return Array.from({ length: daysInCurrentMonth }).map((_, idx) => {
      const dayNum = idx + 1;
      const commits = currentMonthCommits[dayNum] || 0;
      
      let level = 0;
      if (commits > 0 && commits <= 2) level = 1;
      else if (commits > 2 && commits <= 5) level = 2;
      else if (commits > 5 && commits <= 9) level = 3;
      else if (commits > 9) level = 4;

      return { 
        id: dayNum, 
        day: dayNum,
        date: `${currentMonthName} ${dayNum}, ${currentYear}`, 
        commits, 
        level 
      };
    });
  }, [currentMonthCommits, daysInCurrentMonth, currentMonthName, currentYear]);

  // --- STATIC DIAGNOSTIC LOGS & METRICS ---
  const auditorLogs = [
    { module: "DOM Tree", status: "Scanned", msg: "React Fiber tree optimized. No wasteful re-renders." },
    { module: "CSS Engine", status: "Verified", msg: "Tailwind v4 canonical classes applied." },
    { module: "A11y", status: "Passed", msg: "Contrast ratios > 4.5:1. ARIA labels mapped." }
  ];

  const spotifyData = {
    song: "The Morning",
    artist: "The Weeknd",
    albumArtUrl: "https://i1.sndcdn.com/artworks-LUIwi9mJIYG1-0-t500x500.jpg", 
    colorGlow: "rgba(220,38,38,0.3)" 
  };

  const bioMetrics = {
    cognitive: { label: "Cognitive Load (Code)", hours: 38, max: 40, color: "bg-sky-500" },
    physical: { label: "Physical Load (Gym)", hours: 8, max: 12, color: "bg-amber-500" }
  };

  return (
    <div className="min-h-screen bg-[#030508] text-slate-100 font-sans selection:bg-amber-500 selection:text-black relative overflow-x-hidden">

      {/* --- EXACT AMBIENT BACKGROUND GLOWS (FROM SCREENSHOT) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Intense Amber glow on the left */}
        <div className="absolute top-[5%] left-[-15%] w-150 h-150 rounded-full bg-amber-500/15 blur-[120px]"></div>
        {/* Deep Indigo/Purple glow on the right */}
        <div className="absolute top-[25%] right-[-15%] w-150 h-150 rounded-full bg-indigo-500/15 blur-[120px]"></div>
      </div>

{/* --- INTERACTIVE MOUSE SPOTLIGHT BACKGROUND --- */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition duration-300 hidden lg:block" 
        style={{ background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.05), transparent 80%)` }}
      ></div>

      {/* --- GLOBAL NAVIGATION BAR --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#030508]/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LEFT SIDE: Your Full Name */}
          <a href="#" className="text-xl md:text-2xl font-black tracking-tighter text-white hover:opacity-80 transition-opacity flex items-center gap-1.5">
            Shubhomoy<span className="text-amber-500">Sarkar</span>
          </a>
          
          {/* RIGHT SIDE: Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-slate-400">
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Architecture</a>
            <a href="#telemetry" className="hover:text-amber-400 transition-colors">Telemetry</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Arsenal</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* MOBILE ONLY: Connect Button */}
          <a href="#contact" className="md:hidden text-amber-500 font-mono text-[10px] uppercase tracking-widest border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 rounded-md hover:bg-amber-500/20 transition-colors">
            Connect
          </a>
          
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

      {/* --- 2. ENGINEERING MANIFESTO --- */}
      <section id="manifesto" className="relative z-10 px-6 py-32">
        <RevealSection>
          <div className="max-w-5xl mx-auto bg-slate-900/30 border border-slate-800 rounded-[3rem] p-10 md:p-24 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-1000">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-amber-400 via-indigo-500 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-white flex items-center gap-6">
              <span className="text-transparent bg-clip-text bg-linear-to-b from-amber-400 to-amber-700">/</span> Engineering Manifesto
            </h2>
            
            <div className="space-y-8 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                I build at the cross-section of <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400 font-medium">full-stack engineering</span> and <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400 font-medium">applied AI</span>. Beyond just making code compile, I focus on systems efficiency, reliable architecture, and predictive ML pipelines that solve real problems.
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

      {/* --- 3. EDUCATION & EXPERIENCE --- */}
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

                  {(item.certLink || item.lorLink) && (
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {item.certLink && (
                        <a 
                          href={item.certLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group/cert relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-indigo-300 bg-indigo-950/40 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                        >
                          <span className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/cert:translate-x-[300%] transition-transform duration-1000 ease-in-out"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                          <span>Completion Certificate</span>
                          <span className="inline-block transition-transform duration-300 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5">↗</span>
                        </a>
                      )}

                      {item.lorLink && (
                        <a 
                          href={item.lorLink} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group/lor relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
                        >
                          <span className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/lor:translate-x-[300%] transition-transform duration-1000 ease-in-out"></span>
                          <span className="text-emerald-400 font-bold">★</span>
                          <span>Letter of Recommendation</span>
                          <span className="inline-block transition-transform duration-300 group-hover/lor:translate-x-0.5 group-hover/lor:-translate-y-0.5">↗</span>
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

      {/* --- 4. SYSTEM ARCHITECTURE (PROJECTS) --- */}
      <section id="projects" className="relative z-10 py-32 bg-[#030508] border-t border-slate-900">
        <RevealSection>
          <div className="max-w-7xl mx-auto px-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {architectureProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => { setActiveProject(project); setModalTab("architecture"); }}
                  className="group relative rounded-3xl bg-[#070b14] border border-slate-800/80 hover:border-slate-500/50 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] flex flex-col min-h-105"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] blur-[1px] z-20"></div>

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

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-mono text-slate-300 bg-slate-900 rounded border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

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

     {/* --- 5. OPERATOR TELEMETRY (LIVE API ADVANCED) --- */}
      <section id="telemetry" className="relative z-10 py-32 bg-[#030508] border-t border-slate-900 overflow-hidden">
        {/* Advanced Ambient Background Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-size-[48px_48px]"></div>

        <RevealSection>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Section Header */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white flex items-center gap-4 mb-4 tracking-tight">
                  <span className="text-emerald-500 font-light">/</span> Operator Telemetry
                </h2>
                <p className="text-slate-400 font-mono text-sm tracking-widest uppercase pl-8 border-l border-slate-800">
                  Live API Analytics & Activity Patterns
                </p>
              </div>
              
              {/* GitHub Link Chip */}
              <div 
                className="hidden md:flex items-center gap-3 bg-slate-900/50 backdrop-blur-md border border-slate-800 px-5 py-2.5 rounded-xl hover:border-slate-700 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all cursor-pointer group" 
                onClick={() => window.open('https://github.com/Shubhomoy919', '_blank')}
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <div className="flex flex-col">
                  <span className="text-slate-500 font-mono text-[9px] uppercase tracking-widest leading-none">GitHub Profile</span>
                  <span className="text-white font-mono text-xs font-bold tracking-widest leading-none mt-1">Shubhomoy919</span>
                </div>
              </div>
            </div>

            {/* BENTO GRID: ROW 1 (Live Current Month Heatmap) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-3 bg-[#070b14]/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-all duration-300 shadow-2xl overflow-hidden group">
                <div className="flex justify-between items-start md:items-center mb-8 flex-col md:flex-row gap-4">
                  <div>
                    <p className="text-slate-500 font-mono text-xs tracking-widest uppercase flex items-center gap-2 mb-1">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                      {currentMonthName} {currentYear} Contribution Matrix
                    </p>
                    <p className="text-slate-400 text-xs">Live API temporal analysis of push events to main branches.</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-ping"></span>
                    <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                      {isGithubLoading ? "Fetching API..." : "Live Connection"}
                    </span>
                  </div>
                </div>

                {/* Dynamic Month Mapping */}
                <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                  <div className="flex flex-wrap gap-2.5 items-center relative z-10 min-w-max">
                    {heatmapData.map((data) => (
                      <div 
                        key={data.day} 
                        onMouseEnter={() => setActiveCommit(data)}
                        onMouseLeave={() => setActiveCommit(null)}
                        className={`relative w-7 h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center font-mono text-[10px] transition-all duration-300 hover:scale-110 hover:z-20 cursor-crosshair border ${
                          data.level === 0 ? 'bg-slate-900/60 border-slate-800 text-slate-600 hover:border-slate-700' :
                          data.level === 1 ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300 hover:border-emerald-600' :
                          data.level === 2 ? 'bg-emerald-800/90 border-emerald-600 text-emerald-100' :
                          data.level === 3 ? 'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_10px_#059669]' :
                          'bg-emerald-400 border-emerald-200 text-slate-950 font-bold shadow-[0_0_15px_#34d399]'
                        }`}
                      >
                        {data.day}
                        
                        {/* Interactive Tooltip */}
                        {activeCommit?.day === data.day && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-[10px] whitespace-nowrap z-50 flex flex-col items-center pointer-events-none shadow-2xl">
                            <span className="text-emerald-400 font-bold">{data.commits} contributions</span>
                            <span className="text-slate-400">{data.date}</span>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-[5px] border-transparent border-t-slate-700"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BENTO GRID: ROW 2 (Auditor & Live Language Telemetry) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              
              {/* Portfolio Auditor */}
              <div className="lg:col-span-2 bg-[#070b14]/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-all duration-300 flex flex-col group relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-linear-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <p className="text-slate-500 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                    <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    GenAI Portfolio Auditor
                  </p>
                  <span className="text-[9px] font-mono text-sky-400 border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 rounded-full">RUNNING LOCAL</span>
                </div>

                <div className="space-y-4 grow relative z-10 flex flex-col justify-end">
                  <p className="text-slate-400 text-sm mb-2">Simulated agent analyzing the active React instance of this portfolio.</p>
                  
                  {auditorLogs.map((log, i) => (
                    <div key={i} className={`flex flex-col gap-1 pb-3 ${i !== auditorLogs.length - 1 ? 'border-b border-slate-800/50' : ''}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">Target: {log.module}</span>
                        <span className="text-[10px] font-mono text-sky-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          {log.status}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-400 leading-snug">{log.msg}</p>
                    </div>
                  ))}
                  
                  <div className="pt-2">
                    <p className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-3 bg-sky-500 animate-pulse block"></span> Awaiting next interaction block...
                    </p>
                  </div>
                </div>
              </div>

              {/* Live GitHub Language Telemetry */}
              <div className="lg:col-span-1 bg-[#070b14]/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-all duration-300 flex flex-col relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-700"></div>
                
                <p className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-2 relative z-10">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  Language Telemetry
                </p>
                <p className="text-[10px] text-slate-400 font-mono mb-4 uppercase tracking-widest">
                  {isGithubLoading ? "Scanning GitHub API..." : "Live Repository Distribution"}
                </p>
                
                <div className="mt-auto space-y-5 relative z-10">
                  {isGithubLoading ? (
                    // Loading Skeleton
                    Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="h-3 w-1/3 bg-slate-800 rounded animate-pulse"></div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden"></div>
                      </div>
                    ))
                  ) : (
                    // Live Fetched Data
                    languageTelemetry.map((data, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white font-bold">{data.lang}</span>
                          <span className="font-mono text-slate-400">{data.percent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${data.color} rounded-full transition-all duration-1000 ease-out`} 
                            style={{ width: `${data.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* BENTO GRID: ROW 3 (Spotify & Bio-Metrics) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Spotify Currently Playing */}
              <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-all duration-300 flex flex-col relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-fuchsia-500/10 transition-colors duration-700"></div>
                
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                    Current Favourite Song
                  </p>
                  
                  {/* Animated Sound Wave */}
                  <div className="flex items-end gap-0.5 h-3">
                    <div className="w-0.5 bg-emerald-500 animate-[pulse_1s_ease-in-out_infinite] h-full"></div>
                    <div className="w-0.5 bg-emerald-500 animate-[pulse_1.5s_ease-in-out_infinite] h-2/3"></div>
                    <div className="w-0.5 bg-emerald-500 animate-[pulse_0.8s_ease-in-out_infinite] h-1/2"></div>
                    <div className="w-0.5 bg-emerald-500 animate-[pulse_1.2s_ease-in-out_infinite] h-full"></div>
                  </div>
                </div>
                
                <div className="mt-auto flex items-center gap-4 relative z-10">
                  {/* ADVANCED VINYL RECORD COMPONENT */}
                  <div 
                    className="relative w-14 h-14 rounded-full animate-[spin_4s_linear_infinite] shrink-0 border border-slate-800 transition-shadow duration-500 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                    style={{ boxShadow: `0 0 15px ${spotifyData.colorGlow}` }}
                  >
                    <img 
                      src={spotifyData.albumArtUrl} 
                      alt="Album Art" 
                      className="absolute inset-0 w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] rounded-full pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#070b14] rounded-full border border-slate-700/80 shadow-inner z-10"></div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm truncate">{spotifyData.song}</span>
                    <span className="text-slate-400 text-xs">{spotifyData.artist}</span>
                  </div>
                </div>
              </div>

              {/* Bio-Metrics (Gym vs Code) */}
              <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 hover:border-slate-700 transition-all duration-300 flex flex-col relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-700"></div>
                
                <p className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-2 relative z-10">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Bio-Metrics // Discipline
                </p>
                
                <div className="mt-auto space-y-6 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <p className="text-slate-300 text-sm leading-relaxed lg:w-1/3">
                    Reliable systems and physical fitness require identical principles: <span className="text-white font-bold">consistency & progressive overload.</span>
                  </p>
                  
                  <div className="space-y-4 lg:w-2/3 flex flex-col justify-center">
                    {/* Cognitive Load Bar */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{bioMetrics.cognitive.label}</span>
                        <span className="text-sky-400 font-bold text-xs">{bioMetrics.cognitive.hours} <span className="text-slate-500 font-light font-mono text-[9px]">HRS/WK</span></span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full border border-slate-800 overflow-hidden">
                        <div className={`h-full ${bioMetrics.cognitive.color} rounded-full`} style={{ width: `${(bioMetrics.cognitive.hours / bioMetrics.cognitive.max) * 100}%` }}></div>
                      </div>
                    </div>

                    {/* Physical Load Bar */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{bioMetrics.physical.label}</span>
                        <span className="text-amber-500 font-bold text-xs">{bioMetrics.physical.hours} <span className="text-slate-500 font-light font-mono text-[9px]">HRS/WK</span></span>
                      </div>
                      <div className="w-full h-2 bg-slate-950 rounded-full border border-slate-800 overflow-hidden">
                        <div className={`h-full ${bioMetrics.physical.color} rounded-full`} style={{ width: `${(bioMetrics.physical.hours / bioMetrics.physical.max) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </RevealSection>
      </section>
      {/* --- COMMAND CENTER MODAL --- */}
      {activeProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl transition-opacity"
            onClick={() => setActiveProject(null)}
          ></div>

          <div className="relative w-full max-w-5xl bg-[#030508] border border-slate-700 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh] ring-1 ring-white/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 border-b border-slate-800 bg-[#070b14]">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-amber-500 font-mono text-xs tracking-widest uppercase border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-sm">
                  {activeProject.id}.exe
                </span>
                <h3 className="text-white font-bold tracking-tight text-lg">{activeProject.title} // Command Center</h3>
              </div>
              
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

            <div className="p-6 md:p-8 overflow-y-auto relative">
              <div className="absolute inset-0 bg-[#030508]/95 z-0"></div>
              
              <div className="relative z-10 flex flex-col gap-6">
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
                    
                    <div className="relative z-10 pl-4 md:pl-8 border-l-2 border-slate-800 space-y-8 py-2">
                      {activeProject.blueprint.map((step, index) => (
                        <div key={index} className="relative pl-6 md:pl-8">
                          <div className={`absolute -left-1.25 md:-left-2.25 top-1.5 w-2 h-2 md:w-4 md:h-4 rounded-full bg-slate-950 border-2 ${
                            activeProject.color === 'emerald' ? 'border-emerald-500' : 
                            activeProject.color === 'amber' ? 'border-amber-500' : 
                            activeProject.color === 'sky' ? 'border-sky-500' : 'border-indigo-500'
                          }`}></div>
                          
                          {index !== activeProject.blueprint.length - 1 && (
                            <div className="absolute -left-3.5 md:-left-4.5 top-10 text-slate-700">↓</div>
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
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(activeProject.metrics).map(([key, value], i) => (
                        <div key={i} className="bg-[#070b14] border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors">
                          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-2">{key}</p>
                          <p className="text-white font-mono text-sm md:text-lg">{value}</p>
                        </div>
                      ))}
                    </div>

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

      {/* --- 6. ARSENAL (SKILLS) --- */}
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

      {/* --- 7. HALL OF RECORDS (ACHIEVEMENTS) --- */}
      <section id="achievements" className="relative z-10 border-t border-slate-900 bg-[#030508] py-24 overflow-hidden">
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
                  <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 shadow-inner">
                        {item.category}
                      </span>
                      <span className="text-slate-500 font-mono text-xs font-light">{item.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-100 mb-3 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-400 font-light leading-relaxed text-sm mb-6">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-800/60 flex justify-between items-center">
                    <span className="text-slate-500 font-mono text-[11px] tracking-wider uppercase">
                      Status
                    </span>

                    <div className="flex items-center gap-3">
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group/btn relative inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/20 hover:text-white transition-all duration-300 active:scale-95"
                        >
                          <span>Verify</span>
                          <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                        </a>
                      )}

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

      {/* --- 8. CONTACT SECTION --- */}
      <section id="contact" className="relative z-10 border-t border-slate-900 bg-[#030508] py-32">
        <RevealSection>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
              Ready to Engineer <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-fuchsia-400">The Future.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 font-normal max-w-2xl mx-auto leading-relaxed">
              Actively seeking software engineering internships and highly challenging roles at tier-one technology companies. Let's build something massive.
            </p>
            
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

<DigitalTwin />

    </div>
  );
};

export default App;