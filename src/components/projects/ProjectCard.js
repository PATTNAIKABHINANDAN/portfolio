import React from 'react'
import { FaGitAlt,FaGlobe } from 'react-icons/fa'

const ProjectCard = ({title,desc,src}) => {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-lg flex flex-col bg-gradient-to-r
    from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:to-gray-900 transition-colors duration-100 '> 
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img className='w-full h-60 object-cover group-hover:scale-110 duration-300
            cursor-pointer'  src={src} alt="image here"/>
        </div>
        <div className='w-full mt-5 flex flex-col gap-4'>
            <div className='flex item-center justify-between'>
                <h3>{title}</h3>
                <div className='flex gap-2'>
                    <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex
                     justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                        <FaGitAlt/>
                     </span>
                     <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex
                     justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                        <FaGlobe/>
                     </span>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-sm tracking-wide mt-3 hover:text-gray-100 hover:bg-blue-400 duration-300'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard