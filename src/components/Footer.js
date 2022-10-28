import React from 'react';
import i4g from '../images/i4g-logo.png';
import zuri from '../images/zuri-logo.png';

const Footer = () => {
  return (
    <div className='footer block mt-10 mb-10 px-5 md:px-28 py-12'>
        <div className='flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 md:gap-0 h-16'>
            <img src={zuri} alt='Zuri Logo'/>
            <span className='footer-text'>HNG Internship 9 Frontend Task</span>
            <img src={i4g} alt='I4G Logo'/>
        </div>
    </div>
  )
}

export default Footer