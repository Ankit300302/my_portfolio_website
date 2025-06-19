'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Intelligent Intrusion Detection System",
    description: "Next-Gen Network Security with Explainable AI and Adaptive Feature Engineering. Trained on 175,341 network traffic samples from UNSW-NB15 dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "SHAP", "Flask"],
    image: "/images/project1.png",
    github: "https://github.com/Ankit300302/Intelligent-IDS/tree/main",
    demo: "#"
  },
  {
    title: "Job Finding Application",
    description: "Comprehensive job-finding mobile application using React JS and Expo platform with RESTful API integration.",
    technologies: ["React", "Expo", "JavaScript", "REST API"],
    image: "/images/project2.png",
    github: "https://github.com/Ankit300302/Final-project",
    demo: "#"
  },
  {
    title: "Human Detection from Drone Footage",
    description: "AI system for human detection and tracking in aerial drone footage using HOG descriptors and KCF tracking.",
    technologies: ["Python", "OpenCV", "AI", "Computer Vision"],
    image: "/images/project3.png",
    github: "https://github.com/Ankit300302/HumanDetection",
    demo: "#"
  },
  {
    title: "Hindi Text Refinement Tool",
    description: "NLP-based web application that enhances Hindi paragraphs through translation, paraphrasing, and grammar correction using Hugging Face models.",
    technologies: ["Python", "Flask", "NLP", "Hugging Face", "BERT"],
    image: "/images/project4.png",
    github: "https://github.com/Ankit300302/Hindi-Text-Refinement-Tool",
    demo: "#"
  }
]

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
            Here are some of my notable projects showcasing my skills in AI, Data Science, and Full Stack Development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
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
                        <FiExternalLink /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}