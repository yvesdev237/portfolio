import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const social = [
    { icon: <FaGithub className="size-5" />, to: 'https://github.com/yvesdev237/' },
    { icon: <FaFacebook className="size-5" />, to: 'https://www.facebook.com/profile.php?id=61580765250332' },
    { icon: <FaWhatsapp className="size-5" />, to: 'https://wa.me/237699959447' },
  ]

  return (
    <footer className="mt-20 rounded-[28px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_80px_rgba(2,12,27,0.2)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Yves Dev 237 logo" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-lg font-semibold text-white">Yves Dev 237</p>
              <p className="text-sm text-slate-400">Frontend developer</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">From your vision to a refined digital experience, with thoughtful design and smooth interaction.</p>
        </div>

        <div className="flex items-center gap-2">
          {social.map((item, index) => (
            <a key={index} href={item.to} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-500">
        © 2026 Yves Dev 237. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
