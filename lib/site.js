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
  // Short "about me" shown in the hero next to your photo. Rewrite in your own words.
  heroAbout:
    "I design clean, user-friendly interfaces and build fast, responsive web applications, taking ideas from the first sketch to a finished product.",
  intro: [
    "Hi, I'm Supriya, a UI/UX Designer and Full-Stack Web Developer.",
    "I design and build clean, responsive websites and web applications, from the first sketch to the finished product.",
  ],
};

// "Core expertise" cards in the About section. Rewrite these to match your real skills.
export const SERVICES = [
  { title: "UI/UX Design", body: "Wireframes, prototypes and clean interfaces designed around real users." },
  { title: "Frontend Development", body: "React, Next.js, JavaScript, HTML5, CSS3 and Tailwind CSS." },
  { title: "Backend & Databases", body: "Node.js, REST APIs and databases powering reliable applications." },
  { title: "Responsive & Performance", body: "Fast, accessible sites that look right on every screen." },
];

// "Selected work". Add more projects by copying a block between { and },
// href: link to the project, or null if there is none.
// image: e.g. "/images/projects/respira.png" (put the file in public/images/projects/), or null.
// kind: shows on the right side of the row, e.g. "Live", "Design", "App".
export const PROJECTS = [
  {
    name: "RESPIRA",
    href: "https://respira-app.lovable.app",
    role: "Health • Web App",
    kind: "Live",
    note: "Breathe Smart, Live Better. A personal asthma management assistant with medication tracking, attack logging, weather monitoring and emergency SOS.",
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
