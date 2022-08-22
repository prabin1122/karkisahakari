import React from 'react'
import './form.css'
import ContactImage from '../assets/images/ContactImage.jpg'

function Form() {
  return (
    <div className='flex'>
      <div className=''>
          <div className='pt-20'>
              <h1 className='flex justify-center text-5xl font-serif font-black text-[#bcfd4c]'>Get Connected With Us</h1>
              <div className='flex justify-center m-5'> 
                  <hr className='w-[30%] border-[#bcfd4c] border-4 rounded'/>
              </div>
          </div>
          <div className='flex mt-10 m-10 shadow-3xl'>
          <div className='w-[100%] lg:w-[50%]'>
            <form>
            <div className='flex'>
              <label>First Name
              <input type='text' placeholder='Enter your name'/>
              </label>
              <label>Last Name
              <input type='text' placeholder='Enter your name'/>
              </label>
            </div>
              <label>Email
              <input type='email' placeholder='Enter your email address' className='m-3'/>
              </label>
              <label>Phone
              <input type='number' placeholder='Enter your phone number' className='m-3'/>
              </label>
              <label>Subject
              <input type='message' placeholder='Type your message...' className='m-3'/>
              </label>
              <input type='submit' className='shadow-4xl hover:shadow-none'/>
            </form>
          </div>
          <div className='hidden lg:contents'>
            <img src={ContactImage} className=' flex m-10 h-[400px] lg:w-[50%] shadow-3xl' />
          </div>
          </div>
      </div>
      
      </div>
  )
}

export default Form