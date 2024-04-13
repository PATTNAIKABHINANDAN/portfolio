import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter";
import LeftBanner from './LeftBanner.js';
import RightBanner from './RightBanner.js';


const Banner = () => {
  const [text] = useTypewriter({
    words:["Professional Coder","Full Stack Developer","ML Enthusiast"],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000
  });

  return (
    <section id='home' className='w-full h-[600px] pt-10 pb-5 
    flex border-b-[1px]
    border-b-black '>
      <LeftBanner/>
      <RightBanner/>
    </section>
  )
}

export default Banner;