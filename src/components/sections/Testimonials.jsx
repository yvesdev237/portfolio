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
      className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        {testimonials.length > 0 ? (
          <>
            {/* Testimonial Carousel */}
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <Card className="p-8 md:p-12 text-center">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Testimonials coming soon! Start a project and share your experience.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Testimonials;
