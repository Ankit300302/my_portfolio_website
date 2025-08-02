'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Company Research and Intelligence System",
    description: "LLM-powered system for comprehensive company research, leveraging REST API integration with Wikipedia and Python web scraping modules like BeautifulSoup to gather, analyze, and summarize public company information.",
    technologies: ["Python", "LLMs", "REST API", "BeautifulSoup", "Web Scraping", "AI"],
    image: "/images/project5.png",
    github: "https://github.com/Ankit300302/Intelligent_Comapny_researcher",
  },
  {
    title: "Intelligent Intrusion Detection System",
    description: "Next-Gen Network Security with Explainable AI and Adaptive Feature Engineering. Trained on 175,341 network traffic samples from UNSW-NB15 dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "SHAP", "Streamlit"],
    image: "/images/project1.png",
    github: "https://github.com/Ankit300302/Intelligent-IDS/tree/main",
    demo: "https://drive.google.com/file/d/1vf1aGJJMerv7OKdCPO7eYIUDlE1NwG4e/view?usp=sharing"
  },
  {
    title: "Job Finding Application",
    description: "Comprehensive job-finding mobile application using React JS and Expo platform with RESTful API integration.",
    technologies: ["React", "Expo", "JavaScript", "REST API"],
    image: "/images/project2.png",
    github: "https://github.com/Ankit300302/Final-project",
  },
  {
    title: "Human Detection from Drone Footage",
    description: "AI system for human detection and tracking in aerial drone footage using HOG descriptors and KCF tracking.",
    technologies: ["Python", "OpenCV", "AI", "Computer Vision"],
    image: "/images/project3.png",
    github: "https://github.com/Ankit300302/HumanDetection",
  },
  {
    title: "Hindi Text Refinement Tool",
    description: "NLP-based web application that enhances Hindi paragraphs through translation, paraphrasing, and grammar correction using Hugging Face models.",
    technologies: ["Python", "Flask", "NLP", "Hugging Face", "BERT"],
    image: "/images/project4.png",
    github: "https://github.com/Ankit300302/Hindi-Text-Refinement-Tool",
    demo: "https://drive.google.com/file/d/1m7YA-7bgC1SNHdlVzTkqcgJO4SP6r9KN/view?usp=sharing"
  }
];

type TechnologyOrbitProps = {
  technologies: string[];
  active: boolean;
};

const TechnologyOrbit: React.FC<TechnologyOrbitProps> = ({ technologies, active }) => {
  const radius = 100;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      animate={{ rotate: active ? 360 : 0 }}
      transition={{ repeat: active ? Infinity : 0, duration: 10, ease: "linear" }}
    >
      {technologies.map((tech: string, index: number) => {
        const angle = (index * (360 / technologies.length)) * (Math.PI / 180);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.span
            key={tech}
            className="absolute text-xs bg-gray-800 text-cyan-400 px-3 py-1 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0,
              x: active ? x : 0,
              y: active ? y : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.05
            }}
          >
            {tech}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isActive, setIsActive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 5);
    y.set(offsetY / 5);
  };

  const resetTilt = () => {
    animate(x, 0);
    animate(y, 0);
  };

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={() => setIsActive(true)}
      onDragEnd={() => {
        setIsActive(false);
        animate(x, 0);
        animate(y, 0);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all relative cursor-grab active:cursor-grabbing hover-glow"
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FiExternalLink /> Demo Video
            </a>
          )}
        </div>
      </div>

      <TechnologyOrbit technologies={project.technologies} active={isActive} />
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my notable projects showcasing my skills in AI, Data Science, and Full Stack Development.
            Drag any project to see technologies in action!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
