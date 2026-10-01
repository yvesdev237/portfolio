import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { ProcessStep } from "../data/portfolio";

export const ProcessTimeline = ({ steps }: { steps: ProcessStep[] }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <motion.div
        className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-gradient-to-r from-emerald-500/40 via-white/15 to-emerald-500/40 md:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.div
        className="absolute left-5 top-2 bottom-2 hidden w-px origin-top bg-gradient-to-b from-emerald-500/40 via-white/15 to-emerald-500/40 md:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <div className="relative flex flex-col gap-6 md:grid md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative pl-14 md:pl-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-sm font-semibold text-emerald-300 md:left-1/2 md:top-0 md:-translate-x-1/2">
              {step.number}
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:pt-12">
              <h3 className="text-xl font-semibold text-stone-100">
                {t(`process.steps.${index}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {t(`process.steps.${index}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
