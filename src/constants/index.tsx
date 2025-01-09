import project1 from "../assets/projects/proj1.png";
import project2 from "../assets/projects/proj3.png";
import project3 from "../assets/projects/proj5.png";
import project4 from "../assets/projects/proj6.png";
import project5 from "../assets/projects/proj2.png";
import project6 from "../assets/projects/proj4.png";

export const HERO_CONTENT = `I am a Master's graduate in Computer Science with expertise in app and web development, proficient in Python, Flutter, React.js, React Native, Django, Node.js, AWS, and ForgeRock. I developed and launched an AI-powered chess game app on the Play Store and have worked on numerous academic projects focused on application and website development. Currently, I am building a next-gen AI virtual health assistant application. My goal is to leverage my skills to create innovative and impactful applications that solve real-world problems and enhance user experiences`;

export const ABOUT_TEXT = `

From a young age, I have been passionate about technology and building things from the ground up, which has fueled my entrepreneurial spirit. Known for my determination and "never give up" attitude, I strive to see every task through to completion with dedication and hard work. My creativity drives me, and I enjoy engaging in activities that challenge my logical reasoning and problem-solving skills.

Outside of my professional pursuits, I find joy in playing the guitar, sharpening my strategic thinking with chess, or expressing my artistic side through pencil sketching. I am also an avid traveler, with a dream to explore the world and embrace the diverse experiences it offers. For me, life is a balance of innovation, creativity, and adventure, and I am constantly seeking opportunities to grow and create meaningful impacts.`;


export const PROJECTS = [
  {
    title: "Chess game app",
    image: project1,
    description:
      "Developed a full-stack multiplayer chess game app using Flutter, featuring an AI bot mode and Firebase authentication. Successfully deployed and tested the application on both Android and iOS devices, and launched it on the Google Play Store.",
    technologies: ["Flutter","Dart","Firebase","MongoDB"],
  },
  {
    title: "  AI chatbot app ",
    image: project2,
    description:
      "Creating a hybrid chatbot application using React Native for Android, iOS, and web platforms to support users with mental health challenges like depression and anxiety. The app integrates Azure cloud capabilities and features identity management services powered by ForgeRock.",
    technologies: ["Python","React Native","Azure","NLP","AI","ML"],
  },
  {
    title: "Map coloring  application",
    image: project3,
    description:
      "Developed a Python application to solve the constraint satisfaction problem of map coloring using backtracking, forward chaining, and backward chaining, with and without heuristics. The application supports coloring maps of the USA, India, and any other country by adding JSON data of the country's states.",
    technologies: ["Python","Plotly","AI","JSON"],
  },
  {
    title: "Gesture detection system ",
    image: project4,
    description:
      "Developed a gesture detection system using python and its OpenCV library that detects the users gestures and controls the system functionalities based on the gestures",
    technologies: ["Python","Opencv"],
  },
  {
    title: "E-commerce website",
    image: project5,
    description:
      "Developed a full-stack e-commerce website for book shipping using ReactJS for the frontend and Django for the backend, with Azure cloud integration.",
    technologies: ["ReactJS","Django","Azure"],
  },
  {
    title: "Language conversion application",
    image: project6,
    description:
      "Developed a python application that converts sentences given as input from the user from one language to another language",
    technologies: ["Python","Pycharm"],
  },
];

export const CONTACT = {
  address: "1682 Ash ct , Kent, Ohio, USA, 44240",
  phoneNo: "+1(234)-296-2539",
  email: "korubillichandu123@gmail.com",
};
