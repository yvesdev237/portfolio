import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket } from "react-icons/fa6";

const Hero = ({ parallaxOffset = 0 }) => {
  const highlights = [
    "React",
    "Tailwind CSS",
    "UI motion",
    "Responsive design",
  ];

  return (
    <motion.section
      id="top"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="relative mt-15 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 px-5 py-10 shadow-[0_20px_80px_rgba(2,12,27,0.4)] backdrop-blur-xl sm:px-8 sm:py-14 lg:mt-16 lg:px-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_45%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            <FaRocket className="mr-2" /> Available for freelance & remote work
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building polished digital experiences with a{" "}
              <span className="accent-gradient">modern blue-tech vibe</span>.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I’m Yves, a frontend developer crafting elegant interfaces, smooth
              motion and memorable user journeys .
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              <FaCode /> View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
            >
              Let’s talk <FaArrowRight />
            </a>
          </div>
        </div>

        <motion.div
          style={{ y: parallaxOffset * 0.2 }}
          className="rounded-[24px] border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_60px_rgba(2,12,27,0.32)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                Current focus
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Fast products, clear storytelling
              </h2>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-200">
              <FaCode className="size-6" />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["UI systems", "Design systems and scalable layouts"],
              ["Motion", "Fluid transitions and thoughtful engagement"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 p-4">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">
              Now shipping
            </p>
            <p className="mt-2 text-lg text-slate-100">
              Modern landing pages, portfolio upgrades and interactive web apps.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
