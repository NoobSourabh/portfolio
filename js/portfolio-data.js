// js/portfolio-data.js
// Centralized portfolio data source extracted from GitHub @noobsourabh profile

export const portfolioData = {
  personal: {
    name: "Sourabh Chouhan",
    firstName: "Sourabh",
    lastName: "Chouhan",
    initials: "S ✦ C",
    role: "Frontend Developer",
    company: "RSENL AI Labs",
    tagline: "Frontend & Creative Developer | Generative AI & Automation Enthusiast",
    location: "Indore, India",
    resumeUrl: "https://drive.google.com/file/d/1lhunYlVGdRqDiOsPf6xECVWj0x6tDbzR/view?usp=sharing",
    bio: "I'm a Frontend & Creative Developer who specializes in building high-performance web applications, interactive web tools, browser extensions, and AI automation workflows. Passionate about modern frontend architectures, responsive UI animations, intuitive user experiences, and problem solving with clean code.",
    subBio: "Code / Creative / Interactions / Repeat",
    modeTag: "Showcase Mode: ON"
  },
  socials: {
    github: "https://github.com/NoobSourabh",
    linkedin: "https://www.linkedin.com/in/sourabh-chouhan31/",
    leetcode: "https://leetcode.com/u/SourabhNoob/",
    email: "dev.sourabhc@gmail.com"
  },
  experience: [
    {
      company: "RSENL AI Labs",
      role: "Frontend Developer",
      period: "Sept 2025 – Present",
      location: "Remote",
      highlights: [
        "Built an automated media processing utility (Python, Playwright) and Gemini AI analysis script for a Netflix pilot, automating expression tagging across 100+ reaction clips.",
        "Engineered an automated AI OCR extraction workflow via a custom Chrome Extension (MV3, React) parsing unstructured newspaper auction clippings, boosting throughput by 100x.",
        "Developed a bank auction property scraper processing thousands of daily listings with automated deduplication and direct cloud sync to Google Sheets & Drive.",
        "Architected dynamic frontend canvas rendering and real-time state synchronization for an in-house creative editor, ensuring seamless multi-track timeline interactions at 60fps.",
        "Crafted responsive landing pages and product showcases with GSAP ScrollTrigger animations, interactive focal carousels, and optimized Core Web Vitals via Cloudflare Pages and Next.js."
      ]
    }
  ],
  services: [
    {
      id: "service-1",
      title: "Creative Frontend & Motion",
      description: "Fluid GSAP ScrollTrigger animations, micro-interactions, and canvas graphics that turn static web pages into engaging digital stories.",
      image: "/images/services/service-1.jpg"
    },
    {
      id: "service-2",
      title: "AI Automation & Web Tools",
      description: "Custom Manifest V3 Chrome extensions, automated scrapers, intelligent OCR workflows, and API integrations for modern productivity workflows.",
      image: "/images/services/service-2.jpg?v=2"
    },
    {
      id: "service-3",
      title: "High-Performance Web Apps",
      description: "Production-ready architectures built with React 19, Next.js 16, TypeScript, Vite, and Zustand for blazing-fast speed and scalability.",
      image: "/images/services/service-3.jpg"
    },
    {
      id: "service-4",
      title: "UI/UX & Design Systems",
      description: "Translating complex design concepts into modular, accessible, pixel-perfect interfaces with TailwindCSS and cohesive component systems.",
      image: "/images/services/service-4.jpg"
    }
  ],
  featuredWorkHeader: "Tools & Technologies",
  tools: [
    { name: "Cursor", category: "AI Code Editor", file: "cursor.svg", icon: "/images/tools/cursor.svg" },
    { name: "Antigravity", category: "AI Agent Platform", file: "antigravity.svg", icon: "/images/tools/antigravity.svg" },
    { name: "Windsurf", category: "Agentic IDE", file: "windsurf.svg", icon: "/images/tools/windsurf.svg" },
    { name: "React", category: "UI Library", file: "react.svg", icon: "/images/tools/react.svg" },
    { name: "Next.js", category: "Full-Stack React", file: "nextjs.svg", icon: "/images/tools/nextjs.svg" },
    { name: "TypeScript", category: "Type-Safe JS", file: "typescript.svg", icon: "/images/tools/typescript.svg" },
    { name: "JavaScript", category: "Core Language", file: "javascript.svg", icon: "/images/tools/javascript.svg" },
    { name: "TailwindCSS", category: "Utility-First CSS", file: "tailwindcss.svg", icon: "/images/tools/tailwindcss.svg" },
    { name: "Redux Toolkit", category: "State Management", file: "redux.svg", icon: "/images/tools/redux.svg" },
    { name: "Framer Motion", category: "React Animations", file: "framer-motion.svg", icon: "/images/tools/framer-motion.svg" },
    { name: "GSAP", category: "High-Perf Motion", file: "gsap.svg", icon: "/images/tools/gsap.svg" },
    { name: "HTML5", category: "Semantic Markup", file: "html5.svg", icon: "/images/tools/html5.svg" },
    { name: "CSS3", category: "Modern Styling", file: "css3.svg", icon: "/images/tools/css3.svg" },
    { name: "Git & GitHub", category: "Version Control", file: "git-github.svg", icon: "/images/tools/git-github.svg" },
    { name: "VS Code", category: "Development IDE", file: "vscode.svg", icon: "/images/tools/vscode.svg" },
    { name: "Zustand & React Flow", category: "State & Flow Graphs", file: "zustand.svg", icon: "/images/tools/zustand.svg" }
  ],
  projects: [
    {
      id: "moji",
      title: "Moji",
      category: "Interactive Motion & Creative Studio",
      tech: "React • TypeScript • Canvas API • Tailwind CSS • Web APIs • State Machines",
      description: "Browser-based creative studio interface featuring modular React components, custom canvas rendering, multi-track interactive timeline, and streamlined client-side asset generation.",
      link: "https://github.com/NoobSourabh",
      image: "/images/work-items/work-item-1.jpg"
    },
    {
      id: "banana-shake",
      title: "Banana Shake",
      category: "AI Automation & OCR Extension",
      tech: "Chrome Extension (MV3) • Google Gemini • Google Sheets • OAuth 2.0 • Polar.sh",
      description: "Production-grade Chrome Extension automating batch image generation on Gemini and OCR processing for 100+ daily auction listings, boosting ingestion by 100x.",
      link: "https://github.com/NoobSourabh",
      image: "/images/work-items/work-item-2.jpg"
    },
    {
      id: "transitops",
      title: "TransitOps",
      category: "Fleet Operations Platform",
      tech: "React 19 • Vite • Tailwind CSS • FastAPI • PostgreSQL • SQLAlchemy • Recharts",
      description: "Centralized fleet operations platform for logistics companies built for Odoo Hackathon 2026 (Round 1 Winner & Round 2 Qualifier). Complete trip lifecycles, automated resource locking, and real-time analytics.",
      link: "https://transitops-outliers-site.onrender.com/",
      github: "https://github.com/KunalWaghe/TransitOps-Outliers",
      image: "/images/work-items/work-item-3.jpg"
    },
    {
      id: "urban-furniture",
      title: "Urban Furniture",
      category: "Double-Entry ERP System",
      tech: "Next.js 16 • React • TypeScript • FastAPI • PostgreSQL (Neon) • Tailwind CSS",
      description: "Full-stack double-entry ERP accounting system developed for Odoo Hackathon 2026 Round 2. Automated journal entries, master data management, and real-time Balance Sheet / P&L reporting.",
      link: "https://github.com/KunalWaghe/Urban-Furniture-Accounting-System---Outliers",
      github: "https://github.com/KunalWaghe/Urban-Furniture-Accounting-System---Outliers",
      image: "/images/work-items/work-item-4.jpg"
    },
    {
      id: "campus-connect",
      title: "Campus Connect",
      category: "Student Community Platform",
      tech: "React.js • Redux • TailwindCSS",
      description: "A community platform for IET-DAVV students to share interview experiences, prepare for placements, and collaborate with peers.",
      link: "https://campus-connect-iet.vercel.app",
      image: "/images/work-items/work-item-5.jpg"
    },
    {
      id: "crypto-dashboard",
      title: "Crypto Dashboard",
      category: "Real-Time Crypto Tracker",
      tech: "React.js • Chart.js • Material UI • Framer Motion",
      description: "Interactive cryptocurrency dashboard featuring live market analytics, customizable watchlists, responsive charts, pagination, and theme toggle.",
      link: "https://sourabhcryptodashboard.netlify.app",
      image: "/images/work-items/work-item-6.jpg"
    },
    {
      id: "texel",
      title: "Texel",
      category: "Figma-to-React Web App",
      tech: "React.js • TailwindCSS • SVG Animations",
      description: "Freelance client web application transforming Figma prototypes into a pixel-perfect, responsive, and performant user experience.",
      link: "https://texel.netlify.app",
      image: "/images/work-items/work-item-7.jpg"
    },
    {
      id: "qrify",
      title: "QRify",
      category: "Instant QR Code Generator",
      tech: "React.js • CSS • HTML5 Canvas",
      description: "Instant text-to-QR code generator with custom styling, format controls, and one-click export/sharing.",
      link: "https://sourabhqrify.netlify.app",
      image: "/images/work-items/work-item-8.jpg"
    }
  ],
  contact: {
    headline: "Let's Connect",
    description: "Got a project idea, need high-performance frontend engineering, interactive web applications, or just want to geek out over creative code? Let's build something extraordinary together.",
    email: "dev.sourabhc@gmail.com",
    quickChatHandle: "NoobSourabh",
    quickChatUrl: "https://github.com/NoobSourabh",
    location: "Indore, India"
  }
};

/**
 * Loads portfolio data from public/data/portfolio.json if available,
 * falling back to the bundled portfolioData.
 */
export async function getPortfolioData() {
  try {
    const baseUrl = (typeof import.meta !== "undefined" && import.meta.env?.BASE_URL) || "./";
    const dataUrl = baseUrl.endsWith("/") ? `${baseUrl}data/portfolio.json` : `${baseUrl}/data/portfolio.json`;
    const response = await fetch(dataUrl);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn("Using bundled portfolio data fallback:", err);
  }
  return portfolioData;
}
