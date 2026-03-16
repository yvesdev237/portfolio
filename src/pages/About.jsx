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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-30 flex flex-col justify-center space-y-4 p-4"
    >
      <h4 className="text-left uppercase text-sm font-medium">about me</h4>
      <h1 className="text-left capitalize text-2xl">
        Passionate about building{" "}
        <span className="font-medium text-transparent bg-clip-text bg-linear-to-l from-violet-300 to-violet-700">
          great software
        </span>
      </h1>
      <div className="text-left text-md">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga quos
          qui saepe, optio, asperiores velit quae provident laboriosam omnis,
          amet dolore molestiae eos distinctio? Voluptatibus pariatur magnam
          eaque temporibus. Omnis, architecto obcaecati aspernatur dicta a
          maiores eligendi vero exercitationem blanditiis suscipit aperiam fugit
          sapiente optio est magni quos labore nam pariatur! Sapiente, sunt
          incidunt? Nam sit officia commodi esse? Aliquid, nihil ullam quisquam
          architecto sunt accusantium, iure perferendis reiciendis libero magnam
          mollitia atque voluptatibus doloribus sed quia! Harum quisquam ut at
          sit facere sapiente inventore ab doloribus libero corporis.
        </p>
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
