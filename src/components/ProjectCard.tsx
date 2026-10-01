import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../data/portfolio";

const isExternalHttpUrl = (value: string | undefined): value is string => {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const projectKey = project.isConcept ? "hotel" : "rental";
  const liveUrl = project.liveUrl?.trim() || project.caseStudy?.liveLink.trim();
  const hasLiveLink = isExternalHttpUrl(liveUrl);
  const hasCaseStudyLink = Boolean(
    project.caseStudyUrl && project.caseStudyUrl.trim(),
  );
  const caseStudy = project.caseStudy;

  return (
    <>
      <motion.article
        className="group relative h-[250px] -rotate-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_20px_40px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 sm:h-[280px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="absolute inset-0 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={t(`projects.${projectKey}.alt`)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            onError={(event) => {
              const target = event.currentTarget;
              target.src =
                "data:image/svg+xml;charset=UTF-8," +
                encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
                <rect width="1200" height="700" fill="#0f172a"/>
                <rect x="80" y="90" width="1040" height="520" rx="30" fill="#111827" stroke="#334155"/>
                <rect x="120" y="145" width="300" height="22" rx="10" fill="#22c55e" opacity="0.8"/>
                <rect x="120" y="190" width="520" height="18" rx="9" fill="#e2e8f0" opacity="0.7"/>
                <rect x="120" y="230" width="470" height="18" rx="9" fill="#e2e8f0" opacity="0.5"/>
                <rect x="120" y="320" width="280" height="170" rx="18" fill="#1e293b"/>
                <rect x="430" y="320" width="610" height="18" rx="9" fill="#e2e8f0" opacity="0.7"/>
                <rect x="430" y="360" width="560" height="18" rx="9" fill="#e2e8f0" opacity="0.5"/>
                <rect x="430" y="400" width="520" height="18" rx="9" fill="#e2e8f0" opacity="0.4"/>
                <rect x="430" y="440" width="360" height="18" rx="9" fill="#e2e8f0" opacity="0.35"/>
              </svg>
            `);
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <span className="max-w-full truncate rounded-full border border-white/20 bg-slate-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-100 backdrop-blur-sm">
              {t(`projects.${projectKey}.category`)}
            </span>
          </div>

          <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-white sm:text-xl">
            {t(`projects.${projectKey}.title`)}
          </h3>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {hasLiveLink ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-200 sm:flex-none"
              >
                {t("projects.seeLive")}{" "}
                <FaArrowUpRightFromSquare size={13} aria-hidden="true" />
              </a>
            ) : null}
            {hasCaseStudyLink ? (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-slate-950/40 px-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-slate-950/70 sm:flex-none"
              >
                {t("projects.caseStudy")}{" "}
                <FaArrowUpRightFromSquare size={13} aria-hidden="true" />
              </a>
            ) : null}
            {caseStudy ? (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-slate-950/40 px-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-slate-950/70 sm:flex-none"
              >
                {t("projects.details")}{" "}
                <FaArrowUpRightFromSquare size={13} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {caseStudy && isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[1.75rem] border border-white/10 bg-slate-950 p-5 shadow-[0_24px_50px_rgba(15,23,42,0.45)] sm:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
                    {t("projects.modalTitle")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-stone-100">
                    {t(`projects.${projectKey}.title`)}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label={t("projects.close")}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-200"
                >
                  <FaXmark size={16} aria-hidden="true" />
                </button>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-4">
                  <InfoRow
                    label={t("projects.project")}
                    value={t(`projects.${projectKey}.title`)}
                  />
                  <InfoRow
                    label={t("projects.type")}
                    value={t(`projects.${projectKey}.type`)}
                  />
                  <InfoRow
                    label={t("projects.goal")}
                    value={t(`projects.${projectKey}.goal`)}
                  />
                  <InfoRow
                    label={t("projects.challenge")}
                    value={t(`projects.${projectKey}.challenge`)}
                  />
                </div>

                <div className="space-y-4">
                  <InfoRow
                    label={t("projects.solution")}
                    value={t(`projects.${projectKey}.solution`)}
                  />
                  <InfoRow
                    label={t("projects.role")}
                    value={t(`projects.${projectKey}.role`)}
                  />
                  <InfoRow
                    label={t("projects.stack")}
                    value={caseStudy.stack}
                  />
                  <InfoRow
                    label={t("projects.liveLink")}
                    value={caseStudy.liveLink}
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-stone-300">
                  {t("projects.keyFeatures")}
                </p>
                <ul className="space-y-2 text-sm text-stone-300">
                  {caseStudy.keyFeatures.map((_, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>
                        {t(`projects.${projectKey}.features.${index}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3.5">
    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
      {label}
    </p>
    <p className="mt-2 text-sm leading-6 text-stone-200">{value}</p>
  </div>
);
