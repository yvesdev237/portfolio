import React, { useEffect, useState } from "react";
import logo from "../assets/wlogo.svg";
import {
  FaBars,
  FaGlobe,
  FaMoon,
  FaSun,
  FaWhatsapp,
  FaX,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const links = [
    { label: t("about"), target: "#about" },
    { label: t("skills"), target: "#skill" },
    { label: t("projects"), target: "#projects" },
    { label: t("store"), target: "#store" },
    { label: t("contact"), target: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  const toggle = () => setOpen((value) => !value);

  return (
    <nav
      className={`fixed top-3 z-50 mt-3 ${open ? "rounded-4xl" : "rounded-full"} border border-white/10 bg-slate-950/70 px-6 py-3 shadow-[0_10px_50px_rgba(2,12,27,0.35)] backdrop-blur-xl`}
    >
      <div className="flex items-center justify-between gap-7">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Yves Dev 237 logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-400/50"
          />
          <div>
            <p className="text-sm font-semibold uppercase  text-white">
              Yves Dev 237
            </p>
            <p className="text-xs text-slate-400">{t("frontendDeveloper")}</p>
          </div>
        </a>

        <div className="hidden items-center md:gap-4 gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.target}
              href={link.target}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
              aria-label={darkMode ? t("lightTheme") : t("darkTheme")}
            >
              {darkMode ? (
                <FaSun className="size-4" />
              ) : (
                <FaMoon className="size-4" />
              )}
            </button>
            <label className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">
              <FaGlobe className="size-3.5 text-cyan-300" />
              <span className="sr-only">{t("language")}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-200 outline-none"
                aria-label={t("language")}
              >
                <option value="EN" className="bg-slate-950">
                  EN
                </option>
                <option value="FR" className="bg-slate-950">
                  FR
                </option>
              </select>
            </label>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20 md:inline-flex"
          >
            {t("letsTalk")}
          </a>
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
            aria-label={t("toggleNavigation")}
          >
            {open ? <FaX className="size-5" /> : <FaBars className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-3 p-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-base font-medium text-slate-200 transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
            >
              {darkMode ? (
                <FaSun className="size-4" />
              ) : (
                <FaMoon className="size-4" />
              )}
              {darkMode ? t("lightTheme") : t("darkTheme")}
            </button>
            <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              <FaGlobe className="size-4 text-cyan-300" />
              <span className="sr-only">{t("language")}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="bg-transparent outline-none"
                aria-label={t("language")}
              >
                <option value="EN" className="bg-slate-950">
                  {t("english")}
                </option>
                <option value="FR" className="bg-slate-950">
                  {t("french")}
                </option>
              </select>
            </label>
          </div>
          <a
            href="https://wa.me/237699959447"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            <FaWhatsapp className="size-4" /> {t("sendMessage")}
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
