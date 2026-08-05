import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaWhatsapp, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { label: "About", target: "#about" },
    { label: "Skills", target: "#skill" },
    { label: "Projects", target: "#projects" },
    { label: "Contact", target: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  const toggle = () => setOpen((value) => !value);

  return (
    <nav className={`fixed top-3 z-50 mt-3 ${open ? "rounded-4xl" : "rounded-full"} border border-white/10 bg-slate-950/70 px-6 py-3 shadow-[0_10px_50px_rgba(2,12,27,0.35)] backdrop-blur-xl`}>
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
            <p className="text-xs text-slate-400">Frontend Developer</p>
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
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20 md:inline-flex"
          >
            Let’s talk
          </a>
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
            aria-label="Toggle navigation"
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
          <a
            href="https://wa.me/237699959447"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            <FaWhatsapp className="size-4" /> Send me a message
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
