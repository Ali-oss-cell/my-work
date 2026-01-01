'use client';

import Hero from '@/components/Hero';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BuildingOffice2Icon, 
  CpuChipIcon, 
  UserGroupIcon, 
  RocketLaunchIcon,
  ServerIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  LightBulbIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section 
        id="about" 
        className="min-h-screen py-20"
        style={{ 
          backgroundColor: '#F1F5F9'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#0F172A' }}
            >
              About Me
            </h2>
            <div className="flex gap-2 mb-12">
              <motion.div 
                className="h-1 w-12 rounded-full" 
                style={{ backgroundColor: '#2563EB' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div 
                className="h-1 w-12 rounded-full" 
                style={{ backgroundColor: '#F59E0B' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image with Simple Glass Effect */}
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <Image
                    src="/Data driven.png"
                    alt="About Image"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-[2rem]"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
                  I'm a <strong style={{ color: '#2563EB' }}>backend engineer</strong> and <strong style={{ color: '#F59E0B' }}>technical lead</strong> with a passion for building robust, scalable systems. 
                  I'm exploring AI/ML technologies and learning how they can enhance backend systems.
                </p>
                
                <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
                  As a <strong style={{ color: '#0F172A' }}>backend owner</strong> for multi-module systems like Warehouse Management Systems, I've designed and implemented 
                  production-oriented services that handle real-world complexity. My experience spans from API design and database architecture 
                  to team leadership and mentoring developers.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: '#475569' }}>
                  I'm interested in <strong style={{ color: '#2563EB' }}>ML-backed APIs</strong> and experimenting with local LLMs (Ollama, DeepSeek Coder) 
                  for development workflows. My approach is practical and project-driven—I build to learn.
                </p>
              </div>

              {/* Experience Highlights */}
              <motion.div 
                className="mt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold" style={{ color: '#0F172A' }}>Key Experience</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#2563EB' }}>
                      <BuildingOffice2Icon className="w-5 h-5" />
                      Backend Architecture
                    </h4>
                    <p className="text-sm" style={{ color: '#0F172A' }}>
                      Designing and implementing scalable backend services with Django and Go
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#F59E0B' }}>
                      <CpuChipIcon className="w-5 h-5" />
                      AI/ML Exploration
                    </h4>
                    <p className="text-sm" style={{ color: '#0F172A' }}>
                      Learning and experimenting with AI/ML tools and local LLMs for development workflows
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(34, 197, 94, 0.05)' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#22c55e' }}>
                      <UserGroupIcon className="w-5 h-5" />
                      Team Leadership
                    </h4>
                    <p className="text-sm" style={{ color: '#475569' }}>
                      Leading development teams, mentoring developers, and translating requirements into architecture
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)' }}>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#F59E0B' }}>
                      <RocketLaunchIcon className="w-5 h-5" />
                      Full-Stack Thinking
                    </h4>
                    <p className="text-sm" style={{ color: '#0F172A' }}>
                      Bridging technical work with business needs and marketing strategies
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Clean White */}
      <section 
        id="projects" 
        className="min-h-screen py-20 relative overflow-hidden"
        style={{ 
          backgroundColor: '#FFFFFF' // Primary White
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'translate(30%, -30%)',
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: '#2563EB',
                border: '1px solid rgba(37, 99, 235, 0.2)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <BriefcaseIcon className="w-4 h-4" />
              My Work
            </motion.span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#2563EB' }}
            >
              Featured Projects
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#0F172A' }}>
              A collection of projects I've worked on, from web apps to creative experiments
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#2563EB' }} />
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#F1F5F9' }} />
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
                color: '#2563EB',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Two',
                description: 'Another cool project with interesting features and functionality.',
                tags: ['TypeScript', 'Node.js', 'MongoDB'],
                image: '/placeholder-project.png',
                color: '#F59E0B',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Three',
                description: 'A creative experiment pushing the boundaries of web design.',
                tags: ['Three.js', 'GSAP', 'WebGL'],
                image: '/placeholder-project.png',
                color: '#F1F5F9',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Four',
                description: 'Full-stack application with modern architecture and clean code.',
                tags: ['Python', 'FastAPI', 'PostgreSQL'],
                image: '/placeholder-project.png',
                color: '#0F172A',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Five',
                description: 'Mobile-first responsive design with smooth animations.',
                tags: ['React Native', 'Expo', 'Firebase'],
                image: '/placeholder-project.png',
                color: '#2563EB',
                link: '#',
                github: '#',
              },
              {
                title: 'Project Six',
                description: 'E-commerce solution with payment integration and admin panel.',
                tags: ['Shopify', 'Liquid', 'JavaScript'],
                image: '/placeholder-project.png',
                color: '#F59E0B',
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
                        <RocketLaunchIcon className="w-10 h-10" style={{ color: project.color }} />
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
                        style={{ backgroundColor: '#F1F5F9', color: '#0F172A' }}
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
                      style={{ color: '#0F172A' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: '#0F172A' }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full font-medium font-mono"
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
                backgroundColor: '#2563EB',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 15px 40px rgba(37, 99, 235, 0.4)',
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

      {/* Skills Section - Accent Blue */}
      <section 
        id="skills" 
        className="min-h-screen py-20"
        style={{ 
          backgroundColor: '#2563EB' // Accent Blue
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Skills & Technologies
            </h2>
            <div 
              className="h-1 w-20 mx-auto mb-6"
              style={{ backgroundColor: '#F1F5F9' }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Technologies and tools I work with to build robust backend systems and AI-powered solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Backend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <ServerIcon className="w-6 h-6" />
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Django', 'Go', 'Python', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MySQL', 'Redis'].map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-full font-medium font-mono"
                    style={{
                      backgroundColor: 'rgba(241, 245, 249, 0.2)',
                      color: '#F1F5F9',
                      border: '1px solid rgba(241, 245, 249, 0.3)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* AI & Machine Learning (Learning) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                <CpuChipIcon className="w-6 h-6" />
                AI & Machine Learning <span className="text-sm font-normal opacity-75">(Learning)</span>
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Exploring AI/ML tools and concepts, building to learn
              </p>
              <div className="flex flex-wrap gap-2">
                {['Ollama', 'DeepSeek Coder', 'Local LLMs', 'Prompt Engineering'].map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: 'rgba(37, 99, 235, 0.3)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(37, 99, 235, 0.5)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* System & DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <ComputerDesktopIcon className="w-6 h-6" />
                System & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'Docker', 'Git', 'CI/CD', 'System Architecture', 'Database Design'].map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: 'rgba(249, 203, 64, 0.3)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(249, 203, 64, 0.5)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Leadership & Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <UserGroupIcon className="w-6 h-6" />
                Leadership & Collaboration
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Technical Leadership', 'Team Management', 'Mentoring', 'Project Planning', 'Code Reviews', 'Agile'].map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.3)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(15, 23, 42, 0.5)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <SparklesIcon className="w-6 h-6" />
                Additional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Social Media Marketing', 'Content Strategy', 'Product Requirements', 'Business Analysis'].map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.3)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(245, 158, 11, 0.5)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Work Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <LightBulbIcon className="w-6 h-6" />
                Approach
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-white/90">
                  <strong>Build to Learn:</strong> Practical, project-driven learning style
                </p>
                <p className="text-sm text-white/90">
                  <strong>Production-Focused:</strong> Designing systems for real-world scale
                </p>
                <p className="text-sm text-white/90">
                  <strong>Full-Stack Thinking:</strong> Bridging tech, business, and user needs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="min-h-screen py-20 relative overflow-hidden"
        style={{ 
          backgroundColor: '#0F172A'
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
              top: '-10%',
              right: '-10%',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
              bottom: '-10%',
              left: '-5%',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.12, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                color: '#60a5fa',
                border: '1px solid rgba(37, 99, 235, 0.3)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              <EnvelopeIcon className="w-4 h-4" />
              Get In Touch
            </motion.span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Let's Work Together
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <motion.div 
                className="h-1 w-12 rounded-full" 
                style={{ backgroundColor: '#2563EB' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div 
                className="h-1 w-12 rounded-full" 
                style={{ backgroundColor: '#F59E0B' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                  Contact Information
                </h3>
                <p className="text-base mb-8" style={{ color: '#94a3b8' }}>
                  Feel free to reach out through any of the following channels. 
                  I typically respond within 24-48 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:ali@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderColor: 'rgba(37, 99, 235, 0.3)',
                    x: 5
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
                  >
                    <EnvelopeIcon className="w-6 h-6" style={{ color: '#60a5fa' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>Email</p>
                    <p className="font-semibold" style={{ color: '#FFFFFF' }}>ali@example.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderColor: 'rgba(245, 158, 11, 0.3)',
                    x: 5
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)' }}
                  >
                    <MapPinIcon className="w-6 h-6" style={{ color: '#fbbf24' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>Location</p>
                    <p className="font-semibold" style={{ color: '#FFFFFF' }}>Available for Remote Work</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                    x: 5
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                  >
                    <PhoneIcon className="w-6 h-6" style={{ color: '#4ade80' }} />
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>Availability</p>
                    <p className="font-semibold" style={{ color: '#FFFFFF' }}>Open for opportunities</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>Connect with me</p>
                <div className="flex gap-4">
                  {[
                    { name: 'GitHub', href: 'https://github.com/Ali-oss-cell', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    )},
                    { name: 'LinkedIn', href: '#', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )},
                    { name: 'Twitter', href: '#', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    )},
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#94a3b8'
                      }}
                      whileHover={{ 
                        backgroundColor: 'rgba(37, 99, 235, 0.2)',
                        borderColor: 'rgba(37, 99, 235, 0.4)',
                        color: '#60a5fa',
                        scale: 1.1,
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div 
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                    Send a Message
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl outline-none transition-all font-mono text-sm"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl outline-none transition-all font-mono text-sm"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#FFFFFF',
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#FFFFFF',
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: '#2563EB',
                        color: '#FFFFFF',
                      }}
                      whileHover={{ 
                        backgroundColor: '#1d4ed8',
                        scale: 1.01,
                        boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)'
                      }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Send Message
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <PaperAirplaneIcon className="w-5 h-5" />
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-8 border-t text-center"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <p className="text-sm" style={{ color: '#64748b' }}>
              © {new Date().getFullYear()} Ali Alassaad. Built with Next.js & Framer Motion.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
