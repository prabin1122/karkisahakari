import React from 'react'
import '../../assets/css/HeroSection.css'

function Testimonial() {
  return (
    <div className='Testimonial'>
    <div className='bg-[#bcfd4c] bg-opacity-75'>
        <div className='pt-10 mb-10'>
            <h1 className='flex justify-center text-5xl font-serif font-black text-[#6e6e6e]'>What Our Client Have to Say ?</h1>
            <div className='flex justify-center m-5'> 
                <hr className='w-[30%] border-[#6e6e6e] border-4 rounded'/>
            </div>
        </div>
        <div className='p-10 m-auto w-[100%] lg:w-[50%] text-center bg-[#000] bg-opacity-25 border'>
            <h3 className='text-[18px] lg:text-[32px] text-[#fff] font-bold '>" Our goal is to be at the heart of the financial services industry as businesses expand across. "</h3>
            <br/><br/>
            <h4 className='text-[#bcfd4c] font-bold'>CEO</h4>
            <h5 className='text-[#bcfd4c] '>Karki Sarkar</h5>
            <hr className='border-[#fff] w-24 m-auto'/>
        </div>
    </div>
    </div>
  )
}

export default Testimonial