import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Card from '../common/Card';
import { testimonials } from '../../data/siteData';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <Section 
      title="Client Testimonials"
      subtitle="What people say about working with me"
      className="py-32 bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4">
        {testimonials.length > 0 ? (
          <>
            {/* Testimonial Carousel */}
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
              className="mb-12"
            >
              <Card className="p-12 md:p-16 text-center hover:shadow-2xl transition-shadow duration-300">
                {/* Rating */}
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-3xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-10 font-medium leading-relaxed">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-6">
                  <motion.img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-600"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[current].role} at {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all duration-300 rounded-full ${
                    current === index
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 w-8 h-3'
                      : 'bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              Testimonials coming soon! Start a project and share your experience.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Testimonials;
