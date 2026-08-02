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
import { FaArrowUpRightDots, FaFolderOpen, FaUsers } from 'react-icons/fa6'

const App = () => {
  const [scroll, setScroll] = useState(0)
  const [showArrow, setShowArrow] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = height > 0 ? (scrollTop / height) * 100 : 0

      setShowArrow(scrollTop > 100)
      setScroll(progress)
      setParallaxOffset(Math.min(scrollTop * 0.12, 80))
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-[-8%] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" style={{ transform: `translateY(${parallaxOffset * 0.7}px)` }} />
        <div className="absolute bottom-[20%] right-[-5%] h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 sm:px-6 lg:px-8">
        <Navbar />
        <Hero parallaxOffset={parallaxOffset} />

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 rounded-[28px] border border-white/10 bg-slate-900/60 p-4 shadow-[0_20px_80px_rgba(2,12,27,0.35)] backdrop-blur-xl sm:p-6 lg:mt-8"
        >
          <div className="grid gap-3 md:grid-cols-3">
            <StatsCount label="experience" end={1} duration={1500} icon={<FaArrowUpRightDots className="size-6" />} />
            <StatsCount label="projects" end={3} duration={1500} icon={<FaFolderOpen className="size-6" />} />
            <StatsCount label="clients satisfied" end={2} duration={1500} icon={<FaUsers className="size-6" />} />
          </div>
        </motion.section>

        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {showArrow && (
        <button
          type="button"
          className="fixed bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/90 shadow-[0_12px_30px_rgba(6,182,212,0.28)] backdrop-blur-xl transition hover:scale-105"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" strokeWidth="4" className="fill-none stroke-slate-700" />
            <circle
              cx="24"
              cy="24"
              r="20"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="125"
              strokeDashoffset={125 - (125 * scroll) / 100}
              className="fill-none stroke-cyan-400 transition-all"
            />
          </svg>
          <FaArrowUp className="relative text-lg text-cyan-200" />
        </button>
      )}
    </div>
  )
}

export default App