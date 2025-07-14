'use client'

import { motion } from 'framer-motion'
import { FiBook, FiAward, FiBriefcase, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi'
import { useState } from 'react'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";

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
    category: "Industry Certifications",
    items: [
      {
        title: "Deloitte Certified in Data Analytics, Cyber Security and Technology",
        issuer: "Deloitte",
        period: "2025",
        icon: <FiAward />,
        link: "https://drive.google.com/drive/folders/14n8Ig9OAjWhUM1pWVP14EO96Rp5EHwJP?usp=sharing"
      },
      {
        title: "Certified AWS Cloud Practitioner",
        issuer: "Amazon",
        period: "2023",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1lwpX-4sui4Mc2lQL0vZCz7BZ4VQGKCvc/view?usp=sharing"
      },
      {
        title: "Google Cloud Computing",
        issuer: "NPTEL - IIT Kharagpur",
        period: "2023",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1ImDL_3TTwsi-rsgvjRuRPxB4kSLs7XJq/view?usp=sharing"
      }
    ]
  },
  {
    category: "Programming & Development",
    items: [
      {
        title: "Certified in C++, C and Java",
        issuer: "IIT Bombay",
        period: "2021",
        icon: <FiAward />,
        link: "https://drive.google.com/drive/folders/1GRu-vmZz7PJx7Ds7EsNZgtdjR0YFIzaZ?usp=sharing"
      },
      {
        title: "Full Stack Developer Certification",
        issuer: "One Roadmap",
        period: "2023",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1kinXMsPsspTnyMe5jsI0pXhQE7hwY_fy/view?usp=sharing"
      }
    ]
  },
  {
    category: "AI , Data Science & Cybersecurity",
    items: [
      {
        title: "Ethical Hacking Certified",
        issuer: "Internshala",
        period: "2023",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1Bd-_q4h2BRpRkP4omNNnM_d9DkBDbo4d/view?usp=sharing"
      },
      {
        title: "AI Engineer Certification",
        issuer: "One Roadmap",
        period: "2025",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1huAv2Ih4esAxFEmNgr8CrrA6GaVPiOIc/view?usp=sharing"
      },
      {
        title: "CyberSecurity Analyst - IAM",
        issuer: "Tata / Forage",
        period: "2025",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1a1REDMWbZNK_OO3EAp_lHjYO0NTXASOC/view?usp=sharing"
      },
      {
        title: "AI and Data Scientist Certification",
        issuer: "One Roadmap",
        period: "2025",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/174HEgLqPT_2BUaSF-o3ub_0Rio_Zkyfz/view?usp=sharing"
      },
      {
        title: " Data Science & Analytics Certification",
        issuer: "HP Life",
        period: "2025",
        icon: <FiAward />,
        link: "https://drive.google.com/file/d/1MYqoZvhrFUi1Igo_AJIHO6wakgNZoNhj/view?usp=sharing"
      }
    ]
  }
]

const experience = [
  {
    title: "Android Club Contributor",
    organization: "VIT Chennai",
    period: "2021 - 2024",
    description: "Resolved technical issues during events and enhanced skills in Android development",
    icon: <FiBriefcase />
  },
  {
    title: "Deloitte Virtual Internship",
    organization: "Deloitte Australia",
    period: "2025",
    description: "Gained industry-level experience in cybersecurity, data analysis, and technology through a virtual internship program.",
    icon: <FiBriefcase />
  }
]

const badges = [
  {
    id: 1,
    name: "Google Generative AI Skill Badge",
    image: "/images/badges/build-real-world-ai-applications-with-gemini-and-im.png",
    
  },
  {
    id: 2,
    name: "Google Generative AI Skill Badge",
    image: "/images/badges/prompt-design-in-vertex-ai-skill-badge.png",
    
  },
  {
    id: 3,
    name: "Google Generative AI INTERMEDIATE Skill Badge",
    image: "/images/badges/develop-genai-apps-with-gemini-and-streamlit-skill-.png",
    
  }
];


export default function Experience() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [selectedBadge, setSelectedBadge] = useState<null | number>(null)

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

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

              {/* Badges Section - Added here to maintain layout */}
             <div className="mt-12">
  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
    <FiAward className="text-yellow-400" />
    <span>Badges</span>
  </h3>
  
  {/* Verification Link Button - Added above badges */}
  <div className="mb-4 flex justify-center">
    <a
      href="https://www.cloudskillsboost.google/public_profiles/7511b067-f684-4df4-ae2f-3acc0062b31d"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-medium rounded-md transition-colors text-sm mb-4"
    >
      <FiExternalLink size={16} />
      Verify All Badges
    </a>
  </div>
  
  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
    {badges.map((badge) => (
      <motion.div
        key={badge.id}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <button
          onClick={() => setSelectedBadge(badge.id)}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-yellow-400 hover:border-yellow-300 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
        >
          <div className="w-full h-full relative">
            <Image
              src={badge.image}
              alt={badge.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, 80px"
            />
          </div>
        </button>
        <p className="text-xs sm:text-sm text-center mt-2 text-gray-300">{badge.name}</p>
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
                  {certifications.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden backdrop-blur-sm"
                    >
                      <button
                        onClick={() => toggleCategory(category.category)}
                        className="w-full flex justify-between items-center p-5 hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-purple-400">
                            <FiAward />
                          </div>
                          <h4 className="font-bold text-left">{category.category}</h4>
                        </div>
                        {expandedCategory === category.category ? (
                          <FiChevronUp className="text-gray-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        )}
                      </button>
                      
                      {expandedCategory === category.category && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5 space-y-4"
                        >
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
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
                            </div>
                          ))}
                        </motion.div>
                      )}
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

     {/* Modal for showing full badge image */}
{selectedBadge !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedBadge(null)}
  >
    <div
      className="relative max-w-2xl w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedBadge(null)}
        className="absolute -top-10 right-0 text-white hover:text-yellow-400 transition-colors z-10"
      >
        <FiX size={24} />
      </button>

      {/* Badge Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={badges.find(b => b.id === selectedBadge)!.image}
          alt={badges.find(b => b.id === selectedBadge)!.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text Content - Fixed to bottom */}
      <div className="p-4 text-center bg-gray-900/80 backdrop-blur-sm border-t border-gray-700">
        <h3 className="text-xl font-bold text-white mb-3">
          {badges.find(b => b.id === selectedBadge)!.name}
        </h3>
        
       
      </div>
    </div>
  </div>
)}
    </section>
  )
}