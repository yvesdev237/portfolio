import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ 
  children, 
  id = '',
  className = '',
  title = '',
  subtitle = ''
}) => {
  return (
    <motion.section
      id={id}
      className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  );
};

export default Section;
