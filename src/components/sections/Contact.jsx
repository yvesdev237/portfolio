import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Section 
      title="Get In Touch"
      subtitle="Let's discuss your next project"
      id="contact"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 md:p-12">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center"
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Full Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Email Address
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Subject
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                rows="5"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-600 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              Or reach out directly:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <a href="mailto:contact@yvesdev.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                <p className="text-gray-600 dark:text-gray-400">contact@yvesdev.com</p>
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                <p className="text-gray-600 dark:text-gray-400">+237 6XX XXX XXX</p>
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                <p className="text-gray-600 dark:text-gray-400">Cameroon</p>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
