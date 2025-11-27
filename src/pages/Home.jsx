import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Home;
