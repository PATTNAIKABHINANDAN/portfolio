import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne,projectTwo,projectThree } from '../../assets/index.js'

const Project = () => {
  return (
    <section id="projects" className='"w-full py-10 border-b-[1px] border-b-black'>
        <div className='flex justify-center'>
        <Title
        title="VISIT MY PORTFOLIO"
        desc="My Projects"/>
        </div>
       
        <div className='grid grid-cols-3 gap-20 pt-8'>
            <ProjectCard
            title='Mineral Potensial Mapping'
            desc='loremkjas aljdnkb aksjbj askjdbas kjhschs kuhdbas kiuhdbsd'
            src={projectOne}/>
            <ProjectCard
            title='Mineral Potensial Mapping'
            desc='loremkjas aljdnkb aksjbj askjdbas kjhschs kuhdbas kiuhdbsd' src={projectTwo}/>
             <ProjectCard
            title='Mineral Potensial Mapping'
            desc='loremkjas aljdnkb aksjbj askjdbas kjhschs kuhdbas kiuhdbsd' src={projectThree}/>
            <ProjectCard
            title='Mineral Potensial Mapping'
            desc='loremkjas aljdnkb aksjbj askjdbas kjhschs kuhdbas kiuhdbsd' src={projectThree}/>
            <ProjectCard
            title='Mineral Potensial Mapping'
            desc='loremkjas aljdnkb aksjbj askjdbas kjhschs kuhdbas kiuhdbsd' src={projectTwo}/>
            <ProjectCard
            title='Mineral Potensial Mapping'
            desc='loremkjas aljdnkb aksjbj askjdbas kjhschs kuhdbas kiuhdbsd' src={projectOne}/>
        </div>
        {/* <p>Heelloo!!!!!!!</p> */}
    </section>
  )
}

export default Project