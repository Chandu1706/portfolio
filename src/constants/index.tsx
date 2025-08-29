import project1 from "../assets/projects/proj1.png"; // FlatZ
import project2 from "../assets/projects/proj3.png"; // Verba.ai
import project3 from "../assets/projects/proj5.png"; // GenAI Health Assistant
import project4 from "../assets/projects/proj6.png"; // Offline Chess Game
import project5 from "../assets/projects/proj2.png"; // Map Coloring (CS project)
import project6 from "../assets/projects/proj4.png"; // Gesture Detection (CV project)

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
  },
  {
    title: "Verba.ai – Audio Transcription iOS App",
    image: project2,
    description:
      "Production-ready Swift/SwiftUI app with background-safe recording, real-time waveform, 30-second segmentation, and cloud + offline transcription (AssemblyAI with Apple fallback). SwiftData-backed session browser with export and dark/light mode.",
    technologies: ["Swift", "SwiftUI", "SwiftData", "AVAudioEngine", "AssemblyAI", "Apple Speech"],
  },
  {
    title: "GenAI Virtual Health Assistant",
    image: project3,
    description:
      "AI health assistant handling 1,500+ user queries with ~92% accuracy. Built triage, diet, and mental-health flows using OpenAI/GPT, logging/analytics pipelines, and scalable Azure deploys. Iterated UX via 3 user-testing rounds (100+ users).",
    technologies: ["Python", "React Native", "Azure", "OpenAI APIs", "LLM"],
  },
  {
    title: "Offline Chess Game (Play Store)",
    image: project4,
    description:
      "Feature-rich Flutter chess app with PvP and AI bot (multi-level difficulty). Custom game logic, themed boards, and low-end device optimizations; achieved a 99.5% crash-free rate across 500+ matches.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Map Coloring – CSP Solver",
    image: project5,
    description:
      "Python solver for constraint-satisfaction map coloring with backtracking and heuristics; loads country/state graphs from JSON and renders results.",
    technologies: ["Python", "Algorithms", "JSON"],
  },
  {
    title: "Gesture Detection – Computer Vision",
    image: project6,
    description:
      "Hand-gesture detection using OpenCV to control system actions based on recognized gestures; focused on input robustness and latency.",
    technologies: ["Python", "OpenCV"],
  },
];

export const CONTACT = {
  address: "5801 preston Oaks Rd,Dallas, TX 75252",
  phoneNo: "+1 (234) 296-2539",
  email: "korubillichandu123@gmail.com",
};
