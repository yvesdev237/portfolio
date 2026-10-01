import { FaArrowUp, FaEnvelope, FaFacebookF, FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/portfolio";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm text-stone-300">
          {t("footer.copyright")}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t("social.github")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-200 transition-colors hover:text-white"
          >
            <FaGithub size={16} aria-hidden="true" />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label={t("social.facebook")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-200 transition-colors hover:text-white"
          >
            <FaFacebookF size={16} aria-hidden="true" />
          </a>
          <a
            href={socialLinks.email}
            aria-label={t("social.email")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-200 transition-colors hover:text-white"
          >
            <FaEnvelope size={16} aria-hidden="true" />
          </a>
          <a
            href="#top"
            aria-label={t("footer.backToTop")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-200 transition-colors hover:bg-emerald-500/15"
          >
            <FaArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
