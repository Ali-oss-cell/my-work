'use client';

import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const heroImages = [
  '/Gemini_Generated_Image_dkmkctdkmkctdkmk.png',
  '/Gemini_Generated_Image_qphi01qphi01qphi (1).png',
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInHero, setIsInHero] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const badgeOriginalPos = useRef({ x: 0, y: 0 });

  // Spring config for smooth following
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const badgeX = useSpring(0, springConfig);
  const badgeY = useSpring(0, springConfig);

  // Auto-switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is in hero section
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const inHero = 
          e.clientX >= rect.left && 
          e.clientX <= rect.right && 
          e.clientY >= rect.top && 
          e.clientY <= rect.bottom;
        
        setIsInHero(inHero);
        
        if (inHero) {
          // Move badge toward cursor (offset so it doesn't cover cursor)
          badgeX.set(e.clientX - rect.left - 100);
          badgeY.set(e.clientY - rect.top - 50);
        } else {
          // Return to original position
          badgeX.set(0);
          badgeY.set(0);
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [badgeX, badgeY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.03,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    }),
  };

  const name = "Ali Alassaad";

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center w-full relative overflow-hidden"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #2F52E0 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #BCED09 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF715B 0%, transparent 70%)',
            top: '40%',
            left: '30%',
            filter: 'blur(70px)',
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#2F52E0 1px, transparent 1px),
            linear-gradient(90deg, #2F52E0 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 relative z-10">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Badge - Follows Cursor in Hero */}
          <motion.div
            className={`inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full backdrop-blur-md z-50 ${
              isInHero ? 'fixed pointer-events-none' : ''
            }`}
            style={{ 
              border: '1px solid rgba(47, 82, 224, 0.3)',
              background: isInHero 
                ? 'linear-gradient(135deg, rgba(47, 82, 224, 0.9) 0%, rgba(76, 91, 92, 0.9) 100%)'
                : 'rgba(255, 255, 255, 0.5)',
              boxShadow: isInHero 
                ? '0 10px 40px rgba(47, 82, 224, 0.4), 0 0 20px rgba(188, 237, 9, 0.3)'
                : 'none',
              x: isInHero ? badgeX : 0,
              y: isInHero ? badgeY : 0,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: isInHero ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: '#BCED09' }}
              animate={{ 
                scale: [1, 1.4, 1],
                boxShadow: [
                  '0 0 0px rgba(188, 237, 9, 0)',
                  '0 0 15px rgba(188, 237, 9, 0.8)',
                  '0 0 0px rgba(188, 237, 9, 0)',
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span 
              className="text-sm font-semibold"
              style={{ color: isInHero ? '#ffffff' : '#2F52E0' }}
            >
              Available for work
            </span>
            {isInHero && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm"
              >
                ✨
              </motion.span>
            )}
          </motion.div>

          {/* Animated Name with Letter Animation */}
          <motion.div variants={itemVariants} className="mb-4 overflow-hidden">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #2F52E0 0%, #4C5B5C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Animated Subtitle with Gradient */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
            style={{
              background: 'linear-gradient(135deg, #F9CB40 0%, #FF715B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Backend Engineer & AI Enthusiast
          </motion.h2>

          {/* Description with Modern Typography */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
            style={{ color: '#4C5B5C' }}
          >
            Building <span style={{ color: '#2F52E0', fontWeight: 600 }}>scalable</span> backend systems with{' '}
            <span style={{ color: '#FF715B', fontWeight: 600 }}>Django</span> and <span style={{ color: '#BCED09', fontWeight: 600 }}>Go</span>,
            exploring AI/ML to solve real-world problems.
          </motion.p>

          {/* Modern CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden"
              style={{ backgroundColor: '#2F52E0' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #2F52E0 0%, #4C5B5C 100%)',
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-2xl font-semibold bg-white/50 backdrop-blur-sm"
              style={{ 
                border: '2px solid rgba(47, 82, 224, 0.3)',
                color: '#2F52E0'
              }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(47, 82, 224, 0.1)',
                borderColor: '#2F52E0'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Stats or Social Proof */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Done' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <motion.span 
                  className="block text-2xl md:text-3xl font-bold"
                  style={{ color: '#2F52E0' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm" style={{ color: '#4C5B5C' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image with Modern Effects */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center order-1 md:order-2 relative"
        >
          {/* Decorative Ring */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div 
              className="w-[90%] h-[90%] rounded-full"
              style={{
                border: '2px dashed rgba(47, 82, 224, 0.2)',
              }}
            />
          </motion.div>

          <motion.div
            className="relative w-full max-w-md z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Glassmorphism Card Behind Image */}
            <div 
              className="absolute -inset-4 rounded-3xl -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(47, 82, 224, 0.1) 0%, rgba(188, 237, 9, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            />
            
            {/* Image Carousel with Crossfade */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt="Hero Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Badge - Bigger & More Visible */}
            <motion.div
              className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl shadow-2xl z-30"
              style={{ 
                background: 'linear-gradient(135deg, #2F52E0 0%, #4C5B5C 100%)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 40px rgba(47, 82, 224, 0.3)',
              }}
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                Open to Collaborate
              </span>
            </motion.div>

            {/* Second Badge - Top Left */}
            <motion.div
              className="absolute -top-4 -left-4 px-4 py-2 rounded-xl shadow-xl z-30"
              style={{ 
                background: 'linear-gradient(135deg, #BCED09 0%, #F9CB40 100%)',
                border: '2px solid rgba(255, 255, 255, 0.5)',
              }}
              animate={{ 
                y: [0, -5, 0],
                x: [0, 3, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-bold" style={{ color: '#171717' }}>
                🚀 Let's Build
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 group"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-xs font-medium" style={{ color: '#4C5B5C' }}>Scroll Down</span>
          <div 
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ border: '2px solid #4C5B5C' }}
          >
            <motion.div
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: '#2F52E0' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
