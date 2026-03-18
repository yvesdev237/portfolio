import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const ProjectCard = ({ description , title , image , link}) => {
  return (
    <div className='group relative rounded-2xl h-85 w-full flex flex-col justify-center items-center bg-white overflow-hidden'>
        <img src={image} alt={image} className='h-50 flex-1 object-cover w-full bg-no-repeat '/>
        <div className='flex flex-col space-y-3 justify-center items-start bg-gray-700 p-3'>
            <h2 className='uppercase text-lg font-medium'>
                {title}
            </h2>
            <p className='text-left text-md w-full h-auto'>
                {description}
            </p>
        </div>
            <div className='absolute top-3 right-3 bg-gray-400 rounded-full p-3 transform -rotate-45 cursor-pointer '>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <FaArrowRight className='size-5 text-violet-950'/>
                </a>
            </div>
    </div>
  )
}
