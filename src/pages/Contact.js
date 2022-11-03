import React from 'react'

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(window.innerHeight);
  }
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
            <span className='w-fit'>
              <label htmlFor='first_name'>First name</label>
              <input type='text' id='first_name' name='first_name' placeholder='Enter your first name' />
            </span>
            <span className='w-fit'>
              <label htmlFor='last_name'>Last name</label>
              <input type='text' id='last_name' name='last_name' placeholder='Enter your last name' />
            </span>
        </div>
        <div>
            <label htmlFor='last_name'>Email</label>
            <input type='email' id='email' name='email' placeholder='yourname@email.com' />
        </div>
        <div>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' placeholder="Send me a message and I'll reply you as soon as possible..." rows='5' className='w-full'/>
        </div>
        <div>
            <input type='checkbox' id='agreement'/>
            <label htmlFor='agreement'>You agree to providing your data to Uche who may contact you.</label>
        </div>
        <button id='btn__submit' className='btn-submit' type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact