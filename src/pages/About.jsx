import { motion } from "framer-motion";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

const About = () => {
  const infos = [
    {
      label: "Location",
      text: "Bamenda , Cameroon",
    },
    {
      label: "Email",
      text: "yvesdev237@gmail.com",
    },
    {
      label: "Availability",
      text: (
        <span className="text-green-700 flex gap-1 justify-center items-center">
          <FaDotCircle />
          Open For Work
        </span>
      ),
    },
    {
      label: "work type",
      text: "Remote/hybrid",
    },
  ];
  return (
    <motion.section
    id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-30 flex flex-col justify-center space-y-4 p-4 scroll-mt-20"
    >
      <h4 className="text-left uppercase text-sm font-medium">about me</h4>
      <h1 className="text-left capitalize text-2xl">
        Passionate about building{" "}
        <span className="font-medium text-transparent bg-clip-text bg-linear-to-l from-violet-300 to-violet-700">
          great software
        </span>
      </h1>
      <div className="text-left text-md leading-relaxed space-y-6  flex flex-col ">
        <p>
          I'm a passionate frontend developer focused on building modern , responsive , and visually engaging web experiences.<br /> <br />I specialize in React and Tailiwind CSS , creating interfaces that are not only functional but also smooth , intuitive , and enjoyable to use . I pay close attention to details like animations , transitions , and user interaction because I believe great design is what makes a product truly stand out.
        </p>
        <div className="flex flex-col items-start space-y-3 ring-neutral-500 ring-0 rounded-lg">
          <h4 className="text-left text-gray-400">What I focus on :</h4>
          <ul className="list-disc px-7 text-lg text-gray-300">
            <li>Smooth user experience</li>
            <li>Clean and maintainable code</li>
            <li>Modern UI design trends</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center space-y-3 items-start p-4 px-2">
        {infos.map((info, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            key={index}
            className="rounded-2xl flex flex-col justify-around items-start w-[95%] p-3 ring-1 ring-gray-700 shadow-sm shadow-gray-500"
          >
            <p className="text-gray-400 uppercase font-light text-sm">
              {info.label}
            </p>
            <p className="flex gap-1 justify-center items-center">
              {info.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
