import { FaBars, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const navLinks = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const nextLanguage = i18n.resolvedLanguage === "fr" ? "en" : "fr";
  const languageLabel =
    nextLanguage === "fr" ? "switchToFrench" : "switchToEnglish";
  const whatsappUrl = `https://wa.me/237699959447?text=${encodeURIComponent(t("contact.whatsappMessage"))}`;

  const languageButton = (className: string) => (
    <button
      type="button"
      lang={nextLanguage}
      aria-label={t(`nav.${languageLabel}`)}
      title={t(`nav.${languageLabel}`)}
      onClick={() => void i18n.changeLanguage(nextLanguage)}
      className={className}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-stone-50">
          <img src="/yveslogobw.svg" alt="" className="h-15 w-auto" />
          <span className="text-lg font-semibold tracking-tight">
            Yves Dev 237
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-stone-300 transition-colors hover:text-stone-100"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {languageButton(
            "inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold text-stone-100 transition-colors hover:bg-white/10",
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            <FaWhatsapp size={16} aria-hidden="true" />
            {t("nav.startProject")}
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={menuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-100 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      <AnimatePresence
        onExitComplete={() => {
          if (!pendingHref) return;

          if (window.location.hash !== pendingHref) {
            window.history.pushState(null, "", pendingHref);
          }
          document
            .querySelector(pendingHref)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          setPendingHref(null);
        }}
      >
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    setPendingHref(link.href);
                    setMenuOpen(false);
                  }}
                  className="rounded-xl px-3 py-3 text-base text-stone-200 transition-colors hover:bg-white/5"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-slate-950"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                {t("nav.startProject")}
              </a>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-stone-400">
                  {t("nav.language")}
                </span>
                {languageButton(
                  "inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold text-stone-100 transition-colors hover:bg-white/10",
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
