import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <div className='w-[50%]'>
          <ul className='flex justify-between m-auto mr-[-200px] mt-3' >
              <li><Link to='/' className='hover:text-[#bcfd4c] '>Home</Link></li>
              <li><Link to='/about' className='hover:text-[#bcfd4c]'>About</Link></li>
              <li><Link to='/services' className='hover:text-[#bcfd4c]'>Our Services</Link></li>
              <li><Link to='/services' className='hover:text-[#bcfd4c]'>Activities</Link></li>
              <li><Link to='/contact' className='hover:text-[#bcfd4c]'>Contact</Link></li>
              
              
          </ul>
      </div>
    </div>
  )
}

export default NavBar