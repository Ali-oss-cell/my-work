'use client';

import { useState, useEffect } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  UserIcon,
  FolderIcon,
  CodeBracketIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home', icon: HomeIcon },
  { name: 'About', href: '#about', icon: UserIcon },
  { name: 'Projects', href: '#projects', icon: FolderIcon },
  { name: 'Skills', href: '#skills', icon: CodeBracketIcon },
  { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`mt-4 transition-all duration-300 rounded-full px-6 md:px-8 ${
          scrolled
            ? 'bg-white/20 backdrop-blur-xl'
            : 'bg-white/10 backdrop-blur-lg'
        }`}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="flex items-center justify-center h-12 md:h-14">
          {/* Centered Navigation Items */}
          <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desktop Navigation - Centered with Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="p-2 text-foreground/80 transition-colors relative group rounded-lg"
                  style={{ 
                    '--hover-color': '#2F52E0'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2F52E0';
                    e.currentTarget.style.backgroundColor = 'rgba(47, 82, 224, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.backgroundColor = '';
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.name}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground transition-colors"
            style={{ 
              '--hover-color': '#2F52E0'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#2F52E0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '';
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/20 backdrop-blur-xl rounded-2xl mt-2"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 text-foreground/80 transition-colors py-3 px-3 rounded-lg"
                      style={{ 
                        '--hover-color': '#2F52E0'
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#2F52E0';
                        e.currentTarget.style.backgroundColor = 'rgba(47, 82, 224, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.backgroundColor = '';
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

