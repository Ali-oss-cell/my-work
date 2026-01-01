'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const heroImages = [
  '/Gemini_Generated_Image_dkmkctdkmkctdkmk.png',
  '/Gemini_Generated_Image_qphi01qphi01qphi (1).png',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-switch images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


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
      id="home" 
      className="min-h-screen flex items-center justify-center w-full relative overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, #F1F5F9 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
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
            linear-gradient(#2563EB 1px, transparent 1px),
            linear-gradient(90deg, #2563EB 1px, transparent 1px)
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
          {/* Available for work Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full backdrop-blur-md"
            style={{ 
              border: '1px solid rgba(37, 99, 235, 0.3)',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: '#22c55e' }}
              animate={{ 
                scale: [1, 1.4, 1],
                boxShadow: [
                  '0 0 0px rgba(34, 197, 94, 0)',
                  '0 0 15px rgba(34, 197, 94, 0.8)',
                  '0 0 0px rgba(34, 197, 94, 0)',
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span 
              className="text-sm font-semibold"
              style={{ color: '#2563EB' }}
            >
              Available for work
            </span>
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
                    background: 'linear-gradient(135deg, #2563EB 0%, #475569 100%)',
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
              background: 'linear-gradient(135deg, #2563EB 0%, #F59E0B 100%)',
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
            style={{ color: '#475569' }}
          >
            Building <span style={{ color: '#2563EB', fontWeight: 600 }}>scalable</span> backend systems with{' '}
            <span style={{ color: '#F59E0B', fontWeight: 600 }}>Django</span> and <span style={{ color: '#0F172A', fontWeight: 600 }}>Go</span>,
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
              style={{ backgroundColor: '#2563EB' }}
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
                  background: 'linear-gradient(135deg, #2563EB 0%, #475569 100%)',
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-2xl font-semibold bg-white/50 backdrop-blur-sm"
              style={{ 
                border: '2px solid rgba(37, 99, 235, 0.3)',
                color: '#2563EB'
              }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderColor: '#2563EB'
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
                  style={{ color: '#2563EB' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm" style={{ color: '#475569' }}>{stat.label}</span>
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
                border: '2px dashed rgba(37, 99, 235, 0.2)',
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
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(241, 245, 249, 0.1) 100%)',
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
                background: 'linear-gradient(135deg, #2563EB 0%, #475569 100%)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
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
                  <SparklesIcon className="w-5 h-5" />
                </motion.span>
                Open to Collaborate
              </span>
            </motion.div>

            {/* Second Badge - Top Left */}
            <motion.div
              className="absolute -top-4 -left-4 px-4 py-2 rounded-xl shadow-xl z-30"
              style={{ 
                background: 'linear-gradient(135deg, #F1F5F9 0%, #2563EB 100%)',
                border: '2px solid rgba(255, 255, 255, 0.5)',
              }}
              animate={{ 
                y: [0, -5, 0],
                x: [0, 3, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-bold flex items-center gap-1" style={{ color: '#475569' }}>
                <RocketLaunchIcon className="w-4 h-4" />
                Let's Build
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
