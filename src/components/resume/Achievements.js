import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <div className='flex '>
            <div className='w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2005-present</p>
                    <h2 className='text-4xl font-bold'>Work Experience</h2>
                </div>
                <div className='w-[95%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Smart India Hackathon, 2022"
                        subTitle="Conducted by Government of India"
                        result="Winner"
                        desc="Developed a ML model to efficiently predict mineral potential locations using heat maps." />
                    <ResumeCard
                        title="Oracle Hacks,2023"
                        subTitle="Conducted by Oracle"
                        result="Finalist"
                        desc="Developed a model to effectively track Healthcare Equipment to minimize wastage and maximize utilization using Blockchain Teachnology" />
                    <ResumeCard
                        title="Smart Odisha Hackathon, 2023"
                        subTitle="Conducted by Government of Odisha"
                        result="Finalist"
                        desc="Developed a ML model to effectively segregate waste product using image processing technologies" />
                </div>
            </div>
        </div>
  );
};

export default Achievement;