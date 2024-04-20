import React from 'react'

const Footer = () => {
    return (
        <section
      className="w-full py-5 bg-black border-b-[1px] border-b-black rounded-lg"
    > 
      
      <div className='flex text-red-400'>
        <div className='w-1/2 justify-center items-center text-center'>
                <p>Phone Number: +91 78468 08322</p>
                <p>Email: pattnaikabhinandan001@gmail.com</p>
        </div>
        <div className='w-1/2 justify-center items-center text-center'>
                <p>Address: N4/224 IRC Village,</p>
                <p>Nayapalli,</p>
                <p>Bhubaneswar, Odisha</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <p >All Rights Reserved @ Abhinandan Pattnaik</p>
      </div>
    </section>
    )
}

export default Footer