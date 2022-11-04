import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();


  return (
    <div className='error flex items-center'>
        <div className='m-4 mt-24 md:my-24 md:py-24 md:ml-28 md:pl-4'>
            <p className='error-code text-base font-semibold'>404 Error</p>
            <h1 className='text-4xl md:text-5xl font-semibold mt-4 mb-7'>We can't find that page</h1>
            <p className='text-lg text-gray-600'>Sorry, the page you're looking for doesn't exist</p>
            <div className='flex flex-col-reverse md:flex-row my-12 gap-3 md:gap-0'>
                <button className='text-lg btn-back py-3 px-7 flex justify-center items-center mr-3 gap-2 w-full' onClick={() => navigate(-1)}><AiOutlineArrowLeft /><span>Go Back</span></button>
                <button className='text-lg btn-home py-3 px-7 w-full' onClick={() => navigate('/')}>Take me home</button>
            </div>
        </div>
    </div>
  )
}

export default Error