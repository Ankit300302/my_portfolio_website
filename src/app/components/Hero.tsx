'use client';

import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';

const FloatingSkill = ({ skill, radius, speed, angle }: { skill: string; radius: number; speed: number; angle: number }) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      const x = radius * Math.cos(t * speed + angle);
      const y = Math.sin(t * 0.5 + angle) * 0.3; // floating up/down
      const z = radius * Math.sin(t * speed + angle);
      ref.current.position.set(x, y, z);
      ref.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={ref}>
      <Text fontSize={0.15} color="#00F5FF" anchorX="center" anchorY="middle" outlineWidth={0.004} outlineColor="#00F5FF">
        {skill}
      </Text>
    </group>
  );
};

const EnergyGlobe = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.6;
    }
  });

  const skills = [
    'Python', 'AI', 'ML', 'TensorFlow',
    'C++', 'AWS', 'React', 'NLP', 'Flask',
    'SQL', 'OpenCV', 'Java', 'Data Science'
  ];

  return (
    <group>
      {/* Pulsating Core */}
      <mesh>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={0.6} transparent opacity={0.15} />
      </mesh>

      {/* Outer Glowing Layer */}
      <mesh scale={1.2}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Rotating Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.3} />
      </mesh>

      {/* Floating Skills */}
      {skills.map((skill, i) => (
        <FloatingSkill
          key={i}
          skill={skill}
          radius={2}
          speed={0.4 + (i % 3) * 0.1}
          angle={(i / skills.length) * Math.PI * 2}
        />
      ))}
    </group>
  );
};

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 70);
    }, delay);

    const cursorBlink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorBlink);
    };
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {cursorVisible && <span className="text-cyan-400">|</span>}
    </span>
  );
};

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
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-2/3 h-full flex flex-col justify-center py-12">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ankit Singh
            </motion.h1>

            <motion.h2 className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <span className="text-cyan-400"><TypingText text="Driven by Logic" /></span>{' '}
              <span className="text-gray-300">&</span>{' '}
              <span className="text-purple-400"><TypingText text="Powered by Curiosity" delay={1000} /></span>
              <br />
              <span className="text-cyan-400"><TypingText text="Code." delay={2500} /></span>{' '}
              <span className="text-purple-400"><TypingText text="Create." delay={3200} /></span>{' '}
              <span className="text-cyan-400"><TypingText text="Conquer." delay={3900} /></span>
            </motion.h2>

            {/* Buttons */}
            <motion.div className="flex flex-wrap gap-4 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <a href="#projects" className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-4 text-lg border-2 border-gray-700 rounded-lg font-medium hover:bg-gray-800/50 transition-all">
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <a href="https://github.com/Ankit300302" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FiGithub size={28} /></a>
              <a href="https://linkedin.com/in/ankit-singh-056257288" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FiLinkedin size={28} /></a>
              <a href="mailto:ankit300302@gmail.com" className="text-gray-400 hover:text-white transition-colors"><FiMail size={28} /></a>
              <a href="/ANKIT SINGH.pdf" download className="text-gray-400 hover:text-white transition-colors"><FiDownload size={28} /></a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 h-[400px] md:h-[500px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <EnergyGlobe />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array>(new Float32Array(3000 * 3));

  useEffect(() => {
    for (let i = 0; i < positions.current.length; i++) {
      positions.current[i] = (Math.random() - 0.5) * 8;
    }
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.01} color="#00F5FF" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
    </points>
  );
};
