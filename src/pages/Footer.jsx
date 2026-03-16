import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const social = [
        {
          icon: <FaGithub className="size-5" />,
          to: "https://github.com/yvesdev237/",
          t : "_blank" ,
          r : "noopener noreferrer"
        },
        {
          icon: <FaFacebook className="size-5" />,
          to: "https://www.facebook.com/profile.php?id=61580765250332",
          t : "_blank" ,
          r : "noopener noreferrer"
        },
        {
          icon: <FaWhatsapp className="size-5" />,
          to: "https://wa.me/237699959447",
        },
      ];
  return (
    <footer className="relative mt-20 flex flex-col justify-center items-start space-y-3 p-2 mb-10">
      <div className="w-full bg-white h-0.5 "></div>
      <div className="flex gap-3 justify-center p-2 items-start w-auto h-10">
        <img src={logo} alt="logo" className="h-8 w-8 rounded-lg " />
        <span className="text-lg font-extrabold">Yves Dev 237</span>
      </div>
      <div className="text-xl font-medium font-serif w-auto p-1 text-left "><span className="text-transparent bg-linear-to-b from-gradient-400 to-purple-500 bg-clip-text">From your vision</span> <br/><span className="text-transparent bg-linear-to-b from-purple-700 to-white bg-clip-text">To a digital solution</span></div>
        <div className="w-full flex justify-center items-center space-x-2">
            {social.map((s, i) => (
                <div key={i} className="w-10 p-1 flex text-center justify-center items-center bg-violet-600 rounded-lg h-10">
                    <a href={s.to} target={s.t} rel= {s.t} className="">
                        {s.icon}
                    </a>
                </div>
            ))}
        </div>
        <p className="text-md mt-5 text-gray-500 font-medium">&copy; 2026 Yves Dev 237 . All rights reserved .</p>
    </footer>
  );
};

export default Footer;
