import React from 'react'
import WorkImage from '../../assets/images/WorkInfo.jpeg'

function WorkHeroSection() {
  return (
    <div className='m-2 shadow-3xl lg:m-28'>
        <div className='flex flex-col justify-around lg:flex-row'>
            <div className='w-[100%] lg:w-[50%]'>
                <img src={WorkImage} className='h-[400px] w-[100%]'/>
            </div>
            <div className='w-[100%] p-10 lg:w-[50%]'>
                <h5 className='text-[18px] text-[#bcfd4c]'>Did you Know ?</h5>
                <h3 className='text-[32px] font-bold text-[#bcfd4c] lg:p-5'>We are Trusted by more than 3,0000 clients</h3>
                <p className='text-[12px] text-[#cdfe5d] opacity-75 break-all mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <btn className='text-[#bcfd4c] hover:text-[#6e6e6e] cursor-pointer border-2 pl-10 pr-10 pt-2 pb-2 rounded-xl border-[#bcfd4c] hover:bg-[#bcfd4c]'>Read More</btn>
            </div>
        </div>
        <div>
            <div className='flex flex-col-reverse justify-around lg:flex-row'>
                <div className='w-[100%] p-10 lg:w-[50%] bg-[#bcfd4c]'>
                    <h3 className='text-[32px] font-bold text-[#6e6e6e] lg:pb-5'>We Are Expert in following things.</h3>
                    <h5 className='text-[18px] text-[#6e6e6e]'>Yet I feel that I never was a greater artist than now.<br/>When, while the lovely valley teems.</h5>
                    <p className='text-[16px] text-[#6e6e6e] opacity-75 break-all mb-10 mt-5'>
                    <ul className='list-dots'>
                        <li>-> Premium services and beyond your expectation</li>
                        <li>-> Get the best support among all venders</li>
                        <li>-> Fully responsive and works great on all major devices</li>
                        <li>-> Tons of admin panel options</li>
                    </ul>
                    </p>
                    <btn className='text-[#6e6e6e] hover:text-[#bcfd4c] cursor-pointer border-2 pl-10 pr-10 pt-2 pb-2 rounded-xl border-[#6e6e6e] hover:bg-[#6e6e6e]'>Read More</btn>
                </div>
                <div className='w-[100%] lg:w-[50%]'>
                    <img src={WorkImage} className='h-[400px] w-[100%]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHeroSection