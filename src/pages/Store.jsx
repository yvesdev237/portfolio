import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCartShopping } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import hotelTemplate from "../assets/templateImages/templatehotel.png";

const templates = [
  {
    name: "Hotel Website Template",
    type: "Website Template",
    description:
      "A modern and responsive hotel website template designed to showcase your property and attract guests.",
    price: "$120",
    colors: "from-amber-200 via-orange-400 to-rose-600",
    demoUrl: "https://hotelwebsitetemplate.vercel.app",
    image: hotelTemplate,
  },
];

const Store = () => {
  const { t } = useLanguage();

  return (
    <>
      <section
        id="store"
        className="mt-24 scroll-mt-24 rounded-[32px] border border-white/10 bg-slate-950/60 p-5 shadow-[0_20px_80px_rgba(2,12,27,0.32)] backdrop-blur-xl sm:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              {t("digitalStore")}
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {t("templatesTitle")}
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-slate-300">
              {t("templatesDescription")}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-400">
            <FaCartShopping className="text-cyan-300" /> {t("instantDelivery")}
          </span>
        </motion.div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {templates.map((template, index) => (
            <motion.article
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5"
            >
              <div className="relative h-44 overflow-hidden bg-slate-950 p-5">
                <img
                  src={template.image}
                  alt={`${template.name} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="relative rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {template.type}
                </span>
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {template.name}
                  </h3>
                  <span className="text-lg font-semibold text-cyan-200">
                    {t("from")} {template.price}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  {template.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={template.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                  >
                    {t("liveDemo")}{" "}
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`https://wa.me/237699959447?text=${encodeURIComponent(`Hello, I'm interested in the ${template.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-400 transition hover:text-slate-200"
                  >
                    {t("requestTemplate")}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Store;
