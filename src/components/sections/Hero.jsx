import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Button from '../common/Button';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height } = containerRef.current.getBoundingClientRect();
        const x = clientX - width / 2;
        const y = clientY - height / 2;

        gsap.to(containerRef.current, {
          rotationY: x * 0.01,
          rotationX: -y * 0.01,
          transformPerspective: 1000,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Animated background shapes with better spacing */}
      <motion.div
        className="absolute top-32 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-12 dark:opacity-8"
        animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-32 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-12 dark:opacity-8"
        animate={{ x: [0, -100, 0], y: [0, -100, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold tracking-wide mb-8">
              👋 WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            ref={textRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight"
          >
            I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">Yves</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-relaxed"
          >
            Junior Web Developer & Creative Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting beautiful, responsive, and interactive web experiences using modern technologies like React, Tailwind CSS, GSAP, and JavaScript. Based in Cameroon, bringing innovative ideas to life through code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/services'}
              className="px-10 py-5 text-lg"
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 text-lg"
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-8 mb-20"
          >
            {['GitHub', 'Twitter', 'LinkedIn'].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold text-lg"
              >
                {social}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-400 dark:text-gray-600 text-sm font-medium">Scroll to explore</span>
            <span className="text-3xl">↓</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
