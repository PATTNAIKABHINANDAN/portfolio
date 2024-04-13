import React from 'react'
import Title from '../layouts/Title'
import { HiArrowRight } from "react-icons/hi"

const Card = ({ title, desc, icon }) => {
    return (
        <div className='w-full px-12 h-80 rounded-lg  flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-black  hover:to-[#1e2024] transition-colors duration-100 bg-grey'>
            <div className='h-60 overflow-x-hidden overflow-y-hidden'>
                <div className='flex h-60 flex-col gap-3 translate-y-14
        group-hover:translate-y-5 transition-transform duration-500'>
                    <div className='w-full h-8 flex flex-col justify-center' style={{
                            alignItems:"center",
                            justifyContent:"center",
                        }}>
                            {icon ? (<span className='w-100% text-5xl text-designColor justify-center'>{icon}</span>) :
                                (<>
                                    <span className='text-5xl text-designColor'>-</span>
                                </>)
                            }
                    </div>
                    <div className='flex w-60 h-60 flex-col gap-6 pt-5'>
                        <h2 className='text-2xl font-titleFont font-bold
                text-gray-300'>
                            {title}
                        </h2>
                        <p className='base'>{desc}</p>
                        <span className='text-2xl text-designColor'>
                            {/* <HiArrowRight/> */}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card