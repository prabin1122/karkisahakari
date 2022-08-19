import React from 'react'
import ServiceSectionImage1 from '../../assets/images/ServiceImage1.jpg'
import ServiceSectionImage2 from '../../assets/images/ServiceImage2.jpg'
import ServiceSectionImage3 from '../../assets/images/ServiceImage3.jpg'

function Work() {
  return (
    <div>
      <div className='pt-20'>
        <h1 className='flex justify-center text-5xl font-serif font-black text-[#bcfd4c]'>Work Comlpeted By Us</h1>
        <div className='flex justify-center m-5'> 
            <hr className='w-[30%] border-[#bcfd4c] border-4 rounded'/>
        </div>
      </div>
      <div className='flex justify-around flex-col lg:flex-row mt-20'>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all  hover:bg-[#7f7f7f] hover:cursor-pointer text-left'>
                <img src={ServiceSectionImage1} className='h-[250px]'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 mt-5 '>Startup Funding</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                <btn className='text-[#bcfd4c] hover:text-[#bc4d4c] pl-10 mb-10'>Read More</btn>
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all  hover:bg-[#7f7f7f] hover:cursor-pointer text-left'>
                <img src={ServiceSectionImage2} className='h-[250px]'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 mt-5'>Family Finance Advisory</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                <btn className='text-[#bcfd4c] hover:text-[#bc4d4c] pl-10 mb-10'>Read More</btn>
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all  text-left hover:bg-[#7f7f7f] hover:cursor-pointer'>
                <img src={ServiceSectionImage3} className='h-[250px]'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 mt-5'>Loan Advisory</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                <btn className='text-[#bcfd4c] hover:text-[#bc4d4c] pl-10 mb-10'>Read More</btn>
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all  hover:bg-[#7f7f7f] hover:cursor-pointer text-left'>
                <img src={ServiceSectionImage1} className='h-[250px]'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 mt-5'>Merge & Acquisition</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                <btn className='text-[#bcfd4c] hover:text-[#bc4d4c] pl-10 mb-10'>Read More</btn>
            </div>
        </div>
    </div>
  )
}

export default Work