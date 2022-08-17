import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaEnvelope} from 'react-icons/fa'

function TopHeader() {
  return (
    <div className="flex justify-between bg-[#6e6e6e] pl-5 pr-5 " >
        <div className='w-50'>
            <h5 className='font-serif text-white hover:text-black'><Link to='/'>karkisahakari@mail.com</Link></h5>
        </div>
        <div className="flex pt-1 w-[30%] sm:w-[10%] justify-around ">
            <div className='text-white hover:text-black cursor-pointer'>
                <FaFacebook />
            </div>
            <div className="text-white hover:text-black cursor-pointer">
                <FaInstagram/>
            </div>
            <div className="text-white hover:text-black cursor-pointer">
                <FaEnvelope/>
            </div>
            
        </div>
    </div>
  )
}

export default TopHeader