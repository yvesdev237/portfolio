import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import BlogPreview from '../components/sections/BlogPreview';
import ShopPreview from '../components/sections/ShopPreview';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Services />
      <Projects />
      <BlogPreview />
      <ShopPreview />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
