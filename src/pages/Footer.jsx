import React, { useEffect, useState } from "react";
import logo from "../assets/wlogo.svg";
import whiteThemeLogo from "../assets/whitethemelogo.svg";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [isLightTheme, setIsLightTheme] = useState(() =>
    document.documentElement.classList.contains("light"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightTheme(document.documentElement.classList.contains("light"));
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  const social = [
    {
      icon: <FaGithub className="size-5" />,
      to: "https://github.com/yvesdev237/",
    },
    {
      icon: <FaFacebook className="size-5" />,
      to: "https://www.facebook.com/profile.php?id=61580765250332",
    },
    {
      icon: <FaWhatsapp className="size-5" />,
      to: "https://wa.me/237699959447",
    },
  ];

  return (
    <footer className="mt-20 rounded-[28px] border border-white/10 bg-slate-700/10 backdrop-blur-3xl p-5 shadow-[0_20px_80px_rgba(2,12,27,0.2)] sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={isLightTheme ? whiteThemeLogo : logo}
              alt="Yves Dev 237 logo"
              className="h-15 w-15 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-white">Yves Dev 237</p>
              <p className="text-sm text-slate-400">{t("frontendDeveloper")}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
            {t("footerDescription")}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 text-sm text-slate-500">
        © 2026 Yves Dev 237. {t("allRightsReserved")}
      </div>
    </footer>
  );
};

export default Footer;
