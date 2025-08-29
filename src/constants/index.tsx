import project1 from "../assets/projects/logo.jpeg"; // FlatZ
import project2 from "../assets/projects/proj3.png"; // Verba.ai
import project3 from "../assets/projects/proj7.png"; // GenAI Health Assistant
import project4 from "../assets/projects/proj1.png"; // Chess Game
import project5 from "../assets/projects/proj8.png"; // Visualization Dashboards
import project6 from "../assets/projects/proj9.jpg";  // Library Management System

export const HERO_CONTENT = `Full-stack software engineer with 7+ years of real-time hands-on experience and 3+ years of industry work building accessible, performant apps. I specialize in React Native, Flutter, Python/FastAPI, and cloud-native architectures (AWS/Supabase). I’ve led teams and shipped production features across FlatZ (community platform), Verba.ai (iOS transcription), a GenAI virtual health assistant, and a Play-Store chess game. I love turning ideas into scalable, user-first products.`

export const ABOUT_TEXT = `
I’m an engineer-builder who enjoys owning products end-to-end—architecture, APIs, mobile UI/UX, CI/CD, and analytics. Recently I’ve focused on GenAI (LangChain, OpenAI/Claude, RAG) and iOS/React Native performance work. Outside code, you’ll find me playing guitar, sketching, and, unsurprisingly, thinking three moves ahead over a game of chess.
`

export const PROJECTS = [
  {
    title: "FlatZ – Community Living Platform",
    image: project1,
    description:
      "Led a cross-platform mobile app (React Native) and Python/FastAPI microservices powering authentication (Supabase), AI-assisted resident services, and IoT integrations. Built CI/CD, analytics dashboards, and recommendation features with LangChain + OpenAI.",
    technologies: ["React Native", "Python", "FastAPI", "Supabase", "AWS", "LangChain", "OpenAI", "IoT"],
    link: "www.flat-z.com", // 🔗 Replace with actual link
  },
  {
    title: "Verba.ai – Audio Transcription iOS App",
    image: project2,
    description:
      "Production-ready Swift/SwiftUI app with background-safe recording, real-time waveform, 30-second segmentation, and cloud + offline transcription (AssemblyAI with Apple fallback). SwiftData-backed session browser with export and dark/light mode.",
    technologies: ["Swift", "SwiftUI", "SwiftData", "AVAudioEngine", "AssemblyAI", "Apple Speech"],
    link: "https://github.com/Chandu1706/Verba.ai/tree/latest", // 🔗 Replace with actual link
  },
  {
    title: "GenAI Virtual Health Assistant",
    image: project3,
    description:
      "AI health assistant handling 1,500+ user queries with ~92% accuracy. Built triage, diet, and mental-health flows using OpenAI/GPT, logging/analytics pipelines, and scalable Azure deploys. Iterated UX via 3 user-testing rounds (100+ users).",
    technologies: ["Python", "React Native", "Azure", "OpenAI APIs", "LLM"],
    link: "https://ayusha-ai-d3wp.vercel.app/", // 🔗 Replace with actual link
  },
  {
    title: "Offline Chess Game (Play Store)",
    image: project4,
    description:
      "Feature-rich Flutter chess app with PvP and AI bot (multi-level difficulty). Custom game logic, themed boards, and low-end device optimizations; achieved a 99.5% crash-free rate across 500+ matches.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.chandukorubilli.chess", // ✅ Real Play Store link
  },
{
  title: "Visualization System Dashboards – D3.js & Tableau",
  image: project5, // swap with a dashboards-themed image if available
  description:
    "Built interactive data visualization dashboards using D3.js (custom SVG charts, tooltips, brushing/zoom, cross-filtering) and Tableau (KPIs, drill-downs, parameter controls). Implemented data shaping and joins, added time-series trends, cohort analyses, and export-ready views. Optimized for performance with debounced rendering and lazy-loaded datasets.",
  technologies: ["D3.js", "Tableau", "JavaScript", "CSV/JSON"],
  link: "https://github.com/Chandu1706/VisualizationSystem", // 🔗 Replace with actual link if different
},

{
  title: "Library Management System – Flask + MongoDB",
  image: project6, // update to a library-themed image if you have one
  description:
    "Full-stack library management app with a Flask REST API backend and MongoDB. Supports CRUD for books/members, issue/return workflows, availability tracking, advanced search & pagination, and role-based JWT authentication. Includes validation, error handling, and Postman-ready API docs.",
  technologies: ["Python", "Flask", "MongoDB", "REST API", "JWT"],
  link: "https://github.com/Chandu1706/Library_management_system",
}

];

export const CONTACT = {
  address: "5801 Preston Oaks Rd, Dallas, TX 75252",
  phoneNo: "+1 (234) 296-2539",
  email: "korubillichandu123@gmail.com",
};
