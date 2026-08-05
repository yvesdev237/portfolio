import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const ProjectCard = ({ description, title, image, link }) => {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      className="group overflow-hidden rounded-[28px] bg-slate-900/70 shadow-[0_18px_70px_rgba(2,12,27,0.32)]"
    >
      <div className="relative h-50 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white transition hover:scale-105"
        >
          <FaArrowRight className="size-4" />
        </a>
      </div>
      <div className="space-y-3 p-5">
        <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
          Featured project
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-base leading-7 text-slate-300">{description}</p>
      </div>
    </motion.article>
  );
};
