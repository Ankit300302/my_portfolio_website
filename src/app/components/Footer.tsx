import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ankit Singh
            </Link>
            <p className="text-gray-400 text-sm mt-1">AI & Data Science Enthusiast</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Ankit300302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ankit-singh-056257288"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:ankit300302@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ankit Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}