import React from 'react'
import { Link } from "react-scroll";
import {logo} from "../../assets/index"
import {navLinksdata} from "../../constants"


const navbar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
        <div className='h-[80px] w-[80px] border-[5px] rounded-full border-bold'><img src={logo} alt="logo here" className='rounded-full'/></div>
        <div>
            <ul className='flex items-center gap-10'>
                {navLinksdata.map(({_id,title,link})=>(
                    <li
                        className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                        hover:text-designColor duration-300'
                        key={_id}
                    >
                        <Link 
                            acticeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default navbar;
