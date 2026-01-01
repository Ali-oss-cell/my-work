'use client';

import Hero from '@/components/Hero';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [maskDataUrl, setMaskDataUrl] = useState<string>('');
  const [scanComplete, setScanComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hasTriggeredFlip = useRef(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Start with white (blur visible everywhere)
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 500, 500);
      // Set initial mask
      setMaskDataUrl(canvas.toDataURL());
    }
    canvasRef.current = canvas;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current && !isFlipped && canvasRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      // Scale to canvas coordinates
      const canvasX = (x / rect.width) * 500;
      const canvasY = (y / rect.height) * 500;

      // Draw black circle on canvas (black = blur hidden = clear image)
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 40, 0, Math.PI * 2);
        ctx.fill();

        // Update mask
        setMaskDataUrl(canvasRef.current.toDataURL());

        // Calculate progress (count non-white pixels)
        const imageData = ctx.getImageData(0, 0, 500, 500);
        let clearedPixels = 0;
        for (let i = 3; i < imageData.data.length; i += 4) {
          if (imageData.data[i] < 128) clearedPixels++;
        }
        const progress = (clearedPixels / (500 * 500)) * 100;
        setScanProgress(progress);

        // If 80% or more is scanned, trigger completion sequence
        if (progress >= 80 && !hasTriggeredFlip.current) {
          hasTriggeredFlip.current = true;
          setScanComplete(true);
          setIsAnimating(true);
          
          // Wait 2 seconds with celebration animation, then flip
          setTimeout(() => {
            setIsFlipped(true);
            setIsAnimating(false);
          }, 2000);
        }
      }
    }
  }, [isFlipped]);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section - Lime Punch Theme */}
      <section 
        id="about" 
        className="min-h-screen py-20"
        style={{ 
          backgroundColor: '#BCED09' // Lime Punch - Your exact color
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ color: '#2F52E0' }} // Electric Blue text
          >
            About
          </h2>
          <div 
            className="h-1 w-20 mb-12"
            style={{ backgroundColor: '#2F52E0' }} // Electric Blue accent
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with Liquid Glass Effect and Scan Mini-Game */}
            <div className="flex justify-center md:justify-start">
              <div 
                ref={imageRef}
                className="relative w-full max-w-md"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Side - Image with Scan Game */}
                  <div
                    className="relative w-full"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                  >
                    <div
                      className="relative cursor-crosshair"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <Image
                        src="/Data driven.png"
                        alt="About Image"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-[2rem]"
                        priority
                        unoptimized
                      />
                      {/* Base Liquid Glass Overlay with Interactive Mask */}
                      <div 
                        className="absolute inset-0 rounded-[2rem] pointer-events-none"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
                          backdropFilter: 'blur(15px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(15px) saturate(180%)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
                          maskImage: maskDataUrl ? `url(${maskDataUrl})` : 'none',
                          WebkitMaskImage: maskDataUrl ? `url(${maskDataUrl})` : 'none',
                          maskSize: '100% 100%',
                          WebkitMaskSize: '100% 100%',
                        }}
                      />
                      {/* Scan Progress Indicator - Pill Style like Navigation */}
                      {!isFlipped && (
                        <motion.div 
                          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%]"
                          animate={isAnimating ? {
                            scale: [1, 1.05, 1],
                            y: [0, -5, 0],
                          } : {}}
                          transition={{
                            duration: 0.5,
                            repeat: isAnimating ? Infinity : 0,
                            repeatType: "reverse"
                          }}
                        >
                          <div 
                            className="relative rounded-full px-4 py-3 overflow-hidden"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(20px) saturate(180%)',
                              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                            }}
                          >
                            {/* Progress Fill - Orange to Red Gradient */}
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: scanComplete 
                                  ? 'linear-gradient(90deg, #BCED09 0%, #2F52E0 100%)'
                                  : 'linear-gradient(90deg, #F9CB40 0%, #FF715B 50%, #FF4444 100%)',
                                opacity: 0.8,
                              }}
                              initial={{ clipPath: 'inset(0 100% 0 0)' }}
                              animate={{ 
                                clipPath: `inset(0 ${100 - scanProgress}% 0 0)`,
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            
                            {/* Content */}
                            <div className="relative z-10 flex items-center justify-between">
                              <span 
                                className="text-xs font-bold tracking-wider uppercase"
                                style={{ 
                                  color: scanComplete ? '#fff' : '#2F52E0',
                                  textShadow: scanComplete ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                                }}
                              >
                                {scanComplete ? '✨ Complete!' : '🔍 Scan the image'}
                              </span>
                              <span 
                                className="text-sm font-black"
                                style={{ 
                                  color: scanComplete ? '#fff' : '#FF715B',
                                  textShadow: scanComplete ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
                                }}
                              >
                                {Math.round(scanProgress)}%
                              </span>
                            </div>

                            {/* Celebration particles when complete */}
                            {scanComplete && (
                              <>
                                {[...Array(8)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                      backgroundColor: ['#BCED09', '#F9CB40', '#FF715B', '#2F52E0'][i % 4],
                                      left: '50%',
                                      top: '50%',
                                    }}
                                    initial={{ scale: 0, x: 0, y: 0 }}
                                    animate={{
                                      scale: [0, 1, 0],
                                      x: Math.cos(i * 45 * Math.PI / 180) * 60,
                                      y: Math.sin(i * 45 * Math.PI / 180) * 30,
                                    }}
                                    transition={{
                                      duration: 1,
                                      repeat: Infinity,
                                      delay: i * 0.1,
                                    }}
                                  />
                                ))}
                              </>
                            )}
                          </div>
                          
                          {/* Countdown text when animating */}
                          {isAnimating && (
                            <motion.p
                              className="text-center text-xs mt-2 font-semibold"
                              style={{ color: '#2F52E0' }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              Revealing in 2 seconds...
                            </motion.p>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Back Side - About Me Card */}
                  <div
                    className="absolute inset-0 w-full rounded-[2rem] overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {/* Glassmorphism background */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(47, 82, 224, 0.9) 0%, rgba(76, 91, 92, 0.95) 100%)',
                        backdropFilter: 'blur(20px)',
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full p-6 flex flex-col justify-center">
                      {isFlipped && (
                        <>
                          <motion.div
                            className="flex items-center gap-3 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div 
                              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                              style={{ backgroundColor: '#BCED09' }}
                            >
                              👋
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">About Me</h3>
                              <p className="text-xs text-white/60">Developer & Designer</p>
                            </div>
                          </motion.div>

                          <motion.p 
                            className="text-sm leading-relaxed text-white/90 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            Passionate about creating beautiful, functional digital experiences. 
                            I combine clean code with stunning design to build websites that stand out.
                          </motion.p>

                          {/* Stats */}
                          <motion.div 
                            className="grid grid-cols-3 gap-2 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            {[
                              { label: 'Years Exp', value: '5+' },
                              { label: 'Projects', value: '50+' },
                              { label: 'Clients', value: '30+' },
                            ].map((stat, i) => (
                              <div 
                                key={i}
                                className="text-center p-2 rounded-xl"
                                style={{ backgroundColor: 'rgba(188, 237, 9, 0.2)' }}
                              >
                                <div className="text-lg font-bold" style={{ color: '#BCED09' }}>
                                  {stat.value}
                                </div>
                                <div className="text-[10px] text-white/60 uppercase tracking-wider">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </motion.div>

                          {/* Skills pills */}
                          <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((skill, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-xs rounded-full font-medium"
                                style={{ 
                                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                  color: '#BCED09',
                                  border: '1px solid rgba(188, 237, 9, 0.3)'
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/90" style={{ color: '#171717' }}>
                About section coming soon...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Golden Hour Theme */}
      <section 
        id="projects" 
        className="min-h-screen py-20 relative overflow-hidden"
        style={{ 
          backgroundColor: '#F9CB40' // Golden Hour - Your exact color
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #FF715B 0%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'translate(30%, -30%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #2F52E0 0%, transparent 70%)',
              filter: 'blur(50px)',
              transform: 'translate(-30%, 30%)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: 'rgba(47, 82, 224, 0.1)',
                color: '#2F52E0',
                border: '1px solid rgba(47, 82, 224, 0.2)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              💼 My Work
            </motion.span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#2F52E0' }}
            >
              Featured Projects
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4C5B5C' }}>
              A collection of projects I've worked on, from web apps to creative experiments
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#2F52E0' }} />
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#FF715B' }} />
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#BCED09' }} />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards - Easy to customize */}
            {[
              {
                title: 'Project One',
                description: 'A brief description of this amazing project and what it does.',
                tags: ['React', 'Next.js', 'Tailwind'],
                image: '/placeholder-project.png',
                color: '#2F52E0',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Two',
                description: 'Another cool project with interesting features and functionality.',
                tags: ['TypeScript', 'Node.js', 'MongoDB'],
                image: '/placeholder-project.png',
                color: '#FF715B',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Three',
                description: 'A creative experiment pushing the boundaries of web design.',
                tags: ['Three.js', 'GSAP', 'WebGL'],
                image: '/placeholder-project.png',
                color: '#BCED09',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Four',
                description: 'Full-stack application with modern architecture and clean code.',
                tags: ['Python', 'FastAPI', 'PostgreSQL'],
                image: '/placeholder-project.png',
                color: '#4C5B5C',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Five',
                description: 'Mobile-first responsive design with smooth animations.',
                tags: ['React Native', 'Expo', 'Firebase'],
                image: '/placeholder-project.png',
                color: '#2F52E0',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Six',
                description: 'E-commerce solution with payment integration and admin panel.',
                tags: ['Shopify', 'Liquid', 'JavaScript'],
                image: '/placeholder-project.png',
                color: '#FF715B',
                link: '#',
                github: '#',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden h-full"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image Placeholder */}
                  <div 
                    className="h-48 relative overflow-hidden"
                    style={{ backgroundColor: project.color }}
                  >
                    {/* Placeholder Pattern */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                          linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                        `,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                      }}
                    />
                    
                    {/* Placeholder Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <span className="text-4xl">🚀</span>
                      </motion.div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                      <motion.a
                        href={project.link}
                        className="px-4 py-2 rounded-xl font-semibold text-sm"
                        style={{ backgroundColor: '#BCED09', color: '#171717' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Live →
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="px-4 py-2 rounded-xl font-semibold text-sm bg-white/20 text-white backdrop-blur-sm"
                        style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    </motion.div>

                    {/* Project Number Badge */}
                    <div 
                      className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: project.color,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 
                      className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform"
                      style={{ color: '#171717' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: '#4C5B5C' }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full font-medium"
                          style={{
                            backgroundColor: `${project.color}15`,
                            color: project.color,
                            border: `1px solid ${project.color}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: project.color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold"
              style={{
                backgroundColor: '#2F52E0',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(47, 82, 224, 0.3)',
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 15px 40px rgba(47, 82, 224, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Coral Burst Theme */}
      <section 
        id="skills" 
        className="min-h-screen py-20"
        style={{ 
          backgroundColor: '#FF715B' // Coral Burst - Your exact color
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ color: '#FFFFFF' }} // White text for contrast
          >
            Skills
          </h2>
          <div 
            className="h-1 w-20 mb-6"
            style={{ backgroundColor: '#BCED09' }} // Lime Punch accent
          />
          <p style={{ color: '#FFFFFF' }}>Skills section coming soon...</p>
        </div>
      </section>

      {/* Contact Section - Slate Theme */}
      <section 
        id="contact" 
        className="min-h-screen py-20"
        style={{ 
          backgroundColor: '#4C5B5C' // Slate - Your exact color
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold mb-8"
            style={{ color: '#BCED09' }} // Lime Punch text
          >
            Contact
          </h2>
          <div className="flex gap-2 mb-6">
            <div className="h-1 w-12" style={{ backgroundColor: '#2F52E0' }} />
            <div className="h-1 w-12" style={{ backgroundColor: '#BCED09' }} />
            <div className="h-1 w-12" style={{ backgroundColor: '#F9CB40' }} />
            <div className="h-1 w-12" style={{ backgroundColor: '#FF715B' }} />
          </div>
          <p style={{ color: '#FFFFFF' }}>Contact section coming soon...</p>
        </div>
      </section>
    </div>
  );
}
