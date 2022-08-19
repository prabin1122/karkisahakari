import React from 'react'
import AboutImage from '../../assets/images/AboutImage.png'

function AboutSection() {
  return (
    <div className=''>
      <div className='pt-20'>
          <h1 className='flex justify-center text-5xl font-serif font-black text-[#bcfd4c]'>About Karki Sahakari</h1>
          <div className='flex justify-center m-5'> 
                <hr className='w-[30%] border-[#bcfd4c] border-4 rounded'/>
            </div>
      </div>
      <div className='flex flex-col-reverse justify-evenly pt-12 lg:flex-row'>
          <div className='w-[100%] m-[20px] p-[20px] text-xl tracking-widest text-white bg-black bg-opacity-25 break-all flex flex-col justify-around  lg:w-[50%]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   </p>
              <btn className='border-2 border-[#bcfd4c] bg-[#bcfd4c] w-[200px] p-2 text-[#6e6e6e] hover:bg-[#6e6e6e] hover:border-[#6e6e6e] hover:text-[#bcfd4c]'>Learn More</btn>
          </div>
          <div>
              <img src={AboutImage} className='h-[400px] p-[20px]'/>
          </div>
      </div>
    </div>
  )
}

export default AboutSection