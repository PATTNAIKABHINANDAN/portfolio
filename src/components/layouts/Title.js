import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont'>
      <div className="flex justify-center">
        <h3 className="text-sm uppercase font-light text-designColor tracking-wide">{title}</h3>
      </div>
      <div className="flex justify-center">
        <h1 className='text-5xl text-gray-300 font-bold capitalize justify-center'>{desc}</h1>
      </div>
    </div>
  )
}

export default Title
