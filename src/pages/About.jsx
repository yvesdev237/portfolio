import { motion } from "framer-motion";
import React from "react";
import { FaDotCircle } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const About = () => {
  const infos = [
    { label: "Location", text: "Bamenda, Cameroon" },
    { label: "Email", text: "yvesdev237@gmail.com" },
    {
      label: "Availability",
      text: (
        <span className="flex items-center gap-2 text-emerald-300">
          <FaDotCircle /> Open for work
        </span>
      ),
    },
    { label: "Work type", text: "Remote / hybrid" },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-24 scroll-mt-24 rounded-[32px] p-5 shadow-[0_20px_80px_rgba(2,12,27,0.32)] backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            About me
          </div>
          <img
            src={profile}
            alt="Yves profile"
            className="h-72 md:h-max w-full rounded-3xl object-cover shadow-[0_12px_40px_rgba(2,12,27,0.34)]"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Passionate about building{" "}
            <span className="accent-gradient">great software</span>
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            I’m a frontend developer focused on modern, responsive and visually
            engaging web experiences. I enjoy turning ideas into interfaces that
            feel precise, fast and memorable.
          </p>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              What I focus on
            </h3>
            <ul className="mt-3 space-y-2 pl-5 text-slate-300">
              <li className="list-disc">Smooth user experiences</li>
              <li className="list-disc">Clean and maintainable code</li>
              <li className="list-disc">Modern UI movement and clarity</li>
            </ul>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {infos.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-[20px] border border-white/10 bg-slate-900/70 p-4"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {info.label}
                </p>
                <p className="mt-2 text-base text-slate-200">{info.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
