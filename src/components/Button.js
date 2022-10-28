import React from 'react';

const Button = (props) => {
  return (
    <div className='flex justify-center my-4'>
        <a id={props.id} href={props.url} target='_blank' className='link-btn flex flex-col justify-center items-center font-medium w-10/12 py-6 rounded-lg'>
            <h1 className='text-lg font-medium'>{props.title}</h1>
        </a>
    </div>
  )
}

export default Button