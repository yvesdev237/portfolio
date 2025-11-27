import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
