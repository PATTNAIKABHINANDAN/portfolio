import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className='flex '>
            <div className='w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2005-present</p>
                    <h2 className='text-4xl font-bold'>Work Experience</h2>
                </div>
                <div className='w-[95%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="SOFTWARE DEVELOPER"
                        subTitle="KFINTECH"
                        result="MAR 2024"
                        desc="Working as a software developer at Kfintech" />
                    {/* <ResumeCard
                        title=""
                        subTitle="DAV Cspur"
                        result="94.8%"
                        desc="" />
                    <ResumeCard
                        title="10th "
                        subTitle="DPS Kalinga"
                        result="92.2%"
                        desc="" /> */}
                </div>
            </div>
            <div className='w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2005-present</p>
                    <h2 className='text-4xl font-bold'>courses</h2>
                </div>
                <div className='w-[95%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Research Intern"
                        subTitle="IIT BOMBAY"
                        result="JAN - APR 2024"
                        desc="Worked on a project to efficiently predict interatomic potential for alloy metals(Cu-Al) using AI/ML algorithms" />
                    <ResumeCard
                        title="Intern"
                        subTitle="Vernacular Medium"
                        result="DEC 2022"
                        desc="Completed internship program at Vernacular Medium using techstack like Reactjs,CSS,MongoDB and nodejs" />
                    <ResumeCard
                        title="Intern"
                        subTitle="PSS Financial Services"
                        result="MAR 2022"
                        desc="Completed remote internship program at PSS Financial Services by developing the official Website of PSS services using - HTML5, CSS3, JS" />

                </div>
            </div>
        </div>
  );
};

export default Experience;