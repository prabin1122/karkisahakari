import React from 'react'
import LogoImage from './Logo'
import NavBar from './NavBar'

function MainMenu() {
  return (
    <div className='flex justify-between pt-3 pb-3 bg-white'>
        <div className='w-[50%] text-center'>
            <LogoImage/>
        </div>
        <div className='w-[50%] justify-right'>
            <NavBar />
        </div>
    </div>
  )
}

export default MainMenu