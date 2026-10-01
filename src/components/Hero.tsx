import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaLocationDot,
} from "react-icons/fa6";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";

const featuredProject = projects.find((project) => project.isConcept);
const mobileProject = projects.find((project) => !project.isConcept);
const featuredProjectUrl =
  featuredProject?.liveUrl?.trim() ||
  featuredProject?.caseStudy?.liveLink.trim();

export const Hero = () => {
  const { t } = useTranslation();
  const featuredProjectKey = featuredProject?.isConcept ? "hotel" : "rental";
  const whatsappUrl = `https://wa.me/237699959447?text=${encodeURIComponent(t("contact.whatsappMessage"))}`;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {t("hero.location")}
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-stone-50 sm:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
                {t("hero.description")}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  {t("hero.discuss")} {" "}
                  <FaArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-stone-100 transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  {t("hero.viewWork")}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["badgeMobile", "badgeEnquiries", "badgeRemote"].map((key) => (
                  <span
                    key={key}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-xs font-medium text-stone-200"
                  >
                    <FaCheck
                      size={14}
                      className="text-emerald-300"
                      aria-hidden="true"
                    />
                    {t(`hero.${key}`)}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-stone-200">
                <FaLocationDot
                  size={15}
                  className="text-emerald-300"
                  aria-hidden="true"
                />
                {t("hero.availability")}
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:justify-self-end" delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative aspect-[1.1] w-full max-w-xl sm:aspect-[1.2]"
            >
              <div className="absolute inset-x-[2%] bottom-[8%] top-[3%] -rotate-2 overflow-hidden rounded-2xl border border-white/20 bg-stone-100 shadow-[0_28px_60px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:rotate-0">
                <div className="flex h-10 items-center gap-3 border-b border-slate-200 bg-stone-50 px-3 sm:h-11 sm:px-4">
                  <div
                    className="flex shrink-0 items-center gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  </div>
                  <span className="min-w-0 flex-1 truncate rounded-md border border-slate-200 bg-white px-3 py-1 text-center text-[9px] text-slate-500 sm:text-[10px]">
                    {featuredProject ? t(`projects.${featuredProjectKey}.title`) : t("hero.featuredProject")}
                  </span>
                </div>
                <a
                  href={
                    featuredProjectUrl?.startsWith("http")
                      ? featuredProjectUrl
                      : "#work"
                  }
                  target={
                    featuredProjectUrl?.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    featuredProjectUrl?.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  aria-label={t("hero.openProject", {
                    project: featuredProject
                      ? t(`projects.${featuredProjectKey}.title`)
                      : t("hero.featuredProject"),
                  })}
                  className="group relative block h-[calc(100%-2.5rem)] overflow-hidden bg-slate-900 sm:h-[calc(100%-2.75rem)]"
                >
                  <img
                    src={featuredProject?.image ?? "/images/montcameroon.png"}
                    alt={featuredProject ? t(`projects.${featuredProjectKey}.alt`) : t("hero.hotelAlt")}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-semibold text-slate-950 shadow-lg transition-colors group-hover:bg-emerald-200 sm:bottom-4 sm:right-4 sm:px-4 sm:py-2.5 sm:text-xs">
                    {t("hero.visitSite")}
                    <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
                  </span>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute bottom-0 right-0 z-10 h-[72%] w-[30%] rotate-[4deg] overflow-hidden rounded-[1.5rem] border-[5px] border-slate-900 bg-stone-100 shadow-[0_24px_48px_rgba(0,0,0,0.45)] sm:w-[28%]"
                aria-hidden="true"
              >
                <div className="absolute left-1/2 top-1.5 z-10 h-3 w-10 -translate-x-1/2 rounded-full bg-slate-900" />
                <div className="absolute inset-x-2 bottom-2 top-7 flex items-center justify-center overflow-hidden rounded-[1.15rem] bg-slate-200/80">
                  <img
                    src={
                      mobileProject?.image ?? "/images/restaurant-project.webp"
                    }
                    alt=""
                    className="h-[82%] w-[82%] object-contain object-center"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
