import React from 'react'

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(window.innerHeight);
  }
  return (
    <div className='contact flex justify-center pt-24 pb-28 px-12'>
      <div className='contact-details'>
        <section className='contact-header w-fit'>
          <h2 className='text-4xl font-semibold my-3'>Contact Me</h2>
          <p className='text-xl my-3'>Hi there, contact me to ask me about anything you have in mind.</p>
        </section>
        <form onSubmit={handleSubmit} className='w-full my-6'>
          <div className='flex py-3 gap-6'>
              <span className='w-1/2'>
                <label htmlFor='first_name' className='label'>First name</label>
                <input type='text' id='first_name' name='first_name' placeholder='Enter your first name' />
              </span>
              <span className='w-1/2'>
                <label htmlFor='last_name' className='label'>Last name</label>
                <input type='text' id='last_name' name='last_name' placeholder='Enter your last name' />
              </span>
          </div>
          <div className='py-3'>
              <label htmlFor='last_name' className='label'>Email</label>
              <input type='email' id='email' name='email' placeholder='yourname@email.com' />
          </div>
          <div className='py-3'>
              <label htmlFor='message' className='label'>Message</label>
              <textarea id='message' name='message' placeholder="Send me a message and I'll reply you as soon as possible..." rows='5' className='w-full'/>
          </div>
          <div className='py-3 flex items-center'>
              <input type='checkbox' id='agreement' className='mr-3'/>
              <label htmlFor='agreement' style={{color: '#475467'}}>You agree to providing your data to Uche who may contact you.</label>
          </div>
          <button id='btn__submit' className='contact-submit text-base font-semibold text-white w-full py-3 my-4' type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact