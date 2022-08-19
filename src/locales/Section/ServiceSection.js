import React from 'react'
import ServiceSectionImage1 from '../../assets/images/ServiceImage1.jpg'
import ServiceSectionImage2 from '../../assets/images/ServiceImage2.jpg'
import ServiceSectionImage3 from '../../assets/images/ServiceImage3.jpg'

function ServiceSection() {
  return (
    <div className='flex flex-col justify-around '>
        <div className='pt-20' >
            <h1 className='flex justify-center text-5xl font-serif font-black text-[#bcfd4c]'>Service We Provide</h1>
            <div className='flex justify-center m-5'> 
                <hr className='w-[30%] border-[#bcfd4c] border-4 rounded'/>
            </div>
        </div>
        <div className='flex justify-around flex-col lg:flex-row'>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-10 hover:bg-[#7f7f7f] hover:cursor-pointer text-center'>
                <img src={ServiceSectionImage1} className='h-[250px] m-10'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 '>Finance Service</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-10 text-center hover:bg-[#7f7f7f] hover:cursor-pointer'>
                <img src={ServiceSectionImage2} className='h-[250px] m-10'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 '>Finance Service</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-10 hover:bg-[#7f7f7f] hover:cursor-pointer text-center'>
                <img src={ServiceSectionImage3} className='h-[250px] m-10'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 '>Finance Service</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
        </div>
        <div className='flex justify-around flex-col lg:flex-row'>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-10 hover:bg-[#7f7f7f] hover:cursor-pointer text-center'>
                <img src={ServiceSectionImage1} className='h-[250px] m-10'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 '>Finance Service</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-10 text-center hover:bg-[#7f7f7f] hover:cursor-pointer'>
                <img src={ServiceSectionImage2} className='h-[250px] m-10'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 '>Finance Service</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-10 hover:bg-[#7f7f7f] hover:cursor-pointer text-center'>
                <img src={ServiceSectionImage3} className='h-[250px] m-10'/>
                <h4 className='text-xl font-bold text-[#bcfd4c] ml-10 mb-2 '>Finance Service</h4>
                <p className='text-2xs text-white ml-10 mb-5 pr-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
        </div>
    </div>
  )
}

export default ServiceSection