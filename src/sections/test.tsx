import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// --- Type Definitions ---
type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

type SkillType = {
  name: string;
  icon?: string; // Optional: could be a path to an SVG or a FontAwesome class
};

type CertificationType = {
  name: string;
  issuer: string;
  year: number;
  link?: string;
};

// --- Components ---

// Portfolio Card Component
const PortfolioCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw] h-[70vh] p-8 bg-zinc-900 border border-white border-dashed rounded-lg flex flex-col justify-between items-start text-white shadow-lg mx-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mono">
        {project.title}
      </h2>
      <p className="text-base md:text-lg flex-grow text-gray-300 font-sans leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 text-sm bg-white text-black rounded-full font-mono">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-white border-b-2 border-white pb-1 text-lg font-mono hover:text-gray-400 hover:border-gray-400 transition-colors duration-300"
      >
        View Project &rarr;
      </a>
    </div>
  );
};

// Skill Badge Component
const SkillBadge: React.FC<{ skill: SkillType }> = ({ skill }) => {
  return (
    <div className="px-5 py-3 border border-dashed border-white rounded-lg flex flex-col items-center justify-center text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200">
      {skill.icon && <span className="text-3xl mb-2">{skill.icon}</span>} {/* Placeholder for icon */}
      <span className="text-lg font-mono">{skill.name}</span>
    </div>
  );
};

// --- Main App Component ---
function App() {
  // --- Data for Portfolio Sections ---
  const projects: ProjectType[] = [
    {
      title: "Capstone Project: Mobile App, API, Dashboard",
      description: "A full-stack solution featuring a mobile application for users, a robust API backend, and an administrative dashboard for data management and analytics.",
      tags: ["React Native", "Node.js", "Express.js", "MongoDB", "REST API"],
      link: "#capstone-project" // Placeholder link
    },
    {
      title: "3rd Year Project: Social Media App",
      description: "Developed a social media platform with user authentication, post creation, commenting, and real-time notifications.",
      tags: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS"],
      link: "#social-media-app" // Placeholder link
    },
    {
      title: "Personal Project: Simple Quiz App",
      description: "An interactive web-based quiz application with multiple categories and score tracking.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#quiz-app" // Placeholder link
    },
    {
      title: "Personal Project: Portfolio Pages",
      description: "Various iterations of personal portfolio websites, experimenting with different designs and technologies.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#portfolio-pages" // Placeholder link
    },
    {
      title: "Personal Project: GabGPT",
      description: "A custom chatbot interface leveraging large language models for conversational AI.",
      tags: ["Python", "Flask", "LLM Integration", "API"],
      link: "#gabgpt-project" // Placeholder link
    },
    {
      title: "Personal Project: Pokedex",
      description: "A web application consuming the PokeAPI to display detailed information about various Pokémon.",
      tags: ["React", "API Integration", "CSS Modules"],
      link: "#pokedex-project" // Placeholder link
    },
  ];

  const specializations: SkillType[] = [
    { name: "HTML", icon: "✨" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "💻" },
    { name: "PHP", icon: "🐘" },
    { name: "TypeScript", icon: "📜" },
    { name: "Laravel", icon: "🚀" },
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
  ];

  const certifications: CertificationType[] = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: 2023, link: "#aws-cert" },
    { name: "Meta Front-End Developer Professional Certificate", issuer: "Coursera", year: 2024, link: "#meta-cert" },
    // Add more certifications here
  ];

  // --- Framer Motion Scroll Logic ---
  const portfolioSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: portfolioSectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-350vw"]); // Adjust this based on number of cards and their width
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <div className="h-[100vh] bg-zinc-950 sticky top-0 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px bg-white bg-opacity-5 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border border-white border-opacity-10"></div>
          ))}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white z-10 text-center leading-tight font-mono">
          Hello, I'm <span className="text-white border-b-4 border-dashed border-white pb-2">Your Name</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 z-10 text-center font-sans">
          A passionate developer building engaging web experiences.
        </p>
      </div>

      {/* About Section */}
      <div className="h-[100vh] bg-black sticky top-0 flex items-center justify-center p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto border border-dashed border-white p-8 rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-mono">About Me</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">
              I specialize in creating dynamic and user-friendly web applications with a focus on clean code, responsive design, and seamless digital experiences. My journey in tech has equipped me with a strong foundation in modern web technologies and a constant drive to learn and adapt to new challenges.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-64 md:h-80 border border-white border-dashed bg-zinc-800 flex items-center justify-center text-gray-500 text-lg font-mono">
              [Profile Image Placeholder]
            </div>
          </div>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="h-[100vh] bg-zinc-950 sticky top-0 flex flex-col items-center justify-center p-8 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white font-mono text-center">My Toolkit & Specializations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {specializations.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Internship/Experience Section */}
      <div className="h-[100vh] bg-black sticky top-0 flex flex-col items-center justify-center p-8 md:p-16">
        <div className="max-w-4xl mx-auto border border-dashed border-white p-8 rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-mono text-center">Internship Experience</h2>
          <ul className="list-disc list-inside text-lg md:text-xl text-gray-300 leading-relaxed font-sans space-y-4">
            <li>Responsible for deploying company-issued iPads and applying proper configurations.</li>
            <li>Responsible for installing and setting up new company laptops and iPads.</li>
            <li>Responsible for basic computer hardware and networking troubleshooting and maintenance.</li>
            <li>Other miscellaneous tasks such as video editing, graphic designing, and ID making.</li>
            <li>Developed a simple private web app for handling inventory.</li>
          </ul>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="h-[50vh] bg-zinc-950 sticky top-0 flex flex-col items-center justify-center p-8 md:p-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-mono text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-6 border border-dashed border-white rounded-lg text-white hover:bg-zinc-800 transition-colors duration-200">
              <h3 className="text-2xl font-bold font-mono">{cert.name}</h3>
              <p className="text-gray-300 text-lg">{cert.issuer}, {cert.year}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Portfolio Showcase Section (Horizontal Scroll) */}
      <motion.div
        ref={portfolioSectionRef}
        className="h-[500vh] bg-zinc-900 sticky top-0 flex items-center justify-start overflow-hidden"
      >
        <motion.div
          className="flex flex-row items-center h-screen gap-x-[100px] pl-[5vw] pr-[5vw]"
          style={{ x: springX }}
        >
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <div className="h-[100vh] bg-black flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-mono">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-sans">
            I'm always open to new opportunities and collaborations. Feel free to connect with me through any of the platforms below!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://github.com/your-github" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white text-white text-lg font-mono rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com" // Replace with your Email
              className="inline-block px-6 py-3 border-2 border-white text-white text-lg font-mono rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://facebook.com/your-facebook" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white text-white text-lg font-mono rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white text-white text-lg font-mono rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="/path/to/your/resume.pdf" // Replace with the actual path to your resume PDF
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-white text-white text-xl font-mono rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Download Resume
          </a>
          <div className="mt-12 text-gray-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
