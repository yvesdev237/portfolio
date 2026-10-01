import { motion } from "motion/react";
import { skillTags } from "../data/portfolio";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <Reveal>
        <div className="space-y-5 text-stone-300">
          <p>
            I’m Yves, a web developer based in Bamenda, Cameroon. I enjoy
            turning business ideas into clear, useful digital experiences. My
            focus is on building fast, responsive websites that help service
            businesses explain what they do, build trust, and make it simple for
            customers to reach them.
          </p>
          <p>I work remotely with clients in Cameroon and internationally.</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {skillTags.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-medium text-stone-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className=" rounded-[1.8rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.18)]"
        >
          <div className="rounded-[1.4rem] border border-emerald-400/20 bg-slate-900 p-4">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">const</span>
                <span className="text-stone-100">focus</span>
                <span className="text-slate-400">=</span>
                <span className="text-amber-300">
                  ['clarity', 'trust', 'conversion']
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">const</span>
                <span className="text-stone-100">stack</span>
                <span className="text-slate-400">=</span>
                <span className="text-amber-300">
                  ['React', 'Tailwind', 'Supabase']
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-300">return</span>
                <span className="text-sky-300">businessGrowth</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="rounded-xl border border-white/10 bg-slate-800/70 p-3">
                <div className="text-lg font-semibold text-stone-100">
                  Remote
                </div>
                <div className="mt-1 text-slate-300">Worldwide</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/70 p-3">
                <div className="text-lg font-semibold text-stone-100">
                  Cameroon
                </div>
                <div className="mt-1 text-slate-300">Bamenda</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </div>
  );
};
