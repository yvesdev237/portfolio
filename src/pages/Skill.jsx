import React from 'react'
import { motion } from "framer-motion";
import { ProgressBar } from '../components/ProgressBar';
import { FaCss3, FaDatabase, FaFigma, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

const Skill = () => {
    const skills = [
        {
            title : "Html" ,
            level : 85,
            icon : <FaHtml5 className='size-5 text-amber-300'/>,
            stack : "frontend",
        },
        {
            title : "CSS" ,
            level : 70 ,
            icon : <FaCss3 className='text-blue-400 size-5'/>,
            stack : "frontend", 
        },
        {
            title : "Javascript" ,
            level : 67 ,
            icon : <FaJs className='size-5 text-yellow-300'/>,
            stack : "frontend", 
        },
        {
            title : "react.Js" ,
            level : 80 ,
            icon : <FaReact className='text-blue-400 size-5'/>,
            stack : "frontend", 
        },
        {
            title : "NodeJs" ,
            level : 20 ,
            icon : <FaNodeJs className='text-green-400 size-5'/>,
            stack : "backend", 
        },
        {
            title : "tailwindcss" ,
            level : 75 ,
            icon : <FaCss3 className='text-blue-400 size-5'/>,
            stack : "frontend", 
        },
        {
            title : "databases (supabase , firebase)" ,
            level : 40 ,
            icon : <FaDatabase className='size-5 text-green-900'/>,
            stack : "backend", 
        },
        {
            title : "UI/UX design (figma)" ,
            level : 45 ,
            icon : <FaFigma className='bg-black size-5' />,
            stack : "frontend", 
        },
        {
            title : "typescript" ,
            level : 30 ,
            icon : <FaJs className='size-5 text-yellow-300'/>,
            stack : "frontend",
        },
    ];
    const tools = [
        {
            name : "git",
            icon : <FaGit className='size-5 text-red-400' />
        },
        {
            name : "gitHub",
            icon : <FaGithub className='size-5' />
        },
    ]
  return (
    <section className='mt-20 flex flex-col justify-center space-y-3 p-2 scroll-mt-20' id='skill'>
        <motion.div initial = {{opacity:0 , y :50}} whileInView={{opacity: 1 , y : 0}} transition = {{duration: 0.8}} viewport={{once : true}} className=' flex flex-col justify-center space-y-3 p-2'>
            <h4 className='text-center uppercase font-medium text-sm'>tech stack</h4>
            <h1 className='text-center capitalize text-2xl'>Skills & technologies</h1>
            <p className='text-md text-gray-400 text-center'>Tools and Technologies I work with to build fast, reliable products.</p>
        </motion.div>
        <div className='p-3 flex flex-col justify-center space-y-3'>
            <h2 className='text-left text-sm uppercase font-medium text-gray-400'>proficiency</h2>
            {skills.map((skill , index) => (
                <motion.div key={index} initial = {{opacity:0 , y :50}} whileInView={{opacity: 1 , y : 0}} transition = {{duration: 0.8}} viewport={{once : true}} className='flex flex-col justify-center items-start space-y-1'>
            <h2 className='text-sm font-semibold uppercase flex justify-between items-center w-full'>
                <span>{skill.title}</span>
                <span>{skill.level} %</span>
            </h2>
            <ProgressBar value={skill.level}/>
        </motion.div>
            ))}
        </div>
        <div className='p-3 space-y-3'>
            <h2 className='text-left text-sm uppercase text-gray-400 w-full flex justify-center items-center gap-4 my-5 mb-5'>
                <p className='font-bold'>frontend</p>
                <div className='w-lg h-0.5 bg-gray-400'></div>
            </h2>
            {skills.filter((skill) => skill.stack == "frontend").map((s , index) => (
                <motion.div key={index} initial = {{opacity:0 , y :50}} whileInView={{opacity: 1 , y : 0}} transition = {{duration: 0.8}} viewport={{once : true}} className='flex justify-start items-center gap-3 p-2 ring-1 ring-gray-600 rounded-2xl px-3'>
                    <span>{s.icon}</span>
                    <p className='font-semibold text-sm capitalize'>{s.title}</p>
                </motion.div>
            ))}
        </div>
        <div className='p-3 space-y-3'>
            <h2 className='text-left text-sm uppercase text-gray-400 w-full flex justify-center items-center gap-4 my-5 mb-5'>
                <p className='font-bold'>backend</p>
                <div className='w-lg h-0.5 bg-gray-400'></div>
            </h2>
            {skills.filter((skill) => skill.stack == "backend").map((s , index) => (
                <motion.div key={index} initial = {{opacity:0 , y :50}} whileInView={{opacity: 1 , y : 0}} transition = {{duration: 0.8}} viewport={{once : true}} className='flex justify-start items-center gap-3 p-2 ring-1 ring-gray-600 rounded-2xl px-3'>
                    <span>{s.icon}</span>
                    <p className='font-semibold text-sm capitalize'>{s.title}</p>
                </motion.div>
            ))}
        </div>
        <div className='p-3 space-y-3'>
            <h2 className='text-left text-sm uppercase text-gray-400 w-full flex justify-center items-center gap-4 my-5 mb-5'>
                <p className='font-bold'>tools & devOps</p>
                <div className='w-sm h-0.5 bg-gray-400'></div>
            </h2>
            {tools.map((tool, index) => (
                <motion.div key={index} initial = {{opacity:0 , y :50}} whileInView={{opacity: 1 , y : 0}} transition = {{duration: 0.8}} viewport={{once : true}} className='flex justify-start items-center gap-3 p-2 ring-1 ring-gray-600 rounded-2xl px-3'>
                    <span>{tool.icon}</span>
                    <p className='font-semibold text-sm capitalize'>{tool.name}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Skill