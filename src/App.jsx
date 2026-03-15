import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import { motion } from 'framer-motion'
import { StatsCount } from './components/StatsCount'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen w-full p-0 m-0'>
      <Navbar />
      <Hero />
      <motion.section initial = {{opacity : 0 , x : 100}} whileInView={{opacity : 1 , x: 0}} transition={{duration: 1.1}} viewport={{once : true}} className=' w-full h-30 flex justify-center items-center space-x-3 bg-transparent backdrop-blur-2xl rounded-l-full ml-4 ring-gray-400 ring-2'>
        <StatsCount label="y. experience" end={2} duration={20}/>
        <StatsCount label="projects" end={1} duration={20}/>
        <StatsCount label="clients satisfied" end={0} duration={20}/>
      </motion.section>
      <About/>
      <Skill />
      <Projects />
    </div>
  )
}

export default App