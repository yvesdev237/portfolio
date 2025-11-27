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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Enhanced animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-8"
        animate={{ x: [0, 80, 0], y: [0, 80, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-8"
        animate={{ x: [0, -80, 0], y: [0, -80, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6">
              Welcome to my portfolio ✨
            </span>
          </motion.div>

          <motion.h1
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">Yves</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
          >
            Junior Web Developer & Creative Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I craft beautiful, responsive, and interactive web experiences using modern technologies like React, Tailwind CSS, GSAP, and JavaScript. Based in Cameroon, bringing ideas to life one line of code at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {['GitHub', 'Twitter', 'LinkedIn'].map((social, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {social}
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <div className="text-gray-400 dark:text-gray-600 text-sm mb-2">Scroll to explore</div>
            <div className="text-3xl">↓</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
