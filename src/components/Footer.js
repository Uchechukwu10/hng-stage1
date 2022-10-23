import React from 'react';
import i4g from '../images/i4g-logo.png';
import zuri from '../images/zuri-logo.png';

const Footer = () => {
  return (
    <div className='hidden md:block mt-10 px-28 py-12'>
        <div className='flex justify-between items-end h-16'>
            <img src={zuri} alt='Zuri Logo'/>
            <span className='footer-text'>HNG Internship 9 Frontend Task</span>
            <img src={i4g} alt='I4G Logo'/>
        </div>
    </div>
  )
}

export default Footer