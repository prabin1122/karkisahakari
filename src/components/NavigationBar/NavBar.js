import React from 'react'

function NavBar() {
  return (
    <div className=''>
        <ul className='flex flex-grow justify-around hover:text-green-500'>
            <li>Home</li>
            <li>About Us</li>
            <li className='text-green-500 font-bold'>Contact Us</li>
            <li>Services</li>
        </ul>
    </div>
  )
}

export default NavBar