'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const SkillSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  const skills = [
    'Python', 'AI', 'ML', 'TensorFlow', 
    'C++', 'AWS', 'React', 'NLP', 'Flask',
    'SQL', 'OpenCV', 'Java', 'Data Science'
  ]

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#00F5FF" 
          wireframe 
          emissive="#00F5FF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi
        
        return (
          <Text
            key={i}
            position={new THREE.Vector3().setFromSphericalCoords(
              1.0,
              phi,
              theta
            )}
            fontSize={0.12}
            color="#00F5FF"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        )
      })}
    </group>
  )
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Particles */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950/70 z-10" />
      
      <div className="container mx-auto px-6 relative z-20 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left Column - Text Content (takes 2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3 h-full flex flex-col justify-center py-12"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ankit Singh
            </motion.h1>
            
            <motion.h2 
  className="text-2xl md:text-3xl text-gray-300 mb-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <span className="text-cyan-400">Driven by Logic</span> <span className="text-gray-300">&</span> <span className="text-purple-400">Powered by Curiosity</span><br />
  <span className="text-cyan-400">Code.</span> <span className="text-purple-400">Create.</span> <span className="text-cyan-400">Conquer.</span>
</motion.h2>

            
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#projects"
                className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-lg border-2 border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://github.com/Ankit300302" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/ankit-singh-056257288" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin size={28} />
              </a>
              <a href="mailto:ankit300302@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <FiMail size={28} />
              </a>
              <a href="/resume.pdf" download className="text-gray-400 hover:text-white transition-colors">
                <FiDownload size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Visualization (takes 1/3 width) */}
          <div className="w-full md:w-1/3 h-[400px] md:h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <SkillSphere />
              <OrbitControls 
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 3}
              />
            </Canvas>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* Enhanced Scroll Indicator */}
<motion.div 
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
  initial={{ opacity: 0, y: 10 }}
  animate={{ 
    opacity: 1,
    y: [0, 15, 0],
    transition: { 
      delay: 1.2,
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut"
    }
  }}
>
  {/* Triple Dot Pulse Animation */}
  <div className="flex gap-1 mb-2">
    {[1, 2, 3].map((dot) => (
      <motion.div
        key={dot}
        className="w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
          y: [0, -5, 0]
        }}
        transition={{
          delay: dot * 0.15,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  {/* Animated Chevron */}
  <motion.div
    className="text-cyan-400"
    animate={{
      y: [0, 10, 0],
      opacity: [0.6, 1, 0.6]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }}
  >
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
    </svg>
  </motion.div>

  {/* Scroll Text */}
  <motion.p 
    className="text-xs text-cyan-400 mt-2"
    animate={{
      opacity: [0.6, 1, 0.6]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }}
  >
    Scroll to explore
  </motion.p>
</motion.div>
      </div>
    </section>
  )
}

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null)
  const particles = useRef<Float32Array>(new Float32Array(5000 * 3))

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x -= delta / 10
      particlesRef.current.rotation.y -= delta / 15
    }
  })

  for (let i = 0; i < 5000 * 3; i++) {
    particles.current[i] = (Math.random() - 0.5) * 5
  }

  return (
    <Points ref={particlesRef} positions={particles.current} stride={3}>
      <PointMaterial
        transparent
        color="#00F5FF"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

const PointMaterial = ({ ...props }: any) => {
  return <pointsMaterial {...props} />
}

const Points = ({ ...props }: any) => {
  return <points {...props} />
}