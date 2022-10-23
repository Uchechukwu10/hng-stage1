import React from 'react'

const Button = (props) => {
  return (
    <div className='flex justify-center my-4'>
        <a href={props.url} target='_blank' className='link-btn flex flex-col justify-center items-center font-medium w-10/12 py-3 rounded-lg'>
            <h1 className='text-lg'>{props.title}</h1>
            <p className='text-sm lg:text-md text-neutral-400 px-2 h-12 lg:h-fit'>{props.desc}</p>
        </a>
    </div>
  )
}

export default Button