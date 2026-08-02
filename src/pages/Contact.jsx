import { motion } from 'framer-motion'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaFacebook, FaGithub, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { TailSpin } from 'react-loader-spinner'

const Contact = () => {
  const [sender, setSender] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [budget, setBudget] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async (e) => {
    e.preventDefault()
    if (!budget) {
      toast.error('Please choose your budget')
      return
    }
    if (!email || !sender || !content) {
      toast.error('Some fields are empty')
      return
    }
    if (!email.includes('@')) {
      toast.error('Please enter a valid email')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('https://formspree.io/f/xpqyezbe', {
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ sender, email, subject, content, budget }),
      })

      if (response.ok) {
        toast.success("Thanks for your message — I’ll get back to you soon")
        setSender('')
        setEmail('')
        setSubject('')
        setContent('')
        setBudget('')
      } else {
        toast.error('Something went wrong')
      }
    } catch (err) {
      toast.error('Unable to send your message')
    } finally {
      setLoading(false)
    }
  }

  const social = [
    { name: 'GitHub', icon: <FaGithub className="size-5" />, to: 'https://github.com/yvesdev237/' },
    { name: 'Facebook', icon: <FaFacebook className="size-5" />, to: 'https://www.facebook.com/profile.php?id=61580765250332' },
    { name: 'Whatsapp', icon: <FaWhatsapp className="size-5" />, to: 'https://wa.me/237699959447' },
  ]

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-24 scroll-mt-24 rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_80px_rgba(2,12,27,0.32)] backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">Contact</div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build something memorable together</h2>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Open for freelance projects, full-time roles and interesting collaborations. I usually reply within a day.
          </p>

          <div className="flex flex-wrap gap-3">
            {social.map((item) => (
              <a key={item.name} href={item.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10">
                {item.icon} {item.name}
              </a>
            ))}
          </div>
        </div>

        <motion.form onSubmit={send} className="rounded-[24px] border border-white/10 bg-slate-900/80 p-4 shadow-[0_18px_60px_rgba(2,12,27,0.25)] sm:p-6">
          <h3 className="text-xl font-semibold text-white">Send me a message</h3>
          <div className="mt-4 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-300">
                <span className="mb-2 block">Name *</span>
                <input type="text" className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none ring-0 transition focus:border-cyan-400/50" placeholder="Your name" value={sender} onChange={(e) => setSender(e.target.value)} required />
              </label>
              <label className="text-sm font-medium text-slate-300">
                <span className="mb-2 block">Email *</span>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
            </div>

            <label className="text-sm font-medium text-slate-300">
              <span className="mb-2 block">Subject</span>
              <input type="text" className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50" placeholder="What’s the project about?" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </label>

            <label className="text-sm font-medium text-slate-300">
              <span className="mb-2 block">Budget</span>
              <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50">
                <option value="">What’s your budget?</option>
                <option value="$100 ~ $300">$100 ~ $300</option>
                <option value="$300 ~ $500">$300 ~ $500</option>
                <option value="$500 +">$500 +</option>
              </select>
            </label>

            <label className="text-sm font-medium text-slate-300">
              <span className="mb-2 block">Message *</span>
              <textarea rows="5" className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400/50" placeholder="Tell me a bit about your idea..." value={content} onChange={(e) => setContent(e.target.value)} required />
            </label>
          </div>

          <button type="submit" disabled={loading} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
            {loading ? <TailSpin height={20} width={20} color="#0f172a" /> : <><FaTelegramPlane className="size-4" /> Send message</>}
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact
