import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { skills } from '../data/siteData';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Years Experience', value: '1+' },
    { label: 'Happy Clients', value: '10+' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript with a focus on modern web development practices.'
    },
    {
      year: '2025',
      title: 'Mastered React & Build Tools',
      description: 'Developed proficiency in React, Vite, Tailwind CSS, and modern development workflows.'
    },
    {
      year: 'Present',
      title: 'Building Real Projects',
      description: 'Currently working on professional portfolio projects and exploring advanced technologies.'
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
            About <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            A passionate junior web developer crafting beautiful digital experiences with modern technologies
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-50" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-linear-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl w-full h-full flex items-center justify-center overflow-hidden"
                >
                  <div className="text-6xl">📸</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Hey, I'm Yves
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate junior web developer from Cameroon with a strong foundation in modern web technologies. I specialize in creating beautiful, responsive, and interactive web experiences that solve real problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                My journey in web development started with curiosity about how websites work, which has evolved into a professional pursuit of building exceptional digital products. I'm constantly learning, experimenting, and pushing boundaries with new technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not coding, you'll find me exploring design trends, contributing to communities, or working on side projects that excite me.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              My Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-1 h-16 bg-gray-200 dark:bg-gray-700 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{item.year}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              My Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="bg-linear-to-r from-blue-600 to-purple-600 h-full rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
