import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont'>
      <div class="flex justify-center">
        <h3 class="text-sm uppercase font-light text-designColor tracking-wide">{title}</h3>
      </div>
      <div class="flex justify-center">
        <h1 className='text-5xl text-gray-300 font-bold capitalizejustify-center'>{desc}</h1>
      </div>
    </div>
  )
}

export default Title
