import React from 'react'
import { motion } from 'framer-motion'
import { FaFolderOpen, FaEnvelope} from 'react-icons/fa'

const Hero = () => {
  return (
    <motion.section initial = {{opacity : 0 , y : 50}} whileInView={{opacity : 1 , y: 0}} transition={{duration: 2.6}} viewport={{once : true}} className='w-full mt-40 h-96 flex flex-col justify-center items-center p-3'>
        <h1 className='text-4xl font-bold uppercase font-sans bg-linear-to-l from-gradient-400 to-violet-500 bg-clip-text text-transparent'>yves dev 237</h1>
        <h4 className='text-2xl font-light capitalize mt-8'>junior software engineer</h4>
        <span className='text-xl text-gray-500 capitalize'>based in cameroon</span>
        <div className='w-full mt-10 flex flex-col space-y-5 items-center'>
          <button className='w-[80%] p-3 px-7 text-lg rounded-2xl bg-violet-700 backdrop:blur-3xl shadow-sm shadow-gray-50 hover:ring-2 hover:ring-white flex gap-3 justify-start items-center capitalize '>
            <FaFolderOpen className='size-5'/>
            <p className='font-light'>view my work</p>
          </button>
        <button className='w-[80%] p-3 px-7 text-lg rounded-2xl bg-violet-700 backdrop:blur-3xl shadow-sm shadow-gray-50 hover:ring-2 hover:ring-white flex gap-3 justify-start items-center capitalize '>
          <FaEnvelope className='size-5'/>
          <p className='font-light'>get in touch</p>
        </button>
        </div>
    </motion.section>
  )
}

export default Hero