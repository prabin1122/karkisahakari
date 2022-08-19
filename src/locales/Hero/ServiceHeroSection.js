import React from 'react'
import { FaAnchor, FaMoneyCheck, FaStopwatch, FaTeamspeak } from 'react-icons/fa'
import '../../assets/css/HeroSection.css'

function ServiceHeroSection() {
  return (
    <div className='ServiceHeroSection ml-[-10px]'>
    <div className='bg-[#bcfd4c] flex flex-col lg:flex-row mt-10 w-[100%]  bg-opacity-70'>
        <div className='flex bg-[#6e6e6e] p-5 m-5'>
            <FaStopwatch className='text-[106px] m-1 text-[#bcfd4c]'/>
            <span>
                <h5 className='text-[#bcfd4c] font-bold text-xl p-2'>On Time Service</h5>
                <p className='text-white break-all p-2'>Transforming distribution and marketing with key capabilities in customer insight and analytics.</p>
            </span>
        </div>
        <div className='flex bg-[#6e6e6e]  p-5 m-5'>
            <FaTeamspeak className='text-[106px] m-1 text-[#bcfd4c]'/>
            <span>
                <h5 className='text-[#bcfd4c] font-bold text-xl p-2'>A Team of Professional</h5>
                <p className='text-white break-all p-2'>Transforming distribution and marketing with key capabilities in customer insight and analytics.</p>
            </span>
        </div>
        <div className='flex bg-[#6e6e6e]  p-5 m-5'>
            <FaMoneyCheck className='text-[106px] m-1 text-[#bcfd4c]'/>
            <span>
                <h5 className='text-[#bcfd4c] font-bold text-xl p-2'>Debit & Credit Service</h5>
                <p className='text-white break-all p-2'>Transforming distribution and marketing with key capabilities in customer insight and analytics.</p>
            </span>
        </div>
        <div className='flex bg-[#6e6e6e]  p-5 m-5'>
            <FaAnchor className='text-[106px] m-1 text-[#bcfd4c]'/>
            <span>
                <h5 className='text-[#bcfd4c] font-bold text-xl p-2'>Analyse your Bysiness</h5>
                <p className='text-white break-all p-2'>Transforming distribution and marketing with key capabilities in customer insight and analytics.</p>
            </span>
        </div>
    </div>
    </div>
  )
}

export default ServiceHeroSection