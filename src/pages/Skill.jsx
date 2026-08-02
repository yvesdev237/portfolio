import React from 'react'
import { motion } from 'framer-motion'
import { ProgressBar } from '../components/ProgressBar'
import { FaCss3, FaDatabase, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6'

const Skill = () => {
  const skills = [
    { title: 'HTML', level: 85, icon: <FaHtml5 className="size-5 text-amber-300" /> },
    { title: 'CSS', level: 78, icon: <FaCss3 className="size-5 text-blue-400" /> },
    { title: 'JavaScript', level: 70, icon: <FaJs className="size-5 text-yellow-300" /> },
    { title: 'React', level: 72, icon: <FaReact className="size-5 text-cyan-400" /> },
    { title: 'Tailwind CSS', level: 82, icon: <FaCss3 className="size-5 text-sky-400" /> },
    { title: 'Node.js', level: 35, icon: <FaNodeJs className="size-5 text-emerald-400" /> },
    { title: 'Databases', level: 48, icon: <FaDatabase className="size-5 text-emerald-600" /> },
    { title: 'UI/UX design', level: 62, icon: <FaFigma className="size-5 text-white" /> },
  ]

  const categories = [
    {
      title: 'Frontend',
      items: ['React', 'Tailwind CSS', 'UI systems', 'Responsive layouts'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'APIs', 'Database basics', 'Auth flows'],
    },
    {
      title: 'Tools',
      items: ['Git', 'GitHub', 'Figma', 'Vercel'],
    },
  ]

  return (
    <section className="mt-24 scroll-mt-24 rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_80px_rgba(2,12,27,0.32)] backdrop-blur-xl sm:p-8" id="skill">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="max-w-3xl">
        <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">Tech stack</div>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Skills & technologies</h2>
        <p className="mt-3 text-lg leading-8 text-slate-300">A mix of frontend craft, UI thinking and modern tooling that helps ship polished products quickly.</p>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-[0.25em] text-slate-400">Proficiency</h3>
          {skills.map((skill, index) => (
            <motion.div key={skill.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.04 }} viewport={{ once: true }} className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="text-sm font-semibold text-slate-100">{skill.title}</span>
                </div>
                <span className="text-sm text-slate-300">{skill.level}%</span>
              </div>
              <ProgressBar value={skill.level} />
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.title} className="rounded-[24px] border border-white/10 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-slate-200">{item}</span>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-[24px] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-blue-600/10 to-transparent p-4">
            <div className="flex items-center gap-3 text-slate-200">
              <FaGitAlt className="size-5 text-cyan-300" />
              <FaGithub className="size-5 text-slate-100" />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Version control, collaborative workflows and reliable handoff are part of every project I build.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill