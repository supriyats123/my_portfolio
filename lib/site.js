// ONE place for all your personal details and content.
// Edit this file and every section of the site updates.

export const SITE = {
  name: "Supriya T S",
  shortName: "SUPRIYA",
  email: "supriyats123@gmail.com",
  linkedin: "https://linkedin.com/in/supriya-t-s123",
  github: "https://github.com/supriyats123",
  tagline: "Turning Ideas into Code, and Code into Solutions.",
  role: "UI/UX Designer & Full-Stack Developer",
  // Set to true after you replace public/intro.mp4 with a video that has your voice.
  // It shows a "Sound on" button on the hero video.
  introHasSound: false,
  // Short "about me" shown in the hero next to your photo.
  heroAbout:
    "Computer Science student who builds full-stack web applications, from clean, user-friendly interfaces to the backend APIs behind them.",
  intro: [
    "Hi, I'm Supriya, a final-year B.E. Computer Science and Engineering student at APS College of Engineering (graduating 2027) with a CGPA of 8.87.",
    "I enjoy solving real-world problems through code and building full-stack web applications that combine creative design, frontend development and backend functionality. I also took part in the 24-hour Solaris X Grand Hackathon at RNSIT.",
  ],
};

// "Core expertise" cards in the About section.
export const SERVICES = [
  { title: "UI/UX Design", body: "Clean, user-friendly interfaces designed around how real people use them." },
  { title: "Frontend Development", body: "HTML5, CSS3, JavaScript, Next.js and Tailwind CSS, with smooth GSAP and Framer Motion animations." },
  { title: "Backend & APIs", body: "Node.js, Express.js, MongoDB and REST APIs, including access management." },
  { title: "Web Applications", body: "Full-stack apps like RESPIRA, built from the first idea to a live demo." },
];

// "Selected work". Add more projects by copying a block between { and },
// href: link to the project, or null if there is none.
// image: e.g. "/images/projects/respira.png" (put the file in public/images/projects/), or null.
// kind: shows on the right side of the row, e.g. "Live", "Design", "App".
export const PROJECTS = [
  {
    name: "RESPIRA",
    href: "https://respira-app.lovable.app",
    role: "Backend & APIs • Node.js • Express • MongoDB",
    kind: "Live",
    note: "Breathe Smart, Live Better. A personal asthma management assistant with 5 modules: Dashboard, Attack Logs, Medications, Air Quality and Calendar. I built the backend, the REST APIs and the access management.",
    image: "/images/projects/respira.png",
  },
  {
    name: "MY PORTFOLIO",
    href: "https://supriya-portfolio-five.vercel.app",
    role: "Next.js • Tailwind CSS • GSAP • Framer Motion",
    kind: "Live",
    note: "My personal portfolio website with a full-screen video intro, smooth scrolling and scroll animations.",
    image: "/portrait.jpg",
  },
];
// "Skills" section. Edit the names, add or remove groups. Only list what you really use.
export const SKILLS = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Access Management"] },
  { title: "Database", items: ["MongoDB", "MongoDB Compass"] },
  { title: "Animation", items: ["GSAP", "Framer Motion"] },
  { title: "Tools & Deployment", items: ["Git", "GitHub", "VS Code", "Vercel", "Lovable"] },
];
