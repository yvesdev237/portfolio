import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
import type { Service } from "../data/portfolio";
import { Reveal } from "./Reveal";

export const Services = ({ services }: { services: Service[] }) => {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.name} delay={index * 0.08}>
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-lg font-semibold text-emerald-300">
              {service.initial}
            </div>
            <h3 className="text-2xl font-semibold text-stone-100">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              {service.description}
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-lg font-semibold text-emerald-300">
                {service.price}
              </p>
            </div>
          </motion.article>
        </Reveal>
      ))}

      <div className="md:col-span-3 mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone-300">
          Hosting, domains, paid tools, and major new features are quoted
          separately when needed.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-200 transition-transform hover:-translate-y-0.5 hover:bg-emerald-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Get a project quote <FaArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
