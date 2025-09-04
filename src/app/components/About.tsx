'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiAward, FiCode, FiCpu, FiDatabase, FiBriefcase } from 'react-icons/fi'

const skills = [
  { name: 'Python', level: 90, icon: <FiCode /> },
  { name: 'Machine Learning', level: 85, icon: <FiCpu /> },
  { name: 'TensorFlow/Keras', level: 80, icon: <FiCpu /> },
  { name: 'C++', level: 75, icon: <FiCode /> },
  { name: 'AWS Cloud', level: 70, icon: <FiDatabase /> },
  { name: 'JAVA', level: 65, icon: <FiCode /> },
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 relative">
              <div className="w-full aspect-square max-w-xs mx-auto relative rounded-2xl overflow-hidden border-2 border-gray-800 group">
                <Image
                  src="/images/profile.jpg"
                  alt="Ankit Singh"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/30 to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">AI & Data Science Enthusiast</h3>
              <p className="text-gray-300 mb-6">
                A result-driven professional with expertise in Machine Learning, Python, C++, Java, and SQL.
                Developed intelligent systems including an Intrusion Detection System, AI-powered human detection
                for drones, and a job-finding platform with intelligent recommendations.
              </p>
              <p className="text-gray-300 mb-8">
                Skilled in data-driven problem-solving, predictive analytics, and model development. Passionate
                about building scalable AI solutions and staying at the forefront of emerging technologies.
              </p>

              {/* Internship Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 mb-8 flex items-start gap-4 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
              >
                {/* Bigger Briefcase Icon */}
                <FiBriefcase className="text-purple-400 text-4xl flex-shrink-0 animate-pulse" />

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">Industry Internship</h4>
                  <p className="text-gray-300">
                    Successfully completed a{" "}
                    <span className="font-medium text-white">Hackathon-based Internship at ANNAM.AI (IIT Ropar)</span>,
                    under the Ministry of Education, Govt. of India (20 May – 20 July 2025).
                    Worked on developing scalable{" "}
                    <span className="font-medium text-white">AI solutions for agriculture</span>
                    in collaboration with domain experts.
                  </p>

                  {/* View Certificate Button with Icon + Animation */}
                  <motion.a
                    href="https://drive.google.com/file/d/1MrFkWSZQNHeaN-2RTC6GpnHOERxhYoZu/view?usp=sharing"
                    target="_blank"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-purple-400 hover:text-cyan-400 transition-colors"
                  >
                    <FiAward className="text-lg" />
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 mb-2 text-cyan-400">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
