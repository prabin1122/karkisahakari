import React from 'react'
import '../../assets/css/HeroSection.css';

function ContactHeroSection() {
  return (
    <div className='ContactHeroSection ' >
    <div className=' flex flex-col justify-around p-10 lg:flex-row lg:p-20 bg-[#bcfd4c] bg-opacity-[50%]'>
        <div className='text-center lg:text-left'>
            <h3 className='text-[32px] text-[#fff] font-bold '>Want to get connected with us ??</h3>
            <p className='text-[18px] text-[#6e6e6e] tex-center font-light'>Please feel free to contact us. We're super happy to talk to you. Feel free to ask anything.</p>
        </div>
        <div className='m-auto p-10'>
            <btn className='text-[#6e6e6e] hover:text-[#bcfd4c] cursor-pointer border-2 pl-10 pr-10 pt-2 pb-2 rounded-xl border-[#6e6e6e] hover:bg-[#6e6e6e]'>Contact Us</btn>
        </div>
    </div>
    </div>
  )
}

export default ContactHeroSection