import React, { useState } from 'react';
import { validate } from '../assets/validate';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false
  })
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreement: false
  })
  const [valid, setValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false
  })
  const [errMsg, setErrMsg] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleBlur = (e) => {
    const {name} = e.target;
    setTouched(prevValue => {
      return {
        ...prevValue,
        [name]: true
      }
    })
  }
  const handleValidation = (name, value) => {
    const error = validate(name, value);
    setValid(prevValue => {
      return {
        ...prevValue,
        [name]: error.valid
      }
    })
    setErrMsg(prevValue => {
      return {
        ...prevValue,
        [name]: error.message
      }
    })
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
   
    handleValidation(name, value)
    setInfo(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleCheck = (event) => {
    const {name, checked} = event.target;
    setInfo(prevValue => {
      return {
        ...prevValue,
        [name]: checked
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {firstName, lastName, email, message} = valid;
    setTouched(() => {
      return {
        firstName: true,
        lastName: true,
        email: true,
        message: true
      }
    })
    const names = ['firstName', 'lastName', 'email', 'message'];
    const values = [info.firstName, info.lastName, info.email, info.message]
    for (let i=0; i<names.length; i++) {
      handleValidation(names[i], values[i]);
    }
    if (firstName&&lastName&&email&&message) {
      setInfo(() => {
        return {
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          agreement: false
        }
      })
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
    
  }
  return (
    <div className='contact flex justify-center pt-16 md:pt-24 pb-20 md:pb-28 px-4 md:px-12'>
      <div className='contact-details'>
        <section className='contact-header w-fit'>
          <h2 className='text-4xl font-semibold my-3'>Contact Me</h2>
          <p className='text-xl my-3'>Hi there, contact me to ask me about anything you have in mind.</p>
        </section>
        <form onSubmit={handleSubmit} className='w-full my-6  relative'>
          <div className='flex flex-col md:flex-row md:py-3 md:gap-6'>
              <span className='md:w-1/2 py-3 md:py-0'>
                <label htmlFor='first_name' className='label'>First name</label>
                <input type='text' id='first_name' name='firstName' value={info.firstName} placeholder='Enter your first name' onChange={handleChange} onBlur={handleBlur}/>
                <p className={touched.firstName && !valid.firstName ? 'text-red-500 py-2' : 'hidden'}>{errMsg.firstName}</p>
              </span>
              <span className='md:w-1/2 py-3 md:py-0'>
                <label htmlFor='last_name' className='label'>Last name</label>
                <input type='text' id='last_name' name='lastName' value={info.lastName} placeholder='Enter your last name' onChange={handleChange} onBlur={handleBlur}/>
                <p className={touched.lastName && !valid.lastName ? 'text-red-500 py-2' : 'hidden'}>{errMsg.lastName}</p>
              </span>
          </div>
          <div className='py-3'>
              <label htmlFor='last_name' className='label'>Email</label>
              <input type='email' id='email' name='email' value={info.email} placeholder='yourname@email.com' onChange={handleChange} onBlur={handleBlur}/>
              <p className={touched.email && !valid.email ? 'text-red-500 py-2' : 'hidden'}>{errMsg.email}</p>
          </div>
          <div className='py-3'>
              <label htmlFor='message' className='label'>Message</label>
              <textarea id='message' name='message' value={info.message} placeholder="Send me a message and I'll reply you as soon as possible..." rows='5' className='w-full' onChange={handleChange} onBlur={handleBlur}/>
              <p className={touched.message && !valid.message ? 'text-red-500 py-2' : 'hidden'}>{errMsg.message}</p>
          </div>
          <div className='py-3 flex md:items-center'>
              <input type='checkbox' id='agreement' name='agreement' className='mr-3 mt-1 md:mt-0' onChange={handleCheck}/>
              <label htmlFor='agreement' style={{color: '#475467'}}>You agree to providing your data to Uche who may contact you.</label>
          </div>
          <button id='btn__submit' className='contact-submit text-base font-semibold text-white w-full py-3 my-4' type='submit'>Send Message</button>
          <p className={success ? 'success-msg text-sm text-green-500 font-semibold text-center absolute' : 'hidden'}>Message Sent</p>
        </form>
      </div>
    </div>
  )
}

export default Contact