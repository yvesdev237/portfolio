import React from "react";
import { FaGithub } from "react-icons/fa";
import { ProjectCard } from "../components/ProjectCard";
import logo from "../assets/profilepicture.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "zilo home",
      image: logo,
      description:
        "A real estate platform where people in Bamenda can easily find homes",
      to: "https://zilohome.vercel.app"
    },
  ];
  return (
    <section className="mt-30 flex flex-col justify-center space-y-4 p-4" id="projects">
      <h4 className="text-left uppercase text-sm font-medium">my work</h4>
      <h1 className="text-left capitalize text-3xl">Featured projects</h1>
      <div className="text-left text-md">
          <a href="https://github.com/yvesdev237?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-[80%] p-2 px-7 text-lg rounded-2xl bg-violet-700 backdrop:blur-3xl shadow-sm shadow-gray-50 hover:ring-2 hover:ring-white flex gap-3 justify-start items-center capitalize ">
          <FaGithub className="size-5 " />
          <p>view on gitHub</p></a>
      </div>

      {projects.map((p, index) => (
        <motion.div
        key={index}
          className="w-full flex flex-col justify-center space-y-1 items-center p-4 px-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ProjectCard
            title={p.title}
            description={p.description}
            image={p.image}
            link={p.to}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
