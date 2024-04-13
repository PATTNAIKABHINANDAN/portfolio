import React from 'react';
import Title from '../layouts/Title.js';
import Card from './Card.js';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGit, FaGitAlt, FaKaggle } from 'react-icons/fa';
import { SiProgress, SiGamedeveloper, SiReact, SiWire, SiResearchgate, SiScikitlearn } from 'react-icons/si';

const Features = () => {
  return (
    <section
      id='features'
      className='w-full h-[850px] py-5 border-b-[1px] border-b-black shadow-100g justify-center'
    >
      {/* Added shadow-lg class for a shadow effect */}
      <div className='justify-center'>
      <Title title='Features' desc='What I Do!!!' className="justify-center"/>
      <div className='grid grid-cols-3 gap-20 pt-5'>
        <Card
          title='Software Development'
          desc='Experienced as a software developer.'
          icon={<SiGamedeveloper />}
        />
        <Card
          title='Data Analyst'
          desc='Data Management and Python developer for Data analysis.'
          icon={<SiProgress />}
        />
        <Card
          title='Frontend Developer'
          desc='Prominent in Reactjs developer'
          icon={<SiReact />}
        />
        <Card
          title='Computer Networking'
          desc='Above average skills in networking and communication.'
          icon={<SiWire />}
        />
        <Card
          title='Research'
          desc='Research Experience at The IIT Bombay.'
          icon={<SiResearchgate />}
        />
        <Card
          title='Science and AI/ML'
          desc='AI/ML enthusiast and significant projects in AI/ML'
          icon={<SiScikitlearn />}
        />
      </div>
      </div>
    </section>
  );
}

export default Features;
