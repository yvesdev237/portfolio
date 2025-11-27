import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { services } from '../data/siteData';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'I start by understanding your goals, target audience, and requirements to create a solid foundation.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating beautiful, user-friendly designs with attention to detail and modern UI/UX principles.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building responsive, performant applications using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous testing and seamless deployment to ensure your project works flawlessly.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300">
                  <div className="p-6">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[55%] w-[45%] h-1 bg-linear-to-r from-blue-600 to-purple-600 opacity-20" />
                )}

                <Card className="h-full">
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let's work together to create something amazing. Contact me to discuss your project requirements and get a personalized quote.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => window.location.href = '/#contact'}
          >
            Get in Touch
          </Button>
        </motion.div>
      </Section>
    </div>
  );
};

export default Services;
