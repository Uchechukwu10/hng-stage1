import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <div className='flex justify-center my-4'>
      {props.internal ? 
      <Link id={props.id} to={props.url} className='link-btn flex flex-col justify-center items-center font-medium w-10/12 py-6 rounded-lg'>
        <h1 className='text-lg'>{props.title}</h1>
      </Link> :
      <a id={props.id} href={props.url} target='_blank' rel="noreferrer" className='link-btn flex flex-col justify-center items-center font-medium w-10/12 py-6 rounded-lg'>
            <h1 className='text-lg'>{props.title}</h1>
      </a>
      }
    </div>
  )
}

export default Button