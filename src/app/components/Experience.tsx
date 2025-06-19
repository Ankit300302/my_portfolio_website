'use client'

import { motion } from 'framer-motion'
import { FiBook, FiAward, FiBriefcase } from 'react-icons/fi'

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2021 - 2025",
    description: "CGPA: 8.62/10",
    icon: <FiBook />
  },
  {
    title: "Class 12 ISC Board",
    institution: "Seth Dwarka Prasad Bajaj Education Center",
    period: "2019 - 2020",
    description: "Percentage: 87.5%",
    icon: <FiBook />
  }
]

const certifications = [
  {
    title: "Certified AWS Cloud Practitioner",
    issuer: "Amazon",
    period: "2023",
    icon: <FiAward />,
    link: "https://drive.google.com/drive/folders/1ELppLH1RhqVGy4vFrEd3UvyFbjXjTnzZ?usp=sharing"
  },
  {
    title: "Certified in C++, C and Java",
    issuer: "IIT Bombay",
    period: "2021",
    icon: <FiAward />,
    link: "https://drive.google.com/drive/folders/1ELppLH1RhqVGy4vFrEd3UvyFbjXjTnzZ?usp=sharing"
  },
  {
    title: "Google Cloud Computing",
    issuer: "NPTEL - IIT Kharagpur",
    period: "2023",
    icon: <FiAward />,
    link: "https://drive.google.com/drive/folders/1ELppLH1RhqVGy4vFrEd3UvyFbjXjTnzZ?usp=sharing"
  },
  {
    title: "Ethical Hacking Certified",
    issuer: "Internshala",
    period: "2023",
    icon: <FiAward />,
    link: "https://drive.google.com/drive/folders/1ELppLH1RhqVGy4vFrEd3UvyFbjXjTnzZ?usp=sharing"
  },
  {
    title: "Couchbase Certified",
    issuer: "Couchbase",
    period: "2024",
    icon: <FiAward />,
    link: "https://drive.google.com/drive/folders/1ELppLH1RhqVGy4vFrEd3UvyFbjXjTnzZ?usp=sharing"
  }
]


const experience = [
  {
    title: "Android Club Contributor",
    organization: "VIT Chennai",
    period: "2021 - Present",
    description: "Resolved technical issues during events and enhanced skills in Android development",
    icon: <FiBriefcase />
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
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
              Education & Experience
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FiBook className="text-cyan-400" />
                <span>Education</span>
              </h3>
              
              <div className="relative">
                <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800" />
                
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-12"
                    >
                      <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gray-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400">
                        {item.icon}
                      </div>
                      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{item.institution}</p>
                        <p className="text-gray-500 text-xs mb-3">{item.period}</p>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiAward className="text-purple-400" />
                  <span>Certifications</span>
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 backdrop-blur-sm"
  >
    <div className="flex items-start gap-4">
      <div className="mt-1 text-purple-400">
        {item.icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{item.title}</h4>
        <p className="text-gray-400 text-sm">{item.issuer} • {item.period}</p>
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 text-xs mt-2 inline-block hover:underline"
        >
          View Certificate
        </a>
      </div>
    </div>
  </motion.div>
))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiBriefcase className="text-pink-400" />
                  <span>Experience</span>
                </h3>
                
                <div className="space-y-4">
                  {experience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 text-pink-400">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm mb-2">{item.organization} • {item.period}</p>
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}