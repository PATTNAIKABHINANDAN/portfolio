import React, { useState } from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {

  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      <Title title='Contact' desc='Connect to me' className="justify-center"/>
      </div>
      <div className='flex pt-5'>
        <div className='w-1/2'>
          <ContactLeft />
        </div>
        <div className='w-1/2'>
          <ContactRight />
        </div>
      </div>

    </section>
  );
}

export default Contact