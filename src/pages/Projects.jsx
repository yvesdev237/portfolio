import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ProjectCard } from '../components/ProjectCard'
import zh from '../assets/zh-logo.png'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Zilo Home',
      image: zh,
      description: 'A modern real estate experience designed to help people in Bamenda discover homes with ease and clarity.',
      to: 'https://zilohome.vercel.app',
    },
  ]

  return (
    <section className="mt-24 scroll-mt-24 rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_80px_rgba(2,12,27,0.32)] backdrop-blur-xl sm:p-8" id="projects">
      <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">My work</div>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Featured projects</h2>
          <p className="mt-2 max-w-2xl text-lg text-slate-300">A snapshot of creative work that blends striking visuals with practical product thinking.</p>
        </div>
        <a href="https://github.com/yvesdev237?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-cyan-400/10">
          <FaGithub className="size-4" /> View on GitHub
        </a>
      </motion.div>

      <div className="mt-8">
        {projects.map((project, index) => (
          <motion.div key={project.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.08 }} viewport={{ once: true }}>
            <ProjectCard title={project.title} description={project.description} image={project.image} link={project.to} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
