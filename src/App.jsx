import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import { motion } from 'framer-motion'
import { StatsCount } from './components/StatsCount'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { FaArrowUp } from 'react-icons/fa'

const App = () => {
  const [scroll , setScroll] = useState(0);
  const [showArrow , setShowArrow] = useState(false)

  useEffect(() => {
    const updatedScrool = () => {
      if (window.scrollY > 100) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / height) * 100 ;
      setScroll(progress)
    };
    window.addEventListener('scroll' ,updatedScrool )
    return () => window.removeEventListener('scroll' , updatedScrool)
  } , []);
  const scroolTop = () => {
    window.scrollTo({
      top : 0 ,
      behavior : "smooth" ,
    })
  }
  return (
    <div className='relative flex flex-col min-h-screen w-full p-0 m-0'>
      <Navbar />
      <Hero />
      <motion.section initial = {{opacity : 0 , x : 100}} whileInView={{opacity : 1 , x: 0}} transition={{duration: 1.1}} viewport={{once : true}} className=' w-full h-30 flex justify-center items-center space-x-3 bg-transparent backdrop-blur-2xl rounded-l-full ml-4 ring-gray-400 ring-2'>
        <StatsCount label="y. experience" end={5} duration={1500}/>
        <StatsCount label="projects" end={2} duration={1500}/>
        <StatsCount label="clients satisfied" end={10} duration={1500}/>
      </motion.section>
      <About/>
      <Skill />
      <Projects />
      <Contact />
      <Footer />
      {showArrow && <div className="fixed bottom-15 right-3 flex justify-center items-center cursor-pointer text-center rounded-lg h-15 w-15 bg-violet-700" onClick={scroolTop}>
            <svg className="w-full h-full -rotate-90 absolute left-1.5 -top-2">
                <circle  cx= "24" cy ="24" r= "20" strokeWidth="4" className="stroke-gray-300 fill-none"/>
                <circle  cx= "24" cy ="24" r= "20" strokeWidth="4" strokeDasharray= "125" strokeDashoffset= {125 - (125 * scroll)/100} className="stroke-indigo-500 transition-all fill-none"/>
            </svg>
            <FaArrowUp className="text-sm text-white p-2 size-10"/>
        </div>}
    </div>
  )
}

export default App