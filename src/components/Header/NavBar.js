import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <div className='w-[50%] p-[10px]'>
          <ul className='flex justify-between mr-[-200px]' >
              <li><Link to='/' className='hover:text-green-500'>Home</Link></li>
              <li><Link to='/about' className='hover:text-green-500'>About</Link></li>
              <li><Link to='/services' className='hover:text-green-500'>Our Services</Link></li>
              <li><Link to='/services' className='hover:text-green-500'>Activities</Link></li>
              <li><Link to='/contact' className='hover:text-green-500'>Contact</Link></li>
              
              
          </ul>
      </div>
    </div>
  )
}

export default NavBar