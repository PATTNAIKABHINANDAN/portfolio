import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter";
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaReact, FaGit, FaGitAlt, FaKaggle, FaFile} from "react-icons/fa"
// import {SiTailwindcss,SiFigma,SiNextdotjs} from "react-icons/si"


const LeftBanner = () => {
  const [text] = useTypewriter({
        words:["Professional Coder","Full Stack Developer","ML Enthusiast"],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000
  });

  return (
    <div className='w-1/2 flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <h4>Welcome To My World</h4>
        <h1 className='text-5xl font-bold text-white'>
          {" "}
          Hi, I'm
          {" "}
          <span className='text-designColor capitalize'>Abhinandan Pattnaik</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=" | "
            cursorColor='="#ff014f'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          Enthusiast IT specialist with 3+ year work experience . Skilled in web development,
          Machine Learning and programming languages like C/C++, Python. Experienced in
          diverse IT fields like ed-tech and Fin-tech. Developed various ML model, as well as
          won hackathons like Smart India Hackathon, 2022. Above average linguistic
          abilities in English, Hindi, Odia.
        </p>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
          <div className='flex gap-4'>
            {/* <span className='bannerIcon'><a href=""><FaFacebookF/></a></span> */}
            <span className="bannerIcon">
              <a href="https://twitter.com/Abhi55394475" target="_blank" rel="noopener noreferrer" className='contact'>
                <div className='position'>
                  <FaTwitter />
                </div>
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/abhinandan-pattnaik-/" target="_blank" rel="noopener noreferrer" className='contact'>
                <div className='position'>
                  <FaLinkedinIn />
                </div>
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>Also available in</h2>
          <div className='flex gap-4'>
            <span className="bannerIcon">
              <a href="https://github.com/PATTNAIKABHINANDAN" target="_blank" rel="noopener noreferrer" className='contact'>
                <div className='position'>
                  <FaGitAlt />
                </div>
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.kaggle.com/abhinandanpattnaik" target="_blank" rel="noopener noreferrer" className='contact'>
                <div className='position'>
                  <FaKaggle />
                </div>
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://drive.google.com/file/d/15gbUyQ7mbRVXWvZzbErHVrr2OsoaTYCw/view?usp=sharing/" target="_blank" rel="noopener noreferrer" className='contact'>
                <div className='position'>
                  <FaFile />
                </div>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner;