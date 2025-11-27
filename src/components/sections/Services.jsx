import React from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Card from '../common/Card';
import { services } from '../../data/siteData';

const Services = () => {
  return (
    <Section 
      title="Services"
      subtitle="What I can help you with"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-2xl">
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
