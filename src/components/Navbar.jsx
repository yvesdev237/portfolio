import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaWhatsapp, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    {
      label: "about",
      target: "#about",
    },
    {
      label: "my skills",
      target: "#skill",
    },
    {
      label: "my project",
      target: "#projects",
    },
    {
      label: "contact",
      target: "#contact",
    },
  ];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const preventWindowAction = () => {
        setOpen(false)
    }
    window.addEventListener('scroll' , preventWindowAction)

    return() => {
      window.removeEventListener('scroll' , preventWindowAction)
    }
  })

  const toggle = () => setOpen(!open);
  return (
    <nav className="fixed z-100 bg-white/10 backdrop-blur-lg shadow-2xl p-6 text-white w-full flex justify-between items-center h-20">
      <div className="flex gap-3 p-10 px-10 justify-center items-center w-auto h-20">
        <img src={logo} alt="logo" className="h-15 w-15 rounded-full " />
        <span className="text-lg font-extrabold">Yves Dev 237</span>
      </div>
      <motion.div initial = {{opacity : 0 , x : 50}} whileInView={{opacity : 1 , x : 0}} viewport={{once : true}} transition={{duration : 0.8}} onClick={toggle}>
        <FaBars
          className={`size-7 cursor-pointer absolute transition-all duration-300 ease-in-out ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
        />
        <FaX
          className={`size-7 cursor-pointer transition-all duration-300 ease-in-out ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
        />
      </motion.div>
      {open && (
        <motion.div
          initial={{ opacity: 0.01, x: 120, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="fixed flex flex-col items-start backdrop-blur-lg text-white right-0 top-20  transition-all duration-500 ease-in-out w-full h-70 bg-gray-600 shadow-2xl"
        >
          <div className="flex flex-col items-start p-4 space-y-1 w-full ">
            {links.map((link, i) => (
              <a
                href={link.target}
                key={i}
                onClick={() => setOpen(false)}
                className="text-lg font-medium capitalize text-left p-2 w-full rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="w-full justify-center items-center flex ">
            <a
              href="https://wa.me/237699959447"
              className="w-[90%] my-1.5 p-2 px-2 text-lg rounded-lg bg-violet-800 backdrop:blur-3xl shadow-sm shadow-gray-50 hover:ring-2 hover:ring-white flex gap-3 justify-center items-center capitalize font-semibold"
            >
              <FaWhatsapp className="size-7" />
              Send me a message
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
