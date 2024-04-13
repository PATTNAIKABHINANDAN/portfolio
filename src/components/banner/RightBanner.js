import React from 'react';
import { bannerImg } from '../../assets/index.js';

const RightBanner = () => {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
      <img 
        className='w-[400px] h-[600px] z-10 mt-[-40%]' // Adjust the negative margin-top here
        src={bannerImg}
        alt="bannerImg"
      />
      {/* <div className='absolute bottom-0 w-[400px] h-[100px] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center'> */}
        {/* Additional content or styling for the overlay */}
      {/* </div> */}
    </div>
  );
}

export default RightBanner;
