import React from 'react'
import ResumeCard from './ResumeCard'

const Education = () => {
    return (
        <div className='flex '>
            <div className='w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2005-present</p>
                    <h2 className='text-4xl font-bold'>Eduactional Qualification</h2>
                </div>
                <div className='w-[95%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="B.Tech - Computer Science and Engineering"
                        subTitle="Odisha University of technology and Research"
                        result="9.41 CGPA"
                        desc="" />
                    <ResumeCard
                        title="12th - Science"
                        subTitle="DAV Cspur"
                        result="94.8%"
                        desc="" />
                    <ResumeCard
                        title="10th "
                        subTitle="DPS Kalinga"
                        result="92.2%"
                        desc="" />
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
                        result="JAN 2024 APR 2024"
                        desc="Worked on a project to efficiently predict interatomic potential for alloy metals(Cu-Al) using AI/ML algorithms" />
                    <ResumeCard
                        title="CCNA"
                        subTitle="Cisco certified courses"
                        result="MAY 2023 JULY 2023"
                        desc="Completed Cisco CCNA certified program" />
                    <ResumeCard
                        title="Geo-data sharing and Cyber Security"
                        subTitle="IIRS - Dehradun"
                        result="OCT 2022"
                        desc="Completed online course on the topic Geo-data sharing and Cyber Security" />

                </div>
            </div>
        </div>
    )
}

export default Education