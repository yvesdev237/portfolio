import React from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { skills } from '../../data/siteData';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Years Experience', value: '1+' },
    { label: 'Happy Clients', value: '10+' }
  ];

  return (
    <Section title="About Me" id="about">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image Placeholder */}
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
              className="relative bg-gray-300 dark:bg-gray-600 rounded-2xl w-full h-full flex items-center justify-center overflow-hidden"
            >
              <div className="text-6xl">📸</div>
              <p className="absolute bottom-4 text-gray-600 dark:text-gray-400 text-sm">Profile Photo - Update Later</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm a passionate junior web developer from Cameroon with a strong foundation in HTML, CSS, JavaScript, and React. I love creating beautiful, responsive, and interactive web experiences that solve real problems.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            My journey in web development started with a curiosity to understand how websites work, which has evolved into a professional pursuit of building modern web applications. I'm constantly learning and exploring new technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h3>
            <div className="space-y-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-linear-to-r from-blue-600 to-purple-600 h-full rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
